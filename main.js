importClass(android.location.LocationManager);
importClass(android.content.Context);
console.show();
//判断是否开GPS
const isOpenLocation = context.getSystemService(Context.LOCATION_SERVICE).isProviderEnabled(LocationManager.GPS_PROVIDER)
// console.info(isOpenLocation)
if(!isOpenLocation){
    toast("请在10秒内打开定位服务，否则将退出本程序")
    var count = 0;
    while(!context.getSystemService(Context.LOCATION_SERVICE).isProviderEnabled(LocationManager.GPS_PROVIDER)){
        if(count == 10){
            console.info("结束脚本");
            exit();
        }
        sleep(1000)
        count++;
        console.info(count + "秒")
    }
    console.info(isOpenLocation)
}
auto.waitFor();
// toast('Hello, Auto.js');
console.show();
console.info('开始打卡')
var appName = "易班";
var appPath = "广油易学";
console.info('正在进入APP')
launchApp(appName);
//跳广告
var adv = text("跳过").findOne(10000);
if(adv != null){
    adv.click();
    sleep(1000);
}
console.info('跳广告')
sleep(1000)
//进入广油易学页面
text(appPath).findOne().parent().click();
console.info("正在进入广油易学页面");
sleep(1000)
//进入已返校学生晨午晚检管理页面
descContains("已返校学生晨午晚检管理").findOne().click();
console.info("正在进入已返校学生晨午晚检管理页面");
sleep(1000)
//进入申请打卡页面
descContains("申请").findOne().click();
console.info("正在进入打卡申请页面");
sleep(5000)
// //根据弹窗判断是否有已经申请
console.info("判断是否已经打卡");
var toastComponent = className("android.widget.Image").findOne(2000);
sleep(2000)
if(toastComponent == null){
    //未打卡
    console.info('未打卡')
    //进行打卡操作
    
}else{
    //已打卡
    console.info("已打卡")
}
//勾选晨午晚检体验
var seleceds = descContains("正常");
var arrs = seleceds.find();
console.info("开始勾选晨午晚检体验");
if(seleceds != null){
    arrs.forEach(item=>{
        console.info("点击控件")
        sleep(1000)
        item.click();
    })
    console.info("勾选晨午晚检体验完成");
    //点击当前健康状况
    console.info("选择当前健康状况");
    descContains("当前健康状况").findOne().click()
    sleep(1000)
    console.info("选择无上述症状");
    descContains("无上述症状").findOne().click()
    sleep(1000)
    console.info("选择确认");
    descContains("确认").findOne().click()
    sleep(1000)
    // console.info("点击定位");
    // var locationBtn = descContains("点我定位").findOne(5000);
    // if(locationBtn != null){
    //     locationBtn.click();
    // }
    // sleep(1000)
}else{
    console.info("未找到控件")
}
//进行打卡
descContains("提交").findOne().click()
sleep(1000)
console.info('打卡完成')
exit();
// console.hide();