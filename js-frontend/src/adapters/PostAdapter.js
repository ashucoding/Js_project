class PostAdapter {
    constructor() {
        this.baseUrl =
            'http://localhost:3000/api/v1/posts'
    }

    getPosts() {
        return fetch(this.baseUrl).then(res => res.json());
    }

    createPost(value) {
        const post = {
            body: value,
        }
        return fetch(this.baseUrl, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },

                body: JSON.stringify({ post }),

            })
            .then(res => res.json())
    }

    deletePost(id) {
        return fetch(this.baseUrl + `/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
    }
}