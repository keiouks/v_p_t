<script setup lang="ts">
// import { ref, reactive } from 'vue';
import Button from './components/Button.vue';
// import Button2 from './components/Button2.vue';
import Dialog from './components/dialog.vue';
// import { Radio, RadioGroup, Checkbox, CheckboxGroup } from '@futuweb/moo-ui';

// const checked = ref(1);
// const selected = ref([1,2]);
// const form = reactive({selected: true});
</script>

<template>
  <header>
    <!-- <RadioGroup v-model="checked">
      <Radio :value="1" >skdjfk</Radio>
      <Radio :value="2" >skdjfk</Radio>
      <Radio :value="3" >skdjfk</Radio>
    </RadioGroup>
    <CheckboxGroup v-model="selected">
      <Checkbox :value="1" >skdjfk</Checkbox>
      <Checkbox :value="2" >skdjfk</Checkbox>
      <Checkbox :value="3" >skdjfk</Checkbox>
    </CheckboxGroup> -->
    <Button />
    <!-- <Button2 text="button2" /> -->
    <Dialog />
  </header>
</template>

<style scoped>
</style>
