Other APIS
************

Following are some apis which are built with Datakund, these are public apis.

Epoch Timestamp Converter
=========================

It will open the url provided in the parameters.

.. tabs::

   .. code-tab:: py

		 from bot_studio import *
   dk_object=bot_studio.new()
   response=dk_object.epoch_timestamp_converter("time_stamp":"put time stamp here")

   .. code-tab:: javascript
		 NodeJS
   
		 var datakund=require("datakund")
   response=datakund.epoch_timestamp_converter("put time stamp here")
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/datakundapi -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"epoch_timestamp_converter~D75HsPTUIeOmN0bLp5ulrwB7F1f2","outputdata":{"time_stamp":"put time stamp here"}}'

   .. tab:: Cloud

         You can run this bot on `cloud <https://twitter-api.datakund.com/en/latest/>`_ also

Following Data will be scraped:-

.. code-block:: json


	{
	 "body":{
	   "ColumnA@text": "Assuming that this timestamp is in seconds:GMT: Thursday, January 13, 2022 4:49:47 AMYour time zone: Thursday, January 13, 2022 4:49:47 AM GMT+00:00Relative: 2 minutes ago"}, 
	 "success_score": "100",
	 "errors": []
	}

Coindesk Bitcoin Scraper
=========================

It will open the url provided in the parameters.

.. tabs::

   .. code-tab:: py

		 from bot_studio import *
   dk_object=bot_studio.new()
   response=dk_object.coindesk_bitcoin("currency_link":"put link here")

   .. code-tab:: javascript
		 NodeJS
   
		 var datakund=require("datakund")
   response=datakund.coindesk_bitcoin("put link here")
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/datakundapi -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"coindesk_bitcoin~D75HsPTUIeOmN0bLp5ulrwB7F1f2","outputdata":{"currency_link":"put link here"}}'

   .. tab:: Cloud

         You can run this bot on `cloud <https://datakund.com/products/coindesk>`_ also
		 
Following Data will be scraped:-

.. code-block:: json

	{
	 "body":{
      "price": "3,267.08",
      "price_24_changed": "-2.83%",
      "price_24_low": "$3,225.45",
      "price_24_high": "$3,411.26",
      "market_capital": "$384.41B",
      "volume": "$724.22M"
    }, 
	 "success_score": "100",
	 "errors": []
	}