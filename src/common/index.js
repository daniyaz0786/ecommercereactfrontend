

const backendDomain = "https://mernbackend-84hp.onrender.com";
const SummaryApi = {
  signUp: {
    url: `${backendDomain}/api/signup`,
    method: "post",
  },

  signIn: {
    url: `${backendDomain}/api/signin`,
    method: "post",
  },
  current_user: {
    url: `${backendDomain}/api/user-details`,
    method: "get",
  },
  logout_user: {
    url: `${backendDomain}/api/userLogout`,
    method: "get",
  },
  allUser: {
    url: `${backendDomain}/api/all-user`,
    method: "get",
  },
  updateUser: {
    url: `${backendDomain}/api/update-user`,
    method: "post",
  },
  uploadProduct: {
    url: `${backendDomain}/api/upload-product`,
    method: "post",
  },
  allProduct: {
    url: `${backendDomain}/api/get-product`,
    method: "get",
  },
  updateProduct: {
    url: `${backendDomain}/api/update-product`,
    method: `post`,
  },

  CategoryProduct: {
    url: `${backendDomain}/api/get-categoryProduct`,
    method: `get`,
  },
  categorywiseproduct: {
    url: `${backendDomain}/api/category-product`,
    method: `post`
  },
  getproductdetails: {
    url: `${backendDomain}/api/get-productdetails`,
    method: `post`
  },
  addToCartProduct: {
    url: `${backendDomain}/api/addtocart`,
    method: `post`
  },
  addToCartProductCount: {
    url: `${backendDomain}/api/countAddToCartProduct`,
    method: `get`
  },
  addToCardProductView: {
    url: `${backendDomain}/api/view-cart-product`,
    method: `get`
  },
  updateCartProduct: {
    url: `${backendDomain}/api/update-cart-product`,
    method: 'post'
  },
  deleteCartProduct: {
    url: `${backendDomain}/api/delete-cart-product`,
    method: 'post'
  },
  searchproduct: {
    url: `${backendDomain}/api/search`,
    method: `get`
  },
  filterproducts: {
    url: `${backendDomain}/api/filterproduct`,
    method: `post`
  }







};

export default SummaryApi;
