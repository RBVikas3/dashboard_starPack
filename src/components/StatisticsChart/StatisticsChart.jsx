import css from "./StatisticsChart.module.css"
import ReactECharts from 'echarts-for-react'
import * as echarts from 'echarts'
const StatisticsChart = () => {
    const option = {
        color: ['var(--orange)'],
        toolbox: {
            feature: {
                saveAsImage: {},
            }
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross"
            },
            backgroundColor: "rgba(0,0,0,0.59)",
            borderWidth: 0
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
            show: false
        },
        xAxis: [
            {
                type: "category",
                boundaryGap: false,
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            }
        ],
        yAxis: [
            {
                type: "value",
                splitLine: {
                    show: false
                }
            }
        ],
        series: [
            {
                type: "line",
                smooth: true,
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: "rgb(225,191,0)"
                        },
                        {
                            offset: 1,
                            color: "#f450D3"
                        }
                    ]),
                    width: 4
                },
                areaStyle: {
                    opacity: .5,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
                        {
                            offset: 0,
                            color: "#FE4C00"
                        },
                        {
                            offset: 1,
                            color: "rgba(225,144,70,0.1)"
                        }
                    ])
                },
                showSymbol: false,
                emphasis: {
                    focus: "series",
                },
                data: [28000, 19000, 32000, 18000, 41000, 30000, 26000]
            }
        ]
    }
    return (
        <ReactECharts option={option} />
    )
}

export default StatisticsChart