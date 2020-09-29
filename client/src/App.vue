<template>
    <div id="main">
        <TopHeader />
        <SideNav />
        <GovApi :cases="cases" />
        <BottomFooter />
    </div>
</template>

<script>
import TopHeader from "@/components/TopHeader.vue";
import SideNav from "@/components/SideNav.vue";
import GovApi from "@/components/GovApi.vue";
import BottomFooter from "@/components/BottomFooter.vue";

import { casesAPI } from "@/URLs.js";
export default {
    name: "app",
    components: { TopHeader, SideNav, GovApi, BottomFooter },
    data() {
        return {
            cases: null,
            apiData: null,
            // casesAPIUrl: process.env.CASES_API_URL,
        };
    },
    methods: {
        fetchCases: function () {
            fetch(casesAPI)
                .then((res) => res.json())
                .then((data) => {
                    this.apiData = data;
                    const sorted = data.data.reverse();
                    for (let i = 0; i < sorted.length; i++) {
                        let total = 0;
                        if (i >= 6) {
                            for (let j = i - 6; j <= i; j++) {
                                total += sorted[j].newCasesBySpecimenDate;
                            }
                        }
                        sorted[i].sevenDayAverage = Math.round(total / 7);
                    }
                    this.cases = sorted;
                });
        },
    },
    mounted() {
        // console.log(this.casesAPIUrl);
        this.fetchCases();
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