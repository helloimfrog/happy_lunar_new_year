import React from 'react';
import {
  Route,
  Routes
} from "react-router-dom";
import Main from '../pages/Main';

const routePath = {
  main: '/',
  notFound: ''
}

const route = [
  {
    path: routePath.main,
    exact: true,
    component: <Main/>
  },
  {
    path: routePath.notFound,
    exact: false,
    component: <Main/>
  }
];

export const AppRoute = () => (
  <Routes>
    {
      route.map((routeData, index) => (
        <Route
          key={index}
          path={routeData.path}
          caseSensitive={routeData.exact}
          element={routeData.component}
        />
      ))
    }
  </Routes>
);