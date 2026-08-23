<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";

const feeling = ref("");

const wordCount = computed(() => {
  return feeling.value.trim() ? feeling.value.trim().split(/\s+/).length : 0;
});
</script>

<template>
  <div class="express-page">
    <!-- BACKGROUND -->
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
    <div class="blob blob-4"></div>

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

    <main>
      <!-- =========================================
           HERO
      ========================================== -->

      <section class="hero">
        <p class="eyebrow">✦ EXPRESS YOURSELF</p>

        <div class="hero-icon">💭</div>

        <h1>
          Put your feelings
          <span>into words.</span>
        </h1>

        <p class="hero-text">
          You don't need the perfect words. You don't need to explain
          everything. Just write whatever is on your mind.
        </p>
      </section>

      <!-- =========================================
           WRITING AREA
      ========================================== -->

      <section class="writing-section">
        <div class="writing-card">
          <div class="writing-header">
            <div>
              <p class="eyebrow">✦ YOUR SPACE</p>

              <h2>What's on your mind?</h2>
            </div>

            <div class="writing-number">01</div>
          </div>

          <!-- TEXTAREA -->

          <div class="textarea-wrapper">
            <textarea
              v-model="feeling"
              placeholder="I'm feeling..."
              maxlength="2000"
            ></textarea>

            <div class="textarea-bottom">
              <span> {{ wordCount }} words </span>

              <span> {{ feeling.length }} / 2000 </span>
            </div>
          </div>

          <!-- PROMPTS -->

          <div class="prompts">
            <span class="prompt-label"> Not sure where to start? </span>

            <button @click="feeling = 'Right now, I feel...'">
              Right now, I feel...
            </button>

            <button
              @click="feeling = 'Something that has been on my mind is...'"
            >
              Something on my mind...
            </button>

            <button @click="feeling = 'I wish someone understood that...'">
              I wish someone understood...
            </button>
          </div>

          <!-- SUBMIT -->

          <button
            class="submit-button"
            :class="{ active: feeling.trim() }"
            :disabled="!feeling.trim()"
          >
            <span> Save my thoughts </span>

            <span class="submit-arrow"> → </span>
          </button>
        </div>
      </section>

      <!-- =========================================
           REASSURANCE
      ========================================== -->

      <section class="reassurance">
        <div class="reassurance-card">
          <div class="reassurance-icon">🔒</div>

          <div>
            <p class="eyebrow">✦ YOUR SPACE</p>

            <h2>
              You don't have to
              <span>share it.</span>
            </h2>

            <p>
              This isn't a social media post. There are no likes, no comments
              and no audience. These words are simply for you.
            </p>
          </div>
        </div>
      </section>

      <!-- =========================================
           SMALL MESSAGE
      ========================================== -->

      <section class="message-section">
        <div class="message-card">
          <div class="message-face">🌱</div>

          <p class="eyebrow">✦ ONE SMALL STEP</p>

          <h2>
            Sometimes,
            <span>writing it down</span>
            is enough.
          </h2>

          <p>
            You don't have to solve everything today. Start by understanding
            what you're feeling.
          </p>
        </div>
      </section>

      <!-- =========================================
           FINAL CTA
      ========================================== -->

      <section class="final-cta">
        <div class="final-glow"></div>

        <p class="eyebrow">✦ MOODSHIFT</p>

        <h2>
          Your feelings
          <span>matter.</span>
        </h2>

        <p>Whatever you're feeling, you don't have to ignore it.</p>

        <RouterLink to="/get-expression" class="final-button">
          Find My Mood
          <span>→</span>
        </RouterLink>
      </section>
    </main>

    <!-- =========================================
         FOOTER
    ========================================== -->

    <footer class="footer">
      <div class="footer-content">
        <!-- BRAND -->

        <div class="footer-brand">
          <RouterLink to="/home" class="footer-logo">
            <span class="footer-face"> ☺ </span>

            <span> Mood<span>Shift</span> </span>
          </RouterLink>

          <p>Your mood. Your moment. Your shift.</p>
        </div>

        <!-- EXPLORE -->

        <div class="footer-section">
          <h4>Explore</h4>

          <RouterLink to="/home"> Home </RouterLink>

          <RouterLink to="/get-expression"> Find your mood </RouterLink>

          <RouterLink to="/about"> About </RouterLink>
        </div>

        <!-- MOODS -->

        <div class="footer-section">
          <h4>Moods</h4>

          <RouterLink to="/happy"> 😊 Happy </RouterLink>

          <RouterLink to="/sad"> 😢 Sad </RouterLink>

          <RouterLink to="/angry"> 😡 Angry </RouterLink>

          <RouterLink to="/neutral"> 😐 Neutral </RouterLink>
        </div>

        <!-- PROJECT -->

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
          <span class="heart"> ♥ </span>
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

