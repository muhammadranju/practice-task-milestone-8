/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getFavoriteItems } from "../../utils/localDB/localStorage";
import { NavLink, useLoaderData } from "react-router-dom";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";

const Dashboard = () => {
  const [fevItems, setFevItems] = useState([]);

  const fevItemsArray = getFavoriteItems();

  const fevData = useLoaderData();

  const newArr = [];
  for (let fev of fevItemsArray) {
    fevData.filter((item) => {
      if (item.id === fev) {
        newArr.push(item);
      }
    });
  }

  useEffect(() => {
    setFevItems(newArr);
  }, []);

  console.log(fevItems);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
      {fevItems.map((coffee) => (
        <NavLink to={`/coffee/${coffee.id}`} key={coffee.id}>
          <CoffeeCard coffee={coffee} />
        </NavLink>
      ))}
    </div>
  );
};

export default Dashboard;
