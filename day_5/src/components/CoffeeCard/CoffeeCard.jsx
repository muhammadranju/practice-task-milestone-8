/* eslint-disable react/prop-types */
const CoffeeCard = ({ coffee }) => {
  return (
    <div className="card bg-base-100  shadow-xl hover:scale-105 transition rounded-xl overflow-hidden">
      <figure className="w-full">
        <img
          className="w-full h-52  object-cover"
          src={coffee.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {coffee.name}</h2>
        <h3 className="text-lg">Category: {coffee.category}</h3>
        <span className="text-base">Type: {coffee.type}</span>
        <span className="text-base">Origin: {coffee.origin}</span>
        <span className="text-base">Rating: {coffee.rating}</span>
        <span className="text-base">Popularity: {coffee.popularity}</span>
      </div>
    </div>
  );
};

export default CoffeeCard;
