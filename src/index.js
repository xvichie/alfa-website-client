import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux'
import { store } from './redux/store';




import HomeScreen from './screens/HomeScreen/HomeScreen';
import ServicesScreen from './screens/ServicesScreen/ServicesScreen';
import ProjectsScreen from './screens/ProjectsScreen/ProjectsScreen';
import InsightsScreen from './screens/InsightsScreen/InsightsScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route index={true} path='/' element={<HomeScreen />}></Route>
    <Route path='/services' element={<ServicesScreen />}></Route>
    <Route path='/projects' element={<ProjectsScreen />}></Route>
    <Route path='/insights' element={<InsightsScreen />}></Route>
    <Route path='/login' element={<LoginScreen />}></Route>
    <Route path='/register' element={<RegisterScreen />}></Route>
  </Route>
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

