
//12-19  更新日志 
/* 1.修复循环功能
2.修复切换小程序
3.
4.
*/
//12-06  更新日志 
/* 1.去掉马上看看广告观看
2.增加屏蔽拼多多、快手广告
3.去除播放检测2，减少去除播放检测1的时间
4.
*/


var p = [], c = [];
//page  0为小程序首页  1为小程序激励页播放中 2为小程序激励页播放完成 3  为广告详情   4为安装页
//page 5为点击后  6详细页返回  7安装页返回
var page = 0;
var n = [], b = 0, num = 0, ss = 0
// 返回
var bak = 0, index, dwnum = 0

var 广告 = [], 小程序 = [], 小程序总数 = 8, 小程序执行数 = 8

//qq挂的个数 可以修改

var QQ = 15, qq = 1
//循环  1 为循环   0不循环  可以修改
var 循环 = 1
//展现数随机  zx_min最小值  zx_max最大值
var zx_min = 8, zx_max = 12
//点击率随机  cc_min最小值  cc_max最大值
var cc_min = 21, cc_max = 25
//点击率数  cs_min最小值  cs_max最大值
var cs_min = 5, cs_max = 8




threads.start(function () {
    //广告清零
    while (true) {

        数组初始化(小程序总数)
        num = 0
        dwnum = 0
        //暂停10秒
        sleep(86400000);

    }
});
threads.start(function () {
    //取消安装
    while (true) {
        while (text("拒绝").exists() || text("我知道了").exists() || (text("相册中选取").exists() && text("取消").exists())) {
            if (text("拒绝").exists()) {
                log("拒绝" + page);
                var st = text("拒绝").findOne()
                st.click()
                sleep(1200)
            }
            else {
                if (text("我知道了").exists()) {
                    var st = text("我知道了").findOne()
                    // st.click()
                    click(st.bounds().centerX(), st.bounds().centerY());

                    sleep(1200)
                } else {
                    if (text("相册中选取").exists() && text("取消").exists()) {
                        var st = text("取消").findOne()
                        st.click()
                        sleep(1200)

                    }
                }

            }


        }
    }
});



threads.start(function () {
    //异常处理提前关闭广告  提示弹出框
    while (true) {
        while (text("继续观看").exists() && num < 20 && num > 0) {
            log("取消确定:" + page);
            var st = text("继续观看").findOne()
            st.click()
            sleep(2600)

        }
    }
});



threads.start(function () {
    //检测视频播放超时

    while (true) {

        if ((page == 5 || page == 2 || page == 3) && num > 20) {
            b = 1
        }
        sleep(800)

    }
});

threads.start(function () {
    //在新线程执行的代码
    var dir = "/sdcard/Android/data/com.tencent.mobileqq/Tencent/TMAssistantSDK/Download/com.tencent.mobileqq/";
    while (true) {

        var jsFiles = files.listDir(dir, function (name) {
            // log(files.isFile(files.join(dir, name)))

            return name.endsWith(".apk") && files.isFile(files.join(dir, name));

        });

        var i = 0
        for (i; i < jsFiles.length; i++) {
            files.remove(files.path(dir + jsFiles[i]))
            log(files.path(dir + jsFiles[i]))
            sleep(random(2000, 3000))
            log(dwnum)
            // i++
            dwnum++
        }

        if ((page == 0 || page == 2 || page == 3) && (text("关闭广告").exists() || text("广告").exists()) && (bak == 2 || bak == 1)) {
            sleep(random(2000, 3000))
            关闭所有广告()
            sleep(random(2000, 3000))

            log("关闭广告  重新点点")
            // var widget=text("=").findOne()   
            // click(widget.bounds().centerX(), widget.bounds().centerY());

        }
    }
});


launchApp("QQ")
sleep(13000)


while (qq <= QQ) {
    if (qq == QQ && 循环 == 1) {
        qq = 1
    }
    log(小程序)
    随机序列(小程序总数, 小程序执行数)
    log("小程序" + 小程序)


    var 展现数 = random(zx_min, zx_max)
    var 点击率 = random(cc_min, cc_max) / 100


    for (var value of 小程序) {
        log("小程序")
        log("小程序" + 小程序)
        switch (value) {
            case 11:
                log("value" + value)
                log("p" + p + "c" + c + "n" + n)
                执行小程序点击("一起来减肥", "运动", "https://m.q.qq.com/a/s/81ee72c0ff940a9d72a43d67c8685784?via=2016_1")
                一起来减肥(value, 展现数, 点击率)

                // 返回qq小程序搜索()
                break;
            case 2:
                log("value" + value)
                执行小程序点击("公积金社保计算器", "观看广告查看结果", "https://m.q.qq.com/a/s/ce5f5f5fa8ac874438d07dbd2ce122e6?via=2016_1")
                通用文本执行(value, 展现数, 点击率, "观看广告查看结果")

                // 返回qq小程序搜索()
                break;
            case 3:
                执行小程序点击("美容小助手", "观看广告查看使用方法>>", "https://m.q.qq.com/a/s/df46d41a22058631853879ac9418f914?via=2016_1")
                通用文本执行(value, 展现数, 点击率, "观看广告查看使用方法>>")
                // 返回qq小程序搜索()
                break;
            case 4:
                执行小程序点击("麒麟美食", "看视频查看完整步骤", "https://m.q.qq.com/a/s/40016dd42b6ba5de9e6c42dce2f72575?via=2016_1")
                看图猜通用(value, 展现数, 点击率)
                break;

            case 5:
                执行小程序点击("戒烟小助手", "首页", "https://m.q.qq.com/a/s/86bf1509ee9541063db7736ba2373a07?via=2016_1")
                戒烟执行(value, 展现数, 点击率)
                // 返回qq小程序搜索()
                break;

            case 6:
                执行小程序点击("麒麟美景", "看视频查看完整步骤", "https://m.q.qq.com/a/s/8a39144d7e0cb4a6874e6b29b6c4d5f6?via=2016_1")
                看图猜通用(value, 展现数, 点击率)
                // 返回qq小程序搜索()
                break;
            case 7:
                执行小程序点击("大熊查拼音", "点击查询拼音", "https://m.q.qq.com/a/s/ee31b857a16703aee64a1d06fe1cbd9f?via=2016_1")
                拼音执行(value, 展现数, 点击率)
                // 返回qq小程序搜索()
                break;
            case 1:
                执行小程序点击("喝酒计算器", "首页", "https://m.q.qq.com/a/s/5b01cf01ba20cf5b131e6a152cef7c60?via=2016_1")
                戒烟执行(value, 展现数, 点击率)
                // 返回qq小程序搜索()
                break;
                   }
    }
    // 搜索返回qq主页()
    切换账号(qq)
    qq++
    // quxiao=0
}

