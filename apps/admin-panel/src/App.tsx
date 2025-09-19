import { Suspense } from "react";
import { Provider } from "react-redux";
import "../i18n";
import Router from "../router";
import { store } from "./redux/store";

function App() {
  return (
    <Suspense>
      <Provider store={store}>
        <Router />
      </Provider>
    </Suspense>
  );
}

export default App;
