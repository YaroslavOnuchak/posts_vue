<template>
  <div class="wrap-box">
    <h3>{{postInfo.title}}</h3>
    <p>{{postInfo.body}}</p>
    <br />
    <input type="text" placeholder="filter by email Users" v-model="filterEmail" />
    <div class="wrap-box" v-for="comment in filteredList" :key="comment.id">
      <h3>name: {{comment.name}}</h3>
      <span>
        <em>from email: {{comment.email}}</em>
      </span>
      <p>body: {{comment.body}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      filterEmail: "",
    };
  },
  props: {
    postId: Number,
  },
  computed: {
    filteredList() {
      return this.allComments.filter((post) => {
        return post.email
          .toLowerCase()
          .includes(this.filterEmail.toLowerCase());
      });
    },
    ...mapGetters(["postInfo", "allComments"]),
  },
  methods: mapActions(["axiosInfo", "axiosComments"]),
  async mounted() {
    this.axiosInfo(this.postId);
    this.axiosComments(this.postId);
  },
};
</script>

<style  scoped>
input[type="text"] {
  display: block;
  margin: 0 auto;
}
p {
  margin-top: 0.5rem;
}
</style>