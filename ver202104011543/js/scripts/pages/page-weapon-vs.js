$(document).ready(function(){var a={chart:{height:525,type:"radar",toolbar:{show:!1}},responsive:[{breakpoint:1921,options:{chart:{height:"513"}}},{breakpoint:1651,options:{chart:{height:"415"}}},{breakpoint:1367,options:{chart:{height:"312"}}},{breakpoint:992,options:{chart:{height:"415"}}},{breakpoint:500,options:{chart:{height:"312"}}}],colors:["#FDAC41","#FF5B5C"],series:[{name:"Weapon 2",data:radarData2},{name:"Weapon 1",data:radarData1}],stroke:{show:!0,width:2,colors:["#FDAC41","#FF5B5C"],dashArray:0,curve:["smooth","straight"]},fill:{opacity:.55},markers:{size:3,colors:["#FDAC41","#FF5B5C"]},dataLabels:{style:{colors:["#304156"]}},labels:radarLabels,yaxis:{show:!1},legend:{show:!1},tooltip:{enabled:!1}};new ApexCharts(document.querySelector("#radar-multi-chart"),a).render()});
