<template>
    <div class="class">
          <ul>
              <li><h3>15级 计算机网络技术</h3></li>
              <li class="right">全勤</li>
              <li class="right"><i></i></li>
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
     .class{
         width: 1200px;
         height: 60px;
         border-top-left-radius: 10px;
         border-top-right-radius: 10px;
         background-color: white;
     }
    ul{
        width: 1120px;
        margin-left: 30px;
    }
    ul li{
        float: left;
        line-height: 60px;
    }
     ul i{
         display: block;
         width: 22px;
         height: 22px;
         background-image: url(../../assets/svg/circle.svg);
         margin-top: 20px;
     }
     ul .right{
         float: right;
         font-size: 12px;
         color: #939aad;
     }
     h3{
         font-size: 20px;
         color: #171a20;
     }
</style>