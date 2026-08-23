<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="about-page">
    <!-- Background -->
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
    <div class="blob blob-4"></div>

    <!-- HEADER -->
    <header class="header">
      <RouterLink to="/home" class="logo">
        <span class="logo-face"><img src="/logo.png" alt="☺" /></span>
      </RouterLink>

      <RouterLink to="/get-expression" class="header-button">
        Find My Mood
        <span>✦</span>
      </RouterLink>
    </header>

    <!-- HERO -->
    <main>
      <section class="hero">
        <p class="eyebrow">✦ WHY MOODSHIFT EXISTS</p>

        <h1>
          We forgot how to
          <span>express ourselves.</span>
        </h1>

        <p class="hero-text">
          Social media changed the way we communicate. We are more connected
          than ever, yet sometimes it has become harder to say how we actually
          feel.
        </p>

        <div class="hero-arrow">↓</div>
      </section>

      <!-- THE PROBLEM -->
      <section class="story-section">
        <div class="story-card problem-card">
          <div class="card-number">01</div>

          <div class="story-icon">📱</div>

          <h2>The social media reckoning</h2>

          <p>
            Years ago, expressing how we felt often meant talking to someone,
            listening to music, going outside, or simply spending time with
            people.
          </p>

          <p>
            Today, social media gives us countless ways to communicate — but not
            always meaningful ways to express what is happening inside us.
          </p>
        </div>

        <div class="problem-stats">
          <div class="stat">
            <span class="stat-icon">💬</span>

            <strong> More communication </strong>

            <p>Doesn't always mean better expression.</p>
          </div>

          <div class="stat">
            <span class="stat-icon">👥</span>

            <strong> More connections </strong>

            <p>Can still leave people feeling alone.</p>
          </div>

          <div class="stat">
            <span class="stat-icon">❤️</span>

            <strong> More sharing </strong>

            <p>Doesn't always mean sharing how we really feel.</p>
          </div>
        </div>
      </section>

      <!-- TRANSITION -->
      <section class="transition">
        <div class="transition-line"></div>

        <p>So we asked a simple question:</p>

        <h2>
          What if you didn't have to
          <span>explain your mood?</span>
        </h2>

        <div class="transition-line"></div>
      </section>

      <!-- SOLUTION -->
      <section class="solution">
        <div class="solution-text">
          <p class="eyebrow">✦ OUR SOLUTION</p>

          <h2>
            Meet
            <span>MoodShift.</span>
          </h2>

          <p>
            MoodShift uses your camera to recognize facial expressions and
            estimate your current mood directly in your browser.
          </p>

          <p>
            Instead of asking you to find the right words, MoodShift gives you a
            starting point.
          </p>

          <RouterLink to="/get-expression" class="cta">
            <span> Discover your mood </span>

            <span class="cta-arrow"> → </span>
          </RouterLink>
        </div>

        <!-- Mood visualization -->
        <div class="mood-orbit">
          <div class="orbit orbit-1"></div>
          <div class="orbit orbit-2"></div>

          <div class="orbit-mood happy">😊</div>

          <div class="orbit-mood sad">😢</div>

          <div class="orbit-mood angry">😡</div>

          <div class="orbit-mood calm">😌</div>

          <div class="center-face">😊</div>
        </div>
      </section>

      <!-- MELOTHERAPY -->
      <section class="melotherapy">
        <div class="melotherapy-header">
          <p class="eyebrow">✦ THE IDEA BEHIND IT</p>

          <h2>Melotherapy</h2>

          <p>
            Music has always been connected to the way we experience emotions.
          </p>
        </div>

        <div class="therapy-grid">
          <!-- MUSIC -->
          <div class="therapy-card music">
            <div class="therapy-icon">🎵</div>

            <span class="therapy-number"> 01 </span>

            <h3>Music</h3>

            <p>
              When you're feeling down, MoodShift can guide you toward music
              that can help shift the atmosphere and bring some positive energy
              into your moment.
            </p>

            <div class="music-notes">♪ ♫ ♪</div>
          </div>

          <!-- BREATHING -->
          <div class="therapy-card breathing">
            <div class="therapy-icon">🌬️</div>

            <span class="therapy-number"> 02 </span>

            <h3>Breathing</h3>

            <p>
              When you're feeling angry or overwhelmed, MoodShift can guide you
              through a simple breathing exercise before suggesting something
              more calming.
            </p>

            <div class="breathing-circle">Breathe</div>
          </div>

          <!-- EXPRESSION -->
          <div class="therapy-card expression">
            <div class="therapy-icon">💭</div>

            <span class="therapy-number"> 03 </span>

            <h3>Expression</h3>

            <p>
              Sometimes the first step toward feeling better is simply
              recognizing what you're feeling.
            </p>

            <div class="expression-emojis">😊 😐 😢 😡</div>
          </div>
        </div>
      </section>

      <!-- HOW IT WORKS -->
      <section class="how">
        <p class="eyebrow">✦ HOW MOODSHIFT WORKS</p>

        <h2>
          From expression
          <span>to action.</span>
        </h2>

        <div class="steps">
          <div class="step">
            <div class="step-circle">01</div>

            <h3>Look</h3>

            <p>
              Look into the camera and let MoodShift analyze your expression.
            </p>
          </div>

          <div class="step-line"></div>

          <div class="step">
            <div class="step-circle">02</div>

            <h3>Understand</h3>

            <p>
              MoodShift identifies the expression that best matches your current
              mood.
            </p>
          </div>

          <div class="step-line"></div>

          <div class="step">
            <div class="step-circle">03</div>

            <h3>Shift</h3>

            <p>
              Get an experience designed around your mood — music, breathing, or
              both.
            </p>
          </div>
        </div>
      </section>

      <!-- PRIVACY -->
      <section class="privacy">
        <div class="privacy-icon">🔒</div>

        <div>
          <p class="eyebrow">✦ YOUR PRIVACY</p>

          <h2>
            Your face stays
            <span>with you.</span>
          </h2>

          <p>
            MoodShift is designed so that the facial expression detection
            happens directly in your browser. Your camera feed doesn't need to
            be uploaded to a server.
          </p>
        </div>
      </section>

      <!-- FINAL CTA -->
      <section class="final-cta">
        <div class="final-glow"></div>

        <p class="eyebrow">✦ YOUR MOOD MATTERS</p>

        <h2>
          Ready to
          <span>shift?</span>
        </h2>

        <p>
          You don't need the perfect words. Just start with your expression.
        </p>

        <RouterLink to="/get-expression" class="final-button">
          Find My Mood

          <span> → </span>
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

