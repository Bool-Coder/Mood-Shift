<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="home">
    <!-- Decorative background -->
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>

    <!-- HEADER -->
    <header class="header">
      <RouterLink to="/home" class="logo">
        <span class="logo-face"><img src="/logo.png" alt="☺" /></span>
      </RouterLink>

      <RouterLink to="/get-expression" class="header-button">
        Let's begin
        <span>✦</span>
      </RouterLink>
    </header>

    <!-- HERO -->
    <main class="hero">
      <p class="welcome">Welcome to</p>

      <h1>Mood<span>Shift</span></h1>

      <div class="rainbow-line"></div>

      <h2>Discover. Understand. Feel Better.</h2>

      <p class="description">
        Detect your mood and discover experiences designed to help you feel
        better.
      </p>

      <!-- MOOD BUBBLES -->
      <div class="mood-area">
        <div class="mood-bubble happy">
          <RouterLink to="/happy" class="logo">
            <span><a href="/home"></a>😊</span>
          </RouterLink>
        </div>

        <div class="mood-bubble sad">
          <RouterLink to="/sad" class="logo">
            <span>😢</span>
          </RouterLink>
        </div>

        <div class="mood-bubble neutral">
          <RouterLink to="/neutral" class="logo">
            <span>😐</span>
          </RouterLink>
        </div>

        <div class="mood-bubble angry">
          <RouterLink to="/angry" class="logo">
            <span>😡</span>
          </RouterLink>
        </div>

        <div class="main-mood">
          <RouterLink to="/happy" class="logo">
            <span>😊</span>
          </RouterLink>
        </div>
      </div>

      <!-- MAIN CTA -->
      <RouterLink to="/get-expression" class="cta">
        <span>Find My Mood</span>

        <span class="cta-arrow"> → </span>
      </RouterLink>
      <br />
      <RouterLink to="/about" class="cta">
        <span>Why MoodShift Exists?</span>

        <span class="cta-arrow"> → </span>
      </RouterLink>
    </main>

    <!-- FEATURES -->
    <section class="features">
      <div class="feature">
        <div class="feature-icon">◉</div>

        <h3>Detect</h3>

        <p>AI-powered mood detection</p>
      </div>

      <div class="feature">
        <div class="feature-icon">♡</div>

        <h3>Understand</h3>

        <p>Gain insight into your emotions</p>
      </div>

      <div class="feature">
        <div class="feature-icon">☆</div>

        <h3>Improve</h3>

        <p>Personalized ways to feel better</p>
      </div>

      <div class="feature">
        <div class="feature-icon">ϟ</div>

        <h3>Inspire</h3>

        <p>Positive vibes for your day</p>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-content">
        <!-- Brand -->
        <div class="footer-brand">
          <RouterLink to="/home" class="footer-logo">
            <span class="footer-face"> ☺ </span>

            <span> Mood<span>Shift</span> </span>
          </RouterLink>

          <p>Your mood. Your moment. Your shift.</p>
        </div>

        <!-- Navigation -->
        <div class="footer-section">
          <h4>Explore</h4>

          <RouterLink to="/home"> Home </RouterLink>

          <RouterLink to="/get-expression"> Find your mood </RouterLink>
        </div>

        <!-- Moods -->
        <div class="footer-section">
          <h4>Moods</h4>

          <RouterLink to="/happy"> 😊 Happy </RouterLink>

          <RouterLink to="/sad"> 😢 Sad </RouterLink>

          <RouterLink to="/angry"> 😡 Angry </RouterLink>

          <RouterLink to="/neutral"> 😐 Neutral </RouterLink>
        </div>

        <!-- Project -->
        <div class="footer-section">
          <h4>MoodShift</h4>

          <a
            href="https://github.com/Bool-Coder/Mood-Shift"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <RouterLink to="/about"> About </RouterLink>
        </div>
      </div>

      <!-- Bottom -->
      <div class="footer-bottom">
        <span> © 2026 MoodShift </span>
        <span> Made by team "Byte Force" </span>
        <span class="footer-made">
          Made with
          <span class="heart">♥</span>
          for better days
        </span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* =========================
   PAGE
