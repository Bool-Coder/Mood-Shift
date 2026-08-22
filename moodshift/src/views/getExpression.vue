<script setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

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

const currentMood = ref("Waiting...");
const confidence = ref(0);

function updateMood(analysis) {
  emotions.value = analysis.emotions;

  currentMood.value = analysis.expression;
  confidence.value = analysis.confidence;
}

function continueToMood() {
  if (currentMood.value === "Waiting..." || currentMood.value === "No face") {
    return;
  }

  router.push(`/${currentMood.value}`);
}
</script>

<template>
  <div class="expression-page">
    <!-- Decorative background -->
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>

    <!-- Header -->
    <header class="header">
      <RouterLink to="/home" class="logo">
        <span class="logo-face"><img src="/logo.png" alt="☺" /></span>
      </RouterLink>
      <RouterLink to="/home" class="back-button"> ← Home </RouterLink>
    </header>

    <!-- Main -->
    <main class="main">
      <!-- Intro -->
      <section class="intro">
        <p class="eyebrow">✦ MOOD DETECTION</p>

        <h1>
          How are you
          <span>feeling?</span>
        </h1>

        <p class="description">
          Look into the camera and let MoodShift discover your current
          expression.
        </p>
      </section>

      <!-- Detection area -->
      <section class="detection">
        <!-- Camera card -->
        <div class="camera-card">
          <div class="camera-header">
            <div class="live">
              <span></span>
              LIVE
            </div>

            <span class="camera-label"> AI Camera </span>
          </div>

          <div class="camera-wrapper">
            <Camera @mood-detected="updateMood" />
          </div>

          <div class="camera-tip">
            <span>💡</span>

            Try making different expressions to see how MoodShift reacts.
          </div>
        </div>

        <!-- Results -->
        <div class="results-card">
          <div class="result-header">
            <div>
              <p class="result-label">CURRENT MOOD</p>

              <h2>
                {{ currentMood }}
              </h2>
            </div>

            <div class="confidence">
              <span> {{ Math.round(confidence * 100) }}% </span>

              <small> confidence </small>
            </div>
          </div>

          <!-- Emotion bars -->
          <MoodDisplay :emotions="emotions" />

          <!-- Continue -->
          <button
            class="continue-button"
            :disabled="
              currentMood === 'Waiting...' || currentMood === 'No face'
            "
            @click="continueToMood"
          >
            <span> Continue </span>

            <span class="arrow"> → </span>
          </button>
        </div>
      </section>

      <!-- Info -->
      <section class="info">
        <div class="info-item">
          <div class="info-icon">🔒</div>

          <div>
            <h3>Your privacy matters</h3>

            <p>Your camera stays on your device. Nothing is uploaded.</p>
          </div>
        </div>

        <div class="info-item">
          <div class="info-icon">⚡</div>

          <div>
            <h3>Real-time detection</h3>

            <p>Your expression is analyzed instantly in your browser.</p>
          </div>
        </div>

        <div class="info-item">
          <div class="info-icon">✦</div>

          <div>
            <h3>Made for you</h3>

            <p>
              Your detected mood will lead you to a personalized experience.
            </p>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-brand">
          <RouterLink to="/home" class="footer-logo">
            <span class="footer-face"> ☺ </span>

            <span> Mood<span>Shift</span> </span>
          </RouterLink>

          <p>Your mood. Your moment. Your shift.</p>
        </div>

        <div class="footer-section">
          <h4>Explore</h4>

          <RouterLink to="/home"> Home </RouterLink>

          <RouterLink to="/get-expression"> Find your mood </RouterLink>
        </div>

        <div class="footer-section">
          <h4>Moods</h4>

          <RouterLink to="/happy"> 😊 Happy </RouterLink>

          <RouterLink to="/sad"> 😢 Sad </RouterLink>

          <RouterLink to="/angry"> 😡 Angry </RouterLink>

          <RouterLink to="/neutral"> 😐 Neutral </RouterLink>
        </div>

        <div class="footer-section">
          <h4>Project</h4>

          <a
            href="https://github.com/Bool-Coder/Mood-Shift"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <RouterLink to="/home"> About </RouterLink>
        </div>
      </div>

      <div class="footer-bottom">
        <span> © 2026 MoodShift </span>

        <span>
          Made with
          <span class="heart">♥</span>
          for better days
        </span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* =================================
   PAGE
================================= */

.expression-page {
  position: relative;

  min-height: 100vh;

  overflow: hidden;

  color: white;

  background: linear-gradient(
    135deg,
    #ffd84d 0%,
    #ff7b54 25%,
    #ef3f8f 48%,
    #793cff 72%,
    #00cfff 100%
  );
}

/* =================================
   BACKGROUND
================================= */

.blob {
  position: absolute;

  border-radius: 50%;

  filter: blur(10px);

  opacity: 0.35;

  pointer-events: none;
}

