<template>
    <div v-if="open" class="modal">
        <div class="modal__inner">
            <div style="padding-bottom: 10px">Вы правда хотите выйти?</div>
            <div class="buttons">
                <div class="button" @click="toggleOpen">
                    Остаться
                </div>
                <div class="button button__exit" @click="exit">
                    Выйти
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalWindow",
    props: {
        open: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        toggleOpen () {
            this.$emit('onCloseModal')
        },
        exit () {
            this.$emit('onExit')
        }
    }
}
</script>

<style scoped lang="sass">
.modal
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
.buttons
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: space-between
.button
    padding: 5px
    cursor: pointer
    border: 1px solid #4E944F
    border-radius: 10px
    &__exit
        border: none
        background: #cc1313
        color: white
</style>