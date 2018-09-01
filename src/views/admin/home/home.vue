<template>
    <el-container class="home">                    
        <el-aside>
            <ul class="nav-bar">
                <li class="nav-bar-item" >
                    <img 
                        :src="require('../../../assets/svg/home/switch.svg')"
                        class="switch"
                        @click="switchMode()"
                        alt="">
                </li>
                <li class="nav-bar-item" 
                    :class="{active:actNav===0}"
                    :style="{background:clickNav===0?'#6360dd':''}" 
                    @click="onClick(0)"
                    @mouseover="actNav=0"
                    @mouseout="actNav=-1">
                    <img :src="navIcons[0]"><span>首页</span>
                    <div class="indicator-bar"></div>
                </li>
                <li class="sub-nav-bar">
                    <div class="nav-bar-title" 
                        @click="isOpen(1)">                                   
                        <img :src="navIcons[1]"><span>课程管理</span>                            
                    </div>
                    <ul class="subitems" :style="{display:subMenus[0]?'block':''}">
                        <li class="nav-bar-item"
                            @mouseover="actCou=1"
                            @mouseout="actCou=-1" 
                            @click="onClick(11)"
                            :style="{background:clickNav===11?'#6360dd':''}" 
                            >
                            <i class="dot"></i>语文
                        </li>
                        <li class="nav-bar-item"
                            @mouseover="actCou=2"
                            @mouseout="actCou=-1" 
                            @click="onClick(12)"
                            :style="{background:clickNav===12?'#6360dd':''}" 
                            >
                            <i class="dot"></i>数学
                        </li>
                        <li class="nav-bar-item"
                            @mouseover="actCou=3"
                            @mouseout="actCou=-1" 
                            @click="onClick(13)"
                            :style="{background:clickNav===13?'#6360dd':''}" 
                            >
                            <i class="dot"></i>英语
                        </li>
                        <li class="nav-bar-item"
                            @mouseover="actCou=4"
                            @mouseout="actCou=-1" 
                            @click="clickNav=14"
                            :style="{background:clickNav===14?'#6360dd':''}" 
                            >
                            <i class="dot"></i>其它
                        </li>
                    </ul>
                    <div class="indicator-bar"></div>
                </li>                   
                <li class="nav-bar-item" :class="{active:actNav===3}"
                    @click="onClick(3)"
                    @mouseover="actNav=3"
                    :style="{background:clickNav===3?'#6360dd':''}" 
                    @mouseout="actNav=-1">
                    <img :src="navIcons[2]"><span>教学诊断</span>
                    <div class="indicator-bar"></div>
                </li>
                <li class="nav-bar-item" :class="{active:actNav===4}"
                    @click="onClick(4)"
                    @mouseover="actNav=4"
                    :style="{background:clickNav===4?'#6360dd':''}" 
                    @mouseout="actNav=-1">
                    <img :src="navIcons[3]"><span>过程评价</span>
                    <div class="indicator-bar"></div>
                </li>
                <li class="nav-bar-item" :class="{active:actNav===5}"
                    @click="onClick(5)"
                    @mouseover="actNav=5"
                    :style="{background:clickNav===5?'#6360dd':''}" 
                    @mouseout="actNav=-1">
                    <img :src="navIcons[4]"><span>个人中心</span>
                    <div class="indicator-bar"></div>
                </li>
                <li class="nav-bar-item setting">
                    <img :src="require('../../../assets/svg/home/setting.svg')" alt="">
                </li>                            
            </ul>                                           
        </el-aside>
        <el-container>
            <el-header>
                <my-header></my-header>
            </el-header>
            <el-main>
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>            
            </el-main> 
        </el-container>              
    </el-container>
</template>

