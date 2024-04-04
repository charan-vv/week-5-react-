import React from "react";
import Button from "../Button/Button";

function IsLogin() {
    const isLoggedIn = false;
    return (
            isLoggedIn ?null :
                        <Button text="Logout" backgroundColor="blue" color="white" border="none" />
            );
    
    
}





export default IsLogin;
