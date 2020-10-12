import productService from '../../api/product/product'
const state = {
    productList: [],
};
const actions = {
    addProduct({ commit }, product) {
        productService.saveNewProduct(product).then(response => {
            const result = response.data.product;
            commit("addProduct", result)
        }).catch(error => {
            console.log(error)
        });

    },
    addProductList({ commit }) {
        console.log("calling api")
        productService.getAllProduct().then(response => {
            console.log(response)
            const productList = response['data'];
            commit("addProductList", productList)
        }).catch(error => {
            console.log(error);
        })
    },
    updateProduct({ commit }, product) {
        productService.updateProduct(product).then(response => {
            console.log(response);
            commit('updateProduct', product)
        }).catch(error => {
            console.log(error)
        })
    },
    deleteProduct({ commit }, productID) {
        productService.deleteProduct(productID).then(response => {
            console.log(response);
            commit('deleteProduct', productID)
        }).catch(error => {
            console.log(error)
        })

    },
    searchProduct({ commit }, searchText) {
        productService.searchProduct(searchText).then(response=>{
            console.log(response.data);
            commit("addProductList", response.data)
        }).catch(error=>{
            console.log(error)
        })
    }
};
const mutations = {
    addProduct: (state, product) => { state.productList.push(product); },
    addProductList: (state, productList) => {
        state.productList = productList
    },
    deleteProduct: (state, productID) => {
        const index = state.productList.map(product => product.id).indexOf(productID)
        state.productList.splice(index, 1);
    },
    updateProduct: (state, product) => {
        const index = state.productList.findIndex((obj => obj.id == product.id));
        state.productList[index].name = product.name
        state.productList[index].price = product.price
    }
};

export default {
    state,
    actions,
    mutations,
}