Basic APIS
**************************************************
You can use basic apis which selenium provides with this tool like opening a url, get pagesource, get current url etc. These are the functions:-

Open
========

It will open the url provided in the parameters.

.. tabs::

   .. code-tab:: py

         dk_object.open(url)

   .. code-tab:: javascript
		 NodeJS
   
         datakund.open(url)
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/open -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"url":"https://www.google.com"}'


	
Get Page Title
=================

It returns the title of page opened.

.. tabs::

   .. code-tab:: py

         response=dk_object.get_page_title()

   .. code-tab:: javascript
		 NodeJS
   
         response=datakund.get_page_title()
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/get_page_title -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{}'
	
   .. code-tab:: json
		 Response Data
   
         {
		 "pagetitle":"amazon"
		 }


Get Page Source
===================

It returns the pagesource of page opened.

.. tabs::

   .. code-tab:: py

         response=dk_object.get_page_source()

   .. code-tab:: javascript
		 NodeJS
   
         response=datakund.get_page_source()
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/get_page_source -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{}'
	
   .. code-tab:: json
		 Response Data
   
         {
		 "pagesource":"<html><body>....."
		 }

Get Current Url
===================

It returns the url of page opened.

.. tabs::

   .. code-tab:: py

         response=dk_object.get_current_url()

   .. code-tab:: javascript
		 NodeJS
   
         response=datakund.get_current_url()
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/get_current_url -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{}'
	
   .. code-tab:: json
		 Response Data
   
         {
		 "url":"https://www.amazon.com"
		 }


Reload
===================

It reloads the page opened.

.. tabs::

   .. code-tab:: py

         dk_object.reload()

   .. code-tab:: javascript
		 NodeJS
   
         datakund.reload()
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/reload -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{}'
	
Keypress
===================

It perform the keypress passed.

.. tabs::

   .. code-tab:: py

         dk_object.keypress("shoes")

   .. code-tab:: javascript
		 NodeJS
   
         datakund.keypress("shoes")
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/keypress -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"key":"shoes"}'

Scroll
===================

It scrolls to the end of page.

.. tabs::

   .. code-tab:: py

         dk_object.scroll()

   .. code-tab:: javascript
		 NodeJS
   
         datakund.scroll()
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/scroll -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{}'
		 
End
===================

It ends the session and close the automated chromedriver.

.. note:: You will need to create dk object again after ``end()``.

.. tabs::

   .. code-tab:: py

         dk_object.end()

   .. code-tab:: javascript
		 NodeJS
   
         datakund.end()
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/end -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{}'
		 
		 
Quit
===================

It quits the datakund application runing in background.

.. note:: You will need to import datakund library again to start datakund application.


.. tabs::

   .. code-tab:: py

         dk_object.quit()

   .. code-tab:: javascript
		 NodeJS
   
         datakund.quit()
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/quit -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{}'
		 