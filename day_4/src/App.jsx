import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <main className="container mx-auto">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