========================= */

.home {
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

/* =========================
   BACKGROUND BLOBS
========================= */

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
  top: 180px;

  background: #8b5cf6;
}

.blob-3 {
  width: 450px;
  height: 450px;

  left: 30%;
  bottom: -250px;

  background: #00e5ff;
}

/* =========================
   HEADER
========================= */

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

.logo span span {
  opacity: 0.75;
}

.logo-face {
  width: 44px;
  height: 44px;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  font-size: 30px;
  line-height: 1;
}
.logo-face img {
  width: 100px;
  width: 100px;
}
.header-button {
  display: flex;
  align-items: center;

  gap: 12px;

  padding: 12px 22px;

  border: 1px solid rgba(255, 255, 255, 0.3);

  border-radius: 999px;

  color: white;

  background: rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(12px);

  text-decoration: none;

  font-weight: 600;

  transition: 0.25s;
}

.header-button:hover {
  transform: translateY(-2px);

  background: rgba(255, 255, 255, 0.25);
}

/* =========================
   HERO
========================= */

.hero {
  position: relative;
  z-index: 2;

  min-height: 700px;

  display: flex;
  flex-direction: column;

  align-items: center;

  text-align: center;

  padding-top: 35px;
}

.welcome {
  margin: 0;

  font-size: 38px;

  font-weight: 500;

  letter-spacing: -1px;
}

.hero h1 {
  margin: 0;

  font-size: clamp(80px, 12vw, 150px);

  line-height: 0.95;

  font-weight: 900;

  letter-spacing: -7px;

  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.hero h1 span {
  color: #fff6a0;
}

.rainbow-line {
  width: 520px;
  max-width: 70%;

  height: 7px;

  margin: 20px 0;

  border-radius: 999px;

  background: linear-gradient(90deg, #ff62a5, #ffd84d, #55e5ff, #b46cff);

  transform: rotate(-1deg);
}

.hero h2 {
  margin: 5px 0 10px;

  font-size: 28px;

  font-weight: 700;
}

.description {
  max-width: 600px;

  margin: 0;

  font-size: 19px;

  line-height: 1.6;

  opacity: 0.9;
}

/* =========================
   MOOD AREA
========================= */

.mood-area {
  position: relative;

  width: 620px;
  height: 300px;

  max-width: 90%;

  margin-top: 30px;
}

.main-mood {
  position: absolute;

  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  width: 190px;
  height: 190px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: linear-gradient(135deg, #ffe600, #ff58c7, #6d5dfc, #00d9ff);

  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2), 0 0 60px rgba(255, 255, 255, 0.25);
}
.main-mood span {
  font-size: 105px;
}
.main-face {
  width: 150px;
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.12);

  backdrop-filter: blur(5px);

  font-size: 85px;
}

/* =========================
   MOOD BUBBLES
========================= */

.mood-bubble {
  position: absolute;

  width: 90px;
  height: 90px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  font-size: 45px;

  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.18);

  animation: float 4s ease-in-out infinite;
}
.mood-bubble a {
  font-size: 45px;
}

.happy {
  left: 40px;
  top: 35px;

  background: #ffd83d;
}

.sad {
  right: 35px;
  top: 45px;

  background: #667cff;

  animation-delay: -1s;
}

.neutral {
  left: 90px;
  bottom: 5px;

  background: #4fc5ff;

  animation-delay: -2s;
}

.angry {
  right: 100px;
  bottom: 0;

  background: #ff5d70;

  animation-delay: -3s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-12px);
  }
}

/* =========================
   CTA
========================= */

.cta {
  display: flex;
  align-items: center;

  gap: 25px;

  margin-top: 5px;

  padding: 9px 12px 9px 32px;

  border-radius: 999px;

  background: white;

  color: #ed4b9b;

  text-decoration: none;

  font-size: 21px;

  font-weight: 800;

  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);

  transition: transform 0.25s, box-shadow 0.25s;
}

.cta:hover {
  transform: translateY(-4px) scale(1.02);

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
}

