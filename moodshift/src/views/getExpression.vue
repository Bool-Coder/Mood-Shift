<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import Camera from "../components/Camera.vue";
import MoodDisplay from "../components/MoodDisplay.vue";

const router = useRouter();

const emotions = ref({
  neutral: 0,
  happy: 0,
  sad: 0,
  angry: 0,
  fearful: 0,
  disgusted: 0,
  surprised: 0,
});

let lastMood = null;
let moodCount = 0;

function updateMood(analysis) {
  emotions.value = analysis.emotions;

  const mood = analysis.expression;

  if (mood === "No face") {
    return;
  }

  /*
   * Require the same expression several times
   * before changing pages.
   *
   * This prevents one bad detection from
   * immediately redirecting the user.
   */
  if (mood === lastMood) {
    moodCount++;
  } else {
    lastMood = mood;
    moodCount = 0;
  }

  if (moodCount >= 20) {
    router.push(`/${mood}`);

    moodCount = 0;
  }
}
</script>

<template>
  <main>
    <h1>How are you feeling?</h1>

    <Camera @mood-detected="updateMood" />

    <MoodDisplay :emotions="emotions" />
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;

  padding: 40px 20px;

  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 30px;
}

h1 {
  margin: 0;
}
</style>
