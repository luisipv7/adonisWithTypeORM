import { IocContract } from '@adonisjs/fold'
import { createConnection } from 'typeorm'
import { Post } from 'App/Entity/Post'

/*
|--------------------------------------------------------------------------
| Provider
|--------------------------------------------------------------------------
|
| Your application is not ready, when this file is loaded by the framework.
| Hence, the level imports relying on the IoC container will not work.
| You must import them inside the life-cycle methods defined inside
| the provider class.
|
| @example:
|
| public async ready () {
|   const Database = (await import('@ioc:Adonis/Lucid/Database')).default
|   const Event = (await import('@ioc:Adonis/Core/Event')).default
|   Event.on('db:query', Database.prettyPrint)
| }
|
*/
export default class TypeOrmProvider {
  constructor(protected container: IocContract) {
  }

  public register() {
    // Register your own bindings
  }

  public async boot() {
    // All bindings are ready, feel free to use them
  }

  public async ready() {
    await createConnection({
      type: "postgres",
      host: "127.0.0.1",
      port: 5432,
      username: "postgres",
      password: "sarinha123",
      database: "Posts",
      logging: true,
      synchronize: true,
      entities: [
        Post
      ],
      migrations: [
        "/app/Migration/**/*.js"
      ],
      subscribers: [
        "/app/Subscriber/**/*.js"
      ],
    });
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
