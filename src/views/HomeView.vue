<template>
  <div class="app-container">
    <NavBar />

    <header class="hero">
      <h1>Online Image Converter</h1>
      <p class="desc">
        A free browser tool to convert HEIC, JPG, PNG, WebP, GIF, BMP, TIFF, AVIF and ICO images to JPG, PNG, WebP format.
        No upload to server — conversion happens in your browser.
      </p >
      <ul class="features">
        <li>Drag or select images — process up to 20 files at once.</li>
        <li>Choose output format, click "Convert", then save each file.</li>
      </ul>
    </header>

    <TabBar :tabs="['Converter']" v-model:activeTab="activeTab" />

    <div class="tool-panel">
      <FileUpload
        v-model:files="files"
        :maxFiles="20"
        accept="image/*"
      />

      <div class="action-bar">
        <FormatSelect v-model="outputFormat" />
        <button
          class="btn-convert"
          :disabled="files.length === 0"
          @click="handleConvert"
        >
          Convert
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'
import TabBar from '../components/TabBar.vue'
import FileUpload from '../components/FileUpload.vue'
import FormatSelect from '../components/FormatSelect.vue'
import { convertImages, downloadBlob } from '../utils/imageUtil'

type ImageFormat = 'image/jpeg' | 'image/png' | 'image/webp'

const activeTab = ref<string>('Converter')
const files = ref<File[]>([])
const outputFormat = ref<ImageFormat>('image/png')

const handleConvert = async () => {
  if (files.value.length === 0) return

  const results = await convertImages(files.value, outputFormat.value)
  results.forEach((blob, i) => {
    const ext = outputFormat.value.split('/')[1]
    downloadBlob(blob, `converted-${i + 1}.${ext}`)
  })
}
</script>

<style scoped>
.app-container {
  width: 100%;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.hero {
  text-align: center;
  margin: 2.5rem 0;
}

.hero h1 {
  font-size: 2.6rem;
  color: #2d3748;
  margin: 0 0 1rem;
}

.desc {
  color: #4a5568;
  line-height: 1.6;
  max-width: 900px;
  margin: 0 auto 1.5rem;
  font-size: 1.1rem;
}

.features {
  text-align: left;
  color: #4a5568;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 1.5rem;
  font-size: 1.05rem;
}

.features li {
  margin: 0.5rem 0;
}

.tool-panel {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  margin-bottom: 2rem;
}

.action-bar {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.btn-convert {
  padding: 0.75rem 2.5rem;
  background: #3182ce;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-convert:disabled {
  background: #cbd5e0;
  cursor: not-allowed;
}

.btn-convert:hover:not(:disabled) {
  background: #2b6cb0;
}
</style>
