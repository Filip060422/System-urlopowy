<template>
    <q-input class="input-margin" v-model="password" filled :type="isPwd ? 'password' : 'text'" :label="label"
        color="black" reactive-rules :rules="rules">
        <template v-slot:append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd">
            </q-icon>
        </template>
    </q-input>
</template>

<script setup>
import { ref } from 'vue'
const isPwd = ref(true);
const password = ref('');
const label = ref('');
const rules = ref([val => val && val.length > 0 || 'Proszę podać hasło']);
</script>

<style lang="scss" scoped></style>