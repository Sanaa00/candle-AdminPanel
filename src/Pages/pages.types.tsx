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
     name:string
}
