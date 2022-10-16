<script setup>
const props = defineProps({
  imgSrc: {
    type: String,
    default: "https://dummyimage.com/240/000000/fff",
  },
  size: {
    type: Number,
    default: 240,
  },
});
</script>
<template>
  <img :src="props.imgSrc" :width="props.size" />
</template>

<style scoped></style>