function 数组初始化(小程序数) {
    var i = 1

    while (i <= 小程序数) {
        p[i - 1] = 0;
        c[i - 1] = 0;
        n[i - 1] = 0;
        广告[i - 1] = ["快手极速版", "快手极速版-赚钱", "快手app", "keep", "夸克",
            "腾讯视频", "拼多多", "快手", "小红书", "京东极速版", "苏宁易购", "快手小店", "快手视频"]
        i++

    }
    log(p, n, c)

}


function 随机序列(小程序数, 执行数) {
    小程序 = []
    while (小程序.length < 执行数) {
        var i = random(1, 小程序数)
        if (小程序.indexOf(i) == -1) {
            小程序.push(i)
            log("随机" + i)
        }
    }

}

function base64(str) {
    return java.lang.String(android.util.Base64.encode(java.lang.String(str).getBytes(), 2))
}
function 执行小程序点击(小程序名, 索引, 地址) {
    // 切换硬件()
    toast("执行小程序点击" + 小程序名)
    app.startActivity({
        data: "mqqapi://forward/url?plg_auth=1&url_prefix=" + base64(地址)
    });

    sleep(10000)

    // 搜索打开小程序(小程序名)
    当前执行小程序 = 小程序名
    log("执行小程序点击" + 小程序名)

    // ui.on_mp.setText("小程序名")
    index = 索引
    // text(索引).waitFor()
}
function 看图猜通用(value, 展现数, 点击率) {
    page = 0
    text("首页").waitFor()
    sleep(random(3000, 4000))
    click(366,980) 
    sleep(random(3000, 4000))
    for (var i = 0; i < 展现数; i++) {
        sleep(random(3000, 4000))

        log("开始，展现累积" + ss + "次；现在是第" + qq + "个QQ；本qq设定展现数" + 展现数 + "点击率" + 点击率 + "执行展现" + p[value - 1] + "次；" + "执行点击" + c[value - 1] + "次；" + "实际点击率为" + c[value - 1] / p[value - 1] * 100 + "%,有效下载" + dwnum + "次")
        toast("开始，展现累积" + ss + "次；现在是第" + qq + "个QQ；本qq设定展现数" + 展现数 + "点击率" + 点击率 + "执行展现" + p[value - 1] + "次；" + "执行点击" + c[value - 1] + "次；" + "实际点击率为" + c[value - 1] / p[value - 1] * 100 + "%,有效下载" + dwnum + "次")
        // 触发激励()
        log("脚本开始")
        // sleep(random(5000, 6000))



        // if()
        // sleep(random(1000, 2000))

        if (page == 0) {
            // var widget=text("=").findOne()  
          
            var widget = text("看视频查看完整步骤").findOne()
            click(widget.bounds().centerX(), widget.bounds().centerY());
            page = 5
            log("pang:" + page);

            sleep(8000)
        }
        log("激励页播放开始")
        //播放完成检测
        // textContains("s"||"秒").waitFor();
        检测播放就是否完成(value)
        sleep(random(1000, 3000))

        if (n[value - 1] < 点击率 && id("com.tencent.mobileqq:id/fz").exists() && 广告[value - 1].indexOf(id("com.tencent.mobileqq:id/fz").findOne().text()) == -1) {
            log(id("com.tencent.mobileqq:id/fz").findOne().text())

            广告[value - 1].push(id("com.tencent.mobileqq:id/fz").findOne().text())
            if (text("去下载").exists() || text("点击下载").exists() || text("下载").exists()) {
                点击下载激励(value)
                点击下载返回小程序()

            }
            else {
                log("2222")
                // 检测播放就是否完成2()
                非下载激励返回()
            }

        }
        else {
            //  while(textContains("s").exists()||textContains("秒").exists())
            //    {
            //  sleep(500)
            //      }
            // 检测播放就是否完成2()
            log("3333")
            toast("曝光" + p[value - 1] + ",点击" + c[value - 1] + "当前点击率为" + c[value - 1] / p[value - 1] * 100 + "%,大于35%，不点广告")
            关闭所有广告()
            // toast("点击大于35%返回小程序页" )
            是否返回小程序()
            log("pang:" + page + "bak" + bak);
            sleep(2000)

        }

        log("流程完毕")
        log("bak1" + bak)
        bak = 0
        ss++
    }

}
function 一起来减肥(value, 展现数, 点击率) {
    page = 0
    var widget = text("运动").findOne()
    click(widget.bounds().centerX(), widget.bounds().centerY());
    sleep(random(1000, 2000))
    for (var i = 0; i < 展现数; i++) {
        sleep(random(3000, 4000))

        log("开始，展现累积" + ss + "次；现在是第" + qq + "个QQ；本qq设定展现数" + 展现数 + "点击率" + 点击率 + "执行展现" + p[value - 1] + "次；" + "执行点击" + c[value - 1] + "次；" + "实际点击率为" + c[value - 1] / p[value - 1] * 100 + "%,有效下载" + dwnum + "次")
        toast("开始，展现累积" + ss + "次；现在是第" + qq + "个QQ；本qq设定展现数" + 展现数 + "点击率" + 点击率 + "执行展现" + p[value - 1] + "次；" + "执行点击" + c[value - 1] + "次；" + "实际点击率为" + c[value - 1] / p[value - 1] * 100 + "%,有效下载" + dwnum + "次")
        // 触发激励()
        log("脚本开始")
        // sleep(random(5000, 6000))
if(text("确定").exists() && text("取消").exists())

{
    var widget = text("取消").findOne()
    click(widget.bounds().centerX(), widget.bounds().centerY());
    sleep(random(1000, 2000))
}

        // if()
        // sleep(random(1000, 2000))

        if (page == 0) {
            // var widget=text("=").findOne()  
         
            var widget = textContains("周一").findOne()
            click(widget.bounds().centerX(), widget.bounds().centerY());
            page = 5
            log("pang:" + page);

            sleep(8000)
        }
        log("激励页播放开始")
        //播放完成检测
        // textContains("s"||"秒").waitFor();
        检测播放就是否完成(value)
        sleep(random(1000, 3000))

        if (n[value - 1] < 点击率 && id("com.tencent.mobileqq:id/fz").exists() && 广告[value - 1].indexOf(id("com.tencent.mobileqq:id/fz").findOne().text()) == -1) {
            log(id("com.tencent.mobileqq:id/fz").findOne().text())

            广告[value - 1].push(id("com.tencent.mobileqq:id/fz").findOne().text())
            if (text("去下载").exists() || text("点击下载").exists() || text("下载").exists()) {
                点击下载激励(value)
                点击下载返回小程序()

            }
            else {
                log("2222")
                // 检测播放就是否完成2()
                非下载激励返回()
            }

        }
        else {
            //  while(textContains("s").exists()||textContains("秒").exists())
            //    {
            //  sleep(500)
            //      }
            // 检测播放就是否完成2()
            log("3333")
            toast("曝光" + p[value - 1] + ",点击" + c[value - 1] + "当前点击率为" + c[value - 1] / p[value - 1] * 100 + "%,大于35%，不点广告")
            关闭所有广告()
            // toast("点击大于35%返回小程序页" )
            是否返回小程序()
            log("pang:" + page + "bak" + bak);
            sleep(2000)

        }
        
        var widget = id("com.tencent.mobileqq:id/lv9").findOne()
        click(widget.bounds().centerX(), widget.bounds().centerY());
        sleep(random(2000, 4000))

        log("流程完毕")
        log("bak1" + bak)
        bak = 0
        ss++
    }

}

