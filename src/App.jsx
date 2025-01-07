import Library from "./components/Library";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App bg-black min-h-screen overflow-y-auto">
      <Navbar />
      <div className="flex flex-col">
        <Library />
      </div>
    </div>
  );
}

export default App;
