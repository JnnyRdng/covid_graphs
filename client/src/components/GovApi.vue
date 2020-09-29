<template>
    <div id="stage">
        <header>
            <h2>Government API</h2>
            <button v-on:click="fetchData">Reload</button>
        </header>
        <article>
            <D3Chart v-if="apiData" :data="apiData" />
            <h2 v-else>Loading...</h2>
        </article>
    </div>
</template>

<script>
import D3Chart from "@/components/D3Chart.vue";

import { casesAPI } from "@/URLs.js";
import { allAPI } from "@/URLs.js";
export default {
    name: "gov-api",
    components: { D3Chart },
    data() {
        return {
            apiData: null,
        };
    },
    methods: {
        fetchData: function () {
            let headers = "";
            fetch(allAPI)
                .then((res) => {
                    headers = res.headers;
                    return res.json();
                })
                .then((data) => {
                    data.data = data.data.reverse();
                    data.lastModified = headers.get("Last-Modified");
                    this.apiData = data;
                });
        },
    },
    mounted() {
        this.fetchData();
    },
};
</script>

<style scoped>
#stage {
    grid-area: main;
    background-color: olive;
}
header {
    display: grid;
    grid-template-columns: 1fr auto;
    padding-left: 50px;
}
</style>