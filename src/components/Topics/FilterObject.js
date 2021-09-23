import React, { Component } from "react";

class FilterObject extends Component {
	constructor() {
		super();
		this.state = {
			unFilteredArray: [
				{
					name: "Jonah",
					eyeColor: "Brown",
					laptopColor: "Gray",
				},
				{
					name: "Sam",
					hairColor: "Red",
					laptopColor: "Silver",
				},
				{
					name: "Zach",
					skinColor: "White",
					laptopColor: "Gray",
				},
			],
			userInput: "",
			filteredArray: [],
		};
	}
	handleChange(val) {
		this.setState({ userInput: val });
	}
	filteredArray(prop) {
		const unFilteredArray = this.state.unFilteredArray;
		const filteredArray = [];

		for (let i = 0; i < unFilteredArray.length; i++) {
			if (unFilteredArray[i].hasOwnProperty(prop)) {
				filteredArray.push(unFilteredArray[i]);
			}
		}
		this.setState({ filteredArray: filteredArray });
	}
	render() {
		return (
			<div className="puzzleBox filterObjectPB">
				<h4>Filter Object</h4>
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
				>Filter</button>
				<span className="resultsBox filterObjectRB">
					filteredArray {JSON.stringify(this.state.filteredArray)}
				</span>
			</div>
		);
	}
}
export default FilterObject;
