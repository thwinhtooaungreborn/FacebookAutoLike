function NexyAutoLikeEngine() {
    var obj = {

        currentIndex: 0,
        kInterval: (1), // 0.5 second
        timerToken: null,
        shouldLikePost: true,
        shouldLikeComments: false,
    
        // Summon the almighty auto like demon lucifucker.
        // Wahahahaha ha ha ha ha hah ah aksjfdkljaslfjlasjdf
        // fuck this.
        // lasjflkasdfl kjaslfj lasdlk f
        start: function() {


            if (this.timerToken == null) {
                // captuer the token

                this.timerToken = setInterval(function() {

                    var buttons = document.querySelectorAll('[data-testid="UFI2ReactionLink"]')
                    var currentButton = buttons[obj.currentIndex]

                    if (currentButton) {

                        console.log("button parent id is ", currentButton.parentElement.parentElement.getAttribute('data-testid'))

                        if (obj.isPost(currentButton) && obj.shouldLikePost) {
                            if (obj.isPressed(currentButton) == false) {    
                                currentButton.click()
                            }
                            
                        }

                        if (obj.isComment(currentButton) && obj.shouldLikeComments) {
                            if (obj.isPressed(currentButton) == false) {    
                                currentButton.click()
                            }
                        }

                        currentButton.scrollIntoView()
                    }

                    if (obj.currentIndex < buttons.length) {
                        obj.currentIndex += 1;
                    }

                    

                }, this.kInterval * 1000);
            }
        },
    
        // Clear the timer token
        stop: function() {
            if (this.timerToken != null) {
                clearInterval(this.timerToken);
                this.timerToken = null;
            }
        },

        isPost: function(item) {
            var flag = false
            var parentOfParent = item.parentElement.parentElement;
            if (parentOfParent.getAttribute('data-testid') == 'UFI2ReactionLink/actionLink') {
                flag = true
            }
            return flag
        },

        isComment: function(item) {
            var flag = false
            var parentOfParent = item.parentElement.parentElement;
            if (parentOfParent.getAttribute('data-testid') == 'UFI2ReactionLink/comment') {
                flag = true
            }
            return flag
        }, 

        isPressed: function(item) {
            var flag = false
            if (item.getAttribute('aria-pressed') == "true") {
                flag = true
            }
            return flag
        }
    
    };

    return obj;
}
