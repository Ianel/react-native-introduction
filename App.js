import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { s } from "./App.style";
import CurrencyPicker from "./components/CurrencyPicker/CurrencyPicker";
import CurrencyDisplay from "./components/CurrencyDisplay/CurrencyDisplay";
import { convertCurrency } from "./services/convertCurrency";

export default function App() {
    const [baseCurrency, setBaseCurrency] = useState(null);
    const [finalCurrency, setFinalCurrency] = useState(null);

    const [convertedCurrency, setConvertedCurrency] = useState(0);
    const [inputValue, setinputValue] = useState(0);

    function submitValue() {
        const result = convertCurrency(baseCurrency, finalCurrency, inputValue);
        setConvertedCurrency(result);
    }

    function checkUserCurrency() {
        if (isNaN(inputValue)) {
            return;
        } else {
            submitValue();
        }
    }

    return (
        <View style={s.wrapper}>
            <View style={s.container}>
                <CurrencyDisplay
                    value={convertedCurrency}
                    unit={finalCurrency}
                />

                <View style={s.currencies}>
                    <CurrencyPicker
                        text="From"
                        selectCurrency={setBaseCurrency}
                    />
                    <CurrencyPicker
                        text="To"
                        selectCurrency={setFinalCurrency}
                    />
                </View>

                <TextInput
                    style={s.input}
                    placeholder="0"
                    defaultValue={`${inputValue}`}
                    onChangeText={(text) => setinputValue(text)}
                    keyboardType="numeric"
                />

                <TouchableOpacity style={s.convert} onPress={checkUserCurrency}>
                    <Text style={s.textConvert}>Convert</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
