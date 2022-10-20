<script setup>
import { computed, ref } from "vue";
import Lane from "./components/LaneComp/Lane.vue";
import List from "./components/ListComp/List.vue";
const images = [
  "https://upload.wikimedia.org/wikipedia/commons/c/c4/Eo_circle_red_number-1.svg",
  "https://upload.wikimedia.org/wikipedia/commons/8/8f/Eo_circle_red_number-2.svg",
  "https://upload.wikimedia.org/wikipedia/commons/6/62/Eo_circle_red_number-3.svg",
  "https://upload.wikimedia.org/wikipedia/commons/c/cd/Eo_circle_red_number-4.svg",
  "https://upload.wikimedia.org/wikipedia/commons/6/68/Eo_circle_red_number-5.svg",
];

const isStarted = ref(false);
const standings = ref([]);

function livePosition(val, index) {
  standings.value[index] = val;
}
</script>

<template>
  <div class="mt-4 grid grid-cols-4 gap-2 rounded-lg bg-slate-200 p-2">
    <div class="col-span-4 lg:col-span-3">
      <div class="overflow-hidden rounded-lg">
        <Lane
          v-for="index in 8"
          :key="index"
          :started="isStarted"
          @position="(val) => livePosition(val, index - 1)"
          img-src="https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png"
          background="url(https://img.freepik.com/free-vector/seamless-green-grass-pattern_1284-52275.jpg)"
          line-bg="url(https://cdn.pixabay.com/photo/2012/04/10/16/57/pattern-26399_1280.png)"
        ></Lane>
      </div>
    </div>
    <div class="col-span-4 lg:col-span-1">
      <List></List>
    </div>
    <button
      @click="isStarted = true"
      class="m-3 rounded border-2 border-blue-700 p-3"
    >
      başla
    </button>
  </div>
  {{ standings }}
</template>

<style scoped></style>
