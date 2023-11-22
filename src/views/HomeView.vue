<script setup>
import EnterStockForm from '../components/EnterStockForm.vue';
import { ref } from 'vue';

let isExpanded = ref(false);

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value;
};

let isExpanded2 = ref(false);

const toggleExpanded2 = () => {
  isExpanded2.value = !isExpanded2.value;
};

</script>


<template>
  <main>
    <div class="mycontainer">
      <h1>Has Mamul</h1>



      <v-expansion-panels :class="{ expanded: isExpanded }">

        <v-expansion-panel>
          <v-expansion-panel-title @click="toggleExpanded">
            Stok Giriş
          </v-expansion-panel-title>

          <v-expansion-panel-text>
            <EnterStockForm />
          </v-expansion-panel-text>
        </v-expansion-panel>

      </v-expansion-panels>

      <v-expansion-panels :class="{ expanded: isExpanded2 }">
        <v-expansion-panel >
          <v-expansion-panel-title @click="toggleExpanded2">
            Stok Çıkış
          </v-expansion-panel-title>
          
          <v-expansion-panel-text>

          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>


      <div>
        <RouterLink to="/urunler" v-slot="{ href, route, navigate }">
          <v-btn :href="href" @click="navigate" class='router-button' >
            Ürünler
          </v-btn>
        </RouterLink>

        <RouterLink to="/receteler" v-slot="{ href, route, navigate }">
          <v-btn :href="href" @click="navigate" class='router-button' >
            Reçeteler
          </v-btn>
        </RouterLink>
      </div>

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
  height: 200px;
}

.mycontainer {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.mycontainer>* {
  flex-grow: 0;
  flex-shrink: 1;
}

.v-expansion-panel,
.v-btn {
  margin-bottom: 1rem;
}

.expanded,
.v-expansion-panel--active {
  flex-grow: 1;
}

.v-expansion-panels {
  transition: 0.5s;
}
</style>