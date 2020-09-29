<template>
    <div id="stage">
        <h2>Government API</h2>
        <D3Chart v-if="apiData" :data="apiData.data" />
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
            fetch(allAPI)
                .then((res) => res.json())
                .then((data) => {
                    data.data = data.data.reverse();
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
</style>