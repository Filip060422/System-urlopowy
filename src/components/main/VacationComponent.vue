<template>
    <div class="box">
        <div class="icons flex justify-end">
            <img src="src/assets/edit-ico.svg" alt="edit icon">
        </div>
        <div class="box-header flex">
            <div class="circle"></div>
            <div class="rest flex items-center justify-between">
                <h3>Magda Kowalska <br><span>UX/UI designer</span></h3>
                <p>Urlop wypoczynkowy</p>

            </div>
        </div>
        <div class="box-footer flex justify-around">
            <div class="left flex justify-left">
                <h4>Od <span>22.03.2022r.</span></h4>
            </div>
            <div class="right flex flex-center">
                <h4>Do <span>22.03.2022r.</span></h4>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;
    background-color: $classic;

    .icons {
        img {
            margin: 10px 10px 0 0;
        }
    }

    .box-header {
        padding: 11px 5px 20px 47px;

        .circle {
            background-color: #FFCB91;
            width: 20px;
            height: 20px;
            border-radius: 100%;
        }

        .rest {
            width: calc(100% - 25px);
            padding: 0 30px 0 10px;
            margin-top: 0;

            h3 {
                font: normal normal 600 14px Poppins;
                margin-top: 0;
                margin-bottom: 0;

                span {
                    font: normal normal 500 12px Poppins;
                }
            }

            p {
                font: normal normal 600 12px Poppins;
                background-color: #D8FFF9;
                margin-bottom: 0;
                padding: 0 5px;
            }
        }
    }


    .box-footer {
        padding: 0 35px 0 77px;
        border-top: 1px solid #E0E3E5;

        h4 {
            font: normal normal 500 10px Poppins;
            color: #6C6666;

            span {
                font: normal normal 600 12px Poppins;
                color: #000000;
            }
        }

        .left {
            border-right: 1px solid #E0E3E5;
            width: 50%;
            padding-bottom: 11px;
        }

        .right {
            width: 50%;
            padding-bottom: 11px;
        }
    }

}
</style>