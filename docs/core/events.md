---
description: Documentation
parent: docs
---

## Events

With the built-in `ReactorView` implementations come the following events,
 that essentially represent the standard Android Lifecycle for `Activity` or `Fragment`

### ViewCreatedEvent(savedInstanceState: Bundle?)
Corresponds to `onCreate` method in Android Activity Lifecycle

### ViewStartedEvent
Corresponds to `onStart` method in Android Activity Lifecycle

### ViewResumedEvent
Corresponds to `onResume` method in Android Activity Lifecycle

### ViewPausedEvent
Corresponds to `onPause` method in Android Activity Lifecycle

### ViewStoppedEvent
Corresponds to `onStop` method in Android Activity Lifecycle

### ViewDestroyedEvent
Corresponds to `onDestroy` method in Android Activity Lifecycle

__NOTE: if the `Activity` is finishing, this event won't be dispatched,
 because the Translator instance is destroyed before `onDestroy()` is called__