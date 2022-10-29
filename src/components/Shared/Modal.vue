<script setup>
import GradientButton from "./GradientButton.vue";
import IconButton from "./IconButton.vue";
defineProps({
  title: {
    type: String,
    default: "Default Modal Title",
  },
  showAcceptButton: {
    type: Boolean,
    default: true,
  },
  acceptButtonText: {
    type: String,
    default: "Accept",
  },
  modalActive: {
    type: Boolean,
    default: false,
  },
  darkMode: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(["modalClose", "acceptClick"]);
</script>

<template>
  <Teleport to="#modal">
    <Transition name="modal-outer">
      <aside
        class="modal-container"
        :class="{ dark: darkMode }"
        v-show="modalActive"
      >
        <Transition name="modal-inner">
          <div class="modal" v-if="modalActive" role="dialog">
            <div class="modal-header">
              <h1 class="text-2xl">{{ title }}</h1>
              <IconButton @click="emit('modalClose')" aria-label="close dialog"
                ><i class="bi bi-x-lg"></i
              ></IconButton>
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
            <div class="modal-footer">
              <GradientButton
                v-if="showAcceptButton"
                @click="emit('acceptClick')"
                aria-label="accept dialog"
                :btn-text="acceptButtonText"
              ></GradientButton>
            </div>
          </div>
        </Transition>
      </aside>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-container {
  @apply fixed inset-0 bg-neutral-800 bg-opacity-75 overflow-y-auto flex justify-center items-center p-2 z-10;
}
.modal {
  @apply flex flex-col justify-between bg-zinc-100 dark:bg-neutral-900 min-w-[320px] min-h-[160px] rounded-lg overflow-hidden border-2 border-white dark:border-zinc-700;
}
.modal-body {
}
.modal-header {
  @apply flex justify-between items-center p-3 text-white bg-gradient-to-br from-pink-500 to-orange-400 dark:from-neutral-800 dark:to-neutral-800;
}
.modal-footer {
  @apply flex justify-end p-3;
}
.modal-outer-enter-active,
.modal-outer-leave-active {
  @apply transition duration-300;
}
.modal-outer-enter-from,
.modal-outer-leave-to {
  @apply opacity-0;
}
.modal-inner-enter-active {
  @apply transition duration-300 delay-150;
}
.modal-inner-leave-active {
  @apply transition duration-300;
}
.modal-inner-enter-from {
  @apply opacity-0 scale-75;
}
.modal-inner-leave-to {
  @apply scale-75;
}
</style>
