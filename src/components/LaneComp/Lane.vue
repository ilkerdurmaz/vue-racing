<script setup>
import { ref, watch } from "vue";
import Image from "../Image.vue";
import Line from "./Line.vue";

const props = defineProps({
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
  lineBg: {
    type: String,
    default: "red",
  },
  started: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["position"]);
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
    class="flex pr-16 sm:pr-20 lg:pr-32"
    :style="{
      background: props.background,
      backgroundSize: props.bgSize + 'px',
    }"
  >
    <span class="relative" :style="{ left: position + '%' }">
      <Image class="w-16 sm:w-20 lg:w-32" :img-src="props.imgSrc"></Image>
    </span>
    <Line class="w-3.5 lg:w-5" :background="props.lineBg"></Line>
    <Line class="ml-auto w-3.5 lg:w-5" :background="props.lineBg"></Line>
  </div>
</template>
