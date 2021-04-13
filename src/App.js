import SearchAsteroidDetail from "./components/SearchAsteroid";
import AsteroidDetail from "./components/AsteroidDetail";
import { Router } from "@reach/router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        {/* ======================= Search Asteroid Detail PAGE ==================== */}
        <SearchAsteroidDetail exact path="/" component={SearchAsteroidDetail} />

        {/* ========================= Asteroid Detail ====================== */}
        <AsteroidDetail path="/astroid-details" component={AsteroidDetail} />
      </Router>
    </div>
  );
}

export default App;
