export type abc = { search: string, category?: string, page: number } 
export type productsProps={
  _id: string; amount?: number; sell?: number; productName: string; description: string; price: number; rating: number; discount: number; favourite: boolean; category?: string; quantity: number; colors: string[]; images: string[];
  categoryId?: {
    category?: string,
    _id?: string
  };
  review?: reviewProps[]
}

export type reviewProps= {
  message: string,
    _id:string
}  

export type dataProps={
  products:productsProps[],
  result:number
}
  
export type singleProductProps = {
  data: productsProps,
  status:string
}

export type Response = {
  status: "success";
  data: dataProps;
};

export type OrderPage = {page:number|undefined}

export type OrdersProps={
  _id: number; amount?: number; sell?: number; productName: string; description: string; price: number; rating: number; discount: number; favourite: boolean; category: string; quantity: number; colors: string[]; images: string[];
}

export type addressProps = {
  phone: string,
  city: string,
  street: string
}

export type orderProductsProps = {
  productId:string
  quantity:number
  _id:string
}
export type totalprice = number

export type userOrder = {
  email:string,
  firstName:string,
  lastName:string,
  password:string,
  role:string,
  _id:string
}

export type justOrderProps = {
  Orders:{
    address: addressProps[],
    products: orderProductsProps[],
    status: string,
    totalprice: totalprice[],
    user: userOrder,
    _id: string
  }[],
  result:number
}
export type orderProps = {
  data:justOrderProps
  status: string
}
export type orderPropsforSIngleItem = {
  data:singleOrderPropsType
  status: string
}
export type singleOrderPropsType = {
   address: addressProps[],
    products: orderProductsProps[],
    status: string,
    totalprice: totalprice[],
    user: userOrder,
    _id: string
}
export type buttonProductProps = {
  text: string,
  type?: 'submit' | 'reset' | 'button' | undefined,
  width?:string,
  onclick?: () => void,
}

export type searchProps = {
     search:string
}
export type userDataProps = {
  user:null|user
 
}

export type user = {

    email: string,
    firstName: string,
    lastName: string,
    password: string,
    role: string
    _id: string
  
}

export type UserQueryProps = {
  status:string,
  results:number,
  data:user[]
}