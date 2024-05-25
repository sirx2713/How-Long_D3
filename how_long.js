let userName = prompt("Enter your username: ");
if (userName.length < 4){
    alert(userName + " is too short!");
}
else if (userName > 4){
    alert("Welcome " + userName + " to iSAD!");
}
let tweetMessage = prompt("Enter the tweet: ");
wordsRemaining = 280 - tweetMessage.length;

console.log("Hello " + userName + ", you have entered " + tweetMessage.length + " characters and you now have " + wordsRemaining + " characters left!");