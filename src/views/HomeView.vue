<template>
  <div class="app-container">
    <NavBar />

    <header class="hero">
      <h1>Online Image Converter</h1>
      <p class="desc">
        A free browser tool to convert your images to JPG, PNG, WebP, AVIF, or BMP format.
        No server upload — all conversion happens instantly in your browser.
      </p >
      <ul class="features">
        <li>Select or drag images — process up to 20 files at once.</li>
        <li>Choose your format and download instantly.</li>
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

    <!-- Pricing Section -->
    <section class="pricing-section">
      <h2>Choose Your Plan</h2>
      <div class="pricing-grid">
        <div class="pricing-card">
          <h3>Free Plan</h3>
          <p class="price">$0</p>
          <ul class="features-list">
            <li>✓ 5 conversions per day</li>
            <li>✓ All 5 formats supported</li>
            <li>✓ Up to 10 files at once</li>
            <li>✗ Batch processing</li>
            <li>✗ Email support</li>
          </ul>
          <button class="btn-plan btn-free">Get Started</button>
        </div>

        <div class="pricing-card">
          <h3>Pro Plan</h3>
          <p class="price">$4.99<span>/month</span></p>
          <ul class="features-list">
            <li>✓ Unlimited conversions</li>
            <li>✓ All 5 formats (JPG, PNG, WebP, AVIF, BMP)</li>
            <li>✓ Up to 20 files at once</li>
            <li>✓ Batch processing</li>
            <li>✓ Priority support</li>
          </ul>
          <button class="btn-plan btn-pro">Subscribe Now</button>
        </div>

        <div class="pricing-card featured">
          <h3>Annual Plan</h3>
          <p class="price">$49.99<span>/year</span></p>
          <ul class="features-list">
            <li>✓ 100 conversions per day</li>
            <li>✓ All 5 formats (JPG, PNG, WebP, AVIF, BMP)</li>
            <li>✓ Up to 20 files at once</li>
            <li>✓ Batch processing</li>
            <li>✓ Priority support</li>
          </ul>
          <button class="btn-plan btn-year">Subscribe Now</button>
        </div>
      </div>
    </section>
  </div>

  <PageFooter />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'
import TabBar from '../components/TabBar.vue'
import FileUpload from '../components/FileUpload.vue'
import FormatSelect from '../components/FormatSelect.vue'
import PageFooter from '../components/PageFooter.vue'
import { convertImages, downloadBlob } from '../utils/imageUtil'

type ImageFormat = 'image/jpeg' | 'image/png' | 'image/webp' | 'image/avif' | 'image/bmp'

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

.pricing-section {
  margin: 3rem 0;
}

.pricing-section h2 {
  text-align: center;
  font-size: 2rem;
  color: #2d3748;
  margin-bottom: 2.5rem;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.pricing-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  text-align: center;
  border: 2px solid #e2e8f0;
  transition: transform 0.2s, box-shadow 0.2s;
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
}

.pricing-card.featured {
  border-color: #3182ce;
  box-shadow: 0 8px 20px rgba(49, 130, 206, 0.15);
  transform: scale(1.02);
}

.pricing-card h3 {
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.pricing-card .price {
  font-size: 2rem;
  color: #3182ce;
  font-weight: bold;
  margin: 1rem 0;
}

.pricing-card .price span {
  font-size: 0.8rem;
  color: #718096;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  text-align: left;
  color: #4a5568;
}

.features-list li {
  padding: 0.6rem 0;
  font-size: 0.95rem;
}

.btn-plan {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 1rem;
}

.btn-free {
  background: #e2e8f0;
  color: #2d3748;
}

.btn-free:hover {
  background: #cbd5e0;
}

.btn-pro {
  background: #3182ce;
  color: white;
}

.btn-pro:hover {
  background: #2b6cb0;
}

.btn-year {
  background: #3182ce;
  color: white;
}

.btn-year:hover {
  background: #2b6cb0;
}

@media (max-width: 768px) {
  .pricing-section h2 {
    font-size: 1.6rem;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .pricing-card.featured {
    transform: scale(1);
  }
}
</style>
