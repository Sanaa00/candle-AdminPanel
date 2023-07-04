import { type } from "os";

export type abc = { search: string, category?: string, page: number } 
export type productsProps={
  _id: number; amount?: number; sell?: number; productName: string; description: string; price: number; rating: number; discount: number; favourite: boolean; category: string; quantity: number; colors: string[]; images: string[];
}
  
export type dataProps={
  products:productsProps[],
  result:number
}
  
export type Response = {
  status: "success";
  data: dataProps;
};

export type OrderPage = {page:number}

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

export type orderProps = {
  data: {
    address: addressProps[],
    products: orderProductsProps[],
    status: string,
    totalprice: totalprice[],
    user: userOrder,
    _id: string
  }[]
  status: string
}