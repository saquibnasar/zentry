import PropTypes from "prop-types";
const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        className="absolute top-0 left-0 object-center object-cover size-full"
        src={src}
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

BentoCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.node.isRequired,
  description: PropTypes.string,
  isComingSoon: PropTypes.bool,
};
export default BentoCard;
