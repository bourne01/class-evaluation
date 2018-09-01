<template>
    <ve-ring        
        :data="chartData" 
        :tooltip="tooltip"
        :legend="legend"
        :series="series"     
        :colors="['#f4f4f6','#7772e8']"   
        ></ve-ring>
</template>

<script>
import VeRing from 'v-charts/lib/ring.common'
export default {
    components:{
        VeRing,
    },
     data () {
      this.chartSettings = {
        radius:['35%','55%'],
        label:{show:false},
        offsetY:100,
        dataType: 'KMB'
      }
      return {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            /* orient: 'horizonal', */
            x: 'center',
            data:['已完成','未完成',]
        },
        series: [{
                name:'完成状态',
                type:'pie',
                radius: ['45%', '65%'],
                center: ['50%', '40%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold',
                            color:'#7772e8'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data:[
                    {value:310, name:'未完成'},
                    {value:335, name:'已完成'},
                    
                ]
            }
            ]
        }
        }
}
</script>



