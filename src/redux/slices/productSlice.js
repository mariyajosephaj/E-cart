import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// action return promise
export const fetchProducts = createAsyncThunk("products/fetchProduts",async ()=>{
    const result = await axios.get("https://dummyjson.com/products")
    // console.log(result.data.products);
    sessionStorage.setItem("allProducts",JSON.stringify(result.data.products))
    return result.data.products
    
})

const productSlice = createSlice({
    name:"products",
    initialState:{
        allProdutcs:[],
        dummyAllProducts:[],
        loading:false,
        errorMsg:""
    },
    reducers:{
        searchProduct : (state,actionByHeader)=>{
            state.allProdutcs= state.dummyAllProducts.filter(item=>item.title.toLowerCase().includes(actionByHeader.payload))
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,apiResult)=>{
            state.allProdutcs= apiResult.payload
            state.dummyAllProducts=apiResult.payload
            state.loading=false
            state.errorMsg=""
        })
        builder.addCase(fetchProducts.pending,(state)=>{
            state.allProdutcs= []
            state.dummyAllProducts=[]
            state.loading=true
            state.errorMsg=""
        })
        builder.addCase(fetchProducts.rejected,(state)=>{
            state.allProdutcs= []
            state.dummyAllProducts=[]
            state.loading=false
            state.errorMsg="API call failed"
        })

    }
})
export const{searchProduct} = productSlice.actions

export default productSlice.reducer