/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {Post} from 'App/Entity/Post'


  export default class PostsController {

    /**
     * async index
     */
    public async index() {
      const posts = Post.find()
      return posts
    }
    /**
     * async store
     */
    public async store({ request }: HttpContextContract) {
      const data = request.only(['title', 'content'])
      const post = Post.create({
        content: data.content,
        title: data.title
      }).save()
      return post
    }
    /**
     * async update
     */
    public async update({ params, request }: HttpContextContract) {
      // const post = await Post.find({ id: params.id })
      console.log(params.id)
      if (params.id<= 0) {
        console.log('novo usuário', request.post())
      }else{
        console.log('editar usuário', request.post())
      }
      // return post
    }
    /**
     * async destroy
     */
    public async destroy({ params }: HttpContextContract) {
      await Post.delete({ id: params.id })
      return 'Deletado com sucesso!'
    }
  }
