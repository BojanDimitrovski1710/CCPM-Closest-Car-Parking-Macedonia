import React, { Component } from "react";
import ResultsPage from "./resultsPage";
import SearchPage from "./searchPage";

class Pages extends Component {
  state = {
    isSearched: false,
    isSelected: false,
    textIsEmpty: true,
  };

  //a constructor so that we can read and manipulate the state field within functions
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      isSearched: false,
      textIsEmpty: true,
    };
    //VERY IMPORTANT, IF YOU"RE ADDING A FUNCTION AND NEED TO WORK WITH THE VARIABLES
    //IN THE STATE BLOCK ADD IT HERE WITH THE FORMAT this.YOURFUNCTION = this.YOURFUNCTION.bind(this)
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.textChange = this.textChange.bind(this);
  }
  //the escape hatch, makes it so you go back to the search phase
  //used in the header and in the "enter new location button(yet to be added)"
  handleEscape() {
    this.state.isSearched = false;
    this.state.isSelected = false;
    this.state.textIsEmpty = true;
    this.forceUpdate();
  }

  //the function that renders the next page, has simple validation in place
  //doesnt go through on an empty search but otherwise does
  handleSearch() {
    if (this.state.textIsEmpty === true) {
      alert("No Empty Searches");
    } else {
      /* Code that sends over the results to the results inputs */
      this.state.isSearched = true;
      this.forceUpdate();
    }
  }

  handleSelect(/* some paramater to distinguish what stats are shown */) {
    /*Code that sends over the information in to the input fields */

    this.state.isSelected = true;
    this.forceUpdate();
  }

  //validates if the text field is empty or not, can put in other criterium here if needed
  textChange = (event) => {
    const target = event.target;
    const name = target.name;
    if (!target.value) {
      this.state.textIsEmpty = true;
    } else {
      this.state.textIsEmpty = false;
    }
  };

  render() {
    /*pretty simple, renders the initial page at first
     but changes what it renders when we hit the search button */
    if (!this.state.isSearched) {
      return (
        <div>
          <h2 className="mb 200" id="hText">
            Closest Parking - Macedonia
          </h2>

          <br></br>

          <div className="text-lg-center m-50 form-control-lg">
            <p className="text-white">Please Enter your location</p>

            <input
              type="text"
              id="textInput"
              className="form-control-center col-5 bg-white mt-1000"
              onChange={(e) => this.textChange(e)}
            ></input>

            <br></br>

            <button
              onClick={this.handleSearch}
              className="btn-primary-center bg-white mt-4"
            >
              Search
            </button>
          </div>
        </div>
      );
    }
    //If nothing is selected, render the results page
    else if (!this.state.isSelected) {
      return (
        <div>
          <h2 className="mb 200" id="hText" onClick={this.handleEscape}>
            Closest Parking - Macedonia
          </h2>

          <input
            type="text"
            readonly
            class="form-control-plaintext-center bg-white border-darken-2 col-4"
            id="EnteredLocation"
            value="Entered Location"
          ></input>

          <br></br>

          <label for="Parking1" onClick={this.handleSelect}>
            Parking1
          </label>
          <input
            type="text"
            readonly
            class="form-control-plaintext-center bg-white border-darken-2 col-2 mt-10"
            id="Parking1"
            value="Distance1"
          ></input>

          <br></br>
          <label for="Parking2" onClick={this.handleSelect}>
            Parking2
          </label>
          <input
            type="text"
            readonly
            class="form-control-plaintext-center bg-white border-darken-2 col-2 mt-10"
            id="Parking2"
            value="Distance2"
          ></input>

          <br></br>
          <label for="Parking3" onClick={this.handleSelect}>
            Parking3
          </label>
          <input
            type="text"
            readonly
            class="form-control-plaintext-center bg-white border-darken-2 col-2 mt-10"
            id="Parking3"
            value="Distance3"
          ></input>

          <br></br>
          <label for="Parking4" onClick={this.handleSelect}>
            Parking4
          </label>
          <input
            type="text"
            readonly
            class="form-control-plaintext-center bg-white border-darken-2 col-2 mt-10"
            id="Parking4"
            value="Distance4"
          ></input>

          <br></br>
          <label for="Parking5" onClick={this.handleSelect}>
            Parking5
          </label>
          <input
            type="text"
            readonly
            class="form-control-plaintext-center bg-white border-darken-2 col-2 mt-10"
            id="Parking5"
            value="Distance5"
          ></input>
        </div>
      );
    }
    //if something is selected, render the details screen
    else {
      return (
        <div>
          <h2 className="mb 200" id="hText" onClick={this.handleEscape}>
            Closest Parking - Macedonia
          </h2>

          <input
            type="text"
            readonly
            class="form-control-plaintext-center bg-white border-darken-2 col-4"
            id="EnteredLocation"
            value="Name of selected parking"
          ></input>

          <br></br>

          <label for="Distance">Distance</label>
          <input
            type="text"
            readonly
            class="form-control-plaintext-center bg-white border-darken-2 col-2 mt-10"
            id="Distance"
            value="Distance"
          ></input>

          <br></br>
          <label for="Details">Details</label>
          <input
            type="text"
            readonly
            class="form-control-plaintext-center bg-white border-darken-2 col-2 mt-10"
            id="Details"
            value="Details"
          ></input>

          <br></br>
          <label for="Company">Company</label>
          <input
            type="text"
            readonly
            class="form-control-plaintext-center bg-white border-darken-2 col-2 mt-10"
            id="Company"
            value="Company"
          ></input>

          <br></br>
          <label for="Info4">Info4</label>
          <input
            type="text"
            readonly
            class="form-control-plaintext-center bg-white border-darken-2 col-2 mt-10"
            id="Info4"
            value="Extra Info"
          ></input>

          <br></br>
          <label for="Info5">Info5</label>
          <input
            type="text"
            readonly
            class="form-control-plaintext-center bg-white border-darken-2 col-2 mt-10"
            id="Info5"
            value="Extra Info"
          ></input>
          <br></br>
          <button
            className=" btn btn-success"
            id="ReturnButton"
            onClick={this.handleEscape}
          >
            Enter New Adress
          </button>
        </div>
      );
    }
  }
}

export default Pages;
