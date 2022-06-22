import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o3dy310c4k01xmgx55dkpe/master',
  cache: new InMemoryCache()
})