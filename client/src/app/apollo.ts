import { ApolloClient, createNetworkInterface } from 'apollo-client';
// import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';


// Create WebSocket client
// const wsClient = new SubscriptionClient(`ws://localhost:3000/subscriptions`, {
//   reconnect: true
// });
const networkInterface = createNetworkInterface({
  uri: `http://localhost:8081/graphql`,
  // COMMENT THE OPTIONS FOR PRODUCTION
  // opts: {
  //   credentials: 'same-origin',
  // },
});

// Extend the network interface with the WebSocket
// const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
//   networkInterface,
//   wsClient
// );

const client = new ApolloClient({
  networkInterface: networkInterface
});

export function provideClient(): ApolloClient {
  return client;
}
