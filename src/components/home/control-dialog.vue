<template>
    <el-dialog
        :visible.sync="isShow"
        width="601px"
        :modal-append-to-body="false"    
        @close="onClose"        
        class="class-control-dialog">
        <header slot="title">
            <span>课堂控制</span>
        </header>
        <section>
            <ul>
                <li>
                    <label for="">课前作业</label>
                    <el-select v-model="control.beforeTime"></el-select>
                </li>
                <li class="after">
                    <label for="">课后作业</label>
                    <el-select v-model="control.afterTime"></el-select>
                </li>
                <li>
                    <label for="">课前任务</label>
                    <el-switch 
                        v-model="control.beforeTask"
                        active-color="#22cb64"
                        inactive-color="#fa8d8b"
                    ></el-switch>
                    <span>课前任务已{{control.beforeTask|filterControl}}</span>
                </li>
                <li>
                    <label for="">课堂交流</label>
                    <el-switch 
                        v-model="control.interactive"
                        active-color="#22cb64"
                        inactive-color="#fa8d8b">
                    </el-switch>
                    <span>课堂交流已{{control.interactive|filterControl}}</span>
                </li>
                <li>
                    <label for="">课堂评论</label>
                    <el-switch 
                        v-model="control.comment"
                        active-color="#22cb64"
                        inactive-color="#fa8d8b"
                    ></el-switch>
                    <span>课堂评论已{{control.comment|filterControl}}</span>
                </li>
                <li>
                    <label for="">课堂评价</label>
                    <el-switch 
                        v-model="control.evaluation"
                        active-color="#22cb64"
                        inactive-color="#fa8d8b"
                    ></el-switch>
                    <span>课堂评价已{{control.evaluation|filterControl}}</span>
                </li>        
            </ul>
        </section>
        <footer>
            <label for="">集中控制</label>
            <el-switch 
                v-model="control.controlHub"
                active-color="#22cb64"
                inactive-color="#fa8d8b"
            ></el-switch>
            <span>统一设置{{control.controlHub|filterControl}}</span>
        </footer>
    </el-dialog>
</template>

<script>
export default {
    props:['is-pop'],
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
         * 监听对话框关闭事件，然后向父组件传递关闭事件
         */
        onClose(){
            this.$emit('dialog-close')
        },
        handleSelectionChange(){},
        filterNode(){},
    },
    filters:{
        filterControl(val){
            return val?'开启':'关闭'
        }
    },
    mounted(){
        
    }
}
</script>

<style>
    .class-control-dialog .el-dialog__close{
        font-size:20px;
        color:#939aad;
    }
    .class-control-dialog .el-dialog__header{
        padding:20px 40px 20px 48px;
        border-bottom:1px solid #f1f1f1;
        text-align: left;
        color:#171a20;
    }
    .class-control-dialog .el-dialog__body{
        padding:0;
    }    
    .class-control-dialog .el-input__inner{
        height:32px;
        line-height:32px;
    }
    .class-control-dialog .el-dialog{
        border-radius:5px;
    } 
</style>

<style scoped>
    .class-control-dialog{
        font-size:18px;                
    }  
    .el-dialog{
        border-radius:5px;
    }
    section{
        padding:50px;
    }    
    li{
        height:32px;
        line-height:32px;
        box-sizing:border-box;
        font-size:12px;
        margin-bottom:40px;
    }
    li label{
        margin-right:20px;
        color:#171a20;
    }
    .after{
        margin-bottom:74px;
    }
    .el-switch{
        margin-right:20px;
    }
    footer{
        height: 65px;
        line-height: 65px;
        padding:0 50px;
        border-top:1px solid #f1f1f1;
        background-color:#eff2f4;
    }   
    footer label{
        margin-right:15px;
    }
    li>span,footer>span{
        color:#939aad;
    }
</style>


