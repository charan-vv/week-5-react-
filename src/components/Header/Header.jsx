import React from 'react'
import "./Header.scss";
import Button from '../Button/Button';

function Header(){
    return(
        <>
        <div className="container header">
            <div className="row">
                <div className="col-3 d-flex justify-content-between">
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
                <div className="col-5">
                    <h4>LANDING</h4>
                </div>
                <div className="col-4">
                <Button text="Buy Now" backgroundColor="blue" color="white"border="none" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;