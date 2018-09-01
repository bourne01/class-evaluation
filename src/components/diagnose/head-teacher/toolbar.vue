<template>
    <div class="toolbar">
        <div class="filter">
            <el-select></el-select>
            <el-select></el-select>
            <el-select></el-select>
            <el-select class="week"></el-select>
            <el-select class="day"></el-select>
            <el-button class="search">查询</el-button>
        </div>
        <div class="right">
            <el-select class="state"></el-select>
            <el-button>
                <img :src="require('../../../assets/svg/diagnose/export.svg')" alt="">
                <span>导出</span>
            </el-button>
        </div>
    </div>
</template>

<style>
    .toolbar .el-input__inner{
        width:162px;
        height:30px;
        line-height:30px;
        background-color:#fbfbfd;
    }
    .toolbar .el-input__icon{
        line-height:30px;
    }
    .toolbar .week .el-input__inner,
    .toolbar .day .el-input__inner{
        width:122px;
    }
    .toolbar .state .el-input__inner{
        width:100px;
    }
</style>

<style scoped>
    .toolbar{
        padding:24px 20px;
        display:flex;
        justify-content:space-between;
        background-color:#fff;
    }
    .right button{
        height:30px;
        box-sizing:border-box;
        width:78px;
        line-height:30px;
        color:#7573e6;
        font-size:12px;
        padding:0;
    }
    .right button img{
        height:22px;
        vertical-align:middle;
        position: relative;
        top:-3px;
    }
    .week{
        margin-left:30px;
    }
    .search{
        padding:0;
        width:64px;
        background-color:#7573e6;
        height:30px;
        line-height:30px;
        color:#fff;
        font-size:12px;
        box-sizing:border-box;
    }
</style>

