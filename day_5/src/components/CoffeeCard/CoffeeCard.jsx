/* eslint-disable react/prop-types */
const CoffeeCard = ({ coffee }) => {
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img src={coffee.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{coffee.name}</h2>
        <p>{coffee.rating}</p>
        <p>{coffee.popularity}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
