<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <img
        v-bind="props"
        class="cursor-pointer p-[10px]"
        src="../assets/todo/edit.svg"
        alt="edit"
      />
    </template>
    <v-list>
      <v-list-item>
        <v-list-item-title class="cursor-pointer"
          >Complete all todos</v-list-item-title
        >
      </v-list-item>
      <v-list-item>
        <v-list-item-title class="cursor-pointer" @click="deleteAllTodos"
          >Delete all todos</v-list-item-title
        >
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'deleteAllTodos'): void
}>()

const deleteAllTodos = () => {
  emit('deleteAllTodos')
}
</script>
