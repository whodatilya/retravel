import api from "@/api";

export async function findPlace ({ dispatch, commit }, { filter }) {
  return await api.maps.findPlace(filter)
}