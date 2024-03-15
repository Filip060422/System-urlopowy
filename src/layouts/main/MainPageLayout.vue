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
                <q-btn @click="showNotifications" padding="0" outline>
                    <img src=" src/assets/notifications.svg" alt="notifications">
                    <q-menu v-show="isVisible" max-height="400px" max-width="480px"
                        style="box-shadow: 0px 6px 6px #00000021; background-color: #FFFFFF; color: black;">
                        <NotificationComponent v-for="(title, index) in notifications" :key="index"
                            :notification="title" />
                        <div class="notifications-footer flex justify-end">
                            <a href="#">Zobacz wszystkie</a>
                        </div> 
                    </q-menu>
                </q-btn>
                <q-btn @click="showSettings" padding="0" outline>
                    <q-avatar class="avatar" text-color="white" style="margin-left: 25px;">KJ</q-avatar>
                    <q-menu v-show="isVisible2" max-height="400px" max-width="480px" style="padding: 17px 12px;"
                        class="settings">
                        <div class="information flex items-center">
                            <q-avatar class="avatar" text-color="white">KJ</q-avatar>
                            <div class="flex column justify-start" style="padding-left: 17px;">
                                <h3>Krystyna Jankowicz</h3>
                                <p>krystynajankowicz@mediaflex.pl</p>
                            </div>
                        </div>
                        <a href="#" class="flex items-center">
                            <div class="circle"></div>
                            <span>Mój profil</span>
                        </a>
                        <a href="#" class="flex items-center" style="border-bottom: none;">
                            <div class="circle"></div>
                            <span>Wyloguj się</span>
                        </a>
                    </q-menu>
                </q-btn>
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
const isVisible2 = ref(false);

const showNotifications = () => isVisible.value = !isVisible.value;
const showSettings = () => isVisible2.value = !isVisible2.value;

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
    {
        title: 'Akceptacja wniosku',
        description: 'Twoja prośba wniosku o urlop wypoczynkowy w terminie: 23.12.2023r. - 23.01.2024r. została zaakaceptowana',
        date: '10.02.2012',
        hour: '12:34',
        color: '#66DDB3'
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

.container {
    padding-bottom: 30px;
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

    a:hover {
        color: $button;
    }

    .button {
        width: 150px;
        font: normal normal 600 14px/16px Poppins;
        text-transform: none;
    }
}

.notifications-footer {
    margin: 0 20px 20px 20px;

    a {
        font: normal normal 600 14px/24px Poppins;
        color: $button;
        margin-right: 0;
        margin-top: 15px;
        text-decoration: none;
    }
}

.avatar {
    background-color: #F0EA05;
    width: 60px;
    height: 60px;
    font: normal normal 600 50px/31px Poppins;
    text-transform: uppercase;
}

.information {
    width: 360px;
    box-shadow: 0px 2px 6px #00000017;
    padding: 15px 8px;
    border-radius: 10px;

    h3 {
        font: normal normal 600 16px Poppins;
        margin: 0;
        text-align: left;
    }

    p {
        font: normal normal 500 12px Poppins;
        margin: 0;
    }
}

.settings {
    a {
        margin-top: 20px;
        padding-bottom: 15px;
        text-decoration: none;
        border-bottom: 1px solid #E0E3E5;

        .circle {
            width: 30px;
            height: 30px;
            border-radius: 100%;
            background-color: $button;
            margin-right: 30px;
            margin-left: 8px;
        }

        span {
            font: normal normal 600 14px/21px Poppins;
            color: #000000;
        }
    }


    .circle-logOut {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        background-color: $button;
        margin-right: 30px;
        margin-left: 8px;
    }


}

.container {
    background-color: $background;
}
</style>