import api from "@/api";

export async function createNewPost ({ dispatch, commit }, { postData }) {
  await api.posts.createNewPost(postData)
}
export async function getAllPosts ({ dispatch, commit }) {
  return await api.posts.getAllPosts()
}