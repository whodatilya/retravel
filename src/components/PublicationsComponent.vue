<template>
    <div class="publications">
      <component-header/>
      <div class="publications__create">
        <div class="text-my-bold publications__create-text-position">Создать новую публикацию</div>
        <div class="flex column">
          <input v-model="title" class="create-item item-input" placeholder="Заголовок">
          <textarea v-model="text" class="create-item item-input textarea-size" placeholder="Текст..."/>
          <div class="create-item row justify-between">
            <input v-model="place" class="column create-item item-input item-input_half" placeholder="Местоположение">
            <input ref="myFiles" id="uploadFile" type="file" @change=processFile class="column create-item item-input_half">
          </div>
          <div class="flex justify-end">
            <button @click="createNewPublication" class="create-item item-button">Опубликовать</button>
          </div>
        </div>
      </div>
      <div class="publications__local">
        <div class="text-my-bold publications__local-text-position">Мои публикации</div>
        <div v-for="(item, index) in publicationsList" :key="index" class="content__item row items-center" @click="openModal">
            <div v-if="isOpen">
                <modal-publication :item="item" @onExitClick="openModal"/>
            </div>
          <div class="content__image flex wrap justify-center" style="">
            <img style="max-width: 50px; max-height: 50px" :src="item.file_path || iconLandscape" alt="">
          </div>
          <div class="column" style="padding-left: 10px">
            <div class="text-my-bold">{{ item.header }}</div>
            <div class="text-my-lightgray">{{ item.location }}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import ComponentHeader from "@/components/ComponentHeader.vue";
import iconLandscape from '@/assets/images/iconLandscape.svg'
import {getAllPosts} from "@/store/posts/actions";
import ModalPublication from "@/components/ModalPublication.vue";

export default {
  name: "PublicationsComponent",
  components: {
      ModalPublication,
    ComponentHeader
  },
  data () {
    return {
      iconLandscape,
      title: '',
      text: '',
      isOpen: false,
      place: '',
      images: '',
      files: [],
      publicationsList: null
    }
  },
    created() {
        this.processPublications()
    },
    methods: {
      openModal () {
        this.isOpen = !this.isOpen
      },
      async processPublications() {
          this.publicationsList = await this.$store.dispatch('posts/getAllPosts')
      },
        processFile () {
            this.files = this.$refs.myFiles.files[0]
        },
    createNewPublication () {
        const formData = new FormData()
        const loadedFile = document.querySelector('#uploadFile')

        formData.append('header', this.title)
        formData.append('text', this.text)
        formData.append('location', this.place)
        formData.append('image', loadedFile.files[0])

        this.$store.dispatch('posts/createNewPost', {
            postData: formData
        })
            .then(response => {
                this.processPublications()
            })

      this.title = ''
      this.text = ''
      this.place = ''
      this.images = ''
    }
  }
}
</script>

<style scoped lang="sass">
.publications
  padding: 35px
  &__create
    margin-bottom: 30px
    background: #FFFFFF
    border-radius: 10px
    padding: 24px
    &-text-position
      padding-bottom: 19px
  &__local
    background: #FFFFFF
    border-radius: 10px
    padding: 24px
    &-text-position
      padding-bottom: 19px
.create-item
  margin-bottom: 8px
.item
  &-input
    border-radius: 8px
    outline: none
    border: none
    background: #EDEDED
    &_half
      width: 40%
  &-button
    width: fit-content
    padding: 8px 10px
    cursor: pointer
    border-radius: 10px
    background: $green
    border: none
    color: #FFFFFF
    &:hover
      background: #386938
.textarea-size
  max-width: 100%
  max-height: 300px
  min-width: 100%

.content
  &__item
    margin-bottom: 25px
    &:hover
      cursor: pointer
  &__image
    width: 50px
    height: 50px
    border-radius: 10px
    background: #EDEDED
</style>