const weixin = require('jweixin-module');

export function wxConfig(signMap: any) {
  weixin.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: signMap.appId, // 必填，公众号的唯一标识
    timestamp: signMap.timestamp, // 必填，生成签名的时间戳
    nonceStr: signMap.nonceStr, // 必填，生成签名的随机串
    signature: signMap.signature, // 必填，签名
    jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表
  });
  weixin.error(function (res: any) {
    alert(res.errMsg);
  });
}
export function wxPay(data: any, payErro: any, paySuccess: any) {
  weixin.ready(function () {
    weixin.chooseWXPay({
      timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
      nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
      package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
      signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
      paySign: data.paySign, // 支付签名
      success: function (res: any) {
        paySuccess();
      },
      cancel: function (res: any) {
        payErro();
      }
    });
  });
}
