import { Box, Button, Modal } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import './User.css'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'
import { DeleteRole, EditRole } from '../Redux/RoleSlice'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const RoleList = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const RoleData = useSelector((state) => state?.role?.userRole)
  const [open, setOpen] = useState(false)
  const [selectId, setSelectId] = useState()
  const handleClose = () => setOpen(false)
  const handleShow = (id) => {
    dispatch(EditRole(id))
    navigate(`/addrole/${id}`)
  }

  const handleDelete = (index) => {
    setSelectId(index)
    setOpen(true)
  }

  const handleSure = () => {
    dispatch(DeleteRole(selectId))
    setOpen(false)
  }

  return (

    <div>
      <div className="list-button">
        <Typography
          sx={{ m: 2, width: 200, color: '#4058c2', margin: '0 0 23px' }}
          variant="h5"
          color="primary"
        >
          User Role
        </Typography>
        <div className="plusicons">
          <Button
            onClick={() => navigate('/addrole')}
            variant="contained"
            sx={{ margin: '0 15px', background: '#4058c2' }}
          >
            Add Role <AddIcon />
          </Button>
        </div>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }} aria-label="customized table">
            <TableHead style={{ backgroundColor: '#7689de' }}>
              <TableRow>
                <TableCell align="center">#</TableCell>
                <TableCell align="center">Rolelabel</TableCell>
                <TableCell align="center">RoleKey</TableCell>
                <TableCell align="center" colSpan={2}>
                  RoleKey
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {RoleData.length > 0 ? (
                RoleData?.map((item, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell align="center">{index}</TableCell>
                      <TableCell align="center">{item.roleLabel}</TableCell>
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
                  <TableCell colSpan={4} sx={{ textAlign: 'center' }}>
                    Data Not Found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
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
              sx={{
                textAlign: 'center',
                color: 'dark',
                margin: '0px 0px 25px',
              }}
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
      </div>
    </div>
  )
}

export default RoleList
