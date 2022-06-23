import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { ApolloProvider } from '@apollo/client'
import { client } from "./lib/apollo"

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
      
    </div>
  )
}

export default App

// the ApolloProvider Around the application makes the grants de connection 
// with the graphcms

// The Browser routes is provides by the react-router-dom
// Inside of it we can add our Router function that we setup in the Router.tsx

