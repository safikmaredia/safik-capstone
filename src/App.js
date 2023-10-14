import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Authenticate from "./routes/authenticate/authenticate";
import Shopping from "./routes/shopping/shopping";
import Checkout from "./routes/checkout/checkout";
import Footer from "./routes/footer/footer";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="authenticate" element={<Authenticate />} />
        <Route path="shopping" element={<Shopping />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
