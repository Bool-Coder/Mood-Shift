<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";

const started = ref(false);
const phase = ref("Ready");
const seconds = ref(0);

let interval = null;

const startExercise = () => {
  if (started.value) return;

  started.value = true;

  let elapsed = 0;

  phase.value = "Breathe in";

  interval = setInterval(() => {
    elapsed++;
    seconds.value = elapsed;

    const cycle = elapsed % 12;

    if (cycle < 4) {
      phase.value = "Breathe in";
    } else if (cycle < 8) {
      phase.value = "Hold";
    } else {
      phase.value = "Breathe out";
    }
  }, 1000);
};

const phaseClass = computed(() => {
  if (!started.value) return "ready";

  if (phase.value === "Breathe in") return "inhale";
  if (phase.value === "Hold") return "hold";

  return "exhale";
});
</script>

<template>
  <div class="breath-page">
    <!-- BACKGROUND -->
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>

    <!-- HEADER -->
    <header class="header">
      <RouterLink to="/home" class="logo">
        <span class="logo-face">
          <img src="/logo.png" alt="MoodShift" />
        </span>
      </RouterLink>

      <RouterLink to="/get-expression" class="header-button">
        Find My Mood
        <span>✦</span>
      </RouterLink>
    </header>

    <!-- MAIN -->
    <main>
      <!-- HERO -->
      <section class="hero">
        <p class="eyebrow">✦ TAKE A MOMENT</p>

        <h1>
          Just
          <span>breathe.</span>
        </h1>

        <p class="hero-text">
          Slow down for a moment. Follow the circle and let your breathing bring
          you back to the present.
        </p>
      </section>

      <!-- BREATHING EXPERIENCE -->
      <section class="exercise">
        <div class="exercise-card">
          <!-- LEFT -->
          <div class="exercise-info">
            <p class="eyebrow">✦ BREATHING EXERCISE</p>

            <h2>
              Find your
              <span>calm.</span>
            </h2>

            <p>
              This simple breathing exercise uses a slow rhythm to help you
              relax and focus on the present moment.
            </p>

            <div class="steps">
              <div class="mini-step">
                <span>01</span>

                <div>
                  <strong>Inhale</strong>
                  <p>Slowly breathe in.</p>
                </div>
              </div>

              <div class="mini-step">
                <span>02</span>

                <div>
                  <strong>Hold</strong>
                  <p>Keep your breath for a moment.</p>
                </div>
              </div>

              <div class="mini-step">
                <span>03</span>

                <div>
                  <strong>Exhale</strong>
                  <p>Slowly let the air out.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- RIGHT -->
          <div class="breathing-area">
            <div class="breathing-visual" :class="phaseClass">
              <div class="orbit orbit-1"></div>

              <div class="orbit orbit-2"></div>

              <div class="orbit orbit-3"></div>

              <div class="breathing-circle">
                <div class="circle-content">
                  <span class="phase">
                    {{ phase }}
                  </span>

                  <span v-if="started" class="timer">
                    {{ seconds }}
                  </span>

                  <span v-else class="timer"> ✦ </span>
                </div>
              </div>
            </div>

            <!-- START BUTTON -->

            <button v-if="!started" class="start-button" @click="startExercise">
              Start
              <span>→</span>
            </button>

            <div v-else class="active-text">
              Follow the circle
              <span>·</span>
              You're doing great
            </div>
          </div>
        </div>
      </section>

      <!-- QUOTE -->
      <section class="quote">
        <div class="quote-line"></div>

        <p>"You don't have to solve everything right now."</p>

        <span> Take it one breath at a time. </span>

        <div class="quote-line"></div>
      </section>

      <!-- HOW IT WORKS -->
      <section class="how">
        <p class="eyebrow">✦ HOW IT WORKS</p>

        <h2>
          Three steps.
          <span>One moment.</span>
        </h2>

        <div class="how-grid">
          <div class="how-card">
            <div class="how-number">01</div>

            <div class="how-icon">🫁</div>

            <h3>Breathe in</h3>

            <p>Slowly fill your lungs and let your body relax.</p>
          </div>

          <div class="how-card">
            <div class="how-number">02</div>

            <div class="how-icon">⏸️</div>

            <h3>Hold</h3>

            <p>Pause for a moment and stay focused on your breath.</p>
          </div>

          <div class="how-card">
            <div class="how-number">03</div>

            <div class="how-icon">🌬️</div>

            <h3>Breathe out</h3>

            <p>Let the air leave your body slowly and comfortably.</p>
          </div>
        </div>
      </section>

      <!-- FINAL CTA -->
      <section class="final-cta">
        <div class="final-glow"></div>

        <p class="eyebrow">✦ MOODSHIFT</p>

        <h2>
          Feel it.
          <span>Then shift it.</span>
        </h2>

        <p>Whenever you need a moment, MoodShift is here.</p>

        <RouterLink to="/get-expression" class="final-button">
          Find My Mood
          <span>→</span>
        </RouterLink>
      </section>
    </main>

    <!-- FOOTER -->
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

          <RouterLink to="/about"> About </RouterLink>
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

          <RouterLink to="/get-expression"> Try MoodShift </RouterLink>
        </div>
      </div>

      <div class="footer-bottom">
        <span> © 2026 MoodShift </span>

        <span> Made by team "Byte Force" </span>

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
/* =========================================
   PAGE
========================================= */

