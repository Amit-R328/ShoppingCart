import React from 'react'
import { Routes, Route } from 'react-router'
import routes from './routes'
import AppHeader from './cmps/app_header'
import AppFooter from './cmps/app_footer'


 const RootCmp = () => {

  {
      return (
          <div className="app-container">
              <AppHeader />
                  <Routes>
                      {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                      {/* <Route path="user/:id" element={<UserDetails />} /> */}
                  </Routes>
              <AppFooter />
          </div>
      )
      }
}

export default RootCmp;
