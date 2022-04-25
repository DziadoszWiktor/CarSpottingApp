/* eslint-disable no-undef */
import { onMounted, onUnmounted, ref } from "vue";

export function useGeolocation() {
    const coords = ref({ latitude: 50, longitude: 19 })
    const isSuported = 'navigator' in window && 'geolocation' in navigator;

    let watcher = null
    onMounted(() => {
        if (isSuported)
            watcher = navigator.geolocation.watchPosition(
                position => (coords.value = position.coords)
        )
    })
    onUnmounted(() => {
        if (watcher)
            navigator.geolocation.clearWatch(watcher)
    })
    return { coords, isSuported }
    
}


export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

