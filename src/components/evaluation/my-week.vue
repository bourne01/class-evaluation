<template>
    <div class="week">
        <ul>
            <li><i class="up"></i></li>
            <li class="writing-mode">星期二</li>
            <li><i class="down"></i></li>
        </ul>
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
     .week{
         width: 56px;
         height: 162px;
         background-color: #fbfbfd;
         border-top: 1px solid #f3f3f6;
     }
     li{
         line-height: 56px;
         color: #bfc5d2;
         margin-bottom: 12px;
     }
     li i{
        display: block;
        width: 30px;
        height: 30px;
        margin-left: 12px;
     }
     .week .up{
        background-image: url(../../assets/svg/up-purpose.svg);
        margin-top: 18px;
     }
     .week .down{
         background-image: url(../../assets/svg/down-purpose.svg);
         margin-bottom: 26px;
     }
     .writing-mode{
         writing-mode: vertical-lr;
         font-size: 16px;
     }
</style>