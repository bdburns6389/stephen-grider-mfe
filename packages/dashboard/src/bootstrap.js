import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

// Create the mounting point for all the code.
const mount = (el) => {
  const app = createApp(Dashboard);

  app.mount(el);
};

// If we are in dev mode and in isolation, call mount immediately.
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// If we are running through a container, we should export the mount function.
export { mount };
