<template>
    <div class="evaluation">
        <att-toolbar class="toolbar"></att-toolbar>
        <att-table class="table"></att-table>
    </div>
</template>

<script>
import AttToolbar from '../../../components/diagnose/head-teacher/toolbar'
import AttTable from '../../../components/diagnose/head-teacher/att-table'
export default {
    components:{
        AttToolbar,
        AttTable,
    },
}
</script>

<style scoped>
    .evaluation{
        width:1200px;
        margin:0 auto;
    }
    .toolbar{
        margin-top:30px;
    }
</style>

