import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import Input from "./Input.js";
import Button from "../UI/Button.js";
import {getFormattedDate} from '../../util/date';
import { GlobalStyles } from "../../constants/styles.js";

function HallForm({onCancel, onSubmit}){
    //يمديك تسوي لك وحده بدال الاوبجكت
    const [inputs, setInputs] = useState({
        //نجيب القيم السابقة اذا كان يبي يعدل
        title: {
            value:'',
            //isValid: defaultValues ? true : false, //لو فاضي بيصير فولس
            isValid: true
        },
        price: {
            value: '',
            isValid: true
        },
        guests: {
            value: defaultValues ? defaultValues.description : '',
            //isValid: !!defaultValues, //طريقة ثانية
            isValid: true
        }
    });

    function inputChangedHandler(inputIdentifier, enteredValue){
        setInputs((curInputs) => {
            return{
                ...curInputs,
                [inputIdentifier]: { value: enteredValue, isValid: true }
            };
        });
    }
    
    function submitHandler(){
        const expenseData= {
            amount: +inputs.amount.value, //+ تحوله لرقم
            date: new Date(inputs.date.value),
            description: inputs.description.value
        };

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0 ; // رقم و مب سالب
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date'; //تجي من جفاسكربت جاهزه
        const descriptionIsValid = expenseData.description.trim().length > 0; // مب فاضي

        if(!amountIsValid || !dateIsValid || !descriptionIsValid){
            //Alert.alert('Invaild input', 'Please check your input values');
            setInputs((curInputs) => {
                return{
                    amount: { value: curInputs.amount.value, isValid: amountIsValid},
                    date: { value: curInputs.date.value, isValid: dateIsValid},
                    description: { value: curInputs.description.value, isValid: descriptionIsValid}
                };
            });
            return;
        }

        onSubmit(expenseData);
    }

    const formIsInvalid = 
    !inputs.amount.isValid || 
    !inputs.date.isValid || 
    !inputs.description.isValid;

    return(
        <View style={styles.view1}>
            <Text style={styles.text1}>Your Expense</Text>
            <View style={styles.view2}>
                <Input 
                    style={styles.input1}
                    label="Amonut" 
                    invalid={!inputs.amount.isValid}
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChangedHandler.bind(this, 'amount'),
                        value: inputs.amount.value,
                    }}
                />
                <Input 
                    style={styles.input1}
                    label="Date" 
                    invalid={!inputs.date.isValid}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        MaxLength: 10,
                        onChangeText: inputChangedHandler.bind(this, 'date'),
                        value: inputs.date.value,
                    }}
                />
            </View>
            <Input 
                label="Description" 
                invalid={!inputs.description.isValid}
                textInputConfig={{
                    multiline: true,
                    autoCorrect: false,
                    onChangeText: inputChangedHandler.bind(this, 'description'),
                    value: inputs.description.value,
                }}
            />
            {formIsInvalid && (
                <Text style={styles.errorText}>Invaild input values - Please check your entered data!</Text>
            )}
            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={onCancel}>
                Cancel
                </Button>
                <Button style={styles.button} onPress={submitHandler}>
                {submitButtonLabel}
                </Button>
            </View>
        </View>
    );
}

export default HallForm;

const styles = StyleSheet.create({
    view1:{
        marginTop: 30,
    },
    text1:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center',
    },
    view2:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input1:{
        flex: 1,
    },
    errorText:{
        color: GlobalStyles.colors.error500,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
});