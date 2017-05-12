---
description: Documentation
parent: docs
---

## ReactorView

<img src="/img/schemas/ReactorView_Lifecycle.png" width="300" style="float: right">

This is the base interface representing a __View__ in the __Reactor__ library. It has it's guaranteed lifecycle,
 as you can see on the image.
 
Each method of this lifecycle is guaranteed to be run only once per __ReactorView__ instance. It's important to note, that
 most Android `ReactorView` implementations will get destroyed and recreated, causing the lifecycle to be invoked again.
 
As each `ReactorView` is deeply connected with it's `ReactorTranslator` it must implement ```getTranslatorFactory()```
 method. You have to return a `ReactorTranslatorFactory` instance, that will be used to instantiate your `ReactorTranslator`
 when your view is created for the first time or the translator was previously destroyed.
 
### onEmittersInit()

Is the only place where you can register your `ReactorUiEvent` emitters.

This can be done using another `ReactorView` method, `ReactorView.registerEmitter(emitter: Observable<ReactorUiEvent>)`
 
### onConnectModelStream(modelStream: Observable<ReactorUiModel>)

Is called when the stream of `ReactorUiModel`s from your `ReactorTranslator` is bound with your `ReactorView` instance.

__It's guaranteed that `ReactorUiModel` emissions will start after this method is executed__

### onConnectActionStream(actionStream: Observable<ReactorUiAction>)
 
Is called when the stream of `ReactorUiAction`s from your `ReactorTranslator` is bound with your `ReactorView` instance.

__It's guaranteed that `ReactorUiAction` emissions will start after this method is executed__
 
<div style="clear: both;"></div>

## Helper methods

### Observable<T>.consumeOnUi(receiverAction: Consumer<T>)
NOTE: if you are using Java, the `Observable` is the first parameter of this method

Util method to make sure you are handling the received `ReactorUiModel` or `ReactorUiAction` on Android UI Thread.
It subscribes to the `Observable` with `receiverAction` on `AndroidSchedulers.mainThread()`

### dispatch(event: ReactorUiEvent)

Helpful method, allows you to dispatch events without registering your emitter. Especially useful with Android
 lifecycle methods like `onActivityResult`

## Built-in implementations

There are some built-in `ReactorView` implementations you can use, namely the following

| Android View                               | Reactor View Implementation |
| ------------------------------------------ | --------------------------- |
| `android.support.v7.app.AppCompatActivity` | [`ReactorCompatActivity`](https://reactor-android.firebaseapp.com/kdoc/library/cz.filipproch.reactor.ui/-reactor-compat-activity/index.html)     |
| `android.support.v4.app.Fragment`          | [`ReactorFragment`](https://reactor-android.firebaseapp.com/kdoc/library/cz.filipproch.reactor.ui/-reactor-fragment/index.html)           |
| `android.support.v4.app.DialogFragment`    | [`ReactorDialogFragment`](https://reactor-android.firebaseapp.com/kdoc/library/cz.filipproch.reactor.ui/-reactor-dialog-fragment/index.html)     |
