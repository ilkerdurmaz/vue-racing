<script setup>
import { computed } from "@vue/reactivity";
import { onUpdated, ref, watch } from "vue";
import Image from "../Image.vue";
import Line from "./Line.vue";
const props = defineProps({
  imgSize: {
    type: Number,
    default: 64,
  },
  background: {
    type: String,
    default: "gray",
  },
  bgSize: {
    type: Number,
    default: 150,
  },
  imgSrc: {
    type: String,
    default: "https://dummyimage.com/240/000000/fff",
  },
  lineWidth: {
    type: Number,
    default: 20,
  },
  lineBg: {
    type: String,
    default: "red",
  },
  lineBgSize: {
    type: Number,
    default: 100,
  },
  started: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["finished", "position"]);
const speed = ref(30);
const position = ref(0);
let interval;

function sleep(m) {
  return new Promise((resolve) => setTimeout(resolve, m));
}

async function move() {
  randomAcceleration();
  for (let i = 0; i < 500; i++) {
    position.value += 0.2;
    await sleep(1 + speed.value);
    emit("position", { position: Math.round(position.value), speed });
  }
  clearInterval(interval);
}

watch(
  () => props.started,
  () => {
    move();
  }
);

const getRandomInt = (min, max) => Math.round(Math.random() * max) + min;

function randomAcceleration() {
  speed.value = getRandomInt(0, 30);
  interval = setInterval(() => {
    speed.value = getRandomInt(0, 20);
  }, getRandomInt(1000, 3000));
}
</script>

<template>
  <div
    class="flex"
    :style="{
      paddingRight: props.imgSize + 'px',
      background: props.background,
      backgroundSize: props.bgSize + 'px',
    }"
  >
    <span class="relative" :style="{ left: position + '%' }">
      <Image :size="props.imgSize" :img-src="props.imgSrc"></Image>
    </span>
    <Line
      :background="props.lineBg"
      :background-size="props.lineBgSize"
      :width="props.lineWidth"
    ></Line>
    <Line
      :background="props.lineBg"
      :background-size="props.lineBgSize"
      :width="props.lineWidth"
      class="ml-auto"
    ></Line>
  </div>
</template>
