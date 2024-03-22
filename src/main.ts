import { createApp } from 'vue';
import App from './App.vue';
import NavBar from './components/navbar/NavBar.vue';
import HeroSection from './container/Home/HeroSection.vue';
import Home from './pages/Home.vue';

import './style.css';

const app = createApp(App);

app.component('NavBar', NavBar);
app.component('HeroSection', HeroSection);
app.component('Home', Home)

app.mount('#app');
