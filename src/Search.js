import { useEffect, useState } from "react";
import axios from "axios";
import Cards, { CardsObject } from "./Cards";


function Search(props) {
  let [search, setSearch] = useState([]);
  const searchParams = window.location.search;
  const params = new URLSearchParams(searchParams);
  const query = params.get('q');

  let allcakeapi =
    "https://apibyashu.herokuapp.com/api/searchcakes?q=" + query;

  useEffect(() => {
    axios({
      url: allcakeapi,
      method: "get",
    }).then(
      (response) => {
        setSearch(response.data.data);
        //console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div>
      Search Data
      <div className="container">
        <div className="row">
          {search?.length > 0 &&
            search.map((each, index) => {
              return (
                <div className="col-sm">
                  <Cards
                    cardsName={each.name}
                    shortDetails="Product Short Details"
                    cardsImage={each.image}
                    cakeid={each.cakeid}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Search;
