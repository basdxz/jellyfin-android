define(["apphost","globalize","connectionManager","itemHelper","embyRouter","playbackManager","loading","appSettings"],function(e,n,t,a,r,s,o,i){function l(r){var o=r.item,l=o.ServerId,c=t.getApiClient(l),d=s.canPlay(o);return c.getCurrentUser().then(function(t){var l=[];if(a.supportsAddingToCollection(o)&&l.push({name:n.translate("sharedcomponents#AddToCollection"),id:"addtocollection"}),a.supportsAddingToPlaylist(o)&&l.push({name:n.translate("sharedcomponents#AddToPlaylist"),id:"addtoplaylist"}),"Timer"==o.Type&&t.Policy.EnableLiveTvManagement&&l.push({name:n.translate("sharedcomponents#ButtonCancel"),id:"canceltimer"}),o.CanDelete&&l.push({name:n.translate("sharedcomponents#Delete"),id:"delete"}),a.canEdit(t,o.Type)&&r.edit!==!1){var c=n.translate("Timer"==o.Type?"sharedcomponents#Edit":"sharedcomponents#EditInfo");l.push({name:c,id:"edit"})}return a.canEditImages(t,o.Type)&&r.editImages!==!1&&l.push({name:n.translate("sharedcomponents#EditImages"),id:"editimages"}),a.canEdit(t,o.Type)&&"Video"==o.MediaType&&"TvChannel"!=o.Type&&"Program"!=o.Type&&"Virtual"!=o.LocationType&&r.editSubtitles!==!1&&l.push({name:n.translate("sharedcomponents#EditSubtitles"),id:"editsubtitles"}),o.CanDownload&&e.supports("filedownload")&&l.push({name:n.translate("sharedcomponents#Download"),id:"download"}),r.identify!==!1&&a.canIdentify(t,o.Type)&&l.push({name:n.translate("sharedcomponents#Identify"),id:"identify"}),("Audio"==o.MediaType||"MusicAlbum"==o.Type||"MusicArtist"==o.Type||"MusicGenre"==o.Type||"music"==o.CollectionType)&&r.instantMix!==!1&&l.push({name:n.translate("sharedcomponents#InstantMix"),id:"instantmix"}),e.supports("sync")&&r.syncLocal!==!1&&a.canSync(t,o)&&l.push({name:n.translate("sharedcomponents#MakeAvailableOffline"),id:"synclocal"}),d&&(r.play!==!1&&(l.push({name:n.translate("sharedcomponents#Play"),id:"resume"}),I&&i.enableExternalPlayers()&&l.push({name:n.translate("ButtonPlayExternalPlayer"),id:"externalplayer"})),r.playAllFromHere&&"Program"!=o.Type&&"TvChannel"!=o.Type&&l.push({name:n.translate("sharedcomponents#PlayAllFromHere"),id:"playallfromhere"}),s.canQueue(o)&&(r.queue!==!1&&l.push({name:n.translate("sharedcomponents#Queue"),id:"queue"}),r.queueAllFromHere&&l.push({name:n.translate("sharedcomponents#QueueAllFromHere"),id:"queueallfromhere"}))),"Program"!=o.Type||o.TimerId||o.SeriesTimerId||l.push({name:Globalize.translate("sharedcomponents#Record"),id:"record"}),t.Policy.IsAdministrator&&"Timer"!=o.Type&&"Program"!=o.Type&&l.push({name:n.translate("sharedcomponents#Refresh"),id:"refresh"}),o.PlaylistItemId&&r.playlistId&&l.push({name:n.translate("sharedcomponents#RemoveFromPlaylist"),id:"removefromplaylist"}),r.collectionId&&l.push({name:n.translate("sharedcomponents#RemoveFromCollection"),id:"removefromcollection"}),r.share!==!1&&a.canShare(t,o)&&l.push({name:n.translate("sharedcomponents#Share"),id:"share"}),(o.IsFolder||"MusicArtist"==o.Type||"MusicGenre"==o.Type)&&r.shuffle!==!1&&l.push({name:n.translate("sharedcomponents#Shuffle"),id:"shuffle"}),r.sync!==!1&&a.canSync(t,o)&&l.push({name:n.translate("sharedcomponents#SyncToOtherDevice"),id:"sync"}),r.openAlbum!==!1&&o.AlbumId&&l.push({name:Globalize.translate("sharedcomponents#ViewAlbum"),id:"album"}),r.openArtist!==!1&&o.ArtistItems&&o.ArtistItems.length&&l.push({name:Globalize.translate("sharedcomponents#ViewArtist"),id:"artist"}),l})}function c(e,n,t,a){return function(){e({command:n,updated:t,deleted:a})}}function d(e,n,a){var o=e.Id,i=e.ServerId,l=t.getApiClient(i);return new Promise(function(t,d){switch(n){case"addtocollection":require(["collectionEditor"],function(e){(new e).show({items:[o],serverId:i}).then(c(t,n,!0),c(t,n))});break;case"addtoplaylist":require(["playlistEditor"],function(e){(new e).show({items:[o],serverId:i}).then(c(t,n,!0),c(t,n))});break;case"download":require(["fileDownloader"],function(e){var a=l.getUrl("Items/"+o+"/Download",{api_key:l.accessToken()});e.download([{url:a,itemId:o,serverId:i}]),c(c(t,n),n)()});break;case"editsubtitles":require(["subtitleEditor"],function(e){e.show(o,i).then(c(t,n,!0),c(t,n))});break;case"edit":h(l,e).then(c(t,n,!0),c(t,n));break;case"editimages":require(["imageEditor"],function(e){e.show({itemId:o,serverId:i}).then(c(t,n,!0),c(t,n))});break;case"identify":require(["itemIdentifier"],function(e){e.show(o,i).then(c(t,n,!0),c(t,n))});break;case"refresh":f(l,o),c(t,n)();break;case"open":r.showItem(e),c(t,n)();break;case"play":m(e,!1),c(t,n)();break;case"resume":m(e,!0),c(t,n)();break;case"queue":m(e,!1,!0),c(t,n)();break;case"record":require(["recordingCreator"],function(e){e.show(o,i).then(c(t,n,!0),c(t,n))});break;case"shuffle":s.shuffle(e),c(t,n)();break;case"instantmix":s.instantMix(e),c(t,n)();break;case"delete":p(l,o).then(c(t,n,!0,!0),c(t,n));break;case"share":require(["sharingmanager"],function(e){e.showMenu({serverId:i,itemId:o}).then(c(t,n))});break;case"externalplayer":LibraryBrowser.playInExternalPlayer(o),c(t,n)();break;case"album":r.showItem(e.AlbumId,e.ServerId),c(t,n)();break;case"artist":r.showItem(e.ArtistItems[0].Id,e.ServerId),c(t,n)();break;case"playallfromhere":c(t,n)();break;case"queueallfromhere":c(t,n)();break;case"sync":require(["syncDialog"],function(n){n.showMenu({items:[e],serverId:i})}),c(t,n)();break;case"synclocal":require(["syncDialog"],function(n){n.showMenu({items:[e],isLocalSync:!0,serverId:i})}),c(t,n)();break;case"removefromplaylist":l.ajax({url:l.getUrl("Playlists/"+a.playlistId+"/Items",{EntryIds:[e.PlaylistItemId].join(",")}),type:"DELETE"}).then(function(){c(t,n,!0)()});break;case"removefromcollection":l.ajax({type:"DELETE",url:l.getUrl("Collections/"+a.collectionId+"/Items",{Ids:[e.Id].join(",")})}).then(function(){c(t,n,!0)()});break;case"canceltimer":u(l,e,t,n);break;default:d()}})}function u(e,t,a,r){require(["confirm"],function(s){s(n.translate("sharedcomponents#MessageConfirmRecordingCancellation"),n.translate("sharedcomponents#HeaderConfirmRecordingCancellation")).then(function(){o.show(),e.cancelLiveTvTimer(t.Id).then(function(){require(["toast"],function(e){e(n.translate("sharedcomponents#RecordingCancelled"))}),o.hide(),c(a,r,!0)()})})})}function m(e,n,t){var a=t?"queue":"play",r=0;n&&e.UserData&&e.UserData.PlaybackPositionTicks&&(r=e.UserData.PlaybackPositionTicks),s[a]("Program"==e.Type?{ids:[e.ChannelId],startPositionTicks:r}:{items:[e],startPositionTicks:r})}function h(e,n){return new Promise(function(t,a){var r=e.serverInfo().Id;"Timer"==n.Type?require(["recordingEditor"],function(e){e.show(n.Id,r).then(t,a)}):require(["metadataEditor"],function(e){e.show(n.Id,r).then(t,a)})})}function p(e,t){return new Promise(function(a,r){var s=n.translate("sharedcomponents#ConfirmDeleteItem"),o=n.translate("sharedcomponents#HeaderDeleteItem");require(["confirm"],function(n){n(s,o).then(function(){e.deleteItem(t).then(function(){a(!0)})},r)})})}function f(e,n){require(["refreshDialog"],function(t){new t({itemIds:[n],serverId:e.serverInfo().Id}).show()})}function y(e){return l(e).then(function(n){return new Promise(function(t,a){require(["actionsheet"],function(r){r.show({items:n,positionTo:e.positionTo}).then(function(n){d(e.item,n,e).then(t)},a)})})})}var I=null!=window.Dashboard;return{getCommands:l,show:y}});