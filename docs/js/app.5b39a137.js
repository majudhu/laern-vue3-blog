(function(){"use strict";var t={270:function(t,e,o){var n=o(963),r=o(252);const l=(0,r.Uk)("Title: "),i={key:0,class:"text-red"},u=(0,r._)("div",null,[(0,r._)("label",null,[(0,r.Uk)("Text: "),(0,r._)("input",{name:"text",required:""})])],-1),s=(0,r._)("div",null,[(0,r._)("label",null,[(0,r.Uk)("Image: "),(0,r._)("input",{name:"image"})])],-1),a=(0,r._)("div",null,[(0,r._)("label",null,[(0,r.Uk)("URL: "),(0,r._)("input",{name:"url"})])],-1),p=["disabled"];function c(t,e,o,c,h,m){const g=(0,r.up)("HelloWorld"),f=(0,r.up)("BlogPost");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(g,{msg:"Welcome to Learn Vue 3 Blog"}),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(h.posts,(t=>((0,r.wg)(),(0,r.j4)(f,{key:t.title,post:t},null,8,["post"])))),128)),(0,r._)("form",{onSubmit:e[1]||(e[1]=(0,n.iM)(((...t)=>m.submitForm&&m.submitForm(...t)),["prevent"]))},[(0,r._)("div",null,[(0,r._)("label",null,[l,(0,r.wy)((0,r._)("input",{name:"title",required:"","onUpdate:modelValue":e[0]||(e[0]=t=>h.title=t)},null,512),[[n.nr,h.title]])]),m.titleNotUnique?((0,r.wg)(),(0,r.iD)("span",i,"Title not unique")):(0,r.kq)("",!0)]),u,s,a,(0,r._)("button",{type:"submit",disabled:m.titleNotUnique},"Add post",8,p)],32)],64)}var h=o(577);const m={class:"hello"};function g(t,e,o,n,l,i){return(0,r.wg)(),(0,r.iD)("div",m,[(0,r._)("h1",null,(0,h.zw)(o.msg),1)])}var f={name:"HelloWorld",props:{msg:String}};f.render=g;var v=f;const d=["src"],b=["href"],x=(0,r._)("hr",null,null,-1);function y(t,e,o,n,l,i){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("h2",null,(0,h.zw)(o.post.title),1),(0,r._)("img",{src:o.post.image},null,8,d),(0,r._)("p",null,[(0,r.Uk)((0,h.zw)(o.post.text)+" ",1),o.post.url?((0,r.wg)(),(0,r.iD)("a",{key:0,href:o.post.url},"Open",8,b)):(0,r.kq)("",!0)]),x])}var w={name:"BlogPost",props:{post:{title:String,text:String,image:String,url:String}}};w.render=y;var _=w,k=JSON.parse('[{"title":"Blog post 1","text":"This is the blog post 1 text","image":"https://source.unsplash.com/lFmuWU0tv4M/400x400","url":"https://unsplash.com/photos/lFmuWU0tv4M"},{"title":"Textures & Patterns","text":"Whether you’re looking for stunning macro-photography or shots of complex architectural shapes — you’ve come to the right place.","image":"https://source.unsplash.com/qXbjMePYwkE/400x400","url":"https://unsplash.com/t/textures-patterns"},{"title":"Street Photography","text":"From early morning commutes to neon-tinted nights, our streets have become the fabric of our shared history. This category encompasses street photography in every form.","image":"https://source.unsplash.com/buYlndcNnjM/400x400","url":"hhttps://unsplash.com/t/street-photography"},{"title":"Blank","text":"No image no url"}]'),O={name:"App",components:{HelloWorld:v,BlogPost:_},methods:{addPost(t,e,o,n){this.posts.push({title:t,text:e,image:o,url:n})},submitForm({target:t}){const{title:e,text:o,image:n,url:r}=t.elements;this.posts.push({title:e.value,text:o.value,image:n.value,url:r.value})}},computed:{titleNotUnique(){return this.posts.some((t=>t.title?.toLowerCase()==this.title?.toLowerCase()))}},data(){return{title:"",posts:k}}};O.render=c;var U=O;(0,n.ri)(U).mount("#app")}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var l=e[n]={exports:{}};return t[n](l,l.exports,o),l.exports}o.m=t,function(){var t=[];o.O=function(e,n,r,l){if(!n){var i=1/0;for(p=0;p<t.length;p++){n=t[p][0],r=t[p][1],l=t[p][2];for(var u=!0,s=0;s<n.length;s++)(!1&l||i>=l)&&Object.keys(o.O).every((function(t){return o.O[t](n[s])}))?n.splice(s--,1):(u=!1,l<i&&(i=l));if(u){t.splice(p--,1);var a=r();void 0!==a&&(e=a)}}return e}l=l||0;for(var p=t.length;p>0&&t[p-1][2]>l;p--)t[p]=t[p-1];t[p]=[n,r,l]}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,l,i=n[0],u=n[1],s=n[2],a=0;if(i.some((function(e){return 0!==t[e]}))){for(r in u)o.o(u,r)&&(o.m[r]=u[r]);if(s)var p=s(o)}for(e&&e(n);a<i.length;a++)l=i[a],o.o(t,l)&&t[l]&&t[l][0](),t[i[a]]=0;return o.O(p)},n=self["webpackChunkvue3_blog"]=self["webpackChunkvue3_blog"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(270)}));n=o.O(n)})();
//# sourceMappingURL=app.5b39a137.js.map