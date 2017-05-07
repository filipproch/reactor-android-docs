---
description: Documentation
parent: docs
---

This is the base interface representing a __View__ in the __Reactor__ library.

It has a few methods that represent various steps in the __Reactor__ lifecycle

## translatorFactory (getTranslatorFactory() in Java)

Must return a `TranslatorFactory` instance, that will be used to instantiate the `ReactorTranslator` that is
 paired with this `ReactorView`
 
## onEmittersInit()

Called to allow you to register your `ReactorUiEvent` emitters. After this method executes, it's not possible to
 register event emitters anymore.
 
## registerEmitter(emitter: Observable<ReactorUiEvent>)

Registers an `ReactorUiEvent` emitter with this `ReactorView` instance.
__!IMPORTANT: this method can be called only within the `onEmittersInit` method__

## onConnectModelStream(modelStream: Observable<ReactorUiModel>)
## onConnectActionStream(actionStream: Observable<ReactorUiAction>)

Called when the stream of `ReactorUiModel` or `ReactorUiAction` is connected from the `ReactorTranslator` that is paired with this
 `ReactorView`.
  
This is the place where you should register receivers of your various `ReactorUiModel` implementations. You can use
 one of the few util methods to make sure you are working on Android UI Thread.
 
__Example__
```kotlin
override fun onConnectModelStream(modelStream: Observable<out ReactorUiModel>) {
    super.onConnectModelStream(modelStream)
    modelStream.ofType(MainUiModel::class.java).consumeOnUi {
        vProgressBar.visibility = if (it.isLoading) View.VISIBLE else View.GONE

        when {
            it.success == true -> {
                vTextView.text = it.postTitle
                vTextView2.text = it.postContent
            }
            it.success == false -> {
                Toast.makeText(this, "Failed", Toast.LENGTH_SHORT).show()
            }
        }
    }
}
```

### Observable<T>.consumeOnUi(receiverAction: Consumer<T>)
NOTE: if you are using Java, the `Observable` is the first parameter of this method

Util method to make sure you are handling the received `ReactorUiModel` or `ReactorUiAction` on Android UI Thread.
It subscribes to the `Observable` with `receiverAction` on `AndroidSchedulers.mainThread()`

## dispatch(event: ReactorUiEvent)

Helpful method, allows you to dispatch events without registering your emitter. Especially useful with Android
 lifecycle methods like `onActivityResult`