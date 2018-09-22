import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

class Navigation extends Component {


    render() {

            const navHr =
                
               [
                    "Ljepota i VI",
                    "Kuhanje na zdrav način",
                    "Kampiranje na otvorenom",
                    "Aktivirajte se",
                    "Meditacija",
                    "2 + 2 = 3",
                    "Za filmofile i knjigoljupce",
                    "Jučer danas sutra"
                ];
                /*
                const navLang = [
                  {  navHr: "Ljepota i VI Kuhanje na zdrav način Kampiranje na otvorenom Aktivirajte se Meditacija 2 + 2 = 3 Za filmofile i knjigoljupce Jučer danas sutra"},
                  {  navEn: "Beauty and You Healthy Cooking Outdoor Camping Activate Meditation 2 + 2 = 3 Cinephiles and BookLovers Corner Yesterday Today Tomorrow"}
                ]
                */
                const navHrUpperSplit = function(props){
                    
                    let nav = props.toUpperCase();
                        nav = nav.split(" ")
                        .map(nav => nav.length>3 && nav!="" ? nav+="\n" : nav+=" ");
                        
                    
                    return nav;
                }
            //const upperBarHr = this.props.navHr.map(navHrUpperSplit);
            const test = this.props.navHr;
            const barHr = navHr.map(nav => (
                <NavLink link to="/"><li>{nav}</li></NavLink>
            ));

                    return ( 
                        <div className="wrapper">
                        <ul>
                        {barHr}
                        <div className="toggle">
                            <FontAwesomeIcon className="waffle" icon="stroopwafel" />
                        </div> 
                        <select className="langNav" onChange = {this.props.handleChange.bind(this)}>
                        <option value ="hr">Hrvatski</option> 
                        <option value ="en">Engleski</option> 
                        </select> 
                            {console.log(this.props.navLang)}
                            {console.log(this.props.navHr)}
                        </ul> 
                             
                        </div>
                            
                            
                    );
                }
            }
            export default Navigation;