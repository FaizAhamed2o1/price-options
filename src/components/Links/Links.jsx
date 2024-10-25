import PropTypes from "prop-types";

const Links = ({ route }) => {
  const { id, path, name } = route;
  return (
    <li key={id} className="hover:bg-yellow-600 mr-6">
      <a href={path}>{name}</a>
    </li>
  );
};

Links.propTypes = {
  route: PropTypes.object,
};
export default Links;
