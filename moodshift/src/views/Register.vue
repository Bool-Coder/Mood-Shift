<script setup>
import { ref } from "vue";
import api from "../services/api";

const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const error = ref("");
const success = ref("");
const loading = ref(false);

async function register() {
  error.value = "";
  success.value = "";

  if (password.value !== confirmPassword.value) {
    error.value = "Passwords do not match.";
    return;
  }
  loading.value = true;
  try {
    await api.post("/auth/register", {
      email: email.value,
      password: password.value,
    });
    success.value = "Account created succesfully";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
  } catch (err) {
    error.value = err.response?.data?.message || "Something went wrong.";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="register-page">
    <!-- Decorative background -->
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

      <RouterLink to="/login" class="header-button">
        Already have an account
        <span>→</span>
      </RouterLink>
    </header>

    <!-- REGISTER -->
    <main class="register-container">
      <div class="register-card">
        <div class="register-icon">✨</div>

        <p class="welcome">Start your journey</p>

        <h1>Mood<span>Shift</span></h1>

        <div class="rainbow-line"></div>

        <p class="subtitle">
          Create your account and discover a better way to understand your mood.
        </p>

        <form @submit.prevent="register">
          <!-- EMAIL -->
          <div class="input-group">
            <label for="email"> Email </label>

            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <!-- PASSWORD -->
          <div class="input-group">
            <label for="password"> Password </label>

            <input
              id="password"
              v-model="password"
              type="password"
              placeholder="Create a password"
              required
            />
          </div>

          <!-- CONFIRM PASSWORD -->
          <div class="input-group">
            <label for="confirm-password"> Confirm password </label>

            <input
              id="confirm-password"
              v-model="confirmPassword"
              type="password"
              placeholder="Enter your password again"
              required
            />
          </div>

          <!-- SUBMIT -->
          <button class="register-button" type="submit" :disabled="loading">
            <span>
              {{ loading ? "Creating..." : "Create account" }}
            </span>

            <span class="button-arrow"> → </span>
          </button>

          <!-- ERROR -->
          <p v-if="error" class="message error">
            {{ error }}
          </p>

          <!-- SUCCESS -->
          <p v-if="success" class="message success">
            {{ success }}
          </p>
        </form>

        <!-- LOGIN LINK -->
        <p class="login-text">
          Already have an account?

          <RouterLink to="/login"> Log in </RouterLink>
        </p>
      </div>
    </main>

    <!-- FOOTER -->
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

        <!-- NAVIGATION -->
        <div class="footer-section">
          <h4>Explore</h4>

          <RouterLink to="/home"> Home </RouterLink>

          <RouterLink to="/get-expression"> Find your mood </RouterLink>
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

      <!-- FOOTER BOTTOM -->
      <div class="footer-bottom">
        <span> © 2026 MoodShift </span>

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

.register-page {
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
  width: 70px;
  height: 70px;

  object-fit: contain;
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
   REGISTER CONTAINER
========================= */

.register-container {
  position: relative;
  z-index: 2;

  min-height: 700px;

  display: flex;

  justify-content: center;
  align-items: center;

  padding: 35px 20px 80px;
}

/* =========================
   REGISTER CARD
========================= */

.register-card {
  width: 100%;
  max-width: 470px;

  padding: 45px;

  border: 1px solid rgba(255, 255, 255, 0.3);

  border-radius: 35px;

  background: rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(25px);

  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);

  text-align: center;
}

/* =========================
   ICON
========================= */

.register-icon {
  width: 85px;
  height: 85px;

  margin: 0 auto 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: linear-gradient(135deg, #ffe600, #ff58c7, #6d5dfc, #00d9ff);

  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2), 0 0 35px rgba(255, 255, 255, 0.2);

  font-size: 42px;
}

/* =========================
   TITLE
========================= */

.welcome {
  margin: 0 0 4px;

  font-size: 20px;

  opacity: 0.85;
}

.register-card h1 {
  margin: 0;

  font-size: 55px;

  line-height: 1;

  font-weight: 900;

  letter-spacing: -3px;
}

.register-card h1 span {
  color: #fff6a0;
}

.rainbow-line {
  width: 180px;
  height: 5px;

  margin: 18px auto;

  border-radius: 999px;

  background: linear-gradient(90deg, #ff62a5, #ffd84d, #55e5ff, #b46cff);

  transform: rotate(-1deg);
}

.subtitle {
  max-width: 380px;

  margin: 0 auto 30px;

  font-size: 15px;

  line-height: 1.5;

  opacity: 0.8;
}

/* =========================
   FORM
========================= */

form {
  display: flex;

  flex-direction: column;

  gap: 18px;

  text-align: left;
}

.input-group {
  display: flex;

  flex-direction: column;

  gap: 8px;
}

.input-group label {
  padding-left: 5px;

  font-size: 14px;

  font-weight: 700;

  opacity: 0.9;
}

.input-group input {
  width: 100%;

  box-sizing: border-box;

  padding: 16px 18px;

  border: 1px solid rgba(255, 255, 255, 0.3);

  border-radius: 16px;

  outline: none;

  color: white;

  background: rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(10px);

  font-size: 16px;

  transition: 0.25s;
}

.input-group input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.input-group input:focus {
  border-color: rgba(255, 255, 255, 0.8);

  background: rgba(255, 255, 255, 0.2);

  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.08);
}

/* =========================
   REGISTER BUTTON
========================= */

.register-button {
  width: 100%;

  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-top: 7px;

  padding: 8px 8px 8px 25px;

  border: none;

  border-radius: 999px;

  color: #ed4b9b;

  background: white;

  font-size: 18px;

  font-weight: 800;

  cursor: pointer;

  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);

  transition: transform 0.25s, box-shadow 0.25s;
}

.register-button:hover:not(:disabled) {
  transform: translateY(-3px);

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
}

.register-button:disabled {
  cursor: not-allowed;

  opacity: 0.7;
}

.button-arrow {
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

/* =========================
   MESSAGES
========================= */

.message {
  margin: 0;

  padding: 12px 15px;

  border-radius: 12px;

  text-align: center;

  font-size: 14px;
}

.error {
  background: rgba(255, 70, 100, 0.2);

  border: 1px solid rgba(255, 150, 160, 0.35);
}

.success {
  background: rgba(70, 255, 160, 0.2);

  border: 1px solid rgba(150, 255, 190, 0.35);
}

/* =========================
   LOGIN LINK
========================= */

.login-text {
  margin: 28px 0 0;

  font-size: 14px;

  opacity: 0.8;
}

.login-text a {
  color: white;

  font-weight: 800;

  text-decoration: underline;

  text-underline-offset: 3px;
}

.login-text a:hover {
  color: #fff6a0;
}

/* =========================
   FOOTER
========================= */

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

/* =========================
   MOBILE
========================= */

@media (max-width: 800px) {
  .header {
    padding: 20px;
  }

  .header-button {
    padding: 10px 16px;

    font-size: 14px;
  }

  .register-container {
    min-height: auto;

    padding: 35px 20px 70px;
  }

  .register-card {
    padding: 35px 25px;

    border-radius: 28px;
  }

  .register-card h1 {
    font-size: 48px;
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

  .register-card {
    padding: 30px 20px;
  }

  .register-icon {
    width: 70px;
    height: 70px;

    font-size: 35px;
  }

  .register-card h1 {
    font-size: 42px;
  }

  .footer-content {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
