<template>
  <div class="wrap-box">
    <span>name :</span>
    <span>{{getUser.name}}</span>
    <span>username :</span>
    <span>{{getUser.username}}</span>
    <span>email :</span>
    <span>{{getUser.email}}</span>
    <span>address:</span>
    <span>
      <br />
      <span>street:</span>
      <span>{{getUser.address.street}}</span>
      <br />
      <span>suite:</span>
      <span>{{getUser.address.suite}}</span>
      <br />
      <span>city:</span>
      <span>{{getUser.address.city}}</span>
      <br />
    </span>

    <span>phone :</span>
    <span>{{getUser.phone}}</span>
    <span>website :</span>
    <span> <a href="http://{getUser.website}">{{getUser.website}}</a></span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    userId: Number
  },
  mounted() {
    console.log("dffd", this.post);
  },
  computed: mapGetters(["getUser"]),
  methods: mapActions(["axiosUser"]),
  async mounted() {
    this.axiosUser(this.userId);
  }
};
</script>

<style  scoped>
.wrap-box {
  max-width: 70%;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
}
span:nth-child(odd) {
  text-align: right;
}
span:nth-child(even) {
  text-align: left;
}
span {
  padding: 0.1rem 0.5rem;
  width: 50%;
}
span :nth-of-type(add) {
  text-align: left;
}
</style>