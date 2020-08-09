const posts = async() => {
  const response = await fetch('http://localhost:3000/api/posts');
  const json = await response.json();

  listPosts(json);
}

const createPost = async() => {
  let author = document.getElementById('author').value;
  let today = new Date();
  let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  let title = document.getElementById('title').value;
  let content = document.getElementById('content').value;
  let data = { 
    "date": date,
    "author": author,
    "title": title,
    "content": content,
    "tags": [],
    "views": 0,
    "answers": 0,
    "votes": 0
  }

  const other_params = {
    headers : { "content-type" : "application/json; charset=UTF-8"},
    body : JSON.stringify(data),
    method : "POST",
    mode : "cors"
  };
  const response = await fetch('http://localhost:3000/api/posts', other_params);
  const json = await response.json();
  window.location.href = '/';
}

const updatePost = async(id) => {
  let author = document.getElementById('author').value;
  let today = new Date();
  let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  let title = document.getElementById('title').value;
  let content = document.getElementById('content').value;
  let data = { 
    "date": date,
    "author": author,
    "title": title,
    "content": content,
    "tags": [],
    "views": 0,
    "answers": 0,
    "votes": 0
  }

  const other_params = {
    headers : { "content-type" : "application/json; charset=UTF-8"},
    body : JSON.stringify(data),
    method : "PUT",
    mode : "cors"
  };
  const response = await fetch(`http://localhost:3000/api/posts/${id}`, other_params);
  const json = await response.json();
  window.location.href = '/';
}

function setValues(){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');
  const author = urlParams.get('author');
  const title = urlParams.get('title');
  const content = urlParams.get('content');

  document.getElementById('author').value = author;
  document.getElementById('title').value = title;
  document.getElementById('content').value = content;

  if(id){
    document.getElementById('submit').setAttribute('onclick', `updatePost(${id});`);
    document.getElementById('delete-button').style.display = 'inline-block';
    document.getElementById('delete-button').setAttribute('onclick', `deletePost(${id});`);
  }
  else{
    document.getElementById('delete-button').style.display = 'none';
  }
}

const deletePost = async(id) => {
  const other_params = {
    method : "DELETE",
    mode : "cors"
  };
  const response = await fetch(`http://localhost:3000/api/posts/${id}`, other_params);
  const json = await response.json();
  window.location.href = '/';
}

function listPosts(posts){
  let postSection = document.getElementById('questions');
  let postSectionContent = postSection.innerHTML;

  for(let i = 0; i < posts.length; i++){
    let tags = '';

    for(let j = 0; j < posts[i].tags.length; j++){
      tags += '<div>' +
              '<button class="tag">' + posts[i].tags[j] + '</button>' +
              '</div>';
    }
  
    postSectionContent += '<article class="question">' + 
                          '<div class="article-top">' +
                              '<div class="information">' +
                              '<a href="/postForm.html?id=' + posts[i].id + '&author=' + posts[i].author + '&title=' + posts[i].title +'&content=' + posts[i].content + '">' +
                                  '<h3 class="truncate">' +
                                     posts[i].title + 
                                  '</h3></a>' +
                                  '<p class="truncate">' + posts[i].content + '</p>' +
                              '</div>' +
                              '<div id="statistics">' +
                                  '<div class="views">' +
                                      '<span class="circle">' + posts[i].views + '</span>' +
                                      'views' +
                                  '</div>' +
                                  '<div class="answers">' +
                                      '<span class="circle filled">' + posts[i].answers + '</span>'+
                                      'answers' +
                                  '</div>' +
                                  '<div class="votes">' +
                                      '<span class="circle">' + posts[i].votes + '</span>' +
                                      'votes' +
                                  '</div>' +
                              '</div>' +
                          '</div>' +
                          '<div class="article-bottom">' +
                              '<div class="tags">' +
                                  tags +
                              '</div>' +
                              '<div class="user"></div>' +
                          '</div>' +
                      '</article>';
  }

  postSection.innerHTML = postSectionContent;
}