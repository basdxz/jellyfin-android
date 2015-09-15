﻿(function(){function getLocalMediaSource(serverId,itemId){var deferred=DeferredBuilder.Deferred();deferred.resolveWith(null,[null]);return deferred.promise();}
function saveOfflineUser(user){var deferred=DeferredBuilder.Deferred();deferred.resolve();return deferred.promise();}
function getCameraPhotos(){var deferred=DeferredBuilder.Deferred();deferred.resolveWith(null,[[]]);return deferred.promise();}
function getOfflineActions(serverId){var deferred=DeferredBuilder.Deferred();deferred.resolveWith(null,[[]]);return deferred.promise();}
function getServerItemIds(serverId){var deferred=DeferredBuilder.Deferred();deferred.resolveWith(null,[[]]);return deferred.promise();}
function removeLocalItem(itemId,serverId){var deferred=DeferredBuilder.Deferred();deferred.resolveWith(null,[]);return deferred.promise();}
function getLocalItem(itemId,serverId){var deferred=DeferredBuilder.Deferred();deferred.resolveWith(null,[]);return deferred.promise();}
function addOrUpdateLocalItem(localItem){var deferred=DeferredBuilder.Deferred();deferred.resolveWith(null,[]);return deferred.promise();}
function createLocalItem(libraryItem,serverInfo,originalFileName){var item={};var deferred=DeferredBuilder.Deferred();deferred.resolveWith(null,[item]);return deferred.promise();}
function downloadFile(url,localPath){var deferred=DeferredBuilder.Deferred();deferred.resolveWith(null,[]);return deferred.promise();}
function downloadSubtitles(url,localItem,subtitleStreamh){var deferred=DeferredBuilder.Deferred();deferred.resolveWith(null,[""]);return deferred.promise();}
function hasImage(serverId,itemId,imageTag){var deferred=DeferredBuilder.Deferred();deferred.resolveWith(null,[false]);return deferred.promise();}
function downloadImage(url,serverId,itemId,imageTag){var deferred=DeferredBuilder.Deferred();deferred.resolveWith(null,[false]);return deferred.promise();}
window.LocalAssetManager={getLocalMediaSource:getLocalMediaSource,saveOfflineUser:saveOfflineUser,getCameraPhotos:getCameraPhotos,getOfflineActions:getOfflineActions,getServerItemIds:getServerItemIds,removeLocalItem:removeLocalItem,getLocalItem:getLocalItem,addOrUpdateLocalItem:addOrUpdateLocalItem,createLocalItem:createLocalItem,downloadFile:downloadFile,downloadSubtitles:downloadSubtitles,hasImage:hasImage,downloadImage:downloadImage};})();