<script>
import { mapActions } from 'vuex'
import MyHeader from '../../../components/common/header'
export default {
    components:{    
        MyHeader,
    },
    data(){
        return{
            subMenus:[false,false],
            navIcons:[//默认导航图标
                require('../../../assets/home/home.png'),
                require('../../../assets/home/course.png'),
                require('../../../assets/home/diagnosis.png'),
                require('../../../assets/home/evaluation.png'),
                require('../../../assets/home/avatar.png'),
                ],                
            actNav:-1,//初始时，被激活的导航图标-active
            clickNav:-1,
            isClick:false,//判断鼠标是否有点击导航项
            actCou:-1,//初始时，课程被激活项
            actBank:-1,//初始时，题库被激活项
        }   
    },
    methods:{
       /*  ...mapActions('election',['getCourseList']),
        ...mapActions('user',['getUserInfo']), */
        OnMouseover(val){
            console.log(val);
            switch(val){
                case 0:
                    this.actNav = val;
                    break;
                case 1:
                    this.actSubNav1 = val;
                    break;
                case 2:
                    this.actSubNav2 = val;
                    break;
                case 3:
                    this.actNav = val;
                    break;
                case 4:
                    this.actNav = val;
                    break;
                case 5:
                    this.actNav = val;
                    break;
            }
            console.log(val);
        },
        onMouseout(val){
            //console.log(val)
            this.actNav = -1;
        },
        onClick(val){
            this.clickNav = val;
            switch(val){
                case 0:                    
                    this.$router.push('/admin/main');
                    break;
                case 11:
                    this.$router.push('/admin/course1');
                    break;
                case 12:
                    this.$router.push('/admin/course2');
                    break;
                case 13:
                    this.$router.push('/admin/course3');
                    break;
                case 3:
                    this.$router.push('/admin/diagnose');
                    break;
                case 4:
                    this.$router.push('/admin/evaluation');
                    break;
                default:

            }
        },
        /**@function 监听是否打开子菜单事件 */
        isOpen(val){
            console.log(val);
            switch(val){
                case 0:
                    break;
                case 1:
                    this.$set(this.subMenus,0,!this.subMenus[0]);
                    break;
                case 2:
                    this.$set(this.subMenus,1,!this.subMenus[1]);
                    break;
            }
        }

    },
    created(){

    },
    mounted(){
        
    }
}
</script>

<style scoped>
    .home,.el-container{
        height:100%;
    }
    .el-header{
        height:78px!important;
        padding-right:40px;
    }
    .nav-bar-item{
        height:90px;
        line-height:90px;
        position: relative;
        cursor: pointer;
    }
    .nav-bar>li:first-child:hover{
        background-color:#7573e6!important;
        cursor: default;
    }
    .sub-nav-bar{
        position: relative;
        padding-left:0!important;
    }  
    .subitems{
        margin-top:-20px;
    }
    .subitems>li{
       /*  padding-left:3em; */
       margin-bottom:10px!important;
       cursor: pointer;
    }
    .subitems .nav-bar-item{
        height:36px;
        line-height:36px;
        width:128px;
        border-radius:18px;
        margin: 0 auto;
        padding-left: 1.5em;
        box-sizing: border-box;
    }   
    .indicator-bar{
        width:6px;
        height:90px;
        position:absolute;
        left:0;
        top:0;
        background-color:#e6e5fc;
        display:none;
    }
    .active .indicator-bar{
        display:block;
    }
     .is-opened .indicator-bar{
        display:block;
    }
    .nav-bar-item img,.sub-nav-bar img{
        width:28px;
        vertical-align: middle;
        margin-right:10px;
    }
    .nav-bar-item span,.sub-nav-bar span{        
        position: relative;
        top:3px;
    }
    .nav-bar-title{
        line-height:90px;
        height:90px;
        padding-left:25px;
    }
    .nav-bar-item:hover{
        background-color:#6360dd;
    }
    .active span{
        color:#fff;
    }
    .dot{
        border-radius:6px;
        width:6px;
        height:6px;
        background-color:#fff;
        display:inline-block;
        position: relative;
        top:-3px;
        margin-right:10px;
    }    
    .el-aside {
        background-color: #7573e6;
        position: relative;
        width:178px!important;
        
        color:#e6e5fc;
        font-size:18px;
    }
    .el-aside>ul>li{
        padding-left:25px;
    }
    .setting img{
        position:fixed;
        bottom:40px;
        left:25px;
        cursor: pointer;
    }
    .setting:hover{
        background-color:transparent;
        cursor:default;
    }
    .el-main{
        background-color:#f1f1f1;
        padding:0;
    }
    
    @media screen and (max-width:1440px) {
        .el-aside{
            width:146px!important;
            font-size:16px;
        }
        .nav-bar-item{
            height:50px;
            line-height:50px;
        }
        .indicator-bar{
            width:4px;
            height:50px;            
        }
        .nav-bar-title{
            line-height:50px;
            height:50px;
            padding-left:25px;
            margin-bottom:20px;
        }
        .subitems .nav-bar-item{
            height:26px;
            line-height:26px;
            width:108px;
            border-radius:13px;
            padding-left:1.5em;
        }  
        .nav-bar-item img,.sub-nav-bar img{
            width:24px;
            vertical-align: middle;
            margin-right:8px;
        } 
    } 
</style>



