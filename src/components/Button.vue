<script setup lang="ts">
import { buttonStyle } from './button.css';
import { changeTheme } from '../lib/theme';

function handleClick() {
  changeTheme();
}
</script>
<template>
  <button :class="buttonStyle" :onclick="handleClick">
    button
  </button>
</template>