.about-page {
  position: relative;

  min-height: 100vh;

  overflow: hidden;

  color: white;

  background: linear-gradient(
    135deg,
    #ffd84d 0%,
    #ff7b54 23%,
    #ef3f8f 47%,
    #793cff 73%,
    #00cfff 100%
  );
}

/* =========================================
   BLOBS
========================================= */

.blob {
  position: absolute;

  border-radius: 50%;

  filter: blur(15px);

  opacity: 0.3;

  pointer-events: none;
}

.blob-1 {
  width: 450px;
  height: 450px;

  top: -200px;
  left: -150px;

  background: #fff176;
}

.blob-2 {
  width: 500px;
  height: 500px;

  top: 900px;
  right: -250px;

  background: #ff64c8;
}

.blob-3 {
  width: 450px;
  height: 450px;

  top: 1800px;
  left: -200px;

  background: #00e5ff;
}

.blob-4 {
  width: 500px;
  height: 500px;

  bottom: -200px;
  right: -200px;

  background: #9d6cff;
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

  padding: 110px 25px 130px;

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

  font-size: clamp(55px, 8vw, 105px);

  line-height: 0.98;

  font-weight: 900;

  letter-spacing: -5px;

  text-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.hero h1 span {
  display: block;

  color: #fff59a;
}

.hero-text {
  max-width: 690px;

  margin: 35px auto 0;

  font-size: 20px;

  line-height: 1.7;

  opacity: 0.9;
}

.hero-arrow {
  margin-top: 60px;

  font-size: 35px;

  animation: arrowFloat 2s ease-in-out infinite;
}

@keyframes arrowFloat {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px);
  }
}

/* =========================================
   STORY
========================================= */

