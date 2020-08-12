import { postHtml } from '../../templates.html.js';
import { httpGet, httpPost, httpPut, httpDelete } from '../../utils/rest.js';
import { setParams } from '../../utils/helpers.js';
import { databaseURL } from '../../utils/constants.js';
import { Post } from '../../utils/models/post.js';

export class PostManager{
    init(){
        const id = this.fetchIdFromUrl();

        this.setSubmitCallBack(id);
    }

    createPost = async () => {
        const post = this.createPostFromFetchedData();
        const params = setParams('POST', post);
    
        httpPost(databaseURL + 'posts', params);
        window.location.href = '/';
    }
    
    updatePost = async (id) => {
        const post = this.createPostFromFetchedData();
        const params = setParams('PUT', post);
    
        httpPut(databaseURL + `posts/${id}`, params)
        window.location.href = '/';
    }
    
    deletePost = async (id) => {
        const params = setParams('DELETE');
    
        httpDelete(databaseURL + `posts/${id}`, params)
        window.location.href = '/';
    }
    
    createPostFromFetchedData = () => {
        const author = document.getElementById('author').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
    
        return new Post(author, title, content);
    }
    
    setValues = async (id) => {
        const postDetails = httpGet(databaseURL + `posts/${id}`);
    
        document.getElementById('author').value = postDetails.author;
        document.getElementById('title').value = postDetails.title;
        document.getElementById('content').value = postDetails.content;
        document.getElementById('delete-button').classList.remove('hidden');
        document.getElementById('delete-button').addEventListener('click', this.deletePost(id));
    }
    
    setSubmitCallBack = (id) => {
        if(id) {
            document.getElementById('submit').addEventListener('click', this.updatePost(id));
            this.setValues();
    
            return;
        }
        document.getElementById('submit').addEventListener('click', this.createPost());
    }

    fetchIdFromUrl = () => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        return urlParams.get('id');
    }
    
    loadPosts = async () => {
        const data = httpGet(databaseURL + 'posts');
        const postSection = document.getElementById('questions');

        let postSectionContent = '';

        for (let i = 0; i < data.length; i++) {
            postSectionContent += postHtml(data[i]);
        }
        postSection.insertAdjacentHTML('afterbegin', postSectionContent);
    }
}