function 公积金社保计算器(value, 展现数, 点击率) {
    page = 0
    sleep(random(4000, 7000))
    var widget = text("九宫格切图").findOne()
        click(widget.bounds().centerX(), widget.bounds().centerY());
        sleep(random(4000, 7000))
    for (var i = 0; i < 展现数; i++) {
        

        // quxiao=1
        log("开始，展现累积" + ss + "次；现在是第" + qq + "个QQ；本qq设定展现数" + 展现数 + "点击率" + 点击率 + "执行展现" + p[value - 1] + "次；" + "执行点击" + c[value - 1] + "次；" + "实际点击率为" + c[value - 1] / p[value - 1] * 100 + "%,有效下载" + dwnum + "次")
        toast("开始，展现累积" + ss + "次；现在是第" + qq + "个QQ；本qq设定展现数" + 展现数 + "点击率" + 点击率 + "执行展现" + p[value - 1] + "次；" + "执行点击" + c[value - 1] + "次；" + "实际点击率为" + c[value - 1] / p[value - 1] * 100 + "%,有效下载" + dwnum + "次")

        log("脚本开始")
    

        sleep(random(3000, 4000))

        if (page == 0) {
            var widget = text("更换图片").findOne()
            // var widget = className("android.widget.EditText").findOne().parent().child(0).child(0).child(1).child(0).child(0).child(2)
            click(widget.bounds().centerX(), widget.bounds().centerY());
            page = 5
            log("pang:" + page);

            sleep(random(6000, 8000))
        }
        log("激励页播放开始")
        //播放完成检测
        // textContains("s"||"秒").waitFor();
        检测播放就是否完成(value)

        if (n[value - 1] < 点击率 && id("com.tencent.mobileqq:id/fz").exists() && 广告[value - 1].indexOf(id("com.tencent.mobileqq:id/fz").findOne().text()) == -1) {
            log(id("com.tencent.mobileqq:id/fz").findOne().text())

            广告[value - 1].push(id("com.tencent.mobileqq:id/fz").findOne().text())
            if (text("去下载").exists() || text("点击下载").exists() || text("下载").exists()) {
                点击下载激励(value)
                点击下载返回小程序()

            }
            else {
                // if (text("马上看看").exists()) {
                //     马上看看()
                //     点击下载返回小程序()
                // }
                // else {
                log("2222")
                // 检测播放就是否完成2()
                非下载激励返回()
                // }
            }

        }
        else {
            //  while(textContains("s").exists()||textContains("秒").exists())
            //    {
            //  sleep(500)
            //      }
            // 检测播放就是否完成2()
            log("3333")
            toast("曝光" + p[value - 1] + ",点击" + c[value - 1] + "当前点击率为" + c[value - 1] / p[value - 1] * 100 + "%,大于35%，不点广告")
            关闭所有广告()
            // toast("点击大于35%返回小程序页" )
            是否返回小程序()
            log("pang:" + page + "bak" + bak);
            sleep(random(2000, 3000))

        }

        sleep(random(1000, 2000))
        log("流程完毕")
        log("bak1" + bak)
        bak = 0
        ss++
    }


    var widget = id("com.tencent.mobileqq:id/lv9").findOne()
    click(widget.bounds().centerX(), widget.bounds().centerY());
    sleep(random(2000, 3000))

}




