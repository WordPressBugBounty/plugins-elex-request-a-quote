import parse from "html-react-parser";
export const GetWooCommercePrice = (prop)=>{

  if(undefined == prop.val || 0 == prop.val || typeof prop.val != 'string' ){
    return (
      <div></div>
    )
  }
    return(<div>
     {parse(prop.val)}
    </div>)
  
  }