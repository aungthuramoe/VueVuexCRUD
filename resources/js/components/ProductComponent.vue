<template>
  <div class="container my-5">
    <div class="row mb-3 justify-content-end">
      <div class="col-4">
        <button class="btn btn-success" @click="createProduct()">
          <i class="fas fa-plus-circle"></i>
          Create
        </button>
      </div>
      <div class="col-4">
        <form @submit.prevent="searchProduct()">
          <div class="input-group">
            <input
              type="text"
              v-model="search"
              class="form-control"
              placeholder="Search"
            />
            <div class="input-group-append">
              <button class="btn btn-primary">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <div class="card">
          <h3 class="card-header">{{ title }}</h3>
          <div class="card-body">
            <div class="form">
              <div class="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="product.name"
                  :class="{ 'is-invalid': submitted && $v.product.name.$error }"
                  placeholder="Enter Product Name"
                />
                <span
                  v-if="submitted && !$v.product.name.required"
                  class="invalid-feedback"
                  >Name is required</span
                >
              </div>
              <div class="form-group">
                <label>Price:</label>
                <input
                  type="number"
                  class="form-control"
                  :class="{
                    'is-invalid': submitted && $v.product.price.$error,
                  }"
                  v-model="product.price"
                  placeholder="Enter Price"
                />
                <span
                  v-if="submitted && !$v.product.price.required"
                  class="invalid-feedback"
                  >Price is required</span
                >
                <span
                  v-if="submitted && !$v.product.price.maxLength"
                  class="invalid-feedback"
                  >Price no longer than 10 digit</span
                >
              </div>
              <button class="btn btn-success" @click="saveProduct()">
                <i class="fas fa-save"></i> Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-8">
        <table class="table">
          <thead>
            <tr>
              <th class="th">ID</th>
              <th class="th">Name</th>
              <th class="th">Price</th>
              <th class="th">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in productList" :key="product.id">
              <td>{{ product.id }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.price }}</td>
              <td>
                <button
                  class="btn btn-primary btn-sm"
                  @click="editProduct(product.id, product.name, product.price)"
                >
                  <i class="fas fa-edit"></i>
                  Edit
                </button>
                <button
                  class="btn btn-danger btn-sm"
                  @click="deleteProduct(product.id)"
                >
                  <i class="fas fa-trash"></i>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script src="../services/product/product"/>

