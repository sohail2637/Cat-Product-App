<template>
  <div>
    <!-- Start All Products Area -->
    <section class="all-products-area pb-60">
      <div class="container">
        <!-- <div class="section-title">
          <h2><span class="dot"></span> Latest Products</h2>
        </div> -->

        <div class="row">
          <div
            v-for="(product, index) in products"
            :key="index"
            class="col-lg-3 col-md-6 col-sm-6"
          >
            <ProductItem :productSingle="product" @clicked="toggle"></ProductItem>
          </div>
        </div>
      </div>
    </section>
    <!-- End all Products Area -->
    <QuckView />
  </div>
</template>

<script>
import QuckView from "../modals/QuckView";
import { mutations } from "../../utils/sidebar-util";
import ProductItem from "./ProductItem";
export default {
  data() {
    return {
      limet: 8,
      products: [],
    };
  },
  components: {
    QuckView,
    ProductItem,
  },
  props: {
    productById: String,
  },
  methods: {
    toggle() {
      mutations.toggleQuickView();
    },
  },
  computed: {
    // products() {
    //   return this.$store.state.products.all.filter(
    //     (product) => product.latest === true
    //   );
    // },
  },
  watch: {
    productById: function (newVal, oldVal) {
      console.log(newVal, oldVal);
      fetch(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${newVal}&limit=${this.limet}`
      )
        .then(async (res) => {
          this.products = await res.json();
          console.log("res", this.products);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
