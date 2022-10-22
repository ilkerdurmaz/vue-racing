<script setup></script>

<template>
  <button
    @click="$emit('click')"
    class="rounded-lg p-2 inline-flex items-center justify-center border border-transparent dark:text-gray-400 hover:border-white hover:text-white focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 transition-all"
  >
    <svg
      class="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
</template>