function 戒烟执行(value, 展现数, 点击率) {
    page = 0
    var ii = 2
text("首页").waitFor()
    sleep(random(7000, 8000))
    // quxiao=1
    for (var i = 0; i < 展现数; i++) {
        log("开始，展现累积" + ss + "次；现在是第" + qq + "个QQ；本qq设定展现数" + 展现数 + "点击率" + 点击率 + "执行展现" + p[value - 1] + "次；" + "执行点击" + c[value - 1] + "次；" + "实际点击率为" + c[value - 1] / p[value - 1] * 100 + "%,有效下载" + dwnum + "次")
        toast("开始，展现累积" + ss + "次；现在是第" + qq + "个QQ；本qq设定展现数" + 展现数 + "点击率" + 点击率 + "执行展现" + p[value - 1] + "次；" + "执行点击" + c[value - 1] + "次；" + "实际点击率为" + c[value - 1] / p[value - 1] * 100 + "%,有效下载" + dwnum + "次")

        log("脚本开始")
      
        // if()
        sleep(random(2000, 3000))

        if (page == 0) {
            // var widget=text("=").findOne()   
            click(366,980) 


            page = 5
            log("pang:" + page);

            // sleep(random(6000, 8000))
        }
        log("激励页播放开始")
        //播放完成检测
        // textContains("s"||"秒").waitFor();
        检测播放就是否完成(value)

        if (n[value - 1] < 点击率 && id("com.tencent.mobileqq:id/fz").exists() && 广告[value - 1].indexOf(id("com.tencent.mobileqq:id/fz").findOne().text()) == -1) {
            log(id("com.tencent.mobileqq:id/fz").findOne().text())

            广告[value - 1].push(id("com.tencent.mobileqq:id/fz").findOne().text())
            log("1111")
            if (text("去下载").exists() || text("点击下载").exists() || text("下载").exists()) {
                点击下载激励(value)
                点击下载返回小程序()

            }
            else {
                // if (text("马上看看").exists()) {
                //     马上看看()
                //     点击下载返回小程序()
                // }
                // else {
                log("2222")
                // 检测播放就是否完成2()
                非下载激励返回()
                // }
            }

        }
        else {
            //  while(textContains("s").exists()||textContains("秒").exists())
            //    {
            //  sleep(500)
            //      }
            // 检测播放就是否完成2()
            log("3333")
            toast("曝光" + p[value - 1] + ",点击" + c[value - 1] + "当前点击率为" + c[value - 1] / p[value - 1] * 100 + "%,大于35%，不点广告")
            关闭所有广告()
            // toast("点击大于35%返回小程序页" )
            是否返回小程序()
            log("pang:" + page + "bak" + bak);
            sleep(random(4000, 5000))

        }

        log("流程完毕")
        log("bak1" + bak)
        bak = 0
        ss++

    }
}

