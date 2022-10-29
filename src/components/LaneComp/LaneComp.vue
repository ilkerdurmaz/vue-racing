<script setup>
import { ref, watch } from "vue";
import Image from "../Shared/Image.vue";
import Line from "./LineComp.vue";
import { sleep, getRandomInt } from "../../utils.js";

const props = defineProps({
  background: {
    type: String,
    default: "gray",
  },
  bgSize: {
    type: String,
    default: "auto",
  },
  imgSrc: {
    type: String,
    default:
      "https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png",
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

const emit = defineEmits(["imgPositionChanged"]);
const speed = ref(30);
const position = ref(0);
const frame = ref(1);
let interval;

watch(
  () => props.started,
  () => {
    props.started ? move() : resetLane();
  }
);
/* 
* increases position with a certain delay up to 100,
*
* Each position increase:
- changes the frame value connected to img-src, resets it when the value is 12,
- emits the changed position.
*/
async function move() {
  randomAcceleration();
  for (let i = 0; i < 500; i++) {
    if (i % 4 == 0) frame.value++;
    if (frame.value > 12) frame.value = 1;
    position.value += 0.2;
    await sleep(31 - speed.value); // works different in mozilla and chrome
    emit("imgPositionChanged", Math.round(position.value));
  }
  clearInterval(interval);
}
/*
 * rastgele belirlenen zaman aralıklarında ve verilen aralıkta speed değerini değiştirir.
 */
function randomAcceleration() {
  speed.value = getRandomInt(0, 15); // for randomize starting acceleration
  interval = setInterval(() => {
    speed.value = getRandomInt(0, 20);
  }, getRandomInt(1000, 3000));
}

function resetLane() {
  clearInterval(interval);
  position.value = 0;
  emit("imgPositionChanged", Math.round(position.value));
}
</script>

<template>
  <div class="flex">
    <div
      class="flex w-full pr-12 sm:pr-16 lg:pr-28 bg-center bg-no-repeat"
      :style="{
        background: props.background,
        backgroundSize: props.bgSize,
      }"
    >
      <span class="relative" :style="{ left: position + '%' }">
        <Image
          class="w-12 sm:w-16 lg:w-28"
          :img-src="`/horse/${frame}.png`"
        ></Image>
      </span>
      <Line class="w-3.5 sm:w-4 lg:w-5" :background="props.lineBg"></Line>
    </div>
    <Line class="ml-auto w-3.5 sm:w-4 lg:w-5" :background="props.lineBg"></Line>
  </div>
</template>
