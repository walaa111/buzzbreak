// Add to index.js or the first page that loads with your app.
// For Intel XDK and please add this to your app.js.

document.addEventListener('deviceready', function () {
    alert("yes");
  // Enable to debug issues.
  window.plugins.OneSignal.setLogLevel({logLevel: 6, visualLevel: 0});
  
  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("6bb1e8be-c6aa-43b2-9e96-9dfad497a41a")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
}, false);


