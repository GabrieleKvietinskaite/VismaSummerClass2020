function search(word){
    if(typeof(word) === "string"){
        var text = "Create a function wordSearch(w) that searches to see whether a word w is present in the given text variable";
        var wordsArray = text.split(" ");
        
        return wordsArray.includes(word);
    }
    else {
        return "Wrong input";
    }
}