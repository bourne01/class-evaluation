<template>
    <div class="header">        
        <img 
            :src="require('../../assets/home/logo.png')" 
            alt=""
            >
        <div class="right">
            <div class="teacher">
                <img :src="require('../../assets/home/avatar-default.png')" class="avatar" alt="">
                <div class="teacher-txt">
                    <span class="name">张老师</span>         
                    <br>           
                    <span class="id">ID123456</span>
                </div>
            </div>
            <div class="notification">
                <img class="bell" :src="require('../../assets/svg/home/bell.svg')" alt="">
                <i class="dot"></i>
            </div>
            
            <img class="logout" :src="require('../../assets/svg/home/logout.svg')" alt="">
        </div>
    </div>
    
</template>

<script>
export default {
    components:{
        
    },
    data(){
        return{
            
        }
    },
    methods:{
       
        },
    mounted() {        
    
    }
    
}
</script>
<style <style scoped>
    .header{
        height:78px;
        display:flex;
        justify-content: space-between;
    }
    .header>img{
        margin-top:12px;
        height:54px;
    }
    .right{
        display:flex;
        
    }
    .avatar{
        margin-top:12px;
        height:54px;
        width:54px;
        border-radius:27px;
        vertical-align: top;
        margin-right:12px;

    }
    .notification{
        align-self: center;
        position: relative;
    }
    .dot{
        border-radius:4px;
        width:8px;
        height:8px;
        background-color:red;
        position: absolute;
        top:-3px;
        left:20px;
    } 
    .bell{
        width:24px;
        margin-right:50px;
    }
    .logout{
        width:24px;
    }
    .teacher-txt{
        display: inline-block;
        height: 78px;
        line-height: 1.2em;
        padding-top: 22px;
        box-sizing: border-box;
        font-size:16px;
        margin-right:60px;
    }
    .teacher-txt .id{
        color:#bfc5d2;
    }
</style>
