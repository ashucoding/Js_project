class Posts {
    constructor() {
        this.posts = [];
        this.adapter = new PostAdapter();
        this.initBindingsAndEventListeners()
        this.fetchAndLoadPosts(); // fill this.posts with posts from the database
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
            .then(posts => { // [{post 1 info}, {post 2 info}, {},...]
                posts.forEach(post => this.posts.push(new Post(post)));
            })
            .then(() => {
                this.render();
            })

    }

    // Display the posts that are in this.posts in the HTML
    render() {
        this.postsList.innerHTML = "" // clear list

        this.posts.forEach(post => { // loop through this.posts and renders each to the page
            let postElem = post.render(); // <div> ... </div>

            // Add event listener to delete button 
            postElem.querySelector("#deleteButton").onclick = (e) => {
                this.deletePost(post.id);
            };

            this.postsList.appendChild(postElem); // Adds the div to the html
        });
    }
}