<script setup>
const props = defineProps({
  imgSrc: {
    type: String,
    default: "https://dummyimage.com/240/000000/fff",
  },
  size: {
    type: Number,
    default: 64,
  },
  alt: {
    type: String,
    default: "image",
  },
});
</script>

<template>
  <img :src="props.imgSrc" :alt="props.alt" :width="props.size" />
</template>
