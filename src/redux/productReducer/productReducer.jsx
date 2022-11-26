//rxslice
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { http } from "../../util/config";
const initialState = {
  arrProduct: [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[2,3,5]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
    },
  ],
  productDetail: {},
  register: {
    email: "string",
    password: "string",
    name: "string",
    gender: true,
    phone: "string",
  },
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getDataProductAction: (state, action) => {
      //B1: Lấy dữ liệu từ payload
      let arrProduct = action.payload;
      state.arrProduct = arrProduct;
    },
    getDataRegister: (state, action) => {
      let register = action.payload;
      state.register = register;
    },
    getDataProductDetail: (state, action) => {
      //B1: Lấy dữ liệu từ payload
      let productDetail = action.payload;
      //B2: cập nhật state
      state.productDetail = productDetail;
    },
  },
});

export const { getDataProductAction, getDataProductDetail, getDataRegister } =
  productReducer.actions;

export default productReducer.reducer;

/*------------------------async action -------------- */
export const getProductApi = () => {
  return async (dispatch) => {
    //Xử lý api
    let result = await http.get("/api/Product");

    //Sau khi lấy dữ liệu từ api về => dispatch lên reducer
    //Tạo ra action creator đưa dữ liệu lên reducer
    const action = getDataProductAction(result.data.content);
    dispatch(action);
  };
};

//cài npm i axios
export const getProductDetailApi = (id) => {
  return async (dispatch) => {
    //Gọi api
    try {
      let result = await http.get("/api/Product/getbyid?id=" + id);
      //Sau khi lấy dữ liệu từ api về => dispatch lên reducer
      //Tạo ra action creator đưa dữ liệu lên reducer
      const action = getDataProductDetail(result.data.content);
      dispatch(action);
    } catch (err) {}
  };
};
