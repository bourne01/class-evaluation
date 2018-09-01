<template>
    <div class="time">
          <ul class="date">
              <li><i class="previous"></i></li>
              <li class="txt">2018/08/06-2018/08/12</li>
              <li><i class="next"></i></li>
          </ul>
          <ul class="num">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
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
    .time{
        width: 1200px;
        height: 91px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        background-color: #fbfbfd;
    }
    ul .previous{
        background-image: url(../../assets/svg/previous-purpose.svg);
        display: block;
        width: 30px;
        height: 30px;
    }
     .date .next{
        background-image: url(../../assets/svg/next-purpose.svg);
        display: block;
        width: 30px;
        height: 30px;
    }
    .date li{
        float: left;
        text-align: center;
    }
    .date{
        width: 310px;
        height: 30px;
        margin: 0 auto;
        font-size: 18px;
        line-height: 30px;
        margin-bottom: 20px;
        padding-top: 14px;
    }
   .date .txt{
        margin: 0 20px;
    }
    .num{
        width: 1144px;
        height: 12px;
        float: right;
    }
    .num li{
        float: left;
        width: 143px;
        text-align: center;
        color: #bfc5d2;
        font-size: 16px;
    }
</style>