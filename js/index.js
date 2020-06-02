(function () {
  //实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  //指定配置项和数据

  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "line", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    //修改图表的大小
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: [
          "旅游行业",
          "教育培训",
          "游戏行业",
          "医疗行业",
          "电商行业",
          "社交行业",
          "金融行业",
        ],
        axisTick: {
          alignWithLabel: true,
        },
        //修改刻度标签 相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: 8, //这个value能不能弄成rem的value呢？
        },
        // 不显示x轴的线
        axisLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        //修改刻度标签 相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12",
        },
        // y轴的线条修为2像素宽度
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 2,
          },
        },
        //修改横向的y轴的分割线
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
      },
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "35%", //修改柱子的宽度
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          barBorderRadius: 5,
        },
      },
    ],
  };

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

(function () {
  var myChart = "second chart";
})();
