import React, { useState } from 'react'
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App';

import HomeScreen from './screens/HomeScreen/HomeScreen';
import ServicesScreen from './screens/ServicesScreen/ServicesScreen';
import ProjectsScreen from './screens/ProjectsScreen/ProjectsScreen';
import InsightsScreen from './screens/InsightsScreen/InsightsScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen/DashboardScreen';
import AddService from './screens/DashboardScreen/Services/AddService/AddService';
import EditService from './screens/DashboardScreen/Services/EditService/EditService';
import AddProject from './screens/DashboardScreen/Projects/AddProject/AddProject';
import EditProject from './screens/DashboardScreen/Projects/EditProject/EditProject';
import AddInsight from './screens/DashboardScreen/Insights/AddInsight/AddInsight';
import EditInsight from './screens/DashboardScreen/Insights/EditInsight/EditInsight';
import AddReview from './screens/DashboardScreen/Reviews/AddReview/AddReview';
import EditReview from './screens/DashboardScreen/Reviews/EditReview/EditReview';
import ViewProject from './screens/ProjectsScreen/ViewProject/ViewProject';
import ViewInsight from './screens/InsightsScreen/ViewInsight/ViewInsight';
import { useSelector } from 'react-redux';

function AppRouter() {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<App />}>
          <Route index={true} path='/' element={<HomeScreen />}></Route>
          <Route path='/services' element={<ServicesScreen />}></Route>
          <Route path='projects' >
            <Route index={true} element={<ProjectsScreen />} />
            <Route path=':ProjectId' element={<ViewProject />} />
          </Route>
          <Route path='insights'>
            <Route index={true} element={<InsightsScreen />} />
            <Route path=':InsightId' element={<ViewInsight />} />
          </Route>
          <Route path='/login' element={<LoginScreen />}></Route>
          <Route path='/register' element={<RegisterScreen />}></Route>
            <Route path='dashboard'>
                <Route index={true} element={<DashboardScreen />}/>
                <Route path='AddServices'>
                <Route index={true} element={<AddService />}/>
                </Route>
                <Route path='EditService'>
                <Route path=':ServiceId' element={<EditService />} />
                </Route>
                <Route path='AddProjects'>
                <Route index={true} element={<AddProject />}/>
                </Route>
                <Route path='EditProject'>
                <Route path=':ProjectId' element={<EditProject />} />
                </Route>
                <Route path='AddInsights'>
                <Route index={true} element={<AddInsight />}/>
                </Route>
                <Route path='EditInsight'>
                <Route path=':InsightId' element={<EditInsight />} />
                </Route>
                <Route path='AddReviews'>
                <Route index={true} element={<AddReview />}/>
                </Route>
                <Route path='EditReview'>
                <Route path=':ReviewId' element={<EditReview />} />
                </Route>
            </Route>
        </Route>
      ));

  return (
    <RouterProvider router={router}>
          <App />
    </RouterProvider>
  )
}

export default AppRouter