<template>
    <div class="box" style="height: 650px;" :style="{ borderColor: color }">
        <div class="box-header flex items-center">
            <h2>{{ box.title }}</h2>
            <div class="circle-box flex flex-center" :style="{ backgroundColor: color }">1</div>
        </div>
        <div class="cards">
            <div class="card">
                <h3><span>Jan Kowalski</span> UX/UI Designer</h3>
                <p>Typ wniosku: Urlop wypoczynkowy</p>
                <h4>20.12-26.12. 2022 (6dni)</h4>
                <div class="card-footer flex justify-between">
                    <div class="circle-card flex flex-center">PK</div>
                    <div class="references flex items-center">
                        <a href="#">
                            <img src="src/assets/attachments.svg" alt="attachments">
                            1
                        </a>
                        <a href="#">
                            <img src="src/assets/message.svg" alt="message">
                            1
                        </a>
                    </div>
                </div>

            </div>
            <div class="card">
                <h3><span>Jan Kowalski</span> UX/UI Designer</h3>
                <p>Typ wniosku: Urlop wypoczynkowy</p>
                <h4>20.12-26.12. 2022 (6dni)</h4>
                <div class="card-footer flex justify-between">
                    <div class="circle-card flex flex-center">PK</div>
                    <div class="references flex items-center">
                        <a href="#">
                            <img src="src/assets/attachments.svg" alt="attachments">
                            1
                        </a>
                        <a href="#">
                            <img src="src/assets/message.svg" alt="message">
                            1
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
const { box } = defineProps({
    box: Object
});

const color = box.color;
</script>

<style lang="scss" scoped>
.box {
    background-color: $background;
    width: 30%;
    height: 526px;
    border-top: 9px solid;
    border-radius: 10px;

    .box-header {
        border-bottom: 1px solid #8FA9C2;
        padding: 20px;

        h2 {
            font: normal normal 600 22px/36px Poppins;
            margin-right: 15px;
        }

        .circle-box {
            border-radius: 100%;
            width: 30px;
            height: 30px;
            // background-color: #FFD688;
            font: normal normal 600 18px/29px Poppins;
            color: #8A5B02;
        }
    }

    .cards {
        padding: 20px;

        .card {
            background-color: $classic;
            border-radius: 4px;
            padding: 5px 15px 5px 15px;
            margin-bottom: 20px;

            h3 {
                font: normal normal 500 14px Poppins;
                margin-bottom: 10px;

                span {
                    font-weight: 700;
                }
            }

            p {
                font: normal normal 500 14px Poppins;
                margin-bottom: 5px;
            }

            h4 {
                font: normal normal 700 14px Poppins;
                margin-top: 0;
            }

            .card-footer {
                margin-bottom: 10px;

                .circle-card {
                    height: 25px;
                    width: 25px;
                    background-color: #E5FBF3;
                    border: 1px solid #66DDB3;
                    border-radius: 100%;
                    font: normal normal normal 12px Poppins;
                }

                a {
                    text-decoration: none;
                    font: normal normal normal 12px/23px Poppins;
                    margin-left: 10px;
                    display: flex;
                    align-items: center;

                    img {
                        margin-right: 5px;
                    }
                }
            }
        }


    }

}
</style>