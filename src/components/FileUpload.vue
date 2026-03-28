<template>
  <div
    class="upload-area"
    @click="triggerInput"
    @dragover.prevent
    @drop="handleDrop"
  >
    <input
      ref="fileInput"
      type="file"
      accept="image/*"
      multiple
      style="display: none"
      @change="handleSelect"
    />

    <div v-if="files.length === 0" class="empty">
      Click or drag images here
    </div>

    <div v-else class="file-list">
      <div v-for="(f, i) in files" :key="i" class="file-item">
        {{ f.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  files: File[]
  maxFiles?: number
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:files': [files: File[]]
}>()

const fileInput = ref<HTMLInputElement | null>(null)

const triggerInput = () => {
  fileInput.value?.click()
}

const handleSelect = (e: Event) => {
  const target = e.target as HTMLInputElement
  const fileList = target.files
  if (!fileList) return

  const files = Array.from(fileList).slice(0, props.maxFiles)
  emit('update:files', files)
}

const handleDrop = (e: DragEvent) => {
  e.preventDefault()
  const fileList = e.dataTransfer?.files
  if (!fileList) return

  const files = Array.from(fileList).slice(0, props.maxFiles)
  emit('update:files', files)
}
</script>

<style scoped>
.upload-area {
  border: 2px dashed #ddd;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  min-height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.empty {
  color: #666;
  font-size: 1rem;
}

.file-list {
  width: 100%;
}

.file-item {
  padding: 0.5rem 0;
  color: #333;
}
</style>