.express-page {
  position: relative;

  min-height: 100vh;

  overflow: hidden;

  color: white;

  background: linear-gradient(
    135deg,
    #ff8a78 0%,
    #e95c9d 30%,
    #884fd1 65%,
    #4e74df 100%
  );
}

/* =========================================
   BLOBS
========================================= */

.blob {
  position: absolute;

  border-radius: 50%;

  filter: blur(20px);

  opacity: 0.28;

  pointer-events: none;
}

.blob-1 {
  width: 450px;
  height: 450px;

  top: -200px;
  left: -150px;

  background: #ffd36b;
}

.blob-2 {
  width: 500px;
  height: 500px;

  top: 800px;
  right: -250px;

  background: #ff8ed0;
}

.blob-3 {
  width: 450px;
  height: 450px;

  top: 1600px;
  left: -200px;

  background: #6ccfff;
}

.blob-4 {
  width: 500px;
  height: 500px;

  bottom: -200px;
  right: -200px;

  background: #a77cff;
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

  background: rgba(255, 255, 255, 0.15);

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

  max-width: 950px;

  margin: 0 auto;

  padding: 90px 25px 100px;

  text-align: center;
}

.eyebrow {
  margin: 0 0 18px;

  font-size: 13px;

  font-weight: 800;

  letter-spacing: 3px;

  opacity: 0.75;
}

.hero-icon {
  width: 105px;
  height: 105px;

  display: flex;

  align-items: center;
  justify-content: center;

  margin: 30px auto;

  border-radius: 35px;

  border: 1px solid rgba(255, 255, 255, 0.3);

  background: rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(20px);

  font-size: 55px;

  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
}

.hero h1 {
  margin: 0;

  font-size: clamp(55px, 8vw, 100px);

  line-height: 0.95;

  font-weight: 900;

  letter-spacing: -5px;
}

.hero h1 span {
  display: block;

  color: #ffeaa5;
}

.hero-text {
  max-width: 650px;

  margin: 35px auto 0;

  font-size: 19px;

  line-height: 1.7;

  opacity: 0.9;
}

/* =========================================
   WRITING SECTION
========================================= */

.writing-section {
  position: relative;

  z-index: 2;

  max-width: 1050px;

  margin: 0 auto;

  padding: 0 25px 130px;
}

.writing-card {
  padding: 45px;

  border: 1px solid rgba(255, 255, 255, 0.3);

  border-radius: 40px;

  background: rgba(255, 255, 255, 0.14);

  backdrop-filter: blur(20px);

  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
}

/* WRITING HEADER */

.writing-header {
  display: flex;

  justify-content: space-between;

  align-items: flex-start;

  margin-bottom: 30px;
}

.writing-header h2 {
  margin: 0;

  font-size: clamp(35px, 5vw, 55px);

  line-height: 1;

  letter-spacing: -3px;
}

.writing-number {
  font-size: 13px;

  font-weight: 800;

  letter-spacing: 3px;

  opacity: 0.5;
}

/* =========================================
   TEXTAREA
========================================= */

.textarea-wrapper {
  position: relative;

  border: 1px solid rgba(255, 255, 255, 0.3);

  border-radius: 28px;

  background: rgba(0, 0, 0, 0.08);

  transition: 0.25s;
}

.textarea-wrapper:focus-within {
  border-color: rgba(255, 255, 255, 0.65);

  background: rgba(0, 0, 0, 0.12);

  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.06);
}

textarea {
  width: 100%;

  min-height: 360px;

  padding: 30px;

  box-sizing: border-box;

  resize: vertical;

  border: none;

  outline: none;

  background: transparent;

  color: white;

  font-family: inherit;

  font-size: 20px;

  line-height: 1.7;
}

textarea::placeholder {
  color: rgba(255, 255, 255, 0.45);
}

.textarea-bottom {
  display: flex;

  justify-content: space-between;

  padding: 0 25px 20px;

  font-size: 12px;

  opacity: 0.5;
}

/* =========================================
   PROMPTS
========================================= */

.prompts {
  display: flex;

  flex-wrap: wrap;

  align-items: center;

  gap: 10px;

  margin-top: 20px;
}

.prompt-label {
  margin-right: 5px;

  font-size: 13px;

  opacity: 0.6;
}

.prompts button {
  padding: 9px 14px;

  border: 1px solid rgba(255, 255, 255, 0.2);

  border-radius: 999px;

  color: white;

  background: rgba(255, 255, 255, 0.08);

  font-family: inherit;

  cursor: pointer;

  transition: 0.2s;
}

.prompts button:hover {
  background: rgba(255, 255, 255, 0.18);

  transform: translateY(-2px);
}

/* =========================================
   SUBMIT
========================================= */

