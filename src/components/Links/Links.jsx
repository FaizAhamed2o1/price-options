import PropTypes from "prop-types";

const Links = ({ route }) => {
  const { id, path, name } = route;
  return (
    <div>
      <li key={id}>
        <a href={path}>{name}</a>
      </li>
    </div>
  );
};

Links.propTypes = {
  route: PropTypes.object,
};
export default Links;
