<template>
  <footer class="page-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>About</h3>
        <p>Free online image converter tool for converting between multiple formats with no server upload.</p>
      </div>

      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/privacy">Privacy Policy</RouterLink></li>
          <li><RouterLink to="/terms">Terms of Service</RouterLink></li>
          <li><RouterLink to="/refund">Refund Policy</RouterLink></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Contact</h3>
        <p><a href="mailto:support@imageconverter.best">support@imageconverter.best</a></p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 Online Image Converter. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.page-footer {
  background: #2d3748;
  color: #e2e8f0;
  margin-top: 3rem;
  padding: 2rem 1rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.footer-section p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #cbd5e0;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin: 0.5rem 0;
}

.footer-section a {
  color: #63b3ed;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-section a:hover {
  color: #90cdf4;
  text-decoration: underline;
}

.footer-bottom {
  border-top: 1px solid #4a5568;
  padding-top: 1.5rem;
  text-align: center;
  color: #a0aec0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .footer-section h3 {
    font-size: 1rem;
  }
}
</style>
