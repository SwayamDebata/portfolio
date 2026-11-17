import React, { useEffect } from "react";
import OrqmeshGuide from "./components/OrqmeshGuide";
import Site from "./components/Site";

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const page = path === "/orqmesh" ? <OrqmeshGuide /> : <Site />;

  useEffect(() => {
    document.title =
      path === "/orqmesh"
        ? "Orqmesh user guide"
        : "Swayam Debata, Founder, ModelEarth";
  }, [path]);

  return page;
}

export default App;
