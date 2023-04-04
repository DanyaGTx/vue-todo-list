<template>
  <div class="max-w-[1440px] mt-[10px] m-auto">
    <div class="flex justify-center">
      <SideBar />

      <div
        class="bg-white w-[1000px] shadow-sidebar pl-[15px] pt-[30px] ml-[0px] border-[1px] border-gray-100"
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SideBar from './components/SideBar.vue'

const a = ref(10)
</script>
