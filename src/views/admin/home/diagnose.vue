<template>
    <article>
        <header>
            <div 
                :class="{active:curIdx===idx}" 
                v-for="(course,idx) in courseList" :key="idx"
                @click="onClick(idx)">
                <span>{{course}}</span>
                <div class="active-bar"></div>
            </div>
        </header>
        <section>
            <div class="toolbar">
                <div class="filter">
                    <el-select v-model="filter.term">
                        <el-option 
                            v-for="idx in 5" 
                            :key="idx"
                            :label="idx">{{idx}}
                        </el-option>
                    </el-select>
                    <el-select v-model="filter.month">
                        <el-option 
                            v-for="idx in 5" 
                            :key="idx"
                            :label="idx">{{idx}}
                        </el-option>
                    </el-select>
                    <el-select v-model="filter.week">
                        <el-option 
                            v-for="idx in 5" 
                            :key="idx"
                            :label="idx">{{idx}}
                        </el-option>
                    </el-select>
                    <el-select v-model="filter.teacher" class="teacher">
                        <el-option 
                            v-for="idx in 5" 
                            :key="idx"
                            :label="idx">{{idx}}
                        </el-option>
                    </el-select>
                </div>
                <div class="btn-wrap">
                    <el-button @click="isPop=true">
                        <img :src="require('../../../assets/svg/diagnose/diagram.svg')" alt="">
                        <span>图表</span>
                    </el-button>
                    <el-button>
                        <img :src="require('../../../assets/svg/diagnose/export.svg')" alt="">
                        <span>导出</span>
                    </el-button>
                </div>
            </div>
            <test-list></test-list>
            <test-diagram :is-pop="isPop" @dialog-close="isPop=false"></test-diagram> 
        </section>
    </article>
</template>

<script>
import TestList from '../../../components/diagnose/test-list'
import TestDiagram from '../../../components/diagnose/test-diagram'
export default {
    components:{
        TestList,
        TestDiagram,
    },
    data(){
        return{
            courseList:['语文','数学','英语'],
            curIdx:-1,//当前课程序号，与courseList数组下标一致
            isPop:false,//控制图表与列表切换
            filter:{},
        }
    },
    methods:{
        /**
         * @function 处理点击课程事件 
         * @param {课程序号，与courseList数组下标一致}
         */
        onClick(idx){
            this.curIdx = idx;
        }
    },
}
</script>


<style>
    .toolbar .el-input__inner{
        width:176px;
        height:30px;
        line-height:30px;
        background-color:#fbfbfd;
    }
    .toolbar .el-input__icon{
        line-height:30px;
    }
</style>

<style scoped>
    article{
        width:1200px;
        margin:0 auto;
    }
    header{
        height:75px;
        line-height:75px;
        padding-left:50px;
        display:flex;
        align-items: center;
        background-color:#fff;
        border-radius: 5px;
        margin:20px 0;        
    }
    header>div{
        margin-right:62px;
        font-size:18px;
        color:#171a20;
        font-family: "PingFang";
        font-weight: bold;
        position: relative;
        cursor: pointer;
    }
    .active span{
        color:#7573e6;
    }
    .active-bar{
        display: none;
        width:2.5em;
        height:4px;
        background-color:#7573e6;
        position:absolute;
        top:0;
        left:-0.25em;
    }
    .active .active-bar{
        display:block;
    }
    section{
        background-color:#fff;
        border-radius:5px;
    }
    .toolbar{
        padding:24px 21px 24px 30px;
        display:flex;
        justify-content:space-between;
    }
    .el-select{
        margin-right:12px;
    }
    .teacher{
        margin-left:50px;
    }
    button{
        height:30px;
        box-sizing:border-box;
        width:78px;
        line-height:30px;
        color:#7573e6;
        font-size:12px;
        padding:0;
    }
    button img{
        height:22px;
        vertical-align:middle;
        position: relative;
        top:-3px;
    }
</style>
