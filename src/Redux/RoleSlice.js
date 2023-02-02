//For profile page reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userRole: [
    {
      roleKey: 'webDevelopment',
      roleLabel: 'Web Development',
    },
    {
      roleKey: 'networking',
      roleLabel: 'Networking',
    },
    {
      roleKey: 'computerScience',
      roleLabel: 'Computer Science',
    },
  ],
  isEditRole: [],
}

export const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    Addrole: (state, action) => {
      state.userRole.push(action.payload)
    },
    DeleteRole: (state, action) => {
      state.userRole.splice(action.payload, 1)
    },
    EditRole: (state, action) => {
      state.isEditRole = state.userRole[action.payload]
    },
    UpdateRole: (state, action) => {
      state.userRole[action.payload.id] = action.payload
    },
  },
})

export const { Addrole, DeleteRole, EditRole, UpdateRole } = roleSlice.actions

export default roleSlice.reducer
