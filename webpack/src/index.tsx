import React from "react";
import { createRoot } from "react-dom/client";
import { MyComponent } from "./myComponent";


const root = createRoot(document.getElementById("root"));
root.render(
  <MyComponent />
);