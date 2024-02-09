
function writeCards(stringName,eventName) {
    const messages = [];
    for (let i = 0; i < stringName.length; i++) {
        messages[i] = `Thank you, ${stringName[i]}, for the wonderful ${eventName} gift!`;
    }
    return messages;
}

function countDown(initialNumber) {
    while (initialNumber >= 0) {
        console.log(initialNumber);
        initialNumber --;
    }
}