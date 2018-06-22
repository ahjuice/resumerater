class Comment {

    static buildComment(commentObj) {
        const commentLi = document.createElement('li')
        commentLi.classList.add('comment-El')
        const contentP = `<p>${commentObj.content}</p>`
        commentLi.innerHTML = contentP
        return commentLi
    }

    static renderComments(commentArray) {
        const content = document.querySelector("#main-content");
        const commentUl = document.createElement('ul')
        commentArray.forEach(commentObj => {
            let newComment = Comment.buildComment(commentObj)
            commentUl.appendChild(newComment)
        });
        content.append(commentUl);
    }
}
