import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      navLang: "navHr",
      navHr: ["Ljepota i VI ", "Kuhanje na zdrav način", "Kampiranje na otvorenom", "Aktivirajte se", "Meditacija"," 2 + 2 = 3", "Za filmofile i knjigoljupce", "Jučer danas sutra"],
      navEn: ["Beauty and You", "Healthy Cooking", "Outdoor Camping", "Activate", "Meditation", "2 + 2 = 3", "Cinephiles and BookLovers Corner", "Yesterday Today Tomorrow"],
      globalWidth: window.innerWidth
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
   
    }
  
    handleResize = () => 
    this.setState({globalWidth : window.innerWidth})

  handleChange(event) {
    this.setState({
      navLang: event.target.value
    });
  }
  componentDidMount(){
    window.addEventListener("resize", this.handleResize)
  }
  componentWillUnmount(){
    window.removeEventListener("resize", this.handleResize)
  }

  render() {
    return (
      <div className="nav">
      <BrowserRouter>
            <Navigation
              navLang={this.state.navLang}
              handleChange={this.handleChange}
              navHr={this.state.navHr}
              navEn={this.state.navEn}
            />
      </BrowserRouter>
        <span>{this.state.globalWidth}</span>
      </div>
    );
  }
}

export default App;
