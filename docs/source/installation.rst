*******************
Installation/Usage
*******************

Installation
**************

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

Browser Options
################

.. list-table:: 
   :widths: 25 25 50
   :header-rows: 1

   * - Option
     - Default Value
     - Description
   * - headless
     - False
     - Can set it to True if wants headless
   * - proxy
     - No proxy
     - Pass proxy value e.g 98.0.2.5:4000
   * - profile_path
     - creates temporary profile
     - Pass profile path e.g C:\\Users\\username\\AppData\\Local\\Google\\Chrome\\User Data\\
   * - user_agent
     - No user agent
     - Pass user agent e.g python 2.7", "platform":"Windows
   * - download_folder
     - Downloads in default folder
     - If want to set download directory to custom e.g E:files\\

NodeJs
######################

.. code-block:: javascript

   
   var datakund=require("datakund");
   
Curl/HTTP
######################

DataKund listens on port 5350
