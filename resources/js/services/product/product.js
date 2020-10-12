import { required, maxLength } from "vuelidate/lib/validators";
import Swal from 'sweetalert2';
export default {
    data() {
        return {
            product: {
                id: '',
                name: '',
                price: ''
            },
            edit: false,
            search: '',
            submitted: false,
        }
    },
    validations: {
        product: {
            name: { required },
            price: { required, maxLength: maxLength(10) },
        },
    },
    computed: {
        productList() {
            return this.$store.state.ProductModule.productList;
        },
        title() {
            return this.edit ? "Edit Product" : "Create Product"
        },
    },
    created() {
        this.getProductList();
    },
    methods: {
        createProduct() {
            this.edit = false;
            this.clearInput()
        },
        editProduct(product_id, name, price) {
            this.product.id = product_id
            this.product.name = name
            this.product.price = price
            this.edit = true
        },
        deleteProduct(product_id) {
            Swal.fire({
                title: 'Are you sure you want to delete ? ',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#00AB66',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Delete'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$store.dispatch('deleteProduct', product_id);
                    Swal.fire(
                        'Successfully Deleted',
                    )
                }
            })

        },
        getProductList() {
            this.$store.dispatch('addProductList');
        },
        saveProduct() {
            this.submitted = true;
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
            if (this.edit) {
                this.$store.dispatch("updateProduct", this.product);
            } else {
                this.$store.dispatch("addProduct", this.product);
            }
            Swal.fire(
                'Successfully '+ this.edit == true ? "Successfully Created":"Successfully Updated",
            )
            this.edit = false;
            this.submitted = false
        },
        searchProduct() {
            this.$store.dispatch("searchProduct", this.search);
        },
        clearInput() {
            this.product.id = ""
            this.product.name = ""
            this.product.price = ""
        }
    },
};
