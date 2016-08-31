define(["apphost","connectionManager","events","globalize","css!./dockedtabs","emby-tabs"],function(t,e,a,n){function o(t){var e=h.filter(function(e){return e.Id==t})[0];e&&Emby.Page.showItem(e)}function s(t){switch(t){case"settings":Emby.Page.showSettings();break;case"signout":Dashboard.logout();break;case"selectserver":Emby.Page.showSelectServer();break;case"reports":Dashboard.navigate("reports.html");break;case"metadatamanager":Dashboard.navigate("metadatamanager.html");break;case"manageserver":Dashboard.navigate("dashboard.html");break;case"sync":Dashboard.navigate("mysync.html");break;default:o(t)}}function i(t,e){require(["webActionSheet"],function(a){a.show({items:t,positionTo:e,entryAnimation:"slideup",exitAnimation:"fadeout",entryAnimationDuration:160,exitAnimationDuration:100,offsetTop:-30,positionY:"top",dialogClass:"dockedtabs-dlg",menuItemClass:"dockedtabs-dlg-menuitem"}).then(s)})}function d(t){var e=h.map(function(t){return{name:t.Name,id:t.Id}});i(e,t)}function b(t){var e=[];g.Policy.IsAdministrator&&(e.push({name:n.translate("ButtonManageServer"),id:"manageserver"}),e.push({name:n.translate("MetadataManager"),id:"metadatamanager"}),e.push({name:n.translate("ButtonReports"),id:"reports"})),Dashboard.isConnectMode()&&e.push({name:n.translate("HeaderSelectServer"),id:"selectserver"}),e.push({name:n.translate("TabSettings"),id:"settings"}),g.Policy.EnableSync&&e.push({name:n.translate("SyncToOtherDevices"),id:"sync"}),e.push({name:n.translate("ButtonSignOut"),id:"signout"}),i(e,t)}function r(t){var e=parseInt(this.getAttribute("data-index"));switch(e){case 0:Emby.Page.goHome();break;case 1:d(this),t.preventDefault(),t.stopPropagation();break;case 2:Emby.Page.showLiveTV();break;case 3:Emby.Page.showFavorites();break;case 4:Dashboard.navigate("mysync.html?mode=offline");break;case 5:b(this),t.preventDefault(),t.stopPropagation()}}function c(e){var a=document.createElement("div");a.classList.add("hide"),a.classList.add("dockedtabs"),a.classList.add("dockedtabs-bottom");var o="",s=t.supports("sync")?" dockedtab-midsize":"";o+='    <div is="emby-tabs" class="dockedtabs-tabs" data-selectionbar="false">            <button is="emby-button" class="dockedtabs-tab-button emby-tab-button emby-tab-button-active" data-index="0">                <div class="dockedtabs-tab-button-foreground emby-button-foreground"><i class="dockedtabs-tab-button-icon md-icon">home</i><div>'+n.translate("TabHome")+'</div></div>            </button>            <button is="emby-button" class="dockedtabs-tab-button emby-tab-button" data-index="1">                <div class="dockedtabs-tab-button-foreground emby-button-foreground"><i class="dockedtabs-tab-button-icon md-icon">dvr</i><div>'+n.translate("HeaderLibraries")+'</div></div>            </button>            <button is="emby-button" class="dockedtabs-tab-button emby-tab-button docked-tab-livetv'+s+'" data-index="2">                <div class="dockedtabs-tab-button-foreground emby-button-foreground"><i class="dockedtabs-tab-button-icon md-icon">live_tv</i><div>'+n.translate("HeaderLiveTV")+'</div></div>            </button>            <button is="emby-button" class="dockedtabs-tab-button emby-tab-button homeFavoritesTab" data-index="3">                <div class="dockedtabs-tab-button-foreground emby-button-foreground"><i class="dockedtabs-tab-button-icon md-icon">favorite</i><div>'+n.translate("TabFavorites")+"</div></div>            </button>",t.supports("sync")&&(o+='<button is="emby-button" class="dockedtabs-tab-button emby-tab-button" data-index="4">                <div class="dockedtabs-tab-button-foreground emby-button-foreground"><i class="dockedtabs-tab-button-icon md-icon">file_download</i><div>'+n.translate("Downloads")+"</div></div>            </button>            "),o+='<button is="emby-button" class="dockedtabs-tab-button emby-tab-button" data-index="5">                <div class="dockedtabs-tab-button-foreground emby-button-foreground"><i class="dockedtabs-tab-button-icon md-icon">menu</i><div>'+n.translate("ButtonMore")+"</div></div>            </button>    </div>",a.innerHTML=o;for(var i=a.querySelectorAll(".emby-tab-button"),d=0,b=i.length;b>d;d++)i[d].addEventListener("click",r);return e.appFooter.add(a),a}function u(t,e,a){e.filter(function(t){return"livetv"==t.CollectionType}).length?a.querySelector(".docked-tab-livetv").classList.remove("hide"):a.querySelector(".docked-tab-livetv").classList.add("hide")}function l(t,e){g=t;var a=ConnectionManager.getApiClient(t.ServerId);a.getUserViews({},t.Id).then(function(a){h=a.Items,u(t,a.Items,e)},function(){h=[],u(t,[],e)})}function m(t){Dashboard.getCurrentUserId()&&Dashboard.getCurrentUser().then(function(e){l(e,t)})}function v(t){var n=this;n.element=c(t),a.on(e,"localusersignedin",function(t,e){n.element.classList.remove("hide"),l(e,n.element)}),a.on(e,"localusersignedout",function(){n.element.classList.add("hide")}),m(n.element)}var g={},h=[];return v.prototype.destroy=function(){{var t=this;t.element}t.element=null},v});