<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="emotion-page">
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
        <p class="eyebrow">✦ YOUR CURRENT MOOD</p>

        <div class="emotion-face">😐</div>

        <h1>
          You seem
          <span>calm.</span>
        </h1>

        <p class="hero-text">
          This is the moment where you should focus on your ideas and goals.
          Forget about social media now and choose what's best for you.
        </p>

        <div class="hero-arrow">↓</div>
      </section>

      <section class="music-section">
        <div class="section-heading">
          <div class="section-number">01</div>

          <div>
            <p class="eyebrow">✦ MELOTHERAPY</p>

            <h2>
              Let the music help you
              <span>focus.</span>
            </h2>

            <p class="section-description">
              It has been proven that classical music help's your mind focus.
              Maybe work towards your goals while listening.
            </p>
          </div>
        </div>

        <!-- PLAYLISTS -->

        <div class="playlist-grid">
          <!-- PLAYLIST 1 -->

          <a
            href="https://music.youtube.com/playlist?list=PLT1bP1QXzzdE"
            target="_blank"
            rel="noopener noreferrer"
            class="playlist-card playlist-main"
          >
            <div class="playlist-cover rain">
              <span>🎻</span>
            </div>

            <div class="playlist-content">
              <div class="playlist-top">
                <span>01</span>
                <span>PLAYLIST</span>
              </div>

              <h3>Focus Time</h3>

              <p>
                For the moments when you want focus on your goals and targets.
              </p>

              <div class="listen">
                Listen on YouTube
                <span>↗</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      <!-- =========================================
           EXPRESSION
      ========================================== -->

      <section class="expression-section">
        <div class="expression-card">
          <div class="expression-icon">💭</div>

          <p class="eyebrow">✦ EXPRESS YOURSELF</p>

          <h2>
            You don't have to
            <span>keep it inside.</span>
          </h2>

          <p>
            You don't have to post it. You don't have to send it. You don't even
            have to show anyone.
          </p>

          <p>Just put your thoughts into words.</p>

          <RouterLink to="/express-in-words" class="expression-button">
            Express yourself
            <span>→</span>
          </RouterLink>
        </div>
      </section>

      <!-- =========================================
           FINAL CTA
      ========================================== -->

      <section class="final-cta">
        <div class="final-glow"></div>

        <p class="eyebrow">✦ YOUR MOOD MATTERS</p>

        <h2>
          You don't have to
          <span>feel alone.</span>
        </h2>

        <p>Take a moment. Listen to something. Breathe.</p>

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
        <div class="footer-brand">
          <RouterLink to="/home" class="footer-logo">
            <span class="footer-face">☺</span>

            <span> Mood<span>Shift</span> </span>
          </RouterLink>

          <p>Your mood. Your moment. Your shift.</p>
        </div>

        <div class="footer-section">
          <h4>Explore</h4>

          <RouterLink to="/home"> Home </RouterLink>

          <RouterLink to="/get-expression"> Find your mood </RouterLink>

          <RouterLink to="/dashboard"> Dashboard </RouterLink>
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

          <RouterLink to="/about"> About </RouterLink>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2026 MoodShift</span>

        <span>Made by team "Byte Force"</span>

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

.emotion-page {
  position: relative;

  min-height: 100vh;

  overflow: hidden;

  color: white;

  background: linear-gradient(135deg, #f3ece8 0%, #d8bebe 50%, #ba958d 100%);
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
  width: 500px;
  height: 500px;

  top: -220px;
  left: -180px;

  background: #83a9ff;
}

.blob-2 {
  width: 500px;
  height: 500px;

  top: 900px;
  right: -250px;

  background: #d27cff;
}

.blob-3 {
  width: 450px;
  height: 450px;

  top: 1900px;
  left: -200px;

  background: #4bbcff;
}

.blob-4 {
  width: 500px;
  height: 500px;

  bottom: -250px;
  right: -200px;

  background: #ff86c8;
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

  max-width: 950px;

  margin: 0 auto;

  padding: 80px 25px 130px;

  text-align: center;
}

.emotion-face {
  width: 120px;
  height: 120px;

  display: flex;

  align-items: center;
  justify-content: center;

  margin: 35px auto;

  border-radius: 40px;

  background: rgba(255, 255, 255, 0.15);

  border: 1px solid rgba(255, 255, 255, 0.3);

  backdrop-filter: blur(20px);

  font-size: 65px;

  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.15);
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

  line-height: 0.95;

  font-weight: 900;

  letter-spacing: -5px;
}

