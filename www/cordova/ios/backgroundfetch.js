﻿(function () {

    function onDeviceReady() {

        var fetcher = window.BackgroundFetch;

        fetcher.configure(onBackgroundFetch, onBackgroundFetchFailed, {
            stopOnTerminate: false  // <-- false is default
        });
    }

    function onSyncFinish() {

        var fetcher = window.BackgroundFetch;
        fetcher.finish();   // <-- N.B. You MUST called #finish so that native-side can signal completion of the background-thread to the os.
    }

    function onBackgroundFetch() {

        Logger.log('BackgroundFetch initiated');

        require(['localsync'], function () {

            if (LocalSync.getSyncStatus() == 'Syncing') {
                onSyncFinish();
                return;
            }

            var syncOptions = {
                uploadPhotos: false
            };

            LocalSync.sync(syncOptions).done(onSyncFinish).fail(onSyncFinish);
        });
    }

    function onBackgroundFetchFailed() {
        Logger.log('- BackgroundFetch failed');
    }

    onDeviceReady();
})();