import { ref,Ref } from "vue"
import IPost from "@/interfaces/IPost"

class PostService {
    private posts:Ref<Array<IPost>>
    private post:Ref<IPost>

    constructor(){
        this.posts = ref<Array<IPost>>([]) //se crea un array vacio para almacenar los datos de la API

        this.post = ref<IPost>({})
    }

    getPosts():Ref<Array<IPost>>{
        return this.posts
    }

    getPost():Ref<IPost>{
        return this.post
    }

    //funcion encargada de obtener los datos de la API
    async fetchAll():Promise<void>{
        try{
            //cuando el servicio se actualice, este se mostrará en la consola
            const url= 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(url) //se almacena la respuesta de la API
            const json = await response.json() //se almacena la respuesta en formato json
            this.posts.value = await json //se almacena la respuesta en el array de posts
        }catch(error){
            console.log(error)
        }
    }

    async fetchId(id: string | Array<string>):Promise<void>{
        try{
            const url = `https://jsonplaceholder.typicode.com/posts/${id}`
            const response = await fetch(url)
            const json = await response.json()
            this.post.value = await json
        }catch(error){
            console.log(error)
        }
    }
    
}

const postService = new PostService() //se crea una instancia de la clase PostService

export { postService, PostService}