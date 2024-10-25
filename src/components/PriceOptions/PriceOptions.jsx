import PropTypes from "prop-types";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      features: [
        "Access to gym equipment",
        "Group classes",
        "Free fitness assessment",
      ],
      price: 29.99,
    },
    {
      id: 2,
      name: "Standard Plan",
      features: [
        "Access to gym equipment",
        "Group classes",
        "Free fitness assessment",
        "Personal training sessions (1 per month)",
        "Nutritional guidance",
      ],
      price: 49.99,
    },
    {
      id: 3,
      name: "Premium Plan",
      features: [
        "Access to gym equipment",
        "Group classes",
        "Free fitness assessment",
        "Personal training sessions (2 per month)",
        "Nutritional guidance",
        "Access to all locations",
        "Priority booking for classes",
      ],
      price: 69.99,
    },
    {
      id: 4,
      name: "Family Plan",
      features: [
        "Access to gym equipment for up to 4 members",
        "Group classes for all members",
        "Free fitness assessments for all members",
        "Personal training sessions (1 per member per month)",
        "Nutritional guidance for all members",
      ],
      price: 99.99,
    },
  ];
  return (
    <div className="md:m-12  m-4">
      <h2 className="text-5xl">Best Prices In The Town</h2>
      <div className="md:grid-cols-3 grid grid-cols-1 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

PriceOptions.propTypes = {};

export default PriceOptions;
