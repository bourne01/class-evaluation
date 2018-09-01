<template>
    <div>
        <el-table
            :data="evaluationList"
            style="width: 100%">
            <el-table-column
            type="selection"
            align="center"
            width="55">
            </el-table-column>
            <el-table-column
            prop="id"
            label="学号">
            </el-table-column>
            <el-table-column
            prop="name"
            label="名字">
            </el-table-column>
            <el-table-column
            prop="course"
            label="课程">
            </el-table-column>
            <el-table-column label="正向指标">      
                <el-table-column
                prop="active"
                label="积极发言"
                width="60">
                </el-table-column>
                <el-table-column
                prop="writing"
                label="上台板书"
                width="60">
                </el-table-column>
                <el-table-column
                prop="work"
                label="作业认真"
                width="60">
                </el-table-column>
                <el-table-column
                prop="other1"
                label="其它"
                width="60">
                </el-table-column>
            </el-table-column>
            <el-table-column label="负向指标">      
                <el-table-column
                prop="sleep"
                label="睡觉"
                width="60">
                </el-table-column>
                <el-table-column
                prop="playPhone"
                label="玩手机"
                width="60">
                </el-table-column>
                <el-table-column
                prop="snack"
                label="吃零食"
                width="60">
                </el-table-column>
                <el-table-column
                prop="other2"
                label="其它"
                width="60">
                </el-table-column>
            </el-table-column>
            <el-table-column label="考勤">      
                <el-table-column
                prop="leave"
                label="请假"
                width="60">
                </el-table-column>
                <el-table-column
                prop="skip"
                label="上台板书"
                width="60">
                </el-table-column>
                <el-table-column
                prop="late"
                label="迟到"
                width="60">
                </el-table-column>        
            </el-table-column>
            <el-table-column>
                <template slot-scope="scope">
                    <att-state :state="scope.row.state"></att-state>            
                </template>   
            </el-table-column>
        </el-table>
        <div class="footer">
            <div>
               <el-checkbox>全选</el-checkbox>
               <el-button class="batch-deal">批量处理</el-button>
               <el-button class="batch-approval">批量审核</el-button>
            </div>            
            <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
    </div>  
</template>

<script>
import AttState from './att-state'
export default {
    components:{
        AttState
    },
    data() {
      return {
        evaluationList: [{
          id:'15012019',
          name:'张三',
          course:'程序设计基础(-)',
          active:'',
          writing:'',
          work:'',
          other1:'',
          sleep:'',
          playPhone:'',
          snack:'',
          other2:'',
          leave:'',
          skip:'',
          late:'',
          state:1,
        },{
          id:'15012019',
          name:'张三',
          course:'程序设计基础(-)',
          active:'',
          writing:'',
          work:'',
          other1:'',
          sleep:'',
          playPhone:'',
          snack:'',
          other2:'',
          leave:'',
          skip:'',
          late:'2',
          state:2,
        },{
          id:'15012019',
          name:'张三',
          course:'程序设计基础(-)',
          active:'',
          writing:'',
          work:'',
          other1:'',
          sleep:'',
          playPhone:'',
          snack:'',
          other2:'',
          leave:'',
          skip:'',
          late:'',
          state:3,
        }, ]
      }
    }
  }
</script>

<style>
    .el-table th{
		background-color:#fbfbfd!important;
	}
</style>

<style scoped>
    .footer{
        margin-top:10px;
		display:flex;
		justify-content:space-between;
		padding:25px 30px;
        background-color:#fff;        
	}
    .el-check{
        font-size:12px;
    }
    .el-button{
        border:none;
        padding:0 15px;
        height:28px;
        line-height:28px;font-size:12px;
    }
    .batch-deal{
        background-color:#fdf4e1;       
        color:#ff9000; 
        margin-left:40px;
        margin-right:20px;
    }
    .batch-approval{
        background-color:#ecebfb;       
        color:#7573e6; 
    }

</style>

