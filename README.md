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

Disabling one of them of your choice will alter the liking sequence.
Disabling `shouldClickPostLikeButtons` will ignore like buttons from facebook posts.
Disabling `shouldClickCommentLikeButtons` will ignore like buttons from comment sections.

Currently `callbackInterval` is set to `0.5` seconds. Any other value lower than this will result in banning from facebook for like button feature. Eventhough 0.5 is enough for normal conditions, you are vulnerable from banning if your internet connection speed is slow or your browser is slow.

*Now go to your crush's profile and start giving like bombs*

**Have fun injecting!**
