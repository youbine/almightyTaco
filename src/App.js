import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Provider } from "./Context";
import Store from "./Routes/Store";
import Order from "./Routes/Order";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path=":storeId" element={<Order />}>
            <Route path="?menu=:menu" element={<Order />}>
              <Route path="&Cart" element={<Order />}></Route>
            </Route>
          </Route>
          <Route path="/" element={<Store />}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
