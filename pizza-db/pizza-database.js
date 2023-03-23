import DbService from 'moleculer-db';
import MongoDBAdapter from 'moleculer-db-adapter-mongo';

export default () => ({
  name: 'pizza-database--pizzas',
  mixins: [DbService],
  adapter: new MongoDBAdapter('mongodb://mongo/pizzas'),
  collection: 'pizzas',
});
