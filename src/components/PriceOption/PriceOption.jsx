import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="flex flex-col justify-between p-4 space-y-5 bg-blue-200 rounded-md">
      <div>
        <h2 className="text-7xl">
          <span>{price}</span>
          <span className="text-2xl">$/month</span>
        </h2>

        <h3 className="text-3xl">{name}</h3>

        <div className="space-y-2">
          {features.map((feature, index) => (
            <Feature key={index} feature={feature}></Feature>
          ))}
        </div>
      </div>

      <button className="rounded-2xl w-full py-4 text-white bg-green-700">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
