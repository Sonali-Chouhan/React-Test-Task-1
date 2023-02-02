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
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Toast from '../Common/ToastCommon'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 250,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <div className='CloseIcon'>
          <IconButton size="large">

          <HighlightOffIcon sx={{color:"#1976d2"}} />
          </IconButton>
          </div> */}
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h1"
            sx={{ textAlign: 'center', color: 'dark', margin: '0px 0px 25px' }}
          >
            Are you sure?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 4 }}>
            Do you really want to delete these records? This process cannot be
            undone.
          </Typography>
          <div className="modal-button">
            <div className="modal-cancle-button">
              <Button onClick={handleClose} variant="contained">
                Cancel
              </Button>
            </div>
            <Button onClick={handleSure} variant="contained">
              Delete
            </Button>
          </div>
        </Box>
      </Modal>
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
