import "./App.css";
import Head from "./Head";
import Body from "./Body";
import { Provider } from "react-redux";
import store from "../src/utils/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./WatchPage";
import MainContainer from "./MainContainer";
const applayout = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Head />
        <RouterProvider router={applayout} />
      </div>
    </Provider>
  );
}

export default App;
