<script setup>
defineProps({
  background: {
    type: String,
    default: "red",
  },
});
</script>

<template>
  <div
    class="bg-white bg-[length:50px]"
    :style="{
      backgroundImage: background,
    }"
  ></div>
</template>
