---
description: Documentation
parent: docs
---

## Android Architecture

This library bring few architectural concepts / patterns together and tries
 to make it easier to develop Android apps with those concepts / patterns.
 
__Inspiration__

 - [MVVM (Model–View–ViewModel) architecture](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel)
 - [Redux](https://github.com/reactjs/redux)
 - [Jake Wharton's talk on managing Android Application state](https://www.youtube.com/watch?v=0IKHxjkgop4)
 
And also own experience with developing Android apps for many years, trying
 various approaches and architecture patterns.
 
## Translator Concept

So as I already mentioned, this library is inspired by MVVM architecture.
 What it brings to the table is a concept of __Translator__.
 
__Translator__ is a connector (glue if you want) between your __Model__ and __View__. Why would you want that?
 Well it gives you the possibility to reuse your __Views__ (because they communicate with the given __Translator__
 using primitive objects, that represent and allow you to control the __View__).
 
 Same what it gives you for __Translator__ <-> __View__ interaction works with __Translator__ <-> __Model__ interaction
 too.
 
 Now, let's look at the image below, that explains how it works best.

<p style="text-align: center;">
    <img src="/img/schemas/Reactor_Arch.png" alt="Reactive Architecture" width="600">
</p>

 As you can see, for the communication
 
 __Translator__ <-> __View__
 
 There are following objects
 
### Event

Events are emitted by the __View__. They inform you about what is happening and allow you to react.

Usually, you will translate them to __Requests__ to your __Model__ layer and wait for __Response__

### UI Model

UI Models allow you to control the __View__. Unlike __Actions__ below, __Models__ survive Android orientation
 changes and unless the __Translator__ is destroyed by system due to not enough memory, are created only once per
 __View__. If the __View__ instance is destroyed, the last version of the given __Model__ is immediately dispatched
 once the __View__ is recreated.
 
UI Models usually represent the current state of the __View__. For example, whether a list of items is shown,
 or progress bar is shown instead.

### UI Action

UI Actions are the one time control mechanisms of your __View__. They may cause your view to destroy itself,
 open a one time dialog.
 
UI Actions are delivered only if the __View__ is bound at the time of the __Action__ being dispatched,
 and don't survive orientation changes. If you dispatch an __Action__, it's delivered only once.

<p class="important-note">
!!! Translators contain no logic (apart from mapping <b>Events</b> to <b>Requests</b> and so on) !!!
</p>