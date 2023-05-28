<template>
  <div class="layout">
      <div class="menu">
          <div class="menu__logo">
              <img :src="retravelLogo" alt="">
          </div>
          <div class="menu__list">
              <div
                class="menu__item"
                v-for="(item, index) in menuItems"
                :key="index"
                @click="switchPage(item)"
                :class="{'menu__item-active' : item.componentName === selectedPage}"
              >
                  <img
                    class="menu__item-image"
                    :class="{'menu__item-image-active': item.componentName === selectedPage}"
                    :src="require(`@/assets/images/${item.icon}.svg`)"
                    alt=""
                  >
                  {{ item.title }}
              </div>
          </div>
          <div class="menu__exit menu__item" @click="processQuit">
              <img class="menu__item-image" :src="iconExit" alt="">
              Выйти
          </div>
      </div>
      <div class="content">
          <component
            class="content__inner"
            :is="selectedPage + 'Component'"
          />
      </div>
      <div class="preferences"></div>
      <modal-window :open="isOpen" @onCloseModal="processQuit" @onExit="quit"/>
  </div>
</template>

<script>
import MainComponent from '@/components/MainComponent.vue';
import MapComponent from '@/components/MapComponent.vue';
import PublicationsComponent from '@/components/PublicationsComponent.vue';
import ChatComponent from '@/components/ChatComponent.vue';
import FavouriteComponent from '@/components/FavouriteComponent.vue';
import retravelLogo from '@/assets/images/retravelLogo.svg'
import iconExit from '@/assets/images/iconExit.svg'
import ModalWindow from "@/components/ModalWindow.vue";
export default {
  name: "IndexPage",
    components: {
        ModalWindow,
        MainComponent,
        MapComponent,
        PublicationsComponent,
        ChatComponent,
        FavouriteComponent
  },
    data () {
      return {
          retravelLogo,
          iconExit,
          isOpen: false,
          menuItems: [
              {
                  title: 'Главная',
                  icon: 'iconHome',
                  componentName: 'Main'
              },
              {
                  title: 'Карта',
                  icon: 'iconMap',
                  componentName: 'Map'
              },
              {
                  title: 'Публикации',
                  icon: 'iconFolder',
                  componentName: 'Publications'
              },
              {
                  title: 'Чат',
                  icon: 'iconChat',
                  componentName: 'Chat'
              },
              {
                  title: 'Избранное',
                  icon: 'iconFavourite',
                  componentName: 'Favourite'
              }
          ],
          selectedPage: 'Chat'
      }
    },
    methods: {
      switchPage (item) {
          this.selectedPage = item.componentName
      },
        processQuit () {
            this.isOpen = !this.isOpen
        },
        quit () {
            console.log('вышел')
          // this.$store.dispatch('user/logout')
        }
    }
}
</script>