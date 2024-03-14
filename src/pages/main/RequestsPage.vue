<template>
    <div class="content-request">
        <div class="request-header flex justify-between items-center">
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
    <div class="content-vacation">
        <h1>Nadchodzące urlopy pracowników</h1>
        <div class="vacation-header flex justify-between items-end">
            <table>
                <tr>
                    <th>TYP WNIOSKU</th>
                    <th>PRACOWNIK</th>
                    <th>STANOWISKO</th>
                </tr>
                <tr>
                    <td>
                        <q-select dense outlined bg-color="white" class="vacation-select" v-model="model"
                            :options="options" multiple emit-value map-options>
                            <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
                                <q-item v-bind="itemProps">
                                    <q-checkbox dense color="purple" :label="opt.label" :model-value="selected"
                                        @update:model-value="toggleOption(opt)" />
                                </q-item>
                            </template>
                            <template v-slot:selected>
                                {{ firstComputedSelectedLabel }}
                            </template>
                        </q-select>
                    </td>
                    <td>
                        <q-select dense outlined bg-color="white" class="vacation-select" v-model="model2"
                            :options="options2" multiple emit-value map-options>
                            <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
                                <div style="min-width: 300px;">
                                    <q-input v-model="text" v-show="opt.input" :input-style="{ paddingLeft: '10px' }">
                                        <template v-slot:append>
                                            <q-icon name="search" />
                                        </template>
                                    </q-input>
                                    <q-item v-bind="itemProps">
                                        <q-item-section>
                                            <q-checkbox color="purple" dense :label="opt.label" :model-value="selected"
                                                @update:model-value="toggleOption(opt)" />
                                        </q-item-section>
                                    </q-item>
                                </div>
                            </template>
                            <template v-slot:selected>
                                {{ secondComputedSelectedLabel }}
                            </template>
                        </q-select>
                    </td>
                    <td>
                        <q-select dense outlined bg-color="white" class="vacation-select" v-model="model3"
                            :options="options" multiple emit-value map-options>
                            <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
                                <q-item v-bind="itemProps">
                                    <q-item-section>
                                        <q-checkbox dense color="purple" :label="opt.label" :model-value="selected"
                                            @update:model-value="toggleOption(opt)" />
                                    </q-item-section>
                                </q-item>
                            </template>
                            <template v-slot:selected>
                                {{ thirdComputedSelectedLabel }}
                            </template>
                        </q-select>
                    </td>
                </tr>
            </table>
            <div class="buttons flex items-center">
                <q-btn class="buttonFirst" flat label="Wyczyść filtry" />
                <q-btn outline style="color: #703ADA;" label="Filtruj" class="buttonSecond" />
            </div>
        </div>
        <div class="vacation-content">
            <VacationComponent />
            <VacationComponent />
            <VacationComponent />
            <VacationComponent />
            <VacationComponent />
            <VacationComponent />
        </div>
    </div>
</template>

<script setup>
import RequestBoxComponent from 'src/components/main/RequestBoxComponent.vue';
import VacationComponent from 'src/components/main/VacationComponent.vue';
import { ref, computed, watchEffect } from 'vue'

const text = ref([]);

const model = ref([]);
const firstComputedSelectedLabel = computed(() => {
    return `Wybrano: ${model.value.length}`;
});
const model2 = ref([]);
const secondComputedSelectedLabel = computed(() => {
    return `Wybrano: ${model2.value.length}`;
});
const model3 = ref([]);
const thirdComputedSelectedLabel = computed(() => {
    return `Wybrano: ${model3.value.length}`;
});

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
const options = [
    {
        label: "Urlop wypoczynkowy",
    },
    {
        label: "Urlop na żądanie",
    },
    {
        label: "L4",
    },
    {
        label: "Urlop wychowawczy",

    },
    {
        label: "Urlop macierzyński",

    },
    {
        label: "Urlop okolicznościowy",
    },
];
const options2 = [
    {
        label: "Wybierz wszytskich",
        input: true,
    },
    {
        label: "Karolina Nowak",
        input: false,
    },
    {
        label: "Jan Kowalski",
        input: false,
    },
    {
        label: "Karolina",
        input: false,
    },
    {
        label: "Jan",
        input: false,
    },
];

</script>

<style lang="scss" scoped>
.content-request {
    height: 85vh;
    background-color: $classic;
    margin: 30px 40px;
    border-radius: 10px;
    padding: 30px 40px;

    .request-header {
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

.content-vacation {
    background-color: $classic;
    margin: 30px 40px 0 40px;
    border-radius: 10px;
    padding: 30px 40px;

    h1 {
        font: normal normal 500 28px/42px Poppins;
        color: #111111DE;
    }

    .vacation-header {
        table {
            border: none;

            th {
                font: normal normal 500 14px/21px Poppins;
                text-transform: uppercase;
                text-align: left;
                padding: 5px;
            }

            td {
                padding: 5px;

                .vacation-select {
                    font: normal normal 500 14px/21px Poppins;
                    width: 200px;
                    height: 36px;
                    background-color: none;

                }
            }
        }

        .buttons {
            .buttonFirst {
                font: normal normal 600 14px/16px Poppins;
                color: #703ADA;
                margin-right: 20px;
                text-decoration: none;
            }

            .buttonSecond {
                font: normal normal 600 14px/16px Poppins;
                padding: 10px 24px;
            }
        }
    }

    .vacation-content {
        width: 100%;
        background-color: $background;
        padding: 25px 20px;
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 22px;
        margin-top: 31px;
    }
}
</style>