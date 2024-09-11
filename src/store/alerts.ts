import { defineStore } from 'pinia'


export const useAlertsStore = defineStore('alerts',()=> {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    function increment() {
        count.value++
    }
    return { count, doubleCount, increment }
},{
    persist:{
        enabled:true,
        key:"alerts",
        storage:localStorage
    }
})