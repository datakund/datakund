*******************
Installation/Usage
*******************

Installation
**************

.. raw:: html

	<button class="btn" style="background-color: rgb(61, 66, 70); color: white; display: block; margin-left: 30%; border-radius: 20px;" id="google_login_button" role="button"><img width="20px" style="margin-bottom:-5px; margin-right:5px;" alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png">Login with Google</button>
	
	
.. raw:: html
	
	<script src="./_static/login.js">
	</script>



Pip
#######

.. code-block:: python

   
   pip install bot-studio
   
Npm
#######

.. code-block:: python

   
   npm install datakund
   
Standalone Executable
######################

* `Download for Windows <https://firebasestorage.googleapis.com/v0/b/datakund-studio.appspot.com/o/DataKund.exe?alt=media&token=a2a15cfc-2f4f-4dd1-b603-ca988371c4c2>`_

Usage
**************

- Starting DataKund will require login to `DataKund <https://datakund.com>`_
- After login, drivers will be installed & browser window will open up

Python
######################

.. code-block:: python

   
   from bot_studio import *
   datakund=bot_studio.new()
   
NodeJs
######################

.. code-block:: javascript

   
   var datakund=require("datakund");
   
Curl/HTTP
######################

DataKund listens on port 5350

.. raw:: html
	
	<script>
	console.log("Checking login")
	var uid = localStorage.getItem("datakund_user_id")
	console.log("uid",uid)
	uid="s"
	if(uid=="" || uid== null || uid== undefined){
		document.getElementById("google_login_button").style.display="block";
		document.getElementById("pip").style.display="none";
		document.getElementById("npm").style.display="none";
		document.getElementById("standalone-executable").style.display="none";
		document.getElementById("usage").style.display="none";
	}else{
	document.getElementById("google_login_button").style.display="none";
	}
	</script>
