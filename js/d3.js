d3.tip=function(){function t(t){v=d(t),w=v.createSVGPoint(),document.body.appendChild(g)}function e(){return"n"}function n(){return[0,0]}function r(){return" "}function o(){var t=y();return{top:t.n.y-g.offsetHeight,left:t.n.x-g.offsetWidth/2}}function s(){var t=y();return{top:t.s.y,left:t.s.x-g.offsetWidth/2}}function u(){var t=y();return{top:t.e.y-g.offsetHeight/2,left:t.e.x}}function f(){var t=y();return{top:t.w.y-g.offsetHeight/2,left:t.w.x-g.offsetWidth}}function l(){var t=y();return{top:t.nw.y-g.offsetHeight,left:t.nw.x-g.offsetWidth}}function i(){var t=y();return{top:t.ne.y-g.offsetHeight,left:t.ne.x}}function a(){var t=y();return{top:t.sw.y,left:t.sw.x-g.offsetWidth}}function c(){var t=y();return{top:t.se.y,left:t.e.x}}function m(){var t=document.createElement("div");return t.style.position="absolute",t.style.display="none",t.style.boxSizing="border-box",t}function d(t){return t=t.node(),"svg"==t.tagName.toLowerCase()?t:t.ownerSVGElement}function y(){var t=d3.event.target,e={},n=t.getScreenCTM(),r=t.getBBox(),o=r.width,s=r.height,u=r.x,f=r.y,l=document.body.scrollTop,i=document.body.scrollLeft;return document.documentElement&&document.documentElement.scrollTop&&(l=document.documentElement.scrollTop,i=document.documentElement.scrollLeft),w.x=u+i,w.y=f+l,e.nw=w.matrixTransform(n),w.x+=o,e.ne=w.matrixTransform(n),w.y+=s,e.se=w.matrixTransform(n),w.x-=o,e.sw=w.matrixTransform(n),w.y-=s/2,e.w=w.matrixTransform(n),w.x+=o,e.e=w.matrixTransform(n),w.x-=o/2,w.y-=s/2,e.n=w.matrixTransform(n),w.y+=s,e.s=w.matrixTransform(n),e}var p=e,h=n,x=r,g=m(),v=null,w=null;t.show=function(){var e,n=x.apply(this,arguments),r=h.apply(this,arguments),o=p.apply(this,arguments),s=d3.select(g),u=0;for(s.html(n).style("display","block");u--;)s.classed(b[u],!1);return e=T.get(o).apply(this),s.classed(o,!0).style({top:e.top+r[0]+"px",left:e.left+r[1]+"px"}),t},t.hide=function(){return g.style.display="none",g.innerHTML="",t},t.attr=function(e,n){return arguments.length<2?d3.select(g).attr(e):(d3.select(g).attr(e,n),t)},t.style=function(e,n){return arguments.length<2?d3.select(g).style(e):(d3.select(g).style(e,n),t)},t.direction=function(e){return arguments.length?(p=null==e?e:d3.functor(e),t):p},t.offset=function(e){return arguments.length?(h=null==e?e:d3.functor(e),t):h},t.html=function(e){return arguments.length?(x=null==e?e:d3.functor(e),t):x};var T=d3.map({n:o,s:s,e:u,w:f,nw:l,ne:i,sw:a,se:c}),b=T.keys();return t};
