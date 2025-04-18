import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
} from '../constants/productConstants';

// Product List Reducer
export const productListReducer = (state = { products: [], loading: false, error: null }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true, error: null };
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products || action.payload,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload, products: [] };
    default:
      return state;
  }
};

// Product Details Reducer
export const productDetailsReducer = (state = { product: { reviews: [] }, loading: false, error: null }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true, error: null };
    case PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Product Delete Reducer
export const productDeleteReducer = (state = { loading: false, success: false, error: null }, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { ...state, loading: true, error: null };
    case PRODUCT_DELETE_SUCCESS:
      return { ...state, loading: false, success: true };
    case PRODUCT_DELETE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Product Create Reducer
export const productCreateReducer = (state = { loading: false, success: false, product: null, error: null }, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { ...state, loading: true, error: null };
    case PRODUCT_CREATE_SUCCESS:
      return { ...state, loading: false, success: true, product: action.payload };
    case PRODUCT_CREATE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case PRODUCT_CREATE_RESET:
      return { loading: false, success: false, product: null, error: null };
    default:
      return state;
  }
};

// Product Update Reducer
export const productUpdateReducer = (state = { loading: false, success: false, product: {}, error: null }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { ...state, loading: true, error: null };
    case PRODUCT_UPDATE_SUCCESS:
      return { ...state, loading: false, success: true, product: action.payload };
    case PRODUCT_UPDATE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case PRODUCT_UPDATE_RESET:
      return { loading: false, success: false, product: {}, error: null };
    default:
      return state;
  }
};

// Product Review Create Reducer
export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

// Product Top Rated Reducer
export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_TOP_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_TOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}; 