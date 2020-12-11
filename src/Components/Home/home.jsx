import React from "react";
import { Link } from "react-router-dom";

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="base-container4">
                <div className="content">
                    <div className="body">

                        <div className="location">
                        <button type="button" className="locationbtn">
                            Location
                        </button>
                        </div>

                        <div className="packages">
                            <button type="button" className="circlebtn">
                                Package 1
                            </button>
                            <button type="button" className="circlebtn">
                                Package 2
                            </button>
                            <button type="button" className="circlebtn">
                                Package 3
                            </button>
                        </div>

                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="weight">Laundry Weight (in kg)</label>
                                <input type="text" name="weight" placeholder="weight"/>
                        </div>

                    </div>

                    <div className="footer">
                        <button type="button" className="btn">
                            Continue
                        </button>
                    </div>

                    </div>
                </div>
            </div>
    }

}