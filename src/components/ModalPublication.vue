<template>
    <div class="modal">
        <div class="column modal__inner">
            <div class="row">
                <div>
                    <img style="width: 300px" :src="item.file_path || iconLandScape" alt=""/>
                </div>
                <div class="column">
                    <div class="text-my-bold">{{ item.header }}</div>
                    <div class="text-my-lightgray">{{ item.text }}</div>
                </div>
            </div>
            <div @click="exitClick">Выйти</div>
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
.modal
    overflow-x: hidden
    overflow-y: hidden
    position: absolute
    top: 0
    left: 0
    min-height: 100%
    width: 100%
    background: #F1F6FA
    &__inner
        z-index: 999
        background: #FFFFFF
        padding: 20px
        border-radius: 10px
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
</style>