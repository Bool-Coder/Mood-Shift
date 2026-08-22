<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

import { initializeFaceLandmaker, detectFace } from "../services/faceLandmaker";

import { analyzeMood } from "../services/moodAnalyzer";

const emit = defineEmits(["mood-detected"]);

const video = ref(null);

const expression = ref("Loading...");
const confidence = ref(0);

let stream = null;
let animationFrame = null;
let lastDetection = 0;

async function startCamera() {
  console.log("Starting camera...");

  stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });

  console.log("Camera opened.");

  video.value.srcObject = stream;

  await video.value.play();

  detectLoop();
}

async function detectLoop(timestamp) {
  if (!video.value) {
    return;
  }

  animationFrame = requestAnimationFrame(detectLoop);

  /*
   * Don't run face detection on every frame.
   * About 10 detections per second is enough.
   */
  if (timestamp - lastDetection < 100) {
    return;
  }

  lastDetection = timestamp;

  if (video.value.readyState < 2) {
    return;
  }

  try {
    const result = await detectFace(video.value);

    const analysis = analyzeMood(result);

    expression.value = analysis.expression;

    confidence.value = analysis.confidence;

    emit("mood-detected", analysis);
  } catch (error) {
    console.error("Face detection error:", error);
  }
}

async function initialize() {
  try {
    expression.value = "Loading models...";

    await initializeFaceLandmaker();

    expression.value = "Starting camera...";

    await startCamera();
  } catch (error) {
    console.error("MOODSHIFT ERROR:", error);

    expression.value = "Camera error";

    console.error("Error name:", error.name);

    console.error("Error message:", error.message);
  }
}

onMounted(() => {
  initialize();
});

onBeforeUnmount(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }

  if (stream) {
    stream.getTracks().forEach((track) => {
      track.stop();
    });
  }
});
</script>

<template>
  <div class="camera">
    <video ref="video" autoplay muted playsinline></video>

    <div class="detected">
      <h2>
        {{ expression }}
      </h2>

      <p v-if="confidence > 0">{{ Math.round(confidence * 100) }}%</p>
    </div>
  </div>
</template>

<style scoped>
.camera {
  width: 100%;

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

.detected {
  text-align: center;
}

.detected h2 {
  margin: 0;
  text-transform: capitalize;
}

.detected p {
  margin: 5px 0;
}
</style>
