

import { createRoot } from "react-dom/client";
import { MyComponent } from "./myComponent";
import "./styles.css";

const root = createRoot(document.getElementById("root"));

root.render(<MyComponent />);