/* eslint-disable */ (() => {
  'use strict';
  var e,
    n,
    t,
    r,
    o,
    a,
    i,
    s,
    c,
    l,
    d,
    u,
    f,
    p,
    v = {
      28: (e, n, t) => {
        t.d(n, { Z: () => a });
        var r = t(645),
          o = t.n(r)()(function (e) {
            return e[1];
          });
        o.push([
          e.id,
          '.scores {\n  display: flex;\n  flex-direction: column;\n}\n\n.button {\n  border-bottom: solid 3px black;\n  border-right: solid 3px black;\n  border-top: solid 1px black;\n  border-left: solid 1px black;\n}\n\nbody {\n  font-family: sans-serif;\n  font-weight: bold;\n}\n\n.score {\n  display: flex;\n  border: solid 3px black;\n  align-content: center;\n  align-items: center;\n}\n\n.leaderboard {\n  border: solid 3px black;\n  width: 75%;\n  padding-left: 0;\n  overflow-y: scroll;\n}\n\n.leaderboard :nth-child(odd) {\n  background-color: lightgray;\n}\n\nli {\n  list-style: none;\n  margin: 0.5%;\n}\n\n.form-control {\n  width: 60%;\n}\n\n.right {\n  margin-left: 45%;\n}\n',
          '',
        ]);
        const a = o;
      },
      645: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = e(n);
                return n[2] ? '@media '.concat(n[2], ' {').concat(t, '}') : t;
              }).join('');
            }),
            (n.i = function (e, t, r) {
              'string' == typeof e && (e = [[null, e, '']]);
              var o = {};
              if (r)
                for (var a = 0; a < this.length; a++) {
                  var i = this[a][0];
                  null != i && (o[i] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var c = [].concat(e[s]);
                (r && o[c[0]]) ||
                  (t &&
                    (c[2]
                      ? (c[2] = ''.concat(t, ' and ').concat(c[2]))
                      : (c[2] = t)),
                  n.push(c));
              }
            }),
            n
          );
        };
      },
      379: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var a = {}, i = [], s = 0; s < e.length; s++) {
            var c = e[s],
              l = r.base ? c[0] + r.base : c[0],
              d = a[l] || 0,
              u = ''.concat(l, ' ').concat(d);
            a[l] = d + 1;
            var f = t(u),
              p = { css: c[1], media: c[2], sourceMap: c[3] };
            -1 !== f
              ? (n[f].references++, n[f].updater(p))
              : n.push({ identifier: u, updater: o(p, r), references: 1 }),
              i.push(u);
          }
          return i;
        }
        function o(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var s = t(a[i]);
              n[s].references--;
            }
            for (var c = r(e, o), l = 0; l < a.length; l++) {
              var d = t(a[l]);
              0 === n[d].references && (n[d].updater(), n.splice(d, 1));
            }
            a = c;
          };
        };
      },
      569: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var n = document.createElement('style');
          return e.setAttributes(n, e.attributes), e.insert(n), n;
        };
      },
      565: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute('nonce', n);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = t.css,
                  o = t.media,
                  a = t.sourceMap;
                o ? e.setAttribute('media', o) : e.removeAttribute('media'),
                  a &&
                    'undefined' != typeof btoa &&
                    (r +=
                      '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                        ' */'
                      )),
                  n.styleTagTransform(r, e);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    m = {};
  function h(e) {
    var n = m[e];
    if (void 0 !== n) return n.exports;
    var t = (m[e] = { id: e, exports: {} });
    return v[e](t, t.exports, h), t.exports;
  }
  (h.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return h.d(n, { a: n }), n;
  }),
    (h.d = (e, n) => {
      for (var t in n)
        h.o(n, t) &&
          !h.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
    }),
    (h.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (e = h(379)),
    (n = h.n(e)),
    (t = h(795)),
    (r = h.n(t)),
    (o = h(569)),
    (a = h.n(o)),
    (i = h(565)),
    (s = h.n(i)),
    (c = h(216)),
    (l = h.n(c)),
    (d = h(589)),
    (u = h.n(d)),
    (f = h(28)),
    ((p = {}).styleTagTransform = u()),
    (p.setAttributes = s()),
    (p.insert = a().bind(null, 'head')),
    (p.domAPI = r()),
    (p.insertStyleElement = l()),
    n()(f.Z, p),
    f.Z && f.Z.locals && f.Z.locals;
})();
