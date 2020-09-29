<template>
    <div id="side-nav">
        <header>LOGO</header>
        <main>
            <button
                id="gov"
                v-on:click="link"
                :class="{ active: loc === 'gov' }"
            >
                Gov.uk
            </button>
            <button
                id="mol"
                v-on:click="link"
                :class="{ active: loc === 'mol' }"
            >
                Pic Desk
            </button>
        </main>
        <footer></footer>
    </div>
</template>

<script>
import { eventBus } from "@/main.js";
export default {
    name: "side-nav",
    props: ["loc"],
    methods: {
        link: function (event) {
            eventBus.$emit("click-link", event.target.id);
        },
    },
};
</script>

<style scoped>
#side-nav {
    height: 100%;
    background-color: rgb(63, 56, 44);
    grid-area: side;
    display: grid;
    grid-template-rows: 1fr 6fr 1fr;
    text-align: center;
}
button {
    width: 80%;
    height: 50px;
    font-size: 1.5rem;
    cursor: pointer;
}
.active {
    background-color: red;
}
</style>