.hero h1 span {
  display: block;

  color: #bde5ff;
}

.hero-text {
  max-width: 650px;

  margin: 35px auto 0;

  font-size: 19px;

  line-height: 1.7;

  opacity: 0.9;
}

.hero-arrow {
  margin-top: 55px;

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
   MUSIC
========================================= */

.music-section {
  position: relative;

  z-index: 2;

  max-width: 1100px;

  margin: auto;

  padding: 0 25px 150px;
}

.section-heading {
  display: flex;

  gap: 30px;

  margin-bottom: 55px;
}

.section-number {
  font-size: 13px;

  font-weight: 800;

  letter-spacing: 3px;

  opacity: 0.55;

  padding-top: 5px;
}

.section-heading h2 {
  margin: 0;

  font-size: clamp(45px, 6vw, 70px);

  line-height: 1;

  letter-spacing: -4px;
}

.section-heading h2 span {
  color: #bde5ff;
}

.section-description {
  max-width: 600px;

  margin-top: 25px;

  font-size: 17px;

  line-height: 1.7;

  opacity: 0.8;
}

/* =========================================
   PLAYLIST GRID
========================================= */

.playlist-grid {
  display: grid;

  grid-template-columns: repeat(1, 1fr);

  gap: 20px;
}

.playlist-card {
  overflow: hidden;

  color: white;

  text-decoration: none;

  border: 1px solid rgba(255, 255, 255, 0.25);

  border-radius: 30px;

  background: rgba(255, 255, 255, 0.12);

  backdrop-filter: blur(15px);

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);

  transition: transform 0.3s, background 0.3s;
}

.playlist-card:hover {
  transform: translateY(-8px);

  background: rgba(255, 255, 255, 0.18);
}

.playlist-cover {
  height: 230px;

  display: flex;

  align-items: center;
  justify-content: center;

  font-size: 65px;
}

