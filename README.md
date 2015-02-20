This is a package I created for myself so that I didnt have to add all the cordova plugins I needed at the beginning of every new
project. These are the cordova plugins I most use for my applications.


Cordova plugins will be downloaded / installed when you build your application:

    Steps if you dont know how to run a meteor / cordova app:

    * meteor create [appName] (create your meteor project)
    * cd [appname] (cd into directory)
    * meteor add mirrorcell:cordova-starter (install this package)
    * meteor add-platform android -OR- meteor add-platform ios (add your target platform(s))
    * meteor run android-device --mobile-server=localhost:3000 (run the program on your device pointed to your local server)


Suggestions for others not included:

raix:push -- Best way to push android / iphone / other users using the cordova push plugin.
launch-screen -- Shows the user a loading screen while your UI is rendered (past the initial splash)

Shout out to my geolocaiton abstraction package: mirrorcell:location.