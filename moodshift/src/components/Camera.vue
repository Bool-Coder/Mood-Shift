<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

import {
  initializeFaceLandmarker,
  detectFace,
} from "../services/faceLandmaker";

import { analyzeMood } from "../services/moodAnalyzer";

const video = ref(null);

const expression = ref("Loading...");
const confidence = ref(0);

let cameraStream = null;
let animationFrame = null;

async function startCamera() {
  cameraStream = await navigator.mediaDevices.getUserMedia({
    video: {
      width: {
        ideal: 1280,
      },
      height: {
        ideal: 720,
      },
      facingMode: "user",
    },
    audio: false,
  });

  video.value.srcObject = cameraStream;

  await video.value.play();

  detectLoop();
}

function detectLoop() {
  if (!video.value) {
    return;
  }

  if (video.value.readyState < 2) {
    animationFrame = requestAnimationFrame(detectLoop);
    return;
  }

  const timestamp = performance.now();

  const result = detectFace(video.value, timestamp);

  const analysis = analyzeMood(result);

  expression.value = analysis.expression;
  confidence.value = analysis.confidence;

  animationFrame = requestAnimationFrame(detectLoop);
}

async function initialize() {
  try {
    await initializeFaceLandmarker();
    await startCamera();
  } catch (error) {
    console.error("MoodShift camera error:", error);

    expression.value = "Camera error";
  }
}

onMounted(() => {
  initialize();
});

onBeforeUnmount(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }

  if (cameraStream) {
    cameraStream.getTracks().forEach((track) => track.stop());
  }
});
</script>

<template>
  <div class="camera-container">
    <video ref="video" autoplay muted playsinline></video>

    <div class="expression">
      <h2>{{ expression }}</h2>

      <p v-if="confidence > 0">{{ Math.round(confidence * 100) }}%</p>
    </div>
  </div>
</template>

<style scoped>
.camera-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

video {
  width: 640px;
  max-width: 100%;
  border-radius: 16px;
}

.expression {
  text-align: center;
}

.expression h2 {
  margin: 0;
}

.expression p {
  margin: 5px 0;
}
</style>
