// import { Post } from "./build/app/Entity/Post";
module.exports = {
  type: 'postgres',
  host: 'fabrica2.govbrsul.com.br',
  port: 5432,
  username: 'postgres',
  password: 'sarinha123',
  database: 'Posts',
  logging: true,
  synchronize: true,
  entities: [
    'build/app/Entity/**/*.js'
  ],
  migrations: [
    'build/app/Migration/**/*.js'
  ],
  subscribers: [
    'build/app/Subscriber/**/*.js'
  ],
  cli: {
    entitiesDir: 'App/Entity',
    migrationsDir: 'App/migration',
    subscribersDir: 'App/Subscriber'
  }
}
