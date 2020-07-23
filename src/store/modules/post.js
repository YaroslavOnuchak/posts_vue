import axios from "axios";
export default {
    actions: {
        axiosPosts(ctx, userId) {
            axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                .then(response => {
                    const posts = response.data;
                    ctx.commit('upDatePosts', posts)
                });
        },
        async axiosInfo(ctx, id) {
            await axios
                .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(response => {
                    const post = response.data;
                    ctx.commit('upDatePostInfo', post)
                });
        },
        async axiosComments(ctx, id) {
            await axios
                .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
                .then(response => {
                    const comments = response.data;
                    ctx.commit('upDateComments', comments)
                });
        }
    },
    mutations: {
        upDatePosts(state, post) {
            state.posts = post;
        },
        upDatePostInfo(state, post) {
            state.post = post;
        },
        upDateComments(state, comments) {
            state.comments = comments;
        },
    },
    state: {
        posts: [],
        post: {},
        comments: []
    },

    getters: {
        allPosts(state) {
            return state.posts;
        },
        postInfo(state) {
            return state.post;
        },
        allComments(state) {
            return state.comments;
        }
    }
}