define(["events","libraryBrowser","imageLoader","alphaPicker","listView","cardBuilder","emby-itemscontainer"],function(e,t,a,r,n,i){return function(e,o,l){function s(e){var a=d(e),r=h[a];return r||(r=h[a]={query:{SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"Trailer",Recursive:!0,Fields:"PrimaryImageAspectRatio,SortName,BasicSyncInfo",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",StartIndex:0,Limit:v},view:t.getSavedView(a)||"Poster"},t.loadSavedQueryValues(a,r.query)),r}function u(e){return s(e).query}function d(e){return e.savedQueryKey||(e.savedQueryKey=t.getSavedQueryKey("trailers")),e.savedQueryKey}function m(){Dashboard.showLoadingMsg();var e=u(l);ApiClient.getItems(Dashboard.getCurrentUserId(),e).then(function(r){function o(){e.StartIndex+=e.Limit,m()}function s(){e.StartIndex-=e.Limit,m()}window.scrollTo(0,0),c(l);var u,y=LibraryBrowser.getQueryPagingHtml({startIndex:e.StartIndex,limit:e.Limit,totalRecordCount:r.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),v=g.getCurrentViewStyle();u="Thumb"==v?i.getCardsHtml({items:r.Items,shape:"backdrop",preferThumb:!0,context:"movies",overlayPlayButton:!0}):"ThumbCard"==v?i.getCardsHtml({items:r.Items,shape:"backdrop",preferThumb:!0,context:"movies",cardLayout:!0,showTitle:!0,showYear:!0}):"Banner"==v?i.getCardsHtml({items:r.Items,shape:"banner",preferBanner:!0,context:"movies"}):"List"==v?n.getListViewHtml({items:r.Items,context:"movies",sortBy:e.SortBy}):i.getCardsHtml("PosterCard"==v?{items:r.Items,shape:"portrait",context:"movies",showTitle:!0,showYear:!0,cardLayout:!0}:{items:r.Items,shape:"portrait",context:"movies",centerText:!0,overlayPlayButton:!0});var h,S,f=l.querySelectorAll(".paging");for(h=0,S=f.length;S>h;h++)f[h].innerHTML=y;for(f=l.querySelectorAll(".btnNextPage"),h=0,S=f.length;S>h;h++)f[h].addEventListener("click",o);for(f=l.querySelectorAll(".btnPreviousPage"),h=0,S=f.length;S>h;h++)f[h].addEventListener("click",s);r.Items.length||(u='<p style="text-align:center;">'+Globalize.translate("MessageNoTrailersFound")+"</p>");var p=l.querySelector(".itemsContainer");p.innerHTML=u,a.lazyChildren(p),t.saveQueryValues(d(l),e),Dashboard.hideLoadingMsg()})}function c(e){var t=u(e);g.alphaPicker.value(t.NameStartsWithOrGreater)}function y(e){var a=e.querySelector(".alphaPicker");a.addEventListener("alphavaluechanged",function(t){var a=t.detail.value,r=u(e);r.NameStartsWithOrGreater=a,r.StartIndex=0,m()}),g.alphaPicker=new r({element:a,valueChangeEvent:"click"}),e.querySelector(".btnFilter").addEventListener("click",function(){g.showFilterMenu()}),e.querySelector(".btnSort").addEventListener("click",function(a){t.showSortMenu({items:[{name:Globalize.translate("OptionNameSort"),id:"SortName"},{name:Globalize.translate("OptionImdbRating"),id:"CommunityRating,SortName"},{name:Globalize.translate("OptionDateAdded"),id:"DateCreated,SortName"},{name:Globalize.translate("OptionDatePlayed"),id:"DatePlayed,SortName"},{name:Globalize.translate("OptionParentalRating"),id:"OfficialRating,SortName"},{name:Globalize.translate("OptionPlayCount"),id:"PlayCount,SortName"},{name:Globalize.translate("OptionReleaseDate"),id:"PremiereDate,SortName"}],callback:function(){u(e).StartIndex=0,m()},query:u(e),button:a.target})})}var g=this,v=t.getDefaultPageSize(),h={};g.showFilterMenu=function(){require(["components/filterdialog/filterdialog"],function(e){var t=new e({query:u(l),mode:"movies"});Events.on(t,"filterchange",function(){u(l).StartIndex=0,m()}),t.show()})},g.getCurrentViewStyle=function(){return s(l).view},y(l),g.renderTab=function(){m(),c(l)},g.destroy=function(){}}});