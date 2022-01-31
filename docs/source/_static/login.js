console.log("Welcome")
function myBackgroundMethodLogingoogle() {
		console.log("Logging in with google");
		var e = new firebase.auth.GoogleAuthProvider;
		firebase.auth().signInWithPopup(e).then((function(e) {
			console.log("result", e),
			onSignIn(e)
		}
		)).catch((function(e) {
			console.log("error found", e)
		}
		))
	}
		document.getElementById("google_login_button").addEventListener("click", (()=>{
			console.log("Clicked on google login"),
			myBackgroundMethodLogingoogle()
		}
		))