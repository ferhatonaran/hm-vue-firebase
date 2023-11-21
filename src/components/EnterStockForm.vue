<template>
  <div>
    <h2></h2>
    <v-row>
      <v-col cols="6">
        <v-select
          v-model="selectedProduct"
          :items="['Product 1', 'Product 2', 'Product 3']"
          label="Ürün"
        ></v-select>
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="quantity"
          label="Miktar"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedProduct: null,
      quantity: null,
      products: [
        { text: 'Product 1', value: 'product1' },
        { text: 'Product 2', value: 'product2' },
        { text: 'Product 3', value: 'product3' },
      ],
    };
  },
};
</script>

<style>
h2 {
  margin-bottom: 20px;
}
</style>
