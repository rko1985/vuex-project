import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

const url = 'http://5e307a96576f9d0014d64116.mockapi.io/todos';

const store = new Vuex.Store({
    state: { //where all the data for the store is stored
        todos: []
    },
    mutations: { //mutations are the way to make changes to vuex store
        addTodo(state, payload){
            state.todos = [
                ...state.todos,
                payload
            ]
        },
        addTodos(state, payload){
            state.todos = [
                ...state.todos,
                ...payload
            ]
        }
    },
    getters: { 
        //helps us get vuex computed properties from vuex store
        //basically computed properties for vuex store
        todosCount(state){
            return state.todos.length
        }
    },
    actions: {
        //actions let you perform ajax
        addTodo({state, commit}, payload){
            //make api request to store todo
            // commit todo to vuex store
            Axios.post(url, { //saving to api
                name: payload
            })
                .then(() => {
                    this.commit('addTodo', payload) //commits to vuex store
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
})

export default store;