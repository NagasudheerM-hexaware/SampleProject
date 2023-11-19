import logo from "./logo.svg";
import "./App.css";
import BasicCard from "./components/BasicCard";
import Navbar from "./components/NavBar";
import SearchBar from "./components/Searchbar";
import IconChips from "./components/Chips";

function App() {
  return (
    <>
      <Navbar/>
      <SearchBar/>
     <IconChips/>
     <BasicCard/>
   
    </>
  );
}

export default App;
