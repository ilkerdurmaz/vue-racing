<script setup>
import { ref } from "vue";
import Lane from "./components/LaneComp/LaneComp.vue";
import List from "./components/ListComp/ListComp.vue";
import HeaderComp from "./components/HeaderComp.vue";
import Modal from "./components/Shared/Modal.vue";
import FooterComp from "./components/FooterComp.vue";
import SettingsComp from "./components/SettingsComp/SettingsComp.vue";
import laneData from "./assets/data/lanes.json";
import PingText from "./components/PingTextComp.vue";

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
const startButtonDisabled = ref(false);
const count = ref(5);
const countDownShow = ref(false);

function darkModeHandler() {
  darkMode.value = !darkMode.value;
  localStorage.setItem("darkMode", darkMode.value);
}

function livePositions(racerInfo) {}

function saveSettings() {
  showModal.value = false;
  localStorage.setItem("laneSettings", JSON.stringify(lanes.value));
}

function closeWithoutSave() {
  showModal.value = false;
  lanes.value = laneData;
}

function startRace() {
  countDownToStart();
}

function countDownToStart() {
  startButtonDisabled.value = true;
  countDownShow.value = true;
  const interval = setInterval(() => {
    count.value--;
    if (count.value == 0) {
      clearInterval(interval);
      isStarted.value = true;
      countDownShow.value = false;
    }
  }, 1000);
}
</script>
<template>
  <div :class="{ dark: darkMode }">
    <main class="min-h-screen dark:bg-neutral-900">
      <HeaderComp
        title="Vue Racing App"
        :main-btn-disable="startButtonDisabled"
        main-btn-text="Start Race"
        :dark-mode="darkMode"
        @mainBtnClick="startRace"
        @darkModeClick="darkModeHandler"
      ></HeaderComp>
      <div
        class="grid grid-cols-4 rounded-lg max-w-7xl mx-auto gap-2 px-1 mt-2 sm:mt-4 sm:gap-4 sm:px-4"
      >
        <div class="col-span-4 lg:col-span-3">
          <div class="overflow-hidden rounded-lg relative">
            <PingText
              color="white"
              :text="count + ''"
              v-if="countDownShow"
            ></PingText>
            <Lane
              v-for="(lane, index) in lanes"
              :key="lane.racerName"
              :background="lane.laneColor"
              lineBg="black"
              :started="isStarted"
              @position="
                (val) =>
                  livePositions({
                    position: val.position,
                    speed: val.speed,
                    laneNumber: index,
                    laneColor: lane.laneColor,
                    racerName: lane.racerName,
                  })
              "
            ></Lane>
          </div>
        </div>
        <div class="col-span-4 lg:col-span-1">
          <List></List>
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

<style scoped></style>
