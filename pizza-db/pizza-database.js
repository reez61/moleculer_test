//import { ServiceBroker } from 'moleculer';
import DbService from 'moleculer-db';
import MongoDbAdapter from 'moleculer-db-adapter-mongo';

export default () => ({
  // Create a DB service for `user` entities
  name: 'pizza-database--pizza',

  // Mixin DB service into (current) 'users' service
  mixins: [DbService],
  adapter: new MongoDbAdapter('mongoDb://mongo/pizzas'),
  collection: 'pizzas',

  //settings: {
  //  fields: ['_id', 'username', 'name'],
  //  entityValidator: {
  //    username: 'string',
  //  },
  //},
});
