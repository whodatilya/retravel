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
      <div class="preferences">
          <div class="row" style="align-items: center">
              <div style="
              display: flex;
              width: 50px;
              height: 50px;
              border: 1px solid transparent;
              background: #DAE8DA;
              border-radius: 100%;
              align-items: center;
              justify-content: center"
              >
                  <img :src="iconUser" alt="">
              </div>
              <div style="padding-left: 10px">Имя Фамилия</div>
          </div>
          <div>
              <div class="text-my-bold" style="padding-bottom: 20px">Сохранённые публикации</div>
              <div class="row" v-for="item in 8" style="margin-bottom: 10px; padding: 4px; border-radius: 10px;border: 1px solid #EDEDED">
                  <div style="padding: 10px; background: #EDEDED; border-radius: 10px; margin-right: 10px">
                      <img :src="iconLandscape" alt="">
                  </div>
                  <div class="column">
                      <div class="text-my-bold">Наименование</div>
                      <div class="text-my-lightgray">Локация</div>
                  </div>
              </div>
          </div>
      </div>
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
import iconLandscape from '@/assets/images/iconLandscape.svg'
import ModalWindow from "@/components/ModalWindow.vue";
import iconUser from '@/assets/images/iconUser.svg'
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
          iconUser,
          iconLandscape,
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
          selectedPage: 'Main'
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
          this.$store.dispatch('user/logout')
        }
    }
}
</script>