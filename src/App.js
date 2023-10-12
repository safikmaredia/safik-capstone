import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { UserContext } from "./contexts/user.context";

import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Authenticate from "./routes/authenticate/authenticate";

const App = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route
          path="authenticate"
          element={
            currentUser ? <Navigate to="/" replace /> : <Authenticate />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
