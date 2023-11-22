<template>
  <div>
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.product_name }}
      </li>
    </ul>


  </div>
</template>

<script setup>
import { productsRef } from '@/firebase';
import { useCollection } from "vuefire";


const products = useCollection(productsRef);




</script>
