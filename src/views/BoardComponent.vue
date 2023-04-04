<template>
  <div class="block">
    <h1 class="text-[30px] font-medium">Board</h1>

    <div
      class="w-[360px] h-[640px] p-[24px] bg-[#EEF2F5] rounded-[18px] mt-[30px]"
    >
      <div class="flex justify-between">
        <h3 class="font-medium text-[16px]">To do</h3>
        <div class="flex gap-4">
          <img
            @click="addTodo"
            class="cursor-pointer"
            src="../assets/todo/add.svg"
            alt="add"
          />
          <img src="../assets/todo/edit.svg" alt="edit" />
        </div>
      </div>
      <TodoItem
        @deleteTodo="deleteTodoFromList"
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
      />

      <AddTodoDialog
        @closeTodoDialog="isTodoDialogOpen = false"
        :dialog="isTodoDialogOpen"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AddTodoDialog from '../components/AddTodoDialog.vue'
import TodoItem from '../components/TodoItem.vue'

type TODO = {
  id: number
  category: string
  title: string
  description: string
}

const isTodoDialogOpen = ref(false)

const todos = ref<TODO[]>([
  {
    id: 0,
    category: 'programming',
    title: 'Complete 2 task',
    description: 'If not today then neve! I must do this',
  },
  {
    id: 1,
    category: 'math',
    title: 'Homework',
    description: 'Bro, dont forget to do your hm task3',
  },
])

const addTodo = () => {
  console.log('ADD')
  isTodoDialogOpen.value = true
}

const deleteTodoFromList = (id: number) => {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}
</script>
