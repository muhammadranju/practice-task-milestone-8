import { NavLink, useLoaderData } from "react-router-dom";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";
import { useEffect, useState } from "react";

const Coffees = () => {
  const coffees = useLoaderData();
  const [sortCoffee, setSortCoffee] = useState([]);

  useEffect(() => {
    if (sortCoffee.length === 0) {
      setSortCoffee(coffees);
    }
  }, [coffees, sortCoffee]);

  const handelSortByPopularity = () => {
    const sortByPopularity = [...coffees].sort(
      (a, b) => b.popularity - a.popularity
    );
    setSortCoffee(sortByPopularity);
  };

  const handelSortByRating = () => {
    const sortByRating = [...coffees].sort((a, b) => b.rating - a.rating);
    setSortCoffee(sortByRating);
    console.log("array is empty");
  };

  return (
    <div className="mt-10">
      <div className="flex justify-end items-center gap-3">
        <button onClick={handelSortByPopularity} className="btn btn-warning">
          Sort by Popularity
        </button>
        <button onClick={handelSortByRating} className="btn btn-warning">
          Sort by Rating
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
        {sortCoffee.map((coffee) => (
          <NavLink to={`/coffee/${coffee.id}`} key={coffee.id}>
            <CoffeeCard key={coffee.id} coffee={coffee} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Coffees;
