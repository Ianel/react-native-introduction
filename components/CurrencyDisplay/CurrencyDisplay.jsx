import { View, Text } from "react-native";

function CurrencyDisplay({ value, unit }) {
    return (
        <View>
            <Text style={{ fontSize: 40 }}>
                {value} {unit}
            </Text>
        </View>
    );
}

export default CurrencyDisplay;
