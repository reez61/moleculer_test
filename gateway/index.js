import { ServiceBroker } from 'moleculer';
import gateway from 'moleculer-web';

//déclaration d'un nouveau instancieur de services sur le bus de données NATS port 4222
const broker = new ServiceBroker({
  //il existe un transporter sur moleculer 'stan://nats-streaming-server:4222' qui effectue tout les echanges en streaming => encore expérimentale
  transporter: 'nats://nats:4222',
});

//instanciation d'un nouveau service
broker.createService(gateway);

//lancement de l'interpreteur de services sur NATS
broker.start();

//par défaut, la gateway attend un Json pour recevoir les paramètres
//ceci est modifiable ..... (je ne sais ou ?)
