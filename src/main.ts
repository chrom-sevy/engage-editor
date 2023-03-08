import "./app.postcss";
import App from "./App.svelte";

import init from "../pkg/fe_engage_save_editor.js";

init()
const app = new App({
  target: document.getElementById("app"),
});

export default app;
