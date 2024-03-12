<template>
    <q-btn class="submit" :label="label" type="submit" />
</template>
<script setup>
import { ref } from 'vue'
const label = ref('');</script>
<style lang="scss" scoped>
.submit {
    width: 100%;
    background: $button;
    height: 60px;
    color: #FFFFFF;
    // margin-top: 20px;
    font: normal normal 600 14px/16px Poppins;
    letter-spacing: 1.25px
}
</style>