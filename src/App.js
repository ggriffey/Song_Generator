import "./index.css";
import Homepage from "./Pages/Homepage";

const App = () => {
  const handleSearchClick = (searchQuery) => {
    let data = searchQuery;
    // makeHTTPRequestToGenius();
    return data;
  };

  return (
    <div className="App">
      <Homepage handleSearchClick={handleSearchClick} />
    </div>
  );
};

export default App;
