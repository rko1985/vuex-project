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
            this.$store.commit('addTodo', this.todo) //commiting a mutation to the vuex store
        }
    }
}
</script>