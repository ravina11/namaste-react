import { createRoot } from 'react-dom/client';

const heading = React.createElement("h1", {}, "Hello from React");
const root = createRoot(document.getElementById("root"));
root.render(heading);