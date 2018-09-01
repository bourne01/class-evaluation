<template>
    <div id="box">
        <div class="top">
          <my-time></my-time>
            <div class="top-left">
                <my-week></my-week>
            </div>
            <div class="top-right">
                <my-curriculum v-for="i in 6" :key="i" class="curriculum"></my-curriculum>
                <my-course></my-course>
            </div>
        </div>
      <div class="down">
           <my-major></my-major>
           <div class="down-left">
               <my-members 
                    v-for="i in 7" :key="i" 
                    :index="i"
                    class="down-one"></my-members>
           </div>
           <div class="down-right">
               <my-evaluate></my-evaluate>
           </div>
      </div>

    </div>
</template>

<script>
import MyCurriculum from '../../../components/evaluation/my-curriculum'
import MyTime from '../../../components/evaluation/my-time'
import MyWeek from '../../../components/evaluation/my-week'
import MyCourse from '../../../components/evaluation/my-course'
import MyMajor from '../../../components/evaluation/my-major'
import MyMembers from '../../../components/evaluation/my-members'
import MySelect from '../../../components/evaluation/my-select'
import MyEvaluate from '../../../components/evaluation/my-evaluate'
export default {
    components:{
        MyCurriculum,
        MyTime,
        MyWeek,
        MyCourse,
       MyMajor,
       MyMembers,
       MySelect,
       MyEvaluate,
}
}
</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
    #box{
        width: 1200px;
        margin: 0 auto;
        margin-top: 20px;
    }
    .top{
        height: 253px;
    }
    .top-left,.top-right,.down-left{
        float: left;
    }
    .down{
        height: 620px;
        margin-top: 20px;
    }
    .down-left{
        height: 627px;
        background-color: #fbfbfd;
        border-top: 1px solid #f3f3f6;
        border-right: 1px solid #f3f3f6;
        border-bottom-left-radius: 10px;
        overflow-y: scroll;
    }
    .down-one:first-child{
        margin-top: 8px;
    }
    .down-right{
        height: 627px;
        margin-left: 300px;
        border-top: 1px solid #f3f3f6;
    }
</style>