.breath-page {
  position: relative;

  min-height: 100vh;

  overflow: hidden;

  color: white;

  background: linear-gradient(
    135deg,
    #3f7bd9 0%,
    #5366d4 35%,
    #7357c9 65%,
    #9a5bc2 100%
  );
}

/* =========================================
   BLOBS
========================================= */

.blob {
  position: absolute;

  border-radius: 50%;

  filter: blur(25px);

  opacity: 0.25;

  pointer-events: none;
}

.blob-1 {
  width: 500px;
  height: 500px;

  top: -250px;
  left: -200px;

  background: #8edcff;
}

.blob-2 {
  width: 500px;
  height: 500px;

  top: 900px;
  right: -250px;

  background: #b795ff;
}

.blob-3 {
  width: 450px;
  height: 450px;

  bottom: -250px;
  left: -200px;

  background: #65d8e8;
}

/* =========================================
   HEADER
========================================= */

.header {
  position: relative;

  z-index: 5;

  display: flex;

  align-items: center;

  justify-content: space-between;

  padding: 28px 55px;
}

.logo {
  display: flex;

  align-items: center;

  color: white;

  text-decoration: none;
}

.logo-face {
  width: 55px;
  height: 55px;

  display: flex;

  align-items: center;
  justify-content: center;
}

.logo-face img {
  width: 100px;
  height: 100px;

  object-fit: contain;
}

.header-button {
  display: flex;

  align-items: center;

  gap: 10px;

  padding: 12px 22px;

  border: 1px solid rgba(255, 255, 255, 0.3);

  border-radius: 999px;

  color: white;

  background: rgba(255, 255, 255, 0.14);

  backdrop-filter: blur(12px);

  text-decoration: none;

  font-weight: 700;

  transition: 0.25s;
}

.header-button:hover {
  transform: translateY(-2px);

  background: rgba(255, 255, 255, 0.25);
}

/* =========================================
   HERO
========================================= */

.hero {
  position: relative;

  z-index: 2;

  max-width: 900px;

  margin: auto;

  padding: 100px 25px 80px;

  text-align: center;
}

.eyebrow {
  margin: 0 0 18px;

  font-size: 13px;

  font-weight: 800;

  letter-spacing: 3px;

  opacity: 0.75;
}

.hero h1 {
  margin: 0;

  font-size: clamp(65px, 9vw, 110px);

  line-height: 0.95;

  font-weight: 900;

  letter-spacing: -6px;
}

.hero h1 span {
  display: block;

  color: #bfeeff;
}

.hero-text {
  max-width: 650px;

  margin: 35px auto 0;

  font-size: 19px;

  line-height: 1.7;

  opacity: 0.85;
}

/* =========================================
   EXERCISE
========================================= */

.exercise {
  position: relative;

  z-index: 2;

  max-width: 1150px;

  margin: auto;

  padding: 30px 25px 150px;
}

.exercise-card {
  display: grid;

  grid-template-columns: 0.9fr 1.1fr;

  align-items: center;

  gap: 50px;

  padding: 60px;

  border: 1px solid rgba(255, 255, 255, 0.25);

  border-radius: 40px;

  background: rgba(255, 255, 255, 0.12);

  backdrop-filter: blur(20px);

  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.12);
}

.exercise-info h2 {
  margin: 0;

  font-size: clamp(50px, 6vw, 75px);

  line-height: 0.95;

  letter-spacing: -4px;
}

.exercise-info h2 span {
  color: #bfeeff;
}

.exercise-info > p:not(.eyebrow) {
  max-width: 480px;

  margin-top: 25px;

  font-size: 17px;

  line-height: 1.7;

  opacity: 0.8;
}

