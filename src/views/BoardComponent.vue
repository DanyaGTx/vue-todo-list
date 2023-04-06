<template>
  <div class="block">
    <h1 class="text-[30px] font-medium">Board</h1>

    <TodoBoard
      :todos="todos"
      :categoriesList="categoriesList"
      @deletedTodos="deletedTodos"
      @deleteAllTodos="deleteAllTodos"
      @editTodo="editTodo"
      @addNewTodo="addNewTodo"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import TodoBoard from '../views/components/TodoBoard.vue'
import saveTodosToLocalStorage from '../helpers/saveTodoToLocalStorage'
import { TODO } from '../types/types'
const categoriesList = ref([
  {
    value: 'sport',
    title: 'Sport',
    image: 'https://via.placeholder.com/30x30',
    color: '#FF0000',
  },
  {
    value: 'education',
    title: 'Eduction',
    image: 'https://via.placeholder.com/30x30',
    color: '#00FF00',
  },
  {
    value: 'work',
    title: 'Work',
    image: 'https://via.placeholder.com/30x30',
    color: '#FF4500',
  },
])

const todos = ref<TODO[]>([
  {
    id: 0,
    category: 'programming',
    title: 'Complete 2 task',
    description: 'If not today then neve! I must do this',
    creationDate: 'Wed, 05 Apr 2023 11:26:00 GMT',
  },
  {
    id: 1,
    category: 'math',
    title: 'Homework',
    description: 'Bro, dont forget to do your hm task3',
    creationDate: 'Wed, 05 Apr 2023 11:27:00 GMT',
  },
])

const deletedTodos = (deletedTodos: TODO[]) => {
  todos.value = deletedTodos
}

const deleteAllTodos = () => {
  todos.value = []
}

const editTodo = (id: number, todo: TODO) => {
  todos.value[id] = todo
}

const addNewTodo = (newTodo: TODO) => {
  todos.value.unshift(newTodo)
}

watch(
  () => todos.value,
  (newValue) => {
    const stringifyTodos = JSON.stringify(todos.value)
    saveTodosToLocalStorage('todos', stringifyTodos)
  }
)

onMounted(() => {
  const todosFromLocalStorage = localStorage.getItem('todos')

  if (todosFromLocalStorage) {
    todos.value = JSON.parse(todosFromLocalStorage)
  }
})
</script>