.submit-button {
  width: 100%;

  margin-top: 30px;

  padding: 10px 10px 10px 28px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  border: none;

  border-radius: 999px;

  color: #9b4b91;

  background: rgba(255, 255, 255, 0.45);

  font-family: inherit;

  font-size: 16px;

  font-weight: 800;

  cursor: not-allowed;

  transition: 0.25s;
}

.submit-button.active {
  color: #9b4b91;

  background: white;

  cursor: pointer;

  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.submit-button.active:hover {
  transform: translateY(-3px);
}

.submit-arrow {
  width: 48px;
  height: 48px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  color: white;

  background: linear-gradient(135deg, #ff6c9d, #7747d8);

  font-size: 22px;
}

/* =========================================
   REASSURANCE
========================================= */

.reassurance {
  position: relative;

  z-index: 2;

  max-width: 950px;

  margin: 0 auto;

  padding: 0 25px 130px;
}

.reassurance-card {
  display: flex;

  align-items: center;

  gap: 30px;

  padding: 35px;

  border: 1px solid rgba(255, 255, 255, 0.25);

  border-radius: 30px;

  background: rgba(255, 255, 255, 0.11);

  backdrop-filter: blur(15px);
}

.reassurance-icon {
  width: 75px;
  height: 75px;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 25px;

  background: rgba(255, 255, 255, 0.15);

  font-size: 32px;
}

.reassurance h2 {
  margin: 0;

  font-size: 35px;

  letter-spacing: -2px;
}

.reassurance h2 span {
  color: #ffeaa5;
}

.reassurance p:last-child {
  max-width: 650px;

  margin-bottom: 0;

  line-height: 1.6;

  opacity: 0.75;
}

/* =========================================
   MESSAGE
========================================= */

.message-section {
  position: relative;

  z-index: 2;

  max-width: 900px;

  margin: 0 auto;

  padding: 0 25px 130px;

  text-align: center;
}

.message-card {
  padding: 70px 40px;

  border-radius: 40px;

  border: 1px solid rgba(255, 255, 255, 0.25);

  background: rgba(255, 255, 255, 0.1);

  backdrop-filter: blur(15px);
}

.message-face {
  margin-bottom: 20px;

  font-size: 50px;
}

.message-card h2 {
  max-width: 700px;

  margin: 0 auto 25px;

  font-size: clamp(45px, 6vw, 70px);

  line-height: 1;

  letter-spacing: -4px;
}

.message-card h2 span {
  color: #ffeaa5;
}

.message-card p:last-child {
  max-width: 600px;

  margin: auto;

  font-size: 17px;

  line-height: 1.7;

  opacity: 0.8;
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

  background: rgba(255, 255, 255, 0.13);

  backdrop-filter: blur(20px);
}

.final-glow {
  position: absolute;

  width: 350px;
  height: 350px;

  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  border-radius: 50%;

  background: #ff88c8;

  filter: blur(100px);

  opacity: 0.2;
}

.final-cta > *:not(.final-glow) {
  position: relative;

  z-index: 2;
}

.final-cta h2 {
  margin: 0;

  font-size: clamp(55px, 8vw, 90px);

  line-height: 1;

  letter-spacing: -5px;
}

.final-cta h2 span {
  color: #ffeaa5;
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

  color: #974d92;

  background: white;

  text-decoration: none;

  font-size: 17px;

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

  background: linear-gradient(135deg, #ff6c9d, #7747d8);

  font-size: 22px;
}

.final-button:hover {
  transform: translateY(-4px) scale(1.02);
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
  color: #ffeaa5;
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 900px) {
  .header {
    padding: 20px;
  }

  .writing-card {
    padding: 35px;
  }

  .reassurance {
    padding-left: 25px;
    padding-right: 25px;
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
    font-size: 53px;

    letter-spacing: -3px;
  }

  .hero-text {
    font-size: 16px;
  }

  .writing-section {
    padding: 0 15px 100px;
  }

  .writing-card {
    padding: 25px;

    border-radius: 30px;
  }

  .writing-header h2 {
    font-size: 36px;
  }

  textarea {
    min-height: 300px;

    padding: 22px;

    font-size: 17px;
  }

  .prompts {
    flex-direction: column;

    align-items: flex-start;
  }

  .prompt-label {
    margin-bottom: 5px;
  }

  .reassurance {
    padding: 0 15px 100px;
  }

  .reassurance-card {
    flex-direction: column;

    align-items: flex-start;

    padding: 25px;

    border-radius: 25px;
  }

  .reassurance h2 {
    font-size: 30px;
  }

  .message-section {
    padding: 0 15px 100px;
  }

  .message-card {
    padding: 60px 25px;

    border-radius: 30px;
  }

  .message-card h2 {
    font-size: 45px;
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

  .footer-bottom {
    flex-direction: column;

    align-items: center;

    text-align: center;

    gap: 10px;
  }
}
</style>
