function search(word){
    var text = "laba diena su vistiena viso gero ka tu ka vakare";
    var wordsArray = text.split(" ");
    
    return wordsArray.includes(word);
}