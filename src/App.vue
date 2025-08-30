<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Personal Info</router-link>
        <router-link to="/medical">Medical History</router-link>
        <router-link to="/insurance">Insurance</router-link>
        <router-link to="/dashboard">Dashboard</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>