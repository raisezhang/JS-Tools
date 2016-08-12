/**
 * 滚动条相关方法
 * getScrollTop：获取滚动条滚动了多少距离
 * getScrollBottom：获取滚动条底部还有多少距离
 * resolveHasScroll：判断是否存在滚动条
 * getScrollBarWidth：获取滚动条宽度
 */
(function () {
    var ScrollUtils = {
        getScrollTop: function(parentDom) {
            return parentDom.scrollTop();
        },
        getScrollBottom: function(parentDom) {
            var height = parentDom.height();
            var scrollHeight;
            if (parentDom[0] === window) {
                scrollHeight = Math.max(height, (document.body.scrollHeight || 0));
            } else {
                scrollHeight = Math.max(height, (parentDom[0].scrollHeight || 0 ));
            }
            var scrollTop = parentDom.scrollTop(),
                scrollBottom = Math.max(scrollHeight - scrollTop - height, 0);
            return scrollBottom;
        },
        resolveHasScroll: function(parentDom) {
            if (scrollUtils.getScrollTop(parentDom) > 0 || scrollUtils.getScrollBottom(parentDom) > 0) {
                return true;
            }
            return false;
        },
        getScrollBarWidth: function() {
            var div = document.createElement('div'),
                result;
            div.style.cssText = 'display:block;width:40px;height:40px;overflow-x:hidden;' +
                                'overflow-y:scroll;position:absolute;left:-20px;top:0px;';
            document.body.appendChild(div);
            result = div.offsetWidth - div.clientWidth;
            div.parentNode.removeChild(div);
            return result;
        }
    };
    if ( typeof module !== 'undefined') {
    	module.exports = ScrollUtils;
    } else {
    	window.UrlParams = ScrollUtils;
    }
})();
