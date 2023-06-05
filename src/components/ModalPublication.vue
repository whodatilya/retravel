<template>
    <div class="column inner">
        <div class="row">
            <div>
                <img class="image-size" :src="item.file_path || iconLandScape" alt=""/>
            </div>
            <div class="column justify-center" style="padding-left: 30px">
                <div class="text-my-bold">{{ item.header }}</div>
                <div class="text-my-lightgray">{{ item.text }}</div>
            </div>
        </div>
        <div class="button__wrapper">
            <button class="text-my-bold" @click="exitClick">Выйти</button>
        </div>
    </div>
</template>

<script>
import iconLandScape from '@/assets/images/iconLandscape.svg'
export default {
    name: "ModalPublication",
    data () {
      return {
          iconLandScape
      }
    },
    props: {
      item: {
          type: Object
      }
    },
    methods: {
        exitClick () {
            this.$emit('onExitClick')
        }
    }
}
</script>

<style scoped lang="sass">
.inner
    z-index: 999
    min-width: 300px !important
    max-width: 500px !important
    opacity: 1
    box-shadow: 0 0 20px 10px #d5d5d5
    background: #FFFFFF
    padding: 20px
    border-radius: 10px
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
.image-size
    width: 20vw
    max-width: 450px
    height: 20vh
    max-height: 600px
.button
    &__wrapper
        text-align: right
        button
            background: $green
            color: #FFFFFF
            border-radius: 8px
            border: none
            padding: 8px 24px

            width: fit-content
            &:hover
                background: #386938
                cursor: pointer
</style>