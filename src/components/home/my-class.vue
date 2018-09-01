<template>
    <div class="box">
        <div class="top">
            计算机技术  高二（{{idx}}）班
        </div>
        <div class="message">
            <ul class="txt">
                <li>班级<span>15美术设计115美术设计1...</span></li>
                <li>教室<span>B 5213</span></li>
                <li>周数<span>4月 - 第1周</span></li>
                <li>节数<span>周一 5~6节</span></li>
                <li class="teacher">教师</li>
            </ul>
                <ul class="pic">
                    <li><img src="../../assets/images/1.png" alt="" ></li>
                    <li><img src="../../assets/images/2.png" alt="" ></li>
                    <li><img src="../../assets/images/3.png" alt="" ></li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    props:[
        'idx'
    ],
    components:{

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
         color: #939aad;
     }
     .box{
         width: 284px;
         height: 270px;
         border-radius: 10px;
         background-color: white;
         float: left;
     }
     .top{
         width: 284px;
         height: 61px;
         background-color: #fbfbfd;
         border-radius: 10px 10px 0 0;
         font-size: 18px;
         line-height: 61px;
         border-bottom: 1px solid #f3f3f6;
         text-align: center;
     }
     .active .top{
        width: 284px;
        height: 61px;
        background-color: #7573e6;
        border-radius: 10px 10px 0 0;
        font-size: 18px;
        line-height: 61px;
        border-bottom: 1px solid #f3f3f6;
        color:#fff;
     }
     .top a{
         margin-left: 30px;
     }
     .message{
         width: 284px;
         height: 189px;
         margin-top:14px;
     }
     .message .txt{
        width: 240px;
        height: 142px;
        margin-left: 30px;
     }
     .message .txt span{
         color: #1c2639; 
         margin-left: 12px;
     }
     .message .txt li{
         width: 240px;
         float: left;
         font-size: 12px;
         margin-bottom: 18px;
     }
     .message .txt .teacher{
         margin-bottom: 0px;
     }
     .pic{
         width: 250px;
         height: 32px;
         margin: 2px 0 0 30px;
     }
     .pic li{
         float: left;
         margin: 0 10px 0 0;
     }
     .active .__class{
         color:red;
     }
</style>