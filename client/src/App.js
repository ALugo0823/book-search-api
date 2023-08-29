import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
//importing out Apollo tools
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

//here we invoke the apollo client as well as invoke the memory cache
const client = new ApolloClient({
  uri: '/graphql',
  caches: new InMemoryCache
});
// here we add the mutation to the app
function App() {
  return (
    <ApolloProvider client = { client }>
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route 
            path='/' 
            element={<SearchBooks />} 
          />
          <Route 
            path='/saved' 
            element={<SavedBooks />} 
          />
          <Route 
            path='*'
            element={<h1 className='display-2'>Wrong page!</h1>}
          />
        </Routes>
      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;
