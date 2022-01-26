<template>
  <client-only>
    <!-- Start Partner Area -->
    <div class="partner-area">
      <div class="container">
        <!-- <div class="section-title">
          <h2><span class="dot"></span> Product Category</h2>
        </div> -->
        <div class="partner-slides owl-carousel owl-theme">
          <b-form-select
            v-model="selected"
            :options="categories"
            @change="productByCategory(selected)"
          ></b-form-select>
          <div class="mt-3">
            Selected: <strong>{{ selected }}</strong>
          </div>

          <!-- <carousel
            :loop="true"
            :autoplay="false"
            :autoplayTimeout="1000"
            :paginationEnabled="false"
            :perPageCustom="[
              [0, 2],
              [768, 4],
              [1200, 6],
            ]"
            :speed="20000"
          >
            <slide v-for="category in categories" :key="category.id">
              <div class="partner-item" @click="productByCategory(category.id)">
                <div>
                  <h3>{{ category.name }}</h3>
                </div>
                <a href="#" target="_blank"><img src="../../assets/img/partner1.png" alt="image"></a>
              </div>
            </slide>

            <slide>
              <div class="partner-item">
                <a href="#" target="_blank"><img src="../../assets/img/partner2.png" alt="image"></a>
                <div>
                  <h3>Cats pic</h3>
                </div>
              </div>
            </slide>
          </carousel> -->
        </div>
      </div>
    </div>
    <!-- End Partner Area -->
  </client-only>
</template>
<script>
export default {
  name: "PartnerComponent",
  data() {
    return {
      categories: [],
      selected: null,
      //   options: [{ value: null, text: "select an breed" }],
    };
  },
  props: {
    productByCategory: Function,
  },
  methods: {},
  async mounted() {
    await fetch("https://api.thecatapi.com/v1/breeds")
      .then(async (res) => {
        const resData = await res.json();
        this.categories = [{ value: resData.id, text: resData.name }];
        resData.map((a, index) => {
          this.categories[index] = { value: a.id, text: a.name };
          a.name;
        });
        console.log("categories", this.categories);
      })
      .catch((error) => console.log("error", error));
  },
};
</script>
