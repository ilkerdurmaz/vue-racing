<script setup>
defineProps({
  background: {
    type: String,
    default: "red",
  },
  width: {
    type: Number,
    default: 10,
  },
  backgroundSize: {
    type: Number,
    default: 100,
  },
});
</script>

<template>
  <div
    :style="{
      background,
      width: width + 'px',
      backgroundSize: backgroundSize + 'px',
    }"
  ></div>
</template>
