<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
    export default {
        name: 'my-input',

        props: {
            modelValue: [String, Number]
        }, 
        methods: {
            updateInput(e) {
                this.$emit('update:modelValue', e.target.value)
            }
        }
    }
</script>

<style scoped>
    .input {
        width: 300px;
        border: 2px solid  rgb(1, 99, 47);
        border-radius: 5px;
        margin-top: 5px;
        height: 50px;
        text-align: center;
        margin-bottom: 10px;
    }
</style>