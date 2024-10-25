import {
  CartesianGrid,
  LineChart as LChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const LineChart = () => {
  const marksData = [
    {
      id: 1,
      name: "Alice",
      math: 85,
      physics: 90,
      chemistry: 88,
    },
    {
      id: 2,
      name: "Bob",
      math: 78,
      physics: 82,
      chemistry: 75,
    },
    {
      id: 3,
      name: "Charlie",
      math: 92,
      physics: 95,
      chemistry: 94,
    },
    {
      id: 4,
      name: "David",
      math: 88,
      physics: 84,
      chemistry: 89,
    },
    {
      id: 5,
      name: "Eva",
      math: 73,
      physics: 70,
      chemistry: 72,
    },
    {
      id: 6,
      name: "Frank",
      math: 95,
      physics: 97,
      chemistry: 96,
    },
    {
      id: 7,
      name: "Grace",
      math: 80,
      physics: 75,
      chemistry: 78,
    },
    {
      id: 8,
      name: "Hannah",
      math: 90,
      physics: 88,
      chemistry: 91,
    },
    {
      id: 9,
      name: "Ivy",
      math: 67,
      physics: 72,
      chemistry: 68,
    },
    {
      id: 10,
      name: "Jack",
      math: 84,
      physics: 85,
      chemistry: 82,
    },
  ];
  return (
    <div className="mb-20">
      <LChart width={500} height={400} data={marksData}>
        <Line dataKey={"math"} stroke="red"></Line>
        <Line dataKey={"physics"} stroke="green"></Line>
        <Line dataKey={"chemistry"} stroke="blue"></Line>
        <CartesianGrid strokeDasharray={"3 3"}></CartesianGrid>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
      </LChart>
    </div>
  );
};

export default LineChart;