function 拼音执行(value, 展现数, 点击率) {
    page = 0
    sleep(random(5000, 6000))
    // quxiao=1

    for (var i = 0; i < 展现数; i++) {
        log("开始，展现累积" + ss + "次；现在是第" + qq + "个QQ；本qq设定展现数" + 展现数 + "点击率" + 点击率 + "执行展现" + p[value - 1] + "次；" + "执行点击" + c[value - 1] + "次；" + "实际点击率为" + c[value - 1] / p[value - 1] * 100 + "%,有效下载" + dwnum + "次")
        toast("开始，展现累积" + ss + "次；现在是第" + qq + "个QQ；本qq设定展现数" + 展现数 + "点击率" + 点击率 + "执行展现" + p[value - 1] + "次；" + "执行点击" + c[value - 1] + "次；" + "实际点击率为" + c[value - 1] / p[value - 1] * 100 + "%,有效下载" + dwnum + "次")

        log("脚本开始")
       
        // if()
        sleep(random(2000, 3000))

        if (page == 0) {
            // var widget=text("=").findOne()   
            var widget = text("点击查询拼音").findOne();

            点击控件(widget, 3000, 2000)
            if (text("确定").exists()&&text("取消").exists())
            {
                var widget = text("确定").findOne()
                点击控件(widget, 6000, 8000)
            }
            page = 5
            log("pang:" + page);


        }
        log("激励页播放开始")
        //播放完成检测
        // textContains("s"||"秒").waitFor();
        检测播放就是否完成(value)

        if (n[value - 1] < 点击率 && id("com.tencent.mobileqq:id/fz").exists() && 广告[value - 1].indexOf(id("com.tencent.mobileqq:id/fz").findOne().text()) == -1) {
            log(id("com.tencent.mobileqq:id/fz").findOne().text())

            广告[value - 1].push(id("com.tencent.mobileqq:id/fz").findOne().text())
            if (text("去下载").exists() || text("点击下载").exists() || text("下载").exists()) {
                点击下载激励(value)
                点击下载返回小程序()

            }
            else {
                // if (text("马上看看").exists()) {
                //     马上看看()
                //     点击下载返回小程序()
                // }
                // else {
                log("2222")
                // 检测播放就是否完成2()
                非下载激励返回()
                // }

            }

        }
        else {
            //  while(textContains("s").exists()||textContains("秒").exists())
            //    {
            //  sleep(500)
            //      }
            // 检测播放就是否完成2()
            log("3333")
            toast("曝光" + p + ",点击" + c + "当前点击率为" + c / p * 100 + "%,大于35%，不点广告")
            关闭所有广告()
            // toast("点击大于35%返回小程序页" )
            是否返回小程序()
            log("pang:" + page + "bak" + bak);
            sleep(random(4000, 5000))

        }

        log("流程完毕")
        log("bak1" + bak)
        bak = 0
        ss++
    }

}
function 通用文本执行(value, 展现数, 点击率, 文本) {

    page = 0
    sleep(random(5000, 6000))
    for (var i = 0; i < 展现数; i++) {
        log("开始，展现累积" + ss + "次；现在是第" + qq + "个QQ；本qq设定展现数" + 展现数 + "点击率" + 点击率 + "执行展现" + p[value - 1] + "次；" + "执行点击" + c[value - 1] + "次；" + "实际点击率为" + c[value - 1] / p[value - 1] * 100 + "%,有效下载" + dwnum + "次")
        toast("开始，展现累积" + ss + "次；现在是第" + qq + "个QQ；本qq设定展现数" + 展现数 + "点击率" + 点击率 + "执行展现" + p[value - 1] + "次；" + "执行点击" + c[value - 1] + "次；" + "实际点击率为" + c[value - 1] / p[value - 1] * 100 + "%,有效下载" + dwnum + "次")
        if(text("确定").exists() && text("取消").exists())

        {
            var widget = text("取消").findOne()
            click(widget.bounds().centerX(), widget.bounds().centerY());
            sleep(random(1000, 2000))
        }
        
        触发激励(文本)

        log("激励页播放开始")

        检测播放就是否完成(value)

        if (n[value - 1] < 点击率 && id("com.tencent.mobileqq:id/fz").exists() && 广告[value - 1].indexOf(id("com.tencent.mobileqq:id/fz").findOne().text()) == -1) {

            广告[value - 1].push(id("com.tencent.mobileqq:id/fz").findOne().text())
            if (text("去下载").exists() || text("点击下载").exists() || text("下载").exists()) {
                点击下载激励(value)
                点击下载返回小程序()

            }
            else {

                // if (text("马上看看").exists()) {
                //     马上看看()
                //     点击下载返回小程序()
                // }
                // else {
                log("2222")
                // 检测播放就是否完成2()
                非下载激励返回()
                // }
            }

        }
        else {
            //  while(textContains("s").exists()||textContains("秒").exists())
            //    {
            //  sleep(500)
            //      }
            // 检测播放就是否完成2()
            log("3333")
            toast("曝光" + p[value - 1] + ",点击" + c[value - 1] + "当前点击率为" + c[value - 1] / p[value - 1] * 100 + "%,大于35%，不点广告")
            关闭所有广告()
            // toast("点击大于35%返回小程序页" )
            是否返回小程序()
            log("pang:" + page + "bak" + bak);
            sleep(random(3000, 5000))

        }
        var widget = id("com.tencent.mobileqq:id/lv9").findOne()
        click(widget.bounds().centerX(), widget.bounds().centerY());
        sleep(random(2000, 4000))
        log("流程完毕")
        log("bak1" + bak)
        bak = 0
        ss++
        //返回小程序首页

    }
}

function 触发激励(cf) {


    log("脚本开始")
    if (text("关闭广告").exists() || text("广告").exists()) {
        关闭所有广告()
    } else {
        log("主页")
    }
    // if()
    sleep(random(4000, 5000))

    if (page == 0) {
        if (text(cf).exists()) {
            var widget = text(cf).findOne()
            // var widget=text("男").findOne().parent().child(1);

            click(widget.bounds().centerX(), widget.bounds().centerY());
            page = 5
            log("pang:" + page);

            sleep(random(6000, 8000))
        }
    }
}

function 检测播放就是否完成(value) {
    if (textContains("广告").exists()) {
        if (textContains("倒计时").findOne(8000)) {

        }
        else {
            textContains("浏览").findOne(8000)
        }
    }
    while (textContains("倒计时").exists() || textContains("浏览").exists()) {
        sleep(random(2000, 3000))

        log("pang:" + page);
        log(num)
        log("激励页播放………1")
        if (b == 1) {
            b = 0
            break
        }
        num++
    }
    num = 0
    sleep(random(1000, 3000))
    toast("激励页播放完成")
    page = 2
    log("pang:" + page);

    log("p" + p[value - 1])

    log("p[value-1]" + p[value - 1])
    p[value - 1] = p[value - 1] + 1;
    n[value - 1] = c[value - 1] / p[value - 1];
}

