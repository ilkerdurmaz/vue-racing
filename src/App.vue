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

const darkMode = ref(
  localStorage.getItem("darkMode")
    ? JSON.parse(localStorage.getItem("darkMode"))
    : true
);
const lanes = ref(
  localStorage.getItem("laneSettings")
    ? JSON.parse(localStorage.getItem("laneSettings"))
    : laneData
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
});

function darkModeHandler() {
  darkMode.value = !darkMode.value;
  localStorage.setItem("darkMode", darkMode.value);
}

function saveSettings() {
  showModal.value = false;
  localStorage.setItem("laneSettings", JSON.stringify(lanes.value));
}

function closeWithoutSave() {
  showModal.value = false;
  // lanes.value = localStorage.getItem("laneSettings")
  //   ? JSON.parse(localStorage.getItem("laneSettings"))
  //   : laneData;
}

function resetLanes() {
  isStarted.value = false;
  countDownShow.value = false;
}

function startRace() {
  resetLanes();
  countDownToStart();
}

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
    <main class="min-h-screen dark:bg-neutral-900">
      <HeaderComp
        title="Vue Racing App"
        :main-btn-disable="(isStarted && !isFinished) || countDownShow"
        main-btn-text="Start Race"
        :dark-mode="darkMode"
        @mainBtnClick="startRace"
        @darkModeClick="darkModeHandler"
      ></HeaderComp>
      <div
        class="grid grid-cols-4 rounded-lg max-w-7xl mx-auto gap-2 px-1 mt-2 sm:mt-4 sm:gap-4 sm:px-4"
      >
        <div class="col-span-4 xl:col-span-3">
          <div
            class="overflow-hidden rounded-lg relative border-2 dark:border-neutral-700"
          >
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
          </div>
        </div>
        <div class="col-span-4 xl:col-span-1">
          <List :list="sortedLanes"></List>
        </div>
      </div>

      <Modal
        :modal-active="showModal"
        @modalClose="closeWithoutSave"
        :dark-mode="darkMode"
        title="Racing Lane Settings"
        accept-button-text="Save"
        @acceptClick="saveSettings"
      >
        <SettingsComp v-model:lanes="lanes"></SettingsComp>
      </Modal>
      <FooterComp @settingsBtnClick="showModal = true"></FooterComp>
    </main>
  </div>
</template>

<style>
.serif-font {
  font-family: "Times New Roman", Times, serif;
}
</style>
