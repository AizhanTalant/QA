! function (e) {
    function n(n) {
        for (var t, i, o = n[0], s = n[1], a = 0, u = []; a < o.length; a++) {
            i = o[a];
            r[i] && u.push(r[i][0]);
            r[i] = 0
        }
        for (t in s) Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t]);
        d && d(n);
        for (; u.length;) u.shift()()
    }
    var t = {},
        r = {
            "js/index.js": 0
        };

    function i(e) {
        return o.p + "" + e + ".js"
    }

    function o(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        e[n].call(r.exports, r, r.exports, o);
        r.l = !0;
        return r.exports
    }
    o.e = function (e) {
        var n = [],
            t = r[e];
        if (0 !== t)
            if (t) n.push(t[2]);
            else {
                var s = new Promise((function (n, i) {
                    t = r[e] = [n, i]
                }));
                n.push(t[2] = s);
                var a, u = document.getElementsByTagName("head")[0],
                    d = document.createElement("script");
                d.charset = "utf-8";
                d.timeout = 120;
                o.nc && d.setAttribute("nonce", o.nc);
                d.src = i(e);
                0 !== d.src.indexOf(window.location.origin + "/") && (d.crossOrigin = "anonymous");
                a = function (n) {
                    d.onerror = d.onload = null;
                    clearTimeout(l);
                    var t = r[e];
                    if (0 !== t) {
                        if (t) {
                            var i = n && ("load" === n.type ? "missing" : n.type),
                                o = n && n.target && n.target.src,
                                s = new Error("Loading chunk " + e + " failed.\n(" + i + ": " + o + ")");
                            s.type = i;
                            s.request = o;
                            t[1](s)
                        }
                        r[e] = void 0
                    }
                };
                var l = setTimeout((function () {
                    a({
                        type: "timeout",
                        target: d
                    })
                }), 12e4);
                d.onerror = d.onload = a;
                u.appendChild(d)
            } return Promise.all(n)
    };
    o.m = e;
    o.c = t;
    o.d = function (e, n, t) {
        o.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: t
        })
    };
    o.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    o.t = function (e, n) {
        1 & n && (e = o(e));
        if (8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        o.r(t);
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        });
        if (2 & n && "string" != typeof e)
            for (var r in e) o.d(t, r, function (n) {
                return e[n]
            }.bind(null, r));
        return t
    };
    o.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        o.d(n, "a", n);
        return n
    };
    o.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    };
    o.p = "//static.hsappstatic.net/cms-free-branding-lib/static-1.267/";
    o.oe = function (e) {
        console.error(e);
        throw e
    };
    var s = window.webpackJsonp = window.webpackJsonp || [],
        a = s.push.bind(s);
    s.push = n;
    s = s.slice();
    for (var u = 0; u < s.length; u++) n(s[u]);
    var d = a;
    o(o.s = 205)
}([function (e, n, t) {
    "use strict";
    let r;
    r = "undefined" != typeof NO_I18N_GLOBAL && !0 === NO_I18N_GLOBAL ? {} : window.I18n = window.I18n || {};
    n.a = r
}, function (e, n, t) {
    "use strict";
    (function (e) {
        t.d(n, "a", (function () {
            return r
        }));
        t.d(n, "b", (function () {
            return i
        }));

        function r() {
            return "undefined" != typeof window && window || void 0 !== e && e || {}
        }

        function i() {
            return r().hubspot = r().hubspot || {}
        }
    }).call(this, t(2))
}, function (e, n) {
    var t;
    t = function () {
        return this
    }();
    try {
        t = t || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (t = window)
    }
    e.exports = t
}, function (e, n, t) {
    "use strict";
    n.a = function (e, n) {
        const t = [{
            source: n,
            target: e
        }];
        for (; t.length > 0;) {
            const {
                source: e,
                target: n
            } = t.shift();
            for (const r in e) e.hasOwnProperty(r) && ("object" == typeof e[r] && "object" == typeof n[r] ? e[r] !== n[r] && t.push({
                source: e[r],
                target: n[r]
            }) : n[r] = e[r])
        }
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        en: {
            "cmsf-branding": {
                buttonLabel: "Built on HubSpot",
                dropdown: {
                    reportAbuse: "Report Abuse",
                    getCms: "Create your own free website"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        en: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} sec",
                    minutes: "{{ minutes }} min",
                    hours: "{{ hours }} hr",
                    hoursAndMinutes: "{{ hours }} hr {{ minutes }} min",
                    days: "{{ days }} days",
                    shortForm: {
                        seconds: "{{ seconds }}s",
                        minutes: "{{ minutes }}m",
                        hours: "{{ hours }}h",
                        days: "{{ days }}d",
                        hoursAndMinutes: "{{ hours }}h {{ minutes }}m"
                    }
                },
                dateTime: {
                    quarterAndYear: "Q{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, ext. {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        af: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} sekondes",
                    minutes: "{{ minutes }} minute",
                    hours: "{{ hours }} ure",
                    hoursAndMinutes: "{{ hours }} uur {{ minutes }} min",
                    days: "{{ days }} dae ",
                    shortForm: {
                        seconds: "{{ seconds }}s",
                        minutes: "{{ minutes }}m",
                        hours: "{{ hours }}u",
                        days: "{{ days }}d",
                        hoursAndMinutes: "{{ hours }}u{{ minutes }}m"
                    }
                },
                dateTime: {
                    quarterAndYear: "{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, uitbr. {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        "ar-eg": {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} ثانية",
                    minutes: "{{ minutes }} دقيقة",
                    hours: "{{ hours }} ساعة",
                    hoursAndMinutes: "{{ hours }} ساعة {{ minutes }} دقيقة",
                    days: "{{ days }} أيام",
                    shortForm: {
                        seconds: "{{ seconds }} ث",
                        minutes: "{{ minutes }} د",
                        hours: "{{ hours }} س",
                        days: "{{ days }} ي",
                        hoursAndMinutes: "{{ hours }} س {{ minutes }} د"
                    }
                },
                dateTime: {
                    quarterAndYear: "Q{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}، تمديد {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        bg: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} сек",
                    minutes: "{{ minutes }} мин",
                    hours: "{{ hours }} ч",
                    hoursAndMinutes: "{{ hours }} ч {{ minutes }} мин",
                    days: "{{ days }} дни",
                    shortForm: {
                        seconds: "{{ seconds }} сек",
                        minutes: "{{ minutes }} мин",
                        hours: "{{ hours }} ч",
                        days: "{{ days }} д",
                        hoursAndMinutes: "{{ hours }} ч {{ minutes }} мин"
                    }
                },
                dateTime: {
                    quarterAndYear: "Q{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, вътр. {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        bn: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }}সেক",
                    minutes: "{{ minutes }}মিনিট",
                    hours: "{{ hours }}ঘন্টা",
                    hoursAndMinutes: "{{ hours }}ঘন্টা {{ minutes }}মিনিট",
                    days: "{{ days }}দিন ",
                    shortForm: {
                        seconds: "{{ seconds }}সে",
                        minutes: "{{ minutes }}মি ",
                        hours: "{{ hours }}ঘ",
                        days: "{{ days }}দি ",
                        hoursAndMinutes: "{{ hours }}ঘ {{ minutes }}মি"
                    }
                },
                dateTime: {
                    quarterAndYear: "Q{{quarterNumber}}{{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}}{{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}},এক্সট.{{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        "ca-es": {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} s",
                    minutes: "{{ minutes }} min",
                    hours: "{{ hours }} h",
                    hoursAndMinutes: "{{ hours }} h {{ minutes }} min",
                    days: "{{ days }} dies",
                    shortForm: {
                        seconds: "{{ seconds }} s",
                        minutes: "{{ minutes }} min",
                        hours: "{{ hours }} h",
                        days: "{{ days }} d",
                        hoursAndMinutes: "{{ hours }} h {{ minutes }} m"
                    }
                },
                dateTime: {
                    quarterAndYear: "T {{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, ext. {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        cs: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} s",
                    minutes: "{{ minutes }} min",
                    hours: "{{ hours }} hod",
                    hoursAndMinutes: "{{ hours }} hod {{ minutes }} min",
                    days: "{{ days }} d",
                    shortForm: {
                        seconds: "{{ seconds }} s",
                        minutes: "{{ minutes }} m",
                        hours: "{{ hours }} h",
                        days: "{{ days }} d",
                        hoursAndMinutes: "{{ hours }} h {{ minutes }} m"
                    }
                },
                dateTime: {
                    quarterAndYear: "Q {{quarterNumber}}{{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}}{{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, linka {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        da: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} sek.",
                    minutes: "{{ minutes }}min.",
                    hours: "{{ hours }}t.",
                    hoursAndMinutes: "{{ hours }}t. {{ minutes }}min.",
                    days: "{{ days }}dg",
                    shortForm: {
                        seconds: "{{ seconds }}sek.",
                        minutes: "{{ minutes }}min.",
                        hours: "{{ hours }}t",
                        days: "{{ days }}dg",
                        hoursAndMinutes: "{{ hours }}t {{ minutes }}min."
                    }
                },
                dateTime: {
                    quarterAndYear: "Q{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, lokal {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        de: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} Sek.",
                    minutes: "{{ minutes }} Min.",
                    hours: "{{ hours }} Std.",
                    hoursAndMinutes: "{{ hours }} Std. {{ minutes }} Min.",
                    days: "{{ days }} Tage",
                    shortForm: {
                        seconds: "{{ seconds }} Sek.",
                        minutes: "{{ minutes }} Min.",
                        hours: "{{ hours }} Std.",
                        days: "{{ days }} Tage",
                        hoursAndMinutes: "{{ hours }} Std. {{ minutes }} Min."
                    }
                },
                dateTime: {
                    quarterAndYear: "Q{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, Durchwahl {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        el: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} δευτ.",
                    minutes: "{{ minutes }} λεπτ.",
                    hours: "{{ hours }} ώρ.",
                    hoursAndMinutes: "{{ hours }} ώρ. {{ minutes }} λεπτ.",
                    days: "{{ days }} ημέρες",
                    shortForm: {
                        seconds: "{{ seconds }}δ.",
                        minutes: "{{ minutes }}λ.",
                        hours: "{{ hours }}ώρ.",
                        days: "{{ days }}ημ.",
                        hoursAndMinutes: "{{ hours }}ώρ. {{ minutes }}λ."
                    }
                },
                dateTime: {
                    quarterAndYear: "{{quarterNumber}}ο τρίμ. {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, εσωτ. {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        "en-gb": {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} sec",
                    minutes: "{{ minutes }} min",
                    hours: "{{ hours }} hr",
                    hoursAndMinutes: "{{ hours }} hr {{ minutes }} min",
                    days: "{{ days }} days",
                    shortForm: {
                        seconds: "{{ seconds }}s",
                        minutes: "{{ minutes }}m",
                        hours: "{{ hours }}h",
                        days: "{{ days }}d",
                        hoursAndMinutes: "{{ hours }}h {{ minutes }}m"
                    }
                },
                dateTime: {
                    quarterAndYear: "Q{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, ext. {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        "es-mx": {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} s",
                    minutes: "{{ minutes }} min",
                    hours: "{{ hours }} h",
                    hoursAndMinutes: "{{ hours }} h {{ minutes }} min",
                    days: "{{ days }} días",
                    shortForm: {
                        seconds: "{{ seconds }}s",
                        minutes: "{{ minutes }}m",
                        hours: "{{ hours }}h",
                        days: "{{ days }}d",
                        hoursAndMinutes: "{{ hours }}h {{ minutes }}m"
                    }
                },
                dateTime: {
                    quarterAndYear: "T{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, ext. {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        es: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} seg",
                    minutes: "{{ minutes }} min",
                    hours: "{{ hours }} h",
                    hoursAndMinutes: "{{ hours }} h {{ minutes }} min",
                    days: "{{ days }} días",
                    shortForm: {
                        seconds: "{{ seconds }}s",
                        minutes: "{{ minutes }}m",
                        hours: "{{ hours }}h",
                        days: "{{ days }}d",
                        hoursAndMinutes: "{{ hours }}h {{ minutes }}m"
                    }
                },
                dateTime: {
                    quarterAndYear: "T{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, ext. {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        fi: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} s",
                    minutes: "{{ minutes }} min",
                    hours: "{{ hours }} h",
                    hoursAndMinutes: "{{ hours }} h {{ minutes }} min",
                    days: "{{ days }} vrk",
                    shortForm: {
                        seconds: "{{ seconds }} s",
                        minutes: "{{ minutes }} min",
                        hours: "{{ hours }} h",
                        days: "{{ days }} vrk",
                        hoursAndMinutes: "{{ hours }} h {{ minutes }} min"
                    }
                },
                dateTime: {
                    quarterAndYear: "K{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{amountNumberValue}} {{currencyCode}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, alanro {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        "fr-ca": {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} sec",
                    minutes: "{{ minutes }} min",
                    hours: "{{ hours }} h",
                    hoursAndMinutes: "{{ hours }} h {{ minutes }} min",
                    days: "{{ days }} jours",
                    shortForm: {
                        seconds: "{{ seconds }}s",
                        minutes: "{{ minutes }}m",
                        hours: "{{ hours }}h",
                        days: "{{ days }}d",
                        hoursAndMinutes: "{{ hours }}h{{ minutes }}m"
                    }
                },
                dateTime: {
                    quarterAndYear: "T{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{amountNumberValue}} {{currencyCode}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, poste {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        fr: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} s",
                    minutes: "{{ minutes }} min",
                    hours: "{{ hours }} h",
                    hoursAndMinutes: "{{ hours }} h {{ minutes }} min",
                    days: "{{ days }} jours",
                    shortForm: {
                        seconds: "{{ seconds }} s",
                        minutes: "{{ minutes }} m",
                        hours: "{{ hours }} h",
                        days: "{{ days }} j",
                        hoursAndMinutes: "{{ hours }} h {{ minutes }} m"
                    }
                },
                dateTime: {
                    quarterAndYear: "T{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, ext. {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        "he-il": {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} שניות",
                    minutes: "{{ minutes }} דקות",
                    hours: "{{ hours }} שעות",
                    hoursAndMinutes: "{{ hours }} שעות {{ minutes }} דקות",
                    days: "{{ days }} ימים",
                    shortForm: {
                        seconds: "{{ seconds }} שנ'",
                        minutes: "{{ minutes }} דק'",
                        hours: "{{ hours }} שע'",
                        days: "{{ days }} ימ'",
                        hoursAndMinutes: "{{ hours }} שע' {{ minutes }} דק'"
                    }
                },
                dateTime: {
                    quarterAndYear: "רבעון{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{amountNumberValue}} {{currencyCode}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, שלוחה {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        hr: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} s",
                    minutes: "{{ minutes }} min.",
                    hours: "{{ hours }} h",
                    hoursAndMinutes: "{{ hours }} h {{ minutes }} min.",
                    days: "{{ days }} dana",
                    shortForm: {
                        seconds: "{{ seconds }}s",
                        minutes: "{{ minutes }}m",
                        hours: "{{ hours }}h",
                        days: "{{ days }}d",
                        hoursAndMinutes: "{{ hours }}h {{ minutes }}m"
                    }
                },
                dateTime: {
                    quarterAndYear: "Q{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, lok. {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        hu: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} mp.",
                    minutes: "{{ minutes }} p.",
                    hours: "{{ hours }} ó.",
                    hoursAndMinutes: "{{ hours }} ó. {{ minutes }} p.",
                    days: "{{ days }} nap",
                    shortForm: {
                        seconds: "{{ seconds }} mp",
                        minutes: "{{ minutes }} p",
                        hours: "{{ hours }} ó",
                        days: "{{ days }} n",
                        hoursAndMinutes: "{{ hours }} ó {{ minutes }} p"
                    }
                },
                dateTime: {
                    quarterAndYear: "{{yearNumber}}. {{quarterNumber}}. né."
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{amountNumberValue}} {{currencyCode}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, {{extension}} mellék"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        id: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} dtk",
                    minutes: "{{ minutes }}  mnt",
                    hours: "{{ hours }} jam",
                    hoursAndMinutes: "{{ hours }} jam {{ minutes }} mnt",
                    days: "{{ days }} hari",
                    shortForm: {
                        seconds: "{{ seconds }}d",
                        minutes: "{{ minutes }}m",
                        hours: "{{ hours }}j",
                        days: "{{ days }}h",
                        hoursAndMinutes: "{{ hours }}j {{ minutes }}m"
                    }
                },
                dateTime: {
                    quarterAndYear: "K{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, ext. {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        it: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} sec",
                    minutes: "{{ minutes }} min",
                    hours: "{{ hours }} h",
                    hoursAndMinutes: "{{ hours }} h {{ minutes }} min",
                    days: "{{ days }} gg",
                    shortForm: {
                        seconds: "{{ seconds }}s",
                        minutes: "{{ minutes }}m",
                        hours: "{{ hours }}h",
                        days: "{{ days }}g",
                        hoursAndMinutes: "{{ hours }}h {{ minutes }}m"
                    }
                },
                dateTime: {
                    quarterAndYear: "T{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, est. {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        ja: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }}秒",
                    minutes: "{{ minutes }}分",
                    hours: "{{ hours }}時間",
                    hoursAndMinutes: "{{ hours }}時間{{ minutes }}分",
                    days: "{{ days }}日",
                    shortForm: {
                        seconds: "{{ seconds }}秒",
                        minutes: "{{ minutes }}分",
                        hours: "{{ hours }}時間",
                        days: "{{ days }}日",
                        hoursAndMinutes: "{{ hours }}時間{{ minutes }}分"
                    }
                },
                dateTime: {
                    quarterAndYear: "{{yearNumber}}年Q{{quarterNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}、内線{{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        ko: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }}초",
                    minutes: "{{ minutes }}분",
                    hours: "{{ hours }}시간",
                    hoursAndMinutes: "{{ hours }}시간 {{ minutes }}분",
                    days: "{{ days }}일",
                    shortForm: {
                        seconds: "{{ seconds }}초",
                        minutes: "{{ minutes }}분",
                        hours: "{{ hours }}시간",
                        days: "{{ days }}일",
                        hoursAndMinutes: "{{ hours }}시간 {{ minutes }}분"
                    }
                },
                dateTime: {
                    quarterAndYear: "{{yearNumber}} {{quarterNumber}}분기"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}}{{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, 내선번호: {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        lt: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} sek.",
                    minutes: "{{ minutes }} min.",
                    hours: "{{ hours }} val.",
                    hoursAndMinutes: "{{ hours }} val. {{ minutes }} min.",
                    days: "{{ days }} d.",
                    shortForm: {
                        seconds: "{{ seconds }} sek.",
                        minutes: "{{ minutes }} min.",
                        hours: "{{ hours }} val.",
                        days: "{{ days }} d.",
                        hoursAndMinutes: "{{ hours }} val. {{ minutes }} min."
                    }
                },
                dateTime: {
                    quarterAndYear: "{{yearNumber}} m. {{quarterNumber}} ketv."
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{amountNumberValue}} {{currencyCode}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, plėt. {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        ms: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} saat",
                    minutes: "{{ minutes }} min",
                    hours: "{{ hours }} jam",
                    hoursAndMinutes: "{{ hours }} jam {{ minutes }} min",
                    days: "{{ days }} hari",
                    shortForm: {
                        seconds: "{{ seconds }}s",
                        minutes: "{{ minutes }}m",
                        hours: "{{ hours }}j",
                        days: "{{ days }}h",
                        hoursAndMinutes: "{{ hours }}j {{ minutes }}m"
                    }
                },
                dateTime: {
                    quarterAndYear: "Q{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, samb. {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        nl: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} sec",
                    minutes: "{{ minutes }} min",
                    hours: "{{ hours }} uur",
                    hoursAndMinutes: "{{ hours }} uur {{ minutes }} min",
                    days: "{{ days }} dagen",
                    shortForm: {
                        seconds: "{{ seconds }}s",
                        minutes: "{{ minutes }}m",
                        hours: "{{ hours }}u",
                        days: "{{ days }}d",
                        hoursAndMinutes: "{{ hours }}u {{ minutes }}m"
                    }
                },
                dateTime: {
                    quarterAndYear: "K{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, ext. {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        "no-no": {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} sek",
                    minutes: "{{ minutes }} min",
                    hours: "{{ hours }} tm",
                    hoursAndMinutes: "{{ hours }} tm {{ minutes }} min",
                    days: "{{ days }} dager",
                    shortForm: {
                        seconds: "{{ seconds }}s",
                        minutes: "{{ minutes }}m",
                        hours: "{{ hours }}t",
                        days: "{{ days }}d",
                        hoursAndMinutes: "{{ hours }}t {{ minutes }}m"
                    }
                },
                dateTime: {
                    quarterAndYear: "Q{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, utvidelse {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        pl: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} s",
                    minutes: "{{ minutes }}min",
                    hours: "{{ hours }} h",
                    hoursAndMinutes: "{{ hours }} h {{ minutes }} min",
                    days: "{{ days }} dni",
                    shortForm: {
                        seconds: "{{ seconds }} s",
                        minutes: "{{ minutes }} min",
                        hours: "{{ hours }} godz",
                        days: "{{ days }} dn.",
                        hoursAndMinutes: "{{ hours }} godz. {{ minutes }} min"
                    }
                },
                dateTime: {
                    quarterAndYear: "Q{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{amountNumberValue}} {{currencyCode}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, rozsz. {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        "pt-br": {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} s",
                    minutes: "{{ minutes }} m",
                    hours: "{{ hours }} h",
                    hoursAndMinutes: "{{ hours }} h {{ minutes }} m",
                    days: "{{ days }} dias",
                    shortForm: {
                        seconds: "{{ seconds }}s",
                        minutes: "{{ minutes }}m",
                        hours: "{{ hours }}h",
                        days: "{{ days }}d",
                        hoursAndMinutes: "{{ hours }}h {{ minutes }}m"
                    }
                },
                dateTime: {
                    quarterAndYear: "T{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, ramal {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        "pt-pt": {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} seg.",
                    minutes: "{{ minutes }} min.",
                    hours: "{{ hours }} h",
                    hoursAndMinutes: "{{ hours }} h {{ minutes }} min.",
                    days: "{{ days }} dias",
                    shortForm: {
                        seconds: "{{ seconds }}s",
                        minutes: "{{ minutes }}m",
                        hours: "{{ hours }}h",
                        days: "{{ days }}d",
                        hoursAndMinutes: "{{ hours }}h {{ minutes }}m"
                    }
                },
                dateTime: {
                    quarterAndYear: "T{{quarterNumber}} de {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{amountNumberValue}} {{currencyCode}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, ext. {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        ro: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} sec",
                    minutes: "{{ minutes }} min",
                    hours: "{{ hours }} ore",
                    hoursAndMinutes: "{{ hours }} ore {{ minutes }} min",
                    days: "{{ days }} zile",
                    shortForm: {
                        seconds: "{{ seconds }}s",
                        minutes: "{{ minutes }}m",
                        hours: "{{ hours }}h",
                        days: "{{ days }}z",
                        hoursAndMinutes: "{{ hours }}h {{ minutes }}m"
                    }
                },
                dateTime: {
                    quarterAndYear: "T{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, ext. {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        ru: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} с",
                    minutes: "{{ minutes }} мин",
                    hours: "{{ hours }} ч",
                    hoursAndMinutes: "{{ hours }} ч {{ minutes }} мин",
                    days: "{{ days }} дн.",
                    shortForm: {
                        seconds: "{{ seconds }}с",
                        minutes: "{{ minutes }}м",
                        hours: "{{ hours }}ч",
                        days: "{{ days }}д",
                        hoursAndMinutes: "{{ hours }}ч {{ minutes }}м"
                    }
                },
                dateTime: {
                    quarterAndYear: "Кв.{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, добав. {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        sk: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} s",
                    minutes: "{{ minutes }} min.",
                    hours: "{{ hours }} hod.",
                    hoursAndMinutes: "{{ hours }} hod. {{ minutes }} min.",
                    days: "{{ days }} d.",
                    shortForm: {
                        seconds: "{{ seconds }} s",
                        minutes: "{{ minutes }} min.",
                        hours: "{{ hours }} hod.",
                        days: "{{ days }} d.",
                        hoursAndMinutes: "{{ hours }} hod. {{ minutes }} min."
                    }
                },
                dateTime: {
                    quarterAndYear: "Kvartál {{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, klapka {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        sl: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} sekund",
                    minutes: "{{ minutes }} min",
                    hours: "{{ hours }} ur",
                    hoursAndMinutes: "{{ hours }} ur {{ minutes }} minut",
                    days: "{{ days }} dni",
                    shortForm: {
                        seconds: "{{ seconds }} sekund",
                        minutes: "{{ minutes }} minut",
                        hours: "{{ hours }} ur",
                        days: "{{ days }} dni",
                        hoursAndMinutes: "{{ hours }} ur {{ minutes }} minut"
                    }
                },
                dateTime: {
                    quarterAndYear: "Q{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, zun. {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        sv: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} sek",
                    minutes: "{{ minutes }} min",
                    hours: "{{ hours }} tim",
                    hoursAndMinutes: "{{ hours }} tim {{ minutes }} min",
                    days: "{{ days }} dagar",
                    shortForm: {
                        seconds: "{{ seconds }}sek",
                        minutes: "{{ minutes }}min",
                        hours: "{{ hours }}tim",
                        days: "{{ days }}dagar",
                        hoursAndMinutes: "{{ hours }}tim {{ minutes }}min"
                    }
                },
                dateTime: {
                    quarterAndYear: "Q{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }} / {{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, anknytning {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        th: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} วินาที",
                    minutes: "{{ minutes }} นาที",
                    hours: "{{ hours }} ชั่วโมง",
                    hoursAndMinutes: "{{ hours }} ชั่วโมง {{ minutes }} นาที",
                    days: "{{ days }} วัน",
                    shortForm: {
                        seconds: "{{ seconds }} วินาที",
                        minutes: "{{ minutes }} นาที",
                        hours: "{{ hours }} ชม.",
                        days: "{{ days }} วัน",
                        hoursAndMinutes: "{{ hours }} ชม. {{ minutes }} นาที"
                    }
                },
                dateTime: {
                    quarterAndYear: "ไตรมาส {{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{amountNumberValue}} {{currencyCode}}",
                    phoneNumberWithExtension: "{{phoneNumber}} ต่อ {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        tl: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} segundo",
                    minutes: "{{ minutes }} minuto",
                    hours: "{{ hours }} oras",
                    hoursAndMinutes: "{{ hours }} oras {{ minutes }} minuto",
                    days: "{{ days }} (na) araw",
                    shortForm: {
                        seconds: "{{ seconds }}s",
                        minutes: "{{ minutes }}m",
                        hours: "{{ hours }}h",
                        days: "{{ days }}d",
                        hoursAndMinutes: "{{ hours }}h {{ minutes }}m"
                    }
                },
                dateTime: {
                    quarterAndYear: "Q{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, ext. {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        tr: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} sn.",
                    minutes: "{{ minutes }} dk.",
                    hours: "{{ hours }} sa.",
                    hoursAndMinutes: "{{ hours }} sa. {{ minutes }} dk.",
                    days: "{{ days }} gün",
                    shortForm: {
                        seconds: "{{ seconds }}sn.",
                        minutes: "{{ minutes }}dk.",
                        hours: "{{ hours }}sa.",
                        days: "{{ days }}gün",
                        hoursAndMinutes: "{{ hours }}sa. {{ minutes }}dk."
                    }
                },
                dateTime: {
                    quarterAndYear: "{{quarterNumber}}. Ç {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, dahili {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        uk: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} секунд",
                    minutes: "{{ minutes }} хвилин",
                    hours: "{{ hours }} годин",
                    hoursAndMinutes: "{{ hours }} годин {{ minutes }} хвилин",
                    days: "{{ days }} днів",
                    shortForm: {
                        seconds: "{{ seconds }}с",
                        minutes: "{{ minutes }}хв",
                        hours: "{{ hours }}год",
                        days: "{{ days }}д",
                        hoursAndMinutes: "{{ hours }}год {{ minutes }}хв"
                    }
                },
                dateTime: {
                    quarterAndYear: "Кв.{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, дод. {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        vi: {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} giây",
                    minutes: "{{ minutes }} phút",
                    hours: "{{ hours }} giờ",
                    hoursAndMinutes: "{{ hours }} giờ {{ minutes }} phút",
                    days: "{{ days }} ngày",
                    shortForm: {
                        seconds: "{{ seconds }} giây",
                        minutes: "{{ minutes }} phút",
                        hours: "{{ hours }} giờ",
                        days: "{{ days }} ngày",
                        hoursAndMinutes: "{{ hours }} giờ {{ minutes }} phút"
                    }
                },
                dateTime: {
                    quarterAndYear: "Q{{quarterNumber}} {{yearNumber}}"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{amountNumberValue}} {{currencyCode}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, máy lẻ {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        "x-pseudo": {
            i18n: {
                duration: {
                    seconds: "[{{ şḗƈǿƞḓş }} şḗƈ ǈϱ 鶱鶱ǅſſςϐ ı]",
                    minutes: "[{{ ḿīƞŭŧḗş }} ḿīƞ ϰϱ ϕ衋鶱ϑϖ衋ϱ ϑ]",
                    hours: "[{{ ħǿŭřş }} ħř 衋ϰ ǋϐϱǈϕ 靐ı]",
                    hoursAndMinutes: "[{{ ħǿŭřş }} ħř {{ ḿīƞŭŧḗş }} ḿīƞ ıϱ ıǅϰϑẛ 靐ı]",
                    days: "[{{ ḓȧẏş }} ḓȧẏş ıϑ 衋ſ靐ǋ ΐǋ]",
                    shortForm: {
                        seconds: "[{{ şḗƈǿƞḓş }}ş ſı ΐǲǈς鶱ǈǅ ẛ]",
                        minutes: "[{{ ḿīƞŭŧḗş }}ḿ ǅϱ ıϐςϑıǅẛ ı]",
                        hours: "[{{ ħǿŭřş }}ħ ϰς ǅǅ靐ϵǋ ǋ]",
                        days: "[{{ ḓȧẏş }}ḓ ϖ靐 ϑϱ靐衋 ϑϱϕ]",
                        hoursAndMinutes: "[{{ ħǿŭřş }}ħ {{ ḿīƞŭŧḗş }}ḿ 衋靐 ϕϵſϰ靐 ϵ]"
                    }
                },
                dateTime: {
                    quarterAndYear: "[Ɋ{{quarterNumber}} {{yearNumber}} 鶱ϕϖſǋẛıǋϕǈ]"
                },
                numberRepresentation: {
                    fraction: "[{{ ƞŭḿḗřȧŧǿř }}/{{ ḓḗƞǿḿīƞȧŧǿř }} ςǅ 衋鶱ϖ鶱ςǲǈ]",
                    numberWithCurrencyCode: "[{{currencyCode}} {{amountNumberValue}} ϑϱϰϐϑ衋ǋϐ鶱ΐ靐]",
                    phoneNumberWithExtension: "[{{phoneNumber}}, ḗẋŧ. {{extension}} ϑıϐϵǲϑΐϵ鶱ϕΐ]"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        "zh-cn": {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} 秒",
                    minutes: "{{ minutes }} 分钟",
                    hours: "{{ hours }} 小时",
                    hoursAndMinutes: "{{ hours }} 小时 {{ minutes }} 分钟",
                    days: "{{ days }} 天",
                    shortForm: {
                        seconds: "{{ seconds }} 秒",
                        minutes: "{{ minutes }} 分钟",
                        hours: "{{ hours }} 小时",
                        days: "{{ days }} 天",
                        hoursAndMinutes: "{{ hours }} 小时 {{ minutes }} 分钟"
                    }
                },
                dateTime: {
                    quarterAndYear: "{{yearNumber}} 年第 {{quarterNumber}} 季度"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}，分机 {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        "zh-hk": {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} 秒",
                    minutes: "{{ minutes }} 分鐘",
                    hours: "{{ hours }} 小時",
                    hoursAndMinutes: "{{ hours }} 小時 {{ minutes }} 分鐘",
                    days: "{{ days }} 日",
                    shortForm: {
                        seconds: "{{ seconds }} 秒",
                        minutes: "{{ minutes }} 分",
                        hours: "{{ hours }} 小時",
                        days: "{{ days }} 日",
                        hoursAndMinutes: "{{ hours }} 小時 {{ minutes }} 分"
                    }
                },
                dateTime: {
                    quarterAndYear: "{{yearNumber}} 年第 {{quarterNumber}} 季 "
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, ext. {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    t.d(n, "translations", (function () {
        return r
    }));
    i({
        "zh-tw": {
            i18n: {
                duration: {
                    seconds: "{{ seconds }} 秒",
                    minutes: "{{ minutes }} 分鐘",
                    hours: "{{ hours }} 小時",
                    hoursAndMinutes: "{{ hours }} 小時 {{ minutes }} 分鐘",
                    days: "{{ days }} 日",
                    shortForm: {
                        seconds: "{{ seconds }} 秒",
                        minutes: "{{ minutes }} 分",
                        hours: "{{ hours }} 小時",
                        days: "{{ days }} 日",
                        hoursAndMinutes: "{{ hours }} 小時 {{ minutes }} 分"
                    }
                },
                dateTime: {
                    quarterAndYear: "{{yearNumber}} 第 {{quarterNumber}} 季"
                },
                numberRepresentation: {
                    fraction: "{{ numerator }}/{{ denominator }}",
                    numberWithCurrencyCode: "{{currencyCode}} {{amountNumberValue}}",
                    phoneNumberWithExtension: "{{phoneNumber}}, ext. {{extension}}"
                }
            }
        }
    });
    var r;

    function i(e) {
        (r = r || []).push(e)
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.en", {
        number: {
            format: {
                precision: 3,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: ",",
                    format: "%n%",
                    precision: 0
                }
            },
            currency: {
                format: {
                    precision: 2,
                    strip_insignificant_zeros: !1
                }
            },
            human: {
                storage_units: {
                    units: {
                        byte: {
                            one: " byte",
                            other: " bytes"
                        },
                        kb: "kb",
                        mb: "mb",
                        gb: "gb",
                        tb: "tb"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " and ",
                        lastWordConnector: ", and "
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " or ",
                        lastWordConnector: ", or "
                    }
                },
                abbreviated: {
                    long: {
                        1e3: {
                            one: "0 thousand",
                            other: "0 thousand"
                        },
                        1e4: {
                            one: "00 thousand",
                            other: "00 thousand"
                        },
                        1e5: {
                            one: "000 thousand",
                            other: "000 thousand"
                        },
                        1e6: {
                            one: "0 million",
                            other: "0 million"
                        },
                        1e7: {
                            one: "00 million",
                            other: "00 million"
                        },
                        1e8: {
                            one: "000 million",
                            other: "000 million"
                        },
                        1e9: {
                            one: "0 billion",
                            other: "0 billion"
                        },
                        1e10: {
                            one: "00 billion",
                            other: "00 billion"
                        },
                        1e11: {
                            one: "000 billion",
                            other: "000 billion"
                        },
                        1e12: {
                            one: "0 trillion",
                            other: "0 trillion"
                        },
                        1e13: {
                            one: "00 trillion",
                            other: "00 trillion"
                        },
                        1e14: {
                            one: "000 trillion",
                            other: "000 trillion"
                        }
                    },
                    short: {
                        1e3: {
                            one: "0K",
                            other: "0K"
                        },
                        1e4: {
                            one: "00K",
                            other: "00K"
                        },
                        1e5: {
                            one: "000K",
                            other: "000K"
                        },
                        1e6: {
                            one: "0M",
                            other: "0M"
                        },
                        1e7: {
                            one: "00M",
                            other: "00M"
                        },
                        1e8: {
                            one: "000M",
                            other: "000M"
                        },
                        1e9: {
                            one: "0B",
                            other: "0B"
                        },
                        1e10: {
                            one: "00B",
                            other: "00B"
                        },
                        1e11: {
                            one: "000B",
                            other: "000B"
                        },
                        1e12: {
                            one: "0T",
                            other: "0T"
                        },
                        1e13: {
                            one: "00T",
                            other: "00T"
                        },
                        1e14: {
                            one: "000T",
                            other: "000T"
                        }
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.d(n, "a", (function () {
        return s
    }));
    var r = t(3),
        i = t(0);
    const o = "I18n.translations.";

    function s(e, n) {
        if (!e.startsWith(o)) throw new Error("unexpected target in hns shim");
        const t = e.substring(o.length);
        Object(r.a)(i.a.translations, {
            [t]: n
        })
    }
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.bn", {
        number: {
            currency: {
                format: {
                    delimiter: ",",
                    format: "%u %n",
                    precision: 2,
                    separator: ".",
                    significant: !1,
                    strip_insignificant_zeros: !1
                }
            },
            format: {
                delimiter: ",",
                precision: 2,
                separator: ".",
                significant: !1,
                strip_insignificant_zeros: !1
            },
            percentage: {
                format: {
                    delimiter: "",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: "Byte",
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.cs", {
        number: {
            currency: {
                format: {
                    delimiter: " ",
                    format: "%u%n",
                    precision: 2,
                    separator: ",",
                    significant: !1,
                    strip_insignificant_zeros: !1
                }
            },
            format: {
                delimiter: " ",
                precision: 3,
                separator: ",",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: " ",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "B",
                            few: "B",
                            other: "B"
                        },
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.da", {
        number: {
            currency: {
                format: {
                    delimiter: ".",
                    format: "%u%n",
                    precision: 2,
                    separator: ",",
                    significant: !1,
                    strip_insignificant_zeros: !1
                }
            },
            format: {
                delimiter: ".",
                precision: 3,
                separator: ",",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: ".",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "Byte",
                            other: "Bytes"
                        },
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.de", {
        number: {
            format: {
                precision: 3,
                separator: ",",
                delimiter: ".",
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    precision: 0
                }
            },
            currency: {
                format: {
                    strip_insignificant_zeros: !1,
                    unit: "€",
                    precision: 2,
                    format: "%n %u",
                    delimiter: ".",
                    separator: ","
                }
            },
            human: {
                storage_units: {
                    units: {
                        byte: " Byte",
                        kb: "kb",
                        mb: "mb",
                        gb: "gb",
                        tb: "tb"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " und ",
                        lastWordConnector: " und "
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " oder ",
                        lastWordConnector: " oder "
                    }
                },
                abbreviated: {
                    long: {
                        1e3: {
                            one: "0 Tausend",
                            other: "0 Tausend"
                        },
                        1e4: {
                            one: "00 Tausend",
                            other: "00 Tausend"
                        },
                        1e5: {
                            one: "000 Tausend",
                            other: "000 Tausend"
                        },
                        1e6: {
                            one: "0 Million",
                            other: "0 Millionen"
                        },
                        1e7: {
                            one: "00 Millionen",
                            other: "00 Millionen"
                        },
                        1e8: {
                            one: "000 Millionen",
                            other: "000 Millionen"
                        },
                        1e9: {
                            one: "0 Milliarde",
                            other: "0 Milliarden"
                        },
                        1e10: {
                            one: "00 Milliarden",
                            other: "00 Milliarden"
                        },
                        1e11: {
                            one: "000 Milliarden",
                            other: "000 Milliarden"
                        },
                        1e12: {
                            one: "0 Billion",
                            other: "0 Billionen"
                        },
                        1e13: {
                            one: "00 Billionen",
                            other: "00 Billionen"
                        },
                        1e14: {
                            one: "000 Billionen",
                            other: "000 Billionen"
                        }
                    },
                    short: {
                        1e3: {
                            one: "0 Tsd.",
                            other: "0 Tsd."
                        },
                        1e4: {
                            one: "00 Tsd.",
                            other: "00 Tsd."
                        },
                        1e5: {
                            one: "000 Tsd.",
                            other: "000 Tsd."
                        },
                        1e6: {
                            one: "0 Mio",
                            other: "0 Mio"
                        },
                        1e7: {
                            one: "00 Mio",
                            other: "00 Mio"
                        },
                        1e8: {
                            one: "000 Mio",
                            other: "000 Mio"
                        },
                        1e9: {
                            one: "0 Mrd",
                            other: "0 Mrd"
                        },
                        1e10: {
                            one: "00 Mrd",
                            other: "00 Mrd"
                        },
                        1e11: {
                            one: "000 Mrd",
                            other: "000 Mrd"
                        },
                        1e12: {
                            one: "0 Bio.",
                            other: "0 Bio."
                        },
                        1e13: {
                            one: "00 Bio.",
                            other: "00 Bio."
                        },
                        1e14: {
                            one: "000 Bio.",
                            other: "000 Bio."
                        }
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.el", {
        number: {
            currency: {
                format: {
                    delimiter: ".",
                    format: "%u%n",
                    precision: 2,
                    separator: ",",
                    significant: !1,
                    strip_insignificant_zeros: !1
                }
            },
            format: {
                delimiter: ".",
                precision: 3,
                separator: ",",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: ".",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "Byte",
                            other: "Bytes"
                        },
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.en-au", {
        number: {
            currency: {
                format: {
                    delimiter: ",",
                    format: "%u%n",
                    precision: 2,
                    separator: ".",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "$"
                }
            },
            format: {
                delimiter: ",",
                precision: 3,
                separator: ".",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: "",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "Byte",
                            other: "Bytes"
                        },
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " and ",
                        lastWordConnector: ", and "
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " or ",
                        lastWordConnector: ", or "
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.en-ca", {
        number: {
            currency: {
                format: {
                    delimiter: ",",
                    format: "%u%n",
                    precision: 2,
                    separator: ".",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "$"
                }
            },
            format: {
                delimiter: ",",
                precision: 3,
                separator: ".",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: "",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "Byte",
                            other: "Bytes"
                        },
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " and ",
                        lastWordConnector: ", and "
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " or ",
                        lastWordConnector: ", or "
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.en-gb", {
        number: {
            currency: {
                format: {
                    delimiter: ",",
                    format: "%u%n",
                    precision: 2,
                    separator: ".",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "£"
                }
            },
            format: {
                delimiter: ",",
                precision: 3,
                separator: ".",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: "",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "Byte",
                            other: "Bytes"
                        },
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " and ",
                        lastWordConnector: ", and "
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " or ",
                        lastWordConnector: ", or "
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.en-ie", {
        number: {
            currency: {
                format: {
                    delimiter: ",",
                    format: "%u%n",
                    precision: 2,
                    separator: ".",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "€"
                }
            },
            format: {
                delimiter: ",",
                precision: 3,
                separator: ".",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: "",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "Byte",
                            other: "Bytes"
                        },
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " and ",
                        lastWordConnector: ", and "
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " or ",
                        lastWordConnector: ", or "
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.en-in", {
        number: {
            currency: {
                format: {
                    delimiter: ",",
                    format: "%u%n",
                    precision: 2,
                    separator: ".",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "₹"
                }
            },
            format: {
                delimiter: ",",
                precision: 3,
                separator: ".",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: "",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "Byte",
                            other: "Bytes"
                        },
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " and ",
                        lastWordConnector: ", and "
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " or ",
                        lastWordConnector: ", or "
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.en-nz", {
        number: {
            currency: {
                format: {
                    delimiter: ",",
                    format: "%u%n",
                    precision: 2,
                    separator: ".",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "$"
                }
            },
            format: {
                delimiter: ",",
                precision: 3,
                separator: ".",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: "",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "Byte",
                            other: "Bytes"
                        },
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " and ",
                        lastWordConnector: ", and "
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " or ",
                        lastWordConnector: ", or "
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.en-us", {
        number: {
            currency: {
                format: {
                    delimiter: ",",
                    format: "%u%n",
                    precision: 2,
                    separator: ".",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "$"
                }
            },
            format: {
                delimiter: ",",
                precision: 3,
                separator: ".",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: ",",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "Byte",
                            other: "Bytes"
                        },
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " and ",
                        lastWordConnector: ", and "
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " or ",
                        lastWordConnector: ", or "
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.es-ar", {
        number: {
            currency: {
                format: {
                    delimiter: ".",
                    format: "%u%n",
                    precision: 2,
                    separator: ",",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "$"
                }
            },
            format: {
                delimiter: ".",
                precision: 3,
                separator: ",",
                significant: !0,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: ",",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "Byte",
                            other: "Bytes"
                        },
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " y ",
                        lastWordConnector: " y "
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " o ",
                        lastWordConnector: ", o "
                    }
                },
                abbreviated: {
                    long: {
                        1e3: {
                            one: "0 mil",
                            other: "0 mil"
                        },
                        1e4: {
                            one: "00 mil",
                            other: "00 mil"
                        },
                        1e5: {
                            one: "000 mil",
                            other: "000 mil"
                        },
                        1e6: {
                            one: "0 millón",
                            other: "0 millones"
                        },
                        1e7: {
                            one: "00 millones",
                            other: "00 millones"
                        },
                        1e8: {
                            one: "000 millones",
                            other: "000 millones"
                        },
                        1e9: {
                            one: "0 mil millones",
                            other: "0 mil millones"
                        },
                        1e10: {
                            one: "00 mil millones",
                            other: "00 mil millones"
                        },
                        1e11: {
                            one: "000 mil millones",
                            other: "000 mil millones"
                        },
                        1e12: {
                            one: "0 billón",
                            other: "0 billones"
                        },
                        1e13: {
                            one: "00 billones",
                            other: "00 billones"
                        },
                        1e14: {
                            one: "000 billones",
                            other: "000 billones"
                        }
                    },
                    short: {
                        1e3: {
                            one: "0K",
                            other: "0K"
                        },
                        1e4: {
                            one: "00K",
                            other: "00K"
                        },
                        1e5: {
                            one: "000K",
                            other: "000K"
                        },
                        1e6: {
                            one: "0MM",
                            other: "0MM"
                        },
                        1e7: {
                            one: "00MM",
                            other: "00MM"
                        },
                        1e8: {
                            one: "000MM",
                            other: "000MM"
                        },
                        1e9: {
                            one: "0000MM",
                            other: "0000MM"
                        },
                        1e10: {
                            one: "00MRD",
                            other: "00MRD"
                        },
                        1e11: {
                            one: "000MRD",
                            other: "000MRD"
                        },
                        1e12: {
                            one: "0B",
                            other: "0B"
                        },
                        1e13: {
                            one: "00B",
                            other: "00B"
                        },
                        1e14: {
                            one: "000B",
                            other: "000B"
                        }
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.es-mx", {
        number: {
            currency: {
                format: {
                    delimiter: ",",
                    format: "%u%n",
                    precision: 2,
                    separator: ".",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "$"
                }
            },
            format: {
                delimiter: ",",
                precision: 3,
                separator: ".",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: ",",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "Byte",
                            other: "Bytes"
                        },
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " y ",
                        lastWordConnector: " y "
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " o ",
                        lastWordConnector: ", o "
                    }
                },
                abbreviated: {
                    long: {
                        1e3: {
                            one: "0 mil",
                            other: "0 mil"
                        },
                        1e4: {
                            one: "00 mil",
                            other: "00 mil"
                        },
                        1e5: {
                            one: "000 mil",
                            other: "000 mil"
                        },
                        1e6: {
                            one: "0 millón",
                            other: "0 millones"
                        },
                        1e7: {
                            one: "00 millones",
                            other: "00 millones"
                        },
                        1e8: {
                            one: "000 millones",
                            other: "000 millones"
                        },
                        1e9: {
                            one: "0 mil millones",
                            other: "0 mil millones"
                        },
                        1e10: {
                            one: "00 mil millones",
                            other: "00 mil millones"
                        },
                        1e11: {
                            one: "000 mil millones",
                            other: "000 mil millones"
                        },
                        1e12: {
                            one: "0 billón",
                            other: "0 billones"
                        },
                        1e13: {
                            one: "00 billones",
                            other: "00 billones"
                        },
                        1e14: {
                            one: "000 billones",
                            other: "000 billones"
                        }
                    },
                    short: {
                        1e3: {
                            one: "0K",
                            other: "0K"
                        },
                        1e4: {
                            one: "00K",
                            other: "00K"
                        },
                        1e5: {
                            one: "000K",
                            other: "000K"
                        },
                        1e6: {
                            one: "0M",
                            other: "0M"
                        },
                        1e7: {
                            one: "00M",
                            other: "00M"
                        },
                        1e8: {
                            one: "000M",
                            other: "000M"
                        },
                        1e9: {
                            one: "0000M",
                            other: "0000M"
                        },
                        1e10: {
                            one: "00MRD",
                            other: "00MRD"
                        },
                        1e11: {
                            one: "000MRD",
                            other: "000MRD"
                        },
                        1e12: {
                            one: "0B",
                            other: "0B"
                        },
                        1e13: {
                            one: "00B",
                            other: "00B"
                        },
                        1e14: {
                            one: "000B",
                            other: "000B"
                        }
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.es", {
        number: {
            format: {
                precision: 3,
                separator: ",",
                delimiter: ".",
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    precision: 0
                }
            },
            currency: {
                format: {
                    strip_insignificant_zeros: !1,
                    unit: "$",
                    precision: 2,
                    format: "%n %u",
                    delimiter: ".",
                    separator: ","
                }
            },
            human: {
                storage_units: {
                    units: {
                        byte: " Byte",
                        kb: "kb",
                        mb: "mb",
                        gb: "gb",
                        tb: "tb"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " y ",
                        lastWordConnector: " y "
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " o ",
                        lastWordConnector: " o "
                    }
                },
                abbreviated: {
                    long: {
                        1e3: {
                            one: "0 mil",
                            other: "0 mil"
                        },
                        1e4: {
                            one: "00 mil",
                            other: "00 mil"
                        },
                        1e5: {
                            one: "000 mil",
                            other: "000 mil"
                        },
                        1e6: {
                            one: "0 millón",
                            other: "0 millones"
                        },
                        1e7: {
                            one: "00 millones",
                            other: "00 millones"
                        },
                        1e8: {
                            one: "000 millones",
                            other: "000 millones"
                        },
                        1e9: {
                            one: "0 mil millones",
                            other: "0 mil millones"
                        },
                        1e10: {
                            one: "00 mil millones",
                            other: "00 mil millones"
                        },
                        1e11: {
                            one: "000 mil millones",
                            other: "000 mil millones"
                        },
                        1e12: {
                            one: "0 billón",
                            other: "0 billones"
                        },
                        1e13: {
                            one: "00 billones",
                            other: "00 billones"
                        },
                        1e14: {
                            one: "000 billones",
                            other: "000 billones"
                        }
                    },
                    short: {
                        1e3: {
                            one: "0K",
                            other: "0K"
                        },
                        1e4: {
                            one: "00K",
                            other: "00K"
                        },
                        1e5: {
                            one: "000K",
                            other: "000K"
                        },
                        1e6: {
                            one: "0M",
                            other: "0M"
                        },
                        1e7: {
                            one: "00M",
                            other: "00M"
                        },
                        1e8: {
                            one: "000M",
                            other: "000M"
                        },
                        1e9: {
                            one: "0000M",
                            other: "0000M"
                        },
                        1e10: {
                            one: "00MRD",
                            other: "00MRD"
                        },
                        1e11: {
                            one: "000MRD",
                            other: "000MRD"
                        },
                        1e12: {
                            one: "0B",
                            other: "0B"
                        },
                        1e13: {
                            one: "00B",
                            other: "00B"
                        },
                        1e14: {
                            one: "000B",
                            other: "000B"
                        }
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.fi", {
        number: {
            currency: {
                format: {
                    delimiter: " ",
                    format: "%n %u",
                    precision: 2,
                    separator: ",",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "€"
                }
            },
            format: {
                delimiter: " ",
                precision: 3,
                separator: ",",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: "",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "tavu",
                            other: "tavua"
                        },
                        gb: "GB",
                        kb: "kB",
                        mb: "MB",
                        tb: "TB"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " ja ",
                        lastWordConnector: " ja "
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " tai ",
                        lastWordConnector: " tai "
                    }
                },
                abbreviated: {
                    long: {
                        1e3: {
                            one: "0 tuhat",
                            other: "0 tuhatta"
                        },
                        1e4: {
                            one: "00 tuhatta",
                            other: "00 tuhatta"
                        },
                        1e5: {
                            one: "000 tuhatta",
                            other: "000 tuhatta"
                        },
                        1e6: {
                            one: "0 miljoona",
                            other: "0 miljoonaa"
                        },
                        1e7: {
                            one: "00 miljoonaa",
                            other: "00 miljoonaa"
                        },
                        1e8: {
                            one: "000 miljoonaa",
                            other: "000 miljoonaa"
                        },
                        1e9: {
                            one: "0 miljardi",
                            other: "0 miljardia"
                        },
                        1e10: {
                            one: "00 miljardia",
                            other: "00 miljardia"
                        },
                        1e11: {
                            one: "000 miljardia",
                            other: "000 miljardia"
                        },
                        1e12: {
                            one: "0 biljoona",
                            other: "0 biljoonaa"
                        },
                        1e13: {
                            one: "00 biljoonaa",
                            other: "00 biljoonaa"
                        },
                        1e14: {
                            one: "000 biljoonaa",
                            other: "000 biljoonaa"
                        }
                    },
                    short: {
                        1e3: {
                            one: "0 t.",
                            other: "0 t."
                        },
                        1e4: {
                            one: "00 t.",
                            other: "00 t."
                        },
                        1e5: {
                            one: "000 t.",
                            other: "000 t."
                        },
                        1e6: {
                            one: "0 milj.",
                            other: "0 milj."
                        },
                        1e7: {
                            one: "00 milj.",
                            other: "00 milj."
                        },
                        1e8: {
                            one: "000 milj.",
                            other: "000 milj."
                        },
                        1e9: {
                            one: "0 mrd.",
                            other: "0 mrd."
                        },
                        1e10: {
                            one: "00 mrd.",
                            other: "00 mrd."
                        },
                        1e11: {
                            one: "000 mrd.",
                            other: "000 mrd."
                        },
                        1e12: {
                            one: "0 bilj.",
                            other: "0 bilj."
                        },
                        1e13: {
                            one: "00 bilj.",
                            other: "00 bilj."
                        },
                        1e14: {
                            one: "000 bilj.",
                            other: "000 bilj."
                        }
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.fr-ca", {
        number: {
            currency: {
                format: {
                    delimiter: " ",
                    format: "%n %u",
                    precision: 2,
                    separator: ",",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "$"
                }
            },
            format: {
                delimiter: " ",
                precision: 3,
                separator: ",",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: "",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "octet",
                            other: "octets"
                        },
                        gb: "Go",
                        kb: "ko",
                        mb: "Mo",
                        tb: "To"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " et ",
                        lastWordConnector: " et "
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " ou ",
                        lastWordConnector: " ou "
                    }
                },
                abbreviated: {
                    long: {
                        1e3: {
                            one: "0 millier",
                            other: "0 mille"
                        },
                        1e4: {
                            one: "00 millier",
                            other: "00 mille"
                        },
                        1e5: {
                            one: "000 millier",
                            other: "000 mille"
                        },
                        1e6: {
                            one: "0 million",
                            other: "0 millions"
                        },
                        1e7: {
                            one: "00 million",
                            other: "00 millions"
                        },
                        1e8: {
                            one: "000 million",
                            other: "000 millions"
                        },
                        1e9: {
                            one: "0 milliard",
                            other: "0 milliards"
                        },
                        1e10: {
                            one: "00 milliard",
                            other: "00 milliards"
                        },
                        1e11: {
                            one: "000 milliards",
                            other: "000 milliards"
                        },
                        1e12: {
                            one: "0 billion",
                            other: "0 billions"
                        },
                        1e13: {
                            one: "00 billions",
                            other: "00 billions"
                        },
                        1e14: {
                            one: "000 billions",
                            other: "000 billions"
                        }
                    },
                    short: {
                        1e3: {
                            one: "0 k",
                            other: "0 k"
                        },
                        1e4: {
                            one: "00 k",
                            other: "00 k"
                        },
                        1e5: {
                            one: "000 k",
                            other: "000 k"
                        },
                        1e6: {
                            one: "0 M",
                            other: "0 M"
                        },
                        1e7: {
                            one: "00 M",
                            other: "00 M"
                        },
                        1e8: {
                            one: "000 M",
                            other: "000 M"
                        },
                        1e9: {
                            one: "0 Md",
                            other: "0 Md"
                        },
                        1e10: {
                            one: "00 Md",
                            other: "00 Md"
                        },
                        1e11: {
                            one: "000 Md",
                            other: "000 Md"
                        },
                        1e12: {
                            one: "0 Bn",
                            other: "0 Bn"
                        },
                        1e13: {
                            one: "00 Bn",
                            other: "00 Bn"
                        },
                        1e14: {
                            one: "000 Bn",
                            other: "000 Bn"
                        }
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.fr", {
        number: {
            currency: {
                format: {
                    delimiter: " ",
                    format: "%n %u",
                    precision: 2,
                    separator: ",",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "€"
                }
            },
            format: {
                delimiter: " ",
                precision: 3,
                separator: ",",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: "",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "octet",
                            other: "octets"
                        },
                        gb: "Go",
                        kb: "ko",
                        mb: "Mo",
                        tb: "To"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " et ",
                        lastWordConnector: " et "
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " ou ",
                        lastWordConnector: " ou "
                    }
                },
                abbreviated: {
                    long: {
                        1e3: {
                            one: "0 millier",
                            other: "0 mille"
                        },
                        1e4: {
                            one: "00 millier",
                            other: "00 mille"
                        },
                        1e5: {
                            one: "000 millier",
                            other: "000 mille"
                        },
                        1e6: {
                            one: "0 million",
                            other: "0 millions"
                        },
                        1e7: {
                            one: "00 million",
                            other: "00 millions"
                        },
                        1e8: {
                            one: "000 million",
                            other: "000 millions"
                        },
                        1e9: {
                            one: "0 milliard",
                            other: "0 milliards"
                        },
                        1e10: {
                            one: "00 milliard",
                            other: "00 milliards"
                        },
                        1e11: {
                            one: "000 milliards",
                            other: "000 milliards"
                        },
                        1e12: {
                            one: "0 billion",
                            other: "0 billions"
                        },
                        1e13: {
                            one: "00 billions",
                            other: "00 billions"
                        },
                        1e14: {
                            one: "000 billions",
                            other: "000 billions"
                        }
                    },
                    short: {
                        1e3: {
                            one: "0 k",
                            other: "0 k"
                        },
                        1e4: {
                            one: "00 k",
                            other: "00 k"
                        },
                        1e5: {
                            one: "000 k",
                            other: "000 k"
                        },
                        1e6: {
                            one: "0 M",
                            other: "0 M"
                        },
                        1e7: {
                            one: "00 M",
                            other: "00 M"
                        },
                        1e8: {
                            one: "000 M",
                            other: "000 M"
                        },
                        1e9: {
                            one: "0 Md",
                            other: "0 Md"
                        },
                        1e10: {
                            one: "00 Md",
                            other: "00 Md"
                        },
                        1e11: {
                            one: "000 Md",
                            other: "000 Md"
                        },
                        1e12: {
                            one: "0 Bn",
                            other: "0 Bn"
                        },
                        1e13: {
                            one: "00 Bn",
                            other: "00 Bn"
                        },
                        1e14: {
                            one: "000 Bn",
                            other: "000 Bn"
                        }
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.he-il", {
        number: {
            currency: {
                format: {
                    delimiter: ",",
                    format: "%n %u",
                    precision: 2,
                    separator: ".",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "₪"
                }
            },
            format: {
                delimiter: ",",
                precision: 3,
                separator: ".",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: ",",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "בייט",
                            other: "בתים"
                        },
                        gb: "ג'יגה-בייט",
                        kb: "קילו-בייט",
                        mb: "מגה-בייט",
                        tb: "טרה-בייט"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " ו",
                        lastWordConnector: " ו"
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " or ",
                        lastWordConnector: ", or "
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.hr", {
        number: {
            currency: {
                format: {
                    delimiter: ".",
                    format: "%n %u",
                    precision: 2,
                    separator: ",",
                    significant: !1,
                    strip_insignificant_zeros: !1
                }
            },
            format: {
                delimiter: ".",
                precision: 3,
                separator: ",",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: "",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: "bajt",
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.hu", {
        number: {
            currency: {
                format: {
                    delimiter: "",
                    format: "%n %u",
                    precision: 0,
                    separator: ",",
                    significant: !0,
                    strip_insignificant_zeros: !0
                }
            },
            format: {
                delimiter: " ",
                precision: 2,
                separator: ",",
                significant: !0,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: "",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: "Byte",
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.id", {
        number: {
            currency: {
                format: {
                    delimiter: ".",
                    format: "%u%n",
                    precision: 2,
                    separator: ",",
                    significant: !1,
                    strip_insignificant_zeros: !1
                }
            },
            format: {
                delimiter: ".",
                precision: 2,
                separator: ",",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: "",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n%u",
                    units: {
                        byte: "Byte",
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.it", {
        number: {
            currency: {
                format: {
                    delimiter: ".",
                    format: "%n %u",
                    precision: 2,
                    separator: ",",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "€"
                }
            },
            format: {
                delimiter: ".",
                precision: 3,
                separator: ",",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: "",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "Byte",
                            other: "Bytes"
                        },
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " e ",
                        lastWordConnector: " e "
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " o ",
                        lastWordConnector: " o "
                    }
                },
                abbreviated: {
                    long: {
                        1e3: {
                            one: "0 migliaio",
                            other: "0 migliaia"
                        },
                        1e4: {
                            one: "00 migliaia",
                            other: "00 migliaia"
                        },
                        1e5: {
                            one: "000 migliaia",
                            other: "000 migliaia"
                        },
                        1e6: {
                            one: "0 milione",
                            other: "0 milioni"
                        },
                        1e7: {
                            one: "00 milioni",
                            other: "00 milioni"
                        },
                        1e8: {
                            one: "000 milioni",
                            other: "000 milioni"
                        },
                        1e9: {
                            one: "0 miliardo",
                            other: "0 miliardi"
                        },
                        1e10: {
                            one: "00 miliardi",
                            other: "00 miliardi"
                        },
                        1e11: {
                            one: "000 miliardi",
                            other: "000 miliardi"
                        },
                        1e12: {
                            one: "0 migliaio di miliardi",
                            other: "0 migliaia di miliardi"
                        },
                        1e13: {
                            one: "00 migliaia di miliardi",
                            other: "00 migliaia di miliardi"
                        },
                        1e14: {
                            one: "000 migliaia di miliardi",
                            other: "000 migliaia di miliardi"
                        }
                    },
                    short: {
                        1e3: {
                            one: "0",
                            other: "0"
                        },
                        1e4: {
                            one: "0",
                            other: "0"
                        },
                        1e5: {
                            one: "0",
                            other: "0"
                        },
                        1e6: {
                            one: "0 Mln",
                            other: "0 Mln"
                        },
                        1e7: {
                            one: "00 Mln",
                            other: "00 Mln"
                        },
                        1e8: {
                            one: "000 Mln",
                            other: "000 Mln"
                        },
                        1e9: {
                            one: "0 Mld",
                            other: "0 Mld"
                        },
                        1e10: {
                            one: "00 Mld",
                            other: "00 Mld"
                        },
                        1e11: {
                            one: "000 Mld",
                            other: "000 Mld"
                        },
                        1e12: {
                            one: "0 Bln",
                            other: "0 Bln"
                        },
                        1e13: {
                            one: "00 Bln",
                            other: "00 Bln"
                        },
                        1e14: {
                            one: "000 Bln",
                            other: "000 Bln"
                        }
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.ja", {
        number: {
            currency: {
                format: {
                    delimiter: ",",
                    format: "%u%n",
                    precision: 0,
                    separator: ".",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "¥"
                }
            },
            format: {
                delimiter: ",",
                precision: 3,
                separator: ".",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: "",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: "バイト",
                        gb: "ギガバイト",
                        kb: "キロバイト",
                        mb: "メガバイト",
                        tb: "テラバイト"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: "と",
                        twoWordsConnector: "と",
                        lastWordConnector: "と"
                    },
                    exclusive: {
                        wordsConnector: "または",
                        twoWordsConnector: "または",
                        lastWordConnector: "または"
                    }
                },
                abbreviated: {
                    long: {
                        1e3: {
                            other: "0千"
                        },
                        1e4: {
                            other: "0万"
                        },
                        1e5: {
                            other: "00万"
                        },
                        1e6: {
                            other: "000万"
                        },
                        1e7: {
                            other: "0000万"
                        },
                        1e8: {
                            other: "0億"
                        },
                        1e9: {
                            other: "00億"
                        },
                        1e10: {
                            other: "000億"
                        },
                        1e11: {
                            other: "0000億"
                        },
                        1e12: {
                            other: "0兆"
                        },
                        1e13: {
                            other: "00兆"
                        },
                        1e14: {
                            other: "000兆"
                        }
                    },
                    short: {
                        1e3: {
                            other: "0千"
                        },
                        1e4: {
                            other: "0万"
                        },
                        1e5: {
                            other: "00万"
                        },
                        1e6: {
                            other: "000万"
                        },
                        1e7: {
                            other: "0000万"
                        },
                        1e8: {
                            other: "0億"
                        },
                        1e9: {
                            other: "00億"
                        },
                        1e10: {
                            other: "000億"
                        },
                        1e11: {
                            other: "0000億"
                        },
                        1e12: {
                            other: "0兆"
                        },
                        1e13: {
                            other: "00兆"
                        },
                        1e14: {
                            other: "000兆"
                        }
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.ko", {
        number: {
            currency: {
                format: {
                    delimiter: ",",
                    format: "%u%n",
                    precision: 0,
                    separator: ".",
                    significant: !1,
                    strip_insignificant_zeros: !1
                }
            },
            format: {
                delimiter: ",",
                precision: 3,
                separator: ".",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: ",",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n%u",
                    units: {
                        byte: "바이트",
                        gb: "기가바이트",
                        kb: "킬로바이트",
                        mb: "메가바이트",
                        tb: "테라바이트"
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.lt", {
        number: {
            currency: {
                format: {
                    delimiter: " ",
                    format: "%n %u",
                    precision: 2,
                    separator: ",",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "€"
                }
            },
            format: {
                delimiter: " ",
                precision: 3,
                separator: ",",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: "",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "Baitas",
                            other: "Baitų"
                        },
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " ir ",
                        lastWordConnector: " ir "
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " or ",
                        lastWordConnector: ", or "
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.ms", {
        number: {
            currency: {
                format: {
                    delimiter: ",",
                    format: "%u %n",
                    precision: 2,
                    separator: ".",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "RM"
                }
            },
            format: {
                delimiter: ",",
                precision: 3,
                separator: ".",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: ",",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: "bait",
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " dan ",
                        lastWordConnector: " dan "
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " atau ",
                        lastWordConnector: ", atau "
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.nl", {
        number: {
            currency: {
                format: {
                    delimiter: ".",
                    format: "%u%n",
                    precision: 2,
                    separator: ",",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "€"
                }
            },
            format: {
                delimiter: ".",
                precision: 3,
                separator: ",",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: "",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "Byte",
                            other: "Bytes"
                        },
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " en ",
                        lastWordConnector: " en "
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " of ",
                        lastWordConnector: " of "
                    }
                },
                abbreviated: {
                    long: {
                        1e3: {
                            one: "0 duizend",
                            other: "0 duizend"
                        },
                        1e4: {
                            one: "00 duizend",
                            other: "00 duizend"
                        },
                        1e5: {
                            one: "000 duizend",
                            other: "000 duizend"
                        },
                        1e6: {
                            one: "0 miljoen",
                            other: "0 miljoen"
                        },
                        1e7: {
                            one: "00 miljoen",
                            other: "00 miljoen"
                        },
                        1e8: {
                            one: "000 miljoen",
                            other: "000 miljoen"
                        },
                        1e9: {
                            one: "0 miljard",
                            other: "0 miljard"
                        },
                        1e10: {
                            one: "00 miljard",
                            other: "00 miljard"
                        },
                        1e11: {
                            one: "000 miljard",
                            other: "000 miljard"
                        },
                        1e12: {
                            one: "0 biljoen",
                            other: "0 biljoen"
                        },
                        1e13: {
                            one: "00 biljoen",
                            other: "00 biljoen"
                        },
                        1e14: {
                            one: "000 biljoen",
                            other: "000 biljoen"
                        }
                    },
                    short: {
                        1e3: {
                            one: "0K",
                            other: "0K"
                        },
                        1e4: {
                            one: "00K",
                            other: "00K"
                        },
                        1e5: {
                            one: "000K",
                            other: "000K"
                        },
                        1e6: {
                            one: "0 mln.",
                            other: "0 mln."
                        },
                        1e7: {
                            one: "00 mln.",
                            other: "00 mln."
                        },
                        1e8: {
                            one: "000 mln.",
                            other: "000 mln."
                        },
                        1e9: {
                            one: "0 mld.",
                            other: "0 mld."
                        },
                        1e10: {
                            one: "00 mld.",
                            other: "00 mld."
                        },
                        1e11: {
                            one: "000 mld.",
                            other: "000 mld."
                        },
                        1e12: {
                            one: "0 bln.",
                            other: "0 bln."
                        },
                        1e13: {
                            one: "00 bln.",
                            other: "00 bln."
                        },
                        1e14: {
                            one: "000 bln.",
                            other: "000 bln."
                        }
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.no-no", {
        number: {
            currency: {
                format: {
                    delimiter: ".",
                    format: "%u%n",
                    precision: 2,
                    separator: ",",
                    significant: !1,
                    strip_insignificant_zeros: !1
                }
            },
            format: {
                delimiter: ".",
                precision: 3,
                separator: ",",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: ".",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "Byte",
                            other: "Bytes"
                        },
                        gb: "GB",
                        kb: "kB",
                        mb: "MB",
                        tb: "TB"
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.pl", {
        number: {
            currency: {
                format: {
                    delimiter: " ",
                    format: "%u%n",
                    precision: 2,
                    separator: ",",
                    significant: !1,
                    strip_insignificant_zeros: !0
                }
            },
            format: {
                delimiter: " ",
                precision: 3,
                separator: ",",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: " ",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "bajt",
                            few: "bajty",
                            many: "bajtów",
                            other: "bajty"
                        },
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " i ",
                        lastWordConnector: " i "
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " lub ",
                        lastWordConnector: " lub "
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.pt-br", {
        number: {
            currency: {
                format: {
                    delimiter: ".",
                    format: "%u%n",
                    precision: 2,
                    separator: ",",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "R$"
                }
            },
            format: {
                delimiter: ".",
                precision: 3,
                separator: ",",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: ".",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "Byte",
                            other: "Bytes"
                        },
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " e ",
                        lastWordConnector: " e "
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " ou ",
                        lastWordConnector: " ou "
                    }
                },
                abbreviated: {
                    long: {
                        1e3: {
                            one: "0 mil",
                            other: "0 mil"
                        },
                        1e4: {
                            one: "00 mil",
                            other: "00 mil"
                        },
                        1e5: {
                            one: "000 mil",
                            other: "000 mil"
                        },
                        1e6: {
                            one: "0 milhão",
                            other: "0 milhões"
                        },
                        1e7: {
                            one: "00 milhão",
                            other: "00 milhões"
                        },
                        1e8: {
                            one: "000 milhão",
                            other: "000 milhões"
                        },
                        1e9: {
                            one: "0 bilhão",
                            other: "0 bilhões"
                        },
                        1e10: {
                            one: "00 bilhão",
                            other: "00 bilhões"
                        },
                        1e11: {
                            one: "000 bilhão",
                            other: "000 bilhões"
                        },
                        1e12: {
                            one: "0 trilhão",
                            other: "0 trilhões"
                        },
                        1e13: {
                            one: "00 trilhão",
                            other: "00 trilhões"
                        },
                        1e14: {
                            one: "000 trilhão",
                            other: "000 trilhões"
                        }
                    },
                    short: {
                        1e3: {
                            one: "0 mil",
                            other: "0 mil"
                        },
                        1e4: {
                            one: "00 mil",
                            other: "00 mil"
                        },
                        1e5: {
                            one: "000 mil",
                            other: "000 mil"
                        },
                        1e6: {
                            one: "0 mi",
                            other: "0 mi"
                        },
                        1e7: {
                            one: "00 mi",
                            other: "00 mi"
                        },
                        1e8: {
                            one: "000 mi",
                            other: "000 mi"
                        },
                        1e9: {
                            one: "0 bi",
                            other: "0 bi"
                        },
                        1e10: {
                            one: "00 bi",
                            other: "00 bi"
                        },
                        1e11: {
                            one: "000 bi",
                            other: "000 bi"
                        },
                        1e12: {
                            one: "0 tri",
                            other: "0 tri"
                        },
                        1e13: {
                            one: "00 tri",
                            other: "00 tri"
                        },
                        1e14: {
                            one: "000 tri",
                            other: "000 tri"
                        }
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.ro", {
        number: {
            currency: {
                format: {
                    delimiter: ".",
                    format: "%n %u",
                    precision: 2,
                    separator: ",",
                    significant: !1,
                    strip_insignificant_zeros: !1
                }
            },
            format: {
                delimiter: ".",
                precision: 3,
                separator: ",",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: ",",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n%u",
                    units: {
                        byte: "Byte",
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.ru", {
        number: {
            currency: {
                format: {
                    delimiter: " ",
                    format: "%n %u",
                    precision: 2,
                    separator: ",",
                    significant: !1,
                    strip_insignificant_zeros: !1
                }
            },
            format: {
                delimiter: " ",
                precision: 3,
                separator: ",",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: "",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n%u",
                    units: {
                        byte: "байт",
                        gb: "ГБ",
                        kb: "КБ",
                        mb: "МБ",
                        tb: "ТБ"
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.sk", {
        number: {
            currency: {
                format: {
                    delimiter: " ",
                    format: "%n %u",
                    precision: 2,
                    separator: ".",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "€"
                }
            },
            format: {
                delimiter: " ",
                precision: 3,
                separator: ",",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: " ",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "B",
                            other: "B"
                        },
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " a  ",
                        lastWordConnector: " a  "
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " or ",
                        lastWordConnector: ", or "
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.sv", {
        number: {
            currency: {
                format: {
                    delimiter: " ",
                    format: "%n %u",
                    precision: 2,
                    separator: ",",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "kr"
                }
            },
            format: {
                delimiter: " ",
                precision: 3,
                separator: ",",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: "",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "Byte",
                            other: "Bytes"
                        },
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " och ",
                        lastWordConnector: " och "
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " eller ",
                        lastWordConnector: ", eller "
                    }
                },
                abbreviated: {
                    long: {
                        1e3: {
                            one: "0 tusen",
                            other: "0 tusen"
                        },
                        1e4: {
                            one: "00 tusen",
                            other: "00 tusen"
                        },
                        1e5: {
                            one: "000 tusen",
                            other: "000 tusen"
                        },
                        1e6: {
                            one: "0 miljon",
                            other: "0 miljoner"
                        },
                        1e7: {
                            one: "00 miljon",
                            other: "00 miljoner"
                        },
                        1e8: {
                            one: "000 miljoner",
                            other: "000 miljoner"
                        },
                        1e9: {
                            one: "0 miljard",
                            other: "0 miljarder"
                        },
                        1e10: {
                            one: "00 miljarder",
                            other: "00 miljarder"
                        },
                        1e11: {
                            one: "000 miljarder",
                            other: "000 miljarder"
                        },
                        1e12: {
                            one: "0 biljon",
                            other: "0 biljoner"
                        },
                        1e13: {
                            one: "00 biljoner",
                            other: "00 biljoner"
                        },
                        1e14: {
                            one: "000 biljoner",
                            other: "000 biljoner"
                        }
                    },
                    short: {
                        1e3: {
                            one: "0 tn",
                            other: "0 tn"
                        },
                        1e4: {
                            one: "00 tn",
                            other: "00 tn"
                        },
                        1e5: {
                            one: "000 tn",
                            other: "000 tn"
                        },
                        1e6: {
                            one: "0 mn",
                            other: "0 mn"
                        },
                        1e7: {
                            one: "00 mn",
                            other: "00 mn"
                        },
                        1e8: {
                            one: "000 mn",
                            other: "000 mn"
                        },
                        1e9: {
                            one: "0 md",
                            other: "0 md"
                        },
                        1e10: {
                            one: "00 md",
                            other: "00 md"
                        },
                        1e11: {
                            one: "000 md",
                            other: "000 md"
                        },
                        1e12: {
                            one: "0 bn",
                            other: "0 bn"
                        },
                        1e13: {
                            one: "00 bn",
                            other: "00 bn"
                        },
                        1e14: {
                            one: "000 bn",
                            other: "000 bn"
                        }
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.th", {
        number: {
            currency: {
                format: {
                    delimiter: ",",
                    format: "%n %u",
                    precision: 2,
                    separator: ".",
                    significant: !1,
                    strip_insignificant_zeros: !1
                }
            },
            format: {
                delimiter: ",",
                precision: 3,
                separator: ".",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: ",",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: "ไบต์",
                        gb: "จิกะไบต์",
                        kb: "กิโลไบต์",
                        mb: "เมกะไบต์",
                        tb: "เทระไบต์"
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.tl", {
        number: {
            currency: {
                format: {
                    delimiter: ",",
                    format: "%u%n",
                    precision: 2,
                    separator: ".",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "₱"
                }
            },
            format: {
                delimiter: ",",
                precision: 3,
                separator: ".",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: ",",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: "byte",
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " at ",
                        lastWordConnector: ", at "
                    },
                    exclusive: {
                        wordsConnector: ", ",
                        twoWordsConnector: " o ",
                        lastWordConnector: ", o "
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.vi", {
        number: {
            currency: {
                format: {
                    delimiter: ".",
                    format: "%n %u",
                    precision: 0,
                    separator: ",",
                    significant: !1,
                    strip_insignificant_zeros: !1
                }
            },
            format: {
                delimiter: ".",
                precision: 3,
                separator: ",",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: "",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n%u",
                    units: {
                        byte: "Byte",
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.zh-cn", {
        number: {
            currency: {
                format: {
                    delimiter: ",",
                    format: "%u %n",
                    precision: 2,
                    separator: ".",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "CN¥"
                }
            },
            format: {
                delimiter: ",",
                precision: 3,
                separator: ".",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: "",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "Byte",
                            other: "Bytes"
                        },
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: "、 ",
                        twoWordsConnector: "和",
                        lastWordConnector: "和"
                    },
                    exclusive: {
                        wordsConnector: "、 ",
                        twoWordsConnector: "或",
                        lastWordConnector: "或"
                    }
                },
                abbreviated: {
                    long: {
                        1e3: {
                            other: "0千"
                        },
                        1e4: {
                            other: "0万"
                        },
                        1e5: {
                            other: "00万"
                        },
                        1e6: {
                            other: "000万"
                        },
                        1e7: {
                            other: "0000万"
                        },
                        1e8: {
                            other: "0亿"
                        },
                        1e9: {
                            other: "00亿"
                        },
                        1e10: {
                            other: "000亿"
                        },
                        1e11: {
                            other: "0000亿"
                        },
                        1e12: {
                            other: "0兆"
                        },
                        1e13: {
                            other: "00兆"
                        },
                        1e14: {
                            other: "000兆"
                        }
                    },
                    short: {
                        1e3: {
                            other: "0千"
                        },
                        1e4: {
                            other: "0万"
                        },
                        1e5: {
                            other: "00万"
                        },
                        1e6: {
                            other: "000万"
                        },
                        1e7: {
                            other: "0000万"
                        },
                        1e8: {
                            other: "0亿"
                        },
                        1e9: {
                            other: "00亿"
                        },
                        1e10: {
                            other: "000亿"
                        },
                        1e11: {
                            other: "0000亿"
                        },
                        1e12: {
                            other: "0兆"
                        },
                        1e13: {
                            other: "00兆"
                        },
                        1e14: {
                            other: "000兆"
                        }
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.zh-hk", {
        number: {
            currency: {
                format: {
                    delimiter: ",",
                    format: "%u %n",
                    precision: 2,
                    separator: ".",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "HK$"
                }
            },
            format: {
                delimiter: ",",
                precision: 3,
                separator: ".",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: "",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: {
                            one: "Byte",
                            other: "Bytes"
                        },
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: "、",
                        twoWordsConnector: "和",
                        lastWordConnector: "和"
                    },
                    exclusive: {
                        wordsConnector: "、 ",
                        twoWordsConnector: "或",
                        lastWordConnector: "或"
                    }
                },
                abbreviated: {
                    long: {
                        1e3: {
                            other: "0 千"
                        },
                        1e4: {
                            other: "0萬"
                        },
                        1e5: {
                            other: "00萬"
                        },
                        1e6: {
                            other: "000萬"
                        },
                        1e7: {
                            other: "0000萬"
                        },
                        1e8: {
                            other: "0億"
                        },
                        1e9: {
                            other: "00億"
                        },
                        1e10: {
                            other: "000億"
                        },
                        1e11: {
                            other: "0000億"
                        },
                        1e12: {
                            other: "0兆"
                        },
                        1e13: {
                            other: "00兆"
                        },
                        1e14: {
                            other: "000兆"
                        }
                    },
                    short: {
                        1e3: {
                            other: "0K"
                        },
                        1e4: {
                            other: "00K"
                        },
                        1e5: {
                            other: "000K"
                        },
                        1e6: {
                            other: "0M"
                        },
                        1e7: {
                            other: "00M"
                        },
                        1e8: {
                            other: "000M"
                        },
                        1e9: {
                            other: "0B"
                        },
                        1e10: {
                            other: "00B"
                        },
                        1e11: {
                            other: "000B"
                        },
                        1e12: {
                            other: "0T"
                        },
                        1e13: {
                            other: "00T"
                        },
                        1e14: {
                            other: "000T"
                        }
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(50);
    Object(r.a)("I18n.translations.zh-tw", {
        number: {
            currency: {
                format: {
                    delimiter: ",",
                    format: "%u%n",
                    precision: 2,
                    separator: ".",
                    significant: !1,
                    strip_insignificant_zeros: !1,
                    unit: "$"
                }
            },
            format: {
                delimiter: ",",
                precision: 3,
                separator: ".",
                significant: !1,
                strip_insignificant_zeros: !0
            },
            percentage: {
                format: {
                    delimiter: ",",
                    format: "%n%",
                    precision: 0
                }
            },
            human: {
                storage_units: {
                    format: "%n %u",
                    units: {
                        byte: "byte",
                        gb: "GB",
                        kb: "KB",
                        mb: "MB",
                        tb: "TB"
                    }
                },
                array: {
                    inclusive: {
                        wordsConnector: "、",
                        twoWordsConnector: "和",
                        lastWordConnector: "和"
                    },
                    exclusive: {
                        wordsConnector: "、",
                        twoWordsConnector: "或",
                        lastWordConnector: "或"
                    }
                }
            }
        }
    })
}, function (e, n, t) {
    e.exports = t(93)
}, function (e, n, t) {
    r = function () {
        "use strict";
        var e, n;

        function t() {
            return e.apply(null, arguments)
        }

        function r(n) {
            e = n
        }

        function i(e) {
            return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
        }

        function o(e) {
            return null != e && "[object Object]" === Object.prototype.toString.call(e)
        }

        function s(e) {
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
            var n;
            for (n in e)
                if (e.hasOwnProperty(n)) return !1;
            return !0
        }

        function a(e) {
            return void 0 === e
        }

        function u(e) {
            return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
        }

        function d(e) {
            return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
        }

        function l(e, n) {
            var t, r = [];
            for (t = 0; t < e.length; ++t) r.push(n(e[t], t));
            return r
        }

        function c(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }

        function m(e, n) {
            for (var t in n) c(n, t) && (e[t] = n[t]);
            c(n, "toString") && (e.toString = n.toString);
            c(n, "valueOf") && (e.valueOf = n.valueOf);
            return e
        }

        function h(e, n, t, r) {
            return Gt(e, n, t, r, !0).utc()
        }

        function f() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                meridiem: null,
                rfc2822: !1,
                weekdayMismatch: !1
            }
        }

        function _(e) {
            null == e._pf && (e._pf = f());
            return e._pf
        }
        n = Array.prototype.some ? Array.prototype.some : function (e) {
            for (var n = Object(this), t = n.length >>> 0, r = 0; r < t; r++)
                if (r in n && e.call(this, n[r], r, n)) return !0;
            return !1
        };

        function p(e) {
            if (null == e._isValid) {
                var t = _(e),
                    r = n.call(t.parsedDateParts, (function (e) {
                        return null != e
                    })),
                    i = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r);
                e._strict && (i = i && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour);
                if (null != Object.isFrozen && Object.isFrozen(e)) return i;
                e._isValid = i
            }
            return e._isValid
        }

        function b(e) {
            var n = h(NaN);
            null != e ? m(_(n), e) : _(n).userInvalidated = !0;
            return n
        }
        var g = t.momentProperties = [];

        function y(e, n) {
            var t, r, i;
            a(n._isAMomentObject) || (e._isAMomentObject = n._isAMomentObject);
            a(n._i) || (e._i = n._i);
            a(n._f) || (e._f = n._f);
            a(n._l) || (e._l = n._l);
            a(n._strict) || (e._strict = n._strict);
            a(n._tzm) || (e._tzm = n._tzm);
            a(n._isUTC) || (e._isUTC = n._isUTC);
            a(n._offset) || (e._offset = n._offset);
            a(n._pf) || (e._pf = _(n));
            a(n._locale) || (e._locale = n._locale);
            if (g.length > 0)
                for (t = 0; t < g.length; t++) a(i = n[r = g[t]]) || (e[r] = i);
            return e
        }
        var M = !1;

        function v(e) {
            y(this, e);
            this._d = new Date(null != e._d ? e._d.getTime() : NaN);
            this.isValid() || (this._d = new Date(NaN));
            if (!1 === M) {
                M = !0;
                t.updateOffset(this);
                M = !1
            }
        }

        function w(e) {
            return e instanceof v || null != e && null != e._isAMomentObject
        }

        function Y(e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
        }

        function k(e) {
            var n = +e,
                t = 0;
            0 !== n && isFinite(n) && (t = Y(n));
            return t
        }

        function T(e, n, t) {
            var r, i = Math.min(e.length, n.length),
                o = Math.abs(e.length - n.length),
                s = 0;
            for (r = 0; r < i; r++)(t && e[r] !== n[r] || !t && k(e[r]) !== k(n[r])) && s++;
            return s + o
        }

        function D(e) {
            !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
        }

        function L(e, n) {
            var r = !0;
            return m((function () {
                null != t.deprecationHandler && t.deprecationHandler(null, e);
                if (r) {
                    for (var i, o = [], s = 0; s < arguments.length; s++) {
                        i = "";
                        if ("object" == typeof arguments[s]) {
                            i += "\n[" + s + "] ";
                            for (var a in arguments[0]) i += a + ": " + arguments[0][a] + ", ";
                            i = i.slice(0, -2)
                        } else i = arguments[s];
                        o.push(i)
                    }
                    D(e + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack);
                    r = !1
                }
                return n.apply(this, arguments)
            }), n)
        }
        var S, C = {};

        function x(e, n) {
            null != t.deprecationHandler && t.deprecationHandler(e, n);
            if (!C[e]) {
                D(n);
                C[e] = !0
            }
        }
        t.suppressDeprecationWarnings = !1;
        t.deprecationHandler = null;

        function W(e) {
            return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
        }

        function O(e) {
            var n, t;
            for (t in e) W(n = e[t]) ? this[t] = n : this["_" + t] = n;
            this._config = e;
            this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
        }

        function N(e, n) {
            var t, r = m({}, e);
            for (t in n)
                if (c(n, t))
                    if (o(e[t]) && o(n[t])) {
                        r[t] = {};
                        m(r[t], e[t]);
                        m(r[t], n[t])
                    } else null != n[t] ? r[t] = n[t] : delete r[t];
            for (t in e) c(e, t) && !c(n, t) && o(e[t]) && (r[t] = m({}, r[t]));
            return r
        }

        function j(e) {
            null != e && this.set(e)
        }
        S = Object.keys ? Object.keys : function (e) {
            var n, t = [];
            for (n in e) c(e, n) && t.push(n);
            return t
        };
        var z = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        };

        function A(e, n, t) {
            var r = this._calendar[e] || this._calendar.sameElse;
            return W(r) ? r.call(n, t) : r
        }
        var B = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        };

        function E(e) {
            var n = this._longDateFormat[e],
                t = this._longDateFormat[e.toUpperCase()];
            if (n || !t) return n;
            this._longDateFormat[e] = t.replace(/MMMM|MM|DD|dddd/g, (function (e) {
                return e.slice(1)
            }));
            return this._longDateFormat[e]
        }
        var H = "Invalid date";

        function I() {
            return this._invalidDate
        }
        var P = "%d",
            F = /\d{1,2}/;

        function R(e) {
            return this._ordinal.replace("%d", e)
        }
        var q = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        };

        function U(e, n, t, r) {
            var i = this._relativeTime[t];
            return W(i) ? i(e, n, t, r) : i.replace(/%d/i, e)
        }

        function G(e, n) {
            var t = this._relativeTime[e > 0 ? "future" : "past"];
            return W(t) ? t(n) : t.replace(/%s/i, n)
        }
        var V = {};

        function $(e, n) {
            var t = e.toLowerCase();
            V[t] = V[t + "s"] = V[n] = e
        }

        function K(e) {
            return "string" == typeof e ? V[e] || V[e.toLowerCase()] : void 0
        }

        function J(e) {
            var n, t, r = {};
            for (t in e) c(e, t) && (n = K(t)) && (r[n] = e[t]);
            return r
        }
        var Z = {};

        function Q(e, n) {
            Z[e] = n
        }

        function X(e) {
            var n = [];
            for (var t in e) n.push({
                unit: t,
                priority: Z[t]
            });
            n.sort((function (e, n) {
                return e.priority - n.priority
            }));
            return n
        }

        function ee(e, n, t) {
            var r = "" + Math.abs(e),
                i = n - r.length;
            return (e >= 0 ? t ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r
        }
        var ne = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            te = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            re = {},
            ie = {};

        function oe(e, n, t, r) {
            var i = r;
            "string" == typeof r && (i = function () {
                return this[r]()
            });
            e && (ie[e] = i);
            n && (ie[n[0]] = function () {
                return ee(i.apply(this, arguments), n[1], n[2])
            });
            t && (ie[t] = function () {
                return this.localeData().ordinal(i.apply(this, arguments), e)
            })
        }

        function se(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
        }

        function ae(e) {
            var n, t, r = e.match(ne);
            for (n = 0, t = r.length; n < t; n++) ie[r[n]] ? r[n] = ie[r[n]] : r[n] = se(r[n]);
            return function (n) {
                var i, o = "";
                for (i = 0; i < t; i++) o += W(r[i]) ? r[i].call(n, e) : r[i];
                return o
            }
        }

        function ue(e, n) {
            if (!e.isValid()) return e.localeData().invalidDate();
            n = de(n, e.localeData());
            re[n] = re[n] || ae(n);
            return re[n](e)
        }

        function de(e, n) {
            var t = 5;

            function r(e) {
                return n.longDateFormat(e) || e
            }
            te.lastIndex = 0;
            for (; t >= 0 && te.test(e);) {
                e = e.replace(te, r);
                te.lastIndex = 0;
                t -= 1
            }
            return e
        }
        var le = /\d/,
            ce = /\d\d/,
            me = /\d{3}/,
            he = /\d{4}/,
            fe = /[+-]?\d{6}/,
            _e = /\d\d?/,
            pe = /\d\d\d\d?/,
            be = /\d\d\d\d\d\d?/,
            ge = /\d{1,3}/,
            ye = /\d{1,4}/,
            Me = /[+-]?\d{1,6}/,
            ve = /\d+/,
            we = /[+-]?\d+/,
            Ye = /Z|[+-]\d\d:?\d\d/gi,
            ke = /Z|[+-]\d\d(?::?\d\d)?/gi,
            Te = /[+-]?\d+(\.\d{1,3})?/,
            De = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
            Le = {};

        function Se(e, n, t) {
            Le[e] = W(n) ? n : function (e, r) {
                return e && t ? t : n
            }
        }

        function Ce(e, n) {
            return c(Le, e) ? Le[e](n._strict, n._locale) : new RegExp(xe(e))
        }

        function xe(e) {
            return We(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function (e, n, t, r, i) {
                return n || t || r || i
            })))
        }

        function We(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }
        var Oe = {};

        function Ne(e, n) {
            var t, r = n;
            "string" == typeof e && (e = [e]);
            u(n) && (r = function (e, t) {
                t[n] = k(e)
            });
            for (t = 0; t < e.length; t++) Oe[e[t]] = r
        }

        function je(e, n) {
            Ne(e, (function (e, t, r, i) {
                r._w = r._w || {};
                n(e, r._w, r, i)
            }))
        }

        function ze(e, n, t) {
            null != n && c(Oe, e) && Oe[e](n, t._a, t, e)
        }
        var Ae = 0,
            Be = 1,
            Ee = 2,
            He = 3,
            Ie = 4,
            Pe = 5,
            Fe = 6,
            Re = 7,
            qe = 8;
        oe("Y", 0, 0, (function () {
            var e = this.year();
            return e <= 9999 ? "" + e : "+" + e
        }));
        oe(0, ["YY", 2], 0, (function () {
            return this.year() % 100
        }));
        oe(0, ["YYYY", 4], 0, "year");
        oe(0, ["YYYYY", 5], 0, "year");
        oe(0, ["YYYYYY", 6, !0], 0, "year");
        $("year", "y");
        Q("year", 1);
        Se("Y", we);
        Se("YY", _e, ce);
        Se("YYYY", ye, he);
        Se("YYYYY", Me, fe);
        Se("YYYYYY", Me, fe);
        Ne(["YYYYY", "YYYYYY"], Ae);
        Ne("YYYY", (function (e, n) {
            n[Ae] = 2 === e.length ? t.parseTwoDigitYear(e) : k(e)
        }));
        Ne("YY", (function (e, n) {
            n[Ae] = t.parseTwoDigitYear(e)
        }));
        Ne("Y", (function (e, n) {
            n[Ae] = parseInt(e, 10)
        }));

        function Ue(e) {
            return Ge(e) ? 366 : 365
        }

        function Ge(e) {
            return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
        }
        t.parseTwoDigitYear = function (e) {
            return k(e) + (k(e) > 68 ? 1900 : 2e3)
        };
        var Ve, $e = Je("FullYear", !0);

        function Ke() {
            return Ge(this.year())
        }

        function Je(e, n) {
            return function (r) {
                if (null != r) {
                    Qe(this, e, r);
                    t.updateOffset(this, n);
                    return this
                }
                return Ze(this, e)
            }
        }

        function Ze(e, n) {
            return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + n]() : NaN
        }

        function Qe(e, n, t) {
            e.isValid() && !isNaN(t) && ("FullYear" === n && Ge(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + n](t, e.month(), tn(t, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + n](t))
        }

        function Xe(e) {
            return W(this[e = K(e)]) ? this[e]() : this
        }

        function en(e, n) {
            if ("object" == typeof e)
                for (var t = X(e = J(e)), r = 0; r < t.length; r++) this[t[r].unit](e[t[r].unit]);
            else if (W(this[e = K(e)])) return this[e](n);
            return this
        }

        function nn(e, n) {
            return (e % n + n) % n
        }
        Ve = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
            var n;
            for (n = 0; n < this.length; ++n)
                if (this[n] === e) return n;
            return -1
        };

        function tn(e, n) {
            if (isNaN(e) || isNaN(n)) return NaN;
            var t = nn(n, 12);
            e += (n - t) / 12;
            return 1 === t ? Ge(e) ? 29 : 28 : 31 - t % 7 % 2
        }
        oe("M", ["MM", 2], "Mo", (function () {
            return this.month() + 1
        }));
        oe("MMM", 0, 0, (function (e) {
            return this.localeData().monthsShort(this, e)
        }));
        oe("MMMM", 0, 0, (function (e) {
            return this.localeData().months(this, e)
        }));
        $("month", "M");
        Q("month", 8);
        Se("M", _e);
        Se("MM", _e, ce);
        Se("MMM", (function (e, n) {
            return n.monthsShortRegex(e)
        }));
        Se("MMMM", (function (e, n) {
            return n.monthsRegex(e)
        }));
        Ne(["M", "MM"], (function (e, n) {
            n[Be] = k(e) - 1
        }));
        Ne(["MMM", "MMMM"], (function (e, n, t, r) {
            var i = t._locale.monthsParse(e, r, t._strict);
            null != i ? n[Be] = i : _(t).invalidMonth = e
        }));
        var rn = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            on = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");

        function sn(e, n) {
            return e ? i(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || rn).test(n) ? "format" : "standalone"][e.month()] : i(this._months) ? this._months : this._months.standalone
        }
        var an = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

        function un(e, n) {
            return e ? i(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[rn.test(n) ? "format" : "standalone"][e.month()] : i(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
        }

        function dn(e, n, t) {
            var r, i, o, s = e.toLocaleLowerCase();
            if (!this._monthsParse) {
                this._monthsParse = [];
                this._longMonthsParse = [];
                this._shortMonthsParse = [];
                for (r = 0; r < 12; ++r) {
                    o = h([2e3, r]);
                    this._shortMonthsParse[r] = this.monthsShort(o, "").toLocaleLowerCase();
                    this._longMonthsParse[r] = this.months(o, "").toLocaleLowerCase()
                }
            }
            return t ? "MMM" === n ? -1 !== (i = Ve.call(this._shortMonthsParse, s)) ? i : null : -1 !== (i = Ve.call(this._longMonthsParse, s)) ? i : null : "MMM" === n ? -1 !== (i = Ve.call(this._shortMonthsParse, s)) || -1 !== (i = Ve.call(this._longMonthsParse, s)) ? i : null : -1 !== (i = Ve.call(this._longMonthsParse, s)) || -1 !== (i = Ve.call(this._shortMonthsParse, s)) ? i : null
        }

        function ln(e, n, t) {
            var r, i, o;
            if (this._monthsParseExact) return dn.call(this, e, n, t);
            if (!this._monthsParse) {
                this._monthsParse = [];
                this._longMonthsParse = [];
                this._shortMonthsParse = []
            }
            for (r = 0; r < 12; r++) {
                i = h([2e3, r]);
                if (t && !this._longMonthsParse[r]) {
                    this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i");
                    this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")
                }
                if (!t && !this._monthsParse[r]) {
                    o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, "");
                    this._monthsParse[r] = new RegExp(o.replace(".", ""), "i")
                }
                if (t && "MMMM" === n && this._longMonthsParse[r].test(e)) return r;
                if (t && "MMM" === n && this._shortMonthsParse[r].test(e)) return r;
                if (!t && this._monthsParse[r].test(e)) return r
            }
        }

        function cn(e, n) {
            var t;
            if (!e.isValid()) return e;
            if ("string" == typeof n)
                if (/^\d+$/.test(n)) n = k(n);
                else if (!u(n = e.localeData().monthsParse(n))) return e;
            t = Math.min(e.date(), tn(e.year(), n));
            e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](n, t);
            return e
        }

        function mn(e) {
            if (null != e) {
                cn(this, e);
                t.updateOffset(this, !0);
                return this
            }
            return Ze(this, "Month")
        }

        function hn() {
            return tn(this.year(), this.month())
        }
        var fn = De;

        function _n(e) {
            if (this._monthsParseExact) {
                c(this, "_monthsRegex") || gn.call(this);
                return e ? this._monthsShortStrictRegex : this._monthsShortRegex
            }
            c(this, "_monthsShortRegex") || (this._monthsShortRegex = fn);
            return this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex
        }
        var pn = De;

        function bn(e) {
            if (this._monthsParseExact) {
                c(this, "_monthsRegex") || gn.call(this);
                return e ? this._monthsStrictRegex : this._monthsRegex
            }
            c(this, "_monthsRegex") || (this._monthsRegex = pn);
            return this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex
        }

        function gn() {
            function e(e, n) {
                return n.length - e.length
            }
            var n, t, r = [],
                i = [],
                o = [];
            for (n = 0; n < 12; n++) {
                t = h([2e3, n]);
                r.push(this.monthsShort(t, ""));
                i.push(this.months(t, ""));
                o.push(this.months(t, ""));
                o.push(this.monthsShort(t, ""))
            }
            r.sort(e);
            i.sort(e);
            o.sort(e);
            for (n = 0; n < 12; n++) {
                r[n] = We(r[n]);
                i[n] = We(i[n])
            }
            for (n = 0; n < 24; n++) o[n] = We(o[n]);
            this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i");
            this._monthsShortRegex = this._monthsRegex;
            this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i");
            this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
        }

        function yn(e, n, t, r, i, o, s) {
            var a;
            if (e < 100 && e >= 0) {
                a = new Date(e + 400, n, t, r, i, o, s);
                isFinite(a.getFullYear()) && a.setFullYear(e)
            } else a = new Date(e, n, t, r, i, o, s);
            return a
        }

        function Mn(e) {
            var n;
            if (e < 100 && e >= 0) {
                var t = Array.prototype.slice.call(arguments);
                t[0] = e + 400;
                n = new Date(Date.UTC.apply(null, t));
                isFinite(n.getUTCFullYear()) && n.setUTCFullYear(e)
            } else n = new Date(Date.UTC.apply(null, arguments));
            return n
        }

        function vn(e, n, t) {
            var r = 7 + n - t;
            return -(7 + Mn(e, 0, r).getUTCDay() - n) % 7 + r - 1
        }

        function wn(e, n, t, r, i) {
            var o, s, a = 1 + 7 * (n - 1) + (7 + t - r) % 7 + vn(e, r, i);
            if (a <= 0) s = Ue(o = e - 1) + a;
            else if (a > Ue(e)) {
                o = e + 1;
                s = a - Ue(e)
            } else {
                o = e;
                s = a
            }
            return {
                year: o,
                dayOfYear: s
            }
        }

        function Yn(e, n, t) {
            var r, i, o = vn(e.year(), n, t),
                s = Math.floor((e.dayOfYear() - o - 1) / 7) + 1;
            if (s < 1) r = s + kn(i = e.year() - 1, n, t);
            else if (s > kn(e.year(), n, t)) {
                r = s - kn(e.year(), n, t);
                i = e.year() + 1
            } else {
                i = e.year();
                r = s
            }
            return {
                week: r,
                year: i
            }
        }

        function kn(e, n, t) {
            var r = vn(e, n, t),
                i = vn(e + 1, n, t);
            return (Ue(e) - r + i) / 7
        }
        oe("w", ["ww", 2], "wo", "week");
        oe("W", ["WW", 2], "Wo", "isoWeek");
        $("week", "w");
        $("isoWeek", "W");
        Q("week", 5);
        Q("isoWeek", 5);
        Se("w", _e);
        Se("ww", _e, ce);
        Se("W", _e);
        Se("WW", _e, ce);
        je(["w", "ww", "W", "WW"], (function (e, n, t, r) {
            n[r.substr(0, 1)] = k(e)
        }));

        function Tn(e) {
            return Yn(e, this._week.dow, this._week.doy).week
        }
        var Dn = {
            dow: 0,
            doy: 6
        };

        function Ln() {
            return this._week.dow
        }

        function Sn() {
            return this._week.doy
        }

        function Cn(e) {
            var n = this.localeData().week(this);
            return null == e ? n : this.add(7 * (e - n), "d")
        }

        function xn(e) {
            var n = Yn(this, 1, 4).week;
            return null == e ? n : this.add(7 * (e - n), "d")
        }
        oe("d", 0, "do", "day");
        oe("dd", 0, 0, (function (e) {
            return this.localeData().weekdaysMin(this, e)
        }));
        oe("ddd", 0, 0, (function (e) {
            return this.localeData().weekdaysShort(this, e)
        }));
        oe("dddd", 0, 0, (function (e) {
            return this.localeData().weekdays(this, e)
        }));
        oe("e", 0, 0, "weekday");
        oe("E", 0, 0, "isoWeekday");
        $("day", "d");
        $("weekday", "e");
        $("isoWeekday", "E");
        Q("day", 11);
        Q("weekday", 11);
        Q("isoWeekday", 11);
        Se("d", _e);
        Se("e", _e);
        Se("E", _e);
        Se("dd", (function (e, n) {
            return n.weekdaysMinRegex(e)
        }));
        Se("ddd", (function (e, n) {
            return n.weekdaysShortRegex(e)
        }));
        Se("dddd", (function (e, n) {
            return n.weekdaysRegex(e)
        }));
        je(["dd", "ddd", "dddd"], (function (e, n, t, r) {
            var i = t._locale.weekdaysParse(e, r, t._strict);
            null != i ? n.d = i : _(t).invalidWeekday = e
        }));
        je(["d", "e", "E"], (function (e, n, t, r) {
            n[r] = k(e)
        }));

        function Wn(e, n) {
            return "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = n.weekdaysParse(e)) ? e : null : parseInt(e, 10)
        }

        function On(e, n) {
            return "string" == typeof e ? n.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
        }

        function Nn(e, n) {
            return e.slice(n, 7).concat(e.slice(0, n))
        }
        var jn = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");

        function zn(e, n) {
            var t = i(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(n) ? "format" : "standalone"];
            return !0 === e ? Nn(t, this._week.dow) : e ? t[e.day()] : t
        }
        var An = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");

        function Bn(e) {
            return !0 === e ? Nn(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
        }
        var En = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");

        function Hn(e) {
            return !0 === e ? Nn(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
        }

        function In(e, n, t) {
            var r, i, o, s = e.toLocaleLowerCase();
            if (!this._weekdaysParse) {
                this._weekdaysParse = [];
                this._shortWeekdaysParse = [];
                this._minWeekdaysParse = [];
                for (r = 0; r < 7; ++r) {
                    o = h([2e3, 1]).day(r);
                    this._minWeekdaysParse[r] = this.weekdaysMin(o, "").toLocaleLowerCase();
                    this._shortWeekdaysParse[r] = this.weekdaysShort(o, "").toLocaleLowerCase();
                    this._weekdaysParse[r] = this.weekdays(o, "").toLocaleLowerCase()
                }
            }
            return t ? "dddd" === n ? -1 !== (i = Ve.call(this._weekdaysParse, s)) ? i : null : "ddd" === n ? -1 !== (i = Ve.call(this._shortWeekdaysParse, s)) ? i : null : -1 !== (i = Ve.call(this._minWeekdaysParse, s)) ? i : null : "dddd" === n ? -1 !== (i = Ve.call(this._weekdaysParse, s)) || -1 !== (i = Ve.call(this._shortWeekdaysParse, s)) || -1 !== (i = Ve.call(this._minWeekdaysParse, s)) ? i : null : "ddd" === n ? -1 !== (i = Ve.call(this._shortWeekdaysParse, s)) || -1 !== (i = Ve.call(this._weekdaysParse, s)) || -1 !== (i = Ve.call(this._minWeekdaysParse, s)) ? i : null : -1 !== (i = Ve.call(this._minWeekdaysParse, s)) || -1 !== (i = Ve.call(this._weekdaysParse, s)) || -1 !== (i = Ve.call(this._shortWeekdaysParse, s)) ? i : null
        }

        function Pn(e, n, t) {
            var r, i, o;
            if (this._weekdaysParseExact) return In.call(this, e, n, t);
            if (!this._weekdaysParse) {
                this._weekdaysParse = [];
                this._minWeekdaysParse = [];
                this._shortWeekdaysParse = [];
                this._fullWeekdaysParse = []
            }
            for (r = 0; r < 7; r++) {
                i = h([2e3, 1]).day(r);
                if (t && !this._fullWeekdaysParse[r]) {
                    this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i");
                    this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i");
                    this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")
                }
                if (!this._weekdaysParse[r]) {
                    o = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, "");
                    this._weekdaysParse[r] = new RegExp(o.replace(".", ""), "i")
                }
                if (t && "dddd" === n && this._fullWeekdaysParse[r].test(e)) return r;
                if (t && "ddd" === n && this._shortWeekdaysParse[r].test(e)) return r;
                if (t && "dd" === n && this._minWeekdaysParse[r].test(e)) return r;
                if (!t && this._weekdaysParse[r].test(e)) return r
            }
        }

        function Fn(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var n = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (null != e) {
                e = Wn(e, this.localeData());
                return this.add(e - n, "d")
            }
            return n
        }

        function Rn(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var n = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? n : this.add(e - n, "d")
        }

        function qn(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
                var n = On(e, this.localeData());
                return this.day(this.day() % 7 ? n : n - 7)
            }
            return this.day() || 7
        }
        var Un = De;

        function Gn(e) {
            if (this._weekdaysParseExact) {
                c(this, "_weekdaysRegex") || Zn.call(this);
                return e ? this._weekdaysStrictRegex : this._weekdaysRegex
            }
            c(this, "_weekdaysRegex") || (this._weekdaysRegex = Un);
            return this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex
        }
        var Vn = De;

        function $n(e) {
            if (this._weekdaysParseExact) {
                c(this, "_weekdaysRegex") || Zn.call(this);
                return e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex
            }
            c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Vn);
            return this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex
        }
        var Kn = De;

        function Jn(e) {
            if (this._weekdaysParseExact) {
                c(this, "_weekdaysRegex") || Zn.call(this);
                return e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex
            }
            c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Kn);
            return this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex
        }

        function Zn() {
            function e(e, n) {
                return n.length - e.length
            }
            var n, t, r, i, o, s = [],
                a = [],
                u = [],
                d = [];
            for (n = 0; n < 7; n++) {
                t = h([2e3, 1]).day(n);
                r = this.weekdaysMin(t, "");
                i = this.weekdaysShort(t, "");
                o = this.weekdays(t, "");
                s.push(r);
                a.push(i);
                u.push(o);
                d.push(r);
                d.push(i);
                d.push(o)
            }
            s.sort(e);
            a.sort(e);
            u.sort(e);
            d.sort(e);
            for (n = 0; n < 7; n++) {
                a[n] = We(a[n]);
                u[n] = We(u[n]);
                d[n] = We(d[n])
            }
            this._weekdaysRegex = new RegExp("^(" + d.join("|") + ")", "i");
            this._weekdaysShortRegex = this._weekdaysRegex;
            this._weekdaysMinRegex = this._weekdaysRegex;
            this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i");
            this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i");
            this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
        }

        function Qn() {
            return this.hours() % 12 || 12
        }

        function Xn() {
            return this.hours() || 24
        }
        oe("H", ["HH", 2], 0, "hour");
        oe("h", ["hh", 2], 0, Qn);
        oe("k", ["kk", 2], 0, Xn);
        oe("hmm", 0, 0, (function () {
            return "" + Qn.apply(this) + ee(this.minutes(), 2)
        }));
        oe("hmmss", 0, 0, (function () {
            return "" + Qn.apply(this) + ee(this.minutes(), 2) + ee(this.seconds(), 2)
        }));
        oe("Hmm", 0, 0, (function () {
            return "" + this.hours() + ee(this.minutes(), 2)
        }));
        oe("Hmmss", 0, 0, (function () {
            return "" + this.hours() + ee(this.minutes(), 2) + ee(this.seconds(), 2)
        }));

        function et(e, n) {
            oe(e, 0, 0, (function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), n)
            }))
        }
        et("a", !0);
        et("A", !1);
        $("hour", "h");
        Q("hour", 13);

        function nt(e, n) {
            return n._meridiemParse
        }
        Se("a", nt);
        Se("A", nt);
        Se("H", _e);
        Se("h", _e);
        Se("k", _e);
        Se("HH", _e, ce);
        Se("hh", _e, ce);
        Se("kk", _e, ce);
        Se("hmm", pe);
        Se("hmmss", be);
        Se("Hmm", pe);
        Se("Hmmss", be);
        Ne(["H", "HH"], He);
        Ne(["k", "kk"], (function (e, n, t) {
            var r = k(e);
            n[He] = 24 === r ? 0 : r
        }));
        Ne(["a", "A"], (function (e, n, t) {
            t._isPm = t._locale.isPM(e);
            t._meridiem = e
        }));
        Ne(["h", "hh"], (function (e, n, t) {
            n[He] = k(e);
            _(t).bigHour = !0
        }));
        Ne("hmm", (function (e, n, t) {
            var r = e.length - 2;
            n[He] = k(e.substr(0, r));
            n[Ie] = k(e.substr(r));
            _(t).bigHour = !0
        }));
        Ne("hmmss", (function (e, n, t) {
            var r = e.length - 4,
                i = e.length - 2;
            n[He] = k(e.substr(0, r));
            n[Ie] = k(e.substr(r, 2));
            n[Pe] = k(e.substr(i));
            _(t).bigHour = !0
        }));
        Ne("Hmm", (function (e, n, t) {
            var r = e.length - 2;
            n[He] = k(e.substr(0, r));
            n[Ie] = k(e.substr(r))
        }));
        Ne("Hmmss", (function (e, n, t) {
            var r = e.length - 4,
                i = e.length - 2;
            n[He] = k(e.substr(0, r));
            n[Ie] = k(e.substr(r, 2));
            n[Pe] = k(e.substr(i))
        }));

        function tt(e) {
            return "p" === (e + "").toLowerCase().charAt(0)
        }
        var rt = /[ap]\.?m?\.?/i;

        function it(e, n, t) {
            return e > 11 ? t ? "pm" : "PM" : t ? "am" : "AM"
        }
        var ot, st = Je("Hours", !0),
            at = {
                calendar: z,
                longDateFormat: B,
                invalidDate: H,
                ordinal: P,
                dayOfMonthOrdinalParse: F,
                relativeTime: q,
                months: on,
                monthsShort: an,
                week: Dn,
                weekdays: jn,
                weekdaysMin: En,
                weekdaysShort: An,
                meridiemParse: rt
            },
            ut = {},
            dt = {};

        function lt(e) {
            return e ? e.toLowerCase().replace("_", "-") : e
        }

        function ct(e) {
            for (var n, t, r, i, o = 0; o < e.length;) {
                n = (i = lt(e[o]).split("-")).length;
                t = (t = lt(e[o + 1])) ? t.split("-") : null;
                for (; n > 0;) {
                    if (r = mt(i.slice(0, n).join("-"))) return r;
                    if (t && t.length >= n && T(i, t, !0) >= n - 1) break;
                    n--
                }
                o++
            }
            return ot
        }

        function mt(e) {
            return ut[e]
        }

        function ht(e, n) {
            var t;
            e && ((t = a(n) ? pt(e) : ft(e, n)) ? ot = t : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?"));
            return ot._abbr
        }

        function ft(e, n) {
            if (null !== n) {
                var t, r = at;
                n.abbr = e;
                if (null != ut[e]) {
                    x("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
                    r = ut[e]._config
                } else if (null != n.parentLocale)
                    if (null != ut[n.parentLocale]) r = ut[n.parentLocale]._config;
                    else {
                        if (null == (t = mt(n.parentLocale))) {
                            dt[n.parentLocale] || (dt[n.parentLocale] = []);
                            dt[n.parentLocale].push({
                                name: e,
                                config: n
                            });
                            return null
                        }
                        r = t._config
                    } ut[e] = new j(N(r, n));
                dt[e] && dt[e].forEach((function (e) {
                    ft(e.name, e.config)
                }));
                ht(e);
                return ut[e]
            }
            delete ut[e];
            return null
        }

        function _t(e, n) {
            if (null != n) {
                var t, r, i = at;
                null != (r = mt(e)) && (i = r._config);
                (t = new j(n = N(i, n))).parentLocale = ut[e];
                ut[e] = t;
                ht(e)
            } else null != ut[e] && (null != ut[e].parentLocale ? ut[e] = ut[e].parentLocale : null != ut[e] && delete ut[e]);
            return ut[e]
        }

        function pt(e) {
            var n;
            e && e._locale && e._locale._abbr && (e = e._locale._abbr);
            if (!e) return ot;
            if (!i(e)) {
                if (n = mt(e)) return n;
                e = [e]
            }
            return ct(e)
        }

        function bt() {
            return S(ut)
        }

        function gt(e) {
            var n, t = e._a;
            if (t && -2 === _(e).overflow) {
                n = t[Be] < 0 || t[Be] > 11 ? Be : t[Ee] < 1 || t[Ee] > tn(t[Ae], t[Be]) ? Ee : t[He] < 0 || t[He] > 24 || 24 === t[He] && (0 !== t[Ie] || 0 !== t[Pe] || 0 !== t[Fe]) ? He : t[Ie] < 0 || t[Ie] > 59 ? Ie : t[Pe] < 0 || t[Pe] > 59 ? Pe : t[Fe] < 0 || t[Fe] > 999 ? Fe : -1;
                _(e)._overflowDayOfYear && (n < Ae || n > Ee) && (n = Ee);
                _(e)._overflowWeeks && -1 === n && (n = Re);
                _(e)._overflowWeekday && -1 === n && (n = qe);
                _(e).overflow = n
            }
            return e
        }

        function yt(e, n, t) {
            return null != e ? e : null != n ? n : t
        }

        function Mt(e) {
            var n = new Date(t.now());
            return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
        }

        function vt(e) {
            var n, t, r, i, o, s = [];
            if (!e._d) {
                r = Mt(e);
                e._w && null == e._a[Ee] && null == e._a[Be] && wt(e);
                if (null != e._dayOfYear) {
                    o = yt(e._a[Ae], r[Ae]);
                    (e._dayOfYear > Ue(o) || 0 === e._dayOfYear) && (_(e)._overflowDayOfYear = !0);
                    t = Mn(o, 0, e._dayOfYear);
                    e._a[Be] = t.getUTCMonth();
                    e._a[Ee] = t.getUTCDate()
                }
                for (n = 0; n < 3 && null == e._a[n]; ++n) e._a[n] = s[n] = r[n];
                for (; n < 7; n++) e._a[n] = s[n] = null == e._a[n] ? 2 === n ? 1 : 0 : e._a[n];
                if (24 === e._a[He] && 0 === e._a[Ie] && 0 === e._a[Pe] && 0 === e._a[Fe]) {
                    e._nextDay = !0;
                    e._a[He] = 0
                }
                e._d = (e._useUTC ? Mn : yn).apply(null, s);
                i = e._useUTC ? e._d.getUTCDay() : e._d.getDay();
                null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm);
                e._nextDay && (e._a[He] = 24);
                e._w && void 0 !== e._w.d && e._w.d !== i && (_(e).weekdayMismatch = !0)
            }
        }

        function wt(e) {
            var n, t, r, i, o, s, a, u;
            if (null != (n = e._w).GG || null != n.W || null != n.E) {
                o = 1;
                s = 4;
                t = yt(n.GG, e._a[Ae], Yn(Vt(), 1, 4).year);
                r = yt(n.W, 1);
                ((i = yt(n.E, 1)) < 1 || i > 7) && (u = !0)
            } else {
                o = e._locale._week.dow;
                s = e._locale._week.doy;
                var d = Yn(Vt(), o, s);
                t = yt(n.gg, e._a[Ae], d.year);
                r = yt(n.w, d.week);
                if (null != n.d)((i = n.d) < 0 || i > 6) && (u = !0);
                else if (null != n.e) {
                    i = n.e + o;
                    (n.e < 0 || n.e > 6) && (u = !0)
                } else i = o
            }
            if (r < 1 || r > kn(t, o, s)) _(e)._overflowWeeks = !0;
            else if (null != u) _(e)._overflowWeekday = !0;
            else {
                a = wn(t, r, i, o, s);
                e._a[Ae] = a.year;
                e._dayOfYear = a.dayOfYear
            }
        }
        var Yt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            kt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            Tt = /Z|[+-]\d\d(?::?\d\d)?/,
            Dt = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                ["YYYY-DDD", /\d{4}-\d{3}/],
                ["YYYY-MM", /\d{4}-\d\d/, !1],
                ["YYYYYYMMDD", /[+-]\d{10}/],
                ["YYYYMMDD", /\d{8}/],
                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                ["YYYYDDD", /\d{7}/]
            ],
            Lt = [
                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                ["HH:mm", /\d\d:\d\d/],
                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                ["HHmmss", /\d\d\d\d\d\d/],
                ["HHmm", /\d\d\d\d/],
                ["HH", /\d\d/]
            ],
            St = /^\/?Date\((\-?\d+)/i;

        function Ct(e) {
            var n, t, r, i, o, s, a = e._i,
                u = Yt.exec(a) || kt.exec(a);
            if (u) {
                _(e).iso = !0;
                for (n = 0, t = Dt.length; n < t; n++)
                    if (Dt[n][1].exec(u[1])) {
                        i = Dt[n][0];
                        r = !1 !== Dt[n][2];
                        break
                    } if (null == i) {
                    e._isValid = !1;
                    return
                }
                if (u[3]) {
                    for (n = 0, t = Lt.length; n < t; n++)
                        if (Lt[n][1].exec(u[3])) {
                            o = (u[2] || " ") + Lt[n][0];
                            break
                        } if (null == o) {
                        e._isValid = !1;
                        return
                    }
                }
                if (!r && null != o) {
                    e._isValid = !1;
                    return
                }
                if (u[4]) {
                    if (!Tt.exec(u[4])) {
                        e._isValid = !1;
                        return
                    }
                    s = "Z"
                }
                e._f = i + (o || "") + (s || "");
                Ht(e)
            } else e._isValid = !1
        }
        var xt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

        function Wt(e, n, t, r, i, o) {
            var s = [Ot(e), an.indexOf(n), parseInt(t, 10), parseInt(r, 10), parseInt(i, 10)];
            o && s.push(parseInt(o, 10));
            return s
        }

        function Ot(e) {
            var n = parseInt(e, 10);
            return n <= 49 ? 2e3 + n : n <= 999 ? 1900 + n : n
        }

        function Nt(e) {
            return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
        }

        function jt(e, n, t) {
            if (e && An.indexOf(e) !== new Date(n[0], n[1], n[2]).getDay()) {
                _(t).weekdayMismatch = !0;
                t._isValid = !1;
                return !1
            }
            return !0
        }
        var zt = {
            UT: 0,
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480
        };

        function At(e, n, t) {
            if (e) return zt[e];
            if (n) return 0;
            var r = parseInt(t, 10),
                i = r % 100;
            return (r - i) / 100 * 60 + i
        }

        function Bt(e) {
            var n = xt.exec(Nt(e._i));
            if (n) {
                var t = Wt(n[4], n[3], n[2], n[5], n[6], n[7]);
                if (!jt(n[1], t, e)) return;
                e._a = t;
                e._tzm = At(n[8], n[9], n[10]);
                e._d = Mn.apply(null, e._a);
                e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm);
                _(e).rfc2822 = !0
            } else e._isValid = !1
        }

        function Et(e) {
            var n = St.exec(e._i);
            if (null === n) {
                Ct(e);
                if (!1 === e._isValid) {
                    delete e._isValid;
                    Bt(e);
                    if (!1 === e._isValid) {
                        delete e._isValid;
                        t.createFromInputFallback(e)
                    }
                }
            } else e._d = new Date(+n[1])
        }
        t.createFromInputFallback = L("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function (e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
        }));
        t.ISO_8601 = function () {};
        t.RFC_2822 = function () {};

        function Ht(e) {
            if (e._f !== t.ISO_8601)
                if (e._f !== t.RFC_2822) {
                    e._a = [];
                    _(e).empty = !0;
                    var n, r, i, o, s, a = "" + e._i,
                        u = a.length,
                        d = 0;
                    i = de(e._f, e._locale).match(ne) || [];
                    for (n = 0; n < i.length; n++) {
                        o = i[n];
                        if (r = (a.match(Ce(o, e)) || [])[0]) {
                            (s = a.substr(0, a.indexOf(r))).length > 0 && _(e).unusedInput.push(s);
                            a = a.slice(a.indexOf(r) + r.length);
                            d += r.length
                        }
                        if (ie[o]) {
                            r ? _(e).empty = !1 : _(e).unusedTokens.push(o);
                            ze(o, r, e)
                        } else e._strict && !r && _(e).unusedTokens.push(o)
                    }
                    _(e).charsLeftOver = u - d;
                    a.length > 0 && _(e).unusedInput.push(a);
                    e._a[He] <= 12 && !0 === _(e).bigHour && e._a[He] > 0 && (_(e).bigHour = void 0);
                    _(e).parsedDateParts = e._a.slice(0);
                    _(e).meridiem = e._meridiem;
                    e._a[He] = It(e._locale, e._a[He], e._meridiem);
                    vt(e);
                    gt(e)
                } else Bt(e);
            else Ct(e)
        }

        function It(e, n, t) {
            var r;
            if (null == t) return n;
            if (null != e.meridiemHour) return e.meridiemHour(n, t);
            if (null != e.isPM) {
                (r = e.isPM(t)) && n < 12 && (n += 12);
                r || 12 !== n || (n = 0);
                return n
            }
            return n
        }

        function Pt(e) {
            var n, t, r, i, o;
            if (0 !== e._f.length) {
                for (i = 0; i < e._f.length; i++) {
                    o = 0;
                    n = y({}, e);
                    null != e._useUTC && (n._useUTC = e._useUTC);
                    n._f = e._f[i];
                    Ht(n);
                    if (p(n)) {
                        o += _(n).charsLeftOver;
                        o += 10 * _(n).unusedTokens.length;
                        _(n).score = o;
                        if (null == r || o < r) {
                            r = o;
                            t = n
                        }
                    }
                }
                m(e, t || n)
            } else {
                _(e).invalidFormat = !0;
                e._d = new Date(NaN)
            }
        }

        function Ft(e) {
            if (!e._d) {
                var n = J(e._i);
                e._a = l([n.year, n.month, n.day || n.date, n.hour, n.minute, n.second, n.millisecond], (function (e) {
                    return e && parseInt(e, 10)
                }));
                vt(e)
            }
        }

        function Rt(e) {
            var n = new v(gt(qt(e)));
            if (n._nextDay) {
                n.add(1, "d");
                n._nextDay = void 0
            }
            return n
        }

        function qt(e) {
            var n = e._i,
                t = e._f;
            e._locale = e._locale || pt(e._l);
            if (null === n || void 0 === t && "" === n) return b({
                nullInput: !0
            });
            "string" == typeof n && (e._i = n = e._locale.preparse(n));
            if (w(n)) return new v(gt(n));
            d(n) ? e._d = n : i(t) ? Pt(e) : t ? Ht(e) : Ut(e);
            p(e) || (e._d = null);
            return e
        }

        function Ut(e) {
            var n = e._i;
            if (a(n)) e._d = new Date(t.now());
            else if (d(n)) e._d = new Date(n.valueOf());
            else if ("string" == typeof n) Et(e);
            else if (i(n)) {
                e._a = l(n.slice(0), (function (e) {
                    return parseInt(e, 10)
                }));
                vt(e)
            } else o(n) ? Ft(e) : u(n) ? e._d = new Date(n) : t.createFromInputFallback(e)
        }

        function Gt(e, n, t, r, a) {
            var u = {};
            if (!0 === t || !1 === t) {
                r = t;
                t = void 0
            }(o(e) && s(e) || i(e) && 0 === e.length) && (e = void 0);
            u._isAMomentObject = !0;
            u._useUTC = u._isUTC = a;
            u._l = t;
            u._i = e;
            u._f = n;
            u._strict = r;
            return Rt(u)
        }

        function Vt(e, n, t, r) {
            return Gt(e, n, t, r, !1)
        }
        var $t = L("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function () {
                var e = Vt.apply(null, arguments);
                return this.isValid() && e.isValid() ? e < this ? this : e : b()
            })),
            Kt = L("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function () {
                var e = Vt.apply(null, arguments);
                return this.isValid() && e.isValid() ? e > this ? this : e : b()
            }));

        function Jt(e, n) {
            var t, r;
            1 === n.length && i(n[0]) && (n = n[0]);
            if (!n.length) return Vt();
            t = n[0];
            for (r = 1; r < n.length; ++r) n[r].isValid() && !n[r][e](t) || (t = n[r]);
            return t
        }

        function Zt() {
            return Jt("isBefore", [].slice.call(arguments, 0))
        }

        function Qt() {
            return Jt("isAfter", [].slice.call(arguments, 0))
        }
        var Xt = function () {
                return Date.now ? Date.now() : +new Date
            },
            er = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

        function nr(e) {
            for (var n in e)
                if (-1 === Ve.call(er, n) || null != e[n] && isNaN(e[n])) return !1;
            for (var t = !1, r = 0; r < er.length; ++r)
                if (e[er[r]]) {
                    if (t) return !1;
                    parseFloat(e[er[r]]) !== k(e[er[r]]) && (t = !0)
                } return !0
        }

        function tr() {
            return this._isValid
        }

        function rr() {
            return Tr(NaN)
        }

        function ir(e) {
            var n = J(e),
                t = n.year || 0,
                r = n.quarter || 0,
                i = n.month || 0,
                o = n.week || n.isoWeek || 0,
                s = n.day || 0,
                a = n.hour || 0,
                u = n.minute || 0,
                d = n.second || 0,
                l = n.millisecond || 0;
            this._isValid = nr(n);
            this._milliseconds = +l + 1e3 * d + 6e4 * u + 1e3 * a * 60 * 60;
            this._days = +s + 7 * o;
            this._months = +i + 3 * r + 12 * t;
            this._data = {};
            this._locale = pt();
            this._bubble()
        }

        function or(e) {
            return e instanceof ir
        }

        function sr(e) {
            return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
        }

        function ar(e, n) {
            oe(e, 0, 0, (function () {
                var e = this.utcOffset(),
                    t = "+";
                if (e < 0) {
                    e = -e;
                    t = "-"
                }
                return t + ee(~~(e / 60), 2) + n + ee(~~e % 60, 2)
            }))
        }
        ar("Z", ":");
        ar("ZZ", "");
        Se("Z", ke);
        Se("ZZ", ke);
        Ne(["Z", "ZZ"], (function (e, n, t) {
            t._useUTC = !0;
            t._tzm = dr(ke, e)
        }));
        var ur = /([\+\-]|\d\d)/gi;

        function dr(e, n) {
            var t = (n || "").match(e);
            if (null === t) return null;
            var r = ((t[t.length - 1] || []) + "").match(ur) || ["-", 0, 0],
                i = 60 * r[1] + k(r[2]);
            return 0 === i ? 0 : "+" === r[0] ? i : -i
        }

        function lr(e, n) {
            var r, i;
            if (n._isUTC) {
                r = n.clone();
                i = (w(e) || d(e) ? e.valueOf() : Vt(e).valueOf()) - r.valueOf();
                r._d.setTime(r._d.valueOf() + i);
                t.updateOffset(r, !1);
                return r
            }
            return Vt(e).local()
        }

        function cr(e) {
            return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
        }
        t.updateOffset = function () {};

        function mr(e, n, r) {
            var i, o = this._offset || 0;
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
                if ("string" == typeof e) {
                    if (null === (e = dr(ke, e))) return this
                } else Math.abs(e) < 16 && !r && (e *= 60);
                !this._isUTC && n && (i = cr(this));
                this._offset = e;
                this._isUTC = !0;
                null != i && this.add(i, "m");
                if (o !== e)
                    if (!n || this._changeInProgress) xr(this, Tr(e - o, "m"), 1, !1);
                    else if (!this._changeInProgress) {
                    this._changeInProgress = !0;
                    t.updateOffset(this, !0);
                    this._changeInProgress = null
                }
                return this
            }
            return this._isUTC ? o : cr(this)
        }

        function hr(e, n) {
            if (null != e) {
                "string" != typeof e && (e = -e);
                this.utcOffset(e, n);
                return this
            }
            return -this.utcOffset()
        }

        function fr(e) {
            return this.utcOffset(0, e)
        }

        function _r(e) {
            if (this._isUTC) {
                this.utcOffset(0, e);
                this._isUTC = !1;
                e && this.subtract(cr(this), "m")
            }
            return this
        }

        function pr() {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" == typeof this._i) {
                var e = dr(Ye, this._i);
                null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
            }
            return this
        }

        function br(e) {
            if (!this.isValid()) return !1;
            e = e ? Vt(e).utcOffset() : 0;
            return (this.utcOffset() - e) % 60 == 0
        }

        function gr() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }

        function yr() {
            if (!a(this._isDSTShifted)) return this._isDSTShifted;
            var e = {};
            y(e, this);
            if ((e = qt(e))._a) {
                var n = e._isUTC ? h(e._a) : Vt(e._a);
                this._isDSTShifted = this.isValid() && T(e._a, n.toArray()) > 0
            } else this._isDSTShifted = !1;
            return this._isDSTShifted
        }

        function Mr() {
            return !!this.isValid() && !this._isUTC
        }

        function vr() {
            return !!this.isValid() && this._isUTC
        }

        function wr() {
            return !!this.isValid() && this._isUTC && 0 === this._offset
        }
        var Yr = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            kr = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

        function Tr(e, n) {
            var t, r, i, o = e,
                s = null;
            if (or(e)) o = {
                ms: e._milliseconds,
                d: e._days,
                M: e._months
            };
            else if (u(e)) {
                o = {};
                n ? o[n] = e : o.milliseconds = e
            } else if (s = Yr.exec(e)) {
                t = "-" === s[1] ? -1 : 1;
                o = {
                    y: 0,
                    d: k(s[Ee]) * t,
                    h: k(s[He]) * t,
                    m: k(s[Ie]) * t,
                    s: k(s[Pe]) * t,
                    ms: k(sr(1e3 * s[Fe])) * t
                }
            } else if (s = kr.exec(e)) {
                t = "-" === s[1] ? -1 : 1;
                o = {
                    y: Dr(s[2], t),
                    M: Dr(s[3], t),
                    w: Dr(s[4], t),
                    d: Dr(s[5], t),
                    h: Dr(s[6], t),
                    m: Dr(s[7], t),
                    s: Dr(s[8], t)
                }
            } else if (null == o) o = {};
            else if ("object" == typeof o && ("from" in o || "to" in o)) {
                i = Sr(Vt(o.from), Vt(o.to));
                (o = {}).ms = i.milliseconds;
                o.M = i.months
            }
            r = new ir(o);
            or(e) && c(e, "_locale") && (r._locale = e._locale);
            return r
        }
        Tr.fn = ir.prototype;
        Tr.invalid = rr;

        function Dr(e, n) {
            var t = e && parseFloat(e.replace(",", "."));
            return (isNaN(t) ? 0 : t) * n
        }

        function Lr(e, n) {
            var t = {};
            t.months = n.month() - e.month() + 12 * (n.year() - e.year());
            e.clone().add(t.months, "M").isAfter(n) && --t.months;
            t.milliseconds = +n - +e.clone().add(t.months, "M");
            return t
        }

        function Sr(e, n) {
            var t;
            if (!e.isValid() || !n.isValid()) return {
                milliseconds: 0,
                months: 0
            };
            n = lr(n, e);
            if (e.isBefore(n)) t = Lr(e, n);
            else {
                (t = Lr(n, e)).milliseconds = -t.milliseconds;
                t.months = -t.months
            }
            return t
        }

        function Cr(e, n) {
            return function (t, r) {
                var i;
                if (null !== r && !isNaN(+r)) {
                    x(n, "moment()." + n + "(period, number) is deprecated. Please use moment()." + n + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
                    i = t;
                    t = r;
                    r = i
                }
                xr(this, Tr(t = "string" == typeof t ? +t : t, r), e);
                return this
            }
        }

        function xr(e, n, r, i) {
            var o = n._milliseconds,
                s = sr(n._days),
                a = sr(n._months);
            if (e.isValid()) {
                i = null == i || i;
                a && cn(e, Ze(e, "Month") + a * r);
                s && Qe(e, "Date", Ze(e, "Date") + s * r);
                o && e._d.setTime(e._d.valueOf() + o * r);
                i && t.updateOffset(e, s || a)
            }
        }
        var Wr = Cr(1, "add"),
            Or = Cr(-1, "subtract");

        function Nr(e, n) {
            var t = e.diff(n, "days", !0);
            return t < -6 ? "sameElse" : t < -1 ? "lastWeek" : t < 0 ? "lastDay" : t < 1 ? "sameDay" : t < 2 ? "nextDay" : t < 7 ? "nextWeek" : "sameElse"
        }

        function jr(e, n) {
            var r = e || Vt(),
                i = lr(r, this).startOf("day"),
                o = t.calendarFormat(this, i) || "sameElse",
                s = n && (W(n[o]) ? n[o].call(this, r) : n[o]);
            return this.format(s || this.localeData().calendar(o, this, Vt(r)))
        }

        function zr() {
            return new v(this)
        }

        function Ar(e, n) {
            var t = w(e) ? e : Vt(e);
            return !(!this.isValid() || !t.isValid()) && ("millisecond" === (n = K(n) || "millisecond") ? this.valueOf() > t.valueOf() : t.valueOf() < this.clone().startOf(n).valueOf())
        }

        function Br(e, n) {
            var t = w(e) ? e : Vt(e);
            return !(!this.isValid() || !t.isValid()) && ("millisecond" === (n = K(n) || "millisecond") ? this.valueOf() < t.valueOf() : this.clone().endOf(n).valueOf() < t.valueOf())
        }

        function Er(e, n, t, r) {
            var i = w(e) ? e : Vt(e),
                o = w(n) ? n : Vt(n);
            return !!(this.isValid() && i.isValid() && o.isValid()) && ("(" === (r = r || "()")[0] ? this.isAfter(i, t) : !this.isBefore(i, t)) && (")" === r[1] ? this.isBefore(o, t) : !this.isAfter(o, t))
        }

        function Hr(e, n) {
            var t, r = w(e) ? e : Vt(e);
            if (!this.isValid() || !r.isValid()) return !1;
            if ("millisecond" === (n = K(n) || "millisecond")) return this.valueOf() === r.valueOf();
            t = r.valueOf();
            return this.clone().startOf(n).valueOf() <= t && t <= this.clone().endOf(n).valueOf()
        }

        function Ir(e, n) {
            return this.isSame(e, n) || this.isAfter(e, n)
        }

        function Pr(e, n) {
            return this.isSame(e, n) || this.isBefore(e, n)
        }

        function Fr(e, n, t) {
            var r, i, o;
            if (!this.isValid()) return NaN;
            if (!(r = lr(e, this)).isValid()) return NaN;
            i = 6e4 * (r.utcOffset() - this.utcOffset());
            switch (n = K(n)) {
                case "year":
                    o = Rr(this, r) / 12;
                    break;
                case "month":
                    o = Rr(this, r);
                    break;
                case "quarter":
                    o = Rr(this, r) / 3;
                    break;
                case "second":
                    o = (this - r) / 1e3;
                    break;
                case "minute":
                    o = (this - r) / 6e4;
                    break;
                case "hour":
                    o = (this - r) / 36e5;
                    break;
                case "day":
                    o = (this - r - i) / 864e5;
                    break;
                case "week":
                    o = (this - r - i) / 6048e5;
                    break;
                default:
                    o = this - r
            }
            return t ? o : Y(o)
        }

        function Rr(e, n) {
            var t = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                r = e.clone().add(t, "months");
            return -(t + (n - r < 0 ? (n - r) / (r - e.clone().add(t - 1, "months")) : (n - r) / (e.clone().add(t + 1, "months") - r))) || 0
        }
        t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
        t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";

        function qr() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }

        function Ur(e) {
            if (!this.isValid()) return null;
            var n = !0 !== e,
                t = n ? this.clone().utc() : this;
            return t.year() < 0 || t.year() > 9999 ? ue(t, n ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : W(Date.prototype.toISOString) ? n ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", ue(t, "Z")) : ue(t, n ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
        }

        function Gr() {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var e = "moment",
                n = "";
            if (!this.isLocal()) {
                e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone";
                n = "Z"
            }
            var t = "[" + e + '("]',
                r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                i = "-MM-DD[T]HH:mm:ss.SSS",
                o = n + '[")]';
            return this.format(t + r + i + o)
        }

        function Vr(e) {
            e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
            var n = ue(this, e);
            return this.localeData().postformat(n)
        }

        function $r(e, n) {
            return this.isValid() && (w(e) && e.isValid() || Vt(e).isValid()) ? Tr({
                to: this,
                from: e
            }).locale(this.locale()).humanize(!n) : this.localeData().invalidDate()
        }

        function Kr(e) {
            return this.from(Vt(), e)
        }

        function Jr(e, n) {
            return this.isValid() && (w(e) && e.isValid() || Vt(e).isValid()) ? Tr({
                from: this,
                to: e
            }).locale(this.locale()).humanize(!n) : this.localeData().invalidDate()
        }

        function Zr(e) {
            return this.to(Vt(), e)
        }

        function Qr(e) {
            var n;
            if (void 0 === e) return this._locale._abbr;
            null != (n = pt(e)) && (this._locale = n);
            return this
        }
        var Xr = L("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function (e) {
            return void 0 === e ? this.localeData() : this.locale(e)
        }));

        function ei() {
            return this._locale
        }
        var ni = 1e3,
            ti = 60 * ni,
            ri = 60 * ti,
            ii = 3506328 * ri;

        function oi(e, n) {
            return (e % n + n) % n
        }

        function si(e, n, t) {
            return e < 100 && e >= 0 ? new Date(e + 400, n, t) - ii : new Date(e, n, t).valueOf()
        }

        function ai(e, n, t) {
            return e < 100 && e >= 0 ? Date.UTC(e + 400, n, t) - ii : Date.UTC(e, n, t)
        }

        function ui(e) {
            var n;
            if (void 0 === (e = K(e)) || "millisecond" === e || !this.isValid()) return this;
            var r = this._isUTC ? ai : si;
            switch (e) {
                case "year":
                    n = r(this.year(), 0, 1);
                    break;
                case "quarter":
                    n = r(this.year(), this.month() - this.month() % 3, 1);
                    break;
                case "month":
                    n = r(this.year(), this.month(), 1);
                    break;
                case "week":
                    n = r(this.year(), this.month(), this.date() - this.weekday());
                    break;
                case "isoWeek":
                    n = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                    break;
                case "day":
                case "date":
                    n = r(this.year(), this.month(), this.date());
                    break;
                case "hour":
                    n = this._d.valueOf();
                    n -= oi(n + (this._isUTC ? 0 : this.utcOffset() * ti), ri);
                    break;
                case "minute":
                    n = this._d.valueOf();
                    n -= oi(n, ti);
                    break;
                case "second":
                    n = this._d.valueOf();
                    n -= oi(n, ni)
            }
            this._d.setTime(n);
            t.updateOffset(this, !0);
            return this
        }

        function di(e) {
            var n;
            if (void 0 === (e = K(e)) || "millisecond" === e || !this.isValid()) return this;
            var r = this._isUTC ? ai : si;
            switch (e) {
                case "year":
                    n = r(this.year() + 1, 0, 1) - 1;
                    break;
                case "quarter":
                    n = r(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                    break;
                case "month":
                    n = r(this.year(), this.month() + 1, 1) - 1;
                    break;
                case "week":
                    n = r(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                    break;
                case "isoWeek":
                    n = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                    break;
                case "day":
                case "date":
                    n = r(this.year(), this.month(), this.date() + 1) - 1;
                    break;
                case "hour":
                    n = this._d.valueOf();
                    n += ri - oi(n + (this._isUTC ? 0 : this.utcOffset() * ti), ri) - 1;
                    break;
                case "minute":
                    n = this._d.valueOf();
                    n += ti - oi(n, ti) - 1;
                    break;
                case "second":
                    n = this._d.valueOf();
                    n += ni - oi(n, ni) - 1
            }
            this._d.setTime(n);
            t.updateOffset(this, !0);
            return this
        }

        function li() {
            return this._d.valueOf() - 6e4 * (this._offset || 0)
        }

        function ci() {
            return Math.floor(this.valueOf() / 1e3)
        }

        function mi() {
            return new Date(this.valueOf())
        }

        function hi() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
        }

        function fi() {
            var e = this;
            return {
                years: e.year(),
                months: e.month(),
                date: e.date(),
                hours: e.hours(),
                minutes: e.minutes(),
                seconds: e.seconds(),
                milliseconds: e.milliseconds()
            }
        }

        function _i() {
            return this.isValid() ? this.toISOString() : null
        }

        function pi() {
            return p(this)
        }

        function bi() {
            return m({}, _(this))
        }

        function gi() {
            return _(this).overflow
        }

        function yi() {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
            }
        }
        oe(0, ["gg", 2], 0, (function () {
            return this.weekYear() % 100
        }));
        oe(0, ["GG", 2], 0, (function () {
            return this.isoWeekYear() % 100
        }));

        function Mi(e, n) {
            oe(0, [e, e.length], 0, n)
        }
        Mi("gggg", "weekYear");
        Mi("ggggg", "weekYear");
        Mi("GGGG", "isoWeekYear");
        Mi("GGGGG", "isoWeekYear");
        $("weekYear", "gg");
        $("isoWeekYear", "GG");
        Q("weekYear", 1);
        Q("isoWeekYear", 1);
        Se("G", we);
        Se("g", we);
        Se("GG", _e, ce);
        Se("gg", _e, ce);
        Se("GGGG", ye, he);
        Se("gggg", ye, he);
        Se("GGGGG", Me, fe);
        Se("ggggg", Me, fe);
        je(["gggg", "ggggg", "GGGG", "GGGGG"], (function (e, n, t, r) {
            n[r.substr(0, 2)] = k(e)
        }));
        je(["gg", "GG"], (function (e, n, r, i) {
            n[i] = t.parseTwoDigitYear(e)
        }));

        function vi(e) {
            return Ti.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }

        function wi(e) {
            return Ti.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
        }

        function Yi() {
            return kn(this.year(), 1, 4)
        }

        function ki() {
            var e = this.localeData()._week;
            return kn(this.year(), e.dow, e.doy)
        }

        function Ti(e, n, t, r, i) {
            var o;
            if (null == e) return Yn(this, r, i).year;
            n > (o = kn(e, r, i)) && (n = o);
            return Di.call(this, e, n, t, r, i)
        }

        function Di(e, n, t, r, i) {
            var o = wn(e, n, t, r, i),
                s = Mn(o.year, 0, o.dayOfYear);
            this.year(s.getUTCFullYear());
            this.month(s.getUTCMonth());
            this.date(s.getUTCDate());
            return this
        }
        oe("Q", 0, "Qo", "quarter");
        $("quarter", "Q");
        Q("quarter", 7);
        Se("Q", le);
        Ne("Q", (function (e, n) {
            n[Be] = 3 * (k(e) - 1)
        }));

        function Li(e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
        }
        oe("D", ["DD", 2], "Do", "date");
        $("date", "D");
        Q("date", 9);
        Se("D", _e);
        Se("DD", _e, ce);
        Se("Do", (function (e, n) {
            return e ? n._dayOfMonthOrdinalParse || n._ordinalParse : n._dayOfMonthOrdinalParseLenient
        }));
        Ne(["D", "DD"], Ee);
        Ne("Do", (function (e, n) {
            n[Ee] = k(e.match(_e)[0])
        }));
        var Si = Je("Date", !0);
        oe("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
        $("dayOfYear", "DDD");
        Q("dayOfYear", 4);
        Se("DDD", ge);
        Se("DDDD", me);
        Ne(["DDD", "DDDD"], (function (e, n, t) {
            t._dayOfYear = k(e)
        }));

        function Ci(e) {
            var n = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == e ? n : this.add(e - n, "d")
        }
        oe("m", ["mm", 2], 0, "minute");
        $("minute", "m");
        Q("minute", 14);
        Se("m", _e);
        Se("mm", _e, ce);
        Ne(["m", "mm"], Ie);
        var xi = Je("Minutes", !1);
        oe("s", ["ss", 2], 0, "second");
        $("second", "s");
        Q("second", 15);
        Se("s", _e);
        Se("ss", _e, ce);
        Ne(["s", "ss"], Pe);
        var Wi, Oi = Je("Seconds", !1);
        oe("S", 0, 0, (function () {
            return ~~(this.millisecond() / 100)
        }));
        oe(0, ["SS", 2], 0, (function () {
            return ~~(this.millisecond() / 10)
        }));
        oe(0, ["SSS", 3], 0, "millisecond");
        oe(0, ["SSSS", 4], 0, (function () {
            return 10 * this.millisecond()
        }));
        oe(0, ["SSSSS", 5], 0, (function () {
            return 100 * this.millisecond()
        }));
        oe(0, ["SSSSSS", 6], 0, (function () {
            return 1e3 * this.millisecond()
        }));
        oe(0, ["SSSSSSS", 7], 0, (function () {
            return 1e4 * this.millisecond()
        }));
        oe(0, ["SSSSSSSS", 8], 0, (function () {
            return 1e5 * this.millisecond()
        }));
        oe(0, ["SSSSSSSSS", 9], 0, (function () {
            return 1e6 * this.millisecond()
        }));
        $("millisecond", "ms");
        Q("millisecond", 16);
        Se("S", ge, le);
        Se("SS", ge, ce);
        Se("SSS", ge, me);
        for (Wi = "SSSS"; Wi.length <= 9; Wi += "S") Se(Wi, ve);

        function Ni(e, n) {
            n[Fe] = k(1e3 * ("0." + e))
        }
        for (Wi = "S"; Wi.length <= 9; Wi += "S") Ne(Wi, Ni);
        var ji = Je("Milliseconds", !1);
        oe("z", 0, 0, "zoneAbbr");
        oe("zz", 0, 0, "zoneName");

        function zi() {
            return this._isUTC ? "UTC" : ""
        }

        function Ai() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }
        var Bi = v.prototype;
        Bi.add = Wr;
        Bi.calendar = jr;
        Bi.clone = zr;
        Bi.diff = Fr;
        Bi.endOf = di;
        Bi.format = Vr;
        Bi.from = $r;
        Bi.fromNow = Kr;
        Bi.to = Jr;
        Bi.toNow = Zr;
        Bi.get = Xe;
        Bi.invalidAt = gi;
        Bi.isAfter = Ar;
        Bi.isBefore = Br;
        Bi.isBetween = Er;
        Bi.isSame = Hr;
        Bi.isSameOrAfter = Ir;
        Bi.isSameOrBefore = Pr;
        Bi.isValid = pi;
        Bi.lang = Xr;
        Bi.locale = Qr;
        Bi.localeData = ei;
        Bi.max = Kt;
        Bi.min = $t;
        Bi.parsingFlags = bi;
        Bi.set = en;
        Bi.startOf = ui;
        Bi.subtract = Or;
        Bi.toArray = hi;
        Bi.toObject = fi;
        Bi.toDate = mi;
        Bi.toISOString = Ur;
        Bi.inspect = Gr;
        Bi.toJSON = _i;
        Bi.toString = qr;
        Bi.unix = ci;
        Bi.valueOf = li;
        Bi.creationData = yi;
        Bi.year = $e;
        Bi.isLeapYear = Ke;
        Bi.weekYear = vi;
        Bi.isoWeekYear = wi;
        Bi.quarter = Bi.quarters = Li;
        Bi.month = mn;
        Bi.daysInMonth = hn;
        Bi.week = Bi.weeks = Cn;
        Bi.isoWeek = Bi.isoWeeks = xn;
        Bi.weeksInYear = ki;
        Bi.isoWeeksInYear = Yi;
        Bi.date = Si;
        Bi.day = Bi.days = Fn;
        Bi.weekday = Rn;
        Bi.isoWeekday = qn;
        Bi.dayOfYear = Ci;
        Bi.hour = Bi.hours = st;
        Bi.minute = Bi.minutes = xi;
        Bi.second = Bi.seconds = Oi;
        Bi.millisecond = Bi.milliseconds = ji;
        Bi.utcOffset = mr;
        Bi.utc = fr;
        Bi.local = _r;
        Bi.parseZone = pr;
        Bi.hasAlignedHourOffset = br;
        Bi.isDST = gr;
        Bi.isLocal = Mr;
        Bi.isUtcOffset = vr;
        Bi.isUtc = wr;
        Bi.isUTC = wr;
        Bi.zoneAbbr = zi;
        Bi.zoneName = Ai;
        Bi.dates = L("dates accessor is deprecated. Use date instead.", Si);
        Bi.months = L("months accessor is deprecated. Use month instead", mn);
        Bi.years = L("years accessor is deprecated. Use year instead", $e);
        Bi.zone = L("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", hr);
        Bi.isDSTShifted = L("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", yr);

        function Ei(e) {
            return Vt(1e3 * e)
        }

        function Hi() {
            return Vt.apply(null, arguments).parseZone()
        }

        function Ii(e) {
            return e
        }
        var Pi = j.prototype;
        Pi.calendar = A;
        Pi.longDateFormat = E;
        Pi.invalidDate = I;
        Pi.ordinal = R;
        Pi.preparse = Ii;
        Pi.postformat = Ii;
        Pi.relativeTime = U;
        Pi.pastFuture = G;
        Pi.set = O;
        Pi.months = sn;
        Pi.monthsShort = un;
        Pi.monthsParse = ln;
        Pi.monthsRegex = bn;
        Pi.monthsShortRegex = _n;
        Pi.week = Tn;
        Pi.firstDayOfYear = Sn;
        Pi.firstDayOfWeek = Ln;
        Pi.weekdays = zn;
        Pi.weekdaysMin = Hn;
        Pi.weekdaysShort = Bn;
        Pi.weekdaysParse = Pn;
        Pi.weekdaysRegex = Gn;
        Pi.weekdaysShortRegex = $n;
        Pi.weekdaysMinRegex = Jn;
        Pi.isPM = tt;
        Pi.meridiem = it;

        function Fi(e, n, t, r) {
            var i = pt(),
                o = h().set(r, n);
            return i[t](o, e)
        }

        function Ri(e, n, t) {
            if (u(e)) {
                n = e;
                e = void 0
            }
            e = e || "";
            if (null != n) return Fi(e, n, t, "month");
            var r, i = [];
            for (r = 0; r < 12; r++) i[r] = Fi(e, r, t, "month");
            return i
        }

        function qi(e, n, t, r) {
            if ("boolean" == typeof e) {
                if (u(n)) {
                    t = n;
                    n = void 0
                }
                n = n || ""
            } else {
                t = n = e;
                e = !1;
                if (u(n)) {
                    t = n;
                    n = void 0
                }
                n = n || ""
            }
            var i, o = pt(),
                s = e ? o._week.dow : 0;
            if (null != t) return Fi(n, (t + s) % 7, r, "day");
            var a = [];
            for (i = 0; i < 7; i++) a[i] = Fi(n, (i + s) % 7, r, "day");
            return a
        }

        function Ui(e, n) {
            return Ri(e, n, "months")
        }

        function Gi(e, n) {
            return Ri(e, n, "monthsShort")
        }

        function Vi(e, n, t) {
            return qi(e, n, t, "weekdays")
        }

        function $i(e, n, t) {
            return qi(e, n, t, "weekdaysShort")
        }

        function Ki(e, n, t) {
            return qi(e, n, t, "weekdaysMin")
        }
        ht("en", {
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (e) {
                var n = e % 10;
                return e + (1 === k(e % 100 / 10) ? "th" : 1 === n ? "st" : 2 === n ? "nd" : 3 === n ? "rd" : "th")
            }
        });
        t.lang = L("moment.lang is deprecated. Use moment.locale instead.", ht);
        t.langData = L("moment.langData is deprecated. Use moment.localeData instead.", pt);
        var Ji = Math.abs;

        function Zi() {
            var e = this._data;
            this._milliseconds = Ji(this._milliseconds);
            this._days = Ji(this._days);
            this._months = Ji(this._months);
            e.milliseconds = Ji(e.milliseconds);
            e.seconds = Ji(e.seconds);
            e.minutes = Ji(e.minutes);
            e.hours = Ji(e.hours);
            e.months = Ji(e.months);
            e.years = Ji(e.years);
            return this
        }

        function Qi(e, n, t, r) {
            var i = Tr(n, t);
            e._milliseconds += r * i._milliseconds;
            e._days += r * i._days;
            e._months += r * i._months;
            return e._bubble()
        }

        function Xi(e, n) {
            return Qi(this, e, n, 1)
        }

        function eo(e, n) {
            return Qi(this, e, n, -1)
        }

        function no(e) {
            return e < 0 ? Math.floor(e) : Math.ceil(e)
        }

        function to() {
            var e, n, t, r, i, o = this._milliseconds,
                s = this._days,
                a = this._months,
                u = this._data;
            if (!(o >= 0 && s >= 0 && a >= 0 || o <= 0 && s <= 0 && a <= 0)) {
                o += 864e5 * no(io(a) + s);
                s = 0;
                a = 0
            }
            u.milliseconds = o % 1e3;
            e = Y(o / 1e3);
            u.seconds = e % 60;
            n = Y(e / 60);
            u.minutes = n % 60;
            t = Y(n / 60);
            u.hours = t % 24;
            s += Y(t / 24);
            a += i = Y(ro(s));
            s -= no(io(i));
            r = Y(a / 12);
            a %= 12;
            u.days = s;
            u.months = a;
            u.years = r;
            return this
        }

        function ro(e) {
            return 4800 * e / 146097
        }

        function io(e) {
            return 146097 * e / 4800
        }

        function oo(e) {
            if (!this.isValid()) return NaN;
            var n, t, r = this._milliseconds;
            if ("month" === (e = K(e)) || "quarter" === e || "year" === e) {
                n = this._days + r / 864e5;
                t = this._months + ro(n);
                switch (e) {
                    case "month":
                        return t;
                    case "quarter":
                        return t / 3;
                    case "year":
                        return t / 12
                }
            } else {
                n = this._days + Math.round(io(this._months));
                switch (e) {
                    case "week":
                        return n / 7 + r / 6048e5;
                    case "day":
                        return n + r / 864e5;
                    case "hour":
                        return 24 * n + r / 36e5;
                    case "minute":
                        return 1440 * n + r / 6e4;
                    case "second":
                        return 86400 * n + r / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * n) + r;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            }
        }

        function so() {
            return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN
        }

        function ao(e) {
            return function () {
                return this.as(e)
            }
        }
        var uo = ao("ms"),
            lo = ao("s"),
            co = ao("m"),
            mo = ao("h"),
            ho = ao("d"),
            fo = ao("w"),
            _o = ao("M"),
            po = ao("Q"),
            bo = ao("y");

        function go() {
            return Tr(this)
        }

        function yo(e) {
            e = K(e);
            return this.isValid() ? this[e + "s"]() : NaN
        }

        function Mo(e) {
            return function () {
                return this.isValid() ? this._data[e] : NaN
            }
        }
        var vo = Mo("milliseconds"),
            wo = Mo("seconds"),
            Yo = Mo("minutes"),
            ko = Mo("hours"),
            To = Mo("days"),
            Do = Mo("months"),
            Lo = Mo("years");

        function So() {
            return Y(this.days() / 7)
        }
        var Co = Math.round,
            xo = {
                ss: 44,
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            };

        function Wo(e, n, t, r, i) {
            return i.relativeTime(n || 1, !!t, e, r)
        }

        function Oo(e, n, t) {
            var r = Tr(e).abs(),
                i = Co(r.as("s")),
                o = Co(r.as("m")),
                s = Co(r.as("h")),
                a = Co(r.as("d")),
                u = Co(r.as("M")),
                d = Co(r.as("y")),
                l = i <= xo.ss && ["s", i] || i < xo.s && ["ss", i] || o <= 1 && ["m"] || o < xo.m && ["mm", o] || s <= 1 && ["h"] || s < xo.h && ["hh", s] || a <= 1 && ["d"] || a < xo.d && ["dd", a] || u <= 1 && ["M"] || u < xo.M && ["MM", u] || d <= 1 && ["y"] || ["yy", d];
            l[2] = n;
            l[3] = +e > 0;
            l[4] = t;
            return Wo.apply(null, l)
        }

        function No(e) {
            if (void 0 === e) return Co;
            if ("function" == typeof e) {
                Co = e;
                return !0
            }
            return !1
        }

        function jo(e, n) {
            if (void 0 === xo[e]) return !1;
            if (void 0 === n) return xo[e];
            xo[e] = n;
            "s" === e && (xo.ss = n - 1);
            return !0
        }

        function zo(e) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var n = this.localeData(),
                t = Oo(this, !e, n);
            e && (t = n.pastFuture(+this, t));
            return n.postformat(t)
        }
        var Ao = Math.abs;

        function Bo(e) {
            return (e > 0) - (e < 0) || +e
        }

        function Eo() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e, n, t = Ao(this._milliseconds) / 1e3,
                r = Ao(this._days),
                i = Ao(this._months);
            e = Y(t / 60);
            n = Y(e / 60);
            t %= 60;
            e %= 60;
            var o = Y(i / 12),
                s = i %= 12,
                a = r,
                u = n,
                d = e,
                l = t ? t.toFixed(3).replace(/\.?0+$/, "") : "",
                c = this.asSeconds();
            if (!c) return "P0D";
            var m = c < 0 ? "-" : "",
                h = Bo(this._months) !== Bo(c) ? "-" : "",
                f = Bo(this._days) !== Bo(c) ? "-" : "",
                _ = Bo(this._milliseconds) !== Bo(c) ? "-" : "";
            return m + "P" + (o ? h + o + "Y" : "") + (s ? h + s + "M" : "") + (a ? f + a + "D" : "") + (u || d || l ? "T" : "") + (u ? _ + u + "H" : "") + (d ? _ + d + "M" : "") + (l ? _ + l + "S" : "")
        }
        var Ho = ir.prototype;
        Ho.isValid = tr;
        Ho.abs = Zi;
        Ho.add = Xi;
        Ho.subtract = eo;
        Ho.as = oo;
        Ho.asMilliseconds = uo;
        Ho.asSeconds = lo;
        Ho.asMinutes = co;
        Ho.asHours = mo;
        Ho.asDays = ho;
        Ho.asWeeks = fo;
        Ho.asMonths = _o;
        Ho.asQuarters = po;
        Ho.asYears = bo;
        Ho.valueOf = so;
        Ho._bubble = to;
        Ho.clone = go;
        Ho.get = yo;
        Ho.milliseconds = vo;
        Ho.seconds = wo;
        Ho.minutes = Yo;
        Ho.hours = ko;
        Ho.days = To;
        Ho.weeks = So;
        Ho.months = Do;
        Ho.years = Lo;
        Ho.humanize = zo;
        Ho.toISOString = Eo;
        Ho.toString = Eo;
        Ho.toJSON = Eo;
        Ho.locale = Qr;
        Ho.localeData = ei;
        Ho.toIsoString = L("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Eo);
        Ho.lang = Xr;
        oe("X", 0, 0, "unix");
        oe("x", 0, 0, "valueOf");
        Se("x", we);
        Se("X", Te);
        Ne("X", (function (e, n, t) {
            t._d = new Date(1e3 * parseFloat(e, 10))
        }));
        Ne("x", (function (e, n, t) {
            t._d = new Date(k(e))
        }));
        t.version = "2.24.0";
        r(Vt);
        t.fn = Bi;
        t.min = Zt;
        t.max = Qt;
        t.now = Xt;
        t.utc = h;
        t.unix = Ei;
        t.months = Ui;
        t.isDate = d;
        t.locale = ht;
        t.invalid = b;
        t.duration = Tr;
        t.isMoment = w;
        t.weekdays = Vi;
        t.parseZone = Hi;
        t.localeData = pt;
        t.isDuration = or;
        t.monthsShort = Gi;
        t.weekdaysMin = Ki;
        t.defineLocale = ft;
        t.updateLocale = _t;
        t.locales = bt;
        t.weekdaysShort = $i;
        t.normalizeUnits = K;
        t.relativeTimeRounding = No;
        t.relativeTimeThreshold = jo;
        t.calendarFormat = Nr;
        t.prototype = Bi;
        t.HTML5_FMT = {
            DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
            DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
            DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
            DATE: "YYYY-MM-DD",
            TIME: "HH:mm",
            TIME_SECONDS: "HH:mm:ss",
            TIME_MS: "HH:mm:ss.SSS",
            WEEK: "GGGG-[W]WW",
            MONTH: "YYYY-MM"
        };
        return t
    }, e.exports = r();
    var r
}, function (e, n, t) {
    e.exports = t(95)
}, function (e, n, t) {
    var r, i, o;
    ! function (s, a) {
        "use strict";
        if (e.exports) e.exports = a(t(92));
        else {
            i = [t(92)], void 0 !== (o = "function" == typeof (r = a) ? r.apply(n, i) : r) && (e.exports = o)
        }
    }(0, (function (e) {
        "use strict";
        void 0 === e.version && e.default && (e = e.default);
        var n, t = "0.5.39",
            r = {},
            i = {},
            o = {},
            s = {},
            a = {};
        e && "string" == typeof e.version || I("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/");
        var u = e.version.split("."),
            d = +u[0],
            l = +u[1];
        (d < 2 || 2 === d && l < 6) && I("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " + e.version + ". See momentjs.com");

        function c(e) {
            return e > 96 ? e - 87 : e > 64 ? e - 29 : e - 48
        }

        function m(e) {
            var n = 0,
                t = e.split("."),
                r = t[0],
                i = t[1] || "",
                o = 1,
                s = 0,
                a = 1;
            if (45 === e.charCodeAt(0)) {
                n = 1;
                a = -1
            }
            for (; n < r.length; n++) s = 60 * s + c(r.charCodeAt(n));
            for (n = 0; n < i.length; n++) {
                o /= 60;
                s += c(i.charCodeAt(n)) * o
            }
            return s * a
        }

        function h(e) {
            for (var n = 0; n < e.length; n++) e[n] = m(e[n])
        }

        function f(e, n) {
            for (var t = 0; t < n; t++) e[t] = Math.round((e[t - 1] || 0) + 6e4 * e[t]);
            e[n - 1] = 1 / 0
        }

        function _(e, n) {
            var t, r = [];
            for (t = 0; t < n.length; t++) r[t] = e[n[t]];
            return r
        }

        function p(e) {
            var n = e.split("|"),
                t = n[2].split(" "),
                r = n[3].split(""),
                i = n[4].split(" ");
            h(t);
            h(r);
            h(i);
            f(i, r.length);
            return {
                name: n[0],
                abbrs: _(n[1].split(" "), r),
                offsets: _(t, r),
                untils: i,
                population: 0 | n[5]
            }
        }

        function b(e) {
            e && this._set(p(e))
        }
        b.prototype = {
            _set: function (e) {
                this.name = e.name;
                this.abbrs = e.abbrs;
                this.untils = e.untils;
                this.offsets = e.offsets;
                this.population = e.population
            },
            _index: function (e) {
                var n, t = +e,
                    r = this.untils;
                for (n = 0; n < r.length; n++)
                    if (t < r[n]) return n
            },
            countries: function () {
                var e = this.name;
                return Object.keys(o).filter((function (n) {
                    return -1 !== o[n].zones.indexOf(e)
                }))
            },
            parse: function (e) {
                var n, t, r, i, o = +e,
                    s = this.offsets,
                    a = this.untils,
                    u = a.length - 1;
                for (i = 0; i < u; i++) {
                    n = s[i];
                    t = s[i + 1];
                    r = s[i ? i - 1 : i];
                    n < t && P.moveAmbiguousForward ? n = t : n > r && P.moveInvalidForward && (n = r);
                    if (o < a[i] - 6e4 * n) return s[i]
                }
                return s[u]
            },
            abbr: function (e) {
                return this.abbrs[this._index(e)]
            },
            offset: function (e) {
                I("zone.offset has been deprecated in favor of zone.utcOffset");
                return this.offsets[this._index(e)]
            },
            utcOffset: function (e) {
                return this.offsets[this._index(e)]
            }
        };

        function g(e, n) {
            this.name = e;
            this.zones = n
        }

        function y(e) {
            var n = e.toTimeString(),
                t = n.match(/\([a-z ]+\)/i);
            "GMT" === (t = t && t[0] ? (t = t[0].match(/[A-Z]/g)) ? t.join("") : void 0 : (t = n.match(/[A-Z]{3,5}/g)) ? t[0] : void 0) && (t = void 0);
            this.at = +e;
            this.abbr = t;
            this.offset = e.getTimezoneOffset()
        }

        function M(e) {
            this.zone = e;
            this.offsetScore = 0;
            this.abbrScore = 0
        }
        M.prototype.scoreOffsetAt = function (e) {
            this.offsetScore += Math.abs(this.zone.utcOffset(e.at) - e.offset);
            this.zone.abbr(e.at).replace(/[^A-Z]/g, "") !== e.abbr && this.abbrScore++
        };

        function v(e, n) {
            for (var t, r; r = 6e4 * ((n.at - e.at) / 12e4 | 0);)(t = new y(new Date(e.at + r))).offset === e.offset ? e = t : n = t;
            return e
        }

        function w() {
            var e, n, t, r = (new Date).getFullYear() - 2,
                i = new y(new Date(r, 0, 1)),
                o = [i];
            for (t = 1; t < 48; t++) {
                if ((n = new y(new Date(r, t, 1))).offset !== i.offset) {
                    e = v(i, n);
                    o.push(e);
                    o.push(new y(new Date(e.at + 6e4)))
                }
                i = n
            }
            for (t = 0; t < 4; t++) {
                o.push(new y(new Date(r + t, 0, 1)));
                o.push(new y(new Date(r + t, 6, 1)))
            }
            return o
        }

        function Y(e, n) {
            return e.offsetScore !== n.offsetScore ? e.offsetScore - n.offsetScore : e.abbrScore !== n.abbrScore ? e.abbrScore - n.abbrScore : e.zone.population !== n.zone.population ? n.zone.population - e.zone.population : n.zone.name.localeCompare(e.zone.name)
        }

        function k(e, n) {
            var t, r;
            h(n);
            for (t = 0; t < n.length; t++) {
                r = n[t];
                a[r] = a[r] || {};
                a[r][e] = !0
            }
        }

        function T(e) {
            var n, t, r, i = e.length,
                o = {},
                u = [];
            for (n = 0; n < i; n++) {
                r = a[e[n].offset] || {};
                for (t in r) r.hasOwnProperty(t) && (o[t] = !0)
            }
            for (n in o) o.hasOwnProperty(n) && u.push(s[n]);
            return u
        }

        function D() {
            try {
                var e = Intl.DateTimeFormat().resolvedOptions().timeZone;
                if (e && e.length > 3) {
                    var n = s[S(e)];
                    if (n) return n;
                    I("Moment Timezone found " + e + " from the Intl api, but did not have that data loaded.")
                }
            } catch (e) {}
            var t, r, i, o = w(),
                a = o.length,
                u = T(o),
                d = [];
            for (r = 0; r < u.length; r++) {
                t = new M(x(u[r]), a);
                for (i = 0; i < a; i++) t.scoreOffsetAt(o[i]);
                d.push(t)
            }
            d.sort(Y);
            return d.length > 0 ? d[0].zone.name : void 0
        }

        function L(e) {
            n && !e || (n = D());
            return n
        }

        function S(e) {
            return (e || "").toLowerCase().replace(/\//g, "_")
        }

        function C(e) {
            var n, t, i, o;
            "string" == typeof e && (e = [e]);
            for (n = 0; n < e.length; n++) {
                o = S(t = (i = e[n].split("|"))[0]);
                r[o] = e[n];
                s[o] = t;
                k(o, i[2].split(" "))
            }
        }

        function x(e, n) {
            e = S(e);
            var t, o = r[e];
            if (o instanceof b) return o;
            if ("string" == typeof o) {
                o = new b(o);
                r[e] = o;
                return o
            }
            if (i[e] && n !== x && (t = x(i[e], x))) {
                (o = r[e] = new b)._set(t);
                o.name = s[e];
                return o
            }
            return null
        }

        function W() {
            var e, n = [];
            for (e in s) s.hasOwnProperty(e) && (r[e] || r[i[e]]) && s[e] && n.push(s[e]);
            return n.sort()
        }

        function O() {
            return Object.keys(o)
        }

        function N(e) {
            var n, t, r, o;
            "string" == typeof e && (e = [e]);
            for (n = 0; n < e.length; n++) {
                r = S((t = e[n].split("|"))[0]);
                o = S(t[1]);
                i[r] = o;
                s[r] = t[0];
                i[o] = r;
                s[o] = t[1]
            }
        }

        function j(e) {
            var n, t, r, i;
            if (e && e.length)
                for (n = 0; n < e.length; n++) {
                    t = (i = e[n].split("|"))[0].toUpperCase();
                    r = i[1].split(" ");
                    o[t] = new g(t, r)
                }
        }

        function z(e) {
            e = e.toUpperCase();
            return o[e] || null
        }

        function A(e, n) {
            if (!(e = z(e))) return null;
            var t = e.zones.sort();
            return n ? t.map((function (e) {
                return {
                    name: e,
                    offset: x(e).utcOffset(new Date)
                }
            })) : t
        }

        function B(e) {
            C(e.zones);
            N(e.links);
            j(e.countries);
            P.dataVersion = e.version
        }

        function E(e) {
            if (!E.didShowError) {
                E.didShowError = !0;
                I("moment.tz.zoneExists('" + e + "') has been deprecated in favor of !moment.tz.zone('" + e + "')")
            }
            return !!x(e)
        }

        function H(e) {
            var n = "X" === e._f || "x" === e._f;
            return !(!e._a || void 0 !== e._tzm || n)
        }

        function I(e) {
            "undefined" != typeof console && "function" == typeof console.error && console.error(e)
        }

        function P(n) {
            var t = Array.prototype.slice.call(arguments, 0, -1),
                r = arguments[arguments.length - 1],
                i = x(r),
                o = e.utc.apply(null, t);
            i && !e.isMoment(n) && H(o) && o.add(i.parse(o), "minutes");
            o.tz(r);
            return o
        }
        P.version = t;
        P.dataVersion = "";
        P._zones = r;
        P._links = i;
        P._names = s;
        P._countries = o;
        P.add = C;
        P.link = N;
        P.load = B;
        P.zone = x;
        P.zoneExists = E;
        P.guess = L;
        P.names = W;
        P.Zone = b;
        P.unpack = p;
        P.unpackBase60 = m;
        P.needsOffset = H;
        P.moveInvalidForward = !0;
        P.moveAmbiguousForward = !1;
        P.countries = O;
        P.zonesForCountry = A;
        var F = e.fn;
        e.tz = P;
        e.defaultZone = null;
        e.updateOffset = function (n, t) {
            var r, i = e.defaultZone;
            if (void 0 === n._z) {
                if (i && H(n) && !n._isUTC) {
                    n._d = e.utc(n._a)._d;
                    n.utc().add(i.parse(n), "minutes")
                }
                n._z = i
            }
            if (n._z) {
                r = n._z.utcOffset(n);
                Math.abs(r) < 16 && (r /= 60);
                if (void 0 !== n.utcOffset) {
                    var o = n._z;
                    n.utcOffset(-r, t);
                    n._z = o
                } else n.zone(r, t)
            }
        };
        F.tz = function (n, t) {
            if (n) {
                if ("string" != typeof n) throw new Error("Time zone name must be a string, got " + n + " [" + typeof n + "]");
                this._z = x(n);
                this._z ? e.updateOffset(this, t) : I("Moment Timezone has no data for " + n + ". See http://momentjs.com/timezone/docs/#/data-loading/.");
                return this
            }
            if (this._z) return this._z.name
        };

        function R(e) {
            return function () {
                return this._z ? this._z.abbr(this) : e.call(this)
            }
        }

        function q(e) {
            return function () {
                this._z = null;
                return e.apply(this, arguments)
            }
        }

        function U(e) {
            return function () {
                arguments.length > 0 && (this._z = null);
                return e.apply(this, arguments)
            }
        }
        F.zoneName = R(F.zoneName);
        F.zoneAbbr = R(F.zoneAbbr);
        F.utc = q(F.utc);
        F.local = q(F.local);
        F.utcOffset = U(F.utcOffset);
        e.tz.setDefault = function (n) {
            (d < 2 || 2 === d && l < 9) && I("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " + e.version + ".");
            e.defaultZone = n ? x(n) : null;
            return e
        };
        var G = e.momentProperties;
        if ("[object Array]" === Object.prototype.toString.call(G)) {
            G.push("_z");
            G.push("_a")
        } else G && (G._z = null);
        return e
    }))
}, function (e, n, t) {
    (function (e) {
        "use strict";
        var n = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            t = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        return e.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (e, r) {
                return e ? /-MMM-/.test(r) ? t[e.month()] : n[e.month()] : n
            },
            monthsRegex: i,
            monthsShortRegex: i,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function () {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })(t(93))
}, function (e, n, t) {
    (function (e) {
        "use strict";
        return e.defineLocale("pt-br", {
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "poucos segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº"
        })
    })(t(93))
}, function (e, n, t) {
    (function (e) {
        "use strict";
        return e.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var n = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === n ? "st" : 2 === n ? "nd" : 3 === n ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })(t(93))
}, function (e, n, t) {
    (function (e) {
        "use strict";
        return e.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var n = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === n ? "st" : 2 === n ? "nd" : 3 === n ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })(t(93))
}, function (e, n, t) {
    (function (e) {
        "use strict";
        var n = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            t = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        return e.defineLocale("es-do", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (e, r) {
                return e ? /-MMM-/.test(r) ? t[e.month()] : n[e.month()] : n
            },
            monthsRegex: i,
            monthsShortRegex: i,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function () {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })(t(93))
}, function (e, n, t) {
    (function (e) {
        "use strict";

        function n(e, n, t, r) {
            var i = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return n ? i[t][0] : i[t][1]
        }
        return e.defineLocale("de", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: n,
                mm: "%d Minuten",
                h: n,
                hh: "%d Stunden",
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })(t(93))
}, function (e, n, t) {
    (function (e) {
        "use strict";
        return e.defineLocale("ja", {
            months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日 dddd HH:mm",
                l: "YYYY/MM/DD",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日(ddd) HH:mm"
            },
            meridiemParse: /午前|午後/i,
            isPM: function (e) {
                return "午後" === e
            },
            meridiem: function (e, n, t) {
                return e < 12 ? "午前" : "午後"
            },
            calendar: {
                sameDay: "[今日] LT",
                nextDay: "[明日] LT",
                nextWeek: function (e) {
                    return e.week() < this.week() ? "[来週]dddd LT" : "dddd LT"
                },
                lastDay: "[昨日] LT",
                lastWeek: function (e) {
                    return this.week() < e.week() ? "[先週]dddd LT" : "dddd LT"
                },
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}日/,
            ordinal: function (e, n) {
                switch (n) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "数秒",
                ss: "%d秒",
                m: "1分",
                mm: "%d分",
                h: "1時間",
                hh: "%d時間",
                d: "1日",
                dd: "%d日",
                M: "1ヶ月",
                MM: "%dヶ月",
                y: "1年",
                yy: "%d年"
            }
        })
    })(t(93))
}, function (e, n, t) {
    (function (e) {
        "use strict";
        return e.defineLocale("zh-cn", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日Ah点mm分",
                LLLL: "YYYY年M月D日ddddAh点mm分",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, n) {
                12 === e && (e = 0);
                return "凌晨" === n || "早上" === n || "上午" === n ? e : "下午" === n || "晚上" === n ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function (e, n, t) {
                var r = 100 * e + n;
                return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
            ordinal: function (e, n) {
                switch (n) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "周";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s内",
                past: "%s前",
                s: "几秒",
                ss: "%d 秒",
                m: "1 分钟",
                mm: "%d 分钟",
                h: "1 小时",
                hh: "%d 小时",
                d: "1 天",
                dd: "%d 天",
                M: "1 个月",
                MM: "%d 个月",
                y: "1 年",
                yy: "%d 年"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })(t(93))
}, function (e, n, t) {
    (function (e) {
        "use strict";
        return e.defineLocale("zh-hk", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, n) {
                12 === e && (e = 0);
                return "凌晨" === n || "早上" === n || "上午" === n ? e : "中午" === n ? e >= 11 ? e : e + 12 : "下午" === n || "晚上" === n ? e + 12 : void 0
            },
            meridiem: function (e, n, t) {
                var r = 100 * e + n;
                return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, n) {
                switch (n) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "週";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    })(t(93))
}, function (e, n, t) {
    (function (e) {
        "use strict";
        var n = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            t = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            r = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            i = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        return e.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function (e, r) {
                return e ? /-MMM-/.test(r) ? t[e.month()] : n[e.month()] : n
            },
            monthsRegex: i,
            monthsShortRegex: i,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })(t(93))
}, function (e, n, t) {
    (function (e) {
        "use strict";
        return e.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var n = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === n ? "st" : 2 === n ? "nd" : 3 === n ? "rd" : "th")
            }
        })
    })(t(93))
}, function (e, n, t) {
    (function (e) {
        "use strict";
        var n = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
            t = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", n[7], n[8], n[9]];

        function r(e, n, t, r) {
            var o = "";
            switch (t) {
                case "s":
                    return r ? "muutaman sekunnin" : "muutama sekunti";
                case "ss":
                    return r ? "sekunnin" : "sekuntia";
                case "m":
                    return r ? "minuutin" : "minuutti";
                case "mm":
                    o = r ? "minuutin" : "minuuttia";
                    break;
                case "h":
                    return r ? "tunnin" : "tunti";
                case "hh":
                    o = r ? "tunnin" : "tuntia";
                    break;
                case "d":
                    return r ? "päivän" : "päivä";
                case "dd":
                    o = r ? "päivän" : "päivää";
                    break;
                case "M":
                    return r ? "kuukauden" : "kuukausi";
                case "MM":
                    o = r ? "kuukauden" : "kuukautta";
                    break;
                case "y":
                    return r ? "vuoden" : "vuosi";
                case "yy":
                    o = r ? "vuoden" : "vuotta"
            }
            return o = i(e, r) + " " + o
        }

        function i(e, r) {
            return e < 10 ? r ? t[e] : n[e] : e
        }
        return e.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[tänään] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s päästä",
                past: "%s sitten",
                s: r,
                ss: r,
                m: r,
                mm: r,
                h: r,
                hh: r,
                d: r,
                dd: r,
                M: r,
                MM: r,
                y: r,
                yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })(t(93))
}, function (e, n, t) {
    (function (e) {
        "use strict";
        return e.defineLocale("fr", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function (e, n) {
                switch (n) {
                    case "D":
                        return e + (1 === e ? "er" : "");
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                    case "W":
                        return e + (1 === e ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })(t(93))
}, function (e, n, t) {
    (function (e) {
        "use strict";
        return e.defineLocale("fr-ca", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (e, n) {
                switch (n) {
                    default:
                    case "M":
                    case "Q":
                    case "D":
                    case "DDD":
                    case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                    case "W":
                        return e + (1 === e ? "re" : "e")
                }
            }
        })
    })(t(93))
}, function (e, n, t) {
    (function (e) {
        "use strict";
        return e.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })(t(93))
}, function (e, n, t) {
    (function (e) {
        "use strict";
        return e.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Igår] LT",
                nextWeek: "[På] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "för %s sedan",
                s: "några sekunder",
                ss: "%d sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en månad",
                MM: "%d månader",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
            ordinal: function (e) {
                var n = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === n || 2 === n ? "a" : "e")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })(t(93))
}, function (e, n, t) {
    (function (e) {
        "use strict";
        var n = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
            t = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");

        function r(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
        }

        function i(e, n, t) {
            var i = e + " ";
            switch (t) {
                case "ss":
                    return i + (r(e) ? "sekundy" : "sekund");
                case "m":
                    return n ? "minuta" : "minutę";
                case "mm":
                    return i + (r(e) ? "minuty" : "minut");
                case "h":
                    return n ? "godzina" : "godzinę";
                case "hh":
                    return i + (r(e) ? "godziny" : "godzin");
                case "MM":
                    return i + (r(e) ? "miesiące" : "miesięcy");
                case "yy":
                    return i + (r(e) ? "lata" : "lat")
            }
        }
        return e.defineLocale("pl", {
            months: function (e, r) {
                return e ? "" === r ? "(" + t[e.month()] + "|" + n[e.month()] + ")" : /D MMMM/.test(r) ? t[e.month()] : n[e.month()] : n
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
            weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
            weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Dziś o] LT",
                nextDay: "[Jutro o] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[W niedzielę o] LT";
                        case 2:
                            return "[We wtorek o] LT";
                        case 3:
                            return "[W środę o] LT";
                        case 6:
                            return "[W sobotę o] LT";
                        default:
                            return "[W] dddd [o] LT"
                    }
                },
                lastDay: "[Wczoraj o] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[W zeszłą niedzielę o] LT";
                        case 3:
                            return "[W zeszłą środę o] LT";
                        case 6:
                            return "[W zeszłą sobotę o] LT";
                        default:
                            return "[W zeszły] dddd [o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                ss: i,
                m: i,
                mm: i,
                h: i,
                hh: i,
                d: "1 dzień",
                dd: "%d dni",
                M: "miesiąc",
                MM: i,
                y: "rok",
                yy: i
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })(t(93))
}, function (e, n, t) {
    (function (e) {
        "use strict";
        var n = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
            t = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
            r = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i],
            i = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;

        function o(e) {
            return e > 1 && e < 5 && 1 != ~~(e / 10)
        }

        function s(e, n, t, r) {
            var i = e + " ";
            switch (t) {
                case "s":
                    return n || r ? "pár sekund" : "pár sekundami";
                case "ss":
                    return n || r ? i + (o(e) ? "sekundy" : "sekund") : i + "sekundami";
                case "m":
                    return n ? "minuta" : r ? "minutu" : "minutou";
                case "mm":
                    return n || r ? i + (o(e) ? "minuty" : "minut") : i + "minutami";
                case "h":
                    return n ? "hodina" : r ? "hodinu" : "hodinou";
                case "hh":
                    return n || r ? i + (o(e) ? "hodiny" : "hodin") : i + "hodinami";
                case "d":
                    return n || r ? "den" : "dnem";
                case "dd":
                    return n || r ? i + (o(e) ? "dny" : "dní") : i + "dny";
                case "M":
                    return n || r ? "měsíc" : "měsícem";
                case "MM":
                    return n || r ? i + (o(e) ? "měsíce" : "měsíců") : i + "měsíci";
                case "y":
                    return n || r ? "rok" : "rokem";
                case "yy":
                    return n || r ? i + (o(e) ? "roky" : "let") : i + "lety"
            }
        }
        return e.defineLocale("cs", {
            months: n,
            monthsShort: t,
            monthsRegex: i,
            monthsShortRegex: i,
            monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
            monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
            weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
            weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm",
                l: "D. M. YYYY"
            },
            calendar: {
                sameDay: "[dnes v] LT",
                nextDay: "[zítra v] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v neděli v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve středu v] LT";
                        case 4:
                            return "[ve čtvrtek v] LT";
                        case 5:
                            return "[v pátek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                    }
                },
                lastDay: "[včera v] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[minulou neděli v] LT";
                        case 1:
                        case 2:
                            return "[minulé] dddd [v] LT";
                        case 3:
                            return "[minulou středu v] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "před %s",
                s: s,
                ss: s,
                m: s,
                mm: s,
                h: s,
                hh: s,
                d: s,
                dd: s,
                M: s,
                MM: s,
                y: s,
                yy: s
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })(t(93))
}, function (e, n, t) {
    (function (e) {
        "use strict";
        return e.defineLocale("ko", {
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY년 MMMM D일",
                LLL: "YYYY년 MMMM D일 A h:mm",
                LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                l: "YYYY.MM.DD.",
                ll: "YYYY년 MMMM D일",
                lll: "YYYY년 MMMM D일 A h:mm",
                llll: "YYYY년 MMMM D일 dddd A h:mm"
            },
            calendar: {
                sameDay: "오늘 LT",
                nextDay: "내일 LT",
                nextWeek: "dddd LT",
                lastDay: "어제 LT",
                lastWeek: "지난주 dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 후",
                past: "%s 전",
                s: "몇 초",
                ss: "%d초",
                m: "1분",
                mm: "%d분",
                h: "한 시간",
                hh: "%d시간",
                d: "하루",
                dd: "%d일",
                M: "한 달",
                MM: "%d달",
                y: "일 년",
                yy: "%d년"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
            ordinal: function (e, n) {
                switch (n) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "일";
                    case "M":
                        return e + "월";
                    case "w":
                    case "W":
                        return e + "주";
                    default:
                        return e
                }
            },
            meridiemParse: /오전|오후/,
            isPM: function (e) {
                return "오후" === e
            },
            meridiem: function (e, n, t) {
                return e < 12 ? "오전" : "오후"
            }
        })
    })(t(93))
}, function (e, n, t) {
    (function (e) {
        "use strict";
        return e.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "på dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[i] dddd[s kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "få sekunder",
                ss: "%d sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en måned",
                MM: "%d måneder",
                y: "et år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })(t(93))
}, function (e, n, t) {
    (function (e) {
        "use strict";
        return e.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "noen sekunder",
                ss: "%d sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en måned",
                MM: "%d måneder",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })(t(93))
}, function (e, n, t) {
    (function (e) {
        "use strict";
        return e.defineLocale("zh-tw", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, n) {
                12 === e && (e = 0);
                return "凌晨" === n || "早上" === n || "上午" === n ? e : "中午" === n ? e >= 11 ? e : e + 12 : "下午" === n || "晚上" === n ? e + 12 : void 0
            },
            meridiem: function (e, n, t) {
                var r = 100 * e + n;
                return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天] LT",
                nextDay: "[明天] LT",
                nextWeek: "[下]dddd LT",
                lastDay: "[昨天] LT",
                lastWeek: "[上]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, n) {
                switch (n) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "週";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    })(t(93))
}, function (e, n) {
    e.exports = "//static.hsappstatic.net/cms-free-branding-lib/static-1.267/assets/sprocket_white.svg"
}, function (e, n) {
    e.exports = "//static.hsappstatic.net/cms-free-branding-lib/static-1.267/css/hsCmsFreeBranding.css"
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, n, t) {
    "use strict";
    t.r(n);

    function r(e, n) {
        if (null == e) return {};
        var t, r, i = {},
            o = Object.keys(e);
        for (r = 0; r < o.length; r++) {
            t = o[r];
            n.indexOf(t) >= 0 || (i[t] = e[t])
        }
        return i
    }
    var i = t(0),
        o = () => "en-us" === i.a.locale || i.a.langEnabled || i.a.publicPage ? i.a.locale : "en-us",
        s = () => {
            const e = i.a.locale.split("-")[0];
            return "en" === e || i.a.langEnabled || i.a.publicPage ? e : "en"
        },
        a = t(1);

    function u(e) {
        const n = [];
        for (const t in e)
            if (Object.prototype.hasOwnProperty.call(e, t)) {
                n.push(t);
                n.push(String(e[t]))
            } return n.sort().toString()
    }
    const d = 60 * 1e3,
        l = ["api", "local", "app", "private", "platform", "tools", "meetings"],
        c = ["hubspotstarter", "hubspotfree"],
        m = ["growth"],
        h = {
            com: ["hubspot", "hubteam", "grader", "getsignals", "getsidekick", "gettally", "hubspotemail", "customer-hub", "hubspotservicehub", "hubspotquote"].join("|"),
            net: c.join("|"),
            org: m.join("|")
        };
    var f = function e(n) {
        const t = new RegExp(`^(?!local|test|selenium)(.*\\.)?(${Object.entries(h).map(([e,n])=>`(?:${n})(qa)?\\.${e}`).join("|")}|(?:connect)\\.com|(?:connect)(qa)\\.co)$`).test(n.hostname),
            r = new RegExp(Object.entries(h).map(([e, n]) => `(?:${n})qa\\.${e}`).join("|") + "|(?:connect)qa\\.co"),
            i = new RegExp(`^(?:${l.join("|")})-(.*).(?:hubspot|hubteam)(?:qa)?.com`),
            o = new RegExp("^(.*).(?:hubspotquote)(?:qa)?.com"),
            s = "ENV",
            a = "Enviro error: the default argument for .get and .getShort is no longer supported",
            u = e => {
                let n = window[e];
                if (null == n) try {
                    n = window.sessionStorage.getItem(e)
                } catch (e) {}
                if (null == n) try {
                    n = window.localStorage.getItem(e)
                } catch (e) {}
                return n
            },
            d = () => {
                const e = u(s);
                return e || (r.test(n.host) ? "qa" : "prod")
            },
            c = (e, n) => {
                window[e] = n;
                return n
            },
            m = {
                prod: "production",
                qa: "development"
            },
            f = e => {
                if ("string" == typeof e) {
                    const n = e.toLowerCase();
                    return m[n] || n
                }
                return e
            },
            _ = e => {
                e = "string" == typeof e ? e.toLowerCase() : void 0;
                return Object.keys(m).find(n => e === m[n]) || e
            },
            p = (e, n) => {
                if (null != n) throw new Error(a);
                let t = null;
                if (e) {
                    const n = e.split(".").reverse();
                    for (let e = 0; e < n.length; e++) {
                        const r = n[e];
                        t = u(r.toUpperCase() + "_ENV");
                        if (t) break
                    }
                }
                if (null == t) {
                    const e = d();
                    t = null != e ? e : "qa"
                }
                return f(t)
            },
            b = (e, n) => {
                if (null != n) throw new Error(a);
                return _(p(e))
            },
            g = b,
            y = e => "prod" === g(e),
            M = e => "qa" === g(e);
        return {
            createEnviro: e,
            debug: (e, n = !1) => {
                let t;
                "string" == typeof e && (t = u(e.toUpperCase() + "_DEBUG"));
                null == t && (t = u("DEBUG"));
                return null == t ? n : t
            },
            denormalize: _,
            deployed: e => {
                let n;
                "string" == typeof e && (n = u(e.toUpperCase() + "_DEPLOYED"));
                null == n && (n = u("DEPLOYED"));
                return null == n ? t : !!n
            },
            enabled: (e, n = !1) => {
                let t = u(e.toUpperCase() + "_ENABLED");
                null == t && (t = JSON.stringify(n));
                return "true" === ("" + t).toLowerCase()
            },
            get: p,
            getHublet: () => {
                const e = u("HUBLET");
                return e || (i.test(n.hostname) ? i.exec(n.hostname)[1] : o.test(n.hostname) ? o.exec(n.hostname)[1] : "na1")
            },
            getInternal: b,
            getShort: g,
            isProd: y,
            isQa: M,
            normalize: f,
            set: function (e, n) {
                if (1 === arguments.length) {
                    n = e;
                    e = s
                }
                return c(e, n)
            },
            setDebug: (e, n = !0) => {
                if ("string" == typeof e) try {
                    n ? localStorage.setItem(e.toUpperCase() + "_DEBUG", JSON.stringify(!0)) : localStorage.removeItem(e.toUpperCase() + "_DEBUG")
                } catch (t) {
                    c(e.toUpperCase() + "_DEBUG", n || void 0)
                } else {
                    n = null == e || e;
                    try {
                        n ? localStorage.setItem("DEBUG", JSON.stringify(n)) : localStorage.removeItem("DEBUG")
                    } catch (e) {
                        c("DEBUG", n || void 0)
                    }
                }
            }
        }
    }(document.location);
    let _;

    function p(e, n) {
        const t = Object(a.a)();
        return _ ? _(e, n) : t.navigator && t.navigator.sendBeacon(e, n)
    }

    function b(e, n = "") {
        if (p) try {
            p(e, n)
        } catch (e) {}
    }
    const g = {
        package: Object(a.b)() && Object(a.b)().bender && Object(a.b)().bender.currentProject || "unknown",
        version: Object(a.b)() && Object(a.b)().bender && Object(a.b)().bender.currentProjectVersion || "unknown"
    };

    function y() {
        return `https://metrics-fe-${f.getHublet()}.hubspot${f.isQa()?"qa":""}.com/metrics/v1/frontend/custom/send?hs_static_app=${g.package}&hs_static_app_version=${g.version}`
    }

    function M(e) {
        if (f.deployed("METRICS")) {
            f.debug("METRICS") && console.log("[metrics-js] Datapoint sent", e);
            b(y(), JSON.stringify(e))
        } else f.debug("METRICS") && console.log("[metrics-js] Dropping local datapoint", e)
    }
    let v = null;
    const w = "__metricsJsDisabled";
    const Y = () => !("object" != typeof window.safari || !window.safari.pushNotification);
    class k {
        constructor() {
            this.metrics = new Map;
            this.interval = void 0;
            this.flush = (e = !1) => {
                const n = [];
                this.metrics.forEach(t => {
                    t.canFlush(e) && n.push(t.flush())
                });
                n.length > 0 && M(n)
            };
            this.eagerlyFlushQueueOnUnload = () => {
                "hidden" !== document.visibilityState && "beforeunload" !== this.listenTo || this.stop()
            };
            this.listenTo = Y() ? "beforeunload" : "visibilitychange"
        }
        static instance() {
            v = v || new k;
            return v
        }
        clearMetricCache() {
            this.metrics.clear()
        }
        run() {
            if (!(Object(a.a)() && Object(a.a)().hubspot && Object(a.a)().hubspot[w] || this.interval)) {
                this.interval = setInterval(this.flush, d);
                this.interval.unref && this.interval.unref();
                try {
                    window.addEventListener(this.listenTo, this.eagerlyFlushQueueOnUnload, !0)
                } catch (e) {}
            }
        }
        stop() {
            clearInterval(this.interval);
            this.interval = void 0;
            this.flush(!0);
            this.clearMetricCache();
            try {
                window.removeEventListener(this.listenTo, this.eagerlyFlushQueueOnUnload)
            } catch (e) {}
        }
        getMetricCacheKey(e, n) {
            return `${e}-${u(n)}`
        }
        getMetric(e, n, t) {
            const r = this.getMetricCacheKey(e, n);
            if (this.metrics.has(r)) return this.metrics.get(r);
            const i = new t(e, n);
            this.metrics.set(r, i);
            return i
        }
    }
    class T {
        constructor(e, n) {
            this.name = e;
            this.dimensions = n
        }
        getDimensions() {
            return this.dimensions
        }
        getName() {
            return this.name
        }
        getSeries(e) {
            return [this.name, e].join(".")
        }
        toString() {
            return JSON.stringify({
                name: this.getName(),
                dimensions: this.getDimensions()
            }, null, 2)
        }
    }
    class D extends T {
        constructor(...e) {
            super(...e);
            this.count = 0;
            this.hasUpdated = !1
        }
        safeStep(e) {
            if ("number" != typeof e || e % 1 == 0) {
                this.hasUpdated = !0;
                this.count += e
            } else 0
        }
        increment(e = 1) {
            this.safeStep(e)
        }
        decrement(e = 1) {
            this.safeStep(-1 * e)
        }
        canFlush(e = !1) {
            return this.hasUpdated
        }
        flush() {
            const e = {
                name: this.getName(),
                values: [this.count],
                type: "COUNTER",
                dimensions: this.getDimensions()
            };
            this.count = 0;
            this.hasUpdated = !1;
            return e
        }
    }
    class L extends T {
        constructor(...e) {
            super(...e);
            this.values = []
        }
        update(e) {
            this.values.push(e)
        }
        canFlush() {
            return this.values.length > 0
        }
        flush() {
            const e = {
                name: this.getName(),
                type: "HISTOGRAM",
                values: this.values.slice(),
                dimensions: this.getDimensions()
            };
            this.values = [];
            return e
        }
    }
    class S extends D {
        canFlush(e) {
            return e
        }
        flush() {
            const e = super.flush();
            e.type = "HISTOGRAM";
            return e
        }
    }

    function C(e) {
        return e && "function" == typeof e.then
    }
    class x extends T {
        constructor(...e) {
            super(...e);
            this.values = []
        }
        update(e) {
            this.values.push(e)
        }
        time(e) {
            const n = performance.now(),
                t = e();
            if (C(t)) return t.then(e => {
                this.update(performance.now() - n);
                return e
            });
            this.update(performance.now() - n);
            return t
        }
        canFlush() {
            return this.values.length > 0
        }
        flush() {
            const e = {
                name: this.getName(),
                type: "TIMER",
                values: this.values.slice(),
                dimensions: this.getDimensions()
            };
            this.values = [];
            return e
        }
    }
    const W = Symbol("SessionCounter");
    class O {
        constructor(e, n = {}) {
            this.namespace = e;
            this.globalDimensions = n
        }
        namespaceMetric(e) {
            return `${this.namespace}.${e}`
        }
        counter(e, n = {}) {
            return k.instance().getMetric(this.namespaceMetric(e), Object.assign({}, this.globalDimensions, {}, n), D)
        } [W](e, n = {}) {
            return k.instance().getMetric(this.namespaceMetric(e), Object.assign({}, this.globalDimensions, {}, n), S)
        }
        histogram(e, n = {}) {
            return k.instance().getMetric(this.namespaceMetric(e), Object.assign({}, this.globalDimensions, {}, n), L)
        }
        timer(e, n = {}) {
            return k.instance().getMetric(this.namespaceMetric(e), Object.assign({}, this.globalDimensions, {}, n), x)
        }
    }
    let N;

    function j(e) {
        Object(a.b)().__metricsSetupComplete = e
    }

    function z() {
        return Object(a.b)().__metricsSetupComplete
    }

    function A() {
        if (!N && !z()) {
            N = new O("metrics", {});
            N.counter("loaded").increment();
            j(!0)
        }
    }
    let B, E = window;
    const H = new Set;

    function I(e) {
        E = e || E;
        if (!B) {
            B = new O("js", {});
            try {
                E.addEventListener("error", U);
                E.addEventListener("unhandledrejection", R);
                E.addEventListener("rejectionhandled", q)
            } catch (e) {}
        }
    }
    const P = /@<inline>|moz-extension:\/\/|chrome-extension:\/\/|safari-web-extension:\/\/|safari-extension:\/\//;

    function F(e) {
        if (e && e.stack && e.stack.match(P)) {
            B && B.counter("browser-extension-errors").increment();
            return !0
        }
        return !1
    }

    function R(e) {
        B && (e.reason && F(e.reason) || B.counter("unhandled-promise-rejection").increment())
    }

    function q() {
        B && B.counter("handled-promise-rejection").increment()
    }

    function U(e) {
        if (!B) return;
        if (!(e instanceof ErrorEvent)) return;
        const n = e.error || new Error(e.message);
        if (!H.has(n))
            if (G(n)) B.counter("configured-ignored-errors").increment();
            else if (!F(n)) {
            B.counter("errors").increment();
            B[W]("errors-per-session").increment();
            H.add(n);
            V(n)
        }
    }

    function G(e) {
        return !!(window.hubspot && window.hubspot._shouldIgnoreJsError && window.hubspot._shouldIgnoreJsError(e))
    }

    function V(e) {
        setTimeout(() => H.delete(e), 250)
    }

    function $() {
        const e = k.instance();
        e.run();
        return e
    }

    function K(e, n = {}) {
        if (!e) throw new Error("[metrics-js] A namespace is required for a Metrics factory.");
        $();
        I();
        const t = n.dimensions || {};
        n.library && (t.fe_library = n.library);
        return new O(e, t)
    }
    A();
    const J = K("I18n", {
            library: "I18n"
        }),
        Z = "en",
        Q = {
            nb: "no-no",
            noNO: "no-no",
            pt: "pt-br",
            no: "no-no",
            ca: "ca-es",
            ar: "ar-eg"
        },
        X = {
            pt: "pt-br",
            "en-ie": "en-gb",
            "en-nz": "en-au",
            "es-co": "es-do",
            "es-ar": "es-do",
            "es-mx": "es",
            de: "de",
            ja: "ja",
            "en-gb": "en-gb",
            "en-in": "en-au",
            es: "es",
            "zh-cn": "zh-cn",
            "zh-hk": "zh-hk",
            nl: "nl",
            "en-au": "en-au",
            "en-ca": "en-ca",
            fi: "fi",
            fr: "fr",
            "fr-ca": "fr-ca",
            it: "it",
            "pt-br": "pt-br",
            sv: "sv",
            da: "da",
            pl: "pl",
            cs: "cs",
            ko: "ko",
            no: "nb",
            "no-no": "nb",
            noNO: "nb",
            "x-pseudo": "x-pseudo",
            id: "id",
            ro: "ro",
            ru: "ru",
            th: "th",
            hr: "hr",
            vi: "vi",
            hu: "hu",
            bn: "bn",
            af: "af",
            "ar-eg": "ar",
            bg: "bg",
            "ca-es": "ca",
            sl: "sl",
            tr: "tr",
            uk: "uk",
            "he-il": "he",
            he: "he",
            sk: "sk",
            lt: "lt",
            ms: "ms",
            "zh-tw": "zh-tw",
            tl: "tl-ph"
        };

    function ee(e) {
        if (!i.a.moment) return;
        if (!e || !e.id) {
            i.a.moment.portalTz = i.a.manualTimezone ? i.a.moment.portalTz : i.a.moment.userTz;
            i.a.timezone = i.a.manualTimezone || "US/Eastern";
            i.a.manualTimezone && i.a.moment.tz.setDefault(i.a.manualTimezone);
            return
        }
        if (i.a.manualTimezone) {
            i.a.moment.tz.setDefault(i.a.manualTimezone);
            return
        }
        const n = e.id;
        try {
            if (e["moment-data"]) {
                i.a.moment.tz.zone(n) || i.a.moment.tz.add(`${n}|${e["moment-data"]}`);
                i.a.moment.tz(n);
                i.a.timezone = n
            } else Raven && Raven.captureMessage("I18n failed to parse api-verify data: " + JSON.stringify(portal && portal.timezone))
        } catch (e) {
            console.error("Unable to set up timezone", e);
            Raven && Raven.captureException(e)
        }
        i.a.timezone = i.a.manualTimezone || window.I18N_RENDERED_TZ || i.a.timezone
    }

    function ne(e) {
        let n = (e || Z).toLowerCase();
        const t = Q[n] || Q[n.substring(0, 2)];
        t && (n = t);
        return n || i.a.locale
    }

    function te(e) {
        return i.a.langEnabled ? e : [i.a.locale, ...e]
    }

    function re() {
        i.a.manualLocale = window.I18N_MANUAL_LANG;
        i.a.manualTimezone = window.I18N_TZ;
        try {
            const e = localStorage && localStorage.I18N_MANUAL_LANG,
                n = localStorage && localStorage.I18N_TZ;
            if (e) {
                J.counter("localStorage-overwrote-locale").increment();
                i.a.manualLocale = e
            }
            if (n) {
                J.counter("localStorage-overwrote-timezone").increment();
                i.a.manualTimezone = n
            }
        } catch (e) {
            i.a.debugLog("Failed access localStorage " + e)
        }
    }

    function ie() {
        const e = document.querySelector("html");
        e.className = e.className.replace(/(^|\b)lang-[a-z]{2}($|\b)/, "");
        e.className += " lang-" + s();
        e.setAttribute("lang", o())
    }

    function oe(e, n) {
        let t = ne(e);
        const r = t.split("-")[0];
        n.indexOf(t) < 0 && n.indexOf(r) >= 0 ? t = r : n.indexOf(t) < 0 && (t = null);
        return t
    }
    var se = t(3);

    function ae(e) {
        e.fallbacks = !0;
        e.fired = {};
        e.currencySymbols || (e.currencySymbols = {});
        e.baseLocales || (e.baseLocales = {});
        e.publicLocales || (e.publicLocales = {});
        e.loaded = !0;
        const n = {};
        e.Info = new Promise((e, t) => {
            n.resolve = e;
            n.reject = t
        });
        e.Info.resolve = n.resolve;
        e.Info.reject = n.reject
    }
    const ue = {
        defaultLocale: "en",
        locale: "en",
        defaultSeparator: ".",
        placeholder: /(?:\{\{)\s?(\S*?)\s?(?:\}\})/gm,
        fallbacks: !1,
        translations: {},
        missingBehaviour: "message",
        missingTranslationPrefix: ""
    };
    let de, le = {},
        ce = [],
        me = Math.random() <= .05;

    function he(e, n, t) {
        let r = !1;

        function i(e) {
            r || (le[e] = le[e] ? le[e] + 1 : 1);
            r = !0
        }
        try {
            if (localStorage.getItem("TRACK_I18N_MISSING_TRANSLATIONS")) {
                i(e);
                const n = window.hubspot.bender.currentProject,
                    t = window.hubspot.bender.currentProjectVersion;
                localStorage.setItem("I18N_KEYS_USED:" + n + ":" + t, JSON.stringify(le));
                const r = localStorage.getItem("I18N_APPS_TRACKED");
                let o = {},
                    s = !0;
                if (r) {
                    o = JSON.parse(r);
                    o[n] && o[n].indexOf(t) < 0 ? o[n].push(t) : s = !1
                } else o[n] = [n];
                s && localStorage.setItem("I18N_APPS_TRACKED", JSON.stringify(o))
            }
            if (n && localStorage.getItem("TRACK_I18N_FALLBACK_TRANSLATIONS")) {
                let n = localStorage.getItem("TRACK_I18N_FALLBACK_TRANSLATIONS");
                n = n ? n.concat(",", e) : e;
                localStorage.setItem("I18N_FALLBACK_TRANSLATIONS", n)
            }
        } catch (e) {
            return
        }
        if (me) {
            clearTimeout(de);
            i(e);
            n && -1 === ce.indexOf(e) && ce.push(e);
            de = setTimeout(() => {
                window.newrelic && window.newrelic.addPageAction("i18nKeysUsed", {
                    keysUsed: JSON.stringify(le),
                    i18nKeyCount: Object.keys(le).length,
                    fallbackKeys: JSON.stringify(ce),
                    englishFallbackCount: ce.length,
                    requestedLocaleValue: t
                });
                me = !1;
                le = {}
            }, 6e4)
        }
    }
    const fe = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        _e = "(?:&|<|>|\"|'|`)",
        pe = RegExp(_e),
        be = RegExp(_e, "g"),
        ge = e => fe[e],
        ye = function (e) {
            return pe.test(e) ? e.replace(be, ge) : e
        },
        Me = function (e) {
            return null != e
        },
        ve = function (e) {
            return e === Object(e)
        },
        we = function (...e) {
            const n = {};
            for (; e.length;) {
                let t = e.shift();
                if ("object" == typeof t)
                    for (const e in t) t.hasOwnProperty(e) && (Me(n[e]) || (n[e] = t[e]))
            }
            return n
        },
        Ye = function (e, n) {
            n = we(n);
            e.constructor === Array && (e = e.join(ue.defaultSeparator));
            n.scope && (e = [n.scope, e].join(ue.defaultSeparator));
            return e
        },
        ke = function () {
            return i.a.locale || ue.defaultLocale
        },
        Te = function (e, n) {
            n = we(n);
            const t = i.a.locales.get(n.locale).slice(),
                r = t[0];
            let o, s, a, u;
            e = Ye(e, n);
            for (; t.length;) {
                o = t.shift();
                s = e.split(ue.defaultSeparator);
                a = i.a.translations[o];
                if (!a) continue;
                for (; s.length;) {
                    a = a[s.shift()];
                    if (null == a) break
                }
                const n = function (e) {
                    return e.split("-")[0]
                };
                u = n(r);
                if (null != a) {
                    const t = n(o),
                        r = u !== t,
                        s = t === ue.defaultLocale;
                    he(e, i.a.langEnabled && r && s, u);
                    return a
                }
            }
            he(e, !1, u);
            if (Me(n.defaultValue)) return n.defaultValue
        },
        De = {},
        Le = e => !(f.deployed() || null != e && De[e]),
        Se = e => {
            e && (De[e] = !0)
        };
    var Ce = {
        warn: ({
            message: e = "",
            key: n,
            url: t
        }) => {
            t && (e += "\nFor details, see: " + t);
            if (Le(n)) {
                console.warn(e);
                Se(n)
            }
        }
    };
    const xe = {
            precision: 3,
            separator: ".",
            delimiter: ",",
            strip_insignificant_zeros: !0
        },
        We = {
            unit: "$",
            precision: 2,
            format: "%u%n",
            sign_first: !0,
            delimiter: ",",
            separator: "."
        },
        Oe = {
            unit: "%",
            precision: 3,
            format: "%n%u",
            separator: ".",
            delimiter: ""
        },
        Ne = {
            type: "short",
            precision: 0
        };
    var je = Array.prototype.join;

    function ze(e) {
        if ("function" == typeof Math.log10) return Math.floor(Math.log10(e));
        const n = Math.round(Math.log(e) * Math.LOG10E);
        return n - (Number("1e" + n) > e)
    }

    function Ae(e, n, t) {
        var r, i, o = e < 0;
        if (0 === (e = Math.abs(e))) {
            r = je.call(Array(t + 1), "0");
            i = 1
        } else {
            i = ze(Math.abs(e)) + 1;
            const n = Math.round(Math.exp(Math.abs(i - t) * Math.LN10));
            r = String(Math.round(i - t < 0 ? e * n : e / n))
        }
        if (i > t) {
            r += je.call(Array(i - t + 1), "0");
            return o ? "-" + r : r
        }
        if (i === t) return o ? "-" + r : r;
        i > 0 ? r = r.slice(0, i) + "." + r.slice(i) : i <= 0 && (r = "0." + je.call(Array(1 - i), "0") + r);
        if (r.indexOf(".") >= 0 && t > n) {
            let e = t - n;
            for (; e > 0 && "0" === r.charAt(r.length - 1);) {
                r = r.slice(0, -1);
                e--
            }
            "." === r.charAt(r.length - 1) && (r = r.slice(0, -1))
        }
        return o ? "-" + r : r
    }

    function Be(e, n, t, r) {
        let i, o, s = Number.prototype.toFixed.call(e, r),
            a = s.split(".")[0].length,
            u = r - t;
        const d = (i = s.indexOf("e")) > -1 ? s.slice(i + 1) : 0;
        if (d) {
            s = s.slice(0, i).replace(".", "");
            s += je.call(Array(d - (s.length - 1) + 1), "0") + "." + je.call(Array(r + 1), "0");
            a = s.length
        }
        for (; u > 0 && "0" === s.slice(-1);) {
            s = s.slice(0, -1);
            u--
        }
        "." === s.slice(-1) && (s = s.slice(0, -1));
        a < n && (o = je.call(Array(n - a + 1), "0"));
        return (o || "") + s
    }
    const Ee = e => !!i.a.currencySymbols[e],
        He = function (e, n) {
            n = we(n, Te("number.format"), xe);
            const t = e < 0,
                r = Math.abs(e).toFixed(n.precision).toString().split("."),
                i = [];
            let o, s = n.format || "%n";
            const a = t ? "−" : "";
            e = r[0];
            let u = r[1];
            for (; e.length > 0;) {
                i.unshift(e.substr(Math.max(0, e.length - 3), 3));
                e = e.substr(0, e.length - 3)
            }
            o = i.join(n.delimiter);
            n.strip_insignificant_zeros && u && (u = u.replace(/0+$/, ""));
            n.precision > 0 && u && (o += n.separator + u);
            s = n.sign_first ? "%s" + s : s.replace("%n", "%s%n");
            o = s.replace("%u", n.unit).replace("%n", o).replace("%s", a);
            return o
        },
        Ie = function (e, n) {
            const t = (n || {}).locale;
            n = we(n, Te("number.currency.format", {
                locale: t
            }), Te("number.format", {
                locale: t
            }), We);
            return He(e, n)
        },
        Pe = function (e, n) {
            n = we(n, Te("number.percentage.format"), Te("number.format"), Oe);
            return He(e, n)
        },
        Fe = function (e, n) {
            null == n && (n = {});
            return Pe(e, n)
        },
        Re = /\d|\+|-|e/i,
        qe = function (e, n) {
            n = we(n, Te("number.format", {
                locale: (n || {}).locale
            }), xe);
            if ("number" == typeof e) return e;
            if ("string" != typeof e) return NaN;
            e = e.replace(/\s/g, "").replace("−", "-");
            let t = "";
            for (let r of Array.from(e))
                if (r.match(Re)) t += r;
                else {
                    if (r !== n.separator) {
                        if (r === n.delimiter) continue;
                        return NaN
                    }
                    t += "."
                } return parseFloat(t)
        },
        Ue = 15,
        Ge = Math.pow(10, Ue),
        Ve = 1e3,
        $e = function (e, n) {
            let t;
            null == n && (n = {});
            n = we(n, Te("number.format", {
                locale: n.locale
            }), {
                separator: ".",
                delimiter: ","
            });
            let {
                separator: r,
                delimiter: i,
                numDigitsToTruncateTo: o,
                maxThreshold: s,
                minThreshold: a,
                minIntegerDigits: u,
                maxSignificantDigits: d,
                minSignificantDigits: l,
                maxFractionDigits: c,
                minFractionDigits: m,
                stripInsignificantZeros: h
            } = n;
            const f = e < 0;
            null == a && (a = Number.NEGATIVE_INFINITY);
            null == s && (s = Number.POSITIVE_INFINITY);
            null != m || null != l || null != c || null != d ? null == h && (h = !1) : null == h && (h = !0);
            null == u && (u = Math.max(null != o ? o : 0, 1));
            if (null != l || null != d) {
                null == d && (d = Ue);
                null == l && (l = 1)
            }
            null == m && (m = 0);
            null == c && (c = Math.max(m, 0));
            let _ = Math.abs(e);
            if (null != o && a <= _ && _ < s) {
                const e = Math.max(0, ze(_) + 1 - o);
                _ /= Math.pow(10, e)
            }
            t = null != l && null != d ? Ae(_, l, d) : Be(_, u, m, c);
            const p = t.split(".");
            let b = p[0],
                g = p[1];
            const y = [];
            for (; b.length > 0;) {
                y.unshift(b.substr(Math.max(0, b.length - 3), 3));
                b = b.substr(0, b.length - 3)
            }
            let M = y.join(i);
            h && g && (g = g.replace(/0+$/, ""));
            g && (M += r + g);
            f && (M = "−" + M);
            return M
        },
        Ke = function (e) {
            e = Math.abs(e);
            return "1" + [...Array(Math.floor(e).toString().length - 1).keys()].map(() => "0").join("")
        },
        Je = function (e) {
            const n = e.match(/^([^0]*)(0+)(.*)$/);
            if (n) {
                const [e, t, r, i] = n;
                return {
                    prefix: t,
                    digitString: r,
                    numDigits: r.length,
                    suffix: i
                }
            }
            throw new Error("Invalid abbreviation pattern: " + e)
        },
        Ze = function (e, n) {
            null == n && (n = {});
            let {
                type: t,
                locale: r,
                separator: o,
                delimiter: s,
                stripInsignificantZeros: a,
                minIntegerDigits: u,
                maxSignificantDigits: d,
                minSignificantDigits: l,
                maxFractionDigits: c,
                minFractionDigits: m
            } = n;
            null == t && (t = "short");
            const h = Ke(e);
            let f = Te(`number.human.abbreviated.${t}.${h}`, n);
            if (null != f && "object" == typeof f) {
                const n = f[Object.keys(f)[0]],
                    t = Je(n),
                    o = $e(e, {
                        numDigitsToTruncateTo: t.numDigits,
                        minThreshold: Ve,
                        maxThreshold: Ge
                    }),
                    s = i.a.pluralization.get(r)(Math.abs(o));
                for (; s.length;) {
                    const e = s.shift();
                    if (null != f[e]) {
                        f = f[e];
                        break
                    }
                }
            }
            if (["0", 0].includes(f) || null == f) return $e(e, {
                locale: r,
                numDigitsToTruncateTo: 30,
                minThreshold: Ve,
                maxThreshold: Ge,
                minIntegerDigits: null != u ? u : 1,
                minSignificantDigits: l,
                maxSignificantDigits: d,
                minFractionDigits: m,
                maxFractionDigits: c,
                separator: o,
                delimiter: s,
                stripInsignificantZeros: a
            }); {
                const n = Je(f),
                    t = $e(e, {
                        locale: r,
                        numDigitsToTruncateTo: n.numDigits,
                        minThreshold: Ve,
                        maxThreshold: Ge,
                        minIntegerDigits: u,
                        minSignificantDigits: l,
                        maxSignificantDigits: d,
                        minFractionDigits: m,
                        maxFractionDigits: c,
                        separator: o,
                        delimiter: s,
                        stripInsignificantZeros: a
                    });
                return `${n.prefix}${t}${n.suffix}`
            }
        },
        Qe = function (e, n) {
            null == n && (n = {});
            if (n.abbreviate) {
                "string" == typeof (n = we(n, Ne)).abbreviate && (n.type = n.abbreviate);
                return Ze(e, n)
            }
            return He(e, n)
        },
        Xe = function (e, n) {
            null == n && (n = {});
            Ee("USD") || console.error("It looks like currency data is not available. Are you using the new I18n loader and forgot to import currencies? See go/new-i18n");
            if (n.currencyCode) {
                const t = i.a.currencySymbols[n.currencyCode];
                if (t) {
                    null == n.unit && (n.unit = t.symbol);
                    t.format && (n.format = t.format);
                    let r = t.decimal_digits;
                    if (t.alternative_decimal_digits && e % 1 != 0) {
                        e.toString().split(".")[1].length > r && (r = t.alternative_decimal_digits)
                    }
                    null == n.precision && (n.precision = r)
                }
            }
            if (!n.unit && !n.useCurrencyCode) {
                if (n.currencyCode) {
                    Ce.warn({
                        message: `I18n: Invalid currencyCode: ${n.currencyCode} supplied to call to formatCurrency().`,
                        key: "I18n.formatCurrency-invalid-" + n.currencyCode,
                        url: "https://git.hubteam.com/HubSpot/faast-ui/issues/248"
                    });
                    return `${n.currencyCode} ${e}`
                }
                Ce.warn({
                    message: "I18n: Missing currencyCode in call to formatCurrency().",
                    key: "I18n.formatCurrency-missing",
                    url: "https://git.hubteam.com/HubSpot/I18n/issues/59"
                })
            }
            if (n.abbreviate) {
                "string" == typeof (n = we(n, Ne)).abbreviate && (n.type = n.abbreviate);
                return Ie(e >= 0 ? 2 : -2, n).replace("2", Ze(Math.abs(e), n))
            }
            return Ie(e, n)
        },
        en = function (e, n) {
            if ("number" == typeof n) {
                if (isNaN(n)) return null;
                if ("count" === e) return Number(n);
                if ("portalid" === e.toLowerCase()) {
                    console.warn('The use of params named "portalId" in externalized strings is deprecated. You should wrap it, like so "I18n.t(key, { portalId: I18n.SafeString(portalId) })", to prevent it from being automatically formatted. See HubSpot/I18n#109');
                    return String(n)
                }
                return Qe(n)
            }
            return n instanceof i.a.SafeString ? n.toString() : null != n ? ye(String(n)) : n
        },
        nn = !0,
        tn = !0,
        rn = [],
        on = function (e) {
            return "[missing " + e + " value]"
        },
        sn = function (...e) {
            return on(e)
        },
        an = function (e, n, t, r, o) {
            null == o && (o = {});
            const s = e.apply(i.a, r),
                a = o.message || s;
            if (rn.indexOf(a) < 0) {
                rn.push(a);
                const e = new Error("I18n: " + a),
                    r = {
                        i18nErrorType: n,
                        currentLocale: i.a.langEnabled ? i.a.locale : "en-us",
                        translationKey: o.translationKey,
                        placeholderName: o.placeholderName
                    };
                window.newrelic && window.newrelic.noticeError(e, r);
                t && window.Raven && window.Raven.captureException(e, {
                    extra: r
                });
                try {
                    localStorage.getItem("TRACK_I18N_MISSING_TRANSLATIONS") && localStorage.setItem("I18N_MISSING_TRANSLATIONS", rn)
                } catch (e) {}
            }
            "function" == typeof i.a.trigger && i.a.trigger(n, s);
            return s
        },
        un = function (e, n) {
            if ("guess" === i.a.missingBehaviour) {
                const n = e.split(".").slice(-1)[0];
                return (ue.missingTranslationPrefix.length > 0 ? ue.missingTranslationPrefix : "") + n.replace("_", " ").replace(/([a-z])([A-Z])/g, (e, n, t) => n + " " + t.toLowerCase())
            }
            const t = Ye(e, n);
            return "[missing “" + [ke(), t].join(ue.defaultSeparator) + "” translation]"
        },
        dn = function (e) {
            const n = 'Missing translation: "' + e + '"';
            console.warn("I18n: " + n);
            return ye(an(un, "missingTranslation", tn, [e], {
                translationKey: e,
                message: n
            }))
        },
        ln = on,
        cn = function (e, n, t) {
            const r = `Missing placeholder: ${e} in "${t.__scope}"`,
                i = {
                    message: r,
                    translationKey: t.__scope,
                    placeholderName: e
                };
            J.counter("translate-request-key-missing-placeholder").increment();
            console.warn("I18n: " + r);
            return an(ln, "missingPlaceholder", nn, [e, n, t], i)
        },
        mn = function (e, n) {
            n = we(n);
            const t = e.match(ue.placeholder);
            let r, i, o, s;
            if (!t) return e;
            for (; t.length;) {
                r = t.shift();
                o = r.replace(ue.placeholder, "$1");
                i = Me(n[o]) ? n[o].toString().replace(/\$/gm, "_#$#_") : o in n ? sn(r, e, n) : cn(r, e, n);
                s = new RegExp(r.replace(/\{/gm, "\\{").replace(/\}/gm, "\\}"));
                e = e.replace(s, i)
            }
            return e.replace(/_#\$#_/g, "$")
        },
        hn = function (e, n, t) {
            t = we(t);
            let r, o, s, a, u;
            r = ve(n) ? n : Te(n, t);
            if (!r) return dn(n, t);
            o = i.a.pluralization.get(t.locale);
            s = o(e);
            for (; s.length;) {
                a = s.shift();
                if (Me(r[a])) {
                    u = r[a];
                    break
                }
            }
            if ("string" == typeof u) {
                "number" == typeof t.count && (t.count = Qe(e));
                return mn(u, t)
            }
        },
        fn = function e(n, t) {
            t = we(t);
            let r = Te(n, t);
            ve(r) && !Me(t.count) && (r = Te(n, we({
                locale: ue.defaultLocale
            }, t)));
            if (null == r) return dn(n, t);
            ve(r) || "number" != typeof t.count || (t.count = Qe(t.count));
            if ("string" == typeof r) r = mn(r, t);
            else if (ve(r) && Me(t.count)) {
                r = hn(t.count, r, t);
                if (void 0 === r && t.locale !== ue.defaultLocale) return e(n, we({
                    locale: ue.defaultLocale
                }, t))
            }
            return r
        },
        _n = function (...e) {
            const n = e[e.length - 1],
                t = "string" != typeof n,
                r = t && n ? e[e.length - 1] : {},
                o = t ? e.slice(0, e.length - 1).join(".") : e.join("."),
                s = {};
            for (let e in r)
                if (r.hasOwnProperty(e)) {
                    const n = r[e];
                    null != n && (s[e] = en(e, n))
                } s.locale || "en" === i.a.locale.split("-")[0] || i.a.langEnabled || i.a.publicPage || (s.locale = "en");
            s.__scope = o;
            if (i.a.fired && !i.a.fired.ready) {
                const e = new Error(`I18n.text called before ready with key '${o}' - See go/i18n-help for more info`);
                setTimeout(() => {
                    J.counter("translate-request-fired-too-early").increment();
                    throw e
                }, 0)
            }
            return fn(o, s)
        },
        pn = {
            inclusive: {
                wordsConnector: "|, ",
                twoWordsConnector: "| and ",
                lastWordConnector: "|, and "
            },
            exclusive: {
                wordsConnector: "|, ",
                twoWordsConnector: "| or ",
                lastWordConnector: "|, or "
            }
        },
        bn = function (e, n) {
            const t = n.length - 1;
            return n.reduce((n, r, i) => {
                n.push(r);
                i !== t && n.push(e);
                return n
            }, [])
        },
        gn = function (e, n) {
            let t;
            null == n && (n = {});
            let {
                wordsConnector: r,
                twoWordsConnector: i,
                lastWordConnector: o,
                limit: s,
                excessKey: a,
                exclusive: u
            } = n;
            if (null != s && s <= 2) throw new Error("The formatList limit must be 3 or larger");
            if (null != s && null == a) throw new Error("When using a limit in formatList, you must pass excessKey (that is a external, plurlized string reference)");
            if (null != Array.isArray) {
                if (!Array.isArray(e)) throw new Error("The first argument to I18n.formatList must be an array")
            } else if (!(e instanceof Array)) throw new Error("The first argument to I18n.formatList must be an array");
            const d = "number.human.array";
            let l = "inclusive";
            !0 === u && (l = "exclusive");
            r = n.wordsConnector || _n(`${d}.${l}.wordsConnector`, {
                locale: n.locale
            }) || pn[l].wordsConnector;
            i = n.twoWordsConnector || _n(`${d}.${l}.twoWordsConnector`, {
                locale: n.locale
            }) || pn[l].twoWordsConnector;
            o = n.lastWordConnector || _n(`${d}.${l}.lastWordConnector`, {
                locale: n.locale
            }) || pn[l].lastWordConnector;
            const {
                length: c
            } = e;
            if (0 === c) return [];
            if (1 === c) return [e[0]];
            if (2 === c) return [e[0], i, e[1]];
            if (null == s || s >= c) {
                t = bn(r, e.slice(0, -1));
                t.push(o);
                t.push(e[e.length - 1]);
                return t
            } {
                const i = _n(a, {
                    count: e.length - s,
                    locale: n.locale
                });
                t = bn(r, e.slice(0, s));
                t.push(o);
                t.push(i);
                return t
            }
        },
        yn = function (e, n) {
            null == n && (n = {});
            return gn(e, n).join("")
        },
        Mn = [null, "kb", "mb", "gb", "tb"],
        vn = function (e, n) {
            for (var t, r, i = 1024, o = e, s = 0; o >= i && s < 4;) {
                o /= i;
                s += 1
            }
            if (0 === s) {
                t = _n("number.human.storage_units.units.byte", {
                    count: o
                });
                r = 0
            } else {
                t = _n("number.human.storage_units.units." + Mn[s]);
                r = o - Math.floor(o) == 0 ? 0 : 1
            }
            n = we(n, {
                unit: t,
                precision: r,
                format: "%n%u",
                delimiter: ""
            });
            return He(o, n)
        },
        wn = function (e, n) {
            null == n && (n = {});
            let t = "";
            !0 !== n.useGap && !1 !== n.noGap || (t = " ");
            return `${t}<i18n-string data-key='${e}' data-locale-at-render='${i.a.locale}'>${_n(e,n)}</i18n-string>${t}`
        };

    function Yn(e) {
        (function () {
            void 0 === e.placeholder && null !== e.placeholder && (e.placeholder = ue.placeholder);
            void 0 === e.fallbacks && null !== e.fallbacks && (e.fallbacks = ue.fallbacks);
            void 0 === e.translations && null !== e.translations && (e.translations = ue.translations)
        })();
        e.locales = {};
        e.locales.default = function (n) {
            const t = [],
                r = [];
            let i;
            n && t.push(n);
            !n && e.locale && t.push(e.locale);
            "noNO" === n || !n && "noNO" === e.locale ? t.push("no-no") : ("no-no" === n || !n && "no-no" === e.locale) && t.push("noNO");
            e.fallbacks && ue.defaultLocale && t.push(ue.defaultLocale);
            t.forEach(n => {
                i = n.split("-")[0];
                ~r.indexOf(n) || r.push(n);
                ~r.indexOf(n.toLowerCase()) || r.push(n.toLowerCase());
                e.fallbacks && i && i !== n && !~r.indexOf(i) && r.push(i)
            });
            t.length || t.push("en");
            return r
        };
        e.locales.get = function (n) {
            let t = this[n] || this[e.locale] || this.default;
            "function" == typeof t && (t = t(n));
            t instanceof Array == !1 && (t = [t]);
            return t
        };
        e.pluralization = {};
        e.pluralization.get = function (n) {
            return this[n] || this[e.locale] || this.default
        };
        e.pluralization.default = function (e) {
            switch (e) {
                case 0:
                    return ["zero", "other"];
                case 1:
                    return ["one", "other"];
                default:
                    return ["other"]
            }
        };
        e.currentLocale = function () {
            return e.locale || ue.defaultLocale
        };
        const n = function (n) {
                const t = 0 === n ? 1 : n;
                return e.pluralization.default(t)
            },
            t = function (e) {
                if (1 === e) return ["one", "other"];
                const n = e % 10,
                    t = e % 100;
                return n >= 2 && n <= 4 && !(t >= 12 && t <= 14) ? ["few", "other"] : 1 !== e && n >= 0 && n <= 1 || n >= 5 && n <= 9 || t >= 12 && t <= 14 ? ["many", "other"] : ["other"]
            };
        e.pluralization.fr = n;
        e.pluralization.pl = t
    }

    function kn(e) {
        if (!(this instanceof kn)) return new kn(e);
        this.string = e
    }
    kn.prototype.toString = kn.prototype.toHTML = function () {
        return "" + this.string
    };
    const Tn = function (...e) {
        if (!document) return;
        let n = this.I18N_DEBUG_LOG || window.I18N_DEBUG;
        try {
            n = "true" === localStorage.I18N_DEBUG_LOG || "true" === localStorage.I18N_DEBUG
        } catch (e) {}
        if (n) {
            e.unshift("I18n:");
            window.parent !== window && e.unshift("(IFRAME)");
            console.log(...e)
        }
    };

    function Dn(e) {
        Yn(e);
        ae(e);
        e.lookup = Te;
        e.prepareOptions = we;
        e.missingTranslation = dn;
        e.missingPlaceholder = cn;
        e.formatParam = en;
        e.debugLog = Tn;
        e.text = _n;
        e.formatListArray = gn;
        e.formatList = yn;
        e.parseNumber = qe;
        e.formatNumber = Qe;
        e.formatPercentage = Fe;
        e.formatCurrency = Xe;
        e.abbreviateNumber = Ze;
        e.advancedFormatNumber = $e;
        e.formatSize = vn;
        e.html = wn;
        e.SafeString = kn
    }
    Dn(i.a);

    function Ln({
        context: e,
        source: n,
        mode: t
    }) {
        if (!e) throw new Error("invalid provider source");
        const r = Object.keys(e);

        function o(e) {
            e && e.translations && e.translations.forEach(e => Object(se.a)(i.a.translations, e));
            return e
        }

        function s(t) {
            if (r.indexOf(t) < 0) throw new Error(`locale ${t} does not exist for ${n}`);
            return e[t]()
        }

        function a(e) {
            if ("sync" !== t) throw new Error(n + " is not sync");
            return o(s(e))
        }

        function u(e) {
            if ("lazy" !== t) throw new Error(n + " is not lazy");
            return s(e).then(o).catch(e => setTimeout(() => {
                throw e
            }, 0))
        }

        function d(e, n = {}) {
            const i = [],
                o = n.localeMapper || oe,
                s = {};
            e.forEach(e => {
                const n = o(e, r),
                    d = s[n];
                if (!d && n && "lazy" === t) {
                    i.push(u(n));
                    s[n] = !0
                } else if (!d && n) {
                    i.push(Promise.resolve(a(n)));
                    s[n] = !0
                }
            });
            return Promise.all(i).catch(e => setTimeout(() => {
                throw e
            }, 0))
        }
        return {
            mode: t,
            load: d,
            locales: r,
            loadSync: a,
            loadLazy: u
        }
    }

    function Sn() {
        let e;
        const n = {
            langRegistry: {},
            localePromise: new Promise(n => e = n),
            register(e, n = {}) {
                if (this.langRegistry[e.source]) return Promise.resolve();
                this.langRegistry[e.source] = e;
                const t = Ln(e);
                return this.localePromise.then(e => t.load(n.getLocales ? n.getLocales(e) : e, n)).catch(e => setTimeout(() => {
                    throw e
                }, 0))
            }
        };
        n.setLocale = e;
        return n
    }

    function Cn(e, n) {
        try {
            localStorage.setItem(e, n)
        } catch (e) {}
    }
    const xn = "i18n-cached-standard-locales",
        Wn = "i18n-cached-public-locales";
    var On = e => {
            const n = Sn(),
                {
                    setLocale: t,
                    register: o
                } = n,
                s = r(n, ["setLocale", "register"]),
                a = [];
            return Object.assign({
                register(t, r = {}) {
                    const i = r.localeMapper || oe,
                        s = o.call(n, t, Object.assign({}, r, {
                            localeMapper(...e) {
                                const n = i(...e);
                                n && !a.includes(n) && a.push(n);
                                return n
                            }
                        }));
                    s.then(() => {
                        e && e.__localesCacheKey === Wn || Cn(e && e.__localesCacheKey || xn, JSON.stringify(a))
                    });
                    return s
                },
                setLocale({
                    locale: n,
                    langEnabled: r,
                    timezone: o
                }) {
                    re();
                    ee(o);
                    i.a.locale = i.a.manualLocale || ne(n);
                    i.a.lang = i.a.locale.split("-")[0];
                    i.a.langEnabled = !!i.a.manualLocale || r;
                    const s = i.a.langEnabled ? [i.a.locale] : [];
                    i.a.langEnabled || i.a.locale !== Z || s.push("en-us");
                    !(e && e.excludeFallback) && s.push(Z);
                    i.a.fired.ready = !0;
                    i.a.Info.resolve({
                        locale: i.a.locale,
                        langEnabled: i.a.langEnabled,
                        timezone: i.a.timezone
                    });
                    if (i.a.moment) {
                        let e = X[i.a.locale] || X[i.a.locale.split("-")[0]];
                        i.a.moment.locales().indexOf(e) < 0 && (e = Z);
                        e !== i.a.moment.locale() && i.a.moment.locale(e)
                    }
                    ie();
                    return t(s)
                }
            }, s)
        },
        Nn = e => {
            const n = On(Object.assign({}, e, {
                __localesCacheKey: Wn
            }));
            if (!e || e && !e.manuallySetLocale) {
                let e = Z;
                navigator && navigator.languages && navigator.languages[0] ? e = navigator.languages[0] : navigator && navigator.language && (e = navigator.language);
                n.setLocale({
                    locale: e,
                    langEnabled: !0
                })
            }
            return n
        },
        jn = {
            mode: "lazy",
            source: "cms-free-branding-lib/lang",
            context: {
                af: function () {
                    return t.e("cms-free-branding-lib-lang-af").then(t.bind(null, 120))
                },
                "ar-eg": function () {
                    return t.e("cms-free-branding-lib-lang-ar-eg").then(t.bind(null, 121))
                },
                bg: function () {
                    return t.e("cms-free-branding-lib-lang-bg").then(t.bind(null, 122))
                },
                bn: function () {
                    return t.e("cms-free-branding-lib-lang-bn").then(t.bind(null, 123))
                },
                "ca-es": function () {
                    return t.e("cms-free-branding-lib-lang-ca-es").then(t.bind(null, 124))
                },
                cs: function () {
                    return t.e("cms-free-branding-lib-lang-cs").then(t.bind(null, 125))
                },
                da: function () {
                    return t.e("cms-free-branding-lib-lang-da").then(t.bind(null, 126))
                },
                de: function () {
                    return t.e("cms-free-branding-lib-lang-de").then(t.bind(null, 127))
                },
                el: function () {
                    return t.e("cms-free-branding-lib-lang-el").then(t.bind(null, 128))
                },
                "en-gb": function () {
                    return t.e("cms-free-branding-lib-lang-en-gb").then(t.bind(null, 129))
                },
                en: function () {
                    return Promise.resolve().then(t.bind(null, 4))
                },
                "es-mx": function () {
                    return t.e("cms-free-branding-lib-lang-es-mx").then(t.bind(null, 130))
                },
                es: function () {
                    return t.e("cms-free-branding-lib-lang-es").then(t.bind(null, 131))
                },
                fi: function () {
                    return t.e("cms-free-branding-lib-lang-fi").then(t.bind(null, 132))
                },
                "fr-ca": function () {
                    return t.e("cms-free-branding-lib-lang-fr-ca").then(t.bind(null, 133))
                },
                fr: function () {
                    return t.e("cms-free-branding-lib-lang-fr").then(t.bind(null, 134))
                },
                "he-il": function () {
                    return t.e("cms-free-branding-lib-lang-he-il").then(t.bind(null, 135))
                },
                hr: function () {
                    return t.e("cms-free-branding-lib-lang-hr").then(t.bind(null, 136))
                },
                hu: function () {
                    return t.e("cms-free-branding-lib-lang-hu").then(t.bind(null, 137))
                },
                id: function () {
                    return t.e("cms-free-branding-lib-lang-id").then(t.bind(null, 138))
                },
                it: function () {
                    return t.e("cms-free-branding-lib-lang-it").then(t.bind(null, 139))
                },
                ja: function () {
                    return t.e("cms-free-branding-lib-lang-ja").then(t.bind(null, 140))
                },
                ko: function () {
                    return t.e("cms-free-branding-lib-lang-ko").then(t.bind(null, 141))
                },
                lt: function () {
                    return t.e("cms-free-branding-lib-lang-lt").then(t.bind(null, 142))
                },
                ms: function () {
                    return t.e("cms-free-branding-lib-lang-ms").then(t.bind(null, 143))
                },
                nl: function () {
                    return t.e("cms-free-branding-lib-lang-nl").then(t.bind(null, 144))
                },
                no: function () {
                    return t.e("cms-free-branding-lib-lang-no").then(t.bind(null, 145))
                },
                pl: function () {
                    return t.e("cms-free-branding-lib-lang-pl").then(t.bind(null, 146))
                },
                "pt-br": function () {
                    return t.e("cms-free-branding-lib-lang-pt-br").then(t.bind(null, 147))
                },
                "pt-pt": function () {
                    return t.e("cms-free-branding-lib-lang-pt-pt").then(t.bind(null, 148))
                },
                ro: function () {
                    return t.e("cms-free-branding-lib-lang-ro").then(t.bind(null, 149))
                },
                ru: function () {
                    return t.e("cms-free-branding-lib-lang-ru").then(t.bind(null, 150))
                },
                sk: function () {
                    return t.e("cms-free-branding-lib-lang-sk").then(t.bind(null, 151))
                },
                sl: function () {
                    return t.e("cms-free-branding-lib-lang-sl").then(t.bind(null, 152))
                },
                sv: function () {
                    return t.e("cms-free-branding-lib-lang-sv").then(t.bind(null, 153))
                },
                th: function () {
                    return t.e("cms-free-branding-lib-lang-th").then(t.bind(null, 154))
                },
                tl: function () {
                    return t.e("cms-free-branding-lib-lang-tl").then(t.bind(null, 155))
                },
                tr: function () {
                    return t.e("cms-free-branding-lib-lang-tr").then(t.bind(null, 156))
                },
                uk: function () {
                    return t.e("cms-free-branding-lib-lang-uk").then(t.bind(null, 157))
                },
                vi: function () {
                    return t.e("cms-free-branding-lib-lang-vi").then(t.bind(null, 158))
                },
                "zh-cn": function () {
                    return t.e("cms-free-branding-lib-lang-zh-cn").then(t.bind(null, 159))
                },
                "zh-hk": function () {
                    return t.e("cms-free-branding-lib-lang-zh-hk").then(t.bind(null, 160))
                },
                "zh-tw": function () {
                    return t.e("cms-free-branding-lib-lang-zh-tw").then(t.bind(null, 161))
                }
            }
        },
        zn = {
            mode: "sync",
            source: "I18n/lang",
            context: {
                af: function () {
                    return t(6)
                },
                "ar-eg": function () {
                    return t(7)
                },
                bg: function () {
                    return t(8)
                },
                bn: function () {
                    return t(9)
                },
                "ca-es": function () {
                    return t(10)
                },
                cs: function () {
                    return t(11)
                },
                da: function () {
                    return t(12)
                },
                de: function () {
                    return t(13)
                },
                el: function () {
                    return t(14)
                },
                "en-gb": function () {
                    return t(15)
                },
                en: function () {
                    return t(5)
                },
                "es-mx": function () {
                    return t(16)
                },
                es: function () {
                    return t(17)
                },
                fi: function () {
                    return t(18)
                },
                "fr-ca": function () {
                    return t(19)
                },
                fr: function () {
                    return t(20)
                },
                "he-il": function () {
                    return t(21)
                },
                hr: function () {
                    return t(22)
                },
                hu: function () {
                    return t(23)
                },
                id: function () {
                    return t(24)
                },
                it: function () {
                    return t(25)
                },
                ja: function () {
                    return t(26)
                },
                ko: function () {
                    return t(27)
                },
                lt: function () {
                    return t(28)
                },
                ms: function () {
                    return t(29)
                },
                nl: function () {
                    return t(30)
                },
                no: function () {
                    return t(31)
                },
                pl: function () {
                    return t(32)
                },
                "pt-br": function () {
                    return t(33)
                },
                "pt-pt": function () {
                    return t(34)
                },
                ro: function () {
                    return t(35)
                },
                ru: function () {
                    return t(36)
                },
                sk: function () {
                    return t(37)
                },
                sl: function () {
                    return t(38)
                },
                sv: function () {
                    return t(39)
                },
                th: function () {
                    return t(40)
                },
                tl: function () {
                    return t(41)
                },
                tr: function () {
                    return t(42)
                },
                uk: function () {
                    return t(43)
                },
                vi: function () {
                    return t(44)
                },
                "x-pseudo": function () {
                    return t(45)
                },
                "zh-cn": function () {
                    return t(46)
                },
                "zh-hk": function () {
                    return t(47)
                },
                "zh-tw": function () {
                    return t(48)
                }
            }
        },
        An = e => e.register(zn, {
            getLocales: te
        }),
        Bn = {
            mode: "sync",
            source: "i18n-data/data/locales",
            context: {
                bn: function () {
                    return t(51)
                },
                cs: function () {
                    return t(52)
                },
                da: function () {
                    return t(53)
                },
                de: function () {
                    return t(54)
                },
                el: function () {
                    return t(55)
                },
                "en-au": function () {
                    return t(56)
                },
                "en-ca": function () {
                    return t(57)
                },
                "en-gb": function () {
                    return t(58)
                },
                "en-ie": function () {
                    return t(59)
                },
                "en-in": function () {
                    return t(60)
                },
                "en-nz": function () {
                    return t(61)
                },
                "en-us": function () {
                    return t(62)
                },
                en: function () {
                    return t(49)
                },
                "es-ar": function () {
                    return t(63)
                },
                "es-mx": function () {
                    return t(64)
                },
                es: function () {
                    return t(65)
                },
                fi: function () {
                    return t(66)
                },
                "fr-ca": function () {
                    return t(67)
                },
                fr: function () {
                    return t(68)
                },
                "he-il": function () {
                    return t(69)
                },
                hr: function () {
                    return t(70)
                },
                hu: function () {
                    return t(71)
                },
                id: function () {
                    return t(72)
                },
                it: function () {
                    return t(73)
                },
                ja: function () {
                    return t(74)
                },
                ko: function () {
                    return t(75)
                },
                lt: function () {
                    return t(76)
                },
                ms: function () {
                    return t(77)
                },
                nl: function () {
                    return t(78)
                },
                "no-no": function () {
                    return t(79)
                },
                pl: function () {
                    return t(80)
                },
                "pt-br": function () {
                    return t(81)
                },
                ro: function () {
                    return t(82)
                },
                ru: function () {
                    return t(83)
                },
                sk: function () {
                    return t(84)
                },
                sv: function () {
                    return t(85)
                },
                th: function () {
                    return t(86)
                },
                tl: function () {
                    return t(87)
                },
                vi: function () {
                    return t(88)
                },
                "zh-cn": function () {
                    return t(89)
                },
                "zh-hk": function () {
                    return t(90)
                },
                "zh-tw": function () {
                    return t(91)
                }
            }
        },
        En = e => e.register(Bn, {
            getLocales: te
        }),
        Hn = e => Promise.all([An(e), En(e)]),
        In = t(92),
        Pn = t.n(In);
    t(94);
    i.a.moment = Pn.a;
    const Fn = /\s+(\S+)$/,
        Rn = /[A-Z]{2}\S+/,
        qn = function () {
            const e = this.toDate();
            Intl && Intl.DateTimeFormat && (i.a.intlTimeZoneFormatter = Intl.DateTimeFormat("en", {
                timeZoneName: "short"
            }));
            let n;
            if (i.a.intlTimeZoneFormatter) {
                n = i.a.intlTimeZoneFormatter.format(e).match(Fn);
                if (n && n[1]) return n[1]
            }
            n = e.toString().match(Rn);
            return n ? n[0] : ""
        };
    i.a.moment.fn.portalTz = function (...e) {
        let n;
        if (0 !== e.length) throw new Error("You cannot pass any parameters to portalTz when called on a moment instance. Did you mean to call `I18n.moment.portalTz(...)` instead?");
        n = i.a.moment.fn.tz.call(this, i.a.timezone);
        return n
    };
    i.a.moment.portalTz = function (...e) {
        let n;
        n = e.length > 0 ? i.a.moment.tz.call(this, ...e, i.a.timezone) : i.a.moment.utc().tz(i.a.timezone);
        return n
    };
    i.a.moment.userTz = function (...e) {
        let n;
        n = e.length > 0 ? i.a.moment.call(this, ...e) : i.a.moment();
        n.zoneAbbr = qn;
        return n
    };
    const Un = i.a.moment.fn.zoneAbbr;
    i.a.moment.fn.zoneAbbr = function () {
        void 0 === this._z && console.warn("I18n: Time zone abbreviations are not available on moments created with I18n.moment(). Switch to I18n.moment.userTz(), I18n.moment.portalTz(), or I18n.moment.utc(), as appropriate: https://git.hubteam.com/HubSpot/I18n/blob/master/docs/dates.md");
        return Un.call(this)
    };
    t(96), t(97), t(98), t(99), t(100), t(101), t(102), t(103), t(104), t(105), t(106), t(107), t(108), t(109), t(110), t(111), t(112), t(113), t(114), t(115), t(116), t(117);
    var Gn = e => Hn(e);
    const Vn = {
            ABUSE_MEDIUM: "abuse_medium=AbuseMediumContent",
            CONTENT_URL: "full_email_headers_or_content_url=" + encodeURIComponent(window.location.href),
            UTM_SOURCE: "utm_source=cmsf-branding",
            UTM_MEDIUM: "utm_medium=virality"
        },
        $n = `${Vn.ABUSE_MEDIUM}&${Vn.CONTENT_URL}`,
        Kn = {
            GET_CMS: `https://www.hubspot.com/products/cms/drag-and-drop-website-builder?${Vn.UTM_SOURCE}&${Vn.UTM_MEDIUM}`,
            REPORT_ABUSE: `https://policy.hubspot.com/abuse-complaints?${Vn.UTM_SOURCE}&${Vn.UTM_MEDIUM}&${$n}`
        };
    var Jn = t(118),
        Zn = t.n(Jn);
    const Qn = e => {
            "loading" !== document.readyState ? e() : document.addEventListener("DOMContentLoaded", e)
        },
        Xn = (e, n) => e.classList.contains(n) ? e.classList.remove(n) : e.classList.add(n),
        et = (e, n) => {
            const t = "true" === e.getAttribute(n);
            return e.setAttribute(n, t ? "false" : "true")
        },
        nt = (e, n) => {
            const t = document.createElement("link");
            t.href = e;
            t.rel = "stylesheet";
            n ? n.appendChild(t) : document.body.appendChild(t)
        },
        tt = e => (new DOMParser).parseFromString(e.trim(), "text/html").body.firstChild,
        rt = /\r?\n|\r/g,
        it = e => e.replace(rt, "").trim(),
        ot = e => ({
            brandingWidget: e.querySelector("#hs-cmsf-branding"),
            brandingWidgetButton: e.querySelector(".hs-cmsf-branding__button"),
            brandingWidgetDropdown: e.querySelector("#hs-cmsf-branding__dropdown")
        }),
        st = () => {
            const e = "\n    hs-cmsf-branding {\n      display: block !important;\n      visibility: visible !important;\n      opacity: 1 !important;\n    }\n  ",
                n = document.createElement("style");
            n.textContent = e;
            document.body.appendChild(n)
        },
        at = {
            getButtonLabel: () => i.a.text("cmsf-branding.buttonLabel"),
            getReportAbuseLinkText: () => i.a.text("cmsf-branding.dropdown.reportAbuse"),
            getCmsPurchaseLinkText: () => i.a.text("cmsf-branding.dropdown.getCms")
        },
        ut = (self, Object.keys, () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
            let n;
            const t = 16 * Math.random() | 0;
            n = "x" === e ? t : 3 & t | 8;
            return n.toString(16)
        })),
        dt = () => {
            window.hubspot || (window.hubspot = {});
            const e = window.hubspot;
            e.deviceId || (e.deviceId = ut());
            return e.deviceId
        };
    let lt, ct;
    ! function (e) {
        e.Crm = "crm";
        e.FbCrm = "fb-crm";
        e.Marketing = "marketing";
        e.Integrations = "integrations";
        e.Academy = "academy";
        e.Sales = "sales";
        e.Service = "service";
        e.ClassroomTraining = "classroom-training";
        e.Purchase = "purchase";
        e.AssetProvider = "asset-provider";
        e.Developers = "developers";
        e.CmsDevelopers = "cms-developers";
        e.HubspotForStartups = "hubspot-for-startups";
        e.SolutionsProvider = "solutions-provider";
        e.DirectoryListing = "directory-listing";
        e.HubspotForNonprofits = "hubspot-for-nonprofits";
        e.HubSpotPartners = "hubspot-partners";
        e.Trial = "trial";
        e.StandaloneCmsPartner = "standalone-cms-partner";
        e.CmsFree = "cms-free";
        e.Connect = "connect";
        e.AcademyEmbedded = "academy-embedded";
        e.ChatSpot = "chatspot"
    }(lt || (lt = {}));
    ! function (e) {
        e.DesignKitGenerator = "design-kit-generator";
        e.Wordpress = "wordpress";
        e.Wpforms = "wpforms";
        e.Shopify = "shopify";
        e.Typeform = "typeform"
    }(ct || (ct = {}));
    const mt = {
            url: () => "signup-hubspot/academy",
            query: () => ({})
        },
        ht = {
            url: () => "signup-hubspot/academy-embedded",
            query: () => ({})
        },
        ft = {
            url: () => "signup-hubspot/asset-provider",
            query: () => ({})
        },
        _t = {
            url: () => "signup-hubspot/classroom-training",
            query: () => ({})
        },
        pt = {
            url: () => "signup-hubspot/cms-developers",
            query: () => ({})
        },
        bt = {
            url: () => "signup-hubspot/cms-free",
            query: () => ({})
        },
        gt = {
            url: () => "signup-hubspot/connect",
            query: () => ({})
        },
        yt = {
            url: () => "signup-hubspot/chatspot",
            query: () => ({})
        },
        Mt = {
            url: () => "signup-hubspot/crm",
            query: () => ({})
        },
        vt = {
            url: () => "signup-hubspot/integrations",
            query: () => ({
                integration: "design-kit-generator"
            })
        },
        wt = {
            url: () => "signup-hubspot/developers",
            query: () => ({})
        },
        Yt = {
            url: () => "signup-hubspot/directory-listing",
            query: () => ({})
        },
        kt = {
            url: () => "signup/fb-crm",
            query: () => ({})
        },
        Tt = {
            url: () => "signup-hubspot/hubspot-for-nonprofits",
            query: () => ({})
        },
        Dt = {
            url: () => "signup-hubspot/hubspot-for-startups",
            query: () => ({})
        },
        Lt = {
            url: () => "signup-hubspot/hubspot-partners",
            query: () => ({})
        },
        St = {
            url: () => "signup-hubspot/integrations",
            query: () => ({})
        },
        Ct = {
            url: () => "signup-hubspot/marketing",
            query: () => ({})
        },
        xt = {
            url: () => "signup-hubspot/purchase",
            query: () => ({})
        },
        Wt = {
            url: () => "signup-hubspot/sales",
            query: () => ({})
        },
        Ot = {
            url: () => "signup-hubspot/service",
            query: () => ({})
        },
        Nt = {
            url: () => "signup-hubspot/integrations",
            query: () => ({
                integration: "shopify"
            })
        },
        jt = {
            url: () => "signup-hubspot/solutions-provider",
            query: () => ({})
        },
        zt = {
            url: () => "signup/standalone-cms-partner",
            query: () => ({})
        },
        At = {
            url: () => "signup-hubspot/trial",
            query: () => ({})
        },
        Bt = {
            url: () => "signup-hubspot/integrations",
            query: () => ({
                integration: "typeform"
            })
        },
        Et = {
            url: () => "signup-hubspot/integrations",
            query: () => ({
                integration: "wordpress"
            })
        },
        Ht = {
            url: () => "signup-hubspot/integrations",
            query: () => ({
                integration: "wpforms"
            })
        };
    class It {
        constructor(e) {
            this.searchParams = Object.entries(e)
        }
        toString() {
            return this.searchParams.map(([e, n]) => `${encodeURIComponent(e)}=${encodeURIComponent(n)}`).join("&")
        }
    }
    const Pt = () => URLSearchParams || It;
    class Ft {
        static create(e, n) {
            return new Ft(e, n)
        }
        constructor(e, n) {
            this.anchor = e;
            this.generator = n;
            this.process()
        }
        getSignupType() {
            const e = this.anchor.dataset.signupType;
            if (!e || !this.generator.isValidSignupType(e)) {
                this.generator.log("Anchor %o contains an invalid signup type %s. Default to " + lt.Crm, this.anchor, e);
                return lt.Crm
            }
            return e
        }
        getSignupQuery() {
            const e = this.anchor.dataset.signupQuery;
            return e ? e.split("&").reduce((e, n) => {
                const t = n.split("=");
                e[decodeURIComponent(t[0])] = decodeURIComponent(t[1]);
                return e
            }, {}) : {}
        }
        process() {
            if (!this.anchor.dataset.processed) {
                this.anchor.setAttribute("href", this.generator.getSignupUrl(this.getSignupType(), this.getSignupQuery()));
                this.anchor.dataset.processed = ""
            }
        }
    }
    const Rt = {
        debug: !1
    };
    class qt {
        static setConfig(e) {
            qt.config = Object.assign({}, Rt, {}, e)
        }
        static getInstance() {
            if (!qt.instance) {
                qt.instance = new qt;
                qt.instance.bootstrap()
            }
            return qt.instance
        }
        constructor(e = lt.Crm, n = {
            query: {},
            env: "prod"
        }) {
            this.decorators = {
                [lt.Academy]: mt,
                [lt.AcademyEmbedded]: ht,
                [lt.AssetProvider]: ft,
                [lt.ClassroomTraining]: _t,
                [lt.CmsDevelopers]: pt,
                [lt.CmsFree]: bt,
                [lt.Connect]: gt,
                [lt.ChatSpot]: yt,
                [lt.Crm]: Mt,
                [ct.DesignKitGenerator]: vt,
                [lt.Developers]: wt,
                [lt.DirectoryListing]: Yt,
                [lt.HubspotForNonprofits]: Tt,
                [lt.HubspotForStartups]: Dt,
                [lt.HubSpotPartners]: Lt,
                [lt.Integrations]: St,
                [lt.Marketing]: Ct,
                [lt.Purchase]: xt,
                [lt.Sales]: Wt,
                [lt.Service]: Ot,
                [lt.StandaloneCmsPartner]: zt,
                [lt.FbCrm]: kt,
                [lt.SolutionsProvider]: jt,
                [lt.Trial]: At,
                [ct.Wordpress]: Et,
                [ct.Wpforms]: Ht,
                [ct.Shopify]: Nt,
                [ct.Typeform]: Bt
            };
            this.processed = !1;
            this.validSignupTypes = [...Object.values(lt), ...Object.values(ct)];
            this.flowOrIntegration = e;
            this.options = n
        }
        isValidSignupType(e) {
            return this.validSignupTypes.includes(e)
        }
        getSignupUrl(e = this.flowOrIntegration, n = this.options.query) {
            const t = `https://app.${"qa"===this.options.env?"hubspotqa":"hubspot"}.com`;
            let r = t + "/signup-hubspot";
            if (e && this.isValidSignupType(e)) {
                r = `${t}/signup/${e}`;
                if (e in this.decorators) {
                    const i = this.decorators[e];
                    r = `${t}/${i.url()}`;
                    n = Object.assign({}, n, {}, i.query())
                }
            }
            const i = new(Pt())(n).toString();
            return `${r}${i&&"?"+i||""}`
        }
        log(e, ...n) {
            qt.config.debug && console.info("[SignupUrlGenerator] " + e, ...n)
        }
        createAnchor(e) {
            return Ft.create(e, this)
        }
        getAnchors() {
            return document.querySelectorAll(qt.ANCHOR_SELECTOR)
        }
        processAnchors() {
            this.processed || this.getAnchors().forEach(e => {
                this.createAnchor(e)
            });
            this.processed = !0
        }
        getUrl() {
            return this.getSignupUrl()
        }
        bootstrap() {
            window.addEventListener("DOMContentLoaded", () => {
                this.processAnchors()
            })
        }
    }
    qt.ANCHOR_SELECTOR = "a[data-signup-type]";
    qt.instance = null;
    qt.config = Rt;

    function Ut(e = f.isQa()) {
        return `https://api.hubspot${e?"qa":""}.com`
    }

    function Gt(e, n) {
        const t = new URL(e);
        Object.keys(n).forEach(e => {
            t.searchParams.set(e, n[e])
        });
        return t.toString()
    }

    function Vt(e, n, t, r) {
        return Gt(e, Object.assign({
            uuid: t,
            utm_medium: "virality",
            utm_campaign: `hubspot-${n}-virality`,
            use_uuid: "1"
        }, r))
    }

    function $t({
        viralLinkType: e,
        deviceId: n,
        portalId: t,
        environment: r = f.getShort(),
        redirectPage: i
    }) {
        const o = {
            u: i,
            deviceId: n,
            viralLinkType: e
        };
        t && (o.hubId = t.toString());
        return Gt(Ut("qa" === r) + "/viral-links/v1/click-tracking", o)
    }

    function Kt({
        viralLinkType: e,
        additionalParams: n,
        portalId: t,
        environment: r,
        redirectPage: i
    }) {
        const o = dt();
        return $t({
            viralLinkType: e,
            portalId: t,
            deviceId: o,
            environment: r,
            redirectPage: Vt(i, e, o, n)
        })
    }

    function Jt() {
        return window.hsVars
    }

    function Zt() {
        const e = Jt();
        return e && "number" == typeof e.portal_id ? e.portal_id : void 0
    }

    function Qt() {
        const e = Jt();
        return e && "string" == typeof e.app_hs_base_url ? e.app_hs_base_url.includes("hubspotqa.com") ? "qa" : "prod" : void 0
    }
    const Xt = () => {
            const e = window.hsVars;
            return !e || (!!(e.app_hs_base_url && e.app_hs_base_url.indexOf("hubspotqa.com") > -1) || !!(e.cp_hs_base_url && e.cp_hs_base_url.indexOf("hubspotqa.com") > -1))
        },
        er = () => {
            const e = document.createElement("img");
            e.setAttribute("style", "display: none!important;");
            const n = "builder",
                t = "deviceId=" + dt(),
                r = `https://api.hubspot${Xt()?"qa":""}.com/viral-links/v1/tracking?${t}&viralLinkType=${n}`;
            e.setAttribute("src", r);
            return e.outerHTML
        },
        nr = e => Kt({
            redirectPage: e,
            viralLinkType: "builder",
            portalId: Zt(),
            environment: Qt()
        }),
        tr = "\n  color: #000 !important;\n  display: flex !important;\n  font-family: 'helvetica neue', helvetica, 'arial sans' !important;\n  font-size: 12px !important;\n  font-weight: 500 !important;\n  height: auto !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n  width: auto !important;\n  z-index: 999997 !important;\n",
        rr = `\n  all: initial !important;\n  ${tr}\n  animation: none !important;\n  bottom: 12px !important;\n  height: 30px !important;\n  left: 12px !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  position: fixed !important;\n`,
        ir = `\n  <img\n    class="hs-cmsf-branding__icon"\n    alt="HubSpot sprocket logo"\n    src="${Zn.a}"\n  />\n`,
        or = () => `<button\n    aria-haspopup="true"\n    aria-expanded="false"\n    aria-labelledby="hs-cmsf-branding__label"\n    aria-owns="hs-cmsf-branding__dropdown"\n    class="hs-cmsf-branding__button"\n    style="${it(tr)}"\n  >\n    ${ir}\n    <label id="hs-cmsf-branding__label" class="hs-cmsf-branding__label">\n      ${at.getButtonLabel()}\n    </label>\n  </button>\n`,
        sr = () => `\n  <div\n    id="hs-cmsf-branding__dropdown"\n    class="hs-cmsf-branding__dropdown hs-cmsf-branding__dropdown--collapsed"\n    role="presentation"\n  >\n    <ul class="hs-cmsf-branding__dropdown-list">\n      <li class="hs-cmsf-branding__dropdown-item">\n        <a class="hs-cmsf-branding__dropdown-link"\n          href="${Kn.REPORT_ABUSE}"\n          target="_blank"\n          rel="noopener nofollow">\n            ${at.getReportAbuseLinkText()}\n        </a>\n      </li>\n      <li class="hs-cmsf-branding__dropdown-item">\n        <a class="hs-cmsf-branding__dropdown-link"\n        data-test-id="viral-link"\n        href="${nr(Kn.GET_CMS)}"\n          target="_blank"\n          rel="noopener nofollow">\n            ${at.getCmsPurchaseLinkText()}\n        </a>\n        ${er()}\n      </li>\n    </ul>\n  </div>\n`,
        ar = () => `\n  <div id="hs-cmsf-branding" class="hs-cmsf-branding" style="${it(rr)}">\n    ${sr()}\n    ${or()}\n  </div>\n`,
        ur = () => {
            const e = ar();
            return tt(e)
        };
    var dr = t(119),
        lr = t.n(dr);
    const cr = "hs-cmsf-branding__dropdown--collapsed",
        mr = e => {
            window.customElements.define("hs-cmsf-branding", class extends HTMLElement {
                constructor() {
                    super();
                    this.toggleWidget = ({
                        target: e
                    }) => {
                        if (!(e instanceof HTMLElement)) return;
                        const {
                            brandingWidgetDropdown: n,
                            brandingWidgetButton: t
                        } = this;
                        if (n && t)
                            if (this.contains(e)) {
                                Xn(n, cr);
                                et(t, "aria-expanded")
                            } else {
                                n.classList.add(cr);
                                t.setAttribute("aria-expanded", "false")
                            }
                    };
                    this.root = this.attachShadow({
                        mode: "closed"
                    });
                    this.brandingWidget = null;
                    this.brandingWidgetButton = null;
                    this.brandingWidgetDropdown = null;
                    nt(lr.a, this.root)
                }
                static get observedAttributes() {
                    return ["style", "class"]
                }
                connectedCallback() {
                    const n = this.root;
                    n.appendChild(e);
                    const {
                        brandingWidget: t,
                        brandingWidgetButton: r,
                        brandingWidgetDropdown: i
                    } = ot(n);
                    this.brandingWidget = t;
                    this.brandingWidgetButton = r;
                    this.brandingWidgetDropdown = i;
                    this.brandingWidget && this.brandingWidgetButton && this.brandingWidgetDropdown && document.addEventListener("click", this.toggleWidget)
                }
                attributeChangedCallback(e) {
                    "class" === e && this.getAttribute("class") && this.removeAttribute("class");
                    "style" === e && this.getAttribute("style") && this.removeAttribute("style")
                }
                disconnectedCallback() {
                    document.body.appendChild(this)
                }
            });
            const n = tt("<hs-cmsf-branding></hs-cmsf-branding>");
            document.body.appendChild(n);
            st()
        },
        hr = e => {
            const {
                brandingWidget: n,
                brandingWidgetButton: t,
                brandingWidgetDropdown: r
            } = ot(e);
            n && t && r && document.addEventListener("click", ({
                target: e
            }) => {
                if (e instanceof HTMLElement)
                    if (n.contains(e)) {
                        Xn(r, cr);
                        et(t, "aria-expanded")
                    } else {
                        r.classList.add(cr);
                        t.setAttribute("aria-expanded", "false")
                    }
            })
        },
        fr = () => {
            const e = ur();
            if ("customElements" in window) mr(e);
            else {
                nt(lr.a);
                document.body.appendChild(e);
                hr(document)
            }
        },
        _r = () => {
            window.hsInEditor || fr()
        },
        pr = Nn();
    Promise.all([pr.register(jn), Gn(pr)]).then(() => Qn(_r))
}]);
//# sourceMappingURL=index.js.map