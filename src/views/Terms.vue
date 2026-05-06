<template>
  <div class="app-container">
    <NavBar />
    <div class="policy-container">
      <h1>Terms of Service</h1>
      <div class="policy-content">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Online Image Converter service ("Service"), you agree to be bound by these Terms of
            Service. If you do not agree to these terms, please do not use this service.
          </p>
        </section>

        <section>
          <h2>2. Service Description</h2>
          <p>
            Our Service is a browser-based image conversion tool that converts various image formats (HEIC, JPG, PNG,
            WebP, GIF, BMP, TIFF, AVIF, ICO) to JPG, PNG, or WebP format. All processing occurs in your web browser.
          </p>
        </section>

        <section>
          <h2>3. Use License</h2>
          <p>
            We grant you a limited, non-exclusive, non-transferable license to use this Service for personal,
            non-commercial purposes. You may not:
          </p>
          <ul>
            <li>Reproduce, distribute, or transmit any content without authorization</li>
            <li>Attempt to access the Service through unauthorized means</li>
            <li>Use the Service for illegal or harmful purposes</li>
            <li>Interfere with the Service's operation or infrastructure</li>
          </ul>
        </section>

        <section>
          <h2>4. User Responsibilities</h2>
          <p>You are responsible for:</p>
          <ul>
            <li>Ensuring you have the right to convert images you upload</li>
            <li>Complying with all applicable laws and regulations</li>
            <li>Not violating intellectual property rights</li>
            <li>Using the Service in good faith</li>
          </ul>
        </section>

        <section>
          <h2>5. Disclaimer of Warranties</h2>
          <p>
            The Service is provided "as is" without warranties of any kind, express or implied. We do not guarantee the
            Service will be error-free, uninterrupted, or suitable for your purposes.
          </p>
        </section>

        <section>
          <h2>6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, or
            consequential damages arising from your use of this Service, including data loss or business interruption.
          </p>
        </section>

        <section>
          <h2>7. Intellectual Property</h2>
          <p>
            All content, code, and design of this Service are protected by intellectual property laws. You may not copy,
            modify, or distribute any part of our Service without permission.
          </p>
        </section>

        <section>
          <h2>8. Modifications to Service</h2>
          <p>
            We reserve the right to modify, suspend, or discontinue the Service at any time without notice. We shall not
            be liable if the Service becomes unavailable.
          </p>
        </section>

        <section>
          <h2>9. Governing Law</h2>
          <p>These Terms of Service are governed by applicable international law. Any disputes shall be resolved through
            mutual agreement.</p>
        </section>

        <section>
          <h2>10. Contact</h2>
          <p>For questions regarding these terms, please contact: <strong>support@yourdomain.com</strong></p>
        </section>

        <section class="last-updated">
          <p>Last Updated: May 6, 2026</p>
        </section>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
import PageFooter from '../components/PageFooter.vue'
</script>

<style scoped>
.app-container {
  width: 100%;
  margin: 0 auto;
}

.policy-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

h1 {
  font-size: 2.2rem;
  color: #2d3748;
  text-align: center;
  margin-bottom: 2rem;
}

.policy-content {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 2.5rem;
  line-height: 1.8;
}

section {
  margin-bottom: 2rem;
}

section h2 {
  font-size: 1.3rem;
  color: #3182ce;
  margin-bottom: 0.8rem;
  margin-top: 0;
}

section p {
  color: #4a5568;
  margin: 0.8rem 0;
  font-size: 1rem;
}

section ul {
  color: #4a5568;
  margin-left: 1.5rem;
  font-size: 1rem;
}

section ul li {
  margin: 0.5rem 0;
}

.last-updated {
  text-align: center;
  border-top: 1px solid #e2e8f0;
  padding-top: 1rem;
  margin-top: 2rem;
  color: #718096;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .policy-container {
    padding: 1rem;
  }

  h1 {
    font-size: 1.8rem;
  }

  .policy-content {
    padding: 1.5rem;
  }

  section h2 {
    font-size: 1.1rem;
  }
}
</style>
