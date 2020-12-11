import React from "react";
import logogoldry from "../../Images/logogoldry.svg";
import { Link } from "react-router-dom";

export class Login2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="base-container2">
            <div className="content">
                <div className="image2">
                    <img src={logogoldry} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" placeholder="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password"/>
                    </div>
                </div>    
            </div>

            <div className="footer">
                <Link to="/home">
                <button type="button" className="btn">
                    SIGN IN
                </button>
                </Link>
            </div>
        </div>
    }

}