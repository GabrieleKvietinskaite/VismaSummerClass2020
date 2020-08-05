const posts = async() => {
  const response = await fetch('http://localhost:3000/api/posts');
  const json = await response.json();
  console.log(json);
  console.log('a');
  listPosts(json);
}

function listPosts(posts){
  let postSection = document.getElementById("questions");
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
                                  '<h3 class="truncate">' +
                                     posts[i].title + 
                                  '</h3>' +
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
  console.log(postSectionContent);
}

posts();