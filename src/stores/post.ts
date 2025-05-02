// src/stores/post.ts
import { defineStore } from "pinia";
import type { Post } from "@/core/types/post";
import PostService from "@/core/services/PostService";

interface PostState {
  posts: Post[];
  currentPost: Post | null;
  loading: boolean;
  error: string | null;
}

export const usePostStore = defineStore("post", {
  state: (): PostState => ({
    posts: [],
    currentPost: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchPosts() {
      this.loading = true;
      this.error = null;
      try {
        const response = await PostService.getAll();
        this.posts = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch posts";
        console.error("Error fetching posts:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchPostBySlug(slug: string) {
      this.loading = true;
      this.error = null;
      try {
        const post = await PostService.getBySlug(slug);
        this.currentPost = post;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch post";
        console.error("Error fetching post:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
