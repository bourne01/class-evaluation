<template>
	<div class="test-list">
		<el-table
			ref="multipleTable"
			:data="testList"
			tooltip-effect="dark"
			style="width: 100%"
			@selection-change="handleSelectionChange">
		<el-table-column
			type="selection"
			width="80">
		</el-table-column>
		<el-table-column
			prop="NO"
			label="学号">
		</el-table-column>
		<el-table-column
			prop="name"
			label="姓名">
		</el-table-column>
		<el-table-column
			prop="term"
			label="学期"
			show-overflow-tooltip>
		</el-table-column>
		<el-table-column
			prop="name"
			label="姓名">
		</el-table-column>
		<el-table-column
			prop="week"
			label="周">
		</el-table-column>
		<el-table-column
			prop="teacher"
			label="教师">
		</el-table-column>
		<el-table-column
			prop="testCount"
			label="测试次数">
		</el-table-column>
		<el-table-column
			prop="testBeforeClass"
			label="课前测试">
		</el-table-column>
		<el-table-column
			prop="testAfterClass"
			label="课后测试">
		</el-table-column>
	</el-table>
	<div class="footer">
		<!-- <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
		<el-button @click="toggleSelection()">取消选择</el-button> -->
		<el-checkbox>全选</el-checkbox>
		<el-pagination
			background
			layout="prev, pager, next"
			:total="1000">
		</el-pagination>
	</div>
	</div>  
</template>

<script>
  export default {
    data() {
		return {
			testList: [{
			NO: '2016-05-03',
			name: '王小虎',
			term: '上海市普陀区金沙江路 1518 弄',
			week:'第22周',
			teacher:'王老师',
			testCount:201,
			testBeforeClass:100,
			testAfterClass:101,
			}, {
			NO: '2016-05-03',
			name: '王小虎',
			term: '上海市普陀区金沙江路 1518 弄',
			week:'第22周',
			teacher:'王老师',
			testCount:201,
			testBeforeClass:100,
			testAfterClass:101,
			}, {
			NO: '2016-05-03',
			name: '王小虎',
			term: '上海市普陀区金沙江路 1518 弄',
			week:'第22周',
			teacher:'王老师',
			testCount:201,
			testBeforeClass:100,
			testAfterClass:101,
			}, {
			NO: '2016-05-03',
			name: '王小虎',
			term: '上海市普陀区金沙江路 1518 弄',
			week:'第22周',
			teacher:'王老师',
			testCount:201,
			testBeforeClass:100,
			testAfterClass:101,
			}, ],
			multipleSelection: []
		}
    },
    methods: {
		toggleSelection(rows) {
			if (rows) {
			rows.forEach(row => {
				this.$refs.multipleTable.toggleRowSelection(row);
			});
			} else {
			this.$refs.multipleTable.clearSelection();
			}
		},
		handleSelectionChange(val) {
			this.multipleSelection = val;
		}
    }
  }
</script>

<style>
	.test-list .el-table-column--selection .cell{
		padding-left:30px;
	}
	.test-list .el-table th{
		background-color:#fbfbfd;
	}
</style>

<style scoped>
	.footer{
		display:flex;
		justify-content:space-between;
		padding:25px 30px;
	}
</style>

