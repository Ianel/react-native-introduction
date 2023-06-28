import { Text, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { s } from "./CurrencyPicker.style";

function CurrencyPicker({ text, selectCurrency }) {
    const currencies = ["EUR", "MGA", "USD"];

    return (
        <View style={s.container}>
            <Text style={{ fontSize: 16 }}>{text}: </Text>
            <SelectDropdown
                defaultButtonText="Choisissez une devise"
                buttonStyle={{
                    borderWidth: 2,
                    borderColor: "#00b0c7",
                    borderRadius: 40,
                    width: "100%",
                    height: 40,
                }}
                buttonTextStyle={{ color: "#00505a" }}
                dropdownStyle={{}}
                data={currencies}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                    selectCurrency(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item;
                }}
            />
        </View>
    );
}

export default CurrencyPicker;
