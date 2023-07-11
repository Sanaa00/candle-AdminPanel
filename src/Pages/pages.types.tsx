export type MenuItemProps = {
     OrderMenu?: orderMenuItem[],
     productMenu?: productMenuItem[],
     id:string
}
   

export type orderMenuItem ={
     id: number,
     name: string,
     onclick?: () => void
}
  
export type productMenuItem = {
     id: number,
     name: string,
      onclick?: () => void
}
export type  inputFeildProps = {
      placeholder:string,
      name:string | number,
      value:string | ReadonlyArray<string> | number | undefined
      onChange: (e:string|React. ChangeEvent<HTMLInputElement>) => void,
      id:string,
      type:string,
      multiple?:any,
     accept?: string,
      onBlur:(e: any) => void 
}
export type updateProductFromProps = {
     initialValues: initialValuesProps,
      onSubmit: (e?: SubmitEvent | undefined) => void
     // onSubmit:(e?: object)=>void
     
}
export type initialValuesProps = {
     productName?: string,
     price?: number,
     categoryId?: string,
     description?: string
}
export type loginProps = {
         email: string,
      password: string,
}     