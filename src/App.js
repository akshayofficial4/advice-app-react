import axios from "axios";
import React from "react";
import "./App.css";
class App extends React.Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  //function for fetching data from API

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Advice-display

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading"> {advice} </h1>

          <button onClick={this.fetchAdvice} className="button">
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}
export default App;
