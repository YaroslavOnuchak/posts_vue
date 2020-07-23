<template>
  <div id="app">
    <nav id="#nav" v-if="logData.logSuccessful">
      <router-link @click="aa" :to="{name: 'Home'}" class="btn">Home</router-link>
      <router-link :to="{name: 'User'}" class="btn">User</router-link>
      <router-link :to="{name: 'Log'}" class="btn">
        <span @click="logOut">log out</span>
      </router-link>
    </nav>
    <router-view @logSucces="logCheck" v-bind:userId="this.logData.userId" />
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      logData: {
        logSuccessful: false,
        userId: "",
      },
    };
  },
  methods: {
    logCheck(data) {
      this.logData.logSuccessful = data.logSuccessful;
      this.logData.userId = data.userId;
    },

    logOut() {
      this.logData.logSuccessful = false;
      this.logData.userId = "";
      localStorage.clear();
    },
  },
  mounted() {},
  components: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: lavender;
}
#app {
  display: flex;

  height: 100vh;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

form {
  display: flex;
  flex: 1 0 auto;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
input[type="email"],
input[type="text"] {
  width: 25%;
  padding: 0.5rem;
  color: red;
  outline: none;
  border-color: seagreen;
  border-radius: 0.5rem;
}
#btn_log {
  display: inline-block;
  color: black;
  padding: 0 0.5rem;
  margin: 1rem;
  border: 1px solid rgb(35, 30, 30);
  background: none;
  border-radius: 0.5rem;
  min-width: 3rem;
  height: 2rem;
  cursor: pointer;
  outline: none;
  text-align: center;
  text-decoration: none;
}
#btn_log:hover {
  box-shadow: 0 0 1rem lightgreen;
  background: lightgray;
  color: #000;
  text-shadow: 0 0 5px white;
}
.btn {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.btn:hover,
.home h3:hover,
nav a.router-link-exact-active {
  text-shadow: 0 3px 0.1rem darkseagreen, 0 5px 0.1rem darkseagreen;
}

a {
  color: #2c3e50;
  text-decoration: none;
}
h3 {
  text-align: center;
}
nav a {
  margin: 0.5rem 0.5rem 0;
}

.wrap-box {
  width: 80%;
  padding: 2rem;
  margin: 1rem auto;
  border-radius: 1rem;
  box-shadow: 0 0 2rem darkseagreen;
  text-align: justify;
  background-color: aliceblue;
}
.wrap-box h3 {
  margin-bottom: 0.5rem;
}
</style>
