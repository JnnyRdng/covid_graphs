<template>
    <div id="d3Chart">
        <div id="bar-graph"></div>
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
                targetData: "newCasesBySpecimenDate",
                colour: "ff00ff",
            },
        };
    },
    mounted() {
        barGraph(this.data, this.config);
    },
};
</script>

<style scoped>
#d3Chart {
    background-color: darkcyan;
}
</style>