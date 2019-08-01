import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="name"
          name="name"
        />
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="email"
          name="email"
        />
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="age"
          name="age"
        />
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="batch"
          name="batch"
        />
        <button type="submit" />
        <h1 />
        <h1 />
        <h1 />
        <h1 />
      </div>
    );
  }
}

export default connect()(App);
