<template>
  <section class="flex flex-col items-center justify-center text-center min-h-[80vh] bg-gray-50 px-6">
    <h1 class="text-4xl font-bold mb-4 text-red-600">SOS – Emergency Info System</h1>
    <p class="text-lg text-gray-700 max-w-xl mb-6">
      Store your personal, medical, and insurance details securely. Access them instantly
      with a QR scan when it matters most.
    </p>
    <div class="flex space-x-4">
      <router-link to="/signup" class="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700">
        Get Started
      </router-link>
      <router-link to="/dashboard" class="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-400">
        Go to Dashboard
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "LandingPage"
}
</script>
