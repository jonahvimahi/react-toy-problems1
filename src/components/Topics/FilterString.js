import React, { Component } from "react";

class FilterString extends Component {
	constructor() {
		super();
		this.state = {
			unFilteredArray: ["Jonah", "Sam", "Zach", "Jake", "Carlos", "Devin"],
			userInput: "",
			filteredArray: [],
		};
	}
	handleChange(val) {
		this.setState({ userInput: val });
	}
    filteredArray(userInput) {
        const unFilteredArray = this.state.unFilteredArray
        const filteredArray = []

        for( let i = 0; i < unFilteredArray.length; i++){
            if( unFilteredArray[i].includes(userInput) ) {
                filteredArray.push(unFilteredArray[i])
            }
        }
        this.setState({ filteredArray: filteredArray})
    }
	render() {
		return (
			<div className="puzzleBox filterStringPB">
				<h4>Filter String</h4>
				<span className="puzzleText">
					unFilteredArray: {JSON.stringify(this.state.unFilteredArray, null, 10)}
				</span>
				<input
					className="inputLine"
					onChange={(e) => this.handleChange(e.target.value)}
				></input>
				<button
					className="confirmationButton"
					onClick={() => this.filteredArray(this.state.userInput)}
				>
					Filter
				</button>
				<span className="resultsBox filterStringRB">
					filteredArray: {JSON.stringify(this.state.filteredArray, null, 10)}
				</span>
			</div>
		);
	}
}
export default FilterString;
