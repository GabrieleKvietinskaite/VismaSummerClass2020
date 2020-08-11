import '../../assets/js/templates.html.js';
import '../../assets/utils/rest.js';
import '../../assets/utils/helpers.js';
import '../../assets/utils/constants.js';
import '../../models/post.js';

export const getPosts = () => {
    return httpGet(databaseURL + 'posts');
}

export const createPost = async () => {
    const post = createPostFromFetchedData();
    const params = params('POST', post);

    httpPost(databaseURL + 'posts', params);
    window.location.href = '/';
}

export const updatePost = async (id) => {
    const post = createPostFromFetchedData();
    const params = params('PUT', post);

    httpPut(databaseURL + `posts/${id}`, params)
    window.location.href = '/';
}

export const deletePost = async (id) => {
    const params = params('DELETE');

    httpDelete(databaseURL + `posts/${id}`, params)
    window.location.href = '/';
}

export const createPostFromFetchedData = () => {
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    return new Post(author, title, content);
}

export const setValues = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    const author = urlParams.get('author');
    const title = urlParams.get('title');
    const content = urlParams.get('content');

    document.getElementById('author').value = author;
    document.getElementById('title').value = title;
    document.getElementById('content').value = content;

    if (id) {
        document.getElementById('submit').setAttribute('onclick', `updatePost(${id});`);
        document.getElementById('delete-button').style.display = 'inline-block';
        document.getElementById('delete-button').setAttribute('onclick', `deletePost(${id});`);
    }
    else {
        document.getElementById('delete-button').style.display = 'none';
    }
}

// function loadPosts(){} ???
export const loadPosts = () => {
    const data = getPosts();
    const postSection = document.getElementById('questions');
    let postSectionContent = '';

    for (let i = 0; i < data.length; i++) {
        postSectionContent += postHtml(data[i]);
    }

    postSection.insertAdjacentElement('afterbegin', postSectionContent);
}