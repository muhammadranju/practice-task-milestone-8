import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <main className="container mx-auto">
      <Header />
      <div className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default App;
