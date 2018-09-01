<template>
    <div class="box">
        <ul class="jobbar">
            <a href="###"><li class="before"><h3>课前作业</h3></li></a>
            <a href="###"><li><h3>课后作业</h3></li></a>
            <a href="###"><li class="share" @click="isPop=true"><i></i></li></a>
        </ul>
        <div class="chart">
            <div class="histogram">
                <ve-histogram></ve-histogram>
            </div>
            <div class="ring">
                <ve-ring></ve-ring>
            </div>
        </div>
        
       <div class="enter">
           进入课堂 
        </div>
<a href="###">
        <div class="student">
            <h3>学生 42位</h3>
            <ul>
                <li><img src="../../assets/images/4.png" alt=""></li>
                <li><img src="../../assets/images/5.png" alt=""></li>
                <li><img src="../../assets/images/6.png" alt=""></li>
                <li><img src="../../assets/images/7.png" alt=""></li>
                <li><img src="../../assets/images/8.png" alt=""></li>
                <li><img src="../../assets/images/4.png" alt=""></li>
                <li><img src="../../assets/images/5.png" alt=""></li>
                <li><img src="../../assets/images/6.png" alt=""></li>
                <li><img src="../../assets/images/7.png" alt=""></li>
                <li><img src="../../assets/images/8.png" alt=""></li>
                <li class="end"><img src="../../assets/images/9.png" alt=""></li>
            </ul>
        </div></a>
        <class-control :is-pop="isPop" @dialog-close="isPop=false"></class-control>
    </div>
</template>

<script>
import ClassControl from './control-dialog'
import VeHistogram from '../../components/home/histogram'
import VeRing from '../../components/home/ring'
export default {
    components:{
        ClassControl,
        VeHistogram,
        VeRing,
    },
    data(){
        return{
            isPop:false,
        }
        
    }
}
</script>

<style scoped>
     *{
         padding: 0px;
         margin: 0px;
     }
     a{
         text-decoration: none;
     }
     .box{
         background-color: white;
         width: 860px;
         height: 672px;
         border-top-right-radius: 10px;
         border-bottom-right-radius: 10px;
     }
     .jobbar{
         width: 802px;
         height: 40px;
         float: left;
         margin: 30px 0 0 50px;
     }
     .before{
         background-color: #e6e5fc;
         width: 134px;
         height: 40px;
         border-radius: 20px;
         color: #6360dd;
     }
     li{
        float: left;
        font-size: 18px;
        text-align: center;
         line-height: 40px;
         margin-right: 35px;
         color: #171a20;
     }
     .share{
         float: right;
         background-color: #f3f3f6;
         border-radius: 20px;
     }
     .share i{
        background: url(../../assets/svg/share.svg) no-repeat;
        display: block;
        width: 64px;
        height: 40px;
        margin-left: 25px;
     }
     .enter{
         background-color: #fa5b4a;
         width: 160px;
         height: 40px;
         border-radius: 20px;
         float: left;
         text-align: center;
         line-height: 40px;
         color: white;
         font-size: 20px;
         margin: 10px 0 0 50px;
     }
     ul{
         margin-top: 20px;
     }
     .student{
         float: left;
         width: 750px;
         height: 100px;
         margin: 70px 0 0 50px;
     }
     h3{
         font-size: 18px;
     }
     .student ul li{
         width: 56px;
         height: 56px;
         float: left;
         margin-right: 10px;
     }
     .end{
         margin-right: 0;
     }
     .student h3{
         color: #171a20;
     }
     .chart{
         display:flex;
         clear: both;
         justify-content: space-between;
         padding:0 50px;
         height:320px;
     }
     .chart .histogram{
         padding-top:20px;
         width:515px;
     }
     .chart .ring{
         margin-top:20px;
         width:176px;
     }
</style>

<style>
    .histogram canvas{
        height:320px!important;
    }
</style>
