import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { TextField } from '@mui/material'
import './User.css'
import { styles } from '../Common/Userstyle'
import { useNavigate, useParams } from 'react-router-dom'
import { Addrole, UpdateRole } from '../Redux/RoleSlice'
import { RoleValidations } from '../Common/RoleValidation'
import { Grid, Typography } from '@material-ui/core'
import Toast from '../Common/ToastCommon'

const AddRole = () => {
  
  const object = useSelector((state) => state?.role?.isEditRole)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  const formik = useFormik({
    initialValues: {
      roleLabel: '',
      roleKey: '',
    },
    RoleValidations: RoleValidations,

    onSubmit: (values, { resetForm }) => {
      if (id) {
        dispatch(UpdateRole(values))
        Toast('Update Roles successfully...!', 'success')
      } else {
        dispatch(Addrole(values))
        Toast('Create Roles successfully...!', 'success')
      }
      resetForm();

      navigate('/rolelist')
    },
  })

  const handleCancel = () => {
    formik.resetForm()
    navigate('/rolelist')
  }

  useEffect(() => {
    if (object && id) {
      formik.setFieldValue('roleLabel', object.roleLabel)
      formik.setFieldValue('roleKey', object.roleKey)
      formik.setFieldValue('id', id)
    }
  }, [object])

  return (
    <div>
      <div style={{ marginLeft: '10px' }}>
        <Typography variant="h4" color="primary">
          {id ? 'Update Role' : 'Create Role'}
        </Typography>
        <Typography
          color="primary"
          style={{
            marginTop: 0,
            marginBottom: '1rem',

            marginLeft: '4px',
          }}
        >
          Manage Your Role
        </Typography>
      </div>
      <div className={styles.container}>
        <div className="inner-section">
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="roleLabel"
                  name="roleLabel"
                  label="RoleLabel"
                  value={formik.values.roleLabel}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.roleLabel && Boolean(formik.errors.roleLabel)
                  }
                  helperText={
                    formik.touched.roleLabel && formik.errors.roleLabel
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="roleKey"
                  name="roleKey"
                  label="RoleKey"
                  value={formik.values.roleKey}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.roleKey && Boolean(formik.errors.roleKey)
                  }
                  helperText={formik.touched.roleKey && formik.errors.roleKey}
                />
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
                    variant="outlined"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddRole
