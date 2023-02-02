import * as yup from 'yup';

export const RoleValidations = yup.object({
    name: yup
      .string('Enter your Name')
      // .name('Enter a valid Name')
      .required('Name is required'),
    
      roleKey: yup
      .string('Enter your email')
      // .email('Enter a valid email')
      .required('Email is required'),
   
  })