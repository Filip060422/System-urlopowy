<template>
    <div class="content">
        <div class="content-header flex justify-between items-center">
            <h1>Wnioski</h1>
            <a href="#" class="flex items-center">
                Historia wniosków
                <img src="src/assets/next-icon.svg" alt="next-icon">
            </a>
        </div>
        <div class="content-boxes flex justify-between">
            <RequestBoxComponent v-for="(title, index) in boxes" :key="index" :box="title" />
        </div>
    </div>
</template>

<script setup>
import RequestBoxComponent from 'src/components/main/RequestBoxComponent.vue';

const boxes = [
    {
        title: 'Oczekujące',
        color: '#FFD688'
    },
    {
        title: 'Zaakceptowane',
        color: '#66DDB3'
    },
    {
        title: 'Odrzucone',
        color: '#FF8C8C'
    },
];
</script>

<style lang="scss" scoped>
.content {
    height: 85vh;
    background-color: $classic;
    margin: 30px 40px;
    border-radius: 10px;
    padding: 30px 40px;

    .content-header {
        margin-bottom: 30px;

        h1 {
            font: normal normal 500 28px/36px Poppins;
        }

        a {
            text-decoration: none;
            color: $button;
            font: normal normal 600 16px/25px Poppins;

            img {
                margin-left: 20px;
            }
        }
    }

}
</style>