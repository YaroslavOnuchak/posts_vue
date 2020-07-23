import axios from "axios";
export default {
    actions: {
        async axiosUsers(ctx) {
            await axios.get(`https://jsonplaceholder.typicode.com/users`)
                .then(response => {
                    const users = response.data;
                    ctx.commit('upDateUsers', users)
                });
        },
        async axiosUser(ctx, userId=3) {
            let post = await
            axios
                .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .then(response => {
                    const user = response.data;
                    ctx.commit('upDateUser', user)
                });
        }
    },
    mutations: {
        upDateUser(state, user) {
            state.user = user;
        },
        upDateUsers(state, users) {
            state.users = users;
        }
    },
    state: {
        users: [],
        user: {}
    },

    getters: {
        getUsers(state) {
            return state.users;
        },
        getUser(state) {
            return state.user;
        }
    }
}