<script setup lang="ts">
import { nextTick, ref, shallowRef, reactive, computed, onMounted } from 'vue';
import Other from './Other.vue';
defineProps<{
  msg: string
}>()
const x = /*html*/'<span>v-html span</span>';
const strObj = reactive({
  list: [
    '23ifk',
    'skej2',
  ],
});
const computListLen = computed(() => {
  return strObj.list.length > 1 ? 'more' : 'less';
});
const h1Classes = reactive({
  green: true,
});
const dId = 'iweu8';
const count = ref(0);
const obj1 = ref({
  nested: {count:0},
  arr: ['foo', 'bar']
});
const obj2 = shallowRef({count: 1});
const obj3 = {key: ref(10)};
const shouldExist = ref(true);
async function onClick() {
  h1Classes.green = !h1Classes.green;
  count.value++;
  // 异步触发导致后续逻辑将会在dom渲染完后继续执行
  // 因为前面修改了count的值触发dom渲染，
  // 一次渲染后接着又修改一次count的值又会导致多一次渲染
  // 没有特殊的原因别这样做，不必要的多次渲染影响性能。
  await nextTick();
  count.value++;
}
function changeNestedCount() {
  obj1.value.nested.count++;
  shouldExist.value = !shouldExist.value;
}
function changeShallowRefCount() {
  obj2.value.count++;
  console.log(obj2.value);
}

const input = ref<HTMLInputElement>();
const list = ref([2,4,34,56,12,78]);
const listRef = ref<HTMLLIElement[]>([]);

const funRef = (el: any) => {console.log('heading is:', el);};
const otherComRef = ref<InstanceType<typeof Other>>();

onMounted(() => {
  console.log('component is mounted.');
  input.value?.focus();
  console.log(listRef.value);
  console.log('other ref:', otherComRef.value?.b);
});

const ageRef = ref(23);
function onBiggerAge() {
  ageRef.value++;
}
const otherStrRef = ref('eee');
</script>

<template>
  <div class="greetings">
    <input ref="input" />
    <Other ref="otherComRef" name="super dayci" :age="ageRef" @bigger-age="onBiggerAge" v-model="otherStrRef">
      <div>
        <span>add some contain from slot {{ otherStrRef }}</span>
      </div>
    </Other>
    <ul>
      <li v-for="item in list" ref="listRef">{{ item }}</li>
    </ul>
    <h1 class="static" :class="h1Classes" :id="dId">{{ msg }}</h1>
    <a @click="onClick">onClick ref count = {{count}}</a>
    <div><span @click="changeNestedCount">嵌套obj count = {{ obj1.nested.count }}</span></div>
    <div><a @click="changeShallowRefCount">onClick shallowRef count = {{obj2.count}}</a></div>
    <h3 v-if="shouldExist" :ref="funRef">
      <div v-html="x"></div>
    </h3>
    <div><span>不能自动解包，要用value {{ obj3.key.value + 1 }}</span></div>
    <div>computed value: {{ computListLen }}</div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
