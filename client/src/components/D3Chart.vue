<template>
    <div id="d3Chart">
        <article>
            <div id="bar-graph">
                <span>Last updated: {{ data.lastModified }}</span>
            </div>
            <aside>
                <button v-on:click="download">Download</button>
                <button v-on:click="flipOrientation">Flip Orientation</button>
            </aside>
        </article>
        <section>
            <select v-model="config.targetData">
                <option v-for="(key, index) in keys" :key="index" :value="key">
                    {{ key }}
                </option>
            </select>
            <div>
                <input type="checkbox" id="avgOnOff" v-model="config.showAvg" />
                <label for="avgOnOff">7 day average</label>
            </div>
        </section>
    </div>
</template>

<script>
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
                extent: { min: 0, max: this.data.data.length - 1 },
            },
        };
    },
    mounted() {
        barGraph(this.data.data, this.config);
    },
    methods: {
        download: function () {},
        flipOrientation: function () {
            const temp = this.config.width;
            this.config.width = this.config.height;
            this.config.height = temp;
        },
    },
    computed: {
        keys: function () {
            return Object.keys(this.data.data[0]);
        },
    },
    watch: {
        config: {
            deep: true,
            handler() {
                barGraph(this.data.data, this.config);
            },
        },
    },
};
</script>

<style scoped>
#d3Chart {
    background-color: darkcyan;
}
article {
    display: grid;
    grid-template-columns: 5fr auto;
}
aside {
    width: 300px;
}
.graph {
    min-width: 200px;
    width: 100%;
}

section {
    background-color: rgb(0, 97, 97);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
}
</style>