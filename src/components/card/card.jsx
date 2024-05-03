import { Component } from "react";
import "./card.css";
import PropTypes from "prop-types";

export default class Card extends Component {
  render() {
    const {
      monster: { id, name, email },
    } = this.props;
    return (
      <div className="card-container">
        <img
          alt={`monster ${name}`}
          src={`https://www.robohash.org/${id}?set2&size=180x180`}
        />
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    );
  }
}

Card.propTypes = {
  monster: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
