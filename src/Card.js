function Card({ product, addToCart }) {
  return (
    <div className=" crd col-lg-4 border mt-1 p-6">
      <div className="row">
        <div className="col-lg-12">
          <img
            className="img-fluid" 
            src="https://img.giznext.com/assets/model/2/11245/apple-iphone-13-86392669469042bb60d485f764c68d.jpg"
          ></img>
        </div>
        <div className="titles mt-2 col-lg-12">
          <h4>{product.name}</h4>
          <h6>Rs.{product.price}</h6>
          <button
            onClick={() => {
              addToCart(product)
            }}
            className="btn mb-3 btn-sm btn-outline-dark">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
