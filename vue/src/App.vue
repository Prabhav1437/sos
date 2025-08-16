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
      <p>© 2025 SOS Emergency App</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
header {
  margin-bottom: 2rem;
  text-align: center;
}

nav {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

nav a {
  text-decoration: none;
  color: #3b82f6;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background 0.3s ease, color 0.3s ease;
}

nav a.router-link-active {
  background: #3b82f6;
  color: white;
}

main {
  margin-top: 2rem;
}

footer {
  margin-top: 3rem;
  text-align: center;
  font-size: 0.85rem;
  color: #64748b;
}
</style>
