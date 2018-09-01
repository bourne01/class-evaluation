<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'
export default {
    components:{VeLine},
    data () {
        this.chartSettings = {
        xAxisType: 'category'
        }
        return {
        chartData: {
            columns: ['日期', '访问用户'],
            rows: [
            { '日期': '2018-01-01', '访问用户': 1393},
            { '日期': '2018-01-02', '访问用户': 3530,},
            { '日期': '2018-01-03', '访问用户': 2923,},
            { '日期': '2018-01-05', '访问用户': 1723,},
            { '日期': '2018-01-10', '访问用户': 3792,},
            { '日期': '2018-01-20', '访问用户': 4593,}
            ]
        }
        }
    }
}
</script>