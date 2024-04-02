import React from "react";
import Member from "./Member";

interface memberCardProps {
    member: Member;
    onEdit: (member: Member) => void;
}

function MemberCard(props: memberCardProps) {
    const { member, onEdit } = props;
    const handleEditClick = (memberBeingEdited: Member) => {
        onEdit(memberBeingEdited);
    };
    return (
        <div className="card">
            <img src={member.imageUrl} alt={member.name} width="20%" height="auto" />
            <section className="section dark">
                <h5 className="strong"><strong>Laharana: {member.id}</strong></h5>
                <h5 className="strong"><strong>Anarana: {member.name}</strong></h5>
                <h5 className="strong"><strong>Fonenana: {member.adress}</strong></h5>
                <button
                    className=" bordered"
                    onClick={
                        () => {
                            handleEditClick(member)
                        }
                    }
                >
                    <span className="icon-edit "></span>
                    Hanova
                </button>
            </section>

        </div>
    )
}

export default MemberCard;