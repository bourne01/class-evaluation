<template>
    <el-dialog
        :visible.sync="isShow"
        width="990px"
        :modal-append-to-body="false"    
        @close="onClose"        
        class="test-diagram-dialog">
        <header slot="title">
            <span>测试详情</span>
            <div class="btn-wrap">
                <el-button @click="switchList">
                    <img :src="require('../../assets/svg/diagnose/list.svg')" alt="">
                    <span>列表</span>
                </el-button>
                <el-button>
                    <img :src="require('../../assets/svg/diagnose/export.svg')" alt="">
                    <span>导出</span>
                </el-button>
            </div>
        </header>
        <section>
            <div class="filter">
                <el-select></el-select>
                <el-select></el-select>
                <el-select></el-select>
            </div>
            <ve-line></ve-line>
        </section>
    </el-dialog>
</template>

<script>
import VeLine from './ve-line'
export default {
    props:['is-pop'],
    components:{VeLine},
    data(){
        return{
            control:{},//课堂控制对象
        }
    },
    computed:{
        isShow:{
            /**@function 根据来自父组件属性值，打开哪个标题名称的弹窗 */
            get:function(){                
                return this.isPop;
            },
            set:function(val){
            }
        }
    },
    methods:{
        /**
         * @function 监听对话框关闭事件，然后向父组件传递关闭事件
         */
        onClose(){
            this.$emit('dialog-close')
        },
        /**@function 切换显示模式为列表 */
        switchList(){
            this.onClose();
        },
        handleSelectionChange(){},
        filterNode(){},
    },
    mounted(){
        
    }
}
</script>

<style>
    .test-diagram-dialog .el-dialog__close{
        font-size:22px;
        color:#939aad;
        position: relative;
        top:5px
    }
    .test-diagram-dialog .el-dialog__header{
        padding:20px 40px 20px 48px;
        border-bottom:1px solid #f1f1f1;
        text-align: left;
        color:#171a20;
    }
    .test-diagram-dialog .el-dialog__body{
        padding:0;
    }       
    .test-diagram-dialog .el-dialog{
        border-radius:5px;
    }
    .test-diagram-dialog .el-input__inner{
        width:152px;
        height:30px;
        line-height:30px;
        background-color:#fbfbfd;
    }
    .test-diagram-dialog .el-input__icon{
        line-height:30px;
    } 
</style>

<style scoped>
    .test-diagram-dialog{
        font-size:18px;                
    }  
    header{
        display:flex;
        justify-content:space-between;
        padding-right:50px;
    }
    header>span{
        line-height:30px;
    }
    .el-dialog{
        border-radius:5px;
    }
    section{
        padding:40px 60px;
    }   
    .filter{
        padding-left:60px;
        margin-bottom:50px;
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


