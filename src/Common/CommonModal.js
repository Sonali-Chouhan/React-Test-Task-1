import { Box, Button, Modal, Typography } from '@mui/material'
import React from 'react'

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
const CommonModal = (props) => {
  return (
    <div>
         <Modal
        open={props.open}
        onClose={props.handleClose}
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
              <Button onClick={props.handleClose} variant="outlined">
                Cancel
              </Button>
            </div>
            <Button onClick={props.handleSure} variant="contained">
              Delete
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default CommonModal
{/* <Modal
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
//   <Typography
//     id="modal-modal-title"
//     variant="h4"
//     component="h1"
//     sx={{
//       textAlign: 'center',
//       color: 'dark',
//       margin: '0px 0px 25px',
//     }}
//   >
//     Are you sure?
//   </Typography>
//   <Typography id="modal-modal-description" sx={{ mt: 4 }}>
//     Do you really want to delete these records? This process cannot be
//     undone.
//   </Typography>
//   <div className="modal-button">
//     <div className="modal-cancle-button">
//       <Button onClick={handleClose} variant="contained">
//         Cancel
//       </Button>
//     </div>
//     <Button onClick={handleSure} variant="contained">
//       Delete
//     </Button>
//   </div>
// </Box>
// </Modal>
// </div>
// </div>
// )
// }

// export default RoleList */}