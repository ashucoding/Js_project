class Post {
    constructor(postJSON) {
        this.id = postJSON.id
        this.body = postJSON.body
        this.comments = postJSON.comments;
    }

    renderLi() {
        let liElem = document.createElement("li");
        liElem.innerText = `${this.id}) ${this.body}`;
        let ulElem = document.createElement("ul");
        this.comments.forEach(comment => {
            let liElem = document.createElement("li");
            liElem.innerText = `${comment.body}`;
            ulElem.appendChild(liElem);
        });
        liElem.appendChild(ulElem);
        return liElem;
    }

}