/* =========================================
   MINI STEPS
========================================= */

.steps {
  display: flex;

  flex-direction: column;

  gap: 18px;

  margin-top: 35px;
}

.mini-step {
  display: flex;

  align-items: center;

  gap: 18px;
}

.mini-step > span {
  width: 40px;
  height: 40px;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.3);

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.1);

  font-size: 11px;

  font-weight: 800;
}

.mini-step strong {
  display: block;

  margin-bottom: 3px;
}

.mini-step p {
  margin: 0;

  font-size: 13px;

  opacity: 0.65;
}

/* =========================================
   BREATHING VISUAL
========================================= */

.breathing-area {
  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;
}

.breathing-visual {
  position: relative;

  width: 450px;
  height: 450px;

  display: flex;

  align-items: center;
  justify-content: center;
}

/* ORBITS */

.orbit {
  position: absolute;

  border: 1px solid rgba(255, 255, 255, 0.25);

  border-radius: 50%;

  transition: 4s ease-in-out;
}

.orbit-1 {
  width: 260px;
  height: 260px;
}

.orbit-2 {
  width: 350px;
  height: 350px;

  opacity: 0.7;
}

.orbit-3 {
  width: 430px;
  height: 430px;

  opacity: 0.4;
}

/* CIRCLE */

.breathing-circle {
  width: 170px;
  height: 170px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(185, 235, 255, 0.4),
    rgba(100, 150, 255, 0.2)
  );

  border: 2px solid rgba(255, 255, 255, 0.5);

  box-shadow: 0 0 80px rgba(130, 210, 255, 0.3);

  transition: transform 4s ease-in-out, box-shadow 4s ease-in-out;
}

.circle-content {
  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 5px;
}

.phase {
  font-size: 13px;

  font-weight: 800;

  letter-spacing: 2px;
}

.timer {
  font-size: 22px;

  opacity: 0.7;
}

/* ANIMATIONS */

.breathing-visual.inhale .breathing-circle {
  transform: scale(1.25);

  box-shadow: 0 0 120px rgba(130, 210, 255, 0.45);
}

.breathing-visual.inhale .orbit-1 {
  transform: scale(1.15);
}

.breathing-visual.inhale .orbit-2 {
  transform: scale(1.08);
}

.breathing-visual.exhale .breathing-circle {
  transform: scale(0.8);

  box-shadow: 0 0 50px rgba(130, 210, 255, 0.2);
}

.breathing-visual.exhale .orbit-1 {
  transform: scale(0.9);
}

.breathing-visual.exhale .orbit-2 {
  transform: scale(0.95);
}

.breathing-visual.hold .breathing-circle {
  transform: scale(1.25);
}

/* =========================================
   START BUTTON
========================================= */

.start-button {
  display: flex;

  align-items: center;

  gap: 15px;

  margin-top: -15px;

  padding: 10px 10px 10px 28px;

  border: none;

  border-radius: 999px;

  color: #554c9b;

  background: white;

  font-size: 18px;

  font-weight: 800;

  cursor: pointer;

  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);

  transition: 0.25s;
}

.start-button span {
  width: 48px;
  height: 48px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  color: white;

  background: linear-gradient(135deg, #5c9eff, #a65cd1);

  font-size: 24px;
}

.start-button:hover {
  transform: translateY(-4px) scale(1.02);
}

.active-text {
  margin-top: -15px;

  font-size: 13px;

  opacity: 0.7;
}

.active-text span {
  margin: 0 8px;

  opacity: 0.5;
}

/* =========================================
   QUOTE
========================================= */

.quote {
  position: relative;

  z-index: 2;

  display: flex;

  flex-direction: column;

  align-items: center;

  text-align: center;

  padding: 20px 25px 150px;
}

.quote-line {
  width: 80px;

  height: 3px;

  margin: 20px;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.4);
}

.quote p {
  max-width: 750px;

  margin: 0;

  font-size: clamp(30px, 5vw, 55px);

  line-height: 1.1;

  letter-spacing: -2px;
}

.quote span {
  margin-top: 20px;

  opacity: 0.65;
}

/* =========================================
   HOW
========================================= */

.how {
  position: relative;

  z-index: 2;

  max-width: 1100px;

  margin: auto;

  padding: 0 25px 150px;

  text-align: center;
}

.how h2 {
  margin: 0 0 60px;

  font-size: clamp(45px, 6vw, 70px);

  line-height: 1;

  letter-spacing: -4px;
}

.how h2 span {
  color: #bfeeff;
}

