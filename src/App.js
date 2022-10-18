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
      imge:"https://img.giznext.com/assets/model/2/11245/apple-iphone-13-86392669469042bb60d485f764c68d.jpg",
    },
    {
      id:2,
      name:"iPad",
      price:"17000",
      imge:"https://static.toiimg.com/thumb/resizemode-4,msid-54937951,imgsize-200,height-250/width-1200/54937951.jpg",
    },
    {
      id:3,
      name:"iPen",
      price:"25000",
      imge:"https://media.auchan.fr/A0220201009000310862PRIMARY_1024x1024/B2CD/",
    },
    {
      id:4,
      name:"iWatch",
      price:"40000",
      imge:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXwkaYWk-chTx_Ju02gEPYorsswkxYTFyIPQ&usqp=CAU,height-250",
    },
    {
      id:5,
      name:"MacBookPro",
      price:"12000",
      imge:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB2v2wqNHhAlzcQ-lGfwCs_LOTRexABAyvgQ&usqp=CAU",
    },
    {
      id:6,
      name:"iPhoneSE",
      price:"18000",
      imge:"https://idealz.lk/wp-content/uploads/2020/10/9A-Green-300x300.jpg"
    },
    
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
