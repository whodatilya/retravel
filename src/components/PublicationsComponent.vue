<template>
    <div class="publications">
      <component-header/>
      <div class="publications__create">
        <div class="publications__create-text-position text-my-bold">Создать новую публикацию</div>
        <div class="flex column">
            <div>
                Заголовок
            </div>
          <input v-model="title" required class="create-item item-input" style="padding: 10px">
            <div>
                Описание
            </div>
          <textarea v-model="text" required class="create-item item-input textarea-size"/>
          <div class="create-item row justify-between">
              <div class="column" style="width: 42%">
                  <div>
                      Местоположение
                  </div>
                  <input v-model="place" required class="column create-item item-input item-input_half" style="padding: 10px">
              </div>
              <div class="column justify-center" style="width: 42%">
                  <div>Загрузите файлы</div>
                  <input ref="myFiles" id="uploadFile" type="file" @change=processFile class="column create-item item-input_half">
              </div>
          </div>
          <div class="flex justify-end">
            <button @click="createNewPublication" class="create-item text-my-bold item-button">Опубликовать</button>
          </div>
        </div>
      </div>
      <div class="publications__local">
        <div class="publications__local-text-position text-my-bold">Мои публикации</div>
        <div v-for="(item, index) in publicationsList" :key="index" class="publication__item">
            <publicationItem
              :file-path="item.file_path"
              :header="item.header"
              :title="item.text"
              :location="item.location"
              :publication="item"
            />
        </div>
      </div>
    </div>
</template>

<script>
import ComponentHeader from "@/components/ComponentHeader.vue";
import iconLandscape from '@/assets/images/iconLandscape.svg'
import {getAllPosts} from "@/store/posts/actions";
import ModalPublication from '@/components/ModalPublication.vue';
import publicationItem from '@/components/PublicationItem.vue';

export default {
  name: "PublicationsComponent",
  components: {
      ModalPublication,
    ComponentHeader,
      publicationItem
  },
  data () {
    return {
      iconLandscape,
      title: '',
      text: '',
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
      async processPublications() {
          this.publicationsList = await this.$store.dispatch('posts/getAllPosts')
      },
        processFile () {
            this.files = this.$refs.myFiles.files[0]
        },
    createNewPublication () {
        const formData = new FormData()
        const loadedFile = document.querySelector('#uploadFile')
        if (this.title && this.text && this.place) {
            // FormData, потому что загружаем фотографию
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
        } else {
            alert('Заполните все поля!')
        }
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
      width: 100%
  &-button
    width: fit-content
    padding: 10px 14px
    cursor: pointer
    border-radius: 10px
    background: $green
    border: none
    color: #FFFFFF
    &:hover
      background: #386938
.textarea-size
  max-width: 100%
  min-height: 50px
  max-height: 300px
  min-width: 100%

.publication
  &__item
    margin-bottom: 25px
    &:hover
      cursor: pointer
</style>