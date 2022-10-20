<script setup>
import { propsToAttrMap } from "@vue/shared";
import ListItem from "./ListItem.vue";
</script>

<template>
  <div class="overflow-hidden rounded-lg border-2 border-orange-400">
    <div class="flex items-center gap-3 bg-orange-400 px-2 py-1">
      <h1 class="text-xl text-slate-200">Leaderboard</h1>
    </div>
    <div class="flex flex-col gap-1 divide-y divide-slate-100 p-2">
      <ListItem v-for="item in 8" :key="item" :index="item"></ListItem>
    </div>
  </div>
</template>

<style scoped></style>
