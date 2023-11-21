<script setup>
import EnterStockForm from '../components/EnterStockForm.vue';
</script>

<template>
  <main>
    <h1>Has Mamul</h1>

    <div class="container">

      <v-expansion-panels>
        <v-expansion-panel title="Stok Giriş">
          <v-expansion-panel-text>
            <EnterStockForm />
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel title="Stok Çıkış">

        </v-expansion-panel>
      </v-expansion-panels>

      <RouterLink to="/urunler" v-slot="{ href, route, navigate }">
        <v-btn :href="href" @click="navigate" class='router-button'>
          Ürünler 
        </v-btn>
      </RouterLink>

      <RouterLink to="/receteler" v-slot="{ href, route, navigate }">
        <v-btn :href="href" @click="navigate" class='router-button'>
          Reçeteler
        </v-btn>
      </RouterLink>




    </div>
  </main>
</template>

<style scoped>
main {
  flex-grow: 1;
  min-width: 24em;
  max-width: 800px;
  padding: 10px;
}

.router-button {
  width: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.v-expansion-panel,
.v-btn {
  margin-bottom: 1rem;
}
</style>
