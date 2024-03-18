import React, { useState } from "react";
import AddMember from "./AddMember";
import Member from "./Member";
import MemberCard from "./MemberCard";
import "../ressources/style.css"
import MemberForm from "./MemberForm";

interface memberPageProps {
    members: Member[];
    onSave : (member:Member) =>void;
}

function MemberPages({ members, onSave }: memberPageProps) {
    const [memberBeingEdited, setMemberBeingEdited] = useState({});

    const handleEdit = (member: Member) => {
        setMemberBeingEdited(member)
    }

    const cancelingEditing = () => {
        setMemberBeingEdited({});
    }

    const items = members.map((member) => (
        <div key={member.id} className="cols-sm">
            {
                member === memberBeingEdited ? (<MemberForm onSave={onSave} onCancel={cancelingEditing} />) :
                    <MemberCard member={member} onEdit={handleEdit} />
            }
        </div>
    )
    )

    return (
        <div className="row">
            {items}
        </div>


    )

}
export default MemberPages
