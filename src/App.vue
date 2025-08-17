<template>
  <div id="app" class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-white shadow-md">
      <div class="container mx-auto flex items-center justify-between p-4">
        <!-- Logo -->
        <router-link to="/" class="flex items-center">
          <img src="./assets/sos-logo.png" alt="SOS Logo" class="h-10 w-auto" />
          <span class="ml-2 text-xl font-bold text-red-600">SOS</span>
        </router-link>

        <!-- Desktop Navigation -->
        <nav class="space-x-6 hidden md:block">
          <router-link to="/personal" class="text-gray-700 hover:text-red-600">Personal Info</router-link>
          <router-link to="/medical" class="text-gray-700 hover:text-red-600">Medical History</router-link>
          <router-link to="/insurance" class="text-gray-700 hover:text-red-600">Insurance</router-link>
          <router-link to="/dashboard" class="text-gray-700 hover:text-red-600">Dashboard</router-link>
        </nav>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-gray-700 focus:outline-none" @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isOpen" class="md:hidden bg-white border-t border-gray-200">
        <router-link to="/personal" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Personal Info</router-link>
        <router-link to="/medical" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Medical History</router-link>
        <router-link to="/insurance" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Insurance</router-link>
        <router-link to="/dashboard" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dashboard</router-link>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-100 text-center py-4 border-t">
      <p class="text-gray-600">&copy; 2025 SOS Emergency App</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
