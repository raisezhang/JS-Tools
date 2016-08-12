/**
 * url 中参数的获取、赋值、删除
 */
(function () {

    var UrlParams = {
        getParam: function(name, src) {
            var re = new RegExp('(?:^|\\?|#|&)' + name + '=([^&#]*)(?:$|&|#)', 'i');
            var m = re.exec(src || location.href);
            return m ? encodeURI(m[1]) : '';
        },
        setParam: function(name, str, src) {
            var re = new RegExp('(?:^|\\?|#|&)' + name + '=([^&#]*)(?:$|&|#)', 'i');
            src = src || location.href;
            var m = re.exec(src);
            if (m != null) {
                return src.replace(m[0], m[0].replace(name + '=' + m[1], name + '=' + str));
            } else {
                if (src.indexOf('?') != -1) {
                    return src + '&' + name + '=' + str;
                } else {
                    return src + '?' + name + '=' + str;
                }
            }
        },
        removeParam: function(name, src) {
            return src
                .replace(new RegExp('[?&]' + name + '=[^&#]*(#.*)?$'), '$1')
                .replace(new RegExp('([?&])' + name + '=[^&]*&'), '$1');
        }
    };
    if ( typeof module !== 'undefined') {
    	module.exports = UrlParams;
    } else {
    	window.UrlParams = UrlParams;
    }
})();
