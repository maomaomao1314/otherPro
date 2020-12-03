
var p=0,c=0;
//page  0为小程序首页  1为小程序激励页播放中 2为小程序激励页播放完成 3  为广告详情   4为安装页
//page 5为点击后  6详细页返回  7安装页返回
var page=0;
var n=0
var b=0
var num=0
var  ss=0
// 返回
var  bak=0
threads.start(function(){
    //取消安装
    while(true){
    while(textContains("取消").exists()){
        log("取消安装pang:"+page);
        var st= text("取消").findOne()
        st.click()
        // sleep(100)
    }
}
});
threads.start(function(){
    //异常处理提前关闭广告  提示弹出框
    while(true){
    while(text("继续观看").exists()){
        log("取消确定:"+page);
        var st= text("继续观看").findOne()
        st.click()
        sleep(100)
    }
}
});

threads.start( function(){
    //在新线程执行的代码
    while(true){
    while(text("确定").exists()){
        log("取消确定:"+page);
        var st= text("确定").findOne()
        st.click()
        sleep(100)
    }
}
});

threads.start(function(){
    //检测视频播放超时
    
    while(true){
    
        if((page==5||page==2||page==3)&&num>20)
        {
            b=1
        }
        sleep(100)

}
});



threads.start(function(){
    //在新线程执行的代码
    while(true){
        if((page==0||page==2||page==3)&&(text("关闭广告").exists()||text("广告").exists())&&bak==1)
        {
            sleep(1000)
            关闭所有广告()
            sleep(1000)        
            log("关闭广告  重新点点")
            关闭所有广告()
// var widget=text("=").findOne()   
// click(widget.bounds().centerX(), widget.bounds().centerY());

        }
}
});


threads.start(function(){
    //在新线程执行的代码
    while(true){
        if((page==2||page==3)&&(text("关闭广告").exists()||text("广告").exists())&&bak==2)
        {
            sleep(1000)
            关闭所有广告()
            sleep(1000)
           
         log("关闭广告  重新点点")
// var widget=text("=").findOne()   
// click(widget.bounds().centerX(), widget.bounds().centerY());

        }
}
});

while(c<11)
{

    log("c的数据"+c)
   toast("开始脚本,已执行"+ss)
    触发激励()
    log("激励页播放开始")
    //播放完成检测
    // textContains("s"||"秒").waitFor();
    检测播放就是否完成()
    
    if(n<0.35)
    {    log("1111")
        if(text("去下载").exists()||text("点击下载").exists()||text("下载").exists()){
        点击下载激励()
        点击下载返回小程序()
             
         }
        else
        {    
        log("2222")
        检测播放就是否完成2()
        非下载激励返回()
         }

     }
     else
     {   
        //  while(textContains("s").exists()||textContains("秒").exists())
        //    {
        //  sleep(500)
        //      }
        检测播放就是否完成2()
         log("3333")
        toast("曝光"+p+",点击"+c+"当前点击率为"+c/p*100+"%,大于35%，不点广告")
        关闭所有广告()
        // toast("点击大于35%返回小程序页" )
        是否返回小程序()
        log("pang:"+page+"bak"+bak);
              sleep(4000)
              
     }
    
    log("流程完毕")
    log("bak1"+bak)
    bak=0
     ss++

}

function  触发激励(){


log("脚本开始")
if(text("关闭广告").exists()||text("广告").exists())
{
    关闭所有广告()
}
// if()
sleep(2000)

if(page==0)
{
var widget=text("点击查询拼音").findOne()   
// var widget=text("男").findOne().parent().child(1);

click(widget.bounds().centerX(), widget.bounds().centerY());
page =5
log("pang:"+page);

sleep(6000)
}
}

function  检测播放就是否完成()
{
    textContains("广告").waitFor();
    while(textContains("倒计时").exists()||textContains("浏览").exists())
    { sleep(2000)
       
        log("pang:"+page);
        log(num)
        log("激励页播放………1")
        if(b==1)
        {
            b=0
            break
        }
        
        
        num++
    }
    
    num=0
    
    toast("激励页播放完成")
    page=2
    log("pang:"+page);
    sleep(2000)
    p=p+1;
    n=c/p;
}

function  检测播放就是否完成2()
{
    // textContains("s"||"秒").waitFor();
    while(textContains("倒计时").exists()||textContains("浏览").exists())
    { sleep(2000)
       
        log("pang:"+page);
        log(num)
        log("激励页播放………1")
        if(b==1)
        {
            b=0
            break
        }
        
        
        num++
    }
    
    num=0
    
    toast("激励页播放完成")
  
}
function  点击下载激励(){
    // while(textContains("s").exists()||textContains("秒").exists())
    // {
    //     sleep(500)
    //     log("激励页播放未完成")
    // }
    检测播放就是否完成2()
    if(page==2){
     
            点击下载()
            c++; 
      toast("激励下载页点击完成")
    sleep(2000)
    // page=3
    log("pang:"+page);
     }else
     {
         log("激励下载页点击失败")
         toast("激励下载页点击失败")
         sleep(3000);
     }
      
     sleep(3000);
      
}


