<script setup>
import { ref, onMounted } from 'vue'

const data = ref(null)
const error = ref(null)
const loading = ref(true)

const token = 'YOUR_SPOTIFY_ACCESS_TOKEN'

onMounted(async () => {
  try {
    const params = new URLSearchParams({
      q: 'remaster track:Doxy artist:Miles Davis',
      type: 'album'
    })

    const response = await fetch(
      `https://api.spotify.com/v1/search?${params}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    if (!response.ok) {
      throw new Error(`Spotify HTTP error: ${response.status}`)
    }

    data.value = await response.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div>
    <p v-if="loading">Loading Spotify...</p>

    <p v-else-if="error">
      Error: {{ error }}
    </p>

    <pre v-else>{{ JSON.stringify(data, null, 2) }}</pre>
  </div>
</template>
