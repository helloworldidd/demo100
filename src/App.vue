<script setup>
const existe = !!import.meta.env.VITE_SALUDO
</script>

<template>
  <p v-if="existe">La variable existe ✅</p>
  <p v-else>No existe ❌</p>
</template>