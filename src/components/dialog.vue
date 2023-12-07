<script setup lang="ts">
import { diadialogStyle } from './dialog.css';
import Button2 from './Button2.vue';
import Button from './Button.vue';
import { TypeEnum } from './button2';

</script>
<template>
  <div :class="diadialogStyle">
    <!-- <Button2 :type="TypeEnum.Dialog" text="dialog" /> -->
    <Button />
  </div>
</template>