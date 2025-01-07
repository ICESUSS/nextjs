export async function getProduct() {
 
  
        const response = await fetch("https://dummyjson.com/products",{cache: "no-store"} )
        if(!response.ok) {
          throw new Error("ไม่สามารถ fetch Data ได้")
        }
        return response.json()
}