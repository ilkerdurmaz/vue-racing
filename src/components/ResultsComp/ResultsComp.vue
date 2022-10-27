<script setup>
import IconButton from "../Shared/IconButton.vue";

const props = defineProps({
  resultsActive: {
    type: Boolean,
    default: false,
  },
  results: {
    type: Array,
    default: [],
  },
});

const emit = defineEmits(["closeBtnClick"]);
</script>

<template>
  <Transition name="backdrop-transition">
    <div v-if="props.resultsActive" class="results">
      <div class="results-header">
        <span class="w-8"></span>
        <span class="text-2xl">Race Results</span>
        <IconButton @click="emit('closeBtnClick')"
          ><i class="bi bi-x-lg"></i
        ></IconButton>
      </div>
      <div class="podium">
        <div class="podium-bar">
          <div class="bar-text">
            {{ props.results[1].racerName }}
          </div>
          <div class="silver serif-font">2</div>
        </div>
        <div class="podium-bar">
          <div class="bar-text">{{ props.results[0].racerName }}</div>
          <div class="gold serif-font">1</div>
        </div>
        <div class="podium-bar">
          <div class="bar-text">{{ props.results[2].racerName }}</div>
          <div class="bronze serif-font">3</div>
        </div>
      </div>
      <span class="text-xs text-neutral-300 py-1"
        >You can restart the race by pressing "Start Race" button.
      </span>
    </div>
  </Transition>
</template>

<style scoped>
.results {
  @apply p-2 lg:p-4 bg-neutral-900 bg-opacity-90 overflow-hidden flex flex-col text-white justify-between items-center z-10 absolute h-full w-full;
}
.results-header {
  @apply flex justify-between items-center w-full;
}
.podium {
  @apply flex items-end text-sm text-center break-words;
}
.podium-bar {
  @apply w-24 sm:w-36;
}
.bar-text {
  @apply mb-1 text-xs sm:text-base md:text-lg;
}
.gold {
  @apply bg-gradient-to-r from-[#BF953F] via-[#FBF5B7] to-[#BF953F] text-9xl rounded-t-md h-36 sm:h-48;
  text-shadow: 0 0 3px #bf953f;
}
.silver {
  @apply bg-gradient-to-r from-[#878684] via-[#E3E3E3] to-[#878684] text-8xl rounded-l-md  h-24 sm:h-32;
  text-shadow: 0 0 3px #878684;
}
.bronze {
  @apply bg-gradient-to-r from-[#6E3B07] via-[#B28E58] to-[#6E3B07] text-5xl md:text-6xl rounded-r-md h-12 sm:h-16;
  text-shadow: 0 0 3px #6e3b07;
}
.backdrop-transition-enter-active,
.backdrop-transition-leave-active {
  @apply transition duration-150;
}
.backdrop-transition-enter-from,
.backdrop-transition-leave-to {
  @apply opacity-0;
}
</style>
