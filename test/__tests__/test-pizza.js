import test from 'ava';
import { ServiceBroker } from 'moleculer';
import { v4 as uuid } from 'uuid';
import pizza from '../../pizza/pizza.js';

test.beforeEach(async (t) => {
  t.context.broker = new ServiceBroker({
    //utiliser un broker différent pour chacun des tests en utilisant un namespace par test
    namespace: uuid(),
  });

  //créer le service
  t.context.broker.createService(pizza());

  //démarre le service
  await t.context.broker.start();
});

//première test : créer un snapshot sur la réponse de l'appel au service
//attention car c'est le premier snapshot qui sert de référence aux austres snapshot .... (a voir dans le dossier __snapshots__)
//les snapshot n'est qu'une facon de faire un test de mm que "falsy"
test('ensure pizza is delivered', async (t) => {
  t.snapshot(await t.context.broker.call('pizza.deliver-pizza', { a: 1 }));
});
