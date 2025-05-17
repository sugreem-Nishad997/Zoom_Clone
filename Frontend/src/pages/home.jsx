import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import '../App.css';
import { IconButton, Button, TextField } from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from "../contexts/AuthContext";

function home() {

    let navigate = useNavigate();
    const[meetingCode, setmeetingCode] = useState("");
    
    const {addToUserHistory} = useContext(AuthContext);

    let handleJoinVideoCall = async() => {
        await addToUserHistory(meetingCode);    
        navigate(`/${meetingCode}`);
    }

    return(
        <>
            <div className="navBar">
                <div style={{display:'flex', alignItems:'center'}}>
                    <h2>Apna Video Call</h2>
                </div>

                <div style={{display:'flex', alignItems:"center"}}>
                    <IconButton onClick={() => navigate("/history")}>
                        <RestoreIcon/>
                    </IconButton>
                    <p>History</p>
                    <Button onClick={() => {localStorage.removeItem("token")
                        navigate("/auth")}}>LogOut</Button>
                </div>
            </div>

            <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <h2>Providing Quality Video Call Just Like Quality Education</h2>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <TextField onChange={(e) => setmeetingCode(e.target.value)}/>
                            <Button onClick={handleJoinVideoCall} variant="outlined">Join</Button>
                        </div>
                    </div>
                </div>
                <div className="rightPanel">
                    <img src="/logo3.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default withAuth(home);