<template>
    <div class="notification flex">
        <div class="left-notification">
            <div class="circle-notification" :style="{ backgroundColor: color }"></div>
        </div>
        <div class="right-notification">
            <div class="notification-header flex justify-between">
                <h2>{{ notification.title }}</h2>
                <h3 class="flex column"><span>{{ notification.date }}</span><span class="flex justify-end">{{
                notification.hour }}</span></h3>
            </div>
            <p>{{ notification.description }}
            </p>
        </div>
    </div>
</template>

<script setup>
const { notification } = defineProps({
    notification: Object
});
const color = notification.color
</script>

<style lang="scss" scoped>
.notification {
    padding: 30px;
    border-bottom: 1px solid #A6A6A6;


    .left-notification {
        width: 8%;

        .circle-notification {
            width: 20px;
            height: 20px;
            border-radius: 100%;
            background-color: #66DDB3;
        }
    }

    .right-notification {
        width: 92%;

        h2 {
            font: normal normal 600 16px/24px Poppins;
            color: #111111DE;
            margin-top: 0;
            margin-bottom: 0;
        }

        h3 {
            font: normal normal 600 14px/18px Poppins;
            color: #111111DE;
            margin-top: 0;
            margin-bottom: 0;
        }

        p {
            margin-right: 25px;
            margin-top: 0;
            margin-bottom: 0;
            font: normal normal normal 12px/16px Poppins;
        }
    }

    .notification:last-of-type {
        border-bottom: none;
    }

}
</style>