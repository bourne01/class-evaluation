<template>
    <div class="catalog">
        <ul>
            <a href="###"><li><h4>第一章:软件的应用</h4></li></a>
            <a href="###"><li class="bstxt"><span>第1节·Adobe Photoshop CC 工作界面介绍</span></li></a>
            <a href="###"><li class="bstxt"><span>第2节·工具栏</span> </li></a>
            <a href="###"><li class="paintbrush"><span>第3节·画笔的运用</span></li></a>
            <a href="###"><li><span>第4节·工具栏</span></li></a>
            <a href="###"><li><h4>第二章：软件的运用</h4></li></a>
            <a href="###"><li><span>第1节·Adobe Photoshop CC 工作界面介绍</span></li></a>
            <a href="###"><li><span>第2节·工具栏</span></li></a>
            <a href="###"><li><span>第3节·画笔的运用</span></li></a>
            <a href="###"><li><span>第4节·工具栏</span></li></a>
            <a href="###"><li><span>第1节·Adobe Photoshop CC 工作界面介绍</span></li></a>
            <a href="###"><li><span>第2节·工具栏</span></li></a>
            <a href="###"><li><span>第3节·画笔的运用</span></li></a>
            <a href="###"><li><span>第4节·工具栏</span></li></a>
            <a href="###"><li class="application"><h4>第三章：软件的运用</h4></li></a>
            <a href="###"><li><span>第1节·Adobe Photoshop CC 工作界面介绍</span></li></a>
            <a href="###"><li><span>第2节·工具栏</span></li></a>
        </ul>
        <div class="scroll"></div>
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
     a{
         text-decoration: none;
         color: #2f2d78;
     }
   .catalog{
       background-color: #fbfbfd;
       width: 340px;
       height: 672px;
       border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
       font-size: 12px;
   }
   ul li{
       margin-bottom: 19px;
   }
   ul{
       margin: 0 0 0px 30px;
       padding-top: 45px;
       float: left;
   }
   h4{
       color: #1c2639;
   }
   ul span{
       margin-left:  20px;
   }
   ul .bstxt{
       color: #939aad;
   }
   ul .paintbrush{
       width: 280px;
       height: 32px;
       background-color: #7573e6;
       border-radius: 16px;
       color: white;
       line-height: 32px;
   }
   .scroll{
       background-color: #dde0e7;
       width: 6px;
       height: 134px;
       float: right;
       margin-top: 250px;
   }
</style>