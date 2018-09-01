<template>
  <ve-histogram  
    :extend="chartExtend"
    :colors="['#7572e5',]"
    :xAxis="xAxis"
    :series="series"
    :legend="legend"
    height="328px"></ve-histogram>
</template>

<script>
import VeHistogram from 'v-charts/lib/histogram.common'
export default {
    components:{VeHistogram},
    data () {       
        this.chartExtend = {
            series (v) {
            v.forEach(i => {
                i.barWidth = 30;
            })
            return v
            },}         
        return {
            legend:{               
            },
            series:[{
                name:'分值区间',
                type:'bar',
                data:[23,44,55,19,11,11,11]
            }],
            xAxis:{type:'category',
                    name:'分值区间',
                    axisLabel:{},
                    data: [{value: '1-49分',// 突出显示
                    textStyle: {
                        fontSize: 20,
                        color: 'red'
                    }
                }, '50-59分', '60-79分', '80-89分', '90-100分']},                    
        }        
    },
    mounted(){

            }
}
</script>