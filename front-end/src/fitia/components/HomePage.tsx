import React from "react";
import Member from "./Member";
import MemberPages from "./MemberPages";
import { HomeMini } from "@mui/icons-material";


function HomePage() {
    const membres = [
        new Member(
            {
                id: 1,
                name: "Sarobidy",
                adress: "Andohanianto"
            }
        ),
        new Member(
            {
                id: 2,
                name: "Rolland",
                adress: "Andohan'ny Mandroseza"
            }
        )
    ]
    return (
        <>
            <HomeMini />
            <h1>FI.T.I.A</h1>
            <h2>Membres</h2>
            <MemberPages members={membres} />


        </>
    );
}

export default HomePage;