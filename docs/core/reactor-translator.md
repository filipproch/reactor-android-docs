---
description: Documentation
parent: docs
---

## ReactorTranslator

This is the interface representation of the __Translator__ concept in the __Reactor__ library.

It's lifecycle consists of two methods

### onInstanceCreated()

Called when new instance of the translator was created

### onBeforeInstanceDestroyed()

Called before the instance is destroyed and thrown away

## BaseReactorTranslator

This is the actual implementation of a `ReactorTranslator`

It's lifecycle methods are as follows

### onCreated()

Called when new instance of the translator was created

### onBeforeDestroyed()

Called before the instance is destroyed and thrown away

## Translation methods

As the `ReactorTranslator` is about translating `ReactorUiEvent`s to your __Model__ layer
 it contains few methods to help you do that.
 
### translateToModel(reaction: (Observable\<ReactorUiEvent\>) -> Observable<ReactorUiModel>)

Can be used to translate incoming `ReactorUiEvent` instances to your __Model__ layer and then
 translate it's response back to `ReactorUiModel` that will be delivered to bound `ReactorView`

### translateToAction(reaction: (Observable\<ReactorUiEvent\>) -> Observable<ReactorUiAction>)

Can be used to translate incoming `ReactorUiEvent` instances to your __Model__ layer and then
 translate it's response back to `ReactorUiAction` that will be delivered to bound `ReactorView`
 
### reactTo(reaction: (Observable\<ReactorUiEvent\>) -> Disposable)

Can be used to translate incoming `ReactorUiEvent` instances to your __Model__ layer without
 delivering response to bound `ReactorView` directly