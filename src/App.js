import { useState } from "react";

import Navbar from "./component/Navbar";
import Peoples from "./component/Peoples";
import Planets from "./component/Planets";

const App = () => {
  const [page, setPage] = useState("planent");
  return (
    <div className="App">
      <h1>The Star Wars </h1>
      <Navbar setPage={setPage} />
      {page === "planent" ? <Planets /> : <Peoples />}
    </div>
  );
};

export default App;
