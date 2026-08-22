<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function start() {
  router.push("/get-expression");
}
</script>

<template>
  <main>
    <h1>MoodShift</h1>

    <p>Discover your current mood.</p>

    <button @click="start">Find my mood</button>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 20px;
}

button {
  padding: 12px 24px;

  border: none;
  border-radius: 10px;

  cursor: pointer;
}
</style>
