import PropTypes from "prop-types";

export default function Button({
  title,
  leftIcon,
  containerClass,
  id,
  rightIcon,
}) {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  leftIcon: PropTypes.element,
  containerClass: PropTypes.string,
  id: PropTypes.string,
  rightIcon: PropTypes.element,
};
