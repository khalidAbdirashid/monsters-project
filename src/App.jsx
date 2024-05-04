import { Component } from "react";
import "./App.css";
import axios from "axios";
import SearchBox from "./components/searchbox/search-box";
import CardList from "./components/card-list/card-list";

class App extends Component {
  state = {
    monsters: [],
    searchString: "",
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        this.setState({ monsters: data });
      })
      .catch((error) => console.log(error));
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ searchString: value });
  };
  handleFiltering = () => {
    const { searchString, monsters } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString.toLowerCase());
    });
    return { filteredMonsters };
  };

  render() {
    const { filteredMonsters } = this.handleFiltering();
    const { handleChange } = this;
    return (
      <>
        <h1 className="title">Monsters Rolodex</h1>
        <SearchBox onSearchChange={handleChange} />
        <CardList monsters={filteredMonsters} />
      </>
    );
  }
}

export default App;
