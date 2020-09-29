<template>
    <div id="header">
        <h3>MOL Covid Tracker</h3>
    </div>
</template>

<script>
export default {
    name: "top-header",
    data() {
        return {
            where: "",
        };
    },
};
</script>

<style scoped>
#header {
    grid-area: header;
    padding: 10px;
}
h3 {
    margin: 0px;
}
</style>