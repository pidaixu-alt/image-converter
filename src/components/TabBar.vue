<template>
  <div class="tab-bar">
    <button
      v-for="tab in tabs"
      :key="tab"
      class="tab"
      :class="{ active: activeTab === tab }"
      @click="$emit('update:activeTab', tab)"
    >
      {{ tab }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  tabs: string[]
  activeTab: string
}>()

defineEmits<{
  'update:activeTab': [tab: string]
}>()
</script>

<style scoped>
.tab-bar {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}

.tab {
  padding: 0.7rem 1.2rem;
  border: none;
  background: none;
  font-size: 1rem;
  cursor: pointer;
}

.tab.active {
  color: #3182ce;
  font-weight: 600;
  border-bottom: 2px solid #3182ce;
}
</style>
