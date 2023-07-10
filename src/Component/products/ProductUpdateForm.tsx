import InputFeild from '../InputFeild'
import { Formik,Form } from 'formik'
import {  initialValuesProps } from '../../Pages/pages.types'

import Button from './Button'
function ProductUpdateForm() {

        const  initialValues:initialValuesProps={
               productName: "",
               description: "",
               price: 0,
               categoryId:""
               
          }

  return (
       <div className='flex flex-col bg-gray-50 mr-5 rounded-lg p-5 mb-5'>
            <Formik onSubmit={(values) => console.log(values)} initialValues={initialValues}>
                 {({ handleSubmit,values,handleBlur,handleChange }) => (
                      <Form onSubmit={handleSubmit}>
                             <p className='font-semibold text-gray-800 '>Product name</p>
                    <InputFeild
                         placeholder='Type name here'
                         name="productName"
                         onBlur={handleBlur}
                         value={values.productName}
                         onChange={handleChange}
                         id="productName"
                                type="text" />
                             <p className='font-semibold text-gray-800'>Category</p>
                           
                    <InputFeild
                         placeholder='Type Category here'
                         name="category"
                         onBlur={handleBlur}
                         value={values.categoryId}
                         onChange={handleChange}
                         id="categoryId"
                                type="text" />
                             <p className='font-semibold text-gray-800 '>Description</p>
                    <InputFeild
                         placeholder='Type description here'
                         name="description"
                         onBlur={handleBlur}
                         value={values.description}
                         onChange={handleChange}
                         id="description"
                                type="text" />
                             <p className='font-semibold text-gray-800 '>Price</p>
                  
                    <InputFeild
                         placeholder='Type price here'
                         name="price"
                         onBlur={handleBlur}
                         value={values.price}
                         onChange={handleChange}
                         id="price"
                                type={"number"} />
                           
         
                    <div className='w-48'>
                         <Button text="submit" type="submit" width={"32"} />
                         </div>
                   
                 </Form>    
                 )}
                
            </Formik>
             
            
     
    </div>
  )
}

export default ProductUpdateForm
