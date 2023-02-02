import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './UserSlice'
import RoleSlice from './RoleSlice'

const store = configureStore({
  reducer: {
    auth: UserSlice,
    role: RoleSlice,
  },
})

export default store
