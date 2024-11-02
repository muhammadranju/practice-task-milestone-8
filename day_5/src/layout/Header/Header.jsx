import Banner from "../../assets/banner.jpg";

const Header = () => {
  return (
    <div className="hero mt-10 ">
      <img
        className="w-full h-[600px] object-cover "
        src={Banner}
        alt="banner"
      />
    </div>
  );
};

export default Header;
