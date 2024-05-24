export function addtocart(id, Image, Name, Price, Color){
    return{
        type: "Add_Item_To_Cart",
        item: {
            id: id,
            Image: Image,
            Name: Name,
            Price: Price,
            Color: Color
        }
    }   
}

export function removefromcart(id){
    return{
        type: "Remove_Item_From_Cart",
        id:id
    }
}