function 检测播放就是否完成2() {
    // textContains("s"||"秒").waitFor();
    if (textContains("倒计时").exists() || textContains("浏览").exists()) {
        while (textContains("倒计时").exists() || textContains("浏览").exists()) {
            sleep(random(2000, 3000))

            log("pang:" + page);
            log(num)
            log("激励页播放………1")
            if (b == 1) {
                b = 0
                break
            }


            num++
        }
    }

    num = 0
    toast("激励页播放完成2")
}
function 点击下载激励(value) {

    log(广告)
    检测播放就是否完成2()
    if (page == 2) {

        点击下载()
        c[value - 1]++;
        toast("激励下载页点击完成")
        sleep(random(4000, 8000))
        // page=3
        log("pang:" + page);
    } else {
        log("激励下载页点击失败")
        toast("激励下载页点击失败")
        sleep(random(2000, 4000))
    }

    sleep(random(3000, 5000))

}


function 点击下载返回小程序() {
    log("点击下载返")
    if (text("广告").exists()) {
        log("返回小程序页")
        关闭所有广告()
        是否返回小程序()

        log("点击下载返回小程序:" + page);
        sleep(random(1000, 3000))

        // log("bak2"+bak)
    }
    else {
        激励详细页返回()

        sleep(random(2000, 3000));
        if (bak = 3) {
            back()
        }
        toast("点击下载返回小程序")
        log("点击下载返回小程序")
        关闭所有广告()
        是否返回小程序()



        log("pang:" + page);

        log("bak3" + bak)
        // log("曝光" + p + ",点击" + c + "，点击率为:" + c / p * 100 + "%");
        sleep(random(3000, 4000))
    }
}
function 非下载激励返回() {


    log("关闭广告")

    关闭所有广告()
    log("非下载激励返回返回小程序页")
    是否返回小程序()
    bak = 1
    log("pang:" + page);
    sleep(random(2000, 5000))


    log("bak4" + bak)
}


function 点击下载() {

    // if(

    // ){
    if (text("去下载").exists()) {
        // toast("当前点击率为" + n * 100 + "%,35%，准备点击广告")
        var widget = text("去下载").findOne(10000);
        点击控件(widget, 4000, 6000)


        if (text("下载").exists()) {
            log("下载")
            var widget = text("下载").findOne();
            点击控件(widget, 4000, 6000)
            // log("下载完成" + widget)
        }
        else {
            if (text("查看更多内容,下载").exists()) {
                log("查看更多内容,下载")
                var widget = text("查看更多内容,下载").findOne();
                点击控件(widget, 4000, 6000)
                // log("查看更多内容,下载完成" + widget)
            }
            else {
                if (text("继续").exists()) {
                    log("继续")
                    var widget = text("继续").findOne();
                    点击控件(widget, 4000, 6000)
                    // log("继续,下载完成" + widget)
                } else {
                    if (text("立即下载").exists() || text("极速下载").exists()) {
                        var widget = text("立即下载").findOne(2000);
                        点击控件(widget, 4000, 6000)
                        var widget = text("极速下载").findOne(2000);
                        点击控件(widget, 4000, 6000)
                    }
                    else {
                        if (textContains("下载中").exists() || textContains("已下载").exists()) {
                            激励详细页返回()
                        }
                    }

                }


            }
        }
    }
    else {
        if (text("点击下载").exists()) {
            // toast("当前点击率为" + n * 100 + "%,35%，准备点击广告")
            var widget = text("点击下载").findOne(10000);
            点击控件(widget, 4000, 6000)
            if (text("下载").exists()) {
                log("下载")
                var widget = text("下载").findOne();
                点击控件(widget, 4000, 6000)
                // log("下载完成" + widget)
            }
            else {
                if (text("查看更多内容,下载").exists()) {
                    var widget = text("查看更多内容,下载").findOne();
                    点击控件(widget, 4000, 6000)
                    // log("查看更多内容,下载完成" + widget)
                }
                else {
                    if (text("继续").exists()) {

                        var widget = text("继续").findOne();
                        点击控件(widget, 4000, 6000)
                        // log("继续,下载完成" + widget)
                    } else {
                        if (text("立即下载").exists() || text("极速下载").exists()) {
                            var widget = text("立即下载").findOne(2000);
                            点击控件(widget, 4000, 6000)
                            var widget = text("极速下载").findOne(2000);
                            点击控件(widget, 4000, 6000)
                        }
                        else {
                            if (textContains("下载中").exists() || textContains("已下载").exists()) {
                                激励详细页返回()
                            }
                        }
                    }


                }
            }
        }
        else {
            if (text("下载").exists()) {
                toast("当前点击率为" + n * 100 + "%,35%，准备点击广告")
                var widget = text("下载").findOne(10000);
                点击控件(widget, 4000, 6000)
                log("下载")
                if (text("下载").exists()) {
                    var widget = text("下载").findOne();
                    点击控件(widget, 4000, 6000)
                    // log("下载完成" + widget)
                }
                else {
                    if (text("查看更多内容,下载").exists()) {
                        var widget = text("查看更多内容,下载").findOne();
                        点击控件(widget, 4000, 6000)
                        // log("查看更多内容,下载,下载完成" + widget)
                    }
                    else {
                        if (text("继续").exists()) {

                            var widget = text("继续").findOne();
                            点击控件(widget, 4000, 6000)
                            // log("继续,下载完成" + widget)
                        } else {
                            if (text("立即下载").exists() || text("极速下载").exists()) {
                                var widget = text("立即下载").findOne(2000);
                                点击控件(widget, 4000, 6000)
                                var widget = text("极速下载").findOne(2000);
                                点击控件(widget, 4000, 6000)
                            }
                            else {
                                if (textContains("下载中").exists() || textContains("已下载").exists()) {
                                    激励详细页返回()
                                }
                            }
                        }


                    }
                }

            }
            else {
                toast("点击失败")
            }

        }

    }


    page = 3
    // }

}
function 激励详细页返回() {
    sleep(random(1000, 3000))
    if (id("ivTitleBtnLeft").exists()) {
        log("关闭导航详细页")
        var widget = id("ivTitleBtnLeft").findOne(8000)

        点击控件(widget, 1000, 3000)
        page = 7
    }
    else {
        if (className("android.widget.ImageView").depth(9).findOne(10000) != null) {
            log("关闭详细页")
            var widget = className("android.widget.ImageView").depth(9).findOne().parent()
            点击控件(widget, 1000, 3000)
            page = 7
        }
        else {

            bak = 3
            log("关闭详细页失败")
        }

    }


}


