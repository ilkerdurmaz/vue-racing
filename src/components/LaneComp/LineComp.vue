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
    class="bg-[length:29px] sm:bg-[length:40px]"
    :style="{
      backgroundImage: background,
    }"
  ></div>
</template>
