"use strict";(self.webpackChunkngx_cdk_tester=self.webpackChunkngx_cdk_tester||[]).push([[712],{6712:(k,m,i)=>{i.r(m),i.d(m,{TestComponent:()=>b});var o=i(4650),v=i(9758),g=i(1642),d=i(4734),x=i(4999),S=i(5439),w=i(6895),T=i(4984);const h=(e,n="MM/DD/YYYY HH:mm:ss:SSS")=>S.utc(e).format(n),I=["#fac858"];let Z=(()=>{class e{constructor(){this.data=[],this.options={},this.colors=I,this.isDataZoomSelect=!0,this.height="400px",this.width="100%",this.maxSize=10,this.onInit=new o.vpe,this.id=(0,v.Z)("rz-time-status-chart"),this.resize=(0,g.Z)(()=>{this.chartInstance&&this.chartInstance.resize()},800),this.bindHotKey=s=>{"z"===s.key&&(this.chartInstance.dispatchAction({type:"takeGlobalCursor",key:"dataZoomSelect",dataZoomSelectActive:!this.isDataZoomSelect}),this.isDataZoomSelect=!this.isDataZoomSelect),"r"===s.key&&(this.chartInstance.dispatchAction({type:"restore"}),this.chartInstance.dispatchAction({type:"takeGlobalCursor",key:"dataZoomSelect",dataZoomSelectActive:this.isDataZoomSelect}))}}ngOnChanges(){this.data?.length&&this.renderChart(),window.addEventListener("resize",this.resize)}ngOnDestroy(){window.removeEventListener("resize",this.resize),window.removeEventListener("keydown",this.bindHotKey)}renderChart(){setTimeout(()=>{const s=[];var r=document.getElementById(this.id);if(r){d.dispose(r);const u=new Set;this.data.forEach(t=>{u.add(t.state)}),this.yAxis=Array.from(u);const y={};this.yAxis.forEach((t,a)=>{y[t]=this.colors[a%this.colors.length]}),this.data.forEach(t=>{s.push({itemStyle:{color:y[t.state]},name:t.state,value:[this.yAxis.indexOf(t.state),t.startTime,t.endTime,t.infer]})});const M={tooltip:{formatter:t=>((e,n)=>`\n    <div style="margin: 0px 0 0; line-height: 1">\n      <div style="margin: 0px 0 0; line-height: 1">\n        <div style="font-size: 14px; color: #666; font-weight: 400; line-height: 1">${e.name}</div>\n        <div style="margin: 10px 0 0; line-height: 1">\n          <div style="margin: 0px 0 0; line-height: 1">\n            <div style="margin: 0px 0 0; line-height: 1">\n              ${e.marker}\n              <span style="font-size: 14px; color: #666; font-weight: 400; margin-left: 2px"></span>\n              <span style="float: right; margin-left: 20px; font-size: 14px; color: #666; font-weight: 900">\n                ${h(e.value[1],n)} ~ \n                ${h(e.value[2],n)}\n              </span>\n              <div style="clear: both"></div>\n            </div>\n            <div style="clear: both"></div>\n          </div>\n          <div style="clear: both"></div>\n        </div>\n        <div style="clear: both"></div>\n      </div>\n    </div>\n  `)(t,this.dateFormatPattern)},toolbox:{show:!0,feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{}},right:this.yAxis.length>this.maxSize?80:40},dataZoom:[{type:"slider",filterMode:"weakFilter",showDataShadow:!1,endValue:this.min,startValue:this.max,bottom:10,labelFormatter:function(t){return h(t,"HH:mm:ss")}},{type:"slider",yAxisIndex:0,filterMode:"weakFilter",right:20,show:this.yAxis.length>this.maxSize,end:(this.maxSize-1)/this.yAxis.length*100,zoomLock:this.yAxis.length>this.maxSize,showDetail:!1,brushSelect:!1}],grid:{left:10,right:this.yAxis.length>this.maxSize?80:40,top:30,bottom:50,containLabel:!0},xAxis:{type:"time",min:this.min,max:this.max,axisLabel:{showMinLabel:!0,showMaxLabel:!0,formatter:t=>h(t,"HH:mm:ss")},splitNumber:5,splitLine:{interval:0,show:!0,lineStyle:{type:"dashed"}}},yAxis:{type:"category",data:this.yAxis,axisLabel:{rotate:-20,overflow:"truncate",width:100},triggerEvent:!0},series:[{type:"custom",renderItem:function(t,a){const c=a.value(0),f=a.value(3),l=a.coord([a.value(1),c]),L=a.coord([a.value(2),c]),p=a.size([0,1])[1];return{type:"rect",shape:d.graphic.clipRectByRect({x:l[0],y:l[1]-p/10,width:L[0]-l[0],height:p/5},{x:t.coordSys.x,y:t.coordSys.y,width:t.coordSys.width,height:t.coordSys.height}),style:{fill:a.visual("color"),fillOpacity:f?.2:1,stroke:f?"#fff":"transparent",strokeOpacity:.8,shadowColor:"#ccc",shadowBlur:10,lineWidth:2,lineDash:"dashed"}}},encode:{x:[1,2],y:0},data:s}]};this.chartInstance=d.init(r),this.chartInstance.setOption(x(M,this.options)),this.onInit.emit(this.chartInstance),this.isDataZoomSelect&&this.chartInstance.dispatchAction({type:"takeGlobalCursor",key:"dataZoomSelect",dataZoomSelectActive:!0}),this.chartInstance.on("mouseover",t=>{if("yAxis"===t.componentType){let a=t.event.offsetX+10,c=t.event.offsetY+10;this.chartInstance.setOption({tooltip:{formatter:t.value,alwaysShowContent:!0}}),this.chartInstance.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:0,position:[a,c]})}}),this.chartInstance.on("mouseout",t=>{"yAxis"===t.componentType&&this.chartInstance.setOption({tooltip:{formatter:t.value,alwaysShowContent:!1}})}),window.removeEventListener("keydown",this.bindHotKey),window.addEventListener("keydown",this.bindHotKey)}})}}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["rz-time-status-chart"]],inputs:{data:"data",options:"options",colors:"colors",isDataZoomSelect:"isDataZoomSelect",min:"min",max:"max",height:"height",width:"width",maxSize:"maxSize",dateFormatPattern:"dateFormatPattern"},outputs:{onInit:"onInit"},features:[o.TTD],decls:1,vars:5,consts:[[3,"id"]],template:function(s,r){1&s&&o._UZ(0,"div",0),2&s&&(o.Udp("height",r.height)("width",r.width),o.Q6J("id",r.id))},encapsulation:2}),e})(),z=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[w.ez,T.Ns.forRoot({echarts:()=>Promise.resolve().then(i.bind(i,4734))})]}),e})();const D=[{startTime:1663267496944,endTime:1663284111602,state:"state-a"},{startTime:1663273743276,endTime:1663290205725,state:"state-b"},{startTime:1663277293717,endTime:1663277339521,state:"state-c"},{startTime:1663277960399,endTime:1663277963268,state:"state-c"},{startTime:1663278725300,endTime:1663278757151,state:"state-c"},{startTime:1663278874422,endTime:1663283843646,state:"state-c"},{startTime:1663283870580,endTime:1663290205725,state:"state-c"},{startTime:1663279160393,endTime:1663280305178,state:"state-d-long-long-long"}];let b=(()=>{class e{constructor(){this.data=D}}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-test"]],standalone:!0,features:[o.jDz],decls:1,vars:1,consts:[[3,"data"]],template:function(s,r){1&s&&o._UZ(0,"rz-time-status-chart",0),2&s&&o.Q6J("data",r.data)},dependencies:[z,Z],encapsulation:2}),e})()}}]);