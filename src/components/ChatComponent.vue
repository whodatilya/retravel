<template>
  <div class="chat">
    <component-header/>
    <div class="chat__content">
      <div class="content__header flex justify-between text-center">
        <div class="text-my-bold">Чат с пользователями</div>
      </div>
      <div class="content__wrapper">
        <div v-for="item in chatList" class="content__item row items-center">
          <div class="content__image flex wrap justify-center" style="">
            <img :src="iconUserPhoto" alt="">
          </div>
          <div class="column" style="padding-left: 19px">
            <div class="text-my-bold">{{ item.name }}</div>
            <div class="text-my-lightgray">Сообщение...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentHeader from '@/components/ComponentHeader.vue';
import iconUserPhoto from '@/assets/images/iconUserPhoto.svg'

export default {
  name: "ChatComponent",
  components: {
    ComponentHeader
  },
  data () {
    return {
      iconUserPhoto,
      chatList: [
        {
          name: 'Илья Гордеев'
        },
        {
          name: 'Рафикова Яна'
        },
        {
          name: 'Молодые путешественники'
        },
        {
          name: 'Продам гараж 228'
        }
      ]
    }
  }
}
</script>

<style scoped lang="sass">
.chat
  padding: 35px
  &__content
    background: white
    padding-bottom: 24px
    border-radius: 10px
.content
  height: 100%
  &__header
    padding: 24px
  &__item
    margin-bottom: 25px
    padding: 0 30px
  &__image
    width: 64px
    height: 64px
    border-radius: 100%
    background: #EDEDED
</style>