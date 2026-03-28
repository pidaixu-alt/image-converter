<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style>
/* 全局重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #f7fafc;
  color: #333;
  line-height: 1.5;
}

/* 👇 全局统一容器：真正的响应式控制 */
#app {
  width: 100%;
  max-width: 1200px;     /* PC 最大宽度 */
  margin: 0 auto;
  padding: 0 16px;       /* 手机左右留白 */
}

/* 👇 桌面端加宽 */
@media (min-width: 1024px) {
  #app {
    max-width: 1200px;
    padding: 0 24px;
  }
}

/* 👇 超大屏 */
@media (min-width: 1440px) {
  #app {
    max-width: 1400px;
  }
}

button, input, select {
  font-family: inherit;
}
</style>
