<template>
  <div class="app-container">
    <NavBar />
    <div class="policy-container">
      <h1>Privacy Policy</h1>
      <div class="policy-content">
        <section>
          <h2>1. Introduction</h2>
          <p>
            We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect
            your data when you use our Online Image Converter service.
          </p>
        </section>

        <section>
          <h2>2. Data Collection</h2>
          <p>
            <strong>Browser-Based Processing:</strong> All image conversion is performed entirely in your browser. We do not
            upload or store your images on our servers.
          </p>
          <p>
            <strong>Minimal Data Collection:</strong> We may collect:
          </p>
          <ul>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Usage statistics through Google Analytics</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Data</h2>
          <p>We use collected data only for:</p>
          <ul>
            <li>Improving service quality and user experience</li>
            <li>Analyzing website performance</li>
            <li>Responding to your inquiries</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information. Since conversion occurs
            in your browser, images are never transmitted to our servers.
          </p>
        </section>

        <section>
          <h2>5. Third-Party Services</h2>
          <p>We use Google Analytics to understand how users interact with our service. Google collects data according to
            its own Privacy Policy.</p>
        </section>

        <section>
          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to your data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of analytics tracking</li>
          </ul>
        </section>

        <section>
          <h2>7. Contact Us</h2>
          <p>If you have privacy concerns, please contact us at: <strong>support@yourdomian.com</strong></p>
        </section>

        <section>
          <h2>8. Policy Updates</h2>
          <p>We may update this Privacy Policy periodically. Changes take effect upon posting to the website.</p>
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
