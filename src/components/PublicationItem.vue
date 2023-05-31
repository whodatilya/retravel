<template>
    <div class="row items-center" @click="openModal">
        <div class="content__image flex wrap justify-center">
            <img class="svg-size" :src="filePath || iconLandscape" alt="">
        </div>
        <div class="column" style="padding-left: 10px">
            <div class="text-my-bold">{{ title }}</div>
            <div class="text-my-lightgray">{{ location }}</div>
        </div>
    </div>
    <div class="modal" v-if="isOpen">
        <modal-publication :item="publication" @onExitClick="closeModal"/>
    </div>
</template>

<script>
import iconLandscape from '@/assets/images/iconLandscape.svg'
import ModalPublication from "@/components/ModalPublication.vue";

export default {
    name: "PublicationItem",
    components: {ModalPublication},
    data () {
        return {
            isOpen: false,
            iconLandscape
        }
    },
    props: {
        publication: {
            type: Object
        },
        filePath: {
            type: String
        },
        title: {
            type: String
        },
        location: {
            type: String
        },
    },
    methods: {
        openModal () {
            this.isOpen = true
        },
        closeModal () {
            this.isOpen = false
        },
    }
}
</script>

<style scoped lang="sass">
.content
    &__image
        width: 50px
        height: 50px
        border-radius: 10px
        background: #EDEDED
.svg-size
    max-width: 50px
    max-height: 50px
.modal
    overflow-y: hidden
    overflow-x: hidden
    position: fixed
    top: 0
    left: 0
    min-height: 100%
    width: 100%
    background: #F1F6FA
</style>