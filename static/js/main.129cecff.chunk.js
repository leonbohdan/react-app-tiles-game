(this["webpackJsonpreact-app-tiles-game"]=this["webpackJsonpreact-app-tiles-game"]||[]).push([[0],[,,,,,,,,,,,,function(e,o,t){},function(e,o,t){},function(e,o,t){},function(e,o,t){},function(e,o,t){"use strict";t.r(o);var c=t(0),l=t(1),i=t.n(l),r=t(6),n=t.n(r),d=(t(12),t(13),t(3)),s=(t(14),t(5)),g=t.n(s);function a(){var e=Math.round(16777215*Math.random());return"rgb("+(e>>16)+", "+(e>>8&255)+", "+(255&e)+")"}var u={one:a(),two:a(),tree:a(),four:a(),five:a(),six:a(),seven:a(),eight:a()},p={tiles:[{id:1,color:u.one,completed:!1,toggle:!1},{id:2,color:u.two,completed:!1,toggle:!1},{id:3,color:u.tree,completed:!1,toggle:!1},{id:4,color:u.four,completed:!1,toggle:!1},{id:5,color:u.five,completed:!1,toggle:!1},{id:6,color:u.six,completed:!1,toggle:!1},{id:7,color:u.seven,completed:!1,toggle:!1},{id:8,color:u.eight,completed:!1,toggle:!1},{id:9,color:u.one,completed:!1,toggle:!1},{id:10,color:u.two,completed:!1,toggle:!1},{id:11,color:u.tree,completed:!1,toggle:!1},{id:12,color:u.four,completed:!1,toggle:!1},{id:13,color:u.five,completed:!1,toggle:!1},{id:14,color:u.six,completed:!1,toggle:!1},{id:15,color:u.seven,completed:!1,toggle:!1},{id:16,color:u.eight,completed:!1,toggle:!1}],twoChoosenTiles:[],count:0},m=t(2);function f(){var e=Math.round(16777215*Math.random());return"rgb("+(e>>16)+", "+(e>>8&255)+", "+(255&e)+")"}var h={one:f(),two:f(),tree:f(),four:f(),five:f(),six:f(),seven:f(),eight:f()},j=function(e,o){switch(o.type){case"color":return Object(m.a)(Object(m.a)({},e),{},{isFirstTile:o.payload});case"increase":return Object(m.a)(Object(m.a)({},e),{},{count:e.count+1});case"toggle":return Object(m.a)(Object(m.a)({},e),{},{tiles:e.tiles.map((function(e){return e.id===o.payload&&(e.toggle=!e.toggle),e}))});default:return 1}},b={tiles:[{id:1,color:h.one,completed:!1,toggle:!1},{id:2,color:h.two,completed:!1,toggle:!1},{id:3,color:h.tree,completed:!1,toggle:!1},{id:4,color:h.four,completed:!1,toggle:!1},{id:5,color:h.five,completed:!1,toggle:!1},{id:6,color:h.six,completed:!1,toggle:!1},{id:7,color:h.seven,completed:!1,toggle:!1},{id:8,color:h.eight,completed:!1,toggle:!1},{id:9,color:h.one,completed:!1,toggle:!1},{id:10,color:h.two,completed:!1,toggle:!1},{id:11,color:h.tree,completed:!1,toggle:!1},{id:12,color:h.four,completed:!1,toggle:!1},{id:13,color:h.five,completed:!1,toggle:!1},{id:14,color:h.six,completed:!1,toggle:!1},{id:15,color:h.seven,completed:!1,toggle:!1},{id:16,color:h.eight,completed:!1,toggle:!1}],twoChoosenTiles:[],count:0},v=i.a.createContext((function(){})),O=i.a.createContext(b),x=function(e){var o=e.children,t=Object(l.useReducer)(j,b),i=Object(d.a)(t,2),r=i[0],n=i[1];return Object(c.jsx)(v.Provider,{value:n,children:Object(c.jsx)(O.Provider,{value:r,children:o})})},w=function(){var e=Object(l.useContext)(v),o=Object(l.useContext)(O).count,t=Object(l.useState)(p.tiles),i=Object(d.a)(t,2),r=i[0],n=i[1];console.log(o);var s=function(e){return e[0].color===e[1].color};return Object(c.jsx)("div",{className:"field",children:r.map((function(o){return Object(c.jsx)("div",{className:g()("field__scene",{"is-completed":o.completed}),children:Object(c.jsxs)("div",{className:g()("field__tile",{"is-flipped":o.toggle}),onClick:function(){!function(o){var t=o.id,c=o.color;n(r.map((function(e){return e.id===t&&(e.toggle=!e.toggle),e}))),p.twoChoosenTiles.length<3&&(p.twoChoosenTiles.push({id:t,color:c}),2===p.twoChoosenTiles.length&&(s(p.twoChoosenTiles)?(setTimeout((function(){n(r.map((function(e){return e.color===p.twoChoosenTiles[0].color&&e.color===p.twoChoosenTiles[1].color&&(e.completed=!e.completed),e})))}),1e3),e({type:"increase"})):setTimeout((function(){n(r.map((function(e){return e.id!==p.twoChoosenTiles[0].id&&e.id!==p.twoChoosenTiles[1].id||(e.toggle=!1),e})))}),900),setTimeout((function(){p.twoChoosenTiles.splice(0,2)}),1001)))}(o)},children:[Object(c.jsx)("div",{className:"field__face field__face--front"}),Object(c.jsx)("div",{className:"field__face field__face--back",style:{backgroundColor:"".concat(o.color)}})]})},o.id)}))})},C=(t(15),function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"The End"}),Object(c.jsx)("h2",{children:"Restart page to start the game from the beginning"})]})});var T=function(){var e=Object(l.useContext)(O).count;return console.log(e),Object(c.jsx)("div",{className:"App",children:8===e?Object(c.jsx)(C,{}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{className:"App__heading",children:"Choose the same tiles"}),Object(c.jsx)(w,{})]})})};n.a.render(Object(c.jsx)(x,{children:Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(T,{})})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.129cecff.chunk.js.map