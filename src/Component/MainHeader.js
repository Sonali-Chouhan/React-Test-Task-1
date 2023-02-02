import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { Routes, Route } from 'react-router-dom'
import UserList from '../Pages/UserList'
import AddUser from '../Pages/AddUser'
import AddRole from '../Pages/AddRole'
import RoleList from '../Pages/RoleList'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import AddTaskIcon from '@mui/icons-material/AddTask'
import { styles } from './HeaderStyle'

// const MainHeader=(props)=>{
//   const [open,setOpen]=useState(false)
//   const [anchorEl,setAnchorEl]=useState(null)
//   const { classes, theme } =props;

//     const  handleDrawerOpen = () => {
//       setOpen( true );
//   };

//   const handleDrawerClose = () => {
//     setOpen(false );
//   };

//   const handleMenu = event => {
//     setAnchorEl({ anchorEl: event.currentTarget });
//   };
//   const handleClose = () => {
//     setAnchorEl( null );
//   };

//         return (
//           <div className={classes.root}>
//             <CssBaseline />
//             <AppBar
//               position="fixed"
//               className={classes.appBar}
//               fooJon={classNames(classes.appBar, {
//                 [classes.appBarShift]:open
//               })}
//             >
//               <Toolbar disableGutters={true}>
//                 <IconButton
//                   color="inherit"
//                   aria-label="Open drawer"
//                   onClick={handleDrawerOpen}
//                   className={classes.menuButton}
//                 >
//                   <MenuIcon
//                     classes={{
//                       root: open
//                         ? classes.menuButtonIconOpen
//                         : classes.menuButtonIconClosed
//                     }}
//                   />
//                 </IconButton>
//                 <Typography
//                   variant="h6"
//                   color="inherit"
//                   className={classes.grow}
//                   noWrap
//                 >
//                   Logo ++
//                 </Typography>
//                 <div>
//                   <IconButton
//                     aria-owns={open ? "menu-appbar" : undefined}
//                     aria-haspopup="true"
//                     onClick={handleMenu}
//                     color="inherit"
//                   >
//                     <AccountCircle />
//                   </IconButton>
//                   <Menu
//                     id="menu-appbar"
//                     anchorEl={anchorEl}
//                     anchorOrigin={{
//                       vertical: "top",
//                       horizontal: "right"
//                     }}
//                     transformOrigin={{
//                       vertical: "top",
//                       horizontal: "right"
//                     }}
//                     open={open}
//                     onClose={handleClose}
//                   >
//                     <MenuItem onClick={handleClose}>Profile</MenuItem>
//                     <MenuItem onClick={handleClose}>My account</MenuItem>
//                   </Menu>
//                 </div>
//               </Toolbar>
//             </AppBar>
//             <Drawer
//               variant="permanent"
//               className={classNames(classes.drawer, {
//                 [classes.drawerOpen]: open,
//                 [classes.drawerClose]: !open
//               })}
//               classes={{
//                 paper: classNames({
//                   [classes.drawerOpen]: open,
//                   [classes.drawerClose]: !open
//                 })
//               }}
//               open={open}
//             >
//               <div className={classes.toolbar} />
//               <List>
//               <ListItem button>
//                     <ListItemIcon>
//                     <GroupAddIcon color="primary" size="medium"/>
//                     </ListItemIcon>
//                     <ListItemText primary="Users" color="primary"  />
//                   </ListItem>
//                   <ListItem button>
//                     <ListItemIcon>
//                     <AddTaskIcon color="primary" size="medium"/>

//                     </ListItemIcon>
//                     <ListItemText primary="Role" color="primary"/>
//                   </ListItem>
//               </List>
//               <Divider />
//             </Drawer>
//             <main className={classes.content}>
//               <div className={classes.toolbar} />
//               <Routes>
//             <Route path="/" element={<UserList />} />
//             <Route path="/adduser" element={<AddUser />} />
//             <Route path="/adduser/:id" element={<AddUser />} />
//             <Route path="/addrole" element={<AddRole />} />
//             <Route path="/addrole/:id" element={<AddRole />} />
//             <Route path="/rolelist" element={<RoleList />} />
//           </Routes>
//             </main>
//           </div>
//         );
//       }

// MainHeader.propTypes = {
//     classes: PropTypes.object.isRequired,
//     theme: PropTypes.object.isRequired
//   };

//   export default withStyles(styles, { withTheme: true })(MainHeader);
class MiniDrawer extends React.Component {
  state = {
    open: false,
    anchorEl: null,
  }

  handleDrawerOpen = () => {
    this.setState({ open: !this.state.open })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget })
  }
  handleUsers = (event) => {
    window.location.href="/"
  }
  handleRole  = (event) => {
    window.location.href="/rolelist"
  }

  render() {
    const { classes, theme } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classes.appBar}
          fooJon={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar disableGutters={true}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classes.menuButton}
            >
              <MenuIcon
                classes={{
                  root: this.state.open
                    ? classes.menuButtonIconOpen
                    : classes.menuButtonIconClosed,
                }}
              />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.grow}
              noWrap
            >
              Logo ++
            </Typography>
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar} />
          <List>
            <ListItem button onClick={this.handleUsers}>
              <ListItemIcon>
                <GroupAddIcon color="primary" size="medium" />
              </ListItemIcon>
              <ListItemText primary="Users" color="primary" />
            </ListItem>
            <ListItem button onClick={this.handleRole}>
              <ListItemIcon>
                <AddTaskIcon color="primary" size="medium" />
              </ListItemIcon>
              <ListItemText primary="Role" color="primary" />
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/adduser/:id" element={<AddUser />} />
            <Route path="/addrole" element={<AddRole />} />
            <Route path="/addrole/:id" element={<AddRole />} />
            <Route path="/rolelist" element={<RoleList />} />
          </Routes>
        </main>
      </div>
    )
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(MiniDrawer)
