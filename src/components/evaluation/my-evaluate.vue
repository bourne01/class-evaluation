<template>
      <div class="evaluate">
            <div class="check-work" id="work">
                <h3>考勤</h3>
                <ul>
                    <li 
                        v-for="(item,idx) in attList" :key="idx"
                        @click="onClick('Attendance',idx)"
                        :class="{active:attIdx===idx}"
                    >{{item}}</li>
                </ul>
            </div>
             <div class="check-work">
                <h3>负向指标</h3>
                <ul>
                     <li 
                        v-for="(item,idx) in negList" :key="idx"
                        @click="onClick('Negative',idx)"
                        :class="{active:negIdx===idx}"
                    >{{item}}</li>
                </ul>
            </div>
            <div class="check-work">
                <h3>正向指标</h3>
                <ul>
                     <li 
                        v-for="(item,idx) in posList" :key="idx"
                        @click="onClick('Positive',idx)"
                        :class="{active:posIdx===idx}"
                    >{{item}}</li>
                </ul>
            </div>
            <div class="check-work" id="evaluate">
                <h3>课程整体评价</h3>
                 <el-rate
                    v-model="value3"
                    show-text
                    :max="3"
                    :texts="['一般','良好','优秀']"
                    :colors="['#fa5b4a','#fa5b4a','#fa5b4a']">
                </el-rate>
            </div>
      </div>
</template>

<script>

export default {
    components:{
    },
    data(){
        return{
            attList:['请假','旷课','迟到'],//考勤名称列表
            negList:['睡觉','玩手机','吃零食','其他'],//负向指标列表
            posList:['积极发言','认证'],//正向指标列表
            attIdx:-1,
            negIdx:-1,
            posIdx:-1,
        }
    },
    methods:{
        /**
         * @function 处理点击事件 
         * @param {点击的类型} type
         * @param {本类型的序号} idx
         */
        onClick(type,idx){
            switch(type){
                case 'Attendance':
                    this.attIdx = idx;
                    break;
                case 'Negative':
                    this.negIdx = idx;
                    break;
                case 'Positive':
                    this.posIdx = idx;
                    break;
                default:
            }
        }
    },
}
</script>

<style scoped>
     *{
         padding: 0px;
         margin: 0px;
     }
     .evaluate{
         width: 900px;
         height: 627px;
         background-color: white;
         border-bottom-right-radius: 10px;
     }
     #work{
         padding-top: 60px;
     }
     .check-work{
         width: 800px;
         height: 68px;
         margin-left: 50px;
         margin-bottom: 56px;
     }
     h3{
         font-size: 18px;
     }
     ul{
         margin-top: 20px;
     }
     ul li{
         float: left;
         padding:0 15px;
         height: 30px;
         background-color: #f3f3f6;
         border-radius: 2px;
         text-align: center;
         line-height: 30px;
         margin-right: 30px;
         color: #939aad;
         cursor: pointer;
         font-size:12px;
     }
     .active{
         background-color: #ffe8e0;
         color: #fc6835;
     }
     .check-work i{
         display: block;
         width: 22px;
         height: 22px;
         background-image: url(../../assets/svg/favorite-active.svg);
         float: left;
         margin-right: 30px;
         margin-top: 30px;
     }
     #evaluate{
         margin-bottom: 0;
     }
     .el-rate{
         margin-top:30px;
     }
</style>

<style>
    .evaluate .el-rate__icon{
        font-size:24px;
        margin-right:20px;
    }
</style>
