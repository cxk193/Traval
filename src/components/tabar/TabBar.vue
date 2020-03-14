<template>
    <div class="tab-bar">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name:'Tabar',
    }
</script>

<style lang="less">
    .tab-bar{
        display: flex;
        height: .98rem;
        background-color: #f6f6f6;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: 0 -1px 1px rgba(100,100,100,.2);
    }
</style>