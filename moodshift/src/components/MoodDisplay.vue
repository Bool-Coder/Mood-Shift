<script setup>
const props = defineProps({
  emotions: {
    type: Object,
    default: () => ({
      neutral: 0,
      happy: 0,
      sad: 0,
      angry: 0,
      fearful: 0,
      disgusted: 0,
      surprised: 0,
    }),
  },
});

const emotions = [
  {
    key: "happy",
    name: "Happy",
    emoji: "😊",
  },
  {
    key: "sad",
    name: "Sad",
    emoji: "😢",
  },
  {
    key: "angry",
    name: "Angry",
    emoji: "😡",
  },
  {
    key: "fearful",
    name: "Fearful",
    emoji: "😨",
  },
  {
    key: "disgusted",
    name: "Disgusted",
    emoji: "🤢",
  },
  {
    key: "surprised",
    name: "Surprised",
    emoji: "😮",
  },
  {
    key: "neutral",
    name: "Neutral",
    emoji: "😐",
  },
];
</script>

<template>
  <div class="mood-display">
    <h2>Expressions</h2>

    <div v-for="emotion in emotions" :key="emotion.key" class="emotion">
      <div class="label">
        <span>
          {{ emotion.emoji }}
          {{ emotion.name }}
        </span>

        <span>
          {{ Math.round((props.emotions[emotion.key] || 0) * 100) }}%
        </span>
      </div>

      <div class="background">
        <div
          class="bar"
          :style="{
            width: (props.emotions[emotion.key] || 0) * 100 + '%',
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mood-display {
  width: 100%;
  max-width: 600px;
}

.mood-display h2 {
  margin-bottom: 20px;
}

.emotion {
  margin-bottom: 15px;
}

.label {
  display: flex;
  justify-content: space-between;

  margin-bottom: 6px;
}

.background {
  width: 100%;
  height: 12px;

  background: #e5e7eb;

  border-radius: 20px;

  overflow: hidden;
}

.bar {
  height: 100%;

  background: #6366f1;

  border-radius: 20px;

  transition: width 0.15s ease;
}
</style>
