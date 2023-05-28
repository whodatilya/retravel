<template>
    <div class="map">
      <component-header @searchText="checkName"/>
        <div>
            <div class="map__header row justify-between" style="align-items: center">
                <div class="text-my-bold" style="font-size: 22px">
                    Маршруты: {{ placeName }}
                </div>
                <div class="row">
                    <img style="padding-right: 10px" :src="iconFavourite" alt="">
                    <div class="map__header-button">
                        Сохранить
                    </div>
                </div>
            </div>
            <div @click="findInterestingPlaces" class="cursor-pointer">
                <img class="full-width" :src="iconMapFull" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import ComponentHeader from '@/components/ComponentHeader.vue';
import iconMapFull from '@/assets/images/iconMapFull.svg'
import iconFavourite from '@/assets/images/iconFavourite.svg'
import {findPlace} from "@/store/map/actions";

export default {
  name: "MapComponent",
  components: { ComponentHeader },
  data () {
    return {
      iconMapFull,
      iconFavourite,
      placeName: ''
    }
  },
  methods: {
      checkName (text) {
          this.placeName = text
      },
    async findInterestingPlaces() {
        await this.$store.dispatch('map/findPlace', {filter: this.placeName})
            .then(response => {
                window.location.href = `https://opentripmap.com/ru/#12.75/${response.lat}/${response.lon}`
            })
    }
  }
}
</script>

<style scoped lang="sass">
.map
  &__header
    background: white
    border-radius: 10px 10px 0 0
    padding: 24px
    &-button
      padding: 8px 10px
      background: $green
      border-radius: 10px
</style>