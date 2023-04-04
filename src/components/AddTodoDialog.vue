<template>
  <div>
    <v-dialog width="800" v-model="props.dialog">
      <v-card v-click-outside="closeOnClickOutside">
        <v-card-title> Dialog 1 </v-card-title>
        <v-card-text> Hello1 </v-card-text>
        <v-card-actions>
          <v-btn color="primary" variant="text" @click="closeTodoDialog">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'closeTodoDialog'): void
}>()

const closeTodoDialog = () => {
  emit('closeTodoDialog')
}

const props = defineProps<{
  dialog: boolean
}>()

const closeOnClickOutside = () => {
  emit('closeTodoDialog')
}
</script>
