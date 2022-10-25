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
    class="bg-[length:50px]"
    :style="{
      background: background,
    }"
  ></div>
</template>
