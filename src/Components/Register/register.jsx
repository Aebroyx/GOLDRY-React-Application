import React from "react";
import logogoldry from "../../Images/logogoldry.svg";

export class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="base-container3">
            <div className="content">
                <div className="image3">
                    <img src={logogoldry} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Name</label>
                            <input type="text" name="name" placeholder="name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" placeholder="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Phone Number</label>
                            <input type="text" name="phonenumber" placeholder="phone number"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Confirm Password</label>
                            <input type="password" name="password" placeholder="password"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">
                        SIGN UP
                    </button>
                </div>
            </div>
    }

}