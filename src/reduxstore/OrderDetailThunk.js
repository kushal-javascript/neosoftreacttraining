import axios from "axios";

export async function OrderDetailThunk() {
  return (dispatch) => {
    axios({
      method: "post",
      url: "https://apifromashu.herokuapp.com/api/cakeorders",
      headers: {
        authtoken: localStorage.token,
      },
    }).then(
      (response) => {
        console.log(1);
        console.log(response);
      },
      (error) => {
        //setError(error.data);
        console.log(error.data);
      }
    );
    console.log(2);
    // dispatch({
    //   type: "ORDER_DETAIL",
    // });
  };
}
