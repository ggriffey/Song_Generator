import { React } from "react";
import SearchBar from "../Components/SearchBar";

const Homepage = ({ handleSearchClick }) => {
  return (
    <div className="homepage">
      <SearchBar />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default Homepage;
