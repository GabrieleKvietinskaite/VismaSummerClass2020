function search(word){
    if(!typeof(word) != "string"){
        return "Wrong input";
    }

    let text = "Create a function wordSearch(w) that searches to see whether a word w is present in the given text variable";
    let wordsArray = text.split(" ");
    
    return wordsArray.includes(word);
}

//Naudoti regex