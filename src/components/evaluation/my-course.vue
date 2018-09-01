<template>
    <div class="lesson">
            <div class="content">
                <ul>
                    <li><h4>8:30</h4></li>
                    <li>15美术设计15美术设计</li>
                    <li>B 5213(教室)</li>
                </ul>
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
     .lesson{
         width: 284px;
         height: 162px;
         border-top: 1px solid #f3f3f6;
         border-left: 1px solid #f3f3f6;
         background-color: #fbfbfd;
         float: left;
     }
     .content{

         width: 246px;
         height: 122px;
         background-color: #f3f3f6;
         border-radius: 8px;
         margin: 0 auto;
         margin-top: 20px;
     }
     ul{
         width: 89px;
         margin-left: 10px;
         font-size: 12px;
         color: #939aad;
         padding-top: 20px;
     }
     ul li{
         margin-bottom: 16px;
     }
    .content:hover{
        background-color: #d3f5e0;
       
    }
    ul:hover{
              color: #13b653;   
    }

     
</style>