function 是否返回小程序() {
    log(index)
    if (text(index).exists()) {
        page = 0
        bak = 0
        log("pang:" + page + "bak" + bak);
        // return 1
    }
    else {
        toast(" 点击下载返回小程序未成功2")
        bak = 1
        sleep(random(1000, 3000))
        // return 0
    }
}


function 关闭所有广告() {
    click(2, 235)
    sleep(2000)
    // if(text("已可领取奖励").exists()&&(page==0||page==2||page==3||page==7))
    if (text("广告").exists()) {
        log("关闭小图广告:" + page);
        if (className("android.view.View").clickable(true).depth(6).exists()) {
            var widget = className("android.view.View").clickable(true).depth(6).findOne(8000)
            点击控件(widget, 1300, 3000)
            page = 0
            是否返回小程序()
        }
        else {
            if (desc("关闭广告").exists()) {
                var widget = desc("关闭广告").findOne();
                // log("ss")
                点击控件(widget, 3000, 4000)
                page = 0
                是否返回小程序()
            } else {
                back()
                page = 0
                是否返回小程序()
            }

        }
    }
    else {
        // if(text("关闭广告").exists()&&(page==0||page==2||page==3||page==7))
        if (text("关闭广告").exists()) {
            log("关闭广告广告:" + page);
            var widget = text("关闭广告").findOne(8000)

            点击控件(widget, 2000, 4000)
            page = 0
            是否返回小程序()
        }
        else {
            bak = 2
            log("关闭所有广告失败")
            toast("关闭所有广告失败")
            sleep(random(3000, 5000))
            重新关闭所有广告()
            log("关闭广告广告112:" + page);
        }
    }

}

function 重新关闭所有广告() {

    //获取焦点
    click(2, 235)
    sleep(2000)
    if (bak == 3) {
        激励详细页返回()
    } else {
        log("非激励返回错位")
    }


    if (text("广告").exists() && (page == 2 || page == 3)) {
        log("关闭小图广告:" + page);
        if (className("android.view.View").clickable(true).depth(6).findOne(8000)) {
            var widget = className("android.view.View").clickable(true).depth(6).findOne(8000)
            点击控件(widget, 1300, 3000)
            page = 0
            是否返回小程序()
        }
        else {
            if (desc("关闭广告").exists()) {
                var widget = desc("关闭广告").findOne();
                // log("ss")
                点击控件(widget, 4000, 6000)

                page = 0
                是否返回小程序()
            } else {
                back()
                page = 0
                是否返回小程序()
            }

        }
    }
    else {
        if (text("关闭广告").exists() && (page == 2 || page == 3)) {
            log("关闭广告广告:" + page);
            var widget = text("关闭广告").findOne(5000)

            点击控件(widget, 2000, 3000)
            page = 0
            是否返回小程序()
        }
        else {
            bak = 2
            log("关闭所有广告失败")
            toast("关闭所有广告失败2")
            log("关闭广告广告12:" + page);
            sleep(random(3000, 4000))

        }
    }

}

