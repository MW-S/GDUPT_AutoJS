console.show();
descContains("申请").findOne().click();
console.info("正在进入打卡申请页面");
//根据弹窗判断是否有已经申请
console.info("判断是否已经打卡");
var isClock = descContains("已经申请").findOne(5000);
if(isClock != null){
    console.info("今日已经申请，退出程序")
    exit();
}