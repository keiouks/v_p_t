<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue';

onBeforeMount(() => {
  console.log('ComB before mount');
});
onMounted(() => {
  console.log('ComB mounted');
});
onBeforeUpdate(() => {
  console.log('ComB before update');
});
onUpdated(() => {
  console.log('ComB updated');
});
onBeforeUnmount(() => {
  console.log('ComB before unmount');
})
onUnmounted(() => {
  console.log('ComB unmouted');
});
</script>

<template>
  <div>component BBB!</div>
</template>