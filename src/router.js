import { createWebHistory, createRouter } from "vue-router";
//Or use createMemoryHistory for Node.js and SSL or if you don't want the path to show on the search bar.

import Home from "./components/Home.vue";
import MyProfile from "./components/MyProfile.vue";
import About from "./components/About.vue";
import Portfolio from "./components/Portfolio.vue";
import WorkExperience from "./components/WorkExperience.vue";
import Miscellaneous from "./components/Miscellaneous.vue";
import Achievements from "./components/Achievements.vue";
import Contact from "./components/Contact.vue";
import NotFound from "./components/NotFound.vue";

const routes = [
    { path: '/', component: Home},
    { path: '/MyProfile', component: MyProfile},
    { path: '/About', component: About},
    { path: '/Portfolio', component: Portfolio},
    { path: '/WorkExperience', component: WorkExperience},
    { path: '/Miscellaneous', component: Miscellaneous},
    { path: '/Achievements', component: Achievements},
    { path: '/Contact', component: Contact},
    { path: '/:pathMatch(.*)*', component: NotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router