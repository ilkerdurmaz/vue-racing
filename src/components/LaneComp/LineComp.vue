<script setup>
defineProps({
  background: {
    type: String,
    default: "white",
  },
});
</script>

<template>
  <div
    class="bg-cover bg-center bg-no-repeat"
    :style="{
      backgroundImage: background,
    }"
  ></div>
</template>
