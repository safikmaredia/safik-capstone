import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Authenticate from "./routes/authenticate/authenticate";
import Shopping from "./routes/shopping/shopping"



const App = () => {
  return (
  <Routes>
  <Route path="/" element={<Navigation />}>
    <Route index element={<Home />} />
    <Route path="authenticate" element={<Authenticate />} />
    <Route path="shopping" element={<Shopping />} />
  </Route>
</Routes>

  );
};

export default App;






