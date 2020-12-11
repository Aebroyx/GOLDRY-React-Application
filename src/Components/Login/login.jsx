import React from "react";
import logogoldry from "../../Images/logogoldry.svg";
import { Link } from "react-router-dom";

export class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="base-container1">
                <div className="content">

                    <div className="image1">
                        <img src={logogoldry} />
                    </div>

                    <div className="body">
                        <Link to="/login">
                        <button type="button" className="btn">
                            SIGN IN
                        </button>
                        </Link>
                    </div>

                    <div className="body">
                        <Link to="/register">
                        <button type="button" className="btn">
                            SIGN UP
                        </button>
                        </Link>
                    </div>

                    <p>OR</p>

                    <div className="body">
                        <button type="button" className="btn">
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>
    }

}