import React from "react";
import AddMember from "./AddMember";
import Member from "./Member";
import MemberCard from "./MemberCard";
import "../ressources/style.css"

interface memberPageProps {
    members: Member[];
}

function MemberPages({ members }: memberPageProps) {
    const items = members.map((member) => (

        <div key={member.id} ><MemberCard member={member} /></div>

    ))
    return (
        <>
            <div className="container">
                {items}
            </div>
            <p>add new member: </p> <AddMember />
        </>
    )

}
export default MemberPages
