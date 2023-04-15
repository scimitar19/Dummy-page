
const Feature = ({ title, svgImage, id }) => {
  return (
    <li className="key-feature" id={id}>
      <div className="key-feature__image">
        {svgImage}
      </div>
      <p className="key-feature__description">{title}</p>
    </li>
  );
};

export default Feature;
