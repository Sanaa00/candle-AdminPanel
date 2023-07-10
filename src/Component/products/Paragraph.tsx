type props={
     price?:number,
     productName?:string,
     name?:string

}
function paragraph({price,productName,name}:props) {
  return (
      <p className="font-semibold text-gray-800">{name||productName || (`$${price}.99`) }</p>
  )
}

export default paragraph