.story-section {
  position: relative;

  z-index: 2;

  max-width: 1100px;

  margin: 0 auto;

  padding: 0 25px 120px;
}

.story-card {
  padding: 45px;

  border: 1px solid rgba(255, 255, 255, 0.3);

  border-radius: 35px;

  background: rgba(255, 255, 255, 0.14);

  backdrop-filter: blur(20px);

  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
}

.card-number {
  font-size: 13px;

  font-weight: 800;

  letter-spacing: 3px;

  opacity: 0.55;
}

.story-icon {
  margin-top: 20px;

  font-size: 55px;
}

.story-card h2 {
  margin: 10px 0 20px;

  font-size: 45px;

  letter-spacing: -2px;
}

.story-card p {
  max-width: 750px;

  font-size: 17px;

  line-height: 1.7;

  opacity: 0.85;
}

.problem-stats {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 20px;

  margin-top: 20px;
}

.stat {
  padding: 25px;

  border: 1px solid rgba(255, 255, 255, 0.2);

  border-radius: 25px;

  background: rgba(255, 255, 255, 0.09);

  backdrop-filter: blur(10px);
}

.stat-icon {
  display: block;

  margin-bottom: 15px;

  font-size: 30px;
}

.stat strong {
  display: block;

  margin-bottom: 8px;

  font-size: 17px;
}

.stat p {
  margin: 0;

  font-size: 14px;

  line-height: 1.5;

  opacity: 0.7;
}

/* =========================================
   TRANSITION
========================================= */

.transition {
  position: relative;

  z-index: 2;

  display: flex;

  flex-direction: column;

  align-items: center;

  text-align: center;

  padding: 50px 25px 130px;
}

.transition p {
  margin: 0 0 20px;

  font-size: 16px;

  opacity: 0.7;
}

.transition h2 {
  max-width: 800px;

  margin: 0;

  font-size: clamp(40px, 6vw, 70px);

  line-height: 1;

  letter-spacing: -3px;
}

.transition h2 span {
  color: #fff59a;
}

.transition-line {
  width: 100px;

  height: 5px;

  margin: 20px;

  border-radius: 999px;

  background: white;

  opacity: 0.4;
}

/* =========================================
   SOLUTION
========================================= */

.solution {
  position: relative;

  z-index: 2;

  max-width: 1100px;

  margin: 0 auto;

  padding: 0 25px 150px;

  display: grid;

  grid-template-columns:
    1fr
    1fr;

  align-items: center;

  gap: 70px;
}

.solution-text h2 {
  margin: 0 0 25px;

  font-size: 65px;

  line-height: 1;

  letter-spacing: -4px;
}

.solution-text h2 span {
  color: #fff59a;
}

.solution-text > p:not(.eyebrow) {
  max-width: 540px;

  font-size: 17px;

  line-height: 1.7;

  opacity: 0.85;
}

/* CTA */

.cta {
  display: inline-flex;

  align-items: center;

  gap: 20px;

  margin-top: 25px;

  padding: 9px 10px 9px 25px;

  border-radius: 999px;

  color: #ed4b9b;

  background: white;

  text-decoration: none;

  font-size: 17px;

  font-weight: 800;

  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);

  transition: 0.25s;
}

.cta:hover {
  transform: translateY(-4px) scale(1.02);
}

