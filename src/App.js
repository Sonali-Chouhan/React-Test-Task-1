import React, { Suspense, useState } from 'react'
import { styles } from './Component/HeaderStyle'
import { Route, Routes } from 'react-router-dom'
import UserList from './Pages/UserList'
import AddUser from './Pages/AddUser'
import { AddRole } from './Redux/UserSlice'
import RoleList from './Pages/RoleList'
import { ToastContainer, toast } from 'react-toastify';
import { FullPageLoading, ListingLoading } from './Common/Loading'
import "react-toastify/dist/ReactToastify.css";
// import MainHeader from './Component/MainHeader'
const MainHeader = React.lazy(() => import('./Component/MainHeader'));
const App = () => {
  
  return (
    <div>
    <ToastContainer />
      <Suspense fallback = { <div > <FullPageLoading className='Loading'/> </div>} >
      <MainHeader />
      </Suspense>
      {/* <div className={styles.root}>
      <main className={styles.content}>
        <div className={styles.toolbar} />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/adduser/:id" element={<AddUser />} />
          <Route path="/addrole" element={<AddRole />} />
          <Route path="/addrole/:id" element={<AddRole />} />
          <Route path="/rolelist" element={<RoleList />} />
        </Routes>
      </main>
      </div> */}
    </div>
  )
}

export default App
