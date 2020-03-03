// 窗口大小的调整
function controlPageSize(){
    minWidth = 650;
    // 获得页面宽度
    var w = window.outerWidth;
    var h = window.outerHeight;
    if (w < minWidth){
        window.resizeTo(minWidth,h)
    }
}