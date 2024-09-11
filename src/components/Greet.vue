<script setup lang="ts">
import { invoke } from "@tauri-apps/api/tauri";
import {useAlertsStore} from "@/store/alerts.ts";

const alertsStore =   useAlertsStore()


const greetMsg = ref("");
const name = ref("");
const axios = inject("$axios")




async function greet() {
  alertsStore.increment()
  axios.get('/todos/1').then(res => {
    console.log("hello",res)
  })
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsg.value = await invoke("greet", { name: name.value });
}
</script>

<template>
  <form class="flex items-baseline" @submit.prevent="greet">
    <div class=" w-60 h-24">Hello Tauri App </div>
    <div class=" w-24 h-24">Count {{alertsStore.count}}</div>
    <input class="border-4 border-black " id="greet-input" v-model="name" placeholder="Enter a name..." />
    <button class="ml-2 bg-blue-400 rounded" type="submit">Greet</button>
  </form>

  <p>{{ greetMsg }}</p>
</template>
