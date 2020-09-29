import React, { Component } from "react";

class ChangeEventPrac extends Component {
    render() {
        return(
            <div>
                <h1>Change Event Practice</h1>
                <input type="text" name="message" placeholder="Input Anything"
                    onChange={
                        (e :ChangeEvent<HTMLInputElement> ) => {
                            console.log(e)
                        }
                    }
                />
            </div>
        )
    }
}

export default ChangeEventPrac