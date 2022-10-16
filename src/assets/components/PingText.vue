<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "Ping Text",
  },
  size: {
    type: Number,
    default: 100,
  },
  color: {
    type: String,
    default: "black",
  },
  ping: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div
    :class="{ 'animate-ping': props.ping }"
    :style="{ fontSize: `${props.size}px`, color: props.color }"
  >
    {{ props.text }}
  </div>
</template>
