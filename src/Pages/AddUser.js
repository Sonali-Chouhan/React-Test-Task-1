import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { MenuItem, TextField, Typography } from '@mui/material'
import './User.css'
import { styles } from '../Common/Userstyle'
import { Adduser, UpdateUser } from '../Redux/UserSlice'
import { validationSchema } from '../Common/Validations'
import { useNavigate, useParams } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import Toast from '../Common/ToastCommon'

const AddUser = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const object = useSelector((state) => state?.auth?.isEdit)
  const userData = useSelector((state) => state?.role?.userRole)
  const { id } = useParams()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      username: '',
      mobile: '',
      roleKey: '',
      password: '',
      id: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (id) {
        dispatch(UpdateUser(values))
        Toast('Update successfully....!', 'success')
      } else {
        dispatch(Adduser(values))
        Toast('Create successfully....!', 'success')
      }
      resetForm()
      navigate('/')
    },
  })

  const handleCancel = () => {
    formik.resetForm()
    navigate('/')
  }

  useEffect(() => {
    if (object && id) {
      formik.setFieldValue('name', object.name)
      formik.setFieldValue('email', object.email)
      formik.setFieldValue('username', object.username)
      formik.setFieldValue('mobile', object.mobile)
      formik.setFieldValue('roleKey', object.roleKey)
      formik.setFieldValue('id', id)
    }
  }, [object])

  return (
    <div>
      <div style={{ marginLeft: '10px' }}>
        <Typography
          variant="h4"
          color="primary"
        >
          {id ? 'Update User' : 'Create User'}
        </Typography>
        <Typography
          style={{
            marginTop: 0,
            marginBottom: '1rem',
            color: '#7da6db',
            marginLeft: '4px',
          }}
        >
          Manage Your User
        </Typography>
      </div>
      <div className={styles.container}>
        <div className="inner-section">
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <div className="form-field">
                  <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="username"
                  name="username"
                  label="Username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                  helperText={formik.touched.username && formik.errors.username}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  type="number"
                  id="mobile"
                  name="mobile"
                  label="mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                  helperText={formik.touched.mobile && formik.errors.mobile}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  select
                  fullWidth
                  id="roleKey"
                  name="roleKey"
                  label="RoleKey"
                  value={formik.values.roleKey}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.roleKey && Boolean(formik.errors.roleKey)
                  }
                  SelectProps={{
                    renderValue: (value) => value,
                  }}
                  helperText={formik.touched.roleKey && formik.errors.roleKey}
                >
                  {userData.map((option) => (
                    <MenuItem key={option.roleKey} value={option.roleKey}>
                      {option.roleLabel}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
            </Grid>
            <div className="form-button">
              <div className="modal-button">
                <div className="modal-cancle-button">
                  <Button color="primary" variant="contained" type="submit">
                    {id ? 'Update' : 'Create'}
                  </Button>
                </div>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddUser
