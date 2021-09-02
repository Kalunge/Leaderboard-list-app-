/* eslint-disable */
(() => {
  const e = {
    28: (e, n, t) => {
      t.d(n, { Z: () => a });
      const r = t(645);
      const o = t.n(r)()((e) => e[1]);
      o.push([
        e.id,
        '.scores {\n  display: flex;\n  flex-direction: column;\n}\n\n.button {\n  border-bottom: solid 3px black;\n  border-right: solid 3px black;\n  border-top: solid 1px black;\n  border-left: solid 1px black;\n}\n\nbody {\n  font-family: sans-serif;\n  font-weight: bold;\n}\n\n.score {\n  display: flex;\n  border: solid 3px black;\n  align-content: center;\n  align-items: center;\n}\n\n.leaderboard {\n  border: solid 3px black;\n  width: 75%;\n  padding-left: 0;\n  overflow-y: scroll;\n  height: 60vh;\n}\n\n.leaderboard :nth-child(even) {\n  background-color: lightgray;\n}\n\nli {\n  list-style: none;\n  margin: 0.5%;\n}\n\n.form-control {\n  width: 60%;\n}\n\n.right {\n  margin-left: 45%;\n}\n',
        '',
      ]);
      const a = o;
    },
    645: (e) => {
      e.exports = function (e) {
        const n = [];
        return (
          (n.toString = function () {
            return this.map((n) => {
              const t = e(n);
              return n[2] ? '@media '.concat(n[2], ' {').concat(t, '}') : t;
            }).join('');
          }),
          (n.i = function (e, t, r) {
            typeof e === 'string' && (e = [[null, e, '']]);
            const o = {};
            if (r)
              for (let a = 0; a < this.length; a++) {
                const i = this[a][0];
                i != null && (o[i] = !0);
              }
            for (let s = 0; s < e.length; s++) {
              const c = [].concat(e[s]);
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
      const n = [];
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
          const c = e[s];
          const l = r.base ? c[0] + r.base : c[0];
          const d = a[l] || 0;
          const u = ''.concat(l, ' ').concat(d);
          a[l] = d + 1;
          const f = t(u);
          const p = { css: c[1], media: c[2], sourceMap: c[3] };
          f !== -1
            ? (n[f].references++, n[f].updater(p))
            : n.push({ identifier: u, updater: o(p, r), references: 1 }),
            i.push(u);
        }
        return i;
      }
      function o(e, n) {
        const t = n.domAPI(n);
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
        let a = r((e = e || []), (o = o || {}));
        return function (e) {
          e = e || [];
          for (let i = 0; i < a.length; i++) {
            const s = t(a[i]);
            n[s].references--;
          }
          for (var c = r(e, o), l = 0; l < a.length; l++) {
            const d = t(a[l]);
            n[d].references === 0 && (n[d].updater(), n.splice(d, 1));
          }
          a = c;
        };
      };
    },
    569: (e) => {
      const n = {};
      e.exports = function (e, t) {
        const r = (function (e) {
          if (void 0 === n[e]) {
            let t = document.querySelector(e);
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
        const n = document.createElement('style');
        return e.setAttributes(n, e.attributes), e.insert(n), n;
      };
    },
    565: (e, n, t) => {
      e.exports = function (e) {
        const n = t.nc;
        n && e.setAttribute('nonce', n);
      };
    },
    795: (e) => {
      e.exports = function (e) {
        const n = e.insertStyleElement(e);
        return {
          update(t) {
            !(function (e, n, t) {
              let r = t.css;
              const o = t.media;
              const a = t.sourceMap;
              o ? e.setAttribute('media', o) : e.removeAttribute('media'),
                a &&
                  typeof btoa !== 'undefined' &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      ' */'
                    )),
                n.styleTagTransform(r, e);
            })(n, e, t);
          },
          remove() {
            !(function (e) {
              if (e.parentNode === null) return !1;
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
  };
  const n = {};
  function t(r) {
    const o = n[r];
    if (void 0 !== o) return o.exports;
    const a = (n[r] = { id: r, exports: {} });
    return e[r](a, a.exports, t), a.exports;
  }
  (t.n = (e) => {
    const n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (const r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      const e = t(379);
      const n = t.n(e);
      const r = t(795);
      const o = t.n(r);
      const a = t(569);
      const i = t.n(a);
      const s = t(565);
      const c = t.n(s);
      const l = t(216);
      const d = t.n(l);
      const u = t(589);
      const f = t.n(u);
      const p = t(28);
      const m = {};
      (m.styleTagTransform = f()),
        (m.setAttributes = c()),
        (m.insert = i().bind(null, 'head')),
        (m.domAPI = o()),
        (m.insertStyleElement = d()),
        n()(p.Z, m),
        p.Z && p.Z.locals && p.Z.locals;
      const v = async () => {
        const e = await fetch(
          'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wLBrLPiytKYs9FjtjzSo/scores/'
        );
        return (await e.json()).result;
      };
      const h = async () => {
        const e = document.querySelector('.leaderboard');
        (e.innerHTML = ''),
          (await v()).forEach((n) => {
            const t = document.createElement('li');
            (t.innerHTML = `${n.user}: ${n.score}`), e.appendChild(t);
          });
      };
      const b = document.getElementById('button');
      const y = document.getElementById('refresh');
      const g = document.getElementById('name');
      const x = document.getElementById('score');
      b.addEventListener('click', async (e) => {
        e.preventDefault(),
          await (async (e, n) => {
            const t = await fetch(
              'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wLBrLPiytKYs9FjtjzSo/scores/',
              {
                method: 'POST',
                body: JSON.stringify({ user: e, score: n }),
                headers: { 'Content-type': 'application/json; charset=UTF-8' },
              }
            );
            return await t.json();
          })(g.value, x.value),
          (g.value = ''),
          (x.value = '');
      }),
        y.addEventListener('click', async (e) => {
          e.preventDefault(), await h();
        }),
        document.addEventListener('DOMContentLoaded', async () => {
          await v(), h();
        });
    })();
})();
