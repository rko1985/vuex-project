<template>
    <ul>
        <li v-for="(todoItem, index) in todos" :key="index">
            {{todoItem}}
        </li>
    </ul>
</template>

<script>
export default {
    computed: {
        todos(){
            return this.$store.state.todos.todos //getting todos from vuex store
        }
    }
}
</script>