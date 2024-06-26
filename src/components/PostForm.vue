<template>
    <div class="post__form flex flex-col">
        <form class="flex flex-col" @submit.prevent>
          <my-input 
          v-model="post.title"
          class="input" 
          type="text" 
          placeholder="Название"/>

          <my-input  
          v-model="post.time"
          class="input" 
          type="time"  
          placeholder="Время"/>

          <my-input  
           v-model="post.description"
          class="input" 
          type="text" 
          placeholder="Описание"/>

          <button
           class="w-52 h-12 btn" 
           @click="createPost">Добавить</button>
        </form>
      </div>
</template>

<script>
    export default {
        data() {
            return {
                post: {
                    title: '',
                    time: '',
                    description: '',
                }
            }
        },
        methods: {
          createPost() {
            this.post.id = Date.now()
            console.log(this.post)
            this.$emit('create', this.post)
            this.post = {
                    title: '',
                    time: '',
                    description: '',
                 }
            
          },
        }
    }
</script>

<style scoped>
    .btn {
      align-self: end;
      border: 2px solid rgb(1, 99, 47);
    }
</style>