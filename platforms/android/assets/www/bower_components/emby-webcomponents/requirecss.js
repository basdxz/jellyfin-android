define(function(){function e(e){return-1!=r.indexOf(e)}function t(e){e=e.toLowerCase(),r=r.filter(function(t){return-1==e.indexOf(t.toLowerCase())})}var n={};n.normalize=function(e,t){return".css"==e.substr(e.length-4,4)&&(e=e.substr(0,e.length-4)),t(e)};var r=[];return n.load=function(t,n,s,i){var o="/emby-webcomponents/requirecss",u=t.indexOf(o);-1!=u&&(t="css"+t.substring(u+o.length));var f=t+".css";if(0!=f.indexOf("http")&&0!=f.indexOf("file:")&&(f=i.baseUrl+f),e(f))s();else{r.push(f);var l=document.createElement("link");l.setAttribute("rel","stylesheet"),l.setAttribute("type","text/css"),l.onload=s,l.setAttribute("href",f+"?"+i.urlArgs),document.head.appendChild(l)}},window.requireCss={removeStylesheet:function(e){e.parentNode.removeChild(e),t(e.href)}},n});