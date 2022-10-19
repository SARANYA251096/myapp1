function Card({ product, addToCart, cartItems }) {
  return (
    <div className=" crd col-lg-4 border mt-1 p-6">
      <div className="row">
        <div className="col-lg-12">
          <img
            className="img-fluid" 
            src={"https://leronza.com/wp-content/uploads/2021/07/A1_24K_Gold_iPhone_13_Pro___Pro_Max_with_Crytal_Logo-min-300x300.png"}
          ></img>
        </div>
        <div className="titles mt-2 col-lg-12">
          <h4>{product.name}</h4>
          <h6>Rs.{product.price}</h6>
          <button disabled={cartItems.some(obj => obj.id===product.id)}
            onClick={() => {
              addToCart(product)
            }}
            className="btn mb-3 btn-sm btn-outline-dark">
              {
                cartItems.some(obj => obj.id===product.id) ? "Added to cart" : "Add to cart"
              }
           
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