.how-grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 20px;
}

.how-card {
  padding: 30px;

  text-align: left;

  border: 1px solid rgba(255, 255, 255, 0.22);

  border-radius: 30px;

  background: rgba(255, 255, 255, 0.1);

  backdrop-filter: blur(15px);

  transition: 0.3s;
}

.how-card:hover {
  transform: translateY(-7px);

  background: rgba(255, 255, 255, 0.15);
}

.how-number {
  font-size: 12px;

  font-weight: 800;

  letter-spacing: 2px;

  opacity: 0.5;
}

.how-icon {
  margin-top: 25px;

  font-size: 40px;
}

.how-card h3 {
  margin: 20px 0 10px;

  font-size: 25px;
}

.how-card p {
  margin: 0;

  font-size: 14px;

  line-height: 1.6;

  opacity: 0.7;
}

/* =========================================
   FINAL CTA
========================================= */

.final-cta {
  position: relative;

  z-index: 2;

  max-width: 900px;

  margin: 0 auto 150px;

  padding: 90px 30px;

  text-align: center;

  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.3);

  border-radius: 45px;

  background: rgba(255, 255, 255, 0.12);

  backdrop-filter: blur(20px);
}

.final-glow {
  position: absolute;

  width: 350px;
  height: 350px;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  border-radius: 50%;

  background: #8bcfff;

  filter: blur(100px);

  opacity: 0.2;
}

.final-cta > *:not(.final-glow) {
  position: relative;

  z-index: 2;
}

.final-cta h2 {
  margin: 0;

  font-size: clamp(55px, 7vw, 85px);

  line-height: 1;

  letter-spacing: -5px;
}

.final-cta h2 span {
  color: #bfeeff;
}

.final-cta > p:not(.eyebrow) {
  font-size: 18px;

  opacity: 0.8;
}

.final-button {
  display: inline-flex;

  align-items: center;

  gap: 15px;

  margin-top: 20px;

  padding: 9px 10px 9px 28px;

  border-radius: 999px;

  color: #554c9b;

  background: white;

  text-decoration: none;

  font-weight: 800;

  transition: 0.25s;
}

.final-button span {
  width: 48px;
  height: 48px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  color: white;

  background: linear-gradient(135deg, #5c9eff, #a65cd1);

  font-size: 22px;
}

.final-button:hover {
  transform: translateY(-4px);
}

/* =========================================
   FOOTER
========================================= */

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

  margin: auto;

  display: grid;

  grid-template-columns: 2fr 1fr 1fr 1fr;

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
}

.footer-section a {
  color: white;

  text-decoration: none;

  opacity: 0.7;

  transition: 0.2s;
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

  font-size: 14px;

  opacity: 0.65;
}

.heart {
  color: #bfeeff;
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 900px) {
  .header {
    padding: 20px;
  }

  .exercise-card {
    grid-template-columns: 1fr;

    padding: 45px;
  }

  .breathing-visual {
    transform: scale(0.85);
  }

  .how-grid {
    grid-template-columns: 1fr;
  }

  .footer {
    padding: 45px 25px 25px;
  }

  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 600px) {
  .header {
    padding: 15px;
  }

  .logo-face img {
    width: 75px;
    height: 75px;
  }

  .header-button {
    padding: 9px 14px;

    font-size: 13px;
  }

  .hero {
    padding: 70px 20px 80px;
  }

  .hero h1 {
    font-size: 58px;

    letter-spacing: -3px;
  }

  .hero-text {
    font-size: 16px;
  }

  .exercise {
    padding: 20px 15px 100px;
  }

  .exercise-card {
    padding: 35px 20px;

    border-radius: 30px;
  }

  .exercise-info h2 {
    font-size: 52px;
  }

  .breathing-visual {
    width: 320px;
    height: 320px;

    transform: scale(0.8);
  }

  .quote {
    padding: 20px 20px 100px;
  }

  .quote p {
    font-size: 35px;
  }

  .how {
    padding: 0 20px 100px;
  }

  .final-cta {
    margin: 0 15px 100px;

    padding: 70px 20px;

    border-radius: 30px;
  }

  .final-cta h2 {
    font-size: 55px;
  }

  .footer {
    padding: 45px 20px 25px;
  }

  .footer-content {
    grid-template-columns: 1fr 1fr;
  }

  .footer-brand {
    grid-column: 1 / -1;

    max-width: none;
  }

  .footer-bottom {
    flex-direction: column;

    align-items: center;

    text-align: center;

    gap: 10px;
  }
}
</style>
