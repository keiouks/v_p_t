<script setup lang="ts">
import { type Button2Props, TypeEnum } from './button2';
import { normalButtonStyle, dialogButtonStyle } from './button2.css';

const props = withDefaults(defineProps<Button2Props>(), {
  type: 'normal'
});

const style = {
  [TypeEnum.Normal]: normalButtonStyle,
  [TypeEnum.Dialog]: dialogButtonStyle,
}[props.type];
</script>
<template>
  <button :class="style">
    {{ props.text }}
  </button>
</template>