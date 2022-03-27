<template>
    <header>
      <router-link to="/" class="flex-center title">
        <img v-if="!isRoot" src="/back.svg" class="back">
        <div v-else class="noAction"></div>
        <h1>Vue-Sutom</h1>
      </router-link>
      <div class="flex-center" id="headerContent"></div>
    </header>
    <router-view />
</template>

<script lang="ts" setup>
  import { useRoute } from 'vue-router';
  import './css/game.css'
  const route = useRoute()

  const isRoot = $computed(() => route.path == '/')

</script>

<style scoped>
  .title{
    color: black;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }
</style>