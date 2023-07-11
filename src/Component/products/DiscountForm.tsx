
import { initialValuesProps } from '../../Pages/pages.types'
import { Form, Formik } from 'formik'
import InputFeild from '../InputFeild'
import Button from './Button'
import { useDiscountToProductMutation } from '../../features/Api/Products'
import * as Yup from "yup";
function DiscountForm({ data }) {
     const id = data?.data?._id
     const [discounttoProduct] = useDiscountToProductMutation()
     const initialValues: initialValuesProps = { price: 0 }
     
 const validationdiscount =Yup.object({
      price: Yup.number().label("price").required(),
    
    
     
    })
     
     
  return (
       <div className='flex flex-col bg-gray-50 mr-5 rounded-lg p-5 mb-5'>
            <Formik
                 validationSchema={validationdiscount}
                 onSubmit={(values) => {
                      discounttoProduct({ id: id, discount: values.price})
                      console.log(values)
                 }} initialValues={initialValues}>
               {({ handleSubmit,values,handleBlur,handleChange,errors, touched  }) => (
                      <Form onSubmit={handleSubmit}>
     
                             <p className='font-semibold text-gray-800 '>New price</p>
                  
                    <InputFeild
                         placeholder='Type price here'
                         name="price"
                         errors={touched.price}
                         onBlur={handleBlur}
                         value={values.price}
                         onChange={handleChange}
                         id="price"
                                type={"number"} />
                            {touched.price && errors.price && (
            <span className="text-red-400 text-sm">{errors.price}</span>
          )}
                           
         
                    <div className='w-48'>
                         <Button text="submit" type="submit" width={"32"}/>
                         </div>
                   
                 </Form>    
                 )}
                
            </Formik>
             
            
     
    </div>
  )
}

export default DiscountForm
