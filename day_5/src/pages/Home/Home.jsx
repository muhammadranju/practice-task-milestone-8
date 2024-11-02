import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../../layout/Categories/Categories.jsx";
import Header from "../../layout/Header/Header.jsx";
import Heading from "../../layout/Header/Heading.jsx";
const Home = () => {
  const category = useLoaderData();

  return (
    <div>
      <Header />
      <Heading
        title="Browse Coffees by Category"
        description="Choose your desired coffee category to browse through specific coffees that fit in your taste."
      />

      <Categories category={category} />
      <Outlet />
    </div>
  );
};

export default Home;
