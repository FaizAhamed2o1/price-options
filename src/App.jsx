import DaisyNav from "./components/DaisyNav/DaisyNav";

import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <DaisyNav></DaisyNav>
      <h1 className="bg-rose-50 text-5xl">Vite + React</h1>
      <button className="btn">Hello</button>
    </>
  );
}

export default App;
