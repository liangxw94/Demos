(function() {
    var ac = window,
        A = document,
        r = navigator,
        Q = r.userAgent,
        ah = ac.screen,
        j;
    try {
        j = ac.location.href;
    } catch (N) {
        j = document.URL;
    }
    var ag = '2.2.4.20141125';
    var au = 'https:' == ac.location.protocol ? 'https://s' : 'http://',
        aq = 'beacon.sina.com.cn';
    var J = au + aq + '/a.gif?',
        v = au + aq + '/g.gif?',
        an = au + aq + '/d.gif?',
        ab = au + aq + '/e.gif?';
    var aw = 0;
    var ar = A.referrer.toLowerCase();
    var U = 'SINAGLOBAL',
        C = 'Apache',
        K = 'ULV',
        k = 'SUP',
        av = 'UOR',
        z = '_s_acc',
        R = '_s_tentry';
    var n = 0;
    var G = false;
    var ax = false,
        x = false;
    var af = '';
    var l = 16777215,
        T = 0,
        y,
        H = 0;
    var p = '',
        b = '',
        a = '';
    var I = [],
        M = [],
        E = [];
    var t = 0;
    var w = (function() {
        var i = window.localStorage,
            D,
            ay;
        if (i) {
            return {
                get: function(e) {
                    return unescape(i.getItem(e));
                },
                set: function(e, aA) {
                    i.setItem(e, escape(aA));
                }
            };
        } else {
            if (window.ActiveXObject) {
                D = document.documentElement;
                ay = 'localstorage';
                try {
                    D.addBehavior('#default#userdata');
                    D.save('localstorage');
                } catch (az) {}
                return {
                    set: function(aA, aB) {
                        try {
                            D.setAttribute(aA, aB);
                            D.save(ay);
                        } catch (aC) {}
                    },
                    get: function(aA) {
                        try {
                            D.load(ay);
                            return D.getAttribute(aA);
                        } catch (aB) {}
                    }
                };
            } else {
                return { get: s, set: al };
            }
        }
    })();
    function h(ay, i) {
        var D = A.getElementsByName(ay);
        var e = i > 0 ? i : 0;
        return D.length > e ? D[e].content : '';
    }
    function P(aB, D, az, ay) {
        if (aB == '') {
            return '';
        }
        ay = ay == '' ? '=' : ay;
        D += ay;
        var aA = aB.indexOf(D);
        if (aA < 0) {
            return '';
        }
        aA += D.length;
        var i = aB.indexOf(az, aA);
        if (i < aA) {
            i = aB.length;
        }
        return aB.substring(aA, i);
    }
    function s(e) {
        if (undefined == e || '' == e) {
            return '';
        }
        return P(A.cookie, e, ';', '');
    }
    function al(az, e, i, ay) {
        if (e != null) {
            if (undefined == ay || null == ay) {
                ay = 'weibo.com';
            }
            if (undefined == i || null == i || '' == i) {
                A.cookie = az + '=' + e + ';domain=' + ay + ';path=/';
            } else {
                var D = new Date();
                var aA = D.getTime();
                aA = aA + 86400000 * i;
                D.setTime(aA);
                aA = D.getTime();
                A.cookie =
                    az +
                    '=' +
                    e +
                    ';domain=' +
                    ay +
                    ';expires=' +
                    D.toUTCString() +
                    ';path=/';
            }
        }
    }
    function O(e, ay, D) {
        var i = e;
        if (i == null) {
            return false;
        }
        ay = ay || 'click';
        if ((typeof D).toLowerCase() != 'function') {
            return;
        }
        if (i.attachEvent) {
            i.attachEvent('on' + ay, D);
        } else {
            if (i.addEventListener) {
                i.addEventListener(ay, D, false);
            } else {
                i['on' + ay] = D;
            }
        }
        return true;
    }
    function aa() {
        if (window.event != null) {
            return window.event;
        } else {
            if (window.event) {
                return window.event;
            }
            var D = arguments.callee.caller;
            var i;
            var ay = 0;
            while (D != null && ay < 40) {
                i = D.arguments[0];
                if (
                    i &&
                    (i.constructor == Event ||
                        i.constructor == MouseEvent ||
                        i.constructor == KeyboardEvent)
                ) {
                    return i;
                }
                ay++;
                D = D.caller;
            }
            return i;
        }
    }
    function g(i) {
        i = i || aa();
        if (!i.target) {
            i.target = i.srcElement;
            i.pageX = i.x;
            i.pageY = i.y;
        }
        if (typeof i.layerX == 'undefined') {
            i.layerX = i.offsetX;
        }
        if (typeof i.layerY == 'undefined') {
            i.layerY = i.offsetY;
        }
        return i;
    }
    function ao(ay) {
        if (typeof ay !== 'string') {
            throw 'trim need a string as parameter';
        }
        var e = ay.length;
        var D = 0;
        var i = /(\u3000|\s|\t|\u00A0)/;
        while (D < e) {
            if (!i.test(ay.charAt(D))) {
                break;
            }
            D += 1;
        }
        while (e > D) {
            if (!i.test(ay.charAt(e - 1))) {
                break;
            }
            e -= 1;
        }
        return ay.slice(D, e);
    }
    function d(e) {
        return Object.prototype.toString.call(e) === '[object Array]';
    }
    function F(ay, aC) {
        var aE = ao(ay).split('&');
        var aD = {};
        var D = function(i) {
            if (aC) {
                return decodeURIComponent(i);
            } else {
                return i;
            }
        };
        for (var aA = 0, aB = aE.length; aA < aB; aA++) {
            if (aE[aA]) {
                var az = aE[aA].split('=');
                var e = az[0];
                var aF = az[1];
                if (az.length < 2) {
                    aF = e;
                    e = '$nullName';
                }
                if (!aD[e]) {
                    aD[e] = D(aF);
                } else {
                    if (d(aD[e]) != true) {
                        aD[e] = [aD[e]];
                    }
                    aD[e].push(D(aF));
                }
            }
        }
        return aD;
    }
    function W(D, az) {
        for (var ay = 0, e = D.length; ay < e; ay++) {
            az(D[ay], ay);
        }
    }
    function ae(i) {
        var e = new RegExp('^http(?:s)?://([^/]+)', 'im');
        if (i.match(e)) {
            return i.match(e)[1].toString();
        } else {
            return '';
        }
    }
    function S(e, i) {
        var D = '';
        if (e != null && e != '') {
            if (/[?&]sudaref=([\w\.]*)/.test(e)) {
                D = e.match(/[?&]sudaref=([\w\.]*)/);
                if (D.length > 1) {
                    D = D[1];
                }
            }
        }
        if (D == '' && i != null && i != '') {
            D = ae(i);
        }
        if (
            /(\.weibo\.com|\.t\.sina\.com\.cn|\.t\.cn)$/i.test(D) ||
            /^(weibo\.com|t\.sina\.com\.cn|t\.cn)$/i.test(D) ||
            D == ''
        ) {
            return '';
        }
        return D;
    }
    var aj = {
        screenSize: function() {
            return l & (8388608 == 8388608) ? ah.width + 'x' + ah.height : '';
        },
        colorDepth: function() {
            return l & (4194304 == 4194304) ? ah.colorDepth : '';
        },
        appCode: function() {
            return l & (2097152 == 2097152) ? r.appCodeName : '';
        },
        appName: function() {
            return l & (1048576 == 1048576)
                ? r.appName.indexOf('Microsoft Internet Explorer') > -1
                  ? 'MSIE'
                  : r.appName
                : '';
        },
        cpu: function() {
            return l & (524288 == 524288) ? r.cpuClass || r.oscpu : '';
        },
        platform: function() {
            return l & (262144 == 262144) ? r.platform : '';
        },
        jsVer: function() {
            if (l & (131072 != 131072)) {
                return '';
            }
            var az,
                e,
                aB,
                D = 1,
                ay = 0,
                i =
                    r.appName.indexOf('Microsoft Internet Explorer') > -1
                        ? 'MSIE'
                        : r.appName,
                aA = r.appVersion;
            if ('MSIE' == i) {
                e = 'MSIE';
                az = aA.indexOf(e);
                if (az >= 0) {
                    aB = window.parseInt(aA.substring(az + 5));
                    if (3 <= aB) {
                        D = 1.1;
                        if (4 <= aB) {
                            D = 1.3;
                        }
                    }
                }
            } else {
                if ('Netscape' == i || 'Opera' == i || 'Mozilla' == i) {
                    D = 1.3;
                    e = 'Netscape6';
                    az = aA.indexOf(e);
                    if (az >= 0) {
                        D = 1.5;
                    }
                }
            }
            return D;
        },
        network: function() {
            if (l & (65536 != 65536)) {
                return '';
            }
            var i = '';
            i = r.connection && r.connection.type ? r.connection.type : i;
            try {
                A.body.addBehavior('#default#clientCaps');
                i = A.body.connectionType;
            } catch (D) {
                i = 'unkown';
            }
            return i;
        },
        language: function() {
            return l & (32768 == 32768) ? r.systemLanguage || r.language : '';
        },
        timezone: function() {
            return l & (16384 == 16384)
                ? new Date().getTimezoneOffset() / 60
                : '';
        },
        flashVer: function() {
            if (l & (8192 != 8192)) {
                return '';
            }
            var aB = r.plugins,
                ay,
                aC,
                aE;
            if (aB && aB.length) {
                for (var aA in aB) {
                    aC = aB[aA];
                    if (aC.description == null) {
                        continue;
                    }
                    if (ay != null) {
                        break;
                    }
                    aE = aC.description.toLowerCase();
                    if (aE.indexOf('flash') != -1) {
                        ay = aC.version
                            ? parseInt(aC.version)
                            : aE.match(/\d+/);
                        continue;
                    }
                }
            } else {
                if (window.ActiveXObject) {
                    for (var az = 10; az >= 2; az--) {
                        try {
                            var D = new ActiveXObject(
                                'ShockwaveFlash.ShockwaveFlash.' + az
                            );
                            if (D) {
                                ay = az;
                                break;
                            }
                        } catch (aD) {}
                    }
                } else {
                    if (Q.indexOf('webtv/2.5') != -1) {
                        ay = 3;
                    } else {
                        if (Q.indexOf('webtv') != -1) {
                            ay = 2;
                        }
                    }
                }
            }
            return ay;
        },
        javaEnabled: function() {
            if (l & (4096 != 4096)) {
                return '';
            }
            var D = r.plugins,
                i = r.javaEnabled(),
                ay,
                az;
            if (i == true) {
                return 1;
            }
            if (D && D.length) {
                for (var e in D) {
                    ay = D[e];
                    if (ay.description == null) {
                        continue;
                    }
                    if (i != null) {
                        break;
                    }
                    az = ay.description.toLowerCase();
                    if (az.indexOf('java plug-in') != -1) {
                        i = parseInt(ay.version);
                        continue;
                    }
                }
            } else {
                if (window.ActiveXObject) {
                    i = new ActiveXObject('JavaWebStart.IsInstalled') != null;
                }
            }
            return i ? 1 : 0;
        }
    };
    var Y = {
        pageId: function(i) {
            var D = i || p,
                aB = '-9999-0-0-1';
            if (undefined == D || '' == D) {
                try {
                    var ay = h('publishid');
                    if ('' != ay) {
                        var aA = ay.split(',');
                        if (aA.length > 0) {
                            if (aA.length >= 3) {
                                aB = '-9999-0-' + aA[1] + '-' + aA[2];
                            }
                            D = aA[0];
                        }
                    } else {
                        D = '0';
                    }
                } catch (az) {
                    D = '0';
                }
                D = D + aB;
            }
            return D;
        },
        sessionCount: function() {
            var e = s('_s_upa');
            if (e == '') {
                e = 0;
            }
            return e;
        },
        excuteCount: function() {
            return aw;
        },
        referrer: function() {
            if (l & (2048 != 2048)) {
                return '';
            }
            var e = /^[^\?&#]*.swf([\?#])?/;
            if (ar == '' || ar.match(e)) {
                var i = P(j, 'ref', '&', '');
                if (i != '') {
                    return escape(i);
                }
            }
            return escape(ar);
        },
        isHomepage: function() {
            if (l & (1024 != 1024)) {
                return '';
            }
            var D = '';
            try {
                A.body.addBehavior('#default#homePage');
                D = A.body.isHomePage(j) ? 'Y' : 'N';
            } catch (i) {
                D = 'unkown';
            }
            return D;
        },
        PGLS: function() {
            return l & (512 == 512) ? h('stencil') : '';
        },
        ZT: function() {
            if (l & (256 != 256)) {
                return '';
            }
            var e = h('subjectid');
            e.replace(',', '.');
            e.replace(';', ',');
            return escape(e);
        },
        mediaType: function() {
            return l & (128 == 128) ? h('mediaid') : '';
        },
        domCount: function() {
            return l & (64 == 64) ? A.getElementsByTagName('*').length : '';
        },
        iframeCount: function() {
            return l & (32 == 32)
                ? A.getElementsByTagName('iframe').length
                : '';
        },
        onloadTime: function() {
            var e;
            if (
                typeof __GLOBAL_STATS_PAGESTART_TIME__ != 'undefined' &&
                typeof __GLOBAL_STATS_PAGEONLOAD_TIME__ != 'undefined'
            ) {
                e =
                    __GLOBAL_STATS_PAGEONLOAD_TIME__ -
                    __GLOBAL_STATS_PAGESTART_TIME__;
            }
            return l & (16 == 16) ? e || '' : '';
        },
        domReadyTime: function() {
            var e;
            if (
                typeof __GLOBAL_STATS_PAGESTART_TIME__ != 'undefined' &&
                typeof __GLOBAL_STATS_DOMREADY_TIME__ != 'undefined'
            ) {
                e =
                    __GLOBAL_STATS_DOMREADY_TIME__ -
                    __GLOBAL_STATS_PAGESTART_TIME__;
            }
            return l & (8 == 8) ? e || '' : '';
        },
        bigpipe: function() {
            return typeof $CONFIG != 'undefined' &&
                typeof $CONFIG.bigpipe != 'undefined' &&
                $CONFIG.bigpipe == 'true'
                ? 1
                : 0;
        },
        getRealURL: function() {
            var e = '';
            if (
                typeof STK != 'undefined' &&
                typeof STK.historyM != 'undefined' &&
                typeof STK.historyM.parseURL != 'undefined'
            ) {
                e = escape(STK.historyM.parseURL().url);
            }
            return e;
        }
    };
    var am = {
        visitorId: function() {
            if ('' != U) {
                var e = s(U);
                if ('' == e) {
                    e = s(C);
                    al(U, e, 3650);
                }
                return e;
            } else {
                return '';
            }
        },
        sessionId: function() {
            var e = s(C);
            if ('' == e) {
                var i = new Date();
                e = Math.random() * 10000000000000 + '.' + i.getTime();
                al(C, e);
            }
            return e;
        },
        lastVisit: function() {
            var D = s(C);
            var az = s(K);
            var ay = az.split(':');
            var aA = '',
                i;
            if (ay.length >= 6) {
                if (D != ay[4]) {
                    i = new Date();
                    var e = new Date(window.parseInt(ay[0]));
                    ay[1] = window.parseInt(ay[1]) + 1;
                    if (i.getMonth() != e.getMonth()) {
                        ay[2] = 1;
                    } else {
                        ay[2] = window.parseInt(ay[2]) + 1;
                    }
                    if ((i.getTime() - e.getTime()) / 86400000 >= 7) {
                        ay[3] = 1;
                    } else {
                        if (i.getDay() < e.getDay()) {
                            ay[3] = 1;
                        } else {
                            ay[3] = window.parseInt(ay[3]) + 1;
                        }
                    }
                    aA = ay[0] + ':' + ay[1] + ':' + ay[2] + ':' + ay[3];
                    ay[5] = ay[0];
                    ay[0] = i.getTime();
                    al(
                        K,
                        ay[0] +
                            ':' +
                            ay[1] +
                            ':' +
                            ay[2] +
                            ':' +
                            ay[3] +
                            ':' +
                            D +
                            ':' +
                            ay[5],
                        360
                    );
                } else {
                    aA = ay[5] + ':' + ay[1] + ':' + ay[2] + ':' + ay[3];
                }
            } else {
                i = new Date();
                aA = ':1:1:1';
                al(K, i.getTime() + aA + ':' + D + ':', 360);
            }
            return aA;
        },
        userNick: function() {
            if (af != '') {
                return af;
            }
            var D = unescape(s(k));
            if (D != '') {
                var i = P(D, 'ag', '&', '');
                var e = P(D, 'user', '&', '');
                var ay = P(D, 'uid', '&', '');
                var aA = P(D, 'sex', '&', '');
                var az = P(D, 'dob', '&', '');
                af = i + ':' + e + ':' + ay + ':' + aA + ':' + az;
                return af;
            } else {
                return '';
            }
        },
        userOrigin: function() {
            if (l & (4 != 4)) {
                return '';
            }
            var e = s(av);
            var i = e.split(':');
            return i[0];
        },
        subp: function() {
            return s('SUBP');
        },
        advCount: function() {
            return l & (2 == 2) ? s(z) : '';
        },
        setUOR: function() {
            var az = s(av),
                aD = '',
                e = '',
                aC = '',
                D = '',
                aA = j.toLowerCase(),
                i = A.referrer.toLowerCase();
            var aE = /[&|?]c=spr(_[A-Za-z0-9]{1,}){3,}/;
            if (aA.match(aE)) {
                aC = aA.match(aE)[0];
            } else {
                if (i.match(aE)) {
                    aC = i.match(aE)[0];
                }
            }
            if (aC != '') {
                aC = aC.substr(3);
            } else {
                aC = S(aA, i);
            }
            if (az == '' && aC != '') {
                if (s(K) == '') {
                    aD = ae(i);
                    e = ae(aA);
                }
                al(av, aD + ',' + e + ',' + aC, 365);
            } else {
                var ay = 0,
                    aB = az.split(',');
                if (aB.length >= 1) {
                    aD = aB[0];
                }
                if (aB.length >= 2) {
                    e = aB[1];
                }
                if (aB.length >= 3) {
                    D = aB[2];
                }
                if (aC != '') {
                    ay = 1;
                }
                if (ay) {
                    al(av, aD + ',' + e + ',' + aC, 365);
                }
            }
        },
        setAEC: function(e) {
            if ('' == e) {
                return;
            }
            var i = s(z);
            if (i.indexOf(e + ',') < 0) {
                i = i + e + ',';
            }
            al(z, i, 7);
        }
    };
    var ai = {
        picList: [
            {
                url: 'http://ww1.sinaimg.cn/large/53d96fe3tw1diw52tyd28j.jpg',
                size: 23243
            },
            {
                url: 'http://ww2.sinaimg.cn/large/53d96fe3tw1diw52tyd28j.jpg',
                size: 23243
            },
            {
                url: 'http://ww3.sinaimg.cn/large/53d96fe3tw1diw52tyd28j.jpg',
                size: 23243
            },
            {
                url: 'http://ww4.sinaimg.cn/large/53d96fe3tw1diw52tyd28j.jpg',
                size: 23243
            }
        ],
        picOk: false,
        picData: [],
        picture: function() {
            if ((T & 8) != 8) {
                ai.picOk = true;
                return '';
            }
            var ay = new Date().getTime();
            var aA = [],
                D;
            for (var az = 0, e = ai.picList.length; az < e; az++) {
                D = new Image();
                SUDA.img = D;
                D.src = ai.picList[az].url + '?' + Math.random();
                D.onload = (function(i) {
                    return function() {
                        var aB = new Date().getTime();
                        ai.picData[i] = Math.floor(
                            ai.picList[i].size / 1024 / ((aB - ay) / 1000)
                        );
                        if (/^(\d+,){3}\d+$/.test(ai.picData.join(','))) {
                            ai.picOk = true;
                            o();
                        }
                    };
                })(az);
                aA.push(D);
            }
        },
        porList: [
            {
                url: 'http://tp1.sinaimg.cn/1772026304/50/5603504743/1',
                size: 3488
            },
            {
                url: 'http://tp2.sinaimg.cn/1780417033/50/1280367872/0',
                size: 4021
            },
            {
                url: 'http://tp3.sinaimg.cn/1075913170/50/5601477177/1',
                size: 3456
            },
            {
                url: 'http://tp4.sinaimg.cn/1245851035/50/1279876078/1',
                size: 2519
            }
        ],
        porOk: false,
        porData: [],
        portait: function() {
            if ((T & 4) != 4) {
                ai.porOk = true;
                return '';
            }
            var ay = new Date().getTime();
            var aA = [],
                D;
            for (var az = 0, e = ai.porList.length; az < e; az++) {
                D = new Image();
                SUDA.img = D;
                D.src = ai.porList[az].url + '?' + Math.random();
                D.onload = (function(i) {
                    return function() {
                        var aB = new Date().getTime();
                        ai.porData[i] = Math.floor(
                            ai.porList[i].size / 1024 / ((aB - ay) / 1000)
                        );
                        if (/^(\d+,){3}\d+$/.test(ai.porData.join(','))) {
                            ai.porOk = true;
                            o();
                        }
                    };
                })(az);
                aA.push(D);
            }
        },
        jsList: [
            {
                url: 'http://js.t.sinajs.cn/t4/home/static/suda/feed.png',
                size: 21287
            }
        ],
        jsOk: false,
        jsData: [],
        jsSpeed: function() {
            if ((T & 2) != 2) {
                ai.jsOk = true;
                return '';
            }
            var ay = new Date().getTime();
            var aA = [],
                D;
            for (var az = 0, e = ai.jsList.length; az < e; az++) {
                D = new Image();
                SUDA.img = D;
                D.src = ai.jsList[az].url + '?' + Math.random();
                D.onload = (function(i) {
                    return function() {
                        var aB = new Date().getTime();
                        ai.jsData[i] = Math.floor(
                            ai.jsList[i].size / 1024 / ((aB - ay) / 1000)
                        );
                        if (/^\d+$/.test(ai.jsData.join(','))) {
                            ai.jsOk = true;
                            o();
                        }
                    };
                })(az);
                aA.push(D);
            }
        },
        cssList: [
            {
                url:
                    'http://img.t.sinajs.cn/t4/style/images/mobile/android/cp_3.jpg',
                size: 24472
            }
        ],
        cssOk: false,
        cssData: [],
        cssSpeed: function() {
            if ((T & 1) != 1) {
                ai.cssOk = true;
                return '';
            }
            var ay = new Date().getTime();
            var aA = [],
                D;
            for (var az = 0, e = ai.cssList.length; az < e; az++) {
                D = new Image();
                SUDA.img = D;
                D.src = ai.cssList[az].url + '?' + Math.random();
                D.onload = (function(i) {
                    return function() {
                        var aB = new Date().getTime();
                        ai.cssData[i] = Math.floor(
                            ai.cssList[i].size / 1024 / ((aB - ay) / 1000)
                        );
                        if (/^\d+$/.test(ai.cssData.join(','))) {
                            ai.cssOk = true;
                            o();
                        }
                    };
                })(az);
                aA.push(D);
            }
        }
    };
    var ad = {
        CI: function() {
            var e = [
                'sz:' + aj.screenSize(),
                'dp:' + aj.colorDepth(),
                'ac:' + aj.appCode(),
                'an:' + aj.appName(),
                'cpu:' + aj.cpu(),
                'pf:' + aj.platform(),
                'jv:' + aj.jsVer(),
                'ct:' + aj.network(),
                'lg:' + aj.language(),
                'tz:' + aj.timezone(),
                'fv:' + aj.flashVer(),
                'ja:' + aj.javaEnabled()
            ];
            return 'CI=' + e.join('|');
        },
        PI: function(e) {
            var i = [
                'pid:' + Y.pageId(e),
                'st:' + Y.sessionCount(),
                'et:' + Y.excuteCount(),
                'ref:' + Y.referrer(),
                'hp:' + Y.isHomepage(),
                'PGLS:' + Y.PGLS(),
                'ZT:' + Y.ZT(),
                'MT:' + Y.mediaType(),
                'keys:',
                'dom:' + Y.domCount(),
                'ifr:' + Y.iframeCount(),
                'nld:' + Y.onloadTime(),
                'drd:' + Y.domReadyTime(),
                'bp:' + Y.bigpipe(),
                'url:' + Y.getRealURL()
            ];
            return 'PI=' + i.join('|');
        },
        UI: function() {
            var e = [
                'vid:' + am.visitorId(),
                'sid:' + am.sessionId(),
                'lv:' + am.lastVisit(),
                'un:' + am.userNick(),
                'uo:' + am.userOrigin(),
                'ae:' + am.advCount(),
                'su:' + am.subp()
            ];
            return 'UI=' + e.join('|');
        },
        EX: function(i, e) {
            if (l & (1 != 1)) {
                return '';
            }
            i = null != i ? i || '' : b;
            e = null != e ? e || '' : a;
            return 'EX=ex1:' + i + '|ex2:' + e;
        },
        EXT: function(i, e) {
            if (l & (1 != 1)) {
                return '';
            }
            i = null != i ? i || '' : b;
            e = null != e ? e || '' : a;
            return i + ':' + e;
        },
        P_PI: function() {
            var e = [
                'pic:' + ai.picture(),
                'por:' + ai.portait(),
                'js:' + ai.jsSpeed(),
                'css:' + ai.cssSpeed(),
                'ref:' + Y.referrer()
            ];
            return 'PI=' + e.join('|');
        },
        P_UI: function() {
            var e = [
                'vid:' + am.visitorId(),
                'sid:' + am.sessionId(),
                'un:' + am.userNick()
            ];
            return 'UI=' + e.join('|');
        },
        V: function() {
            return 'V=' + ag;
        },
        R: function() {
            return 'gUid_' + new Date().getTime();
        }
    };
    function ap() {
        var aB = '-',
            ay = A.referrer.toLowerCase(),
            D = j.toLowerCase();
        if ('' == s(R)) {
            if ('' != ay) {
                aB = ae(ay);
            }
            al(R, aB, '', 'weibo.com');
        }
        var az = /weibo.com\/(reg\.php|signup\/(signup|mobile|full_info)\.php)/;
        if (D.match(az)) {
            var aA = P(unescape(D), 'sharehost', '&', '');
            var i = P(unescape(D), 'appkey', '&', '');
            if ('' != aA) {
                al(R, aA, '', 'weibo.com');
            }
            al('appkey', i, '', 'weibo.com');
        }
    }
    function f(e, i) {
        B(e, i);
    }
    function B(i, D) {
        D = D || {};
        var e = new Image(),
            ay;
        if (D && D.callback && typeof D.callback == 'function') {
            e.onload = function() {
                clearTimeout(ay);
                ay = null;
                D.callback(true);
            };
        }
        SUDA.img = e;
        e.src = i;
        ay = setTimeout(function() {
            if (D && D.callback && typeof D.callback == 'function') {
                D.callback(false);
                e.onload = null;
            }
        }, D.timeout || 2000);
    }
    function q() {
        if (ax || x) {
            return;
        }
        if (t < 3 && typeof __GLOBAL_STATS_PAGESTART_TIME__ != 'undefined') {
            t++;
            if (
                typeof __GLOBAL_STATS_PAGESTART_TIME__ == 'undefined' ||
                typeof __GLOBAL_STATS_DOMREADY_TIME__ == 'undefined' ||
                typeof __GLOBAL_STATS_PAGEONLOAD_TIME__ == 'undefined'
            ) {
                setTimeout(q, 1000);
                return;
            }
        }
        am.sessionId();
        u();
    }
    function u(e, ay, D) {
        aw++;
        var az = am.visitorId();
        if (n < 1) {
            setTimeout(q, 0);
            n++;
            return;
        } else {
        }
        var i =
            J +
            [ad.V(), ad.CI(), ad.PI(e), ad.UI(), ad.EX(ay, D), ad.R()].join(
                '&'
            );
        B(i);
        X();
    }
    function X() {
        if (typeof __GLOBAL_STATS_PAGESTART_TIME__ != 'undefined') {
            if (
                typeof __GLOBAL_STATS_PAGESTART_TIME__ == 'undefined' ||
                typeof __GLOBAL_STATS_DOMREADY_TIME__ == 'undefined' ||
                typeof __GLOBAL_STATS_PAGEONLOAD_TIME__ == 'undefined'
            ) {
                setTimeout(X, 1000);
                return;
            }
        }
        if ('https:' == A.location.protocol || G == true) {
            return;
        }
        if (typeof y == 'function') {
            if (y() == false) {
                return;
            }
        }
        var e = w.get('sudaPerformance');
        if (e != null && new Date().getTime() - e < H * 60 * 1000) {
            return;
        }
        if (document.readyState != 'complete') {
            setTimeout(X, 500);
        }
        aw++;
        G = true;
        if (T > 0) {
            ai.picture();
            ai.portait();
            ai.jsSpeed();
            ai.cssSpeed();
        }
    }
    function o() {
        if (T > 0 && ai.picOk && ai.porOk && ai.jsOk && ai.cssOk) {
            var e =
                v +
                [
                    ad.V(),
                    'PI=pic:' +
                        ai.picData +
                        '|por:' +
                        ai.porData +
                        '|js:' +
                        ai.jsData +
                        '|css:' +
                        ai.cssData +
                        '|nld:' +
                        Y.onloadTime() +
                        '|drd:' +
                        Y.domReadyTime(),
                    ad.P_UI(),
                    ad.EX(),
                    ad.R()
                ].join('&');
            B(e);
        }
        w.set('sudaPerformance', new Date().getTime());
    }
    function V(e, ay) {
        if ('' == e || undefined == e) {
            return;
        }
        am.setAEC(e);
        if (0 == ay) {
            return;
        }
        var D =
            'AcTrack||' +
            s(U) +
            '||' +
            s(C) +
            '||' +
            am.userNick() +
            '||' +
            e +
            '||';
        var i = ab + D + ad.EXT() + '&gUid_' + new Date().getTime();
        f(i);
    }
    function ak(aB, aC, e) {
        e = e || {};
        var aE =
            'UATrack||' +
            s(U) +
            '||' +
            s(C) +
            '||' +
            am.userNick() +
            '||' +
            aB +
            '||' +
            aC +
            '||' +
            Y.referrer() +
            '||' +
            (e.href || '') +
            '||' +
            (e.realUrl || '') +
            '||' +
            am.subp() +
            '||' +
            (e.ext || '');
        var D = ab + aE + ad.EXT() + '&gUid_' + new Date().getTime();
        f(D, e);
        if (e.urls) {
            if (e.urls.replace(/\s/g, '') != '') {
                var aA = e.urls.split(',');
                if (aA.length > 0) {
                    for (var ay = 0, az = aA.length; ay < az; ay++) {
                        var aD =
                            aA[ay] +
                            (aA[ay].indexOf('?') == -1 ? '?' : '&') +
                            aE +
                            '&gUid_' +
                            new Date().getTime();
                        f(aD, e);
                    }
                }
            }
        }
    }
    function at(aC) {
        var aF = g(aC);
        var D = aF.target;
        var aA = '',
            aE = '',
            aD = '',
            az = '',
            i = '',
            aB = '';
        var ay;
        if (
            D != null &&
            D.getAttribute &&
            (!D.getAttribute('suda-uatrack') &&
                !D.getAttribute('suda-actrack') &&
                !D.getAttribute('suda-data'))
        ) {
            while (
                D != null &&
                D.getAttribute &&
                (!!D.getAttribute('suda-uatrack') ||
                    !!D.getAttribute('suda-actrack') ||
                    !!D.getAttribute('suda-data')) == false
            ) {
                if (D == A.body) {
                    return;
                }
                D = D.parentNode;
            }
        }
        if (D == null || D.getAttribute == null) {
            return;
        }
        aA = D.getAttribute('suda-actrack') || '';
        aE =
            D.getAttribute('suda-uatrack') || D.getAttribute('suda-data') || '';
        az = D.getAttribute('suda-urls') || '';
        aD = m(D);
        if (aE) {
            ay = F(aE);
            if (D.tagName.toLowerCase() == 'a') {
                i = escape(D.href);
            }
            aB = Y.getRealURL();
            ay.value = ay.value + aD;
            ay.key &&
                SUDA.uaTrack &&
                SUDA.uaTrack(ay.key, ay.value || ay.key, {
                    href: i,
                    realUrl: aB,
                    urls: az,
                    ext: ay.ext
                });
        }
        if (aA) {
            ay = F(aA);
            ay.key && SUDA.acTrack && SUDA.acTrack(ay.key, ay.value || ay.key);
        }
    }
    function m(i) {
        var D = i.getAttribute('suda-sizzle');
        var e = '';
        if (D == null || D == '') {
            return '';
        }
        e = c(i, D);
        return e;
    }
    function c(D, aG) {
        var aM;
        if (/^[-\d]/.test(aG)) {
            var aK = aG.split(',');
            var aF = aK[0];
            var e = aK[1];
            var aH = aK[2];
            aM = aK[3] || '*';
            var aJ, aC;
            if (aF == null || e == null || aH == null) {
                return '';
            }
            switch (aH) {
                case 'parent':
                    D = D.parentNode;
                    while (D != null) {
                        if (D.getAttribute('suda-sizzle') != null) {
                            if (aM != '*' && D.tagName.toLowerCase() != aM) {
                                D = D.parentNode;
                                if (D == document.body) {
                                    return '';
                                }
                                continue;
                            }
                            aJ = D.getAttribute('suda-sizzle');
                            aC = aJ.split(',');
                            if (aJ[0] && e == aJ[0]) {
                                return (
                                    (D.getAttribute('suda-ext') || '') +
                                    c(D, aJ)
                                );
                            } else {
                                D = D.parentNode;
                                if (D == document.body) {
                                    return '';
                                }
                                continue;
                            }
                        }
                        D = D.parentNode;
                        if (D == document.body) {
                            return '';
                        }
                    }
                    return '';
                case 'sibling':
                    D = D.parentNode.children || D.parentNode.childNodes;
                    for (var az = 0, aD = D.length; az < aD; az++) {
                        if (D[az].getAttribute('suda-sizzle') != null) {
                            if (
                                aM != '*' &&
                                D[az].tagName.toLowerCase() != aM
                            ) {
                                continue;
                            }
                            aJ = D[az].getAttribute('suda-sizzle');
                            aC = aJ.split(',');
                            if (aJ[0] && e == aJ[0]) {
                                return (
                                    (D[az].getAttribute('suda-ext') || '') +
                                    c(D[az], aJ)
                                );
                            } else {
                                continue;
                            }
                        }
                    }
                    return '';
                case 'child':
                    D = D.getElementsByTagName(aM);
                    for (var ay = 0, aB = D.length; ay < aB; ay++) {
                        if (D[ay].getAttribute('suda-sizzle') != null) {
                            if (
                                aM != '*' &&
                                D[ay].tagName.toLowerCase() != aM
                            ) {
                                continue;
                            }
                            aJ = D[ay].getAttribute('suda-sizzle');
                            aC = aJ.split(',');
                            if (aJ[0] && e == aJ[0]) {
                                return (
                                    (D[ay].getAttribute('suda-ext') || '') +
                                    c(D[ay], aJ)
                                );
                            } else {
                                continue;
                            }
                        }
                    }
                    return '';
            }
        } else {
            var aL = aG.split('['),
                aI;
            switch (aL.length) {
                case 1:
                    aM = aL[0];
                    break;
                case 2:
                default:
                    aM = aL[0];
                    aI = aL[1];
                    break;
            }
            if (aI) {
                aI = aI.replace(/['"\]]/g, '').split('=');
                if (aI.length == 2) {
                    var aE = aI[0];
                    var aA = aI[1];
                }
            }
            D = D.parentNode;
            while (D != null) {
                if (D.tagName.toLowerCase() == aM) {
                    if (aE && D.getAttribute(aE) == aA) {
                        if (
                            D.getAttribute('suda-sizzle') != null &&
                            D.getAttribute('suda-sizzle') != ''
                        ) {
                            return (
                                (D.getAttribute('suda-ext') || '') +
                                c(D, D.getAttribute('suda-sizzle'))
                            );
                        }
                        return D.getAttribute('suda-ext') || '';
                    }
                    if (aE == null) {
                        if (
                            D.getAttribute('suda-sizzle') != null &&
                            D.getAttribute('suda-sizzle') != ''
                        ) {
                            return (
                                (D.getAttribute('suda-ext') || '') +
                                c(D, D.getAttribute('suda-sizzle'))
                            );
                        }
                        return D.getAttribute('suda-ext') || '';
                    }
                }
                D = D.parentNode;
                if (D == document.body) {
                    return '';
                }
            }
            return '';
        }
    }
    if (
        window.SUDA &&
        Object.prototype.toString.call(window.SUDA) === '[object Array]'
    ) {
        for (var L = 0, Z = SUDA.length; L < Z; L++) {
            switch (SUDA[L][0]) {
                case 'setGatherType':
                    l = SUDA[L][1];
                    break;
                case 'setGatherInfo':
                    p = SUDA[L][1] || p;
                    b = SUDA[L][2] || b;
                    a = SUDA[L][3] || a;
                    break;
                case 'setPerformance':
                    T = SUDA[L][1];
                    break;
                case 'setPerformanceFilter':
                    y = SUDA[L][1];
                    break;
                case 'setPerformanceInterval':
                    H = SUDA[L][1] * 1 || 0;
                    H = isNaN(H) ? 0 : H;
                    break;
                case 'setGatherMore':
                    I.push(SUDA[L].slice(1));
                    break;
                case 'acTrack':
                    M.push(SUDA[L].slice(1));
                    break;
                case 'uaTrack':
                    E.push(SUDA[L].slice(1));
                    break;
            }
        }
    }
    ap();
    am.setUOR();
    ax = (function(D, i) {
        if (ac.top == ac) {
            return false;
        } else {
            try {
                if (A.body.clientHeight == 0) {
                    return false;
                }
                return A.body.clientHeight >= D && A.body.clientWidth >= i
                    ? false
                    : true;
            } catch (ay) {
                return true;
            }
        }
    })(320, 240);
    x = (function() {
        return false;
    })();
    q();
    if (
        typeof $CONFIG != 'undefined' &&
        typeof $CONFIG.bigpipe != 'undefined' &&
        $CONFIG.bigpipe === 'true' &&
        typeof STK != 'undefined' &&
        typeof STK.historyM != 'undefined' &&
        typeof STK.historyM.onpopstate != 'undefined'
    ) {
        STK.historyM.onpopstate(function(e, i) {
            if (i == true) {
                q();
            }
        });
    }
    if (I.length > 0) {
        W(I, function(i, e) {
            u.apply(null, i);
        });
    }
    if (M.length > 0) {
        W(M, function(i, e) {
            V.apply(null, i);
        });
    }
    if (E.length > 0) {
        W(E, function(i, e) {
            ak.apply(null, i);
        });
    }
    window.SUDA = window.SUDA || [];
    SUDA.log = function() {
        u.apply(null, arguments);
    };
    SUDA.acTrack = function() {
        V.apply(null, arguments);
    };
    SUDA.uaTrack = function() {
        ak.apply(null, arguments);
    };
    O(A.body, 'click', at);
})();
