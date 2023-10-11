<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue';

defineProps<{
  msg?: string;
  msg2: string;
}>()

onBeforeMount(() => {
  console.log('ComA before mount');
});
onMounted(() => {
  console.log('ComA mounted');
});
onBeforeUpdate(() => {
  console.log('ComA before update');
});
onUpdated(() => {
  console.log('ComA updated');
});
onBeforeUnmount(() => {
  console.log('ComA before unmount');
})
onUnmounted(() => {
  console.log('ComA unmouted');
});
</script>

<template>
  <div>component AAA! {{ msg || '' }}</div>
  <div>{{ msg2 }}</div>
</template>
