import { Component } from "react";
import PropTypes from "prop-types";
export default class SearchBox extends Component {
  render() {
    const { onSearchChange } = this.props;
    return (
      <input
        type="search"
        className="search-box"
        placeholder="search for monsters"
        onChange={onSearchChange}
      />
    );
  }
}

SearchBox.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};
