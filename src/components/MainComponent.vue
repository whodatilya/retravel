<template>
    <div>
        <div class="row" style="padding-bottom: 34px">
            <div class="column justify-between" style="max-width: 50%">
                <div class="text-my-bold">Добрый день!</div>
                <div class="text-my-lightgray">Добро пожаловать на туристическую платформу Re:Travel!</div>
            </div>
            <component-header/>
        </div>
        <div class="row wrap justify-around" style="padding-bottom: 34px">
            <div v-for="card in cardItems" style="position: relative">
                <img :src="card.image" alt="">
                <div style="position: absolute; bottom: 25px; left: 10px; color: white; font-size: 15px">{{ card.name }}</div>
                <div style="position: absolute; bottom: 13px; left: 10px; color: white; font-size: 10px">{{ card.place }}</div>
            </div>
        </div>
        <div style="background: white; padding: 24px; border-radius: 10px; margin-bottom: 34px">
            <div class="column items-start" style="padding-bottom: 30px">
                <div class="text-my-bold">Популярные маршруты</div>
                <div class="text-my-lightgray">Найдено {{ popularItems.length }} направлений</div>
            </div>
            <div v-for="item in popularItems" class="row">
                <div><img :src="item.image" alt=""></div>
                <div class="column justify-center" style="padding-left: 10px">
                    <div class="text-my-bold">{{ item.name }}</div>
                    <div class="text-my-lightgray">{{ item.geo }}</div>
                </div>
            </div>
        </div>
        <div><img style="width: 100%" :src="iconTours" alt=""></div>
    </div>
</template>

<script>
import ComponentHeader from "@/components/ComponentHeader.vue";
import iconGayzer from '@/assets/images/iconGayzer.svg'
import iconElbrus from '@/assets/images/iconElbrus.svg'
import iconPlato from '@/assets/images/iconPlato.svg'
import iconCarelia from '@/assets/images/iconCarelia.svg'
import iconHibins from '@/assets/images/iconHibins.svg'
import iconTours from '@/assets/images/iconTours.svg'

export default {
    name: "MainComponent",
    components: {ComponentHeader},
    data () {
        return {
            iconGayzer,
            iconTours,
            iconElbrus,
            iconPlato,
            iconCarelia,
            iconHibins,
            cardItems: [
                {
                    name: 'Эльбрус',
                    image: iconElbrus,
                    place: 'Кабардино-Балкария'
                },
                {
                    name: 'Плато Путорана',
                    image: iconPlato,
                    place: 'Красноярский край'
                },
                {
                    name: 'Долина гейзеров',
                    image: iconGayzer,
                    place: 'Камчатка'
                }
            ],
            popularItems: [
                {
                    name: 'Путешествие по Карелии',
                    geo: 'Россия, Карелия',
                    image: iconCarelia
                },
                {
                    name: 'Хибины',
                    geo: 'Россия, Кольский полуостров',
                    image: iconHibins
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>