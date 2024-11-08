import http from 'k6/http';

export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'constant-arrival-rate',

      // Quanto tempo dura o teste
      duration: '30s',

      // How many iterations per timeUnit
      rate: 100,

      // Rate de iterações 
      timeUnit: '1s',

      // Usuários virtuais pre-alocados
      preAllocatedVUs: 2,

      maxVUs: 50,
    },
  },
};

export default function () {
  http.get('https://test.k6.io/contacts.php');
}