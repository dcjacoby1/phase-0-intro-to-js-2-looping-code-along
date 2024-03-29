//takes an array and string as parameters
function writeCards(stringName,eventName) {
    //creates an empty array
    const messages = [];
    //for loop, goes up to the length of the array
    //shuffles through each index of array with i++
    for (let i = 0; i < stringName.length; i++) {
        //each message says thank you (name) for the wonderdul time
        messages[i] = `Thank you, ${stringName[i]}, for the wonderful ${eventName} gift!`;
    }
    //returns array full of messages
    return messages;
}

function countDown(initialNumber) {
    //coundown from number inputted, while condition is met
    //condition is that number is > 0
    while (initialNumber >= 0) {
        console.log(initialNumber);
        //goes down one number at a time
        initialNumber --;
    }
}