.rain {
  background: radial-gradient(circle at 30% 20%, #e2f1f8, #9cc4d8 55%, #6b9ac4);
}

.night {
  background: radial-gradient(circle at 70% 20%, #8b8de0, #3e3975 50%, #242347);
}

.sunrise {
  background: radial-gradient(circle at 50% 20%, #f3a8a1, #75558c 55%, #34325e);
}

.playlist-content {
  padding: 28px;
}

.playlist-top {
  display: flex;

  justify-content: space-between;

  font-size: 10px;

  font-weight: 800;

  letter-spacing: 2px;

  opacity: 0.55;
}

.playlist-content h3 {
  margin: 18px 0 10px;

  font-size: 27px;

  letter-spacing: -1px;
}

.playlist-content p {
  margin: 0;

  font-size: 14px;

  line-height: 1.6;

  opacity: 0.75;
}

.listen {
  display: inline-flex;

  align-items: center;

  gap: 10px;

  margin-top: 25px;

  padding: 10px 16px;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.16);

  font-size: 13px;

  font-weight: 700;
}

.listen span {
  font-size: 18px;
}

/* =========================================
   BREATHING
========================================= */

.breathing-section {
  position: relative;

  z-index: 2;

  padding: 50px 25px 150px;
}

.breathing-card {
  max-width: 1100px;

  margin: auto;

  padding: 65px;

  display: grid;

  grid-template-columns: 1fr 1fr;

  align-items: center;

  gap: 50px;

  border: 1px solid rgba(255, 255, 255, 0.25);

  border-radius: 40px;

  background: rgba(255, 255, 255, 0.12);

  backdrop-filter: blur(20px);
}

.breathing-text h2 {
  margin: 0;

  font-size: clamp(50px, 6vw, 75px);

  line-height: 0.95;

  letter-spacing: -4px;
}

.breathing-text h2 span {
  color: #bde5ff;
}

.breathing-text > p:not(.eyebrow) {
  max-width: 520px;

  margin-top: 25px;

  line-height: 1.7;

  opacity: 0.8;
}

.breathing-button {
  margin-top: 25px;

  padding: 13px 20px;

  display: inline-flex;

  gap: 15px;

  align-items: center;

  border: none;

  border-radius: 999px;

  color: #5a4b9e;

  background: white;

  font-size: 15px;

  font-weight: 800;

  cursor: pointer;

  transition: 0.25s;
}

.breathing-button:hover {
  transform: translateY(-3px);

  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

/* BREATHING VISUAL */

.breathing-visual {
  height: 400px;

  display: flex;

  align-items: center;
  justify-content: center;

  position: relative;
}

.breathing-circle {
  width: 180px;
  height: 180px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  border: 2px solid rgba(255, 255, 255, 0.5);

  background: rgba(150, 180, 255, 0.15);

  box-shadow: 0 0 80px rgba(150, 190, 255, 0.25);

  animation: breathe 5s ease-in-out infinite;
}

.breathing-circle span {
  font-size: 11px;

  font-weight: 800;

  letter-spacing: 3px;
}

.breathing-orbit {
  position: absolute;

  border: 1px solid rgba(255, 255, 255, 0.25);

  border-radius: 50%;
}

.orbit-1 {
  width: 270px;
  height: 270px;
}

.orbit-2 {
  width: 370px;
  height: 370px;

  opacity: 0.5;
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

/* =========================================
   EXPRESSION
========================================= */

.expression-section {
  position: relative;

  z-index: 2;

  max-width: 1000px;

  margin: auto;

  padding: 0 25px 150px;
}

.expression-card {
  padding: 80px 50px;

  text-align: center;

  border: 1px solid rgba(255, 255, 255, 0.25);

  border-radius: 40px;

  background: rgba(255, 255, 255, 0.12);

  backdrop-filter: blur(20px);
}

.expression-icon {
  font-size: 50px;

  margin-bottom: 20px;
}

.expression-card h2 {
  max-width: 750px;

  margin: 0 auto 25px;

  font-size: clamp(45px, 6vw, 70px);

  line-height: 1;

  letter-spacing: -4px;
}

.expression-card h2 span {
  color: #bde5ff;
}

.expression-card p:not(.eyebrow) {
  max-width: 600px;

  margin: 10px auto;

  line-height: 1.7;

  opacity: 0.8;
}

.expression-button {
  display: inline-flex;

  align-items: center;

  gap: 15px;

  margin-top: 25px;

  padding: 9px 10px 9px 25px;

  border-radius: 999px;

  color: #5c4a9d;

  background: white;

  text-decoration: none;

  font-weight: 800;

  transition: 0.25s;
}

.expression-button span {
  width: 45px;
  height: 45px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  color: white;

  background: linear-gradient(135deg, #709cff, #c36bdb);

  font-size: 20px;
}

.expression-button:hover {
  transform: translateY(-3px);
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

  border: 1px solid rgba(255, 255, 255, 0.25);

  border-radius: 45px;

  background: rgba(255, 255, 255, 0.12);

  backdrop-filter: blur(20px);
}

.final-glow {
  position: absolute;

  width: 400px;
  height: 400px;

  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  border-radius: 50%;

  background: #91aaff;

  filter: blur(100px);

  opacity: 0.2;
}

.final-cta > *:not(.final-glow) {
  position: relative;

  z-index: 2;
}

.final-cta h2 {
  margin: 0;

  font-size: clamp(50px, 7vw, 85px);

  line-height: 1;

  letter-spacing: -5px;
}

.final-cta h2 span {
  color: #bde5ff;
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

  color: #5b4c9c;

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

  background: linear-gradient(135deg, #709cff, #c36bdb);

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
  color: #bde5ff;
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 900px) {
  .header {
    padding: 20px;
  }

  .playlist-grid {
    grid-template-columns: 1fr;
  }

  .breathing-card {
    grid-template-columns: 1fr;

    padding: 45px;
  }

  .breathing-visual {
    height: 350px;
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
    padding: 70px 20px 100px;
  }

  .hero h1 {
    font-size: 55px;

    letter-spacing: -3px;
  }

  .hero-text {
    font-size: 16px;
  }

  .emotion-face {
    width: 100px;
    height: 100px;

    font-size: 55px;
  }

  .music-section {
    padding: 0 20px 100px;
  }

  .section-heading {
    flex-direction: column;

    gap: 10px;
  }

  .section-heading h2 {
    font-size: 48px;
  }

  .breathing-section {
    padding: 20px 15px 100px;
  }

  .breathing-card {
    padding: 35px 25px;

    border-radius: 30px;
  }

  .breathing-visual {
    transform: scale(0.8);
  }

  .expression-section {
    padding: 0 15px 100px;
  }

  .expression-card {
    padding: 60px 25px;

    border-radius: 30px;
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

    gap: 10px;
  }
}
</style>
