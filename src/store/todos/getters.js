export default {
    //helps us get vuex computed properties from vuex store
    //basically computed properties for vuex store
    todosCount(state){
        return state.todos.length
    }
}