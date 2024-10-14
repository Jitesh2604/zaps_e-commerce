// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const ProductContext = createContext();

// export const ProductProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);
//     const [products, setProducts] = useState([]);
//     const [error, setError] = useState("");
//     const [filteredProducts, setFilteredProducts] = useState([]);

//     useEffect(() => {
//         const getData = async () => {
//             try {
//                 const response = await axios(`${import.meta.env.VITE_APP_API_URL}/products`);
//                 setProducts(response.data);
//                 setFilteredProducts(response.data); 
//             } catch (err) {
//                 setError(err.message);
//             }
//         };

//         getData();
//     }, []);

//     const addToCart = (product) => {
//         setCart((prevCart) => {
//             const existingProduct = prevCart.find(item => item._id === product._id);
//             if (existingProduct) {
//                 return prevCart; 
//             }
//             return [...prevCart, product]; 
//         });
//     };

//     const removeProduct = (productId) => {
//         setCart((prevCart) => prevCart.filter(item => item._id !== productId));
//     };

//     const getProductsByCategoryName = (categoryName) => {
//         const filtered = products.filter(product => product.category.name.toLowerCase() === categoryName.toLowerCase());
//         setFilteredProducts(filtered); 
//     };

//     return (
//         <ProductContext.Provider 
//             value={{ 
//                 cart, 
//                 products, 
//                 error, 
//                 addToCart, 
//                 removeProduct, 
//                 filteredProducts, 
//                 getProductsByCategoryName 
//             }}>
//             {children}
//         </ProductContext.Provider>
//     );
// };
