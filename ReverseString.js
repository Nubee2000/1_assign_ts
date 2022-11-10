function reverseString(message) {
    var nmessage = "";
    for (var i = message.length; i > -1; i--) {
        var c = message.charAt(i);
        nmessage += c;
    }
    return nmessage;
}
console.log(reverseString("Hello"));