function 切换账号(num) {

    launchApp("QQ")
    text("消息").waitFor()
    sleep(random(4000, 6000))
    var 图标 = id("com.tencent.mobileqq:id/ba1").findOne()
    //点击头像

    点击控件(图标, 4000, 5000)
    var 设置 = id("com.tencent.mobileqq:id/settings").findOne()
    点击控件(设置, 4000, 5000)
    var 切换 = id("com.tencent.mobileqq:id/account_switch").findOne()
    点击控件(切换, 4000, 5000)
    if (num <= 11) {
        var 账号 = id("com.tencent.mobileqq:id/dq8").findOnce(num)
        点击控件(账号, 4000, 5000)
    }
    else {
        var ls = id("com.tencent.mobileqq:id/dq8").findOnce(10)
        var cc = ls.bounds().bottom - ls.bounds().top
        swipe(ls.bounds().centerX(), ls.bounds().centerY(), ls.bounds().centerX(), ls.bounds().centerY() - cc * 10, random(2000, 3000));
        var 账号 = id("com.tencent.mobileqq:id/dq8").findOnce(num - 10)
        点击控件(账号, 4000, 5000)
    }

    var widget = id("com.tencent.mobileqq:id/ivTitleBtnLeft").findOne()
    点击控件(widget, 4000, 5000)
    var widget = id("com.tencent.mobileqq:id/ivTitleBtnLeft").findOne()
    点击控件(widget, 4000, 5000)
    var widget = id("com.tencent.mobileqq:id/a4a").findOne()
    点击控件(widget, 4000, 5000)
    text("消息").waitFor()
}
function 打开小程序搜索() {
    sleep(random(5000, 7000))
    // desc("搜索").waitFor()
    var widget = text("搜索").findOne(3000);
    点击控件(widget, 4000, 6000)
    var widget = desc("搜索").findOne(3000);
    // log("ss")
    点击控件(widget, 4000, 6000)
    var widget = id("com.tencent.mobileqq:id/kag").findOne(5000)
    log("ss")
    点击控件(widget, 4000, 6000)
    if (!text("小程序").exists()) {
        var widget = id("com.tencent.mobileqq:id/kag").findOne()
        log("ss")
        点击控件(widget, 4000, 6000)
        if (!text("小程序").exists()) {
            toast("点击搜索失败")
        }
    }
    log("s222s")
    var widget = text("小程序").findOne()
    sleep(random(3000, 4000))
    click(widget.bounds().centerX(), widget.bounds().centerY());
    sleep(random(3000, 4000))
}
function 搜索打开小程序(str) {
    if (id("com.tencent.mobileqq:id/n_3").exists()) {
        var widget = id("com.tencent.mobileqq:id/n_3").findOne()
        // click(widget.bounds().centerX(), widget.bounds().centerY());
        点击控件(widget, 2000, 3000)
    }
    setText(str)
    sleep(random(10000, 12000))
    if (text("打开").exists()) {
        var widget = text("打开").findOne()
        点击控件(widget, 2000, 3000)
    } else {
        setText(str)
        sleep(random(7000, 8000))
        if (text("打开").exists()) {
            var widget = text("打开").findOne()
            click(widget.bounds().centerX(), widget.bounds().centerY());
        }
        else { toast("打开小程序失败，检查网络") }
    }
    sleep(28000)
}

function 打开小程序(str) {
    sleep(random(5000, 7000))
    // desc("搜索").waitFor()
    var widget = text("搜索").findOne(3000);
    点击控件(widget, 4000, 6000)
    var widget = desc("搜索").findOne(3000);
    // log("ss")
    点击控件(widget, 4000, 6000)
    var widget = id("com.tencent.mobileqq:id/kag").findOne(5000)
    log("ss")
    点击控件(widget, 4000, 6000)
    if (!text("小程序").exists()) {
        var widget = id("com.tencent.mobileqq:id/kag").findOne()
        log("ss")
        点击控件(widget, 4000, 6000)
        if (!text("小程序").exists()) {
            toast("点击搜索失败")
        }
    }
    log("s222s")
    var widget = text("小程序").findOne()
    sleep(random(3000, 4000))
    click(widget.bounds().centerX(), widget.bounds().centerY());
    sleep(random(3000, 4000))
    // text("取消").waitFor()
    setText(str)
    sleep(random(10000, 12000))
    if (text("打开").exists()) {
        var widget = text("打开").findOne()
        点击控件(widget, 2000, 3000)
    } else {
        setText(str)
        sleep(random(4000, 6000))
        if (text("打开").exists()) {
            var widget = text("打开").findOne()
            click(widget.bounds().centerX(), widget.bounds().centerY());
        }
        else { toast("打开小程序失败，检查网络") }
    }
    sleep(28000)
    // desc("关闭").waitFor()

}
function 随机翻滚(tt) {
    a = device.width;
    b = device.height;
    var times = 1
    while (true) {
        var c = random(0, 6);
        sleep(random(4000, 6000));

        if (c == 0) {
            swipe(random(a / 3, a * 2 / 3), b / 3 * 1, random(a / 3, a * 2 / 3), b / 3 * 2, random(2000, 3000));
            times++


        } else {
            swipe(random(a / 3, a * 2 / 3), b / 3 * 2, random(a / 3, a * 2 / 3), b / 3 * 1, random(2000, 4000));
            times = times + 1

        }
        if (times == tt) {
            break
        }
    }

}
function 马上看看() {

    var widget = text("马上看看").findOne();
    toast("当前点击率为" + n * 100 + "%,小于25%， 准备点击广告")
    sleep(random(2000, 3000))
    click(widget.bounds().centerX(), widget.bounds().centerY());
    随机翻滚(4)
    sleep(random(2000, 3000))
    c++
    page = 3
    dwnum++
}
function 点击控件(控件, 开始时间, 结束时间) {
    if (控件 != null) {
        click(控件.bounds().centerX(), 控件.bounds().centerY());
        sleep(random(开始时间, 结束时间))
    }
    else {
        toast("点击失败")
        sleep(random(1000, 2000))
    }
}

function 重启小程序() {
    var 更多 = desc("更多").findOne()

    更多.click()
    sleep(3011)
    var 重启小程序 = text("重启小程序").findOne()
    // log(重启小程序)
    重启小程序.parent().click()
    sleep(8011)
}
function 切换硬件() {


    sleep(2000)
    launchApp("抹机王")
    sleep(4000)
    var 图标 = id("com.yztc.studio.plugin:id/wipedev_btn_wipe").findOne()
    click(图标.bounds().centerX(), 图标.bounds().centerY());
    sleep(4000)
    var 图标 = id("com.yztc.studio.plugin:id/wipe_task_tv_msg").findOne()
    click(图标.bounds().centerX(), 图标.bounds().centerY());
    sleep(4000)
    launchApp("QQ")
    sleep(4000)
    text("消息").waitFor()
}