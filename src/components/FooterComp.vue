<script setup>
import IconButton from "./Shared/IconButton.vue";
const emit = defineEmits(["settingsBtnClick"]);
</script>

<template>
  <footer class="footer-bar">
    <div class="footer-container">
      <p class="footer-text">Built By İlker Durmaz.</p>
      <nav>
        <ul class="footer-navlist">
          <li>
            <a href="https://github.com/ilkerdurmaz/vue-racing"
              ><i
                class="bi bi-github hover:text-black dark:hover:text-white p-2"
              ></i
            ></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ilker-durmaz"
              ><i class="bi bi-linkedin hover:text-blue-600 p-2"></i
            ></a>
          </li>
          <li>
            <IconButton
              @click="emit('settingsBtnClick')"
              aria-label="settings button"
            >
              <i class="bi bi-gear-fill"></i>
            </IconButton>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer-bar {
  @apply sticky top-[100vh] max-w-7xl mx-auto py-2 px-1 sm:px-4;
}
.footer-container {
  @apply p-2 flex justify-between items-center rounded-lg shadow border dark:bg-neutral-800 dark:text-white dark:border-neutral-700 dark:shadow-zinc-900;
}
.footer-text {
  @apply text-sm text-gray-500 sm:text-center dark:text-gray-400;
}
.footer-navlist {
  @apply flex flex-wrap gap-2 items-center text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-orange-400 text-3xl;
}
</style>