.cta-arrow {
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

/* =========================================
   MOOD ORBIT
========================================= */

.mood-orbit {
  position: relative;

  width: 430px;
  height: 430px;

  margin: auto;

  display: flex;

  align-items: center;
  justify-content: center;
}

.center-face {
  width: 150px;
  height: 150px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: linear-gradient(135deg, #ffe600, #ff58c7, #6d5dfc, #00d9ff);

  font-size: 75px;

  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25), 0 0 60px rgba(255, 255, 255, 0.2);

  z-index: 3;
}

.orbit {
  position: absolute;

  border: 1px solid rgba(255, 255, 255, 0.35);

  border-radius: 50%;
}

.orbit-1 {
  width: 280px;
  height: 280px;
}

.orbit-2 {
  width: 390px;
  height: 390px;

  opacity: 0.5;
}

.orbit-mood {
  position: absolute;

  width: 65px;
  height: 65px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  font-size: 32px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.orbit-mood.happy {
  top: 25px;
  left: 185px;

  background: #ffd83d;
}

.orbit-mood.sad {
  right: 15px;
  top: 180px;

  background: #667cff;
}

.orbit-mood.angry {
  bottom: 25px;
  left: 185px;

  background: #ff5d70;
}

.orbit-mood.calm {
  left: 15px;
  top: 180px;

  background: #56d9ba;
}

/* =========================================
   MELOTHERAPY
========================================= */

.melotherapy {
  position: relative;

  z-index: 2;

  max-width: 1150px;

  margin: 0 auto;

  padding: 0 25px 150px;
}

.melotherapy-header {
  text-align: center;

  margin-bottom: 50px;
}

.melotherapy-header h2 {
  margin: 0;

  font-size: clamp(50px, 7vw, 80px);

  letter-spacing: -4px;
}

.melotherapy-header p:last-child {
  margin: 20px auto 0;

  max-width: 550px;

  font-size: 17px;

  line-height: 1.6;

  opacity: 0.8;
}

.therapy-grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 20px;
}

.therapy-card {
  position: relative;

  min-height: 350px;

  padding: 30px;

  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.25);

  border-radius: 30px;

  background: rgba(255, 255, 255, 0.12);

  backdrop-filter: blur(15px);

  transition: transform 0.3s;
}

.therapy-card:hover {
  transform: translateY(-8px);
}

.therapy-icon {
  font-size: 45px;
}

.therapy-number {
  position: absolute;

  top: 30px;
  right: 30px;

  font-size: 12px;

  font-weight: 800;

  opacity: 0.5;
}

.therapy-card h3 {
  margin: 25px 0 15px;

  font-size: 32px;
}

.therapy-card p {
  font-size: 15px;

  line-height: 1.7;

  opacity: 0.8;
}

.music {
  background: linear-gradient(
    145deg,
    rgba(255, 213, 65, 0.22),
    rgba(255, 255, 255, 0.08)
  );
}

.breathing {
  background: linear-gradient(
    145deg,
    rgba(0, 220, 255, 0.2),
    rgba(255, 255, 255, 0.08)
  );
}

.expression {
  background: linear-gradient(
    145deg,
    rgba(255, 90, 190, 0.22),
    rgba(255, 255, 255, 0.08)
  );
}

.music-notes {
  position: absolute;

  bottom: 25px;
  right: 25px;

  font-size: 40px;

  opacity: 0.25;

  transform: rotate(-10deg);
}

.breathing-circle {
  position: absolute;

  right: 25px;
  bottom: 25px;

  width: 80px;
  height: 80px;

  display: flex;

  align-items: center;
  justify-content: center;

  border: 2px solid rgba(255, 255, 255, 0.4);

  border-radius: 50%;

  font-size: 12px;

  animation: breathe 4s ease-in-out infinite;
}

@keyframes breathe {
  0%,
  100% {
    transform: scale(0.8);
  }

  50% {
    transform: scale(1.1);
  }
}

.expression-emojis {
  position: absolute;

  bottom: 30px;
  left: 30px;

  font-size: 25px;

  letter-spacing: 5px;

  opacity: 0.5;
}

/* =========================================
   HOW
========================================= */

.how {
  position: relative;

  z-index: 2;

  max-width: 1100px;

  margin: 0 auto;

  padding: 0 25px 150px;

  text-align: center;
}

.how h2 {
  margin: 0 0 70px;

  font-size: clamp(45px, 6vw, 70px);

  line-height: 1;

  letter-spacing: -3px;
}

.how h2 span {
  color: #fff59a;
}

.steps {
  display: flex;

  align-items: center;

  justify-content: center;
}

.step {
  max-width: 260px;
}

.step-circle {
  width: 80px;
  height: 80px;

  margin: 0 auto 20px;

  display: flex;

  align-items: center;
  justify-content: center;

  border: 2px solid rgba(255, 255, 255, 0.5);

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.12);

  font-size: 20px;

  font-weight: 800;
}

.step h3 {
  margin: 0 0 10px;

  font-size: 24px;
}

.step p {
  margin: 0;

  font-size: 14px;

  line-height: 1.6;

  opacity: 0.7;
}

