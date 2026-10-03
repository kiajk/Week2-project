export async function getProducts(){
    const responce = await fetch("https://dummyjson.com/products");
    const data = await responce.json();

    return data.products;
}