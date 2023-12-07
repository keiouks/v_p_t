<script setup lang="ts">
import { buttonDialogStyle } from './button.css';
import { changeTheme } from '../lib/theme';

function handleClick() {
  changeTheme();
}
</script>
<template>
  <button :class="buttonDialogStyle" :onclick="handleClick">
    button
  </button>
</template>