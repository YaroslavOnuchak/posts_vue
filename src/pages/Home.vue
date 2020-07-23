<template>
  <div class="home">
    <input type="text" placeholder="filter by title" v-model="filterTitle" />
    <br />
    <jw-pagination :items="filteredList" pageSize="3" @changePage="onChangePage"></jw-pagination>
    <br />
    <div class="card-body">
      <div class="wrap-box" v-for="post in pageOfItems" :key="post.id">
        <h3>
          <router-link :to="{ name: 'Post', params: { postId: post.id}}">{{post.title | capitalize}}</router-link>
        </h3>
        <p>{{post.body}}</p>
        <router-link
          class="btn"
          :to="{ name: 'User', params: { userId: post.userId}}"
        >go to user Info</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    userId: {
      type: Number,
      defaul() {
        return Number;
      },
    },
  },
  data() {
    return {
      pageOfItems: [],
      pageSize: 3,
      filterTitle: "",
    };
  },
  filters: {},
  computed: {
    filteredList() {
      return this.allPosts.filter((post) => {
        return post.title
          .toLowerCase()
          .includes(this.filterTitle.toLowerCase());
      });
    },
    ...mapGetters(["allPosts"]),
  },
  methods: {
    ...mapActions(["axiosPosts"]),
    onChangePage(pageOfItems) {
      if (pageOfItems.length > this.pageSize) {
        this.pageOfItems = pageOfItems.slice(0, this.pageSize);
      } else {
        this.pageOfItems = pageOfItems;
      }
    },
  },
  mounted() {
    let dat = JSON.parse(localStorage.getItem("data"));
    this.userId = dat.userId;
    this.axiosPosts(this.userId);
  },
};
</script>
<style  scoped>
input[type="text"] {
  margin-bottom: 0.2rem;
}
.btn {
  font-size: 0.9rem;
  border: 1px solid #000;
  padding: 0 0.2rem;
  border-radius: 5px;
  background: lavender;
}
</style>


