<script setup>
import { reactive } from "vue";

const props = defineProps({
  laneSettings: {
    type: Object,
    default: {},
  },
  laneIndex: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["settingsChanged"]);
const changedLaneSettings = reactive({
  ...props.laneSettings,
});

function nameChangeHandler(e) {
  changedLaneSettings.racerName = e.target.value;
  emit("settingsChanged", changedLaneSettings);
}
function laneColorChangeHandler(e) {
  changedLaneSettings.laneColor = e.target.value;
  emit("settingsChanged", changedLaneSettings);
}
</script>

<template>
  <div class="settings-container">
    <span class="index-symbol">{{ props.laneIndex + 1 }}</span>
    <input
      type="text"
      :value="props.laneSettings.racerName"
      @change="nameChangeHandler"
      placeholder="Racer Name"
      class="racer-name-input"
    />
    <span class="lane-color"
      >Lane Color:
      <input
        type="color"
        :value="props.laneSettings.laneColor"
        @change="laneColorChangeHandler"
        class="color-picker"
    /></span>
  </div>
</template>

<style scoped>
.settings-container {
  @apply flex gap-2 dark:text-white border rounded-md p-2 border-neutral-400;
}
.index-symbol {
  @apply flex h-8 w-8 items-center justify-center rounded-full text-white bg-gradient-to-br from-pink-500 to-orange-400 pb-0.5 text-lg;
}
.racer-name-input {
  @apply border rounded px-1 bg-transparent border-neutral-400 dark:border-neutral-700 w-40;
}
.lane-color {
  @apply flex items-center gap-2 text-xs sm:text-base;
}
.color-picker {
  -webkit-appearance: none;
  @apply p-0 border border-neutral-700 rounded-full w-8 h-8;
}
.color-picker::-webkit-color-swatch {
  @apply p-0 border-none rounded-full;
}
.color-picker::-webkit-color-swatch-wrapper {
  @apply p-0 border-none rounded-full;
}
</style>
