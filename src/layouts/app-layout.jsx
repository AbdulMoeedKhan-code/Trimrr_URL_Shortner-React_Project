import Header from "@/components/header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made with 💗 by <a href="#" className="text-blue-400">Abdul Moeed Khan</a>
      </div>
    </div>
  );
};

export default AppLayout;
