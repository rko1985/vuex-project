<template>
    <input v-model="todo" @keyup.enter="saveTodo()" type="text" placeholder="Todo item">
</template>

<script>
export default {
    data: () => ({
        todo: ''
    }),

    methods: {
        saveTodo() {
            //when you hit enter it makes a commit to the vuex store
            this.$store.dispatch('addTodo', this.todo) //dispatching a mutation to the vuex store
            //mutations are commited, actions are dispatched
        }
    }
}
</script>