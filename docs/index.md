---
description: Documentation
---

## Quick start

If you wan't to start using this library as soon as possible, head to [Quick Start](/docs/library/quick-start.html) section
 on the left.
 
After that, you can continue with the [Example](/docs/library/example.html), which should be together
 enough for you to use this library.

<p class="note">
It's highly recommended to visit the Architecture <a href="/docs/architecture/overview.html">Overview</a>
 and <a href="/docs/architecture/patterns.html">Patterns</a> pages, as using this library requires
 a little different mindset and organization of your code.
</p>

### Core

Core package of this library.
 
It's represented by maven artifact `reactor-android` 

Add it to your project:
```groovy
dependencies {
    // Reactor Core
    compile 'cz.filipproch.lib:reactor-android:<VERSION>'
}
```

### Extras

Extras package of this library. This package contains some often used implementations and patterns 
already implemented and ready to use. As the name suggests it's not required to be used with the library.
 
It's represented by maven artifact `reactor-android-extras`

```groovy
dependencies {
    // Reactor Extras
    compile 'cz.filipproch.lib:reactor-android-extras:<VERSION>'
}
```