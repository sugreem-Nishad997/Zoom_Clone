import React from 'react';
import "../App.css";
import { Link, useNavigate } from 'react-router-dom';

export default function landing (){
    const navigate = useNavigate();
    const gestID = Math.floor(Math.random() * 10000);
    return(
        <div className="landingPageContainer">
            <nav>
                <div className="navheader">
                    <h2>Apna Video Call</h2>
                </div>
                <div className="navlist">
                    <p onClick={() => navigate(`/${gestID}`)}>Join as Guest</p>
                    <p onClick={()=>navigate("/auth")}>Register</p>
                    <div role='button' onClick={()=>navigate("/auth")}>
                        <p>Login</p>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1><span style={{color:"#FF9839"}}>Connect</span> with your loved once</h1>
                    <p>Cover a distace by Apna Video Call</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src="../public/mobile.png" alt="" />
                </div>
            </div>
        </div>
    )
}