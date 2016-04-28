/**
 * Created by favor on 2016/4/7.
 */

//这是一个实现的sleep函数，抽取成模块试试
function sleep(milliSeconds){
    var date=new Date();
    var startTime =date.getTime();
  //  console.log(date.getTime());
    while(new Date().getTime()< (startTime + milliSeconds)){
    }
}

exports.sleep=sleep;