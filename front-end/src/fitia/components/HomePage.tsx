import React from "react";
import Member from "./Member";
import MemberPages from "./MemberPages";
import { HomeMini } from "@mui/icons-material";
import Header from "./common/Header";
import AddMember from "./AddMember";


function HomePage() {
    const membres = [
        new Member(
            {
                id: 1,
                name: "Sarobidy",
                adress: "Andohanianto",
                imageUrl: "/assets/kisspng-computer-icons-user-profile-clip-art-portable-netw-c-svg-png-icon-free-download-389-86-onlineweb-5c6f7efde29670.9426602115508108779281.png"
            }
        ),
        new Member(
            {
                id: 2,
                name: "Rolland",
                adress: "Andohan'ny Mandroseza",
                imageUrl: "/assets/kisspng-computer-icons-scalable-vector-graphics-augmented-account-svg-vector-icon-free-icons-uihere-5cd7aa27611d18.2935132215576376713978.png"
            }
        )
        ,
        new Member(
            {
                id: 3,
                name: "Manga",
                adress: "Trois chemins",
                imageUrl: "/assets/kisspng-computer-icons-user-profile-clip-art-portable-netw-c-svg-png-icon-free-download-389-86-onlineweb-5c6f7efde29670.9426602115508108779281.png"
            }
        )
        ,
        new Member(
            {
                id: 4,
                name: "Rakoto",
                adress: "Trois chemins",
                imageUrl: "/assets/valala.png"
            }
        )
    ]

    const saveMember = (member: Member) =>{
        console.log('saving member: ', member);
    };
    return (
        <div className="container">
            <MemberPages onSave={saveMember} members={membres} />
        </div>
    );

}

export default HomePage;