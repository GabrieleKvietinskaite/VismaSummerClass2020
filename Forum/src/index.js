import { PostManager } from './components/posts/posts.js';

const postManager = new PostManager();

document.addEventListener("DOMContentLoaded", () => {
    postManager.loadPosts();
});

document.addEventListener("DOMContentLoaded", () => {
    postManager.init();
});