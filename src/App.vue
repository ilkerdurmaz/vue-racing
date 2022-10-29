<script setup>
import { ref, computed } from "vue";
import Lane from "./components/LaneComp/LaneComp.vue";
import List from "./components/ListComp/ListComp.vue";
import HeaderComp from "./components/HeaderComp.vue";
import Modal from "./components/Shared/Modal.vue";
import FooterComp from "./components/FooterComp.vue";
import SettingsComp from "./components/SettingsComp/SettingsComp.vue";
import laneData from "./assets/data/lanes.json";
import PingText from "./components/Shared/PingTextComp.vue";
import ResultsComp from "./components/ResultsComp/ResultsComp.vue";
import { readLocal, writeLocal } from "./utils";

const darkMode = ref(
  readLocal("darkMode") == null ? false : readLocal("darkMode")
);
const lanes = ref(
  readLocal("laneSettings") == null ? laneData : readLocal("laneSettings")
);
const isStarted = ref(false);
const showModal = ref(false);
const count = ref(3);
const countDownShow = ref(false);
const tempList = ref([...lanes.value]);

const sortedLanes = computed(() => {
  return tempList.value.sort((a, b) => b.position - a.position);
});

const isFinished = computed(() => {
  return sortedLanes.value[sortedLanes.value.length - 1].position == 100;
  // returns true/false based on the position of the last element in the sortedLanes array
});

function darkModeHandler() {
  darkMode.value = !darkMode.value;
  writeLocal("darkMode", darkMode.value);
}

function saveSettings() {
  showModal.value = false;
  writeLocal("laneSettings", lanes.value);
}

function resetLanes() {
  isStarted.value = false;
  countDownShow.value = false;
  tempList.value = [...lanes.value];
}

function startRace() {
  resetLanes();
  countDownToStart();
}
/* shows the countdown component, 
subtracts every second from the specified value, 
when the value is 0, it closes the countdown component and starts the race. */
function countDownToStart() {
  countDownShow.value = true;
  const interval = setInterval(() => {
    count.value--;
    if (count.value == 0) {
      clearInterval(interval);
      isStarted.value = true;
      countDownShow.value = false;
      count.value = 3;
    }
  }, 1000);
}
</script>

<template>
  <div :class="{ dark: darkMode }">
    <div class="min-h-screen dark:bg-neutral-900">
      <HeaderComp
        title="Vue Racing App"
        :main-btn-disable="(isStarted && !isFinished) || countDownShow"
        main-btn-text="Start Race"
        :dark-mode="darkMode"
        @mainBtnClick="startRace"
        @darkModeClick="darkModeHandler"
      ></HeaderComp>
      <main class="main-container">
        <section class="race-track">
          <ResultsComp
            :results-active="isFinished"
            :results="sortedLanes"
            @close-btn-click="resetLanes"
          ></ResultsComp>
          <PingText
            color="white"
            :text="count + ''"
            :ping-text-active="countDownShow"
          ></PingText>
          <Lane
            v-for="(lane, index) in lanes"
            :key="lane.racerName"
            :background="lane.laneColor"
            lineBg="url('https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX2446338.jpg')"
            :started="isStarted"
            @img-position-changed="(val) => (lanes[index].position = val)"
          ></Lane>
        </section>
        <section class="leaderboard">
          <List :list="sortedLanes"></List>
        </section>
      </main>
      <FooterComp @settingsBtnClick="showModal = true"></FooterComp>
    </div>
    <Modal
      :modal-active="showModal"
      @modalClose="showModal = false"
      :dark-mode="darkMode"
      title="Racing Lane Settings"
      accept-button-text="Save"
      @acceptClick="saveSettings"
    >
      <SettingsComp v-model:lanes="lanes"></SettingsComp>
    </Modal>
  </div>
</template>

<style scoped>
.main-container {
  @apply grid grid-cols-4 rounded-lg max-w-7xl mx-auto gap-2 px-1 mt-2 sm:mt-4 sm:gap-4 sm:px-4;
}
.race-track {
  @apply col-span-4 xl:col-span-3 overflow-hidden rounded-lg relative border-2 dark:border-neutral-700;
}
.leaderboard {
  @apply col-span-4 xl:col-span-1;
}
</style>
