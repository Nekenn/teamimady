import React, { SyntheticEvent, useState } from "react";
import Member from "./Member";

interface memberFormProps {
    member: Member;
    onSave: (member: Member) => void;
    onCancel: () => void;
}

function MemberForm({ member: initialMember ,onSave, onCancel }: memberFormProps) {
    const [member, setMember] = useState(initialMember);
    
    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        onSave(new Member({ name: "updateProject" }))
    }
    return (
        <form className="input-group vertical" onSubmit={handleSubmit}>
            <label htmlFor="name">Anarana</label>
            <input type="text" name="name" placeholder="enter name" />

            <label htmlFor="name">Fonenana</label>
            <input type="text" name="name" placeholder="fonenana" />

            <label htmlFor="name">Laharan'ny finday</label>
            <input type="text" name="name" placeholder="laharan'ny finday" />

            <div className="input-group">
                <button className="primary bordered medium">Ovaina</button>
                <span />
                <button type="button" className="bordered medium" onClick={onCancel}>
                    Tsy ovaina
                </button>
            </div>
        </form>
    );
}

export default MemberForm;