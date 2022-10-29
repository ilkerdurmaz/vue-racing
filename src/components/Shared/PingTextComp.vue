<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "Ping Text",
  },
  size: {
    type: Number,
    default: 100,
  },
  color: {
    type: String,
    default: "black",
  },
  animationActive: {
    type: Boolean,
    default: true,
  },
  pingTextActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <Transition name="backdrop-transition">
    <div v-if="props.pingTextActive" class="backdrop" role="timer">
      <div
        :class="{ 'animate-countdown': props.animationActive }"
        :style="{ fontSize: `${props.size}px`, color: props.color }"
      >
        {{ props.text }}
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.backdrop {
  @apply bg-neutral-900 bg-opacity-75 overflow-hidden flex justify-center items-center z-10 absolute h-full w-full;
}
.animate-countdown {
  animation: ping 1050ms cubic-bezier(0, 0, 0.2, 1) infinite;
}
@keyframes ping {
  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
.backdrop-transition-enter-active,
.backdrop-transition-leave-active {
  @apply transition duration-150;
}
.backdrop-transition-enter-from,
.backdrop-transition-leave-to {
  @apply opacity-0;
}
</style>