function  点击下载返回小程序()
{
    if (text("广告").exists()){
        log("返回小程序页")
          关闭所有广告()
          是否返回小程序()
    
        log("点击下载返回小程序:"+page);
        sleep(1000);
        
        // log("bak2"+bak)
    }
    else{    
            激励详细页返回()
           sleep(2000);
            toast("点击下载返回小程序")
            log("点击下载返回小程序")
            关闭所有广告()
            是否返回小程序()
        
    
             
    log("pang:"+page);
    
    log("bak3"+bak)
    log("曝光"+p+",点击"+c+"，点击率为:"+c/p*100+"%");
    sleep(1000)
    }
}
function  非下载激励返回(){

    // while(textContains("s").exists()||textContains("秒").exists())
    // {
    //     sleep(1000)
    //     log("未播放完成")
    // }
    // log("曝光"+p+",点击"+c+"，点击率为:"+c/p*100+"%");
    log("关闭广告")
    
    关闭所有广告()
    log("非下载激励返回返回小程序页")
    是否返回小程序()
    bak=1
    log("pang:"+page);
    sleep(1000)
   
    
    log("bak4"+bak)
}


function 点击下载()
    {
        
        // if(

        // ){
            if(text("去下载").exists())
            { 
                toast("当前点击率为"+n*100+"%,35%，准备点击广告")
                var widget=text("去下载").findOne();
                    click(widget.bounds().centerX(), widget.bounds().centerY());
                    sleep(3000)
            }
            else
                {
                    if(text("点击下载").exists())
                     { 
                        toast("当前点击率为"+n*100+"%,35%，准备点击广告")
                     var widget=text("点击下载").findOne();
                    click(widget.bounds().centerX(), widget.bounds().centerY());
                    sleep(3000)
                     }
                     else
                     {
                        if(text("下载").exists())
                        { 
                            toast("当前点击率为"+n*100+"%,35%，准备点击广告")
                       var widget=text("下载").findOne();
                       click(widget.bounds().centerX(), widget.bounds().centerY());
                       sleep(3000)
                        }
                        else
                        {
                            toast("点击失败")
                            // bak=1
                            // 关闭所有广告()
                            // continue
                           
                        }
            
                     }
            
                }


        page=3
    // }

    }
function 激励详细页返回()
    {
        if(id("ivTitleBtnLeft").exists())
        {   log("关闭导航详细页")
            var widget=id("ivTitleBtnLeft").findOne()
           
            click(widget.bounds().centerX(), widget.bounds().centerY());
            // toast("关闭导航详细页成功")
            sleep(1000)
            page=7
        }
        else
        {   if(className("android.widget.ImageView").depth(9).findOne(2000)) 
            {
            log("关闭详细页")
             var widget=className("android.widget.ImageView").depth(9).findOne().parent()
           
            click(widget.bounds().centerX(), widget.bounds().centerY());
            // toast("关闭详细页成功")
            log("关闭详细页成功")
            sleep(1000)
            page=7
             }
            else
            {    bak=3
                log("关闭详细页失败")
            }
           
        }
        

    }


function  是否返回小程序()
    {
        if(text("点击查询拼音").exists())
                 {
                page=0
                bak=0
                log("pang:"+page+"bak"+bak);
                return 1
            }
            else
             {
                toast(" 点击下载返回小程序未成功2")
                bak=1
                sleep(1000)
                return 0
             }
    }


function  关闭所有广告()
    {

        // if(text("已可领取奖励").exists()&&(page==0||page==2||page==3||page==7))
        if(text("已可领取奖励").exists())
        {    log("关闭小图广告:"+page);
            var widget=className("android.view.View").clickable(true).depth(6).findOne()
           
            click(widget.bounds().centerX(), widget.bounds().centerY());
            sleep(1000)
            page=0
                 是否返回小程序()
        }
        else{
                // if(text("关闭广告").exists()&&(page==0||page==2||page==3||page==7))
                if(text("关闭广告").exists())

             {
                 log("关闭广告广告:"+page);
                var widget=text("关闭广告").findOne()
            
                click(widget.bounds().centerX(), widget.bounds().centerY());
                 sleep(1000)
                //  toast("关闭所有广告成功")
                 sleep(1000)
                 page=0
                 是否返回小程序()
             }
             else
             {
                 bak=2
                 log("关闭所有广告失败")
                 toast("关闭所有广告失败")
                 sleep(3000)
                 重新关闭所有广告()
                 log("关闭广告广告112:"+page);
             }
            }

    }

    function  重新关闭所有广告()
    {
        if(bak==3)
        {
            激励详细页返回() 
        }else{
            log("非激励返回错位")
        }


        if(text("已可领取奖励").exists()&&(page==2||page==3))
        {    log("关闭小图广告:"+page);
            var widget=className("android.view.View").clickable(true).depth(6).findOne()
           
            click(widget.bounds().centerX(), widget.bounds().centerY());
            sleep(1000)
            page=0
                 是否返回小程序()
        }
        else{
                if(text("关闭广告").exists()&&(page==2||page==3))
             {
                 log("关闭广告广告:"+page);
                var widget=text("关闭广告").findOne()
            
                click(widget.bounds().centerX(), widget.bounds().centerY());
                 sleep(1000)
                //  toast("关闭所有广告成功")
                 sleep(1000)
                 page=0
                 是否返回小程序()
             }
             else
             {
                 bak=2
                 log("关闭所有广告失败")
                 toast("关闭所有广告失败2")
                 log("关闭广告广告12:"+page);
                 sleep(3000)
                 
             }
            }

    }   