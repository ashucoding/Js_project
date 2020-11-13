class Post {
    constructor(postJSON) {
        this.id = postJSON.id
        this.body = postJSON.body
        this.commentAdapter = new CommentAdapter();
        this.comments = postJSON.comments;
        this.commentInput = null;
        this.postContainer = document.createElement("div");
    }


    createComment(e) {
        e.preventDefault();
        // console.log('post is being created')
        const commentBody = this.commentInput.value;


        this.commentAdapter.createComment(this.id, commentBody).then(comment => {
            this.comments.push(comment);
            this.commentInput.value = '';
            this.render();
        })
    }

    deleteComment(id) {
        this.adapter.deletePost(id).then(post => {
            this.posts = this.posts.filter(post => post.id != id);
            this.render();
        })
    }


    render() {
        this.postContainer.innerHTML = "";

        let liElem = document.createElement("li");
        let deleteButton = document.createElement("button");
        deleteButton.id = "deleteButton"
        deleteButton.innerText = "Delete";
        liElem.innerText = `${this.id}) ${this.body}`;
        liElem.appendChild(deleteButton);
        let ulElem = document.createElement("ul");
        this.comments.forEach(comment => {
            let liElem = document.createElement("li");
            liElem.innerText = `${comment.body}`;
            ulElem.appendChild(liElem);
        });
        liElem.appendChild(ulElem);

        this.commentInput = document.createElement("input");
        let div = document.createElement("div")
        let createCommentButton = document.createElement("button");
        createCommentButton.onclick = this.createComment.bind(this);
        createCommentButton.innerText = "Comment";
        div.appendChild(this.commentInput);
        div.appendChild(createCommentButton);
        liElem.appendChild(div);
        this.postContainer.appendChild(liElem);

        return this.postContainer;
    }

}