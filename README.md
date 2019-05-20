# FacebookAutoLike

**Disclaimer**
> This code may be subject to change in the future with relative to Facebook codebase.

**Limitaitons**
> • Can only give likes. Cannot undone given likes.  
> • Reactions are not yet able to be clicked. I'm working on it at my free time.

In your browser console, copy paste the contents inside the file "AutoLike.js".

Create your engine.

```js
var nexyAutoLikeEngine = NexyAutoLikeEngine()
```

Then, start auto liking by calling 
```js
nexyAutoLikeEngine.start();
```

You can then stop your auto likes by calling
```js
nexyAutoLikeEngine.stop();
```

By default, `nexyAutoLikeEngine.shouldLikePosts` is flagged as `true` but `nexyAutoLikeEngine.shouldLikecomments` is flagged as `false`.

Disabling or enabling one of them of your choice will alter the like sequence.  
Disabling `shouldClickPostLikeButtons` will ignore like buttons from facebook posts.  
Disabling `shouldClickCommentLikeButtons` will ignore like buttons from comment sections.  

Currently `kInterval` is set to `1` second. Any other value lower than `0.5` will potentially result in banning from facebook for like or reaction feature. Eventhough 0.5 is enough for normal conditions, you are vulnerable from banning if your internet connection speed is slow or your browser is slow.

You can change `kInterval` by doing this
```js
nexyAutoLikeEngine.stop(); // stop to make sure callbackInterval will be used in next start
nexyAutoLikeEngine.kInterval = 1; // 1 seconds
nexyAutoLikeEngine.start(); // start your auto like
```

*Now go to someone else's profile, start giving like bombs and get attention from them.*

**Have fun injecting!**


