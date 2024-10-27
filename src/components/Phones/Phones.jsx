import axios from "axios";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Label,
  Tooltip,
  CartesianAxis,
  CartesianGrid,
} from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    // Note: API fetching using fetch API
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((response) => response.json())
    //   .then((data) => setPhones(data.data));

    // Note: API data fetching using AXIOS
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        // Note: Here we make fake phones data by mapping over the phone. We create an object from some of the properties of the actual phone data. we determine the price property by splitting the slug property and taking the number part and parsing it to integer. Then we return the object from the map since map initially doesn't return anything. and finally we set the fake phone data in the setPhones() state.
        const phonesWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };

          return obj;
        });
        setPhones(phonesWithFakeData);
        console.log(phonesWithFakeData);
      });
  }, []);

  return (
    <div>
      <h2 className="text-4xl">Number of phones: {phones.length}</h2>

      <div>
        <BarChart width={1200} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
          <YAxis dataKey="price"></YAxis>
          <Tooltip></Tooltip>
          <CartesianGrid strokeDasharray={"3 3"}></CartesianGrid>
        </BarChart>
      </div>
    </div>
  );
};

export default Phones;
