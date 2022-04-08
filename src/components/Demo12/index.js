import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import { AppProvider } from "./context";

import "./Demo12.scss";

const Demo12 = () => {
  return (
    <div className="demo12">
      <AppProvider>
        <Home />
        <Sidebar />
        <Modal />
      </AppProvider>
    </div>
  );
};

export default Demo12;
