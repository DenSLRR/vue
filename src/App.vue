
<template>
  <div class="app flex justify-around ">
      <PostList 
      :posts="posts"
      />
      <PostForm
      @create="createPost" 
      />

  </div>

  
</template>


<script>
  import PostForm from '@/components/PostForm.vue';
  import PostList from '@/components/PostList.vue';

  export default {
   components: {
    PostList,
    PostForm
   },

    data() {
      return {
        posts: [
          {id: 1, title: 'Пример', time: '20:45', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias perferendis iste eum non debitis?'},
          {id: 2, title: 'Пример', time: '20:45', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias perferendis iste eum non debitis?'},
          {id: 3, title: 'Пример', time: '20:45', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias perferendis iste eum non debitis?'},
        ],

      }
    },
    methods: {
      createPost(post) {
        this.posts.push(post);
        console.log(post);
      },

    }

    
  }

</script>



<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  

  .app { 
    padding: 80px;
  }

  
  
</style>
