<template>
  <div id="app">
    <CreateTodo />
    <ul>
      <ListTodos />
    </ul>

    <TodosCount />
  </div>
</template>

<script>
import TodosCount from './components/TodosCount'
import CreateTodo from './components/CreateTodo'
import ListTodos from './components/ListTodos'

export default {
  name: 'app',

  components: {
    TodosCount,
    CreateTodo,
    ListTodos
  },

  mounted(){
    this.$store.dispatch('todos/getTodos')
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input {
  border: 2px solid black;
  padding: 20px;
  font-size: 22px;
}

ul {
  list-style-type: none;
  padding: 0;
  font-size: 26px;
}
</style>
