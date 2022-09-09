```
const useFetch = (url) => { 

    useEffect( () => { 
        const fetchData = async () = { 
            try { 
                const res = await fetch(url)
                const json = await res.json();
            } catch (error) { 

            }
        }
    })

}
```


### setting the rating 

``` 
    <div class='review-card'>
        <div class='rating'> 9 </div>
    </div>

    css 

    .review-card {
        position : relative;
    }

    .rating { 
        position : absolute;
        top : -20px;
        left : -20px;
    }
```

### Apolo GraphQL Client

GraphQL is now setup on the strpi backend. Now we can handle graphql queries. 
We also need to setup our React app to be able to make those queries. 

Need to install 2 packages

apolo - helps us make queries in react app 

graphql - parse graphql queries 

` npm i @apollo/client graphql `

```
in app.js
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
```

ApolloClient - used to make a new connection to graphql server 
InMemoryCache - used by ApolloClient to cache responses from the server 
ApolloProvider - used to wrap entire react application and it provides it with the ablility to use the Apollo client connection that we setup to make queries

in app.js
```
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});


<Router>
    <ApolloProvider client={client}>
    </ApolloProvider>
</Router>

```
Now we are providing the client connection to the graphql to the server to our entire react application. Now we can make graphql queries from inside of any components. 
