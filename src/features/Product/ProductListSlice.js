import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  fetchAllProducts,
  fetchBrands,
  fetchCategories,
  fetchProductById,
  updateProduct,
} from "./ProductListAPI";

const initialState = {
  products: [],
  homeProducts: [],
  status: "idle",
  totalItems: 0,
  brands: [],
  categories: [],
  selectedProduct: null,
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);

export const fetchHomeProductsAsync = createAsyncThunk(
  "product/fetchHomeProduct",
  async () => {
    const response = await fetchAllProducts();
    const filteredProducts = [];
    let menCount = 0;
    let womenCount = 0;
    for (const product of response.data) {
      if (product.categories === "Men" && menCount < 3) {
        filteredProducts.push(product);
        menCount++;
      } else if (product.categories === "Women" && womenCount < 2) {
        filteredProducts.push(product);
        womenCount++;
      }
      // Stop the loop if we've reached 5 products
      if (filteredProducts.length === 5) {
        break;
      }
    }

    return filteredProducts;
  }
);

export const fetchProductByIdAsync = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    const response = await fetchProductById(id);
    return response.data;
  }
);

export const fetchCategoriesAsync = createAsyncThunk(
  "product/fetchCategories",
  async () => {
    const response = await fetchCategories();
    return response.data;
  }
);

export const fetchBrandsAsync = createAsyncThunk(
  "product/fetchBrands",
  async () => {
    const response = await fetchBrands();
    return response.data;
  }
);

export const createProductAsync = createAsyncThunk(
  "product/createProduct",
  async ({ product }) => {
    const response = await createProduct(product);
    return response.data;
  }
);

export const updateProductAsync = createAsyncThunk(
  "product/updateProduct",
  async ({ product }) => {
    const response = await updateProduct(product);
    return response.data;
  }
);
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchHomeProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHomeProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.homeProducts = action.payload;
      })
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.categories = action.payload;
      })
      .addCase(fetchBrandsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBrandsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.brands = action.payload;
      })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedProduct = action.payload;
      })
      .addCase(createProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products.push(action.payload);
      })
      .addCase(updateProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        state.products[index] = action.payload;
      });
  },
});

export const { clearSelectedProduct } = productSlice.actions;

export const selectProducts = (state) => state.product.products;
export const selectHomeProducts = (state) => state.product.homeProducts;
export const selectCategories = (state) => state.product.categories;
export const selectBrands = (state) => state.product.brands;
export const selectTotalItems = (state) => state.product.totalItems;
export const selectProductById = (state) => state.product.selectedProduct;
export const selectedStatus = (state) => state.product.status;
export default productSlice.reducer;
