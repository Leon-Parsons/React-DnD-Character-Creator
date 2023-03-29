import React, {useState} from "react";
import CharName from "./CharName";
import CharOptions from "./CharOptions";
import CharStats from "./CharStats";
import CharConfirm from "./CharConfirm";
import TitleText from "./TitleText";

const Form = () => {

    const [section, setSection] = useState(0);

    const formTitle = ["Character Name", "Character Options", "Character Stats", "Confirm Character"];

    const sectionDisplay = () => {
        if (section === 0) {
            return <CharName />
        } else if (section === 1) {
            return <CharOptions />
        } else if (section === 2) {
            return <CharStats />
        }
        else {
            return <CharConfirm />
        }
    }

    return (
    <div className="form">
        <div className="page-heading"><TitleText /></div>
        <div className="form-container">
            <div className="header">
                <h1>{formTitle[section]}</h1>
            </div>
            <div className="body">{sectionDisplay()}</div>
    
            <div className="footer">
                <br></br>
                <button
                    disabled = {section == 0}
                    onClick={() => (setSection(section - 1))}>Prev
                </button>
                <button
                    disabled = {section == formTitle.length - 1}
                    onClick={() => (setSection(section + 1))}>Next
                </button>
            </div>
        </div>
    </div>
    );
}

export default Form;