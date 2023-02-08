import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import { DeleteUser, EditUser } from '../Redux/UserSlice'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add'
import Toast from '../Common/ToastCommon'
import CommonModal from '../Common/CommonModal'


const UserList = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userData = useSelector((state) => state?.auth?.User)
  const [open, setOpen] = React.useState(false)
  const [selectId, setSelectId] = useState()
  const handleClose = () => setOpen(false)

  const AddUser = () => {
    navigate('/adduser')
  }
  const handleShow = (id) => {
    dispatch(EditUser(id))
    navigate(`/adduser/${id}`)
  }
  const handleDelete = (index) => {
    setSelectId(index)
    setOpen(true)
  }

  const handleSure = () => {
    dispatch(DeleteUser(selectId))
    setOpen(false)
    Toast('Delete User successfully ', 'error')
  }

  return (
    <div>
      <CommonModal open={open}  handleSure={handleSure}  handleClose={handleClose}/> 
      <div className="list-button">
        <Typography
          sx={{ m: 2, width: 200, color: '#4058c2', margin: '0 0 23px' }}
          variant="h5"
        >
          Users List
        </Typography>
        <div className="plusicons">
          <Button
            onClick={() => AddUser()}
            variant="contained"
            sx={{ margin: '0 15px', background: '#4058c2' }}
          >
            AddUser <AddIcon />
          </Button>
        </div>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }} aria-label="customized table">
            <TableHead style={{ backgroundColor: '#7689de' }}>
              <TableRow>
                <TableCell align="center">#</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Phone</TableCell>
                <TableCell align="center">Username</TableCell>
                <TableCell align="center">Role</TableCell>
                <TableCell align="center" colSpan={2}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.length > 0 ? (
                userData.map((item, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell align="center">{index}</TableCell>
                      <TableCell align="center">{item.name}</TableCell>
                      <TableCell align="center">{item.email}</TableCell>
                      <TableCell align="center">{item.mobile}</TableCell>
                      <TableCell align="center">{item.username}</TableCell>
                      <TableCell align="center">{item.roleKey}</TableCell>
                      <TableCell align="center">
                        <IconButton
                          aria-label="shopping cart"
                          color="primary"
                          size="medium"
                        >
                          <EditIcon
                            fontSize="medium"
                            onClick={() => handleShow(index)}
                          />
                        </IconButton>
                      </TableCell>
                      <TableCell align="center">
                        <IconButton color="primary" size="medium">
                          <DeleteIcon
                            fontSize="large"
                            onClick={() => handleDelete(index)}
                          />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  )
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={7} sx={{ textAlign: 'center' }}>
                    Not Record Found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default UserList
