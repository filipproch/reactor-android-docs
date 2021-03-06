---
description: "Library for writing Android apps in a reactive way"
---

![Build Status](https://circleci.com/gh/filipproch/reactor-android/tree/master.svg?style=shield)
![Latest Version](https://api.bintray.com/packages/filipproch/maven/reactor-android/images/download.svg)
![codecov](https://codecov.io/gh/filipproch/reactor-android/branch/master/graph/badge.svg)

Reactor is a small Android library to help you write your apps in a reactive and functional way. It helps you manage
 the state of the application and separate your logic from the view.

See [documentation](/docs/) to learn more.

## KDoc / JavaDoc

__Official KDoc is located here:__
 - [reactor-android](https://reactor-android.firebaseapp.com/kdoc/library/)
 - [reactor-android-extras](https://reactor-android.firebaseapp.com/kdoc/library-extras/)

__Official JavaDoc is located here:__
 - [reactor-android](https://reactor-android.firebaseapp.com/javadoc/library/)
 - [reactor-android-extras](https://reactor-android.firebaseapp.com/javadoc/library-extras/)

## Add library to your project

Latest Version : ![Latest Version](https://api.bintray.com/packages/filipproch/maven/reactor-android/images/download.svg)

```groovy
dependencies {
    // Reactor Core
    compile 'cz.filipproch.lib:reactor-android:<VERSION>'
    // Reactor Extras
    compile 'cz.filipproch.lib:reactor-android-extras:<VERSION>'
}
```

### Snapshot builds
![Build Status](https://circleci.com/gh/filipproch/reactor-android/tree/dev.svg?style=shield)
![codecov](https://codecov.io/gh/filipproch/reactor-android/branch/dev/graph/badge.svg)

You can use Jitpack.io to obtain latest SNAPSHOT builds

```groovy
allprojects {
    repositories {
        maven { url 'https://jitpack.io' }
    }
}
```

**dev** - the latest commit on `dev` branch

```groovy
dependencies {
    // Reactor Core
    compile 'com.github.filipproch.reactor-android:reactor-android:dev-SNAPSHOT'
    // Reactor Extras
    compile 'com.github.filipproch.reactor-android:reactor-android-extras:dev-SNAPSHOT'
}
```

## Contribute

Contributions are welcome (both in terms of discussion and adding new features / fixing bugs).
 I just want to note that you should look at the code around and keep the Code Style consistent.