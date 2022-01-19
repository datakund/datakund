*******************
Installation/Usage:
*******************

* You can download DataKund tool from `here <https://firebasestorage.googleapis.com/v0/b/datakund-studio.appspot.com/o/DataKund.exe?alt=media&token=a2a15cfc-2f4f-4dd1-b603-ca988371c4c2>`_. 

* Install the setup and Run DataKund.

* To use DataKund you are first required to login to datakund.com

* Now you can create your apis.


Installing Packages
*******************

DataKund provides packages for Python and NodeJs to run apis through simple functions.

Python
#######

.. code-block:: python

   
   pip install bot-studio
   
NodeJs
#######

.. code-block:: python

   
   npm install datakund
   
Curl/HTTP
#########

For curl or post requests you don't need to install any package, just run DataKund.exe

Starting Session
*******************

To run  apis first you need to start DataKund and create a session or can say open a browser to run apis on that.

Python
#######

.. code-block:: python

   
   from bot_studio import *
   dk_object=bot_studio.new()
   
NodeJs
#######

.. code-block:: javascript

   
   var datakund=require("datakund");
   
Curl/HTTP
##########

As DataKund is already runing and browser is already opened, so no need to create any session.