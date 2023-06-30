import { useState } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { s } from "./App.style";
import CurrencyPicker from "./components/CurrencyPicker/CurrencyPicker";
import CurrencyDisplay from "./components/CurrencyDisplay/CurrencyDisplay";
import { convertCurrency } from "./services/convertCurrency";

export default function App() {
    const [baseCurrency, setBaseCurrency] = useState(null);
    const [finalCurrency, setFinalCurrency] = useState(null);

    const [convertedCurrency, setConvertedCurrency] = useState(0);
    const [inputValue, setinputValue] = useState("");

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

    function formatCurrency(amount, thousandsSeparator) {
        // Get the locale's thousands separator.
        let localeSeparator = thousandsSeparator || ",";

        // Format the number with a thousands separator.
        let formattedAmount = amount
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, localeSeparator);

        // Return the formatted amount.
        return formattedAmount;
    }

    return (
        <ScrollView
            contentContainerStyle={{ justifyContent: "center", height: "100%" }}
        >
            <View style={s.wrapper}>
                <View style={s.container}>
                    <CurrencyDisplay
                        value={formatCurrency(convertedCurrency)}
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

                    <TouchableOpacity
                        style={s.convert}
                        onPress={checkUserCurrency}
                    >
                        <Text style={s.textConvert}>Convert</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
