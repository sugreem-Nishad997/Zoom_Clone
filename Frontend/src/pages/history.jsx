import React, { useContext, useEffect, useState }from "react";
import { AuthContext } from "../contexts/AuthContext";

import Card from '@mui/material/Card';
import HomeIcon from '@mui/icons-material/Home';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function history() {

    const { getHistoryOfUser } = useContext(AuthContext);
    const [meetings, setMeetings] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        let fetchHistory = async () => {
            try {
                const History = await getHistoryOfUser();
                setMeetings(History);
            } catch (error) {
                console.log(error);
            }
        }
        fetchHistory();
    }, []);

    let formDate = (DateString) => {
        const date = new Date(DateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();

        return`${day}/${month}/${year}`;
    }
    return (
        <>
            <IconButton onClick={() => navigate("/home")}>
                <HomeIcon/>
            </IconButton>
            {meetings.length > 0 ? meetings.map((e, i) => {
                return (
                    <Card key={i} sx={{borderBottom:'1px solid gray'}}>
                        <CardContent >
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                Meeting Code: {e.meetingCode}
                            </Typography>
                            <Typography variant="body2">
                                Meeting Date: {formDate(e.date)}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            }) : <p>There is no meetings</p>}
        </>
    )
}