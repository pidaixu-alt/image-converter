<template>
  <div class="format-group">
    <label
      v-for="fmt in formats"
      :key="fmt.value"
      :class="['format-item', { active: modelValue === fmt.value }]"
      @click="selectFormat(fmt.value)"
    >
      {{ fmt.label }}
    </label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: 'image/jpeg' | 'image/png' | 'image/webp'
}>()

const emit = defineEmits<{
  'update:modelValue': [value: 'image/jpeg' | 'image/png' | 'image/webp']
}>()

const formats = [
  { label: 'JPG', value: 'image/jpeg' },
  { label: 'PNG', value: 'image/png' },
  { label: 'WEBP', value: 'image/webp' }
]

const selectFormat = (value: 'image/jpeg' | 'image/png' | 'image/webp') => {
  emit('update:modelValue', value)
}
</script>

<style scoped>
.format-group {
  display: flex;
  gap: 10px;
  align-items: center;
}

.format-item {
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
}

.format-item.active {
  background-color: #3182ce;
  color: white;
  border-color: #3182ce;
}

.format-item:hover {
  border-color: #999;
}
</style>
