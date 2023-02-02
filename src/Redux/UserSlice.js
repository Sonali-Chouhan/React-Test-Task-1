//For profile page reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  User: [
    {
      name: 'Sonali',
      email: 'sonali@gmail.com',
      username: 'sonali123',
      mobile: '9926251229',
      roleKey: 'networking',
      password: '12345678',
    },
    {
      name: 'mahima',
      email: 'mahima@gmail.com',
      username: 'mahi123',
      mobile: '1234567890',
      roleKey: 'Computer Science',
      password: '987654321',
    },
    {
      name: 'nikka',
      email: 'nikka@gmail.com',
      username: 'nikka123',
      mobile: '7978979797',
      roleKey: 'Web Development',
      password: '12347689',
    },
  ],

  isEdit: [],
}

export const UserSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    Adduser: (state, action) => {
      state.User.push(action.payload)
    },
    DeleteUser: (state, action) => {
      state.User.splice(action.payload, 1)
    },
    EditUser: (state, action) => {
      state.isEdit = state.User[action.payload]
    },
    UpdateUser: (state, action) => {
      state.User[action.payload.id] = action.payload
    },
  },
})

export const { Adduser, DeleteUser, EditUser, UpdateUser } = UserSlice.actions

export default UserSlice.reducer
