export class Post {
    author;
    date;
    title;
    content;
    tags = [];
    views = 0;
    answers = 0;
    votes = 0;

    constructor(author, title, content){
        this.author = author;
        this.title = title;
        this.content = content;

        let today = new Date();
        this.date = today.toLocaleDateString('LT');
    }
}