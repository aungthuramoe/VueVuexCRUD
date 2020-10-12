import axios from 'axios';
const productAPI = {
    saveNewProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
    searchProduct,
};

async function saveNewProduct(product){
    return await axios.post('/api/product',product);
}
async function getAllProduct() {
    return await axios.get('/api/product');
}

async function updateProduct(product) {
    return await axios.put('/api/product/'+product.id,product);
}

async function deleteProduct(productID) {
    return await axios.delete('/api/product/'+productID);         
}

async function searchProduct(searchText) {
    return await axios.get('/api/product?search='+searchText);
}

export default productAPI;