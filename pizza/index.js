import { ServiceBroker } from 'moleculer';
import pizza from './pizza.js';

//déclaration d'un nouveau instancieur de services sur le bus de données NATS port 4222
const broker = new ServiceBroker({
  transporter: 'nats://nats:4222',
});

//instanciation d'un nouveau service
broker.createService(pizza());

//lancement de l'interpreteur de services sur NATS
broker.start();

////////////////////////////////////////////////////////////////////////////////////////////////////////
//  exemple d'appel du service par le navigateur
//  le numero de port est obtenu par un "docker compose ps" afin de savoir quelle a été la redirection du port
//  http://localhost:32779/pizza/deliver-pizza?type=veggie

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//  tester avec PostMan
//  en implémentant le body d'une requete POST
