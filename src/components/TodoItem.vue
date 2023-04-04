<template>
  <div class="w-[310px] h-[200px] mt-[30px] p-[25px] rounded-[20px] bg-white">
    <div class="flex items-center justify-between">
      <div class="flex gap-2">
        <img
          src="../assets/todo/types-icons/green-status.svg"
          alt="green"
        /><span class="text-[14px] text-[#707070]">{{
          props.todo.category
        }}</span>
      </div>
      <div>
        <img
          @click="deleteTodo(props.todo.id)"
          class="cursor-pointer"
          src="../assets/todo/edit.svg"
          alt="edit"
        />
      </div>
    </div>
    <div class="mt-[20px]">
      <h3 class="text-[18px] font-medium">{{ props.todo.title }}</h3>
      <p class="text-[14px] mt-[5px]">
        {{ props.todo.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
type TODO = {
  id: number
  category: string
  title: string
  description: string
}

const props = defineProps<{
  todo: TODO
}>()

const emit = defineEmits<{
  (e: 'deleteTodo', id: number): void
}>()

const deleteTodo = (id: number) => {
  emit('deleteTodo', id)
}
</script>
