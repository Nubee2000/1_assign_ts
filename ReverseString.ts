function reverseString (message:string){
    let nmessage = "";
    
    for (let i = message.length; i > -1; i--){
        let c = message.charAt(i);
        nmessage += c;
    }
    return nmessage;
}

    console.log(reverseString("Hello"));

