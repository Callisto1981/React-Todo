import React from "react";
import { render } from "@testing-library/react";

class TodoForm extends React.Component {
  handleChanges = e => {};
  handleSubmit = e => {
    e.prevenDefault();
    this.props.addItem(this.state.item);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div></div>
      </form>
    );
  }
}
export default TodoForm;
