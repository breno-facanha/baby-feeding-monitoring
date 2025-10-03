import { Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { styles } from "./style"
import { Clock } from "phosphor-react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { useState, useCallback } from "react";
import instance from "../../instance/instance";
import { dataIsoInPtBr } from "../../utils/dataIsoInPtBr";
import { CreateMamadaRequest, CardRegistrerProps, VALIDATION_LIMITS, ERROR_MESSAGES, ErrorMessage } from "../../types";

export function CardRegistrer({ onRecordAdded }: CardRegistrerProps) {
    const currentDate = new Date();
    const [selectedDate, setSelectedDate] = useState(currentDate);
    const [milkAmount, setMilkAmount] = useState<string>('1');
    const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    // Validation
    const isValidMilkAmount = (amount: string): boolean => {
        const numAmount = parseInt(amount);
        return !isNaN(numAmount) && 
               numAmount >= VALIDATION_LIMITS.MIN_MILK_AMOUNT && 
               numAmount <= VALIDATION_LIMITS.MAX_MILK_AMOUNT;
    };

    const getMilkAmountError = (amount: string): string | null => {
        if (!amount.trim()) return ERROR_MESSAGES.REQUIRED_FIELD;
        const numAmount = parseInt(amount);
        if (isNaN(numAmount)) return ERROR_MESSAGES.INVALID_AMOUNT;
        if (numAmount < VALIDATION_LIMITS.MIN_MILK_AMOUNT) return `A quantidade mínima é ${VALIDATION_LIMITS.MIN_MILK_AMOUNT}ml`;
        if (numAmount > VALIDATION_LIMITS.MAX_MILK_AMOUNT) return `A quantidade máxima é ${VALIDATION_LIMITS.MAX_MILK_AMOUNT}ml`;
        return null;
    };

    // Date formatting
    const formatDisplayTime = (date: Date): string => {
        return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    };

    // Event handlers
    const showDatePicker = useCallback(() => {
        setDatePickerVisibility(true);
    }, []);

    const hideDatePicker = useCallback(() => {
        setDatePickerVisibility(false);
    }, []);

    const handleDateConfirm = useCallback((date: Date) => {
        setSelectedDate(date);
        hideDatePicker();
    }, [hideDatePicker]);

    const handleSubmitRecord = useCallback(async () => {
        const milkAmountError = getMilkAmountError(milkAmount);
        
        if (milkAmountError) {
            Alert.alert('Erro', milkAmountError);
            return;
        }

        const feedingData: CreateMamadaRequest = {
            quantidade: parseInt(milkAmount),
            dataHora: dataIsoInPtBr(selectedDate.toISOString()),
            observacao: ''
        };

        setIsSubmitting(true);
        
        try {
            const response = await instance.post('/mamada/includes', feedingData);
            Alert.alert('Sucesso', 'Mamada registrada com sucesso!');
            
            // Reset form
            setMilkAmount('');
            setSelectedDate(new Date());
            
            // Notify parent component
            onRecordAdded?.();
            
        } catch (error: any) {
            console.error('Error adding record:', error);
            let errorMessage: ErrorMessage = ERROR_MESSAGES.GENERIC_ERROR;
            
            if (!error.response) {
                errorMessage = ERROR_MESSAGES.NETWORK_ERROR;
            } else if (error.response.status >= 500) {
                errorMessage = ERROR_MESSAGES.SERVER_ERROR;
            }
            
            Alert.alert('Erro', errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    }, [milkAmount, selectedDate, onRecordAdded]);

    const milkAmountError = getMilkAmountError(milkAmount);
    const hasError = milkAmountError !== null;

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Registrar Nova Mamada</Text>
            
            <Text style={styles.subititulo}>Quantidade de Leite (ml)</Text>
            <TextInput 
                style={[styles.input, hasError && styles.inputError]} 
                placeholder="Ex: 90" 
                keyboardType="numeric"
                maxLength={3}
                onChangeText={setMilkAmount}
                value={milkAmount}
                editable={!isSubmitting}
                accessibilityLabel="Quantidade de leite em mililitros"
            />
            {hasError && (
                <Text style={styles.errorText}>{milkAmountError}</Text>
            )}
            
            <Text style={styles.subititulo}>Horário</Text>
            <TouchableOpacity 
                onPress={showDatePicker} 
                style={styles.datePicker}
                disabled={isSubmitting}
                accessibilityLabel="Selecionar horário"
                accessibilityRole="button"
            >
                <View style={styles.horarioContainer}>
                    <Clock size={24} color="#996DFF" weight="bold"/>
                    <Text style={styles.textHorario}>
                        {formatDisplayTime(selectedDate)}
                    </Text>
                </View>
            </TouchableOpacity>
            
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="datetime"
                locale="pt-BR"
                date={selectedDate}
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
                display="spinner"
            />
         
            <TouchableOpacity 
                style={[styles.button, isSubmitting && styles.buttonDisabled]} 
                onPress={handleSubmitRecord}
                disabled={isSubmitting}
                accessibilityLabel="Adicionar registro de mamada"
                accessibilityRole="button"
            >
                <Text style={styles.textbutton}>
                    {isSubmitting ? 'Adicionando...' : 'Adicionar Registro'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}