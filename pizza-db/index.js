import { ServiceBroker } from 'moleculer';
import pizzaDatabase from './pizza-database.js';

//déclaration d'un nouveau instancieur de services sur le bus de données NATS port 4222
const broker = new ServiceBroker({
  transporter: 'nats://nats:4222',
});

//instanciation d'un nouveau service
broker.createService(pizzaDatabase());

//lancement de l'interpreteur de services sur NATS
broker.start();
