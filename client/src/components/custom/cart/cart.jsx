import { useState } from 'react';
import {ChevronDown } from 'lucide-react';
import { useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const { cart, subtotal, items } = location.state || { cart: [], subtotal: 0, items: [] };
  const [quantity, setQuantity] = useState(2);

  // const bestsellers = [
  //   { id: 1, image: '/placeholder.svg?height=200&width=200', name: 'Green Insoles' },
  //   { id: 2, image: '/placeholder.svg?height=200&width=200', name: 'Green Insoles' },
  //   { id: 3, image: '/placeholder.svg?height=200&width=200', name: 'Black Running Shoes' },
  //   { id: 4, image: '/placeholder.svg?height=200&width=200', name: 'White Sneakers' },
  // ];
  console.log(items);

  console.log(cart);
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      display: "flex",
      justifyContent: "start",
    },
    flexContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    mainContent: {
      width: '65%',
    },
    sidebar: {
      width: '30%',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      backgroundColor: '#000',
      color: '#fff',
      padding: '10px',
      textAlign: 'left',
    },
    td: {
      padding: '10px',
      borderBottom: '1px solid #ddd',
    },
    productImage: {
      width: '80px',
      height: '100px',
      objectFit: 'cover',
    },
    quantitySelect: {
      padding: '5px',
      marginRight: '10px',
    },
    removeLink: {
      color: '#0066cc',
      textDecoration: 'none',
    },
    checkoutButton: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#000',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      marginBottom: '20px',
    },
    promoText: {
      marginBottom: '20px',
    },
    summaryTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    summaryItem: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
    },
    bestsellersTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginTop: '40px',
      marginBottom: '20px',
    },
    bestsellersGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '20px',
    },
    bestsellerItem: {
      textAlign: 'center',
    },
    bestsellerImage: {
      width: '100%',
      height: 'auto',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>{cart.length} items in My Bag</h1>
      <div style={styles.flexContainer}>
        <div style={styles.mainContent}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Item</th>
                <th style={styles.th}>Price / Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item._id}>
                  <td style={styles.td}>
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                      <div style={{ position: 'relative', marginRight: '20px' }}>
                        <img src={item.imageUrl} alt={item.name} style={styles.productImage} />
                        {/* <span style={{ position: 'absolute', top: 0, left: 0, background: 'pink', padding: '2px 5px', fontSize: '12px' }}>
                          {item.stock} left
                        </span>
                        <Heart style={{ position: 'absolute', top: 0, right: 0, cursor: 'pointer' }} /> */}
                      </div>
                      <div>
                        <h3>{item.name}</h3>
                        {/* <p>Color: {item.color}</p> */}
                        {/* <p>Size: {item.size}</p> */}
                      </div>
                    </div>
                  </td>
                  <td style={styles.td}>
                    <p>${item.price.toFixed(2)}</p>
                    <p>{subtotal}</p>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                      <select
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        style={styles.quantitySelect}
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                      <ChevronDown />
                    </div>
                    <a to="#" style={styles.removeLink}>Remove</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={styles.sidebar}>
          <button style={styles.checkoutButton}>Proceed to Checkout</button>
          <p style={styles.promoText}>Have a Promotional Code? Proceed to checkout to redeem it.</p>
          <h2 style={styles.summaryTitle}>Bag Summary ({cart.length} Items)</h2>
          <div style={styles.summaryItem}>
            <span>Subtotal ({cart.length} items)</span>
            <span>${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</span>
          </div>
          <p style={{ fontSize: '14px', color: '#666' }}>
            Zappos.com LLC is required by law to collect <strong>sales tax</strong> on orders shipped to
            specific states. Appropriate charges will be added to your merchandise total and
            displayed for your review at checkout.
          </p>
          <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
            Unless otherwise noted, all products are sold by Zappos.com LLC.
          </p>
        </div>
      </div>
      <h2 style={styles.bestsellersTitle}>Some Bestsellers</h2>
      <div style={styles.bestsellersGrid}>
        {/* {console.log(product)} */}
        {/* {product.map((item) => (
          <div key={item._id} style={styles.bestsellerItem}>
            <img src={item.imageUrl} alt={item.name} style={styles.bestsellerImage} />
            <p>{item.name}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Cart;