<template>
    <div class="members"> 
        <div class="selected"></div>
                <div class="numone">
                    <div class="circle-box"></div>
                    <div class="head-box"></div>
                    <div class="introduce">
                        <h4>张小丽</h4><span></span>
                        <p>ID 124633</p>
                    </div>
                </div>
    </div>
</template>
<script>

export default {
    components:{

    }
}
</script>

<style scoped>
     *{
         padding: 0px;
         margin: 0px;
     }
    .members{
        width: 300px;
        height: 80px;
        margin-bottom: 6px;
        background-color: #f3f3f6;
    }
    .numone{
        width: 180px;
        height: 56px;
        margin-left: 28px;
        padding-top: 12px;
    }
    .selected{
        width: 4px;
        height: 80px;
        background-color: #7573e6;
        float: left;
    }
    .circle-box,.head-box{
        float: left;
    }
    .numone .circle-box{
        display: block;
        width: 22px;
        height: 22px;
        background-image: url(../../assets/svg/circle-selected-purpse.svg);
        margin-right: 20px;
        margin-top: 16px
    }
    .numone .head-box{
        display: block;
        width: 56px;
        height: 56px;
        background-image: url(../../assets/home/6.png);
    }
    .numone span{
        display: block;
        width: 10px;
        height: 14px;
        background-image: url(../../assets/home/female.png);
        margin-left: 56px;
        margin-top: 2px;
    }
    .numone .introduce{
        float: right;
        width: 70px;
        height: 38px;
        margin-top: 10px;
    }
    h4{
        float: left;
        color: #171a20;
        font-size: 16px;
    }
    p{
        line-height: 28px;
        color: #939aad;
        font-size: 14px;
    }
</style>