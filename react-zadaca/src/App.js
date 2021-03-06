import React, { Component} from "react";
import {Route} from "react-router-dom";
import "./App.scss";

//Komponente
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

//Stranice 
import Home from "./pages/Home";
import Events from "./pages/Events";

class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <Main>
        <Route exact path="/" component={Home}/>
        <Route path="/events" component={Events}/>
      </Main>
      <Footer/>
      </>
    )
  }
}

export default App;
