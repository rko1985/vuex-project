import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todos: []
    },
    mutations: { //mutations are the way to make changes to vuex store
        addTodo(state, payload){
            state.todos = [
                ...state.todos,
                payload
            ]
        }
    },
    getters: { 
        //helps us get vuex computed properties from vuex store
        //basically computed properties for vuex store
        todosCount(state){
            return state.todos.length
        }
    }
})

export default store;