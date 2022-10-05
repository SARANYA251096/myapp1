import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Card from "./Card";
import Cart from "./Cart";
import {useState} from "react";
function App() {
  const products=[
    {
      id:1,
      name:"iPhone",
      price:"45000",
      // imge:"url(https://img.giznext.com/assets/model/2/11245/apple-iphone-13-86392669469042bb60d485f764c68d.jpg)"
    },
    {
      id:2,
      name:"iPad",
      price:"17000",
    },
    {
      id:3,
      name:"iPen",
      price:"25000",
    },
    {
      id:4,
      name:"iWatch",
      price:"40000",
    },
    {
      id:5,
      name:"MacBookPro",
      price:"12000",
    },
    {
      id:6,
      name:"iPhoneSE",
      price:"18000"
    }
    
  ]

  const [cartItems,setCartItems] = useState([])

  let addToCart=(product) => {
          setCartItems([...cartItems,product])
  }

  let removeFromCart=(product) => {
          const indexValue=cartItems.findIndex(obj => obj.id === product.id)
          cartItems.splice(indexValue,1);
          setCartItems([...cartItems])
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {
              products.map((product) => {
                return <Card product={product} addToCart={addToCart}/>
              })
            }
          </div>
        </div>
        <div className="col-lg-4">
        <h3>Cart</h3>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
        </div>
      </div>
    </div>
  );
}

export default App;
