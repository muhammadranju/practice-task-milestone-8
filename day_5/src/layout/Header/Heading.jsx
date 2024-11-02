/* eslint-disable react/prop-types */
const Heading = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-10">
      <h1 className="text-4xl font-light">{title}</h1>
      <p className="font-light">{description}</p>
    </div>
  );
};

export default Heading;
