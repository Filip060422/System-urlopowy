<template>
    <q-layout class="container">
        <q-header class="header flex justify-between items-center">
            <div class="logo">
                <img src="src/assets/holiday-logo.svg" alt="logo">
            </div>
            <div class="buttons flex items-center">
                <a href="#">Strona główna</a>
                <a href="#">Lista pracowników</a>
                <a href="#">Nieobecności</a>
                <a href="#">Moje wnioski</a>
                <ButtonComponent :label="'Złóż wniosek'" class="button" />
                <img @click="showNotifications" src=" src/assets/notifications.svg" alt="notifications">
                <div class="notifications flex justify-end" v-show="isVisible">
                    <div class="notification-contents flex">
                        <NotificationComponent v-for="(title, index) in notifications" :key="index"
                            :notification="title" />
                    </div>
                    <div class="notifications-footer flex justify-end">
                        <a href="#">Zobacz wszystkie</a>
                    </div>
                </div>
                <q-avatar class="avatar" text-color="white">KJ</q-avatar>
            </div>
        </q-header>
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup>
import ButtonComponent from 'src/components/shared/ButtonComponent.vue';
import NotificationComponent from 'src/components/main/NotificationComponent.vue';

import { ref } from 'vue'

const isVisible = ref(false);

const showNotifications = () => isVisible.value = !isVisible.value;

const notifications = ref([
    {
        title: 'Akceptacja wniosku',
        description: 'Twoja prośba wniosku o urlop wypoczynkowy w terminie: 23.12.2023r. - 23.01.2024r. została zaakaceptowana',
        date: '10.02.2012',
        hour: '12:34',
        color: '#66DDB3'
    },
    {
        title: 'Odrzucenie wniosku',
        description: 'Twoja prośba wniosku o urlop wypoczynkowy w terminie: 23.12.2023r. - 23.01. 2024r. została zaakaceptowana',
        date: '10.02.2012',
        hour: '12:34',
        color: '#FF8C8C'
    },
    {
        title: 'Akceptacja wniosku',
        description: 'Twoja prośba wniosku o urlop wypoczynkowy w terminie: 23.12.2023r. - 23.01.2024r. została zaakaceptowana',
        date: '10.02.2012',
        hour: '12:34',
        color: '#66DDB3'
    },
])
</script>

<style lang="scss" scoped>
.header {
    background-color: $classic;
    padding: 15px 30px;
}

.buttons {
    a {
        text-decoration: none;
        color: black;
        margin-right: 30px;
        font: normal normal 600 14px/24px Poppins;
    }

    a:first-of-type {
        color: $button;
        font-weight: 800;
    }

    img {
        margin-left: 30px;
        cursor: pointer;
    }

    .notifications {
        color: black;
        position: absolute;
        top: 80px;
        right: 100px;
        height: 400px;
        width: 480px;
        background-color: $classic;
        box-shadow: 0px 6px 6px #00000021;
        border-radius: 10px;
        align-content: space-between;
        overflow-y: auto;

        .notifications-footer {
            margin: 0 20px 20px 20px;

            a {
                font: normal normal 600 14px/24px Poppins;
                color: $button;
                margin-right: 0;
                margin-top: 15px;
            }
        }
    }

    a:hover {
        color: $button;
    }

    .button {
        width: 150px;
        font: normal normal 600 14px/16px Poppins;
        text-transform: none;
    }

    .avatar {
        margin-left: 25px;
        background-color: #F0EA05;
        width: 60px;
        height: 60px;
        font: normal normal 600 50px/31px Poppins;
        text-transform: uppercase;
    }
}

.container {
    background-color: $background;
}
</style>