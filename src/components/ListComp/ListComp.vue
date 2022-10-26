<script setup>
import ListItem from "./ListItemComp.vue";
const props = defineProps({
  list: {
    type: Array,
    default: [],
  },
});
</script>

<template>
  <div class="list">
    <div class="list-background">
      <div class="list-header">
        <h1 class="title">Leaderboard</h1>
      </div>
      <div class="list-body">
        <div
          class="flex text-xs text-neutral-400 divide-x dark:divide-neutral-700"
        >
          <span class="p-1 pl-0">PLACE</span>
          <span class="p-1">RACER NAME</span>
          <span class="ml-auto p-1">LANE</span>
        </div>

        <ListItem
          v-for="(lane, index) in props.list"
          :key="lane.laneNumber"
          :index="index + 1"
        >
          <div class="text-lg flex items-center justify-between gap-2 w-full">
            <span>{{ lane.racerName }}</span>
            <span
              class="flex w-8 h-8 shrink-0 items-center justify-center rounded-full"
              ><i
                class="bi text-2xl px-2 flex"
                :class="[`bi-${lane.laneNumber}-circle`]"
                :style="{ color: lane.laneColor }"
              ></i
            ></span>
          </div>
        </ListItem>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list {
  @apply overflow-hidden rounded-lg shadow;
}
.list-background {
  @apply p-0.5  bg-gradient-to-br from-pink-500 to-orange-400 dark:from-neutral-800 dark:to-neutral-800;
}
.list-header {
  @apply flex items-center gap-3 p-2 sm:p-3;
}
.title {
  @apply text-xl sm:text-2xl text-white;
}
.list-body {
  @apply flex flex-col divide-y px-2 dark:divide-neutral-700 dark:text-white bg-white dark:bg-neutral-900 rounded-md;
}
</style>
