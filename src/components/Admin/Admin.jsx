import React from "react";
import Button from "../Button/Button";

function IsAdmin() {
    const isAdmin = true;
    return (
            isAdmin &&<Button text="Admin" backgroundColor="blue" color="white" border="none" />
    );   
}

export default IsAdmin;