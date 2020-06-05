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

// 柱状图二
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  // 配置和数据
  option = {
    grid: {
      top: "10%",
      left: "23%",
      bottom: "10%",
      containLabel: false,
    },
    // 不显示这周的相关配置
    xAxis: {
      show: false,
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        // 不显示y轴的线
        axisLine: {
          show: false,
        },
        // 不显示刻度
        axisTick: {
          show: false,
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff",
        },
      },
      {
        show: true,
        inverse: true,
        data: [702, 350, 610, 793, 664],
        // 不显示y轴的线
        axisLine: {
          show: false,
        },
        // 不显示刻度
        axisTick: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#fff",
          },
        },
      },
    ],
    series: [
      {
        name: "条",
        type: "bar",
        data: [70, 34, 60, 78, 69],
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 15,
        // 柱子设为圆角
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            color: (params) => {
              // dataIndex是当前柱子的索引号
              return myColor[params.dataIndex];
            },
          },
        },
        yAxisIndex: 0,
        //显示柱子内的文字
        label: {
          show: true,
          position: "inside",
          formatter: "{c}%",
        },
      },
      {
        name: "框",
        type: "bar",
        data: [100, 100, 100, 100, 100],
        barCategoryGap: 50,
        barWidth: 15,
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15,
        },
        yAxisIndex: 1,
      },
    ],
  };

  //3. 把指定配置给实例
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
//折线图1模块制作
(function () {
  var myChart = echarts.init(document.querySelector(".line .chart"));
  var yearData = [
    {
      year: "2020", // 年份
      data: [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
      ],
    },
    {
      year: "2021", // 年份
      data: [
        // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34],
      ],
    },
  ];

  option = {
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["新增粉丝", "新增游客"],
      textStyle: {
        //修改图例组建的文字颜色
        color: "#4c9bfd",
      },
      right: "3%",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true, // 显示边框
      borderColor: "#012f4a", // 边框颜色
      containLabel: true, // 包含刻度文字在内
    },
    /*  toolbox: {
      feature: {
        saveAsImage: {},
      },
    }, */
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      axisTick: {
        show: false, // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd", // 文本颜色
      },
      axisLine: {
        show: false, // 去除轴线
      },
      boundaryGap: false, // 去除轴内间距
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false, // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd", // 文本颜色
      },
      axisLine: {
        show: false, // 去除轴线
      },
      boundaryGap: false, // 去除轴内间距
      splitLine: {
        lineStyle: {
          color: "#012f4a", // 分割线颜色
        },
      },
    },
    series: [
      {
        type: "line",
        stack: "总量",
        name: "新增粉丝",
        data: yearData[0].data[0],
        // 折线修饰为圆滑
        smooth: true,
      },
      {
        type: "line",
        stack: "总量",
        name: "新增游客",
        data: yearData[0].data[1],
        smooth: true,
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });

  $(".line h2").on("click", "a", function () {
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    myChart.setOption(option);
  });
})();
