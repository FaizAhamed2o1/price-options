import { Cell, Pie, PieChart, Tooltip } from "recharts";

const ExpensesPieChart = () => {
  const data = [
    {
      name: "Rent",
      value: 10,
    },
    {
      name: "Utilities",
      value: 20,
    },
    {
      name: "Groceries",
      value: 30,
    },
    {
      name: "Transportation",
      value: 40,
    },
    {
      name: "Entertainment",
      value: 50,
    },
  ];

  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6"];
  return (
    <div>
      <PieChart width={600} height={300}>
        <Pie data={data} dataKey={"value"} label>
          {/* This iterates over the data array sets the index of the map method as the key for the Cell component and sets the color of the cell according to the index of the map method of the colors array. */}
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]}></Cell>
          ))}
        </Pie>
        <Tooltip></Tooltip>
      </PieChart>
    </div>
  );
};

export default ExpensesPieChart;
