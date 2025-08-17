<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto flex items-center justify-between p-4">
      <router-link to="/" class="flex items-center">
        <img src="@/assets/sos-logo.png" alt="SOS Logo" class="h-10 w-auto" />
        <span class="ml-2 text-xl font-bold">SOS</span>
      </router-link>
      <nav class="space-x-4 hidden md:block">
        <router-link to="/" class="text-gray-700 hover:text-blue-500">Home</router-link>
        <router-link to="/signup" class="text-gray-700 hover:text-blue-500">Sign Up</router-link>
        <router-link to="/qr" class="text-gray-700 hover:text-blue-500">QR Code</router-link>
      </nav>
      <button class="md:hidden text-gray-700 focus:outline-none" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <div v-if="isOpen" class="md:hidden bg-white">
      <router-link to="/" class="block px-4 py-2 text-gray-700">Home</router-link>
      <router-link to="/signup" class="block px-4 py-2 text-gray-700">Sign Up</router-link>
      <router-link to="/qr" class="block px-4 py-2 text-gray-700">QR Code</router-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
/* Scoped styles if needed */
</style>
