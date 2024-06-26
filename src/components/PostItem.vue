<template>
        <div class="post">
            <div><strong>Название:</strong> {{ post.title }} </div>
            <div><strong>Время: {{ post.time }} </strong></div>
            <div><strong>Описание:</strong> {{ post.description }} </div>
            <div class="post__btns">
                <my-button class="post_btn">Открыть</my-button>
                <my-button class="post_btn">Удалить</my-button>
            </div>
        </div>
</template>

<script>
    export default {
        props: {
            post: {
                type: Object, 
                required: true,
            }
        },
    }
</script>

<style scoped>
    .post {
        padding: 15px;
        border: 3px solid rgb(1, 99, 47);
        width: 1200px;
        margin-top: 15px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }

    
</style>