<script setup>
import { ref } from "vue";

import Camera from "./components/Camera.vue";
import MoodDisplay from "./components/MoodDisplay.vue";

const emotions = ref({
  neutral: 0,
  happy: 0,
  sad: 0,
  angry: 0,
  fearful: 0,
  disgusted: 0,
  surprised: 0,
});

function updateMood(analysis) {
  emotions.value = analysis.emotions;
}
</script>

<template>
  <main>
    <h1>MoodShift</h1>

    <Camera @mood-detected="updateMood" />

    <MoodDisplay :emotions="emotions" />
  </main>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;

  font-family: Arial, sans-serif;
}

main {
  min-height: 100vh;

  padding: 40px 20px;

  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 30px;
}
</style>
