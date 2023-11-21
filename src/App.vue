<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app :full-height=true >
    <div class="container">
      <RouterView />
    </div>
  </v-app>
</template>

<style scoped>
.container {
  background-color: #f5f5f5;
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>
