<script setup>
const props = defineProps({
  index: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="list-item">
    <span
      class="index-symbol font-serif"
      :class="[index > 3 ? 'gradient-others' : `gradient-${props.index}`]"
      >{{ props.index }}</span
    >
    <slot></slot>
  </div>
</template>

<style scoped>
.list-item {
  @apply flex items-center gap-2 py-1 lg:py-2.5 xl:py-4;
}
.index-symbol {
  @apply flex shrink-0 h-8 w-8 items-center justify-center rounded-full text-white border-2 text-lg text-shadow-sm shadow-black;
}
.gradient-others {
  @apply bg-gradient-to-br from-pink-500 to-orange-400 dark:border-neutral-700;
}
.gradient-1 {
  @apply bg-gradient-to-br from-[#BF953F] via-[#FBF5B7] to-[#BF953F] border-[#BF953F];
}
.gradient-2 {
  @apply bg-gradient-to-br from-[#878684] via-[#E3E3E3] to-[#878684] border-[#878684];
}
.gradient-3 {
  @apply bg-gradient-to-br from-[#6E3B07] via-[#B28E58] to-[#6E3B07] border-[#6E3B07];
}
</style>
