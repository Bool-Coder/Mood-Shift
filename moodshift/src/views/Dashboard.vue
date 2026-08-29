```vue
<script setup>
import { computed, onMounted, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { getCurrentUser, logout } from "../services/auth";

const router = useRouter();

const user = ref(null);
const loading = ref(true);

onMounted(async () => {
  user.value = await getCurrentUser();
  loading.value = false;
});

async function handleLogout() {
  await logout();
  router.push("/login");
}

const moods = computed(() => user.value?.moods || []);

const totalMoods = computed(() => moods.value.length);

const averageConfidence = computed(() => {
  if (!moods.value.length) return 0;

  const total = moods.value.reduce(
    (sum, mood) => sum + Number(mood.confidence || 0),
    0
  );

  return Math.round((total / moods.value.length) * 100);
});

const moodCounts = computed(() => {
  const counts = {
    happy: 0,
    sad: 0,
    angry: 0,
    neutral: 0,
  };

  moods.value.forEach((mood) => {
    if (counts[mood.mood] !== undefined) {
      counts[mood.mood]++;
    }
  });

  return counts;
});

const mostCommonMood = computed(() => {
  if (!moods.value.length) return null;

  return Object.entries(moodCounts.value).sort((a, b) => b[1] - a[1])[0][0];
});

function moodEmoji(mood) {
  const emojis = {
    happy: "😊",
    sad: "😢",
    angry: "😡",
    neutral: "😐",
    fearful: "😨",
    disgusted: "🤢",
    surprised: "😮",
  };

  return emojis[mood] || "🙂";
}

function moodClass(mood) {
  return `mood-${mood}`;
}
</script>

<template>
  <div class="dashboard-page">
    <!-- Decorative background -->
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>

    <!-- Loading -->
    <div v-if="loading" class="loading-screen">
      <div class="loading-spinner"></div>
      <p>Loading your MoodShift...</p>
    </div>

    <!-- Dashboard -->
    <template v-else-if="user">
      <!-- Header -->
      <header class="header">
        <RouterLink to="/home" class="logo">
          <span class="logo-face">
            <img src="/logo.png" alt="MoodShift" />
          </span>
        </RouterLink>

        <div class="header-actions">
          <RouterLink to="/home" class="home-button"> ← Home </RouterLink>

          <button class="logout-button" @click="handleLogout">Logout</button>
        </div>
      </header>

      <!-- Main -->
      <main class="main">
        <!-- Hero -->
        <section class="hero">
          <p class="eyebrow">✦ YOUR MOODSPACE</p>

          <h1>
            Welcome back
            <span>👋</span>
          </h1>

          <p class="hero-description">
            Here's a look at your emotional journey with MoodShift.
          </p>

          <div class="user-pill">
            <span class="user-dot"></span>
            {{ user.email }}
          </div>
        </section>

        <!-- Stats -->
        <section class="stats">
          <div class="stat-card">
            <div class="stat-icon">🧠</div>

            <div>
              <p>Total moods</p>
              <h2>{{ totalMoods }}</h2>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">🎯</div>

            <div>
              <p>Avg. confidence</p>
              <h2>{{ averageConfidence }}%</h2>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">
              {{ mostCommonMood ? moodEmoji(mostCommonMood) : "🙂" }}
            </div>

            <div>
              <p>Most detected</p>
              <h2 class="capitalize">
                {{ mostCommonMood || "None" }}
              </h2>
            </div>
          </div>
        </section>

        <!-- Mood overview -->
        <section class="overview-card">
          <div class="section-heading">
            <div>
              <p class="section-label">MOOD OVERVIEW</p>
              <h2>Your emotional landscape</h2>
            </div>

            <span class="section-emoji">✨</span>
          </div>

          <div class="mood-grid">
            <!-- Happy -->
            <div class="mood-overview mood-happy">
              <div class="overview-top">
                <span class="overview-emoji">😊</span>
                <span>{{ moodCounts.happy }}</span>
              </div>

              <h3>Happy</h3>

              <div class="overview-bar">
                <span
                  :style="{
                    width:
                      totalMoods > 0
                        ? `${(moodCounts.happy / totalMoods) * 100}%`
                        : '0%',
                  }"
                ></span>
              </div>
            </div>

            <!-- Sad -->
            <div class="mood-overview mood-sad">
              <div class="overview-top">
                <span class="overview-emoji">😢</span>
                <span>{{ moodCounts.sad }}</span>
              </div>

              <h3>Sad</h3>

              <div class="overview-bar">
                <span
                  :style="{
                    width:
                      totalMoods > 0
                        ? `${(moodCounts.sad / totalMoods) * 100}%`
                        : '0%',
                  }"
                ></span>
              </div>
            </div>

            <!-- Angry -->
            <div class="mood-overview mood-angry">
              <div class="overview-top">
                <span class="overview-emoji">😡</span>
                <span>{{ moodCounts.angry }}</span>
              </div>

              <h3>Angry</h3>

              <div class="overview-bar">
                <span
                  :style="{
                    width:
                      totalMoods > 0
                        ? `${(moodCounts.angry / totalMoods) * 100}%`
                        : '0%',
                  }"
                ></span>
              </div>
            </div>

            <!-- Neutral -->
            <div class="mood-overview mood-neutral">
              <div class="overview-top">
                <span class="overview-emoji">😐</span>
                <span>{{ moodCounts.neutral }}</span>
              </div>

              <h3>Neutral</h3>

              <div class="overview-bar">
                <span
                  :style="{
                    width:
                      totalMoods > 0
                        ? `${(moodCounts.neutral / totalMoods) * 100}%`
                        : '0%',
                  }"
                ></span>
              </div>
            </div>
          </div>
        </section>

        <!-- History -->
        <section class="history-card">
          <div class="section-heading">
            <div>
              <p class="section-label">MOOD HISTORY</p>
              <h2>Your recent moments</h2>
            </div>

            <span class="section-emoji">🕐</span>
          </div>

          <!-- Empty state -->
          <div v-if="moods.length === 0" class="empty-state">
            <div class="empty-icon">🌱</div>

            <h3>Your journey starts here</h3>

            <p>
              You haven't recorded any moods yet. Take a moment to check in with
              yourself.
            </p>

            <RouterLink to="/get-expression" class="discover-button">
              <span>Find my mood</span>
              <span class="arrow">→</span>
            </RouterLink>
          </div>

          <!-- History list -->
          <div v-else class="history-list">
            <div
              v-for="(mood, index) in [...moods].reverse()"
              :key="index"
              class="history-item"
            >
              <div class="history-emoji" :class="moodClass(mood.mood)">
                {{ moodEmoji(mood.mood) }}
              </div>

              <div class="history-info">
                <div class="history-title">
                  <h3>{{ mood.mood }}</h3>

                  <span>
                    {{ Math.round(mood.confidence * 100) }}% confidence
                  </span>
                </div>

                <p>
                  {{ new Date(mood.detectedAt).toLocaleString() }}
                </p>
              </div>

              <div class="history-confidence">
                <div class="confidence-bar">
                  <span
                    :style="{
                      width: `${Math.round(mood.confidence * 100)}%`,
                    }"
                  ></span>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA when history exists -->
          <RouterLink
            v-if="moods.length > 0"
            to="/get-expression"
            class="discover-button history-button"
          >
            <span>Check in again</span>
            <span class="arrow">→</span>
          </RouterLink>
        </section>
      </main>

      <!-- Footer -->
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
    </template>

    <!-- Not authenticated -->
    <div v-else class="not-authenticated">
      <div class="not-auth-card">
        <div class="not-auth-icon">🔐</div>

        <h1>You're not logged in</h1>

        <p>Log in to see your personal mood history.</p>

        <RouterLink to="/login" class="discover-button">
          <span>Go to login</span>
          <span class="arrow">→</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* =================================
   PAGE
================================= */

.dashboard-page {
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
  top: 400px;

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
   LOADING
================================= */

.loading-screen {
  min-height: 100vh;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  gap: 18px;

  font-size: 16px;

  font-weight: 600;
}

.loading-spinner {
  width: 42px;
  height: 42px;

  border: 4px solid rgba(255, 255, 255, 0.3);

  border-top-color: white;

  border-radius: 50%;

  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* =================================
   HEADER
================================= */

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
  width: 44px;
  height: 44px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 50%;
}

.logo-face img {
  width: 100px;
  height: 100px;

  object-fit: contain;
}

.header-actions {
  display: flex;

  align-items: center;

  gap: 10px;
}

.home-button,
.logout-button {
  padding: 11px 20px;

  border: 1px solid rgba(255, 255, 255, 0.3);

  border-radius: 999px;

  color: white;

  background: rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(12px);

  text-decoration: none;

  font-weight: 600;

  cursor: pointer;

  transition: 0.25s;
}

.home-button:hover,
.logout-button:hover {
  background: rgba(255, 255, 255, 0.25);

  transform: translateY(-2px);
}

/* =================================
   MAIN
================================= */

.main {
  position: relative;

  z-index: 2;

  max-width: 1150px;

  margin: 0 auto;

  padding: 45px 25px 80px;
}

/* =================================
   HERO
================================= */

.hero {
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

.hero h1 {
  margin: 0;

  font-size: clamp(52px, 8vw, 86px);

  line-height: 0.95;

  font-weight: 900;

  letter-spacing: -4px;

  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.hero h1 span {
  display: inline-block;

  margin-left: 8px;
}

.hero-description {
  max-width: 600px;

  margin: 25px auto 18px;

  font-size: 18px;

  line-height: 1.6;

  opacity: 0.9;
}

.user-pill {
  display: inline-flex;

  align-items: center;

  gap: 9px;

  padding: 9px 17px;

  border: 1px solid rgba(255, 255, 255, 0.25);

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.13);

  backdrop-filter: blur(12px);

  font-size: 13px;

  opacity: 0.9;
}

.user-dot {
  width: 8px;
  height: 8px;

  border-radius: 50%;

  background: #70ff9b;

  box-shadow: 0 0 10px #70ff9b;
}

/* =================================
   STATS
================================= */

.stats {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 18px;

  margin-bottom: 22px;
}

.stat-card {
  display: flex;

  align-items: center;

  gap: 17px;

  padding: 23px;

  border: 1px solid rgba(255, 255, 255, 0.25);

  border-radius: 24px;

  background: rgba(255, 255, 255, 0.14);

  backdrop-filter: blur(20px);

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);

  transition: transform 0.25s;
}

.stat-card:hover {
  transform: translateY(-4px);
}

.stat-icon {
  width: 52px;
  height: 52px;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-shrink: 0;

  border-radius: 17px;

  background: rgba(255, 255, 255, 0.18);

  font-size: 27px;
}

.stat-card p {
  margin: 0 0 4px;

  font-size: 12px;

  font-weight: 700;

  letter-spacing: 1px;

  text-transform: uppercase;

  opacity: 0.65;
}

.stat-card h2 {
  margin: 0;

  font-size: 28px;

  font-weight: 900;
}

.capitalize {
  text-transform: capitalize;
}

/* =================================
   SHARED CARDS
================================= */

.overview-card,
.history-card {
  padding: 30px;

  border: 1px solid rgba(255, 255, 255, 0.25);

  border-radius: 30px;

  background: rgba(255, 255, 255, 0.14);

  backdrop-filter: blur(20px);

  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.14);
}

.section-heading {
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 25px;
}

.section-label {
  margin: 0 0 5px;

  font-size: 11px;

  font-weight: 800;

  letter-spacing: 2px;

  opacity: 0.6;
}

.section-heading h2 {
  margin: 0;

  font-size: 28px;

  font-weight: 900;
}

.section-emoji {
  width: 52px;
  height: 52px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 17px;

  background: rgba(255, 255, 255, 0.15);

  font-size: 25px;
}

/* =================================
   MOOD OVERVIEW
================================= */

.mood-grid {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 14px;
}

.mood-overview {
  padding: 18px;

  border: 1px solid rgba(255, 255, 255, 0.16);

  border-radius: 20px;

  background: rgba(255, 255, 255, 0.09);
}

.overview-top {
  display: flex;

  align-items: center;

  justify-content: space-between;
}

.overview-emoji {
  font-size: 29px;
}

.overview-top > span:last-child {
  font-size: 21px;

  font-weight: 900;
}

.mood-overview h3 {
  margin: 13px 0;

  font-size: 15px;
}

.overview-bar {
  height: 7px;

  overflow: hidden;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.16);
}

.overview-bar span {
  display: block;

  height: 100%;

  min-width: 0;

  border-radius: inherit;

  background: white;

  transition: width 0.5s ease;
}

.mood-happy .overview-bar span {
  background: #fff176;
}

.mood-sad .overview-bar span {
  background: #79d7ff;
}

.mood-angry .overview-bar span {
  background: #ff8c8c;
}

.mood-neutral .overview-bar span {
  background: #d7c5ff;
}

/* =================================
   HISTORY
================================= */

.history-card {
  margin-top: 22px;
}

.history-list {
  display: flex;

  flex-direction: column;

  gap: 12px;
}

.history-item {
  display: flex;

  align-items: center;

  gap: 16px;

  padding: 15px;

  border: 1px solid rgba(255, 255, 255, 0.15);

  border-radius: 20px;

  background: rgba(255, 255, 255, 0.08);

  transition: 0.25s;
}

.history-item:hover {
  background: rgba(255, 255, 255, 0.13);

  transform: translateX(4px);
}

.history-emoji {
  width: 52px;
  height: 52px;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-shrink: 0;

  border-radius: 17px;

  background: rgba(255, 255, 255, 0.15);

  font-size: 27px;
}

.history-info {
  flex: 1;

  min-width: 0;
}

.history-title {
  display: flex;

  align-items: center;

  gap: 10px;
}

.history-title h3 {
  margin: 0;

  font-size: 17px;

  text-transform: capitalize;
}

.history-title span {
  padding: 4px 9px;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.12);

  font-size: 10px;

  font-weight: 700;

  opacity: 0.8;
}

.history-info p {
  margin: 5px 0 0;

  font-size: 12px;

  opacity: 0.6;
}

.history-confidence {
  width: 130px;
}

.confidence-bar {
  height: 7px;

  overflow: hidden;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.13);
}

.confidence-bar span {
  display: block;

  height: 100%;

  border-radius: inherit;

  background: linear-gradient(90deg, #fff36b, #ff73c6, #8c70ff);
}

/* =================================
   EMPTY STATE
================================= */

.empty-state {
  padding: 45px 25px;

  text-align: center;

  border: 1px dashed rgba(255, 255, 255, 0.25);

  border-radius: 22px;

  background: rgba(255, 255, 255, 0.06);
}

.empty-icon {
  margin-bottom: 12px;

  font-size: 45px;
}

.empty-state h3 {
  margin: 0 0 8px;

  font-size: 22px;
}

.empty-state p {
  max-width: 500px;

  margin: 0 auto 25px;

  font-size: 14px;

  line-height: 1.6;

  opacity: 0.7;
}

/* =================================
   BUTTON
================================= */

.discover-button {
  width: 230px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin: 25px auto 0;

  padding: 8px 10px 8px 22px;

  border-radius: 999px;

  color: #ed4b9b;

  background: white;

  text-decoration: none;

  font-size: 15px;

  font-weight: 800;

  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.18);

  transition: transform 0.25s;
}

.discover-button:hover {
  transform: translateY(-3px);
}

.arrow {
  width: 43px;
  height: 43px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 50%;

  color: white;

  background: linear-gradient(135deg, #ff4fa3, #743cff);

  font-size: 22px;
}

.history-button {
  margin-top: 22px;
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
   NOT AUTHENTICATED
================================= */

.not-authenticated {
  min-height: 100vh;

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 25px;
}

.not-auth-card {
  width: 100%;

  max-width: 450px;

  padding: 45px 30px;

  text-align: center;

  border: 1px solid rgba(255, 255, 255, 0.25);

  border-radius: 30px;

  background: rgba(255, 255, 255, 0.14);

  backdrop-filter: blur(20px);

  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
}

.not-auth-icon {
  font-size: 50px;

  margin-bottom: 15px;
}

.not-auth-card h1 {
  margin: 0 0 10px;

  font-size: 32px;
}

.not-auth-card p {
  margin: 0;

  opacity: 0.7;
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

  .stats {
    grid-template-columns: 1fr;
  }

  .mood-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .overview-card,
  .history-card {
    padding: 22px;
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

  .header-actions {
    gap: 6px;
  }

  .home-button,
  .logout-button {
    padding: 9px 13px;

    font-size: 12px;
  }

  .main {
    padding: 30px 15px 50px;
  }

  .hero h1 {
    font-size: 50px;

    letter-spacing: -3px;
  }

  .hero-description {
    font-size: 15px;
  }

  .user-pill {
    max-width: 100%;

    overflow: hidden;

    text-overflow: ellipsis;

    white-space: nowrap;
  }

  .mood-grid {
    grid-template-columns: 1fr 1fr;

    gap: 10px;
  }

  .section-heading h2 {
    font-size: 23px;
  }

  .history-item {
    padding: 12px;

    gap: 11px;
  }

  .history-emoji {
    width: 44px;
    height: 44px;

    border-radius: 14px;

    font-size: 23px;
  }

  .history-title {
    flex-wrap: wrap;

    gap: 5px;
  }

  .history-title h3 {
    font-size: 15px;
  }

  .history-title span {
    font-size: 9px;
  }

  .history-info p {
    font-size: 10px;
  }

  .history-confidence {
    display: none;
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
