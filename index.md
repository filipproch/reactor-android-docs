---
description: "Library for writing Android apps in a reactive way"
---

[![Build Status](https://travis-ci.org/filipproch/reactor-android.svg?branch=master)](https://travis-ci.org/filipproch/reactor-android)
![Latest Version](https://api.bintray.com/packages/filipproch/maven/reactor-android/images/download.svg)

Reactor is a small Android library to help you write your apps in a reactive and functional way. It helps you manage
 the state of the application and separate your logic from the view.

See [documentation](/docs.html) to learn more.

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

TBD