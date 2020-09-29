<template>
    <div id="main">
        <TopHeader />
        <SideNav :loc="loc" />
        <GovApi v-if="loc === 'gov'" />
        <BottomFooter />
    </div>
</template>

<script>
import TopHeader from "@/components/TopHeader.vue";
import SideNav from "@/components/SideNav.vue";
import GovApi from "@/components/GovApi.vue";
import BottomFooter from "@/components/BottomFooter.vue";

import { eventBus } from "@/main.js";
export default {
    name: "app",
    components: { TopHeader, SideNav, GovApi, BottomFooter },
    data() {
        return {
            loc: "gov",
        };
    },
    mounted() {
        eventBus.$on("click-link", (payload) => (this.loc = payload));
    },
};
</script>

<style scoped>
#main {
    background-color: rgb(27, 27, 66);
    color: wheat;
    height: 100vh;
    margin: 0px;
    font-family: "Courier New", Courier, monospace;

    display: grid;
    grid-template-areas: "side header" "side main" "side footer";
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr auto;
}
</style>