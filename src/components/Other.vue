<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import ComA from './ComA.vue';
import ComB from './ComB.vue';

interface Props {
  age: Number,
  name?: String,
  modelValue?: string,
  modelModifiers?: {
    capitalize?: boolean
  }
}

const props = defineProps<Props>();
const emit = defineEmits(['bigger-age', 'update:modelValue']);
const currentCom = shallowRef(ComA);

function onClick() {
  currentCom.value = (currentCom.value === ComA) ? ComB : ComA;
  emit('bigger-age');
}

const a = 1;
const b = ref(2);

function emitInput(e: Event) {
  let value = (e.target as HTMLButtonElement).value;
  if (props.modelModifiers?.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
  }
  emit('update:modelValue', value);
}
// defineExpose是编译器宏不需要导入
// 这样能让父组件通过ref拿到a和b
defineExpose({
  a,
  b
});
</script>

<template>
  <div class="wrap">
    <button @click="onClick">{{ props.name }} bigger age</button>
    <span>{{ props.age }}</span>
    <slot />
    <KeepAlive>
      <component :is="currentCom"></component>
    </KeepAlive>
    <input
      type="text"
      :value="modelValue"
      @input="emitInput"
    />
  </div>
</template>

<style scoped>
.wrap {
  display: block;
  border: 5px solid #aa0000;
  overflow: hidden;
  width: 100%;
  margin: 10px 0;
}
</style>