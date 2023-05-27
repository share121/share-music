<script lang="ts" setup>
import { appWindow } from '@tauri-apps/api/window'
import { useConfigStore } from '@/stores/config'
const { scale, modelName, outputDir } = storeToRefs(useConfigStore())

window.addEventListener('load', () => {
  appWindow.show()
})
function close() {
  appWindow.close()
}
appWindow.listen('tauri://close-requested', close)
const isMaximized = ref(false)
watch(isMaximized, (val) => {
  if (val) {
    appWindow.maximize()
  } else {
    appWindow.unmaximize()
  }
})
const toggleMaximize = useToggle(isMaximized)
const title = document.title
</script>

<template>
  <main class="flex h-full flex-col">
    <div
      data-tauri-drag-region
      class="flex h-10 min-h-[2.5rem] justify-between bg-white dark:bg-gray-900"
    >
      <div
        class="pointer-events-none ml-3 flex items-center overflow-hidden text-ellipsis whitespace-nowrap text-gray-700 dark:text-gray-300"
      >
        {{ title }}
      </div>
      <div class="flex w-36">
        <div
          @click="appWindow.minimize()"
          class="flex w-full items-center justify-center transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          <solar-arrow-down-linear />
        </div>
        <div
          @click="toggleMaximize()"
          class="flex w-full items-center justify-center text-sm transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          <solar-minimize-linear v-if="isMaximized" />
          <solar-maximize-linear v-else />
        </div>
        <div
          @click="close"
          class="flex w-full items-center justify-center transition-colors hover:bg-pink-500 hover:text-white dark:hover:bg-pink-600"
        >
          <solar-close-circle-linear />
        </div>
      </div>
    </div>
    <div class="flex-1 overflow-auto">
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
    </div>
  </main>
</template>
