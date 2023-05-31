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
        <button @click="exitClick">Выйти</button>
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
</style>