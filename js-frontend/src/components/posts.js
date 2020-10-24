class Posts {
    constructor() {
        this.posts = [];
        this.adapter = new PostAdapter();
        this.initBindingsAndEventListeners()
        this.fetchAndLoadPosts();
    }

    initBindingsAndEventListeners() {
        this.postsContainer = document.getElementById('posts-container')
        this.postsList = document.getElementById("posts-list");
        this.newPostBody = document.getElementById('new-post-body')
        this.postForm = document.getElementById('new-post-form')
        this.postForm.addEventListener('submit', this.createPost.bind(this))

    }

    createPost(e) {
        e.preventDefault();
        // console.log('post is being created')
        const value = this.newPostBody.value


        this.adapter.createPost(value).then(post => {
            this.posts.push(new Post(post))
            this.newPostBody.value = ''
            this.render()
        })
    }

    deletePost(id) {
        this.adapter.deletePost(id).then(post => {
            this.posts = this.posts.filter(post => post.id != id);
            this.render();
        })
    }


    fetchAndLoadPosts() {
        this.adapter
            .getPosts()
            .then(posts => {
                posts.forEach(post => this.posts.push(new Post(post)));
            })
            .then(() => {
                this.render();
            })
    }

    render() {
        this.postsList.innerHTML = "" // clear list

        this.posts.forEach(post => {
            let liElem = post.renderLi();
            liElem.onclick = (e) => {
                this.deletePost(post.id);
            }
            this.postsList.appendChild(liElem);
        });
    }
}