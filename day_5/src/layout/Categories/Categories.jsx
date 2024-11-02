/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Categories = ({ category }) => {
  return (
    <div role="tablist" className="tabs tabs-lifted mt-10">
      {category.map((cate) => (
        <NavLink
          key={cate.id}
          to={`/category/${cate.category}`}
          role="tab"
          className="tab text-2xl font-light"
        >
          {cate.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;