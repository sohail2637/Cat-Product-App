<template>
  <div>
    <!-- Start Best Sellers Area -->
    <section class="best-sellers-area pb-60">
      <div class="container">
        <!-- <div class="section-title">
          <h2><span class="dot"></span> Best Product</h2>
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
    <!-- End Best Sellers Area -->
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
      products: [],
    };
  },
  components: {
    QuckView,
    ProductItem,
  },
  methods: {
    toggle() {
      mutations.toggleQuickView();
    },
  },
  computed: {
    // products() {
    //   return this.$store.state.products.all.filter(
    //     (product) => product.bestSellers === true
    //   );
    // },
  },
  async mounted() {
    await fetch("https://api.thecatapi.com/v1/images/search?breed_ids=beng&limit=16")
      .then(async (res) => {
        const resData = await res.json();
        this.products = resData;
        console.log("result....... first", this.products[0].breeds);
      })
      .catch((error) => console.log("error", error));
  },
};
</script>
