!function(e,a,t){function i(){var e=getParameterByName("id");if(e)return ApiClient.getItem(Dashboard.getCurrentUserId(),e);var a=getParameterByName("genre");if(a)return ApiClient.getGenre(a,Dashboard.getCurrentUserId());if(a=getParameterByName("musicgenre"))return ApiClient.getMusicGenre(a,Dashboard.getCurrentUserId());if(a=getParameterByName("gamegenre"))return ApiClient.getGameGenre(a,Dashboard.getCurrentUserId());if(a=getParameterByName("musicartist"))return ApiClient.getArtist(a,Dashboard.getCurrentUserId());throw new Error("Invalid request")}function r(e){Dashboard.showLoadingMsg(),i().then(function(a){n(e,a),t.scrollTo(0,0)})}function n(a,t){ia=t;var i=c(t);m(a,t,i),LibraryBrowser.renderName(t,e(".itemName",a),!1,i),LibraryBrowser.renderParentName(t,e(".parentName",a),i),LibraryMenu.setTitle(t.SeriesName||t.Name),Dashboard.getCurrentUser().then(function(r){s(a,t,r),u(a,t,i,r),p(a,t,i);var n=!1;"MusicArtist"==t.Type||"MusicAlbum"==t.Type||"Playlist"==t.Type||"BoxSet"==t.Type||"Audio"==t.Type?(e("#itemBackdrop",a).addClass("noBackdrop").css("background-image","none"),Backdrops.setBackdrops(a,[t])):n=LibraryBrowser.renderDetailPageBackdrop(a,t);var o=n&&a.classList.contains("noSecondaryNavPage");LibraryMenu.setTransparentMenu(o);var l=!1;if("Program"==t.Type){var d=new Date;d>=parseISO8601Date(t.StartDate,{toLocal:!0})&&d<parseISO8601Date(t.EndDate,{toLocal:!0})?(e(".btnPlay",a).removeClass("hide"),l=!0):e(".btnPlay",a).addClass("hide")}else MediaController.canPlay(t)?(e(".btnPlay",a).removeClass("hide"),l=!0):e(".btnPlay",a).addClass("hide");t.LocalTrailerCount&&"Full"==t.PlayAccess?e(".btnPlayTrailer",a).removeClass("hide"):e(".btnPlayTrailer",a).addClass("hide"),LibraryBrowser.enableSync(t,r)?e(".btnSync",a).removeClass("hide"):e(".btnSync",a).addClass("hide"),"Program"==t.Type&&t.TimerId?e(".btnCancelRecording",a).removeClass("hide"):e(".btnCancelRecording",a).addClass("hide"),"Program"!=t.Type||t.TimerId||t.SeriesTimerId?(e(".btnRecord",a).addClass("hide"),e(".btnFloatingRecord",a).addClass("hide")):l?(e(".btnRecord",a).removeClass("hide"),e(".btnFloatingRecord",a).addClass("hide")):(e(".btnRecord",a).addClass("hide"),e(".btnFloatingRecord",a).removeClass("hide")),!t.LocalTrailerCount&&t.RemoteTrailers.length&&"Full"==t.PlayAccess?e(".btnPlayExternalTrailer",a).removeClass("hide").attr("href",t.RemoteTrailers[0].Url):e(".btnPlayExternalTrailer",a).addClass("hide").attr("href","#");var c=(t.MediaSources||[]).filter(function(e){return"Grouping"==e.Type});if(r.Policy.IsAdministrator&&c.length?e(".splitVersionContainer",a).show():e(".splitVersionContainer",a).hide(),LibraryBrowser.getMoreCommands(t,r).length>0?e(".btnMoreCommands",a).removeClass("hide"):e(".btnMoreCommands",a).addClass("hide"),r.Policy.IsAdministrator?e(".chapterSettingsButton",a).show():e(".chapterSettingsButton",a).hide(),LiveTvHelpers.renderOriginalAirDate(e(".airDate",a),t),"Person"==t.Type&&t.PremiereDate)try{var m=parseISO8601Date(t.PremiereDate,{toLocal:!0}).toDateString();e("#itemBirthday",a).show().html(Globalize.translate("BirthDateValue").replace("{0}",m))}catch(h){e("#itemBirthday",a).hide()}else e("#itemBirthday",a).hide();if("Person"==t.Type&&t.EndDate)try{var g=parseISO8601Date(t.EndDate,{toLocal:!0}).toDateString();e("#itemDeathDate",a).show().html(Globalize.translate("DeathDateValue").replace("{0}",g))}catch(h){e("#itemBirthday",a).hide()}if("Person"==t.Type&&t.ProductionLocations&&t.ProductionLocations.length){var y='<a class="textlink" target="_blank" href="https://maps.google.com/maps?q='+t.ProductionLocations[0]+'">'+t.ProductionLocations[0]+"</a>";e("#itemBirthLocation",a).show().html(Globalize.translate("BirthPlaceValue").replace("{0}",y))}else e("#itemBirthLocation",a).hide()}),"Offline"==t.LocationType?e(".offlineIndicator",a).show():e(".offlineIndicator",a).hide();var r=!1;if("Virtual"==t.LocationType&&"Episode"==t.Type)try{t.PremiereDate&&(new Date).getTime()>=parseISO8601Date(t.PremiereDate,{toLocal:!0}).getTime()&&(r=!0)}catch(n){}r?e(".missingIndicator",a).show():e(".missingIndicator",a).hide(),d(a,t),a.dispatchEvent(new CustomEvent("displayingitem",{detail:{item:t,context:i},bubbles:!0})),Dashboard.hideLoadingMsg()}function s(e,a,t){LibraryBrowser.renderDetailImage(e.querySelector(".detailImageContainer"),a,t.Policy.IsAdministrator&&"Photo"!=a.MediaType)}function o(e,a){LibraryBrowser.refreshDetailImageUserData(e.querySelector(".detailImageContainer"),a)}function l(a,t){var i=t,r=e(e.mobile.activePage)[0];if("UserDataChanged"===i.MessageType&&ia&&i.Data.UserId==Dashboard.getCurrentUserId()){var n=ia.UserData.Key,s=i.Data.UserDataList.filter(function(e){return e.Key==n})[0];s&&(ia.UserData=s,Dashboard.getCurrentUser().then(function(e){o(r,ia,e)}))}}function d(a,t){e("#peopleHeader",a).html("Audio"==t.Type||"MusicAlbum"==t.Type||"Book"==t.MediaType||"Photo"==t.MediaType?Globalize.translate("HeaderPeople"):Globalize.translate("HeaderCastAndCrew"))}function c(){return getParameterByName("context")}function m(a,t,i){e(".itemTabs",a).hide(),"tv"==i?(e(a).removeClass("noSecondaryNavPage"),e("#tvShowsTabs",a).show(),LibraryMenu.setMenuButtonVisible(!0)):(e(a).addClass("noSecondaryNavPage"),LibraryMenu.setBackButtonVisible(!0),LibraryMenu.setMenuButtonVisible(!1))}function u(a,t,i,r){e(".collectionItems",a).empty(),"TvChannel"==t.Type?(e("#childrenCollapsible",a).removeClass("hide"),z(a,t,r)):"Playlist"==t.Type?(e("#childrenCollapsible",a).removeClass("hide"),D(a,t,r)):"Studio"==t.Type||"Person"==t.Type||"Genre"==t.Type||"MusicGenre"==t.Type||"GameGenre"==t.Type||"MusicArtist"==t.Type?(e("#childrenCollapsible",a).removeClass("hide"),L(a,t,r)):t.IsFolder?("BoxSet"==t.Type?e("#childrenCollapsible",a).addClass("hide"):e("#childrenCollapsible",a).removeClass("hide"),A(a,t,r,i)):e("#childrenCollapsible",a).addClass("hide"),t.MediaSources&&t.MediaSources.length&&O(a,t);var n=t.Chapters||[];n.length&&AppInfo.enableDetailPageChapters?(e("#scenesCollapsible",a).show(),q(a,t,r,3)):e("#scenesCollapsible",a).hide(),t.SpecialFeatureCount&&0!=t.SpecialFeatureCount&&"Series"!=t.Type?(e("#specialsCollapsible",a).removeClass("hide"),Y(a,t,r,6)):e("#specialsCollapsible",a).addClass("hide"),t.People&&t.People.length?(e("#castCollapsible",a).show(),K(a,t,i,v()?null:6)):e("#castCollapsible",a).hide(),t.PartCount&&t.PartCount>1?(e("#additionalPartsCollapsible",a).removeClass("hide"),E(a,t,r)):e("#additionalPartsCollapsible",a).addClass("hide"),e("#themeSongsCollapsible",a).hide(),e("#themeVideosCollapsible",a).hide(),"MusicAlbum"==t.Type?U(a,t,r):e("#musicVideosCollapsible",a).hide(),H(a,t,r),v()?k(a,t):k(a,t,1)}function p(a,t,i,r){T(a,t,i),r||b(a,t,i),t.Taglines&&t.Taglines.length?e(".tagline",a).html(t.Taglines[0]).show():e(".tagline",a).hide();var n=a.querySelector(".topOverview"),s=a.querySelector(".bottomOverview"),o=screen.availHeight<800||screen.availWidth<600;"MusicAlbum"==t.Type||"MusicArtist"==t.Type||"Season"==t.Type&&o?(LibraryBrowser.renderOverview([s],t),n.classList.add("hide"),s.classList.remove("hide")):(LibraryBrowser.renderOverview([n],t),n.classList.remove("hide"),s.classList.add("hide")),e(".itemCommunityRating",a).html(LibraryBrowser.getRatingHtml(t)),LibraryBrowser.renderAwardSummary(e("#awardSummary",a),t),e(".itemMiscInfo",a).html(LibraryBrowser.getMiscInfoHtml(t)),LibraryBrowser.renderGenres(e(".itemGenres",a),t,null,r),LibraryBrowser.renderStudios(e(".itemStudios",a),t,r),x(a,t),LibraryBrowser.renderLinks(a.querySelector(".itemExternalLinks"),t),e(".criticRatingScore",a).html((t.CriticRating||"0")+"%"),t.CriticRatingSummary?(e("#criticRatingSummary",a).show(),e(".criticRatingSummaryText",a).html(t.CriticRatingSummary)):e("#criticRatingSummary",a).hide(),M(a,t),S(a,t,r),t.Players?e("#players",a).show().html(t.Players+" Player"):e("#players",a).hide(),t.ArtistItems&&t.ArtistItems.length&&"MusicAlbum"!=t.Type?e(".artist",a).show().html(y(t.ArtistItems,i)):e(".artist",a).hide(),t.MediaSources&&t.MediaSources.length&&t.Path?e(".audioVideoMediaInfo",a).removeClass("hide"):e(".audioVideoMediaInfo",a).addClass("hide"),"Photo"==t.MediaType?(e(".photoInfo",a).removeClass("hide"),h(a,t)):e(".photoInfo",a).addClass("hide"),g(a,t)}function h(a,t){var i="",r=[];if(t.CameraMake&&r.push(W(Globalize.translate("MediaInfoCameraMake"),t.CameraMake)),t.CameraModel&&r.push(W(Globalize.translate("MediaInfoCameraModel"),t.CameraModel)),t.Altitude&&r.push(W(Globalize.translate("MediaInfoAltitude"),t.Altitude.toFixed(1))),t.Aperture&&r.push(W(Globalize.translate("MediaInfoAperture"),"F"+t.Aperture.toFixed(1))),t.ExposureTime){var n=1/t.ExposureTime;r.push(W(Globalize.translate("MediaInfoExposureTime"),"1/"+n+" s"))}t.FocalLength&&r.push(W(Globalize.translate("MediaInfoFocalLength"),t.FocalLength.toFixed(1)+" mm")),t.ImageOrientation,t.IsoSpeedRating&&r.push(W(Globalize.translate("MediaInfoIsoSpeedRating"),t.IsoSpeedRating)),t.Latitude&&r.push(W(Globalize.translate("MediaInfoLatitude"),t.Latitude.toFixed(1))),t.Longitude&&r.push(W(Globalize.translate("MediaInfoLongitude"),t.Longitude.toFixed(1))),t.ShutterSpeed&&r.push(W(Globalize.translate("MediaInfoShutterSpeed"),t.ShutterSpeed)),t.Software&&r.push(W(Globalize.translate("MediaInfoSoftware"),t.Software)),i+=r.join("<br/>"),e(".photoInfoContent",a).html(i)}function g(a){var t=e(".tabDetails",a)[0],i=t.textContent||t.innerText||"";i.trim()?e(".detailsSection",a).removeClass("hide"):e(".detailsSection",a).addClass("hide")}function y(e){for(var a=[],t=0,i=e.length;i>t;t++){var r=e[t];a.push('<a class="textlink" href="itemdetails.html?id='+r.Id+'">'+r.Name+"</a>")}return a=a.join(" / "),1==e.length?Globalize.translate("ValueArtist",a):e.length>1?Globalize.translate("ValueArtists",a):a}function b(a,t,i){if(e(".lnkSibling",a).addClass("hide"),"Episode"==t.Type||"Season"==t.Type||"Audio"==t.Type||"Photo"==t.Type){var r;r="Season"==t.Type?ApiClient.getSeasons(t.SeriesId,{userId:Dashboard.getCurrentUserId(),AdjacentTo:t.Id}):"Episode"==t.Type&&t.SeasonId?ApiClient.getEpisodes(t.SeriesId,{seasonId:t.SeasonId,userId:Dashboard.getCurrentUserId(),AdjacentTo:t.Id}):ApiClient.getItems(Dashboard.getCurrentUserId(),{AdjacentTo:t.Id,ParentId:t.ParentId,SortBy:"SortName"}),i=i||"",r.then(function(r){for(var n=!1,s=0,o=r.Items.length;o>s;s++){var l=r.Items[s];l.Id==t.Id?n=!0:n?e(".lnkNextItem",a).removeClass("hide").attr("href","itemdetails.html?id="+l.Id+"&context="+i):e(".lnkPreviousItem",a).removeClass("hide").attr("href","itemdetails.html?id="+l.Id+"&context="+i)}})}}function v(){return browserInfo.mobile&&AppInfo.enableAppLayouts&&screen.availWidth<=1e3}function f(){return v()?"overflowPortrait":"detailPagePortrait"}function I(){return v()?"overflowSquare":"detailPageSquare"}function C(){return v()?"overflowBackdrop":"detailPage169"}function T(a,i,r){if("Movie"!=i.Type&&"Trailer"!=i.Type&&"Series"!=i.Type&&"Program"!=i.Type&&"Recording"!=i.Type&&"Game"!=i.Type&&"MusicAlbum"!=i.Type&&"MusicArtist"!=i.Type&&"ChannelVideoItem"!=i.Type)return void e("#similarCollapsible",a).hide();e("#similarCollapsible",a).show();var n="MusicAlbum"==i.Type||"MusicArtist"==i.Type?I():f(),s=e(t).width(),o=e(t).height(),l={userId:Dashboard.getCurrentUserId(),limit:s>800&&"detailPagePortrait"==n?5:4,fields:"PrimaryImageAspectRatio,UserData,SyncInfo"};s>=800&&o>=1e3&&(l.limit*=2),v()&&(l.limit=12),ApiClient.getSimilarItems(i.Id,l).then(function(t){if(!t.Items.length)return void e("#similarCollapsible",a).hide();var s=e("#similarCollapsible",a).show();e(".similiarHeader",s).html(Globalize.translate("HeaderIfYouLikeCheckTheseOut",i.Name));var o="";o+=v()?'<div class="hiddenScrollX itemsContainer">':'<div class="itemsContainer">',o+=LibraryBrowser.getPosterViewHtml({items:t.Items,shape:n,showParentTitle:"MusicAlbum"==i.Type,centerText:!0,showTitle:"MusicAlbum"==i.Type||"Game"==i.Type||"MusicArtist"==i.Type,borderless:"Game"==i.Type,context:r,lazy:!0,showDetailsMenu:!0,coverImage:"MusicAlbum"==i.Type||"MusicArtist"==i.Type,overlayPlayButton:!0}),o+="</div>",e("#similarContent",a).html(o).lazyChildren().createCardMenus()})}function S(a,t,i){if("Series"!=t.Type)return void e("#seriesAirTime",a).hide();var r="";t.AirDays&&t.AirDays.length&&(r+=7==t.AirDays.length?"daily":t.AirDays.map(function(e){return e+"s"}).join(",")),t.AirTime&&(r+=" at "+t.AirTime),t.Studios.length&&(r+=i?" on "+t.Studios[0].Name:' on <a class="textlink" href="itemdetails.html?id='+t.Studios[0].Id+'">'+t.Studios[0].Name+"</a>"),r?(r=("Ended"==t.Status?"Aired ":"Airs ")+r,e("#seriesAirTime",a).show().html(r)):e("#seriesAirTime",a).hide()}function M(a,t){if(t.Tags&&t.Tags.length){var i="";i+="<p>"+Globalize.translate("HeaderTags")+"</p>";for(var r=0,n=t.Tags.length;n>r;r++)i+='<div class="itemTag">'+t.Tags[r]+"</div>";e(".itemTags",a).show().html(i)}else e(".itemTags",a).hide()}function P(a,t){return t=e.extend({},t),function(e,i,r){return t.StartIndex=e,t.Limit=i,t.Fields=r,ApiClient.getEpisodes(a,t)}}function w(a){return a=e.extend({},a),function(e,t,i){return a.StartIndex=e,a.Limit=t,a.Fields=i,ApiClient.getItems(Dashboard.getCurrentUserId(),a)}}function A(a,t,i,r){ra=null;var n="ItemCounts,AudioInfo,PrimaryImageAspectRatio,SyncInfo",s={ParentId:t.Id,Fields:n};"BoxSet"!==t.Type&&(s.SortBy="SortName");var o;"Series"==t.Type?o=ApiClient.getSeasons(t.Id,{userId:i.Id,Fields:n}):"Season"==t.Type?(o=ApiClient.getEpisodes(t.SeriesId,{seasonId:t.Id,userId:i.Id,Fields:n}),ra=P(t.SeriesId,{seasonId:t.Id,userId:i.Id})):"MusicAlbum"==t.Type&&(ra=w(s)),o=o||ApiClient.getItems(Dashboard.getCurrentUserId(),s),o.then(function(n){var s="",o=!1;"MusicAlbum"==t.Type?s=LibraryBrowser.getListViewHtml({items:n.Items,smallIcon:!0,showIndex:!0,index:"disc",showIndexNumber:!0,playFromHere:!0,defaultAction:"playallfromhere",lazy:!0}):"Series"==t.Type?(o=v(),s=LibraryBrowser.getPosterViewHtml({items:n.Items,shape:f(),showTitle:!0,centerText:!0,lazy:!0,overlayPlayButton:!0})):"Season"==t.Type?s=LibraryBrowser.getPosterViewHtml({items:n.Items,shape:"detailPage169",showTitle:!0,displayAsSpecial:"Season"==t.Type&&t.IndexNumber,playFromHere:!0,overlayText:!0,lazy:!0,showDetailsMenu:!0,overlayPlayButton:AppInfo.enableAppLayouts}):"GameSystem"==t.Type&&(s=LibraryBrowser.getPosterViewHtml({items:n.Items,shape:"auto",showTitle:!0,centerText:!0,lazy:!0,showDetailsMenu:!0}));var l=a.querySelector(".childrenItemsContainer");if(l.innerHTML=s,ImageLoader.lazyChildren(l),o?l.classList.add("hiddenScrollX"):l.classList.remove("hiddenScrollX"),e(l).createCardMenus(),"BoxSet"==t.Type){var d=[{name:Globalize.translate("HeaderMovies"),type:"Movie"},{name:Globalize.translate("HeaderSeries"),type:"Series"},{name:Globalize.translate("HeaderAlbums"),type:"MusicAlbum"},{name:Globalize.translate("HeaderGames"),type:"Game"},{name:Globalize.translate("HeaderBooks"),type:"Book"}];B(a,t,d,n.Items,i,r)}}),a.querySelector("#childrenTitle").innerHTML=Globalize.translate("Season"==t.Type?"HeaderEpisodes":"Series"==t.Type?"HeaderSeasons":"MusicAlbum"==t.Type?"HeaderTracks":"GameSystem"==t.Type?"HeaderGames":"HeaderItems"),"MusicAlbum"==t.Type?e(".childrenSectionHeader",a).hide():e(".childrenSectionHeader",a).show()}function L(e,a){require("scripts/itembynamedetailpage".split(","),function(){t.ItemsByName.renderItems(e,a)})}function D(e,a){require("scripts/playlistedit".split(","),function(){PlaylistViewer.render(e,a)})}function z(e,a){require("scripts/livetvcomponents,scripts/livetvchannel,livetvcss".split(","),function(){LiveTvChannelPage.renderPrograms(e,a.Id)})}function B(a,t,i,r,n){a.querySelector(".collectionItems").innerHTML="";for(var s=0,o=i.length;o>s;s++){var l=i[s],d=r.filter(function(e){return e.Type==l.type});d.length&&G(a,t,l,d,n)}var c={name:Globalize.translate("HeaderOtherItems")},m=r.filter(function(e){return!i.filter(function(a){return a.type==e.Type}).length});m.length&&G(a,t,c,m,n),r.length||G(a,t,{name:Globalize.translate("HeaderItems")},r,n),e(".collectionItems .itemsContainer",a).createCardMenus()}function G(a,t,i,r,n,s){var o="";o+='<div class="detailSection">',o+="<h1>",o+="<span>"+i.name+"</span>",o+="</h1>",o+='<div class="detailSectionContent itemsContainer">';var l="MusicAlbum"==i.type?"detailPageSquare":"detailPagePortrait";o+=LibraryBrowser.getPosterViewHtml({items:r,shape:l,showTitle:!0,centerText:!0,context:s,lazy:!0,showDetailsMenu:!0,overlayMoreButton:!0,showAddToCollection:!1,showRemoveFromCollection:!0}),o+="</div>",o+="</div>";var d=a.querySelector(".collectionItems");e(d).append(o),ImageLoader.lazyChildren(d),e(d).off("removefromcollection").on("removefromcollection",function(e,i){R(a,t,[i],n,s)})}function R(e,a,t,i,r){Dashboard.showLoadingMsg();var n=ApiClient.getUrl("Collections/"+a.Id+"/Items",{Ids:t.join(",")});ApiClient.ajax({type:"DELETE",url:n}).then(function(){A(e,a,i,r),Dashboard.hideLoadingMsg()})}function x(a,t){e(".userDataIcons",a).html(LibraryBrowser.getUserDataIconsHtml(t,!0,"fab"))}function k(a,t,i){if("Movie"!=t.Type&&"Trailer"!=t.Type&&"MusicVideo"!=t.Type)return void e("#criticReviewsCollapsible",a).hide();var r={};i&&(r.limit=i),ApiClient.getCriticReviews(t.Id,r).then(function(r){r.TotalRecordCount||t.CriticRatingSummary||t.AwardSummary?(e("#criticReviewsCollapsible",a).show(),F(a,r,i)):e("#criticReviewsCollapsible",a).hide()})}function F(e,a,t){for(var i="",r=a.Items,n=0,s=r.length;s>n;n++){var o=r[n];i+='<div class="paperList criticReviewPaperList">',i+='<paper-icon-item style="padding-top:.5em;padding-bottom:.5em;">',null!=o.Score||null!=o.Likes&&(i+=o.Likes?"<paper-fab mini style=\"background-color:transparent;background-image:url('css/images/fresh.png');background-repeat:no-repeat;background-position:center center;background-size: cover;\" item-icon></paper-fab>":"<paper-fab mini style=\"background-color:transparent;background-image:url('css/images/rotten.png');background-repeat:no-repeat;background-position:center center;background-size: cover;\" item-icon></paper-fab>"),i+="<paper-item-body three-line>",i+='<div style="white-space:normal;">'+o.Caption+"</div>";var l=[];if(o.ReviewerName&&l.push(o.ReviewerName),o.Publisher&&l.push(o.Publisher),i+="<div secondary>"+l.join(", ")+".",o.Date)try{var d=parseISO8601Date(o.Date,{toLocal:!0}).toLocaleDateString();i+='<span class="reviewDate">'+d+"</span>"}catch(c){}i+="</div>",o.Url&&(i+='<div secondary><a class="textlink" href="'+o.Url+'" target="_blank">'+Globalize.translate("ButtonFullReview")+"</a></div>"),i+="</paper-item-body>",i+="</paper-icon-item>",i+="</div>"}t&&a.TotalRecordCount>t&&(i+='<p style="margin: 0;"><paper-button raised class="more moreCriticReviews">'+Globalize.translate("ButtonMore")+"</paper-button></p>");var m=e.querySelector("#criticReviewsContent");m.innerHTML=i,v()?m.classList.add("hiddenScrollX"):m.classList.remove("hiddenScrollX")}function H(e,a){ApiClient.getThemeMedia(Dashboard.getCurrentUserId(),a.Id,!0).then(function(t){var i=t.ThemeSongsResult.OwnerId==a.Id?t.ThemeSongsResult.Items:[],r=t.ThemeVideosResult.OwnerId==a.Id?t.ThemeVideosResult.Items:[];V(e,i),N(e,r),e.dispatchEvent(new CustomEvent("thememediadownload",{detail:{themeMediaResult:t},bubbles:!0}))})}function V(a,t){if(t.length){e("#themeSongsCollapsible",a).show();var i=LibraryBrowser.getListViewHtml({items:t,smallIcon:!0});a.querySelector("#themeSongsContent").innerHTML=i}else e("#themeSongsCollapsible",a).hide()}function N(a,t,i){t.length?(e("#themeVideosCollapsible",a).show(),e("#themeVideosContent",a).html(X(t,i)).lazyChildren()):e("#themeVideosCollapsible",a).hide()}function U(a,t,i){ApiClient.getItems(i.Id,{SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"MusicVideo",Recursive:!0,Fields:"DateCreated,SyncInfo",Albums:t.Name}).then(function(t){t.Items.length?(e("#musicVideosCollapsible",a).show(),e("#musicVideosContent",a).html(X(t.Items,i)).lazyChildren()):e("#musicVideosCollapsible",a).hide()})}function E(a,t,i){ApiClient.getAdditionalVideoParts(i.Id,t.Id).then(function(t){t.Items.length?(e("#additionalPartsCollapsible",a).show(),e("#additionalPartsContent",a).html(X(t.Items,i)).lazyChildren()):e("#additionalPartsCollapsible",a).hide()})}function q(e,a,t,i,r){var n="",s=a.Chapters||[],o=LibraryBrowser.getPosterViewInfo().backdropWidth;v()?(n+='<div class="hiddenScrollX itemsContainer">',i=null):n+='<div class="itemsContainer">';for(var l=0,d=s.length;d>l&&!(i&&l>=i);l++){var c=s[l],m=c.Name||"Chapter "+l,u="Full"!=a.PlayAccess||r?"":' onclick="ItemDetailPage.play('+c.StartPositionTicks+');"';n+='<a class="card '+C()+'Card" href="#play-Chapter-'+l+'"'+u+">",n+='<div class="cardBox">',n+='<div class="cardScalable">';var p;p=c.ImageTag?ApiClient.getScaledImageUrl(a.Id,{maxWidth:o,tag:c.ImageTag,type:"Chapter",index:l}):"css/images/items/list/chapter.png",n+='<div class="cardPadder"></div>',n+='<div class="cardContent">',n+='<div class="cardImage lazy" data-src="'+p+'"></div>',n+='<div class="cardFooter">',n+='<div class="cardText">'+m+"</div>",n+='<div class="cardText">',n+=Dashboard.getDisplayTime(c.StartPositionTicks),n+="</div>",n+="</div>",n+="</div>",n+="</div>",n+="</div>",n+="</a>"}n+="</div>",i&&s.length>i&&(n+='<p style="margin: 0;"><paper-button raised class="more moreScenes">'+Globalize.translate("ButtonMore")+"</paper-button></p>");var h=e.querySelector("#scenesContent");h.innerHTML=n,ImageLoader.lazyChildren(h)}function O(e,a){var t=a.MediaSources.map(function(e){return j(a,e)}).join('<div style="border-top:1px solid #444;margin: 1em 0;"></div>');a.MediaSources.length>1&&(t="<br/>"+t);var i=e.querySelector("#mediaInfoContent");i.innerHTML=t}function j(e,a){var t="";a.Name&&e.MediaSources.length>1&&(t+='<div><span class="mediaInfoAttribute">'+a.Name+"</span></div><br/>");for(var i=0,r=a.MediaStreams.length;r>i;i++){var n=a.MediaStreams[i];if("Data"!=n.Type){t+='<div class="mediaInfoStream">';var s=Globalize.translate("MediaInfoStreamType"+n.Type);t+='<div class="mediaInfoStreamType">'+s+"</div>";var o=[];n.Language&&"Video"!=n.Type&&o.push(W(Globalize.translate("MediaInfoLanguage"),n.Language)),n.Codec&&o.push(W(Globalize.translate("MediaInfoCodec"),n.Codec.toUpperCase())),n.CodecTag&&o.push(W(Globalize.translate("MediaInfoCodecTag"),n.CodecTag)),n.Profile&&o.push(W(Globalize.translate("MediaInfoProfile"),n.Profile)),n.Level&&o.push(W(Globalize.translate("MediaInfoLevel"),n.Level)),(n.Width||n.Height)&&o.push(W(Globalize.translate("MediaInfoResolution"),n.Width+"x"+n.Height)),n.AspectRatio&&"mjpeg"!=n.Codec&&o.push(W(Globalize.translate("MediaInfoAspectRatio"),n.AspectRatio)),"Video"==n.Type&&(null!=n.IsAnamorphic&&o.push(W(Globalize.translate("MediaInfoAnamorphic"),n.IsAnamorphic?"Yes":"No")),o.push(W(Globalize.translate("MediaInfoInterlaced"),n.IsInterlaced?"Yes":"No"))),(n.AverageFrameRate||n.RealFrameRate)&&o.push(W(Globalize.translate("MediaInfoFramerate"),n.AverageFrameRate||n.RealFrameRate)),n.ChannelLayout&&o.push(W(Globalize.translate("MediaInfoLayout"),n.ChannelLayout)),n.Channels&&o.push(W(Globalize.translate("MediaInfoChannels"),n.Channels+" ch")),n.BitRate&&"mjpeg"!=n.Codec&&o.push(W(Globalize.translate("MediaInfoBitrate"),parseInt(n.BitRate/1024)+" kbps")),n.SampleRate&&o.push(W(Globalize.translate("MediaInfoSampleRate"),n.SampleRate+" khz")),n.BitDepth&&o.push(W(Globalize.translate("MediaInfoBitDepth"),n.BitDepth+" bit")),n.PixelFormat&&o.push(W(Globalize.translate("MediaInfoPixelFormat"),n.PixelFormat)),n.RefFrames&&o.push(W(Globalize.translate("MediaInfoRefFrames"),n.RefFrames)),n.KeyFrames,"Video"!=n.Type&&o.push(W(Globalize.translate("MediaInfoDefault"),n.IsDefault?"Yes":"No")),"Subtitle"==n.Type&&(o.push(W(Globalize.translate("MediaInfoForced"),n.IsForced?"Yes":"No")),o.push(W(Globalize.translate("MediaInfoExternal"),n.IsExternal?"Yes":"No"))),"Video"==n.Type&&a.Timestamp&&o.push(W(Globalize.translate("MediaInfoTimestamp"),a.Timestamp)),null!=n.IsCabac&&o.push(W(Globalize.translate("CABAC"),n.IsCabac?"Yes":"No")),t+=o.join("<br/>"),t+="</div>"}}if(a.Container&&(t+='<div><span class="mediaInfoLabel">'+Globalize.translate("MediaInfoContainer")+'</span><span class="mediaInfoAttribute">'+a.Container+"</span></div>"),a.Formats&&a.Formats.length,a.Path&&"Http"!=a.Protocol&&(t+='<div style="max-width:600px;overflow:hidden;"><span class="mediaInfoLabel">'+Globalize.translate("MediaInfoPath")+'</span><span class="mediaInfoAttribute">'+a.Path+"</span></div>"),a.Size){var l=(a.Size/1048576).toFixed(0);t+='<div><span class="mediaInfoLabel">'+Globalize.translate("MediaInfoSize")+'</span><span class="mediaInfoAttribute">'+l+" MB</span></div>"}return t}function W(e,a){return'<span class="mediaInfoLabel">'+e+'</span><span class="mediaInfoAttribute">'+a+"</span>"}function X(e,a,t,i){for(var r="",n=LibraryBrowser.getPosterViewInfo().backdropWidth,s=0,o=e.length;o>s&&!(t&&s>=t);s++){var l=e[s],d="card detailPage169Card",c="itemdetails.html?id="+l.Id,m="Full"==l.PlayAccess?" onclick=\"MediaController.play('"+l.Id+"'); return false;\"":"";r+='<a class="'+d+'" href="'+c+'"'+m+">",r+='<div class="cardBox">',r+='<div class="cardScalable">';var u,p=l.ImageTags||{};u=p.Primary?ApiClient.getScaledImageUrl(l.Id,{maxWidth:n,tag:p.Primary,type:"primary"}):"css/images/items/detail/video.png",r+='<div class="cardPadder"></div>',r+='<div class="cardContent">',r+='<div class="cardImage lazy" data-src="'+u+'"></div>',r+='<div class="cardFooter">',r+='<div class="cardText">'+l.Name+"</div>",r+='<div class="cardText">',r+=""!=l.RunTimeTicks?Dashboard.getDisplayTime(l.RunTimeTicks):"&nbsp;",r+="</div>",r+="</div>",r+="</div>",r+="</div>",r+="</div>",r+="</a>"}return t&&e.length>t&&(r+='<p style="margin: 0;padding-left:5px;"><paper-button raised class="more '+i+'">'+Globalize.translate("ButtonMore")+"</paper-button></p>"),r}function Y(e,a,t,i){ApiClient.getSpecialFeatures(t.Id,a.Id).then(function(a){var r=e.querySelector("#specialsContent");r.innerHTML=X(a,t,i,"moreSpecials"),ImageLoader.lazyChildren(r)})}function K(e,a,t,i,r){if(v())return void _(e,a,t,r);for(var n="",s=a.People||[],o=0,l=s.length;l>o&&!(i&&o>=i);o++){var d=s[o],c=r?"#":"itemdetails.html?id="+d.Id;n+='<a class="tileItem smallPosterTileItem" href="'+c+'">';var m,u=!0;d.PrimaryImageTag?m=ApiClient.getScaledImageUrl(d.Id,{maxWidth:100,tag:d.PrimaryImageTag,type:"primary",minScale:2}):(m="css/images/items/list/person.png",u=!1),n+=u?'<div class="tileImage lazy" data-src="'+m+'"></div>':'<div class="tileImage" style="background-image:url(\''+m+"');\"></div>",n+='<div class="tileContent">',n+="<p>"+d.Name+"</p>";var p=d.Role?Globalize.translate("ValueAsRole",d.Role):d.Type;"GuestStar"==p&&(p=Globalize.translate("ValueGuestStar")),p=p||"";var h=40;p.length>h&&(p=p.substring(0,h-3)+"..."),n+="<p>"+p+"</p>",n+="</div>",n+="</a>"}i&&s.length>i&&(n+='<p style="margin: 0;padding-left:5px;"><paper-button raised class="more morePeople">'+Globalize.translate("ButtonMore")+"</paper-button></p>");var g=e.querySelector("#castContent");g.innerHTML=n,ImageLoader.lazyChildren(g)}function _(e,a,t,i){var r="";r+=v()?'<div class="hiddenScrollX itemsContainer">':'<div class="itemsContainer">';var n=a.People||[];n=n.filter(function(e){return e.PrimaryImageTag}),n.length||(n=a.People||[]);for(var s=0,o=n.length;o>s;s++){var l=n[s],d=i?"#":"itemdetails.html?id="+l.Id;r+='<div class="card '+f()+'Card">',r+='<div class="cardBox">',r+='<div class="cardScalable">';var c,m=!0;l.PrimaryImageTag?c=ApiClient.getScaledImageUrl(l.Id,{maxWidth:100,tag:l.PrimaryImageTag,type:"primary",minScale:2}):(c="css/images/items/list/person.png",m=!1),r+='<div class="cardPadder"></div>',r+='<a class="cardContent" href="'+d+'">',r+=m?'<div class="cardImage coveredCardImage lazy" data-src="'+c+'"></div>':'<div class="cardImage coveredCardImage" style="background-image:url(\''+c+"');\"></div>",r+="</div>",r+="</a>",r+="</div>",r+='<div class="cardFooter outerCardFooter">',r+='<div class="cardText">'+l.Name+"</div>",r+='<div class="cardText">';var u=l.Role?Globalize.translate("ValueAsRole",l.Role):l.Type;"GuestStar"==u&&(u=Globalize.translate("ValueGuestStar")),u=u||"";var p=40;u.length>p&&(u=u.substring(0,p-3)+"..."),r+=u,r+="</div>",r+="</div>",r+="</div>"}r+="</div>";var h=e.querySelector("#castContent");h.innerHTML=r,ImageLoader.lazyChildren(h)}function Q(e){MediaController.play({items:[ia],startPositionTicks:e})}function J(e){var a=getParameterByName("id");require(["confirm"],function(t){t("Are you sure you wish to split the media sources into separate items?","Split Media Apart").then(function(){Dashboard.showLoadingMsg(),ApiClient.ajax({type:"DELETE",url:ApiClient.getUrl("Videos/"+a+"/AlternateSources")}).then(function(){Dashboard.hideLoadingMsg(),r(e)})})})}function Z(){ApiClient.getLocalTrailers(Dashboard.getCurrentUserId(),ia.Id).then(function(e){MediaController.play({items:e})})}function $(e,a){ia&&ia.Id==a&&("Recording"==ia.Type?LibraryBrowser.showTab("livetv.html",3):Dashboard.navigate("index.html"))}function ea(e){if("Program"==ia.Type)return void ApiClient.getLiveTvChannel(ia.ChannelId,Dashboard.getCurrentUserId()).then(function(e){LibraryBrowser.showPlayMenu(null,e.Id,e.Type,!1,e.MediaType,(e.UserData||{}).PlaybackPositionTicks)});var a=ia.UserData||{},t=ia.MediaType;("MusicArtist"==ia.Type||"MusicAlbum"==ia.Type)&&(t="Audio"),LibraryBrowser.showPlayMenu(e,ia.Id,ia.Type,ia.IsFolder,t,a.PlaybackPositionTicks)}function aa(e,a){require(["confirm"],function(t){t(Globalize.translate("MessageConfirmRecordingCancellation"),Globalize.translate("HeaderConfirmRecordingCancellation")).then(function(){Dashboard.showLoadingMsg(),ApiClient.cancelLiveTvTimer(a).then(function(){Dashboard.alert(Globalize.translate("MessageRecordingCancelled")),r(e)})})})}function ta(){var e=this;e.play=Q,e.setInitialCollapsibleState=u,e.renderDetails=p,e.renderCriticReviews=k,e.renderCast=K,e.renderScenes=q,e.renderMediaSources=O}var ia;e.fn.lazyChildren=function(){for(var e=0,a=this.length;a>e;e++)ImageLoader.lazyChildren(this[e]);return this};var ra=null;pageIdOn("pageinit","itemDetailPage",function(){var a=this;e(".btnPlay",a).on("click",function(){ea(this)}),e(".btnPlayTrailer",a).on("click",function(){Z(a)}),e(".btnSplitVersions",a).on("click",function(){J(a)}),e(".btnSync",a).on("click",function(){require(["syncDialog"],function(e){e.showMenu({items:[ia]})})}),e(".btnRecord,.btnFloatingRecord",a).on("click",function(){var e=getParameterByName("id");require(["components/recordingcreator/recordingcreator"],function(t){t.show(e).then(function(){r(a)})})}),e(".btnCancelRecording",a).on("click",function(){aa(a,ia.TimerId)}),e(".btnMoreCommands",a).on("click",function(){var e=this;Dashboard.getCurrentUser().then(function(a){LibraryBrowser.showMoreCommands(e,ia.Id,LibraryBrowser.getMoreCommands(ia,a))})}),e(".childrenItemsContainer",a).on("playallfromhere",function(e,a){LibraryBrowser.playAllFromHere(ra,a)}).on("queueallfromhere",function(e,a){LibraryBrowser.queueAllFromHere(ra,a)}),e(a).on("click",".moreScenes",function(){Dashboard.getCurrentUser().then(function(e){q(a,ia,e)})}).on("click",".morePeople",function(){K(a,ia,c(ia))}).on("click",".moreSpecials",function(){Dashboard.getCurrentUser().then(function(e){Y(a,ia,e)})}).on("click",".moreCriticReviews",function(){k(a,ia)})}),pageIdOn("pagebeforeshow","itemDetailPage",function(){var e=this;r(e),Events.on(ApiClient,"websocketmessage",l),Events.on(LibraryBrowser,"itemdeleting",$)}),pageIdOn("pagebeforehide","itemDetailPage",function(){Events.off(LibraryBrowser,"itemdeleting",$),ia=null;Events.off(ApiClient,"websocketmessage",l),LibraryMenu.setTransparentMenu(!1)}),t.ItemDetailPage=new ta}(jQuery,document,window);