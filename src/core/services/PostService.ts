// src/core/services/PostService.ts
import type { Post } from "../types/post";
import ApiService from "./ApiService";

const PostService = {
  getAll() {
    return ApiService.get("post");
  },

  getBySlug(slug: string): Promise<Post> {
    return ApiService.get(`post/${slug}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error fetching post by slug:", error);
        throw error;
      });
  },
};

export default PostService;
