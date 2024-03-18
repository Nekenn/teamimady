import { Button } from "@mui/material";
import React from "react";
import "../ressources/addmember/style.css"
import Header from "./common/Header";
function AddMember() {
    return (
        <div className="form-container">
            <h3>Hapiditra olona vaovao</h3>
            <form action="/action_page.php">
                <label htmlFor="fname">Anarana</label>
                <input type="text" id="fname" name="firstname" placeholder="anaran'ilay olona" />

                <label htmlFor="lname">Fanampiny</label>
                <input type="text" id="lname" name="lastname" placeholder="fanampina'anarany" />

                <label htmlFor="country">Fonenana</label>
                <input type="text" id="lname" name="lastname" placeholder="Toeramponenany" />

                <label htmlFor="country">Laharan'ny finday</label>
                <input type="text" id="lname" name="lastname" placeholder="laharan'ny finday" />

                <input type="submit" value="Apidiro" />
            </form>
        </div>
    );

}

export default AddMember;