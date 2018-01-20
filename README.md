# FacebookAutoLike

In your browser console, copy paste the contents inside the file "AutoLike.js".

Then, start auto liking by calling 
```js
__scriptInjectionInstance.start();
```

You can then stop your auto likes by calling
```js
__scriptInjectionInstance.stop();
```

If you wish to restart from the start, calling the following will do the job.
```js
__scriptInjectionInstance.reset();
```

By default, `__scriptInjectionInstance.shouldClickPostLikeButtons` and `__scriptInjectionInstance.shouldClickCommentLikeButtons` are flagged as `true`.
