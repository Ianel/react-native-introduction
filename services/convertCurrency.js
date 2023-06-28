import { CURRENCIES } from "../constants/Currencies";

function convertCurrency(baseCurrency, finalCurrency, inputValue) {
    if (baseCurrency === CURRENCIES.ariary) {
        if (finalCurrency === CURRENCIES.euros) {
            return (inputValue / 4800).toFixed(2);
        } else if (finalCurrency === CURRENCIES.dollars) {
            return (inputValue / 4700).toFixed(2);
        } else {
            return inputValue;
        }
    } else if (baseCurrency === CURRENCIES.euros) {
        if (finalCurrency === CURRENCIES.ariary) {
            return (inputValue * 4800).toFixed(2);
        } else if (finalCurrency === CURRENCIES.dollars) {
            return (inputValue * 1.25).toFixed(2);
        } else {
            return inputValue;
        }
    } else if (baseCurrency === CURRENCIES.dollars) {
        if (finalCurrency === CURRENCIES.euros) {
            return (inputValue / 1.25).toFixed(2);
        } else if (finalCurrency === CURRENCIES.ariary) {
            return (inputValue * 4700).toFixed(2);
        } else {
            return inputValue;
        }
    }
}

export { convertCurrency };
