import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import './App.css';

import Index from "./views/Index.jsx";
import BookCard from "./views/Browse/BookCard.jsx";
import TentangKami from "./views/Browse/TentangKami.jsx";
import SearchResultList from './views/Search/SearchResultList.jsx';
import Saran from './views/Browse/Saran.jsx';
import BookDetail from './views/Book/BookDetail/BookDetail.jsx';

function App() { //stateless component
  return ( 
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Index}></Route>    
          <Route path="/card" exact component={BookCard}></Route>
          <Route path="/tentang" exact component={TentangKami}></Route> 
          <Route path="/search" exact component={SearchResultList}></Route>   
          <Route path="/saran" exact component={Saran}></Route>  
          <Route exact path="/book/:id" component={BookDetail}></Route>   
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
