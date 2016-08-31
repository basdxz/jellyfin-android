define(["libraryBrowser","cardBuilder","appSettings","components/groupedcards","dom","scrollStyles","emby-button","paper-icon-button-light","emby-itemscontainer"],function(e,t,a,i,r){function n(e){return ApiClient.getUserViews({},e).then(function(e){for(var t=e.Items,a=[],i=0,r=t.length;r>i;i++){var n=t[i];AppInfo.isNativeApp&&browserInfo.safari&&"livetv"==n.CollectionType||a.push(n)}return a})}function s(){return browserInfo.mobile&&AppInfo.enableAppLayouts}function o(){return s()?"overflowBackdrop":"backdrop"}function l(){return s()?"overflowPortrait":"portrait"}function d(a){for(var i="",r=0,n=a.length;n>r;r++){var s,o=a[r];switch(o.CollectionType){case"movies":s="local_movies";break;case"music":s="library_music";break;case"photos":s="photo";break;case"livetv":s="live_tv";break;case"tvshows":s="live_tv";break;case"games":s="folder";break;case"trailers":s="local_movies";break;case"homevideos":s="video_library";break;case"musicvideos":s="video_library";break;case"books":s="folder";break;case"channels":s="folder";break;case"playlists":s="folder";break;default:s="folder"}var l="card smallBackdropCard buttonCard";o.CollectionType&&(l+=" "+o.CollectionType+"buttonCard");var d=o.url||e.getHref(o),c=o.onclick?' onclick="'+o.onclick+'"':"";s=o.icon||s,i+="<a"+c+' data-id="'+o.Id+'" class="'+l+'" href="'+d+'" style="min-width:12.5%;">',i+='<div class="cardBox '+t.getDefaultColorClass(o.Name)+'" style="margin:4px;">',i+="<div class='cardText'>",i+='<i class="md-icon">'+s+"</i>",i+='<span style="margin-left:.7em;">'+o.Name+"</span>",i+="</div>",i+="</div>",i+="</a>"}return i}function c(e,t,a){return n(t).then(function(t){var i="<br/>";return a&&(i+='<h1 class="listHeader">'+Globalize.translate("HeaderMyMedia")+"</h1>"),i+='<div style="display:flex;flex-wrap:wrap;">',i+=d(t),i+="</div>",p().then(function(t){e.innerHTML=i+t})})}function m(e,t){return Math.floor(Math.random()*(t-e+1))+e}function p(){var e=864e5;AppInfo.isNativeApp&&(e=1728e5);var t="lastappinfopresent5",i=parseInt(a.get(t)||"0");return i?(new Date).getTime()-i<e?Promise.resolve(""):Dashboard.getPluginSecurityInfo().then(function(e){if(a.set(t,(new Date).getTime()),e.IsMBSupporter)return"";var i=[v];return browserInfo.safari&&AppInfo.isNativeApp||i.push(u),AppInfo.enableAppLayouts||i.push(y),a.set(t,(new Date).getTime()),i[m(0,i.length-1)]()}):(a.set(t,(new Date).getTime()),Promise.resolve(""))}function h(e,t,a){a=a||"backdropCard";var i='<div class="card scalableCard '+a+" "+a+'-scalable"><div class="cardBox"><div class="cardScalable"><div class="cardPadder cardPadder-backdrop"></div>';return i+=t?'<a class="cardContent" href="'+t+'" target="_blank">':'<div class="cardContent">',i+='<div class="cardImage lazy" data-src="'+e+'"></div>',i+=t?"</a>":"</div>",i+="</div></div></div>"}function u(){var e="";e+="<div>",e+='<h1>Try Emby Theater<button is="paper-icon-button-light" style="margin-left:1em;" onclick="this.parentNode.parentNode.remove();" class="autoSize"><i class="md-icon">close</i></button></h1>';var t=AppInfo.isNativeApp?"Emby Theater":'<a href="https://emby.media/download" target="_blank">Emby Theater</a>';return e+="<p>A beautiful app for your TV and large screen tablet. "+t+" runs on Windows, Xbox One, Google Chrome, FireFox, Microsoft Edge and Opera.</p>",e+='<div class="itemsContainer vertical-wrap">',e+=h("https://raw.githubusercontent.com/MediaBrowser/Emby.Resources/master/apps/theater1.png","https://emby.media/download"),e+=h("https://raw.githubusercontent.com/MediaBrowser/Emby.Resources/master/apps/theater2.png","https://emby.media/download"),e+=h("https://raw.githubusercontent.com/MediaBrowser/Emby.Resources/master/apps/theater3.png","https://emby.media/download"),e+="</div>",e+="<br/>",e+="</div>"}function v(){var e="";e+="<div>",e+='<h1>Try Emby Premiere<button is="paper-icon-button-light" style="margin-left:1em;" onclick="this.parentNode.parentNode.remove();" class="autoSize"><i class="md-icon">close</i></button></h1>';var t=AppInfo.isNativeApp?"":"https://emby.media/premiere",a=AppInfo.isNativeApp?"":'<a href="https://emby.media/premiere" target="_blank">Learn more</a>';return e+="<p>Design beautiful Cover Art, enjoy free access to Emby apps, and more. "+a+"</p>",e+='<div class="itemsContainer vertical-wrap">',e+=h("https://raw.githubusercontent.com/MediaBrowser/Emby.Resources/master/apps/theater1.png",t),e+=h("https://raw.githubusercontent.com/MediaBrowser/Emby.Resources/master/apps/theater2.png",t),e+=h("https://raw.githubusercontent.com/MediaBrowser/Emby.Resources/master/apps/theater3.png",t),e+="</div>",e+="<br/>",e+="</div>"}function y(){var e="";e+="<div>",e+='<h1>Unlock Improved Layouts with Emby Premiere<button is="paper-icon-button-light" style="margin-left:1em;" onclick="this.parentNode.parentNode.remove();" class="autoSize"><i class="md-icon">close</i></button></h1>';var t=AppInfo.isNativeApp?"":"https://emby.media/premiere",a=AppInfo.isNativeApp?"":'<a href="https://emby.media/premiere" target="_blank">Learn more</a>';return e+="<p>Combined horizontal and vertical swiping, better detail layouts, and more. "+a+"</p>",e+='<div class="itemsContainer vertical-wrap">',e+=h("https://raw.githubusercontent.com/MediaBrowser/Emby.Resources/master/apps/ms1.png",t,"portraitCard"),e+=h("https://raw.githubusercontent.com/MediaBrowser/Emby.Resources/master/apps/ms2.png",t,"portraitCard"),e+="</div>",e+="<br/>",e+="</div>"}function b(e,a){var r={Limit:20,Fields:"PrimaryImageAspectRatio,BasicSyncInfo",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Thumb"};return ApiClient.getJSON(ApiClient.getUrl("Users/"+a.Id+"/Items/Latest",r)).then(function(a){var r="",n=!1;a.length&&(r+="<div>",r+='<h1 class="listHeader">'+Globalize.translate("HeaderLatestMedia")+"</h1>",r+="</div>",r+='<div is="emby-itemscontainer" class="itemsContainer vertical-wrap">',r+=t.getCardsHtml({items:a,preferThumb:!0,shape:"backdrop",showUnplayedIndicator:!1,showChildCountIndicator:!0,lazy:!0,cardLayout:n,showTitle:n,showYear:n,showDetailsMenu:!0,context:"home"}),r+="</div>"),e.innerHTML=r,e.addEventListener("click",i.onItemsContainerClick),ImageLoader.lazyChildren(e)})}function g(e,a){var i={Limit:12,Fields:"PrimaryImageAspectRatio,BasicSyncInfo",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Thumb",IncludeItemTypes:"Movie"};return ApiClient.getJSON(ApiClient.getUrl("Users/"+a.Id+"/Items/Latest",i)).then(function(a){var i="",r=s();a.length&&(i+='<h1 class="listHeader">'+Globalize.translate("HeaderLatestMovies")+"</h1>",i+=r?'<div is="emby-itemscontainer" class="hiddenScrollX itemsContainer">':'<div is="emby-itemscontainer" class="itemsContainer vertical-wrap">',i+=t.getCardsHtml({items:a,shape:l(),showUnplayedIndicator:!1,showChildCountIndicator:!0,lazy:!0,context:"home",centerText:!0,overlayPlayButton:!0}),i+="</div>"),e.innerHTML=i,ImageLoader.lazyChildren(e)})}function f(e,a){var i={Limit:12,Fields:"PrimaryImageAspectRatio,BasicSyncInfo",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Thumb",IncludeItemTypes:"Episode"};return ApiClient.getJSON(ApiClient.getUrl("Users/"+a.Id+"/Items/Latest",i)).then(function(a){var i="",r=s();a.length&&(i+='<h1 class="listHeader">'+Globalize.translate("HeaderLatestEpisodes")+"</h1>",i+=r?'<div is="emby-itemscontainer" class="hiddenScrollX itemsContainer">':'<div is="emby-itemscontainer" class="itemsContainer vertical-wrap">',i+=t.getCardsHtml({items:a,preferThumb:!0,shape:o(),showUnplayedIndicator:!1,showChildCountIndicator:!0,lazy:!0,context:"home",overlayPlayButton:!0}),i+="</div>"),e.innerHTML=i,ImageLoader.lazyChildren(e)})}function I(e,a){var i=r.getWindowSize().innerWidth,n={Limit:i>=2400?10:i>=1600?10:i>=1440?8:i>=800?7:6,Fields:"PrimaryImageAspectRatio,BasicSyncInfo",Filters:"IsUnplayed",UserId:a};return ApiClient.getJSON(ApiClient.getUrl("Channels/Items/Latest",n)).then(function(a){var i="";a.Items.length&&(i+='<h1 class="listHeader">'+Globalize.translate("HeaderLatestChannelMedia")+"</h1>",i+='<div is="emby-itemscontainer" class="itemsContainer vertical-wrap">',i+=t.getCardsHtml({items:a.Items,shape:"auto",showTitle:!0,centerText:!0,lazy:!0,showDetailsMenu:!0,overlayPlayButton:!0}),i+="</div>"),e.innerHTML=i,ImageLoader.lazyChildren(e)})}function C(e,a,i,o,l,c){return n(a.Id).then(function(a){var n="";if(n+=l?'<div class="hiddenSectionOnMobile">':"<div>",a.length){var o=r.getWindowSize().innerWidth;n+="<div>",n+='<h1 class="listHeader">'+Globalize.translate("HeaderMyMedia")+"</h1>",n+="</div>";var m=s()&&browserInfo.safari&&o>800;n+=m?'<div is="emby-itemscontainer" class="hiddenScrollX itemsContainer">':'<div is="emby-itemscontainer" class="itemsContainer vertical-wrap">',n+=t.getCardsHtml({items:a,shape:m?"overflowBackdrop":i,showTitle:c,centerText:!0,lazy:!0,autoThumb:!0,transition:!1}),n+="</div>"}return n+="</div>",l&&(n+='<div class="hiddenSectionOnNonMobile" style="margin-top:1em;">',n+=d(a),n+="</div>"),p().then(function(t){e.innerHTML=n+t,ImageLoader.lazyChildren(e)})})}function w(e,a){var i=r.getWindowSize().innerWidth,n={SortBy:"DatePlayed",SortOrder:"Descending",MediaTypes:"Video",Filters:"IsResumable",Limit:i>=1920?8:i>=1600?8:i>=1200?9:6,Recursive:!0,Fields:"PrimaryImageAspectRatio,BasicSyncInfo",CollapseBoxSetItems:!1,ExcludeLocationTypes:"Virtual",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1};return ApiClient.getItems(a,n).then(function(a){var i="";a.Items.length&&(i+='<h1 class="listHeader">'+Globalize.translate("HeaderResume")+"</h1>",i+=s()?'<div is="emby-itemscontainer" class="hiddenScrollX itemsContainer">':'<div is="emby-itemscontainer" class="itemsContainer vertical-wrap">',i+=t.getCardsHtml({items:a.Items,preferThumb:!0,shape:o(),overlayText:!1,showTitle:!0,showParentTitle:!0,lazy:!0,showDetailsMenu:!0,overlayPlayButton:!0,context:"home",centerText:!0}),i+="</div>"),e.innerHTML=i,ImageLoader.lazyChildren(e)})}function T(e,a){var i={Limit:20,Fields:"PrimaryImageAspectRatio,SeriesInfo,DateCreated,BasicSyncInfo",UserId:a,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb"};ApiClient.getNextUpEpisodes(i).then(function(a){var i="";a.Items.length&&(i+='<h1 class="listHeader">'+Globalize.translate("HeaderNextUp")+"</h1>",i+=s()?'<div is="emby-itemscontainer" class="hiddenScrollX itemsContainer">':'<div is="emby-itemscontainer" class="itemsContainer vertical-wrap">',i+=t.getCardsHtml({items:a.Items,preferThumb:!0,shape:o(),overlayText:!1,showTitle:!0,showParentTitle:!0,lazy:!0,overlayPlayButton:!0,context:"home",centerText:!0}),i+="</div>"),e.innerHTML=i,ImageLoader.lazyChildren(e)})}function L(e,t,a){return a=Object.assign(a||{},{UserId:t,SupportsLatestItems:!0}),ApiClient.getJSON(ApiClient.getUrl("Channels",a)).then(function(t){var a=t.Items,i=a.map(function(e){return'<div id="channel'+e.Id+'"></div>'}).join("");e.innerHTML=i;for(var r=0,n=a.length;n>r;r++){var s=a[r];A(e,s,r)}})}function A(e,a){var i=r.getWindowSize().innerWidth,n={Limit:i>=1600?10:i>=1440?5:i>=800?6:6,Fields:"PrimaryImageAspectRatio,BasicSyncInfo",Filters:"IsUnplayed",UserId:Dashboard.getCurrentUserId(),ChannelIds:a.Id};ApiClient.getJSON(ApiClient.getUrl("Channels/Items/Latest",n)).then(function(i){var r="";if(i.Items.length){r+='<div class="homePageSection">',r+="<div>";var n=Globalize.translate("HeaderLatestFromChannel").replace("{0}",a.Name);r+='<h1 style="display:inline-block; vertical-align:middle;" class="listHeader">'+n+"</h1>",r+='<a href="channelitems.html?id='+a.Id+'" class="clearLink" style="margin-left:2em;"><button is="emby-button" type="button" class="raised more mini"><span>'+Globalize.translate("ButtonMore")+"</span></button></a>",r+="</div>",r+='<div is="emby-itemscontainer" is="emby-itemscontainer" class="itemsContainer vertical-wrap">',r+=t.getCardsHtml({items:i.Items,shape:"autohome",defaultShape:"square",showTitle:!0,centerText:!0,lazy:!0,showDetailsMenu:!0,overlayPlayButton:!0}),r+="</div>",r+="</div>"}var s=e.querySelector("#channel"+a.Id);s.innerHTML=r,ImageLoader.lazyChildren(s)})}function B(e,a,i){return ApiClient.getLiveTvRecordings({userId:a,limit:5,Fields:"PrimaryImageAspectRatio,BasicSyncInfo",IsInProgress:!1,EnableTotalRecordCount:!1}).then(function(a){var r="";if(a.Items.length){var n=0!==i?"listHeader":"listHeader";r+="<div>",r+='<h1 style="display:inline-block; vertical-align:middle;" class="'+n+'">'+Globalize.translate("HeaderLatestTvRecordings")+"</h1>",r+='<a href="livetv.html?tab=3" onclick="LibraryBrowser.showTab(\'livetv.html\',3);" class="clearLink" style="margin-left:2em;"><button is="emby-button" type="button" class="raised more mini"><span>'+Globalize.translate("ButtonMore")+"</span></button></a>",r+="</div>"}r+=s()?'<div is="emby-itemscontainer" class="hiddenScrollX itemsContainer">':'<div is="emby-itemscontainer" class="itemsContainer vertical-wrap">',r+=t.getCardsHtml({items:a.Items,shape:s()?"autooverflow":"auto",showTitle:!0,showParentTitle:!0,coverImage:!0,lazy:!0,showDetailsMenu:!0,centerText:!0,overlayPlayButton:!0}),r+="</div>",e.innerHTML=r,ImageLoader.lazyChildren(e)})}return window.Sections={loadRecentlyAdded:b,loadLatestChannelMedia:I,loadLibraryTiles:C,loadResume:w,loadNextUp:T,loadLatestChannelItems:L,loadLatestLiveTvRecordings:B,loadlibraryButtons:c,loadLatestMovies:g,loadLatestEpisodes:f},window.Sections});