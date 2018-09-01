<template>
    <div id="box">
        <div class="top">
            <my-class 
                v-for="i in 4" 
                :key="i" 
                class="margin-right"
                :idx="i"
                :class="{active:idx===i}"
                @mouseover.native="idx=i"
            ></my-class>
        </div>
        <div class="down">
            <div class="left">
                <my-catalog></my-catalog>
            </div>
            <div class="right">
                <my-homework></my-homework>
            </div>
        </div>
    </div>
</template>

<script>
import MyClass from '../../../components/home/my-class'
import MyCatalog from '../../../components/home/my-catalog'
import MyHomework from '../../../components/home/my-homework'
export default {
    components:{
        MyClass,
        MyCatalog,
        MyHomework,
    },
    data(){
        return{
            idx:-1,//班级序号
        }
    },
    methods:{
        /**@function 监听鼠标悬停事件，做出相应处理 */
        onMouseover(){
            console.log('hahahh');
        }
    },
}
</script>

<style scoped>
    #box{
        width:1200px;
        margin:0 auto;
        margin-top:40px;
    }
    .top{
        height: 290px;
    }
    .down{
        height: 622px;
    }
    .left, .right{
        float: left;
    }
    .margin-right{
        margin-right:21px;
        cursor: pointer;
    }
    .margin-right:last-child{
        margin-right:0;
    }
    .active{
        margin-right:21px;
    }
</style>


