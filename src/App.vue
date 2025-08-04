<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <Navbar />
    <main class="p-6">
      <router-view />
    </main>
    <Footer />
  </div>
</template>