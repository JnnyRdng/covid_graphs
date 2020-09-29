<template>
    <div id="d3Chart">
        <div id="bar-graph"></div>
        <select v-model="config.targetData">
            <option v-for="(key, index) in keys" :key="index" :value="key">
                {{ key }}
            </option>
        </select>
    </div>
</template>

<script>
// import * as d3 from "@/graphs/d3.js";
import { barGraph } from "@/graphs/barGraph.js";
export default {
    name: "chart",
    props: ["data"],
    data() {
        return {
            config: {
                width: 800,
                height: 500,
                targetData: "newCasesByPublishDate",
                colour: "ffff00",
                showAvg: true,
                extent: { min: 0, max: this.data.length - 1 },
            },
        };
    },
    mounted() {
        barGraph(this.data, this.config);
    },
    computed: {
        keys: function () {
            return Object.keys(this.data[0]);
        },
        target: function () {
            return this.config.targetData;
        },
    },
    watch: {
        target: function () {
            barGraph(this.data, this.config);
        },
    },
};
</script>

<style scoped>
#d3Chart {
    background-color: darkcyan;
}
</style>