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
                <a href="#">
                    <img src="src/assets/notifications.svg" alt="notifications">
                </a>
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

    a:last-of-type {
        margin-left: 30px;
        margin-right: 0;
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