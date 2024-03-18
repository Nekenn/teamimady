import React from "react";
import Member from "./Member";
interface memberCardProps {
    member: Member;
}

function MemberCard({ member }: memberCardProps) {
    return (
        <>
            <div>
                <h3>Anarana: {member.name} </h3>
                <h3>Laharana: {member.id}</h3>
                <h3>Fonenana: {member.adress}</h3>
            </div>
        </>
    )
}

export default MemberCard;