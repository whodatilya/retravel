<template>
  <div class="header">
    <input v-model="searchText" @change="$emit('searchText', searchText)" class="round-input" type="text"/>
    <div class="notifications">
      <img :src="iconNotifications" alt="">
    </div>
  </div>
</template>

<script>
import iconNotifications from '@/assets/images/iconNotifications.svg'
export default {
  name: 'ComponentHeader',
  data () {
    return {
      iconNotifications,
        searchText: ''
    }
  }
}

</script>

<style scoped lang="sass">
.header
  display: flex
  text-align: center
  justify-content: space-between
  padding-bottom: 35px
.round-input
  border-radius: 100px
  padding-left: 20px
  width: 60%
  outline: none
  border: none
.notifications
  display: flex
  width: 30px
  height: 30px
  border: 1px solid transparent
  background: #FFFFFF
  border-radius: 100%
  align-items: center
  justify-content: center
</style>