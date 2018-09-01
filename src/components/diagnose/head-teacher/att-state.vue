<template>
    <div>
        <button
            :class="{
                pendingDeal:state===1,
                pendingApproval:state===2,
                approved:state===3}">{{stateName}}</button>
        <img :src="require('../../../assets/svg/evaluation/delete.svg')" alt="">
    </div>
</template>

<script>
export default {
    props:['state'],
    data(){
        return{

        }
    },
    computed:{
        stateName:function(){
            let stateNames = [,'待处理','待审核','已审核'];
            console.log(1111);
            return stateNames[this.state];
        }
    },
}
</script>

<style scoped>
    button{
        outline: none;
        border:none;
        height:24px;
        line-height:24px;
        width:60px;
        font-size:12px;
        background-color:#fff;
        cursor: pointer;
    }
    .pendingDeal{
        background-color:#fdf4e1;       
        color:#ff9000; 
    }
    .pendingApproval{
        background-color:#ecebfb;       
        color:#7573e6; 
    }
    .approved{
        color:#939aad; 
    }
    img{
        width:22px;
        position: relative;
        top:6px;
        cursor: pointer;
    }
</style>


