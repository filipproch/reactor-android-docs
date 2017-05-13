---
description: Documentation
parent: docs
---

## Android Architecture

This document covers the essential ideas behind this library and architectural patterns this library is built around.
 
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
 
## __Translator__ <-> __View__
 
 As you can see in the diagram, the communication between __Translator__ and __View__ is done using
 the following concept objects.
 
### Event

Events are emitted by the __View__. They inform you about what is happening and allow you to react.

Usually, you will translate them to __Requests__ to your __Model__ layer and wait for __Response__

Example:
```kotlin
/**
* This would be dispatched by the View when users clicks a button
* 
* It would collect the data from fields and dispatch this event
*/
data class LoginRequestedEvent(
    val username: String,
    val password: String
)
```

### UI Model

UI Models allow you to control the __View__. Unlike __Actions__ below, __Models__ survive Android orientation
 changes and unless the __Translator__ is destroyed by system due to not enough memory, are created only once per
 __View__. If the __View__ instance is destroyed, the last version of the given __Model__ is immediately dispatched
 once the __View__ is recreated.
 
UI Models usually represent the current state of the __View__. For example, whether a list of items is shown,
 or progress bar is shown instead.

```kotlin
/**
* This would start with [isProgressShown] set to true
* 
* Then once the Model layer completes it's operations, it would
* return new [CakeListUiModel] instances with [isProgressShown]
* set to false and appropriate values of other fields
*/
data class CakeListUiModel(
    /** Tells the View whether or not to show progress bar */
    val isProgressShown: Boolean,
    /** A list of cakes to display, it's important that it's nullable */
    val dataList: List<Cake>?,
    /** Error, again nullable, used by the View to show an error message */
    val error: Throwable?
)
```

### UI Action

UI Actions are the one time control mechanisms to your __View__. They may instruct your view to destroy itself or
 open a one time dialog.
 
UI Actions are delivered only if the __View__ is bound at the time of the __Action__ being dispatched,
 and don't survive orientation changes. If you dispatch an __Action__, it's delivered only once.
 
Example:
```kotlin
/**
* This would be used to instruct the View to destroy itself
* in a monumental explosion with the given [amountOfTNT]
*/
data class DestroyViewWithExplosion(
    /** The amount of TNT used to destroy the View */
    val amountOfTNT: Int
)
```

## __Translator__ <-> __Model__
 
 The communication between __Translator__ and __Model__ is done using
 the following concept objects.
 
### Request

__Request__ represents definition of an action you want your __Model__ layer to execute.
 
Example:
```kotlin
data class FetchRepositoryRequest(
    /**
     * Name of the repository we want to fetch 
     */
    val repositoryName: String
)
```

### Response

__Response__ represents the result of an action on your __Model__.

Example:
```kotlin
data class FetchRepositoryResponse(
    /** 
     * When set to true mean that the Model started fetching the repository
     * we would translate this to our view so it would start showing a progress bar
     */
    val inProgress: Boolean,
    /**
     * The result of the fetch, not null if successful
     */
    val repository: Repo?,
    /**
     * If the fetch somehow fails, this won't be null
     */
    val error: Throwable?
)
```

<p class="important-note">
It's important to note that <b>Translators</b> shouldn't contain any logic (apart from mapping <b>Events</b>
 to <b>Requests</b> and <b>Responses</b> to <b>UiModels</b> or <b>UiActions</b>)
</p>