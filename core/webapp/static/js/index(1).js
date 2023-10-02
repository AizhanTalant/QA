! function (e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var s = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        e[o].call(s.exports, s, s.exports, n);
        s.l = !0;
        return s.exports
    }
    n.m = e;
    n.c = t;
    n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    };
    n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    n.t = function (e, t) {
        1 & t && (e = n(e));
        if (8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        n.r(o);
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        });
        if (2 & t && "string" != typeof e)
            for (var s in e) n.d(o, s, function (t) {
                return e[t]
            }.bind(null, s));
        return o
    };
    n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        n.d(t, "a", t);
        return t
    };
    n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    n.p = "//static.hsappstatic.net/HubspotToolsMenu/static-1.191/";
    n(n.s = 3)
}([function (e, t) {
    e.exports = "//static.hsappstatic.net/HubspotToolsMenu/static-1.191/js/sprocket_white.svg"
}, function (e, t) {
    e.exports = "//static.hsappstatic.net/HubspotToolsMenu/static-1.191/js/sprocket_orange.svg"
}, function (e, t) {
    e.exports = "//static.hsappstatic.net/HubspotToolsMenu/static-1.191/css/toolsmenu.css"
}, function (e, t, n) {
    "use strict";
    n.r(t);
    const o = "HS_SPROCKET_MENU_LOCAL_OVERRIDE",
        s = "https://local.hsappstatic.net/HubspotToolsMenu/static/js/index.js",
        i = () => Array.from(document.body.getElementsByTagName("script")).some(e => e.src === s),
        r = () => !(!window.localStorage.getItem(o) && 1) && !i(),
        a = () => {
            const e = document.createElement("script");
            e.src = s;
            e.onload = () => {
                setTimeout(() => {
                    const e = new Event("DOMContentLoaded");
                    document.dispatchEvent(e)
                }, 100)
            };
            document.body.appendChild(e)
        };
    r() && a();
    var l = n(0),
        c = n.n(l),
        d = n(1),
        p = n.n(d),
        h = n(2),
        u = n.n(h);
    class m {
        constructor(e) {
            this.baseUrl = this.getHsBaseUrl(e.app_hs_base_url);
            this.cpBaseUrl = this.getHsBaseUrl(e.cp_hs_base_url);
            this.contentId = e.dynamic_page_id && "0" !== e.dynamic_page_id && "null" !== e.dynamic_page_id ? e.dynamic_page_id : e.page_id;
            this.categoryId = e.category_id;
            this.contentGroupId = e.content_group_id;
            this.portalId = e.portal_id;
            this.environments = {
                PRODUCTION: 1,
                STAGING: 2
            };
            this.isCustomerPortal = !0 === e.is_customer_portal;
            this.cmsEnvironment = this.getCmsEnvironmentFromCookie();
            this.permissionObj = {}
        }
        getHsBaseUrl(e) {
            return window.localStorage.getItem("HS_LOCAL_TESTING") ? e.replace(/[^/](\w+?)(?=\.)/, "local") : e
        }
        createElementFromHTML(e) {
            const t = document.createElement("div");
            t.innerHTML = e.trim();
            return t.firstChild
        }
        jsonp(e, t) {
            window.jsonpHandler = e => {
                t(e)
            };
            const n = `${e}${-1!==e.indexOf("?")?"&":"?"}callback=jsonpHandler`,
                o = document.createElement("script");
            o.type = "text/javascript";
            o.referrerPolicy = "no-referrer-when-downgrade";
            o.async = !0;
            o.src = n;
            document.getElementsByTagName("head")[0].appendChild(o)
        }
        httpGet(e, t) {
            const n = new XMLHttpRequest;
            n.withCredentials = !0;
            n.onreadystatechange = function () {
                4 === this.readyState && 200 === this.status && t(JSON.parse(this.responseText))
            };
            n.open("GET", e, !0);
            n.send()
        }
        showToolsMenuIfAuthor() {
            let e, t = this.contentId,
                n = !1;
            if (this.isCustomerPortal) e = "customer-portal";
            else if (window.location.pathname.endsWith("_hcms/mem/login")) e = "content-membership";
            else if (this.contentId && this.contentGroupId) e = 7 === this.categoryId ? "blog-listing-pages" : 6 === this.categoryId ? "knowledge-articles" : "blog-posts";
            else if (this.contentGroupId) {
                e = 6 === this.categoryId ? "knowledge-bases" : "blogs";
                t = this.contentGroupId
            } else {
                n = !0;
                e = "landing-pages"
            }
            const o = `${this.baseUrl}/content-tools-menu/api/v1/tools-menu/has-permission?portalId=${this.portalId}`;
            this.jsonp(o, o => {
                if (o.has_permission) {
                    const o = `${this.cpBaseUrl}/content-tools-menu/api/v1/tools-menu/permissions?portalId=${this.portalId}`;
                    this.httpGet(o, o => {
                        this.permissionObj = o;
                        this.setUpLocalDevUrl();
                        "content-membership" === e ? this.getContentMembershipCookie(e, this.portalId) : this.getAppLinks(e, t, this.portalId);
                        n && this.setupDeferredPrefetchingOfEditorAssets(e)
                    })
                }
            })
        }
        getContentMembershipCookie(e, t) {
            this.jsonp(`${this.baseUrl}/content-tools-menu/api/v1/content/validate-hubspot-user?redirect_url=${window.location.href}&portalId=${t}`, e => {
                if (e && e.verified) {
                    const t = this.getUrlParameter("redirect_url");
                    window.location.href = t || e.redirectUrl || window.location.origin
                }
            })
        }
        getAppLinks(e, t, n) {
            this.jsonp(`${this.baseUrl}/content-tools-menu/api/v1/tools-menu/${e}/${t}/actions?portalId=${n}`, e => {
                e.actions && e.strings && this.showAppLinks(e.actions, e.strings)
            })
        }
        setUpLocalDevUrl() {
            this.localDevPromise = new Promise((e, t) => {
                if (!this.permissionObj.permissions.includes("CAN_OPEN_LOCAL_DEVELOPMENT")) return e(!1);
                let n = window.location.hostname,
                    o = window.location.pathname;
                const s = window.location.search;
                s && s.slice("1").split("&").forEach(e => {
                    if (e.indexOf("hsDebugOverridePublicHost") > -1) {
                        n = e.split("=")[1];
                        o = o.replace("/cos-rendering/v1/public", "")
                    }
                });
                const i = {
                        hostName: n,
                        pathName: o,
                        protocol: window.location.protocol,
                        contentId: this.contentId,
                        portalId: this.portalId
                    },
                    r = Object.keys(i).map(e => `${e}=${i[e]}`).join("&");
                return fetch("http://localhost:1442/check-if-local-dev-server?" + r).then(e => {
                    if (!e.ok) throw e.statusText;
                    return e.json()
                }).then(t => {
                    e(t)
                }).catch(n => {
                    "Failed to fetch" === n.message ? e(!1) : t(n)
                })
            })
        }
        showAppLinks(e, t) {
            const n = [].slice.call(document.querySelectorAll("[data-menu-id]")).filter(e => !!e.getAttribute("data-menu-id").trim()),
                o = n.length > 0 ? n[0] : null;
            if (null !== o) {
                const n = o.getAttribute("data-menu-id").trim();
                e.push([t.EDIT_NAVIGATION_MENU, `${this.baseUrl}/menus/${this.portalId}/edit/${n}`])
            }
            const s = (n = !1) => {
                let o = "";
                n && e.push(["Open Local Dev Server", n.localProxyUrl]);
                this.permissionObj.permissions.includes("CAN_OPEN_LOCAL_DEVELOPMENT") && (o += '\n          <li><span class="js-rendering-enabled">JS Rendering Enabled</span></li>\n        ');
                e.forEach(e => {
                    o += `        <li><a target='_blank' href='${e[1]}'>\n        ${e[0]}\n        </a></li>      `
                });
                if (this.permissionObj.permissions.includes("CAN_PREVIEW_ENVIRONMENTS")) {
                    o += `        <li><a class="hs-environment-buffer-on">${t.VIEW_BUFFER}</a></li>        <li><a class="hs-environment-buffer-off">${t.VIEW_HARD}</a></li>      `;
                    o += `        <li><a class="hs-environment-staging">${t.VIEW_STAGING}</a></li>        <li><a class="hs-environment-production">${t.VIEW_PRODUCTION}</a></li>      `
                }
                const s = `<link rel="stylesheet" href="${u.a}" />`,
                    i = `\n      <div role="button" class="hs-tools-menu hs-collapsed" aria-expanded="false">\n        <img class="hs-sprocket" alt="${t.MENU_ICON_ALT_TEXT}" src="${c.a}" />\n        <div class="hs-dropdown">\n          <div class="hs-title">${t.MENU_TITLE}</div>\n          <ul>\n            ${o}\n            <li>\n              <a role="button" href="#hide-menu" class="hs-menu-hider">${t.HIDE_THIS_MENU}</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    `;
                document.body.appendChild(this.createElementFromHTML(s));
                document.body.appendChild(this.createElementFromHTML(i));
                this.registerEvents()
            };
            this.localDevPromise.then(s).catch(e => {
                console.error("Unable to render local dev action in Sprocket Menu");
                console.error(e);
                s()
            })
        }
        registerEvents() {
            const e = document.querySelector(".hs-tools-menu");
            this.registerDropdown(e);
            e.querySelector(".hs-menu-hider").addEventListener("click", t => {
                t.preventDefault();
                t.stopPropagation();
                e.style.display = "none"
            });
            const t = e.querySelector(".hs-environment-buffer-on");
            t && (this.cmsEnvironment.buffer ? t.parentElement.removeChild(t) : t.addEventListener("click", e => {
                e.preventDefault();
                e.stopPropagation();
                this.requestAndSetEnvironmentCookie(this.portalId, !0, this.cmsEnvironment.environmentId)
            }));
            const n = e.querySelector(".hs-environment-buffer-off");
            n && (this.cmsEnvironment.buffer ? n.addEventListener("click", e => {
                e.preventDefault();
                e.stopPropagation();
                this.requestAndSetEnvironmentCookie(this.portalId, !1, this.cmsEnvironment.environmentId)
            }) : n.parentElement.removeChild(n));
            const o = e.querySelector(".hs-environment-staging");
            o && (this.cmsEnvironment.environmentId !== this.environments.STAGING ? o.addEventListener("click", e => {
                e.preventDefault();
                e.stopPropagation();
                this.requestAndSetEnvironmentCookie(this.portalId, this.cmsEnvironment.buffer, this.environments.STAGING)
            }) : o.parentElement.removeChild(o));
            const s = e.querySelector(".hs-environment-production");
            s && (this.cmsEnvironment.environmentId !== this.environments.PRODUCTION ? s.addEventListener("click", e => {
                e.preventDefault();
                e.stopPropagation();
                this.requestAndSetEnvironmentCookie(this.portalId, this.cmsEnvironment.buffer, this.environments.PRODUCTION)
            }) : s.parentElement.removeChild(s))
        }
        requestAndSetEnvironmentCookie(e, t, n) {
            const o = `${this.cpBaseUrl}/content-tools-menu/api/v1/tools-menu/environment-cookie?portalId=${e}&environmentId=${n}&buffer=${t}`;
            this.httpGet(o, e => {
                document.cookie = "hs_cms_environment=" + btoa(JSON.stringify(e));
                window.location.reload()
            })
        }
        registerDropdown(e) {
            const t = Array.from(e.children).find(e => e.classList.contains("hs-sprocket")),
                n = () => {
                    e.classList.add("hs-collapsed");
                    e.setAttribute("aria-expanded", !1);
                    t.setAttribute("src", c.a)
                },
                o = () => {
                    e.classList.remove("hs-collapsed");
                    e.setAttribute("aria-expanded", !0);
                    t.setAttribute("src", p.a)
                },
                s = () => {
                    n();
                    document.body.removeEventListener("click", s)
                },
                i = t => {
                    if (!t.target.getAttribute("href")) {
                        t.preventDefault();
                        t.stopPropagation();
                        if (e.classList.contains("hs-collapsed")) {
                            o();
                            document.body.addEventListener("click", s)
                        } else {
                            n();
                            document.body.removeEventListener("click", s)
                        }
                    }
                };
            e.addEventListener("click", i, !1)
        }
        getUrlParameter(e) {
            e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
            const t = new RegExp(`[\\?&]${e}=([^&#]*)`).exec(location.search);
            return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
        }
        getCmsEnvironmentFromCookie() {
            const e = this.getCookie("hs_cms_environment");
            return e ? JSON.parse(atob(e)) : {
                portalId: 0,
                environmentId: this.environments.PRODUCTION,
                buffer: !1,
                createdAt: 0
            }
        }
        getCookie(e) {
            const t = e + "=",
                n = document.cookie.split(";");
            for (let e = 0; e < n.length; e++) {
                let o = n[e];
                for (;
                    " " === o.charAt(0);) o = o.substring(1);
                if (0 === o.indexOf(t)) return o.substring(t.length, o.length)
            }
            return ""
        }
        setupDeferredPrefetchingOfEditorAssets(e) {
            window.addEventListener("load", () => {
                setTimeout(() => {
                    let t;
                    if ("landing-pages" !== e) return;
                    t = "content/editor/prefetcher.js";
                    const n = document.createElement("script");
                    n.src = `${this.baseUrl}/${t}`;
                    document.head.appendChild(n)
                }, 2e3)
            })
        }
    }
    class f {
        constructor() {
            this.getShowAllFiltersLinkEventHandler = e => t => {
                const {
                    previousElementSibling: {
                        children: n
                    }
                } = e;
                n && [].slice.call(n, 0).forEach(e => {
                    e.style.display = "block"
                });
                e.style.display = "none";
                t.preventDefault();
                t.stopPropagation()
            }
        }
        setup() {
            [].slice.call(document.querySelectorAll(".filter-expand-link"), 0).forEach(e => {
                e.addEventListener("click", this.getShowAllFiltersLinkEventHandler(e))
            })
        }
    }
    const v = () => {
        const e = window.location,
            {
                port: t,
                hostname: n,
                pathname: o
            } = e,
            s = e !== window.parent.location,
            i = o.includes("_hcms/preview/template"),
            a = "" !== t || n.includes("hslocal.net") || n.includes("localhost");
        return !(s || i || r() || a)
    };
    ! function () {
        if (window.document.documentMode) return;
        const e = () => {
            if (!window.hsVars || !window.hsVars.portal_id) return;
            new m(window.hsVars).showToolsMenuIfAuthor();
            (new f).setup()
        };
        v() && ("loading" === document.readyState ? document.addEventListener("DOMContentLoaded", (function t() {
            e();
            document.removeEventListener("DOMContentLoaded", t)
        }), !1) : e())
    }()
}]);
//# sourceMappingURL=index.js.map