.blob-1 {
  width: 450px;
  height: 450px;

  top: -180px;
  left: -150px;

  background: #fff176;
}

.blob-2 {
  width: 500px;
  height: 500px;

  right: -200px;
  top: 350px;

  background: #8b5cf6;
}

.blob-3 {
  width: 450px;
  height: 450px;

  left: 30%;
  bottom: -250px;

  background: #00e5ff;
}

/* =================================
   HEADER
================================= */

.header {
  position: relative;
  z-index: 5;

  display: flex;

  justify-content: space-between;
  align-items: center;

  padding: 28px 55px;
}

.logo {
  display: flex;
  align-items: center;

  gap: 12px;

  color: white;

  text-decoration: none;

  font-size: 28px;
  font-weight: 700;

  letter-spacing: -1px;
}

.logo > span:last-child span {
  opacity: 0.7;
}

.logo-face {
  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  font-size: 30px;
}
.logo-face img {
  width: 100px;
  width: 100px;
}
.back-button {
  padding: 11px 20px;

  border: 1px solid rgba(255, 255, 255, 0.3);

  border-radius: 999px;

  color: white;

  background: rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(12px);

  text-decoration: none;

  font-weight: 600;

  transition: 0.25s;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.25);

  transform: translateY(-2px);
}

/* =================================
   MAIN
================================= */

.main {
  position: relative;
  z-index: 2;

  max-width: 1250px;

  margin: 0 auto;

  padding: 45px 25px 70px;
}

/* =================================
   INTRO
================================= */

.intro {
  text-align: center;

  margin-bottom: 45px;
}

.eyebrow {
  margin: 0 0 12px;

  font-size: 14px;

  font-weight: 800;

  letter-spacing: 3px;

  opacity: 0.8;
}

.intro h1 {
  margin: 0;

  font-size: clamp(55px, 8vw, 95px);

  line-height: 0.95;

  font-weight: 900;

  letter-spacing: -4px;

  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.intro h1 span {
  color: #fff59a;
}

.description {
  max-width: 600px;

  margin: 25px auto 0;

  font-size: 18px;

  line-height: 1.6;

  opacity: 0.9;
}

/* =================================
   DETECTION
================================= */

.detection {
  display: grid;

  grid-template-columns:
    1.25fr
    0.75fr;

  gap: 25px;

  align-items: start;
}

/* =================================
   CAMERA CARD
================================= */

.camera-card {
  padding: 22px;

  border: 1px solid rgba(255, 255, 255, 0.3);

  border-radius: 30px;

  background: rgba(255, 255, 255, 0.13);

  backdrop-filter: blur(20px);

  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
}

.camera-header {
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 18px;
}

.live {
  display: flex;

  align-items: center;

  gap: 8px;

  font-size: 12px;

  font-weight: 800;

  letter-spacing: 2px;
}

.live span {
  width: 9px;
  height: 9px;

  border-radius: 50%;

  background: #70ff9b;

  box-shadow: 0 0 12px #70ff9b;

  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.3;
  }
}

.camera-label {
  font-size: 13px;

  opacity: 0.65;
}

/* =================================
   CAMERA
================================= */

.camera-wrapper {
  overflow: hidden;

  border-radius: 20px;

  background: rgba(0, 0, 0, 0.15);
}

/*
 * Camera.vue already styles the video.
 * These styles make it fit nicely
 * inside our card.
 */

.camera-wrapper :deep(.camera) {
  width: 100%;
}

.camera-wrapper :deep(video) {
  width: 100%;

  display: block;

  border-radius: 20px;
}

/* =================================
   CAMERA TIP
================================= */

.camera-tip {
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 8px;

  margin-top: 16px;

  font-size: 13px;

  text-align: center;

  opacity: 0.7;
}

/* =================================
   RESULTS CARD
================================= */

.results-card {
  padding: 28px;

  border: 1px solid rgba(255, 255, 255, 0.3);

  border-radius: 30px;

  background: rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(20px);

  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
}

.result-header {
  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-bottom: 28px;
}

.result-label {
  margin: 0 0 5px;

  font-size: 11px;

  font-weight: 800;

  letter-spacing: 2px;

  opacity: 0.65;
}

.result-header h2 {
  margin: 0;

  font-size: 34px;

  text-transform: capitalize;
}

.confidence {
  display: flex;

  flex-direction: column;

  align-items: flex-end;
}

.confidence span {
  font-size: 28px;

  font-weight: 800;

  color: #fff59a;
}

.confidence small {
  font-size: 11px;

  opacity: 0.65;
}

/* =================================
   MOOD DISPLAY OVERRIDE
================================= */

.results-card :deep(.mood-display) {
  max-width: none;
}

.results-card :deep(.mood-display h2) {
  display: none;
}

.results-card :deep(.emotion) {
  margin-bottom: 13px;
}

.results-card :deep(.background) {
  background: rgba(255, 255, 255, 0.18);
}

