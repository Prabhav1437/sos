<template>
  <div id="app" class="container">
    <header>
      <h1>SOS Emergency Information System</h1>
      <nav> 
        <router-link to="/personal">Personal Info</router-link>
        <router-link to="/medical">Medical History</router-link>
        <router-link to="/insurance">Insurance</router-link>
        <router-link to="/dashboard">Dashboard</router-link>
      </nav>
    </header>

    <!-- Route content loads here -->
    <main>
      <router-view />
    </main>

    <footer>
      <p> 2025 SOS Emergency App</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
/* All styles are now handled in the global style.css for consistency */
</style>
