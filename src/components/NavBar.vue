<template>
  <nav class="navbar">
    <!-- 左侧 Logo -->
    <div class="logo">
      <span class="logo-text">ImgConverter</span>
    </div>

    <!-- 右侧语言切换 -->
    <div class="nav-right">
      <select class="lang">
        <option value="en">English</option>
      </select>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #3182ce;
}

.lang {
  padding: 0.4rem 0.6rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  outline: none;
}
</style>
