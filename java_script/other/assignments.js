function alertMessage(message) {
    window.alert(message);
}

function firstCaps (name) {
    firstLetter = name.charAt(0)
    if (name.startsWith(firstLetter.toLowerCase())){
        return name.replace(firstLetter, firstLetter.toUpperCase())
    }
}

function getWelcomeMessage(name) {
    return `Welcome ${firstCaps(name)}!`;
}

function divide(a, b) {
    return a/b
}

function multiply(a, b) {
    return a*b
}

alertMessage(getWelcomeMessage("benjamin"));
console.log(divide(10, 2));
console.log(multiply(5, 3));

// to reduce the ammount of writing and repeated code making loading and assembly easier

function isPalindrome (str) {
    str = str.trim().split("");
    for (let i = 0; i < ((str.length-1)/2); i++) {
        if (str[i] != str.reverse()[i]){
            return false
        }
    }
    return true
}