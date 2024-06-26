<template>
    <button class="post_btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-button'
    }
</script>

<style  scoped>
    .post_btn {
        border: 1px solid red;
        width: 100px;
        margin: 5px 0;
    }
</style>