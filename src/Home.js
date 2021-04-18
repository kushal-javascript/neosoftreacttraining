import Carousel from "./Carousel";
import Cards, { CardsObject } from "./Cards";
import CakeData from "./Cakeproductdata";
import { each } from "jquery";
import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import axios from "axios";

var obj = {
  cardsName: "Product Object",
  shortDetails: "Product Short Details",
  cardsImage: "./cake_image_card.jpg",
};

function Home() {
  let [cakes, setCakes] = useState([]);
  let allcakeapi = "https://apibyashu.herokuapp.com/api/allcakes";
  var [product, setProduct] = useState();

  useEffect(() => {
    axios({
      url: allcakeapi,
      method: "get",
    }).then(
      (response) => {
        setCakes(response.data.data);
        //console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  function getProductID(product_id) {
    if (product_id) {
      var data = CakeData.filter(function (product) {
        return product.cakeid == product_id;
      })[0];
      setProduct(data);
    }
  }

  return (
    <div>
      <Carousel />
      <div className="container">
        <div className="row">
          {/* <div className="col-sm">
						<Cards cardsName="Product 1" 
							shortDetails="Product Short Details" 
							cardsImage="./cake_image_card.jpg"/>
					</div>
					<div className="col-sm">
						<CardsObject cardData={obj} />
					</div>
					{CakeData?.length > 0 && CakeData.map((each,index)=>{
						return(
							<div className="col-sm">
								<Cards cardsName={each.name} 
									shortDetails="Product Short Details" 
									cardsImage={each.image}
									cakeid={each.cakeid}
									getProductCollect={getProductID}/>
							</div>
						);
					})}
					 */}
          {cakes?.length > 0 &&
            cakes.map((each, index) => {
              return (
                <div className="col-sm" key={"cakeid-"+each.cakeid}>
                  <Cards
                    cardsName={each.name}
                    shortDetails="Product Short Details"
                    cardsImage={each.image}
                    cakeid={each.cakeid}
                    getProductCollect={getProductID}
                  />
                </div>
              );
            })}
        </div>
        {/* {product &&
					<ProductDetail productdata={product}/>
				} */}
      </div>
    </div>
  );
}
export default Home;