.results-card :deep(.bar) {
  background: linear-gradient(90deg, #fff36b, #ff73c6, #8c70ff);
}

/* =================================
   CONTINUE BUTTON
================================= */

.continue-button {
  width: 100%;

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-top: 25px;

  padding: 8px 10px 8px 24px;

  border: none;

  border-radius: 999px;

  color: #ed4b9b;

  background: white;

  font-size: 17px;

  font-weight: 800;

  cursor: pointer;

  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.18);

  transition: transform 0.25s, opacity 0.25s;
}

.continue-button:hover:not(:disabled) {
  transform: translateY(-3px);
}

.continue-button:disabled {
  opacity: 0.45;

  cursor: not-allowed;
}

.arrow {
  width: 48px;
  height: 48px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  color: white;

  background: linear-gradient(135deg, #ff4fa3, #743cff);

  font-size: 25px;
}

/* =================================
   INFO
================================= */

.info {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 20px;

  margin-top: 25px;
}

.info-item {
  display: flex;

  gap: 15px;

  padding: 20px;

  border: 1px solid rgba(255, 255, 255, 0.2);

  border-radius: 20px;

  background: rgba(255, 255, 255, 0.1);

  backdrop-filter: blur(12px);
}

.info-icon {
  font-size: 27px;
}

.info-item h3 {
  margin: 0 0 5px;

  font-size: 15px;
}

.info-item p {
  margin: 0;

  font-size: 13px;

  line-height: 1.5;

  opacity: 0.7;
}

/* =================================
   FOOTER
================================= */

.footer {
  position: relative;
  z-index: 5;

  padding: 55px 55px 25px;

  border-top: 1px solid rgba(255, 255, 255, 0.2);

  background: rgba(0, 0, 0, 0.12);

  backdrop-filter: blur(20px);
}

.footer-content {
  max-width: 1100px;

  margin: 0 auto;

  display: grid;

  grid-template-columns:
    2fr
    1fr
    1fr
    1fr;

  gap: 50px;
}

.footer-brand {
  max-width: 280px;
}

.footer-logo {
  display: flex;

  align-items: center;

  gap: 10px;

  color: white;

  text-decoration: none;

  font-size: 26px;

  font-weight: 800;
}

.footer-logo > span:last-child span {
  opacity: 0.7;
}

.footer-face {
  width: 40px;
  height: 40px;

  display: flex;

  align-items: center;
  justify-content: center;

  border: 2px solid white;

  border-radius: 50%;

  font-size: 26px;
}

.footer-brand p {
  margin-top: 18px;

  line-height: 1.6;

  opacity: 0.75;
}

.footer-section {
  display: flex;

  flex-direction: column;

  gap: 10px;
}

.footer-section h4 {
  margin: 0 0 8px;

  font-size: 16px;
}

.footer-section a {
  color: white;

  text-decoration: none;

  opacity: 0.7;

  transition: opacity 0.2s, transform 0.2s;
}

.footer-section a:hover {
  opacity: 1;

  transform: translateX(4px);
}

.footer-bottom {
  max-width: 1100px;

  margin: 45px auto 0;

  padding-top: 20px;

  border-top: 1px solid rgba(255, 255, 255, 0.15);

  display: flex;

  justify-content: space-between;

  gap: 20px;

  font-size: 14px;

  opacity: 0.65;
}

.heart {
  color: #ffb3d9;

  margin: 0 3px;
}

/* =================================
   MOBILE
================================= */

@media (max-width: 900px) {
  .header {
    padding: 20px;
  }

  .main {
    padding: 35px 20px 60px;
  }

  .detection {
    grid-template-columns: 1fr;
  }

  .results-card {
    width: 100%;
  }

  .info {
    grid-template-columns: 1fr;
  }

  .footer {
    padding: 45px 25px 25px;
  }

  .footer-content {
    grid-template-columns: repeat(2, 1fr);

    gap: 35px 20px;
  }

  .footer-brand {
    grid-column: 1 / -1;

    max-width: none;
  }
}

/* =================================
   SMALL MOBILE
================================= */

@media (max-width: 500px) {
  .header {
    padding: 15px;
  }

  .logo {
    font-size: 20px;
  }

  .logo-face {
    width: 35px;
    height: 35px;

    font-size: 23px;
  }

  .back-button {
    padding: 9px 14px;

    font-size: 13px;
  }

  .main {
    padding: 30px 15px 50px;
  }

  .intro h1 {
    font-size: 52px;

    letter-spacing: -3px;
  }

  .description {
    font-size: 15px;
  }

  .camera-card,
  .results-card {
    padding: 16px;

    border-radius: 22px;
  }

  .result-header h2 {
    font-size: 27px;
  }

  .confidence span {
    font-size: 23px;
  }

  .info-item {
    padding: 16px;
  }

  .footer-content {
    grid-template-columns: 1fr 1fr;
  }

  .footer-bottom {
    flex-direction: column;

    align-items: center;

    text-align: center;
  }
}
</style>