.step-line {
  width: 80px;

  height: 2px;

  margin: 0 20px;

  background: rgba(255, 255, 255, 0.35);
}

/* =========================================
   PRIVACY
========================================= */

.privacy {
  position: relative;

  z-index: 2;

  max-width: 950px;

  margin: 0 auto;

  padding: 35px;

  display: flex;

  align-items: center;

  gap: 30px;

  border: 1px solid rgba(255, 255, 255, 0.25);

  border-radius: 30px;

  background: rgba(255, 255, 255, 0.12);

  backdrop-filter: blur(15px);
}

.privacy-icon {
  width: 75px;
  height: 75px;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 25px;

  background: rgba(255, 255, 255, 0.15);

  font-size: 35px;
}

.privacy h2 {
  margin: 0;

  font-size: 35px;

  letter-spacing: -1px;
}

.privacy h2 span {
  color: #fff59a;
}

.privacy > div:last-child > p:last-child {
  max-width: 700px;

  margin-bottom: 0;

  line-height: 1.6;

  opacity: 0.75;
}

/* =========================================
   FINAL CTA
========================================= */

.final-cta {
  position: relative;

  z-index: 2;

  max-width: 900px;

  margin: 150px auto;

  padding: 90px 30px;

  text-align: center;

  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.3);

  border-radius: 45px;

  background: rgba(255, 255, 255, 0.13);

  backdrop-filter: blur(20px);

  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
}

.final-glow {
  position: absolute;

  width: 300px;
  height: 300px;

  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  border-radius: 50%;

  background: #ff70c8;

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
  color: #fff59a;
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

  color: #ed4b9b;

  background: white;

  text-decoration: none;

  font-size: 18px;

  font-weight: 800;

  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);

  transition: 0.25s;
}

.final-button:hover {
  transform: translateY(-4px) scale(1.03);
}

.final-button span {
  width: 50px;
  height: 50px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  color: white;

  background: linear-gradient(135deg, #ff4fa3, #743cff);

  font-size: 25px;
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
  color: #ffb3d9;
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 900px) {
  .header {
    padding: 20px;
  }

  .hero {
    padding-top: 80px;
  }

  .solution {
    grid-template-columns: 1fr;

    text-align: center;
  }

  .solution-text > p:not(.eyebrow) {
    margin-left: auto;
    margin-right: auto;
  }

  .mood-orbit {
    transform: scale(0.85);
  }

  .therapy-grid {
    grid-template-columns: 1fr;
  }

  .therapy-card {
    min-height: 300px;
  }

  .privacy {
    margin: 0 25px;
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

  .logo {
    font-size: 20px;

    gap: 7px;
  }

  .logo-face {
    width: 35px;
    height: 35px;

    font-size: 23px;
  }

  .header-button {
    padding: 9px 14px;

    font-size: 13px;
  }

  .hero {
    padding: 80px 20px 100px;
  }

  .hero h1 {
    font-size: 52px;

    letter-spacing: -3px;
  }

  .hero-text {
    font-size: 16px;
  }

  .story-section {
    padding: 0 15px 100px;
  }

  .story-card {
    padding: 28px;

    border-radius: 25px;
  }

  .story-card h2 {
    font-size: 34px;
  }

  .problem-stats {
    grid-template-columns: 1fr;
  }

  .transition {
    padding: 30px 20px 100px;
  }

  .transition h2 {
    font-size: 42px;
  }

  .solution {
    padding: 0 20px 100px;
  }

  .solution-text h2 {
    font-size: 50px;
  }

  .mood-orbit {
    width: 320px;
    height: 320px;

    transform: scale(0.8);
  }

  .melotherapy {
    padding: 0 20px 100px;
  }

  .melotherapy-header h2 {
    font-size: 55px;
  }

  .how {
    padding: 0 20px 100px;
  }

  .steps {
    flex-direction: column;

    gap: 20px;
  }

  .step-line {
    width: 2px;
    height: 50px;

    margin: 0;
  }

  .privacy {
    flex-direction: column;

    align-items: flex-start;

    margin: 0 15px;

    padding: 25px;

    border-radius: 25px;
  }

  .final-cta {
    margin: 100px 15px;

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
