import Common from "./Common";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {

  return (
    <div>
     <>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          style={{backgroundColor:"#77cef3"}}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Common/>
       </>
    </div>
  )
}

export default Header
// import React from 'react'
// import Common from "./Common";
// import AppBar from "@mui/material/AppBar";
// import CssBaseline from "@mui/material/CssBaseline";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";

// const DeshboardCommon = () => {
//   const Data = JSON.parse(localStorage.getItem("login"));
//   return (
//     <div>
//       {
//         Data[0].User_Role==="Admin" ?
//        <>
//         <CssBaseline />
//         <AppBar
//           position="fixed"
//           sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
//           style={{backgroundColor:"#77cef3"}}
//         >
//           <Toolbar>
//             <Typography variant="h6" noWrap component="div">
//               Dashboard
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Common/>
//        </>
//        :
//        <>
//         <CssBaseline />
//         <AppBar
//           position="fixed"
//           sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         >
//           <Toolbar>
//             <Typography variant="h6" noWrap component="div">
//               Dashboard
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Common/>
//        </>
//       }
//     </div>
//   )
// }

// export default DeshboardCommon