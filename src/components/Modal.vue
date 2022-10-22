<script setup>
import ButtonComp from "./ButtonComp.vue";
import CloseButtonComp from "./CloseButtonComp.vue";
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
});
</script>

<template>
  <Teleport to="#modal">
    <Transition name="modal-outer">
      <div class="modal-container" v-show="modalActive">
        <Transition name="modal-inner">
          <div class="modal" v-if="modalActive">
            <div class="modal-header">
              <h1 class="text-2xl">{{ title }}</h1>
              <CloseButtonComp @click="$emit('close')"></CloseButtonComp>
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
            <div class="modal-footer">
              <ButtonComp
                v-if="showAcceptButton"
                @click="$emit('acceptClick')"
                :text="acceptButtonText"
              ></ButtonComp>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-container {
  @apply fixed inset-0 bg-gray-900 bg-opacity-75 overflow-y-auto flex justify-center items-center p-2;
}
.modal {
  @apply flex flex-col justify-between bg-zinc-100 dark:bg-zinc-900 w-[480px] h-[640px] rounded-lg overflow-hidden border-2 border-white dark:border-zinc-700;
}
.modal-body {
}
.modal-header {
  @apply flex justify-between items-center p-3 text-white bg-gradient-to-br from-pink-500 to-orange-400 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-black;
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
