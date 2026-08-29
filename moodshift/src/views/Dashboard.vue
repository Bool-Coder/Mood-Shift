<script setup>
import { onMounted, ref } from "vue";
import { getCurrentUser, logout } from "../services/auth";
import { useRouter } from "vue-router";

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
</script>
<template>
  <div v-if="loading">Loading...</div>

  <div v-else-if="user">
    <h1>Welcome to MoodShift 👋</h1>

    <p>Logged in as {{ user.email }}</p>

    <p v-if="user.moods.length === 0">You have no mood history</p>

    <ul v-else>
      <li v-for="(mood, index) in user.moods" :key="index">
        <strong>{{ mood.mood }}</strong>
        — {{ Math.round(mood.confidence * 100) }}% —
        {{ new Date(mood.detectedAt).toLocaleString() }}
      </li>
    </ul>

    <button @click="handleLogout">Logout</button>
  </div>
</template>
