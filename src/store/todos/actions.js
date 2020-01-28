
import Axios from 'axios';
const url = 'http://5e307a96576f9d0014d64116.mockapi.io/todos';

export default {
    //actions let you perform ajax
    addTodo({state, commit}, payload){
        //make api request to store todo
        // commit todo to vuex store
        Axios.post(url, { //saving to api
            name: payload
        })
            .then(() => {
                commit('addTodo', payload) //commits to vuex store
                //mutations are commited, actions are dispatched
            })
    },
    getTodos({commit}){
        Axios.get(url)
            .then(response => {
                commit('addTodos', response.data.map(item => item.name))
            })
    }
}