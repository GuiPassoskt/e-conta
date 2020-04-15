# Quasar App

> WIP

Comandos:

Assinatura =>

```
 jarsigner.exe -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore D:\my-release-key.keystore D:\0.PIMPA\APLICATIVOS\QUASAR_WORKSPACE\e-conta\src-cordova\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk decodezero

```

Zip => 

```
zipalign -f -v 4 D:\0.PIMPA\APLICATIVOS\QUASAR_WORKSPACE\e-conta\src-cordova\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk D:\0.PIMPA\APLICATIVOS\QUASAR_WORKSPACE\e-conta\src-cordova\platforms\android\app\build\outputs\apk\release\E-Conta.apk

```
