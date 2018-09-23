import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

class Navigation extends Component {


    render() {

            
                const navHrUpperSplit = function(props){                
                    let nav = props.toUpperCase().split(" ")
                    .map(nav => nav.length>3 && nav!=="" ? nav+="\n" : nav+=" ");  
                    return nav;
                }
                let langBar;
                if(this.props.navLang === "navHr"){
             langBar = this.props.navHr;
                }
                else{
             langBar = this.props.navEn;
                }
           
            const upperBarHr = langBar.map(navHrUpperSplit);
            const barHr = upperBarHr.map((nav, index) => (
                <NavLink key={index} link to="/"><li>{nav}</li></NavLink>
            ));

                    return ( 
                        <div className="wrapper">
                        <ul>
                        {barHr}
                        <div className="toggle">
                            <FontAwesomeIcon className="waffle" icon="stroopwafel" />
                        </div> 
                        <select className="langNav" onChange = {this.props.handleChange.bind(this)}>
                        <option value ="navHr">Hrvatski</option> 
                        <option value ="navEn">English</option> 
                        </select> 
                        </ul> 
                        {console.log(langBar)}
                        </div>
                            
                            
                    );
                }
            }
            export default Navigation;