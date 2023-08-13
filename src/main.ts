import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';

const app = createApp(App);
const app2 = createApp(App);

app.component('HelloWorld', HelloWorld);
app2.component('HelloWorld', HelloWorld);

app.mount('#app');
app2.mount('#app2');
