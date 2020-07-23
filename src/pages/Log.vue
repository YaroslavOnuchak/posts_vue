<template>
  <form @submit.prevent="onSubmit">
    <input type="email" placeholder="enter Email" v-model="emailVal" />
    <button type="submit" id="btn_log">log in</button>
    <p class="warning" v-if="togle">can't find Email</p>
  </form>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      logData: {
        logSuccessful: false,
        userId: "",
      },
      emailVal: "",
      togle: "",
    };
  },
  computed: mapGetters(["getUsers"]),
  methods: {
    ...mapActions(["axiosUsers"]),

    onSubmit(event) {
      this.getUsers.filter((el) => {
        if (el.email === this.emailVal) {
          this.logData.logSuccessful = true;
          this.logData.userId = el.id;
          this.$emit("logSucces", this.logData);
          this.$router.push("/Home");
          event.target.reset();
          localStorage.setItem("data", JSON.stringify(this.logData));
          this.togle = false;
          return el;
        } else {
          this.togle = true;
        }
      });
    },
  },
  async mounted() {
    this.axiosUsers();
  },
};
</script>
<style scoped>
.warning {
  color: red;
  font-weight: bold;
}
</style>
