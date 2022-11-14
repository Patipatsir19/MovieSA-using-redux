import React from "react";
import { useRoutes } from "react-router-dom";

import Home from '../../pages/home.component';
import Catalog from '../../pages/catalog.component';
import Detail from '../../pages/detail.component';

const NavigationPath = () => {
  const element = useRoutes([
    {path:"/search/:category/:keyword", element: <Catalog/>},
    {path:"/:category/:id", element: <Detail/>},
    {path:"/:category", element: <Catalog/>},
    {path:"/", element:<Home/>}
  ])

  return element;
};

export default NavigationPath;