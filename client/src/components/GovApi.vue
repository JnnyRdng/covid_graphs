<template>
    <div id="stage">
        <D3Chart :data="cases" />
    </div>
</template>

<script>
import D3Chart from "@/components/D3Chart.vue";
export default {
    name: "gov-api",
    components: { D3Chart },
    props: ["cases"],
};
</script>

<style scoped>
#stage {
    grid-area: main;
    background-color: olive;
}
</style>