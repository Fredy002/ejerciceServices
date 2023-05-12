<template>
    <h1>LISTADO DE POSTS</h1>
    <ul class="post-list">
        <li v-for="post in posts" :key="post.id">
        <router-link :to="{name: 'PostDetail', params:{id: post.id}}">
            {{ post.title }}
        </router-link>
        </li>
    </ul>
</template>

<script lang="ts" setup>

//import PostService from '@/services/PostService';
import { postService } from '@/services/PostService';
import { defineComponent, onMounted } from 'vue';


//const service = new PostService() //manda a llamar el servicio con un arreglo vacio
const posts = postService.getPosts() //solicita los posts (datos)

onMounted(async () => { //solicita a la API la informacion y la recupera
    await postService.fetchAll()
})


</script>

<style scoped lang="scss">

.post-list {
    width: 95vw;
    height: 75px;
    list-style: none;
    padding: 20px;

    li{
        padding: 10px;
        width: 100%;
        border: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        a{
            text-decoration: none;
            color: $primaryColor;
            cursor: pointer;
        }
        a:hover{
            color: white;
        }
    }

    li:hover{
        color: white;
        background-color: $primaryColor;

    }
}
</style>