var PageTransitions = function(a, e) {
    "use strict";
    function t(e) {
        a(".animated-section").each(function() {
            var e = a(this);
            e.data("originalClassList", e.attr("class"))
        }),
        d.each(function() {
            "" === location.hash && a("section[data-id=" + c + "]").addClass("section-active")
        }),
        a(".headerBar-a").on("click", function(e) {
            if (e.preventDefault(),
            r)
                return !1;
            var t = a(this);
            n(t),
            s(t),
            location.hash = a(this).attr("href")
        }),
        window.onhashchange = function(e) {
            if (location.hash) {
                if (r)
                    return !1;
                var o = a(t + ' a[href*="' + location.hash.split("/")[0] + '"]');
                n(o),
                s(o),
                i()
            }
        }
        ;
        var t = e.menu
          , c = o();
        location.hash = c;
        var m = a(t + ' a[href*="' + location.hash.split("/")[0] + '"]');
        n(m),
        s(m),
        a("body").append('<div id="page-ajax-loaded" class="page-ajax-loaded animated animated-section-moveFromLeft"></div>'),
        i(),
        a(".lmpixels-arrow-right").click(function() {
            var e = a(".main-menu a.active").parent("li");
            e.next("li").children("a").click(),
            e.is(":last-child") && a(".main-menu li:first-child").children("a").click()
        }),
        a(".lmpixels-arrow-left").click(function() {
            var e = a(".main-menu a.active").parent("li");
            e.prev("li").children("a").click(),
            e.is(":first-child") && a(".main-menu li:last-child").children("a").click()
        })
    }
    function o() {
        return "" === location.hash ? location.hash = a("section.animated-section").first().attr("data-id") : location.hash
    }
    function n(e) {
        if (!e)
            return !1;
        var t = a(e);
        t = t[0],
        t = a(t),
        t && (a("ul.main-menu a").removeClass("active"),
        t.addClass("active"))
    }
    function i() {
        function e() {
            o.removeClass("animated-section-moveToRight closed"),
            o.show(),
            a("body").addClass("ajax-page-visible")
        }
        function t() {
            a("#page-ajax-loaded").addClass("animated-section-moveToRight closed"),
            a("body").removeClass("ajax-page-visible"),
            setTimeout(function() {
                a("#page-ajax-loaded.closed").html(""),
                o.hide()
            }, 500)
        }
        var o = a("#page-ajax-loaded")
          , n = a(".ajax-page-load").each(function() {
            if (n = a(this).attr("href"),
            location.hash == location.hash.split("/")[0] + "/" + n.substr(0, n.length - 5)) {
                var t = a(this).attr("href");
                return e(),
                o.load(t),
                !1
            }
        });
        a(document).on("click", ".main-menu, #ajax-page-close-button", function(a) {
            a.preventDefault(),
            t(),
            location.hash = location.hash.split("/")[0]
        }).on("click", ".ajax-page-load", function() {
            var t = location.hash.split("/")[0] + "/" + a(this).attr("href").substr(0, a(this).attr("href").length - 5);
            return location.hash = t,
            e(),
            !1
        })
    }
    function s(e, t) {
        if (!e.attr("data-animation")) {
            var o = parseInt(Math.floor(67 * Math.random()) + 1);
            e.data("animation", o)
        }
        var t, n, i, s, m = e.data("animation").toString();
        if (-1 != m.indexOf("-")) {
            var h = m.split("-");
            s = parseInt(h[Math.floor(Math.random() * h.length)])
        } else
            s = parseInt(m);
        if (s > 67)
            return alert("Transition.js : Invalid 'data-animation' attribute configuration. Animation number should not be greater than 67"),
            !1;
        switch (s) {
        case 1:
            n = "animated-section-moveFromRight",
            i = "animated-section-moveToLeft";
            break;
        case 2:
            n = "animated-section-moveFromLeft",
            i = "animated-section-moveToRight";
            break;
        case 3:
            n = "animated-section-moveFromBottom",
            i = "animated-section-moveToTop";
            break;
        case 4:
            n = "animated-section-moveFromTop",
            i = "animated-section-moveToBottom";
            break;
        case 5:
            n = "animated-section-moveFromRight animated-section-ontop",
            i = "animated-section-fade";
            break;
        case 6:
            n = "animated-section-moveFromLeft animated-section-ontop",
            i = "animated-section-fade";
            break;
        case 7:
            n = "animated-section-moveFromBottom animated-section-ontop",
            i = "animated-section-fade";
            break;
        case 8:
            n = "animated-section-moveFromTop animated-section-ontop",
            i = "animated-section-fade";
            break;
        case 9:
            n = "animated-section-moveFromRightFade",
            i = "animated-section-moveToLeftFade";
            break;
        case 10:
            n = "animated-section-moveFromLeftFade",
            i = "animated-section-moveToRightFade";
            break;
        case 11:
            n = "animated-section-moveFromBottomFade",
            i = "animated-section-moveToTopFade";
            break;
        case 12:
            n = "animated-section-moveFromTopFade",
            i = "animated-section-moveToBottomFade";
            break;
        case 13:
            n = "animated-section-moveFromRight",
            i = "animated-section-moveToLeftEasing animated-section-ontop";
            break;
        case 14:
            n = "animated-section-moveFromLeft",
            i = "animated-section-moveToRightEasing animated-section-ontop";
            break;
        case 15:
            n = "animated-section-moveFromBottom",
            i = "animated-section-moveToTopEasing animated-section-ontop";
            break;
        case 16:
            n = "animated-section-moveFromTop",
            i = "animated-section-moveToBottomEasing animated-section-ontop";
            break;
        case 17:
            n = "animated-section-moveFromRight animated-section-ontop",
            i = "animated-section-scaleDown";
            break;
        case 18:
            n = "animated-section-moveFromLeft animated-section-ontop",
            i = "animated-section-scaleDown";
            break;
        case 19:
            n = "animated-section-moveFromBottom animated-section-ontop",
            i = "animated-section-scaleDown";
            break;
        case 20:
            n = "animated-section-moveFromTop animated-section-ontop",
            i = "animated-section-scaleDown";
            break;
        case 21:
            n = "animated-section-scaleUpDown animated-section-delay300",
            i = "animated-section-scaleDown";
            break;
        case 22:
            n = "animated-section-scaleUp animated-section-delay300",
            i = "animated-section-scaleDownUp";
            break;
        case 23:
            n = "animated-section-scaleUp",
            i = "animated-section-moveToLeft animated-section-ontop";
            break;
        case 24:
            n = "animated-section-scaleUp",
            i = "animated-section-moveToRight animated-section-ontop";
            break;
        case 25:
            n = "animated-section-scaleUp",
            i = "animated-section-moveToTop animated-section-ontop";
            break;
        case 26:
            n = "animated-section-scaleUp",
            i = "animated-section-moveToBottom animated-section-ontop";
            break;
        case 27:
            n = "animated-section-scaleUpCenter animated-section-delay400",
            i = "animated-section-scaleDownCenter";
            break;
        case 28:
            n = "animated-section-moveFromRight animated-section-delay200 animated-section-ontop",
            i = "animated-section-rotateRightSideFirst";
            break;
        case 29:
            n = "animated-section-moveFromLeft animated-section-delay200 animated-section-ontop",
            i = "animated-section-rotateLeftSideFirst";
            break;
        case 30:
            n = "animated-section-moveFromTop animated-section-delay200 animated-section-ontop",
            i = "animated-section-rotateTopSideFirst";
            break;
        case 31:
            n = "animated-section-moveFromBottom animated-section-delay200 animated-section-ontop",
            i = "animated-section-rotateBottomSideFirst";
            break;
        case 32:
            n = "animated-section-flipInLeft animated-section-delay500",
            i = "animated-section-flipOutRight";
            break;
        case 33:
            n = "animated-section-flipInRight animated-section-delay500",
            i = "animated-section-flipOutLeft";
            break;
        case 34:
            n = "animated-section-flipInBottom animated-section-delay500",
            i = "animated-section-flipOutTop";
            break;
        case 35:
            n = "animated-section-flipInTop animated-section-delay500",
            i = "animated-section-flipOutBottom";
            break;
        case 36:
            n = "animated-section-scaleUp",
            i = "animated-section-rotateFall animated-section-ontop";
            break;
        case 37:
            n = "animated-section-rotateInNewspaper animated-section-delay500",
            i = "animated-section-rotateOutNewspaper";
            break;
        case 38:
            n = "animated-section-moveFromRight",
            i = "animated-section-rotatePushLeft";
            break;
        case 39:
            n = "animated-section-moveFromLeft",
            i = "animated-section-rotatePushRight";
            break;
        case 40:
            n = "animated-section-moveFromBottom",
            i = "animated-section-rotatePushTop";
            break;
        case 41:
            n = "animated-section-moveFromTop",
            i = "animated-section-rotatePushBottom";
            break;
        case 42:
            n = "animated-section-rotatePullRight animated-section-delay180",
            i = "animated-section-rotatePushLeft";
            break;
        case 43:
            n = "animated-section-rotatePullLeft animated-section-delay180",
            i = "animated-section-rotatePushRight";
            break;
        case 44:
            n = "animated-section-rotatePullBottom animated-section-delay180",
            i = "animated-section-rotatePushTop";
            break;
        case 45:
            n = "animated-section-rotatePullTop animated-section-delay180",
            i = "animated-section-rotatePushBottom";
            break;
        case 46:
            n = "animated-section-moveFromRightFade",
            i = "animated-section-rotateFoldLeft";
            break;
        case 47:
            n = "animated-section-moveFromLeftFade",
            i = "animated-section-rotateFoldRight";
            break;
        case 48:
            n = "animated-section-moveFromBottomFade",
            i = "animated-section-rotateFoldTop";
            break;
        case 49:
            n = "animated-section-moveFromTopFade",
            i = "animated-section-rotateFoldBottom";
            break;
        case 50:
            n = "animated-section-rotateUnfoldLeft",
            i = "animated-section-moveToRightFade";
            break;
        case 51:
            n = "animated-section-rotateUnfoldRight",
            i = "animated-section-moveToLeftFade";
            break;
        case 52:
            n = "animated-section-rotateUnfoldTop",
            i = "animated-section-moveToBottomFade";
            break;
        case 53:
            n = "animated-section-rotateUnfoldBottom",
            i = "animated-section-moveToTopFade";
            break;
        case 54:
            n = "animated-section-rotateRoomLeftIn",
            i = "animated-section-rotateRoomLeftOut animated-section-ontop";
            break;
        case 55:
            n = "animated-section-rotateRoomRightIn",
            i = "animated-section-rotateRoomRightOut animated-section-ontop";
            break;
        case 56:
            n = "animated-section-rotateRoomTopIn",
            i = "animated-section-rotateRoomTopOut animated-section-ontop";
            break;
        case 57:
            n = "animated-section-rotateRoomBottomIn",
            i = "animated-section-rotateRoomBottomOut animated-section-ontop";
            break;
        case 58:
            n = "animated-section-rotateCubeLeftIn",
            i = "animated-section-rotateCubeLeftOut animated-section-ontop";
            break;
        case 59:
            n = "animated-section-rotateCubeRightIn",
            i = "animated-section-rotateCubeRightOut animated-section-ontop";
            break;
        case 60:
            n = "animated-section-rotateCubeTopIn",
            i = "animated-section-rotateCubeTopOut animated-section-ontop";
            break;
        case 61:
            n = "animated-section-rotateCubeBottomIn",
            i = "animated-section-rotateCubeBottomOut animated-section-ontop";
            break;
        case 62:
            n = "animated-section-rotateCarouselLeftIn",
            i = "animated-section-rotateCarouselLeftOut animated-section-ontop";
            break;
        case 63:
            n = "animated-section-rotateCarouselRightIn",
            i = "animated-section-rotateCarouselRightOut animated-section-ontop";
            break;
        case 64:
            n = "animated-section-rotateCarouselTopIn",
            i = "animated-section-rotateCarouselTopOut animated-section-ontop";
            break;
        case 65:
            n = "animated-section-rotateCarouselBottomIn",
            i = "animated-section-rotateCarouselBottomOut animated-section-ontop";
            break;
        case 66:
            n = "animated-section-rotateSidesIn animated-section-delay200",
            i = "animated-section-rotateSidesOut";
            break;
        case 67:
            n = "animated-section-rotateSlideIn",
            i = "animated-section-rotateSlideOut"
        }
        var v, b = d, k = b.data("current"), F = e.attr("href").split("#"), t = F[1];
        v = k;
        var g = a('section[data-id="' + k + '"]');
        if (k = t,
        v != k) {
            r = !0,
            b.data("current", k);
            var T = a("section[data-id=" + k + "]").addClass("section-active");
            T.scrollTop(0),
            g.addClass(i).on(u, function() {
                g.off(u),
                l = !0,
                p && (c(b, T, g),
                l = !1)
            }),
            T.addClass(n).on(u, function() {
                T.off(u),
                p = !0,
                l && (c(b, T, g),
                p = !1,
                r = !1)
            })
        } else
            r = !1;
        f || c(g, T)
    }
    function c(a, e, t) {
        m(e, t)
    }
    function m(a, e) {
        e.attr("class", e.data("originalClassList")),
        a.attr("class", a.data("originalClassList") + " section-active")
    }
    var d = a(".animated-sections")
      , r = !1
      , l = !0
      , p = !1
      , h = (a(window),
    {
        WebkitAnimation: "webkitAnimationEnd",
        OAnimation: "oAnimationEnd",
        msAnimation: "MSAnimationEnd",
        animation: "animationend"
    })
      , u = h[Modernizr.prefixed("animation")]
      , f = Modernizr.cssanimations;
    return {
        init: t
    }
}(jQuery);
