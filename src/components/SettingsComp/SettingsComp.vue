<script setup>
import LaneSettings from "./LaneSettingsComp.vue";
const props = defineProps(["lanes"]);
const emit = defineEmits(["update:lanes"]);
/* it updates given props with updated values and emits */
function settingsChangedHandler(val, index) {
  const updatedSettings = [...props.lanes];
  updatedSettings[index] = val;
  emit("update:lanes", updatedSettings);
}
</script>

<template>
  <section class="flex flex-col gap-2 p-2 sm:p-3">
    <LaneSettings
      v-for="(lane, index) in lanes"
      :key="lane.racerName"
      :lane-settings="lane"
      :lane-index="index"
      @settings-changed="(val) => settingsChangedHandler(val, index)"
    ></LaneSettings>
  </section>
</template>
