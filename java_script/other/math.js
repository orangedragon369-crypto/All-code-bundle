function area(radius) {
    return Math.pow(radius, 2)*Math.PI
}

function random_password(length) {
    const info_bank = `AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz,<>.?/"'[{|}]=+-_(*&^%$#@!~)å∫ç∂´ƒ©˙ˆ∆˚¬µ˜øπœ®ß†¨√∑≈¥1234567890¡™£¢∞§¶•ªº–≠“‘…æ≤≥÷ `
    let word = ""
    for (let i = 0; i <= info_bank.length; i++) {
        word += info_bank[Math.floor(Math.random() * info_bank.length)]
    }
    alerrt(word)
}

function sales_tax(amount, tax) {
    return amount += amount * tax
}

function arraySquarred (array) {
    for (let i = 0; i < array.length-1; i++){
        array[i] = array[i]*array[i];
        return array
    }
}

function sumAllValues(arr) {
    let sum = 0;
    for (let i =0; 1 < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}