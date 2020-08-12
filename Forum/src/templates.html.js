export const postHtml = (post) => `
    <article class="question">
        <div class="article-top">
            <div class="information">
                <a href="/postForm.html?id=${post.id}">
                    <h3 class="truncate">${post.title}</h3>
                </a>
                <p class="truncate">${post.content}</p>
            </div>
            <div id="statistics">
                <div class="views">
                    <span class="circle">${post.views}</span>
                    views
                </div>
                <div class="answers">
                    <span class="circle filled">${post.answers}</span>
                    answers
                </div>
                <div class="votes">
                    <span class="circle">${post.votes}</span>
                    votes
                </div>
            </div>
        </div>
        <div class="article-bottom">
            <div class="tags">
                ${tagsHtml(post.tags)}
            </div>
            <div class="user"></div>
        </div>
    </article>
`

export const tagsHtml = (tags) => {
    return tags.map(tag => {
        return `<div>
            <button class="tag">${tag}</button>
        </div>`;
    });
}