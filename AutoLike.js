
var __scriptInjectionInstance = window.__scriptInjectionInstance || {
	/*
		to handle timer token
	*/
	timeToken: null,

	callbackInterval: 0.5,

	constant: {
		post: {
			unliked: "fb-ufi-likelink",
			liked: "fb-ufi-unlikelink"	
		},
		comment: {
			unliked: "ufi_comment_like_link"
		}
		
	},


	shouldClickPostLikeButtons: true,

	shouldClickCommentLikeButtons: false,

	counter: 0,

	// main callback function 
	callback: function() {

		var own = __scriptInjectionInstance;
		console.log("Closure Incantated.");

		var likeButtons = document.getElementsByClassName("UFILikeLink");

		var currentLikeButton = likeButtons[own.counter]

		if (!currentLikeButton) {
			console.log("Button is nil. Waiting for Tab to become focused .....");
			// own.counter += 1;
			return;
		}

		currentLikeButton.scrollIntoView();

		// cheeck if the like button is attached to post or a comment
		var likeButtonAttribute = currentLikeButton.getAttribute("data-testid") ;

		console.log("data-testid attribute is ", likeButtonAttribute);
		// console.log("own.constant.post.unliked - ", own.constant.post.unliked);
		console.log("own.constant.comment.unliked is ", own.constant.comment.unliked);

		// if the like button is attached to a post
		if (likeButtonAttribute === own.constant.post.unliked) {

			console.log("it is matched with own.constant.post.unliked - ", own.constant.post.unliked);

			// if post like buttons should be clicked
			if (own.shouldClickPostLikeButtons) {
				// if the button is not already liked or clicked
				console.log("And is also permitted to click");
				if ( !currentLikeButton.className.includes("UFILinkBright") ) {
					// click the like button
					console.log("it does not contain UFILinkBright");
					currentLikeButton.click();
				} else {
					console.log("it contains UFILinkBright. WTF!");
				}
			}
		} 

		// if the like button is attached to a comment
		if (likeButtonAttribute === own.constant.comment.unliked){	

			console.log("matched with own.constant.comment.unliked - ", own.constant.comment.unliked);

			// if the like buttons in comment section should be clicked
			if (own.shouldClickCommentLikeButtons) {

				console.log("And it is permitted to click");
				// if the button is not already liked or clicked
				if ( !currentLikeButton.className.includes("UFILinkBright") ) {

					console.log("It does not contain UFILinkBright");
					currentLikeButton.click();
				} else {
					console.log("It contains UFILinkBright");
				}
			} else {
				console.log("It is not permitted to click");
			}
		}

		own.counter += 1;
	},

	// use to start the injection sequence
	start: function() {
		var own = __scriptInjectionInstance;

		// only if the timer token is not active
		if (own.timerToken == null) {
			// initialize the sequence
			own.timerToken = setInterval( own.callback, own.callbackInterval * 1000);
		}
	},
	// use to stop the injection sequence
	stop: function() {
		var own = __scriptInjectionInstance;

		// only if the timer token is active
		// not equal to null mean it's active and alive
		if (own.timerToken != null) {
			clearInterval(own.timerToken);
			own.timerToken = null;
		}
	},

	reset: function() {
		var own = __scriptInjectionInstance;

		var wasStopped = false;
		if (own.timerToken != null) {
			own.stop();
			wasStopped = true;
		}

		own.counter = 0;

		if (wasStopped) {
			own.start();
		}

	}
};