.cta-arrow {
  width: 55px;
  height: 55px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  color: white;

  background: linear-gradient(135deg, #ff4fa3, #743cff);

  font-size: 30px;
}

/* =========================
   FEATURES
========================= */

.features {
  position: relative;
  z-index: 5;

  display: grid;

  grid-template-columns: repeat(4, 1fr);

  max-width: 1100px;

  margin: 20px auto 40px;

  padding: 25px;

  border: 1px solid rgba(255, 255, 255, 0.25);

  border-radius: 28px;

  background: rgba(255, 255, 255, 0.12);

  backdrop-filter: blur(15px);
}

.feature {
  padding: 15px 25px;

  text-align: center;

  border-right: 1px solid rgba(255, 255, 255, 0.2);
}

.feature:last-child {
  border-right: none;
}

.feature-icon {
  margin-bottom: 8px;

  font-size: 40px;
}

.feature h3 {
  margin: 5px 0;

  font-size: 20px;
}

.feature p {
  margin: 0;

  font-size: 14px;

  line-height: 1.4;

  opacity: 0.8;
}

/* =========================
   FOOTER
========================= */

.footer {
  position: relative;
  z-index: 5;

  margin-top: 70px;

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

/* =========================
   MOBILE
========================= */

@media (max-width: 800px) {
  .header {
    padding: 20px;
  }

  /*
   * IMPORTANT:
   * The header button stays visible.
   */
  .header-button {
    display: flex;

    padding: 10px 16px;

    font-size: 14px;
  }

  .logo {
    font-size: 22px;
  }

  .logo-face {
    width: 38px;
    height: 38px;

    font-size: 25px;
  }

  .hero {
    min-height: auto;

    padding: 35px 15px 70px;
  }

  .welcome {
    font-size: 26px;
  }

  .hero h1 {
    font-size: 70px;

    letter-spacing: -4px;
  }

  .hero h2 {
    font-size: 21px;
  }

  .description {
    padding: 0 20px;

    font-size: 16px;
  }

  /*
   * Keep the main CTA fully visible.
   */
  .cta {
    margin-top: 10px;

    font-size: 17px;

    padding-left: 22px;

    gap: 15px;
  }

  .cta-arrow {
    width: 48px;
    height: 48px;

    font-size: 25px;
  }

  /*
   * Mood bubbles scale down.
   */
  .mood-area {
    width: 350px;
    height: 240px;

    margin-top: 10px;

    transform: scale(0.8);
  }

  .main-mood {
    width: 160px;
    height: 160px;
  }

  .main-face {
    width: 125px;
    height: 125px;

    font-size: 70px;
  }

  .mood-bubble {
    width: 70px;
    height: 70px;

    font-size: 35px;
  }

  .happy {
    left: 0;
  }

  .sad {
    right: 0;
  }

  .neutral {
    left: 30px;
  }

  .angry {
    right: 30px;
  }

  /*
   * Features become two columns.
   */
  .features {
    grid-template-columns: repeat(2, 1fr);

    margin: 20px;

    padding: 15px;

    gap: 5px;
  }

  .feature {
    padding: 20px 10px;

    border-right: none;
  }

  /*
   * Footer becomes mobile-friendly.
   */
  .footer {
    margin-top: 30px;

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

  .footer-bottom {
    flex-direction: column;

    align-items: center;

    text-align: center;

    margin-top: 35px;
  }
}

/* =========================
   SMALL PHONES
========================= */

@media (max-width: 450px) {
  .header {
    padding: 15px;
  }

  .header-button {
    padding: 9px 13px;

    font-size: 13px;
  }

  .logo {
    gap: 7px;

    font-size: 19px;
  }

  .logo-face {
    width: 34px;
    height: 34px;

    font-size: 22px;
  }

  .hero h1 {
    font-size: 58px;
  }

  .hero h2 {
    font-size: 18px;
  }

  .mood-area {
    transform: scale(0.68);

    margin: -10px 0 -25px;
  }

  .features {
    grid-template-columns: 1fr;
  }

  .footer-content {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
