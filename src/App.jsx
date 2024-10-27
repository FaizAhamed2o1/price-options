import ExpensesPieChart from "./components/ExpensesPieChart/ExpensesPieChart";
import LineChart from "./components/LineChart/LineChart";
import NavBar from "./components/NavBar/NavBar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <NavBar></NavBar>

      <PriceOptions></PriceOptions>

      <LineChart></LineChart>

      <ExpensesPieChart></ExpensesPieChart>

      <Phones></Phones>
    </>
  );
}

export default App;
