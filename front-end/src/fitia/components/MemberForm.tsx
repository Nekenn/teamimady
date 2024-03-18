import React, { SyntheticEvent } from "react";
import Member from "./Member";

interface memberFormProps {
    onSave: (member: Member) => void;
    onCancel: () => void;
}

function MemberForm({ onSave, onCancel }: memberFormProps) {
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