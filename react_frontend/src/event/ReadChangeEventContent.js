import React, { Component } from "react";

class ReadChangeEventContent extends Component {
    render() {
        return(
            <div>
                <h1>Read Change Event Practice</h1>
                <input type="text" name="message" placeholder="Input Anything"
                    onChange={
                        (e :ChangeEvent<HTMLInputElement> ) => {
                            console.log(e.target.value)
                        }
                    }
                />
            </div>
        )
    }
}

export default ReadChangeEventContent