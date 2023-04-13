import {ReactComponent as ReactLogo} from "../../images/svg/svg1.svg"

const Feature = ({ title, svgImage }) => {
  return (
    <li className="key-feature">
      <div className="key-feature__image">
        {svgImage}
      </div>
      <p className="key-feature__description">{title}</p>
    </li>
  );
};

export default Feature;
