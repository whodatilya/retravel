<template>
    <div class="favourites">
      <component-header/>
      <div class="favourites__content">
        <div class="content__header">
          <div>Избранные публикации</div>
          <div class="content__button">
            <img :src="iconFilter" alt="">
            <div>Фильтр</div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import iconNotifications from '@/assets/images/iconNotifications.svg'
import iconFilter from '@/assets/images/iconFilter.svg'
import ComponentHeader from "@/components/ComponentHeader.vue";
export default {
  name: "FavouriteComponent",
  components: {ComponentHeader},
  data () {
    return {
      iconNotifications,
      iconFilter
    }
  }
}
</script>

<style scoped lang="sass">
.favourites
  padding: 35px
  &__content
    background: white
    border-radius: 10px
.content
  height: 100%
  &__header
    display: flex
    text-align: center
    justify-content: space-between
  &__button
    display: flex
    padding: 8px
</style>