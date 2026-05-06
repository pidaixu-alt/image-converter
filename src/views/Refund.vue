<template>
  <div class="app-container">
    <NavBar />
    <div class="policy-container">
      <h1>Refund Policy</h1>
      <div class="policy-content">
        <section>
          <h2>1. Overview</h2>
          <p>
            This Refund Policy outlines the terms and conditions for requesting refunds for purchases made through our
            service. Please read this policy carefully.
          </p>
        </section>

        <section>
          <h2>2. Eligible Products</h2>
          <p>
            Refunds are available for premium subscription plans purchased through our service. The Free Plan does not
            qualify for refunds as it is provided at no cost.
          </p>
        </section>

        <section>
          <h2>3. Refund Eligibility</h2>
          <p>You may request a refund if:</p>
          <ul>
            <li>You request the refund within 7 days of your purchase</li>
            <li>You provide a valid reason for the refund request</li>
            <li>The service was not rendered as advertised</li>
            <li>You did not use more than 30% of the subscription benefits</li>
          </ul>
        </section>

        <section>
          <h2>4. Non-Refundable Items</h2>
          <p>The following are not eligible for refunds:</p>
          <ul>
            <li>Subscriptions canceled after 7 days</li>
            <li>Subscriptions where the user has utilized most features</li>
            <li>Duplicate or erroneous payments caused by user action</li>
            <li>Refund requests lacking valid justification</li>
          </ul>
        </section>

        <section>
          <h2>5. How to Request a Refund</h2>
          <p>
            To request a refund, please contact our support team with your order details and reason for the refund
            request. You can reach us at <strong>support@imageconverter.best</strong>. Include:
          </p>
          <ul>
            <li>Your order ID</li>
            <li>Email address associated with your account</li>
            <li>Reason for the refund request</li>
            <li>Any supporting documentation</li>
          </ul>
        </section>

        <section>
          <h2>6. Refund Processing</h2>
          <p>
            Once your refund request is approved, we will process it within 7-10 business days. The refund will be
            credited to your original payment method. Please note that your bank or payment provider may take additional
            time to reflect the refund in your account.
          </p>
        </section>

        <section>
          <h2>7. Subscription Cancellation</h2>
          <p>
            You can cancel your subscription at any time from your account settings. Your access will continue until the
            end of your current billing period. No refunds are issued for partial months.
          </p>
        </section>

        <section>
          <h2>8. Special Circumstances</h2>
          <p>
            In cases of service failure or technical issues, we may, at our discretion, offer alternative remedies such
            as service credits or extended subscription periods instead of cash refunds.
          </p>
        </section>

        <section>
          <h2>9. Dispute Resolution</h2>
          <p>
            If you believe your refund request was denied in error, please contact us with additional information. We
            will review your case and respond within 5 business days.
          </p>
        </section>

        <section>
          <h2>10. Policy Changes</h2>
          <p>
            We reserve the right to modify this Refund Policy at any time. Changes will take effect immediately upon
            posting. Continued use of our service implies acceptance of the updated policy.
          </p>
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
