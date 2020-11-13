class CommentAdapter {
    constructor() {
        this.baseUrl =
            'http://localhost:3000/api/v1/comments'
    }


    createComment(postId, commentBody) {
        const comment = {
            post_id: postId,
            body: commentBody,
        }
        return fetch(this.baseUrl, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },

                body: JSON.stringify({ comment: comment }),

            })
            .then(res => res.json())
    }

    // deletePost(id) {
    //     return fetch(this.baseUrl + `/${id}`, {
    //             method: 'DELETE'
    //         })
    //         .then(res => res.json())
    // }
}