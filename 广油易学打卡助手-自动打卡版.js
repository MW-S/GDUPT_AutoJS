importClass(android.location.LocationManager);
importClass(android.content.Context);

console.show();
device.wakeUpIfNeeded();
sleep(500)
swipe(500,1700,500,1200,500)
sleep(1000)
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
if (auto.service == null) {
    toast("请开启脚本的无障碍服务");
    auto.waitFor();
}
// toast('Hello, Auto.js');
console.show();
console.info('开始打卡');
var appName = "易班";
var appPath = "广油易学";
console.info('正在进入APP');
launchApp(appName);
//跳广告
var ad_skip = descContains("跳过").findOne(10000);
//若在text中无法找到则从desc中查找
ad_skip = ad_skip != null ? ad_skip : textContains("跳过").findOnce()
if(ad_skip != null){
    ad_skip.click();
    sleep(1000);
}
console.info('跳广告')
sleep(1000)
//进入广油易学页面
console.info("等待组件出现");
text(appPath).waitFor();
console.info("组件已出现");
var gdupt_easy_lean = text(appPath).findOne(3000);
//gdupt_easy_lean = gdupt_easy_lean != null? gdupt_easy_lean: desc(appPath).findOne();
gdupt_easy_lean.parent().click();
console.info("正在进入广油易学页面");
//进入已返校学生晨午晚检管理页面
console.info("点击学生晨午晚检管理");
console.info("等待组件出现");
//descContains("学生晨午晚检管理").waitFor();
var checke_btn = descContains("学生晨午晚检管理").findOne(60000);
//console.info("从text中查找");
checke_btn = checke_btn != null ? checke_btn : textContains("学生晨午晚检管理").findOne(60000);
console.info("组件已经出现");
checke_btn.click();
console.info("正在进入已返校学生晨午晚检管理页面");
sleep(1000)
//进入申请打卡页面
console.info("等待组件出现");
//descContains("申请").waitFor();
//console.info("组件已出现");
var apply_btn = descContains("申请").findOne(60000);
apply_btn = apply_btn != null ? apply_btn : textContains("申请").findOne(60000);
console.info("组件已出现")
apply_btn.click();
console.info("正在进入打卡申请页面");
//根据弹窗判断是否有已经申请
console.info("判断是否已经打卡");
var isClock = descContains("已经申请").findOne(5000);
if(isClock == null){
    //未打卡
    console.info('未打卡')
    //进行打卡操作
}else{
    //已打卡
    console.info("今日已打卡，退出程序")
    closeApp(appName);
    launchApp("Auto.js");
    console.clear()
    console.hide();
    Power();
    exit();
}
sleep(3000);
//勾选晨午晚检体验
var seleceds = descContains("正常");
console.info("等待组件出现");
seleceds.waitFor();
console.info("组件已出现");
var arrs = seleceds.find();
console.info("开始勾选晨午晚检体验");
if(seleceds != null){
    arrs.forEach(item=>{
        console.info("点击控件")
        sleep(1000);
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
    console.info("点击定位");
    var locationBtn = descContains("点我定位").findOne(5000);
    if(locationBtn != null){
        locationBtn.click();
     }
     sleep(1000)
}else{
    console.info("未找到控件")
}
//进行打卡
console.info("提交信息");
descContains("提交").findOne().click()
sleep(2000);
console.info("点击确认");
//由于通过desc无法精确判断，因此直接通过层次判断
console.info(descContains("确认").indexInParent(2).findOne());
// descContains("确认").indexInParent(2).findOne().click()
console.info("等待组件出现");
descContains("确认").waitFor();
console.info("组件已出现");
descContains("确认").indexInParent(2).findOne().click();
sleep(1000)
console.info('打卡完成')
closeApp(appName);
launchApp("Auto.js")
console.clear()
console.hide()
Power();
exit();
// console.hide();

function closeApp(appName){
    var sh = new Shell(true);
    sh.exec("am force-stop " +  app.getPackageName(appName) )
    sleep(3000)
    sh.exit;
    }