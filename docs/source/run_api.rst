Run Api
********

Api
######

We are runing a sample api of scraping amazon product info.

.. tabs::

   .. code-tab:: py

         dk_object.amazon_product_info(product_url='https://www.amazon.in/Sony-WF-XB700-Wireless-Bluetooth-Headphones/dp/B085VQFZ8Z',apiKey="place your api key here")

   .. code-tab:: javascript
		 NodeJS
   
         datakund.amazon_product_info('https://www.amazon.in/Sony-WF-XB700-Wireless-Bluetooth-Headphones/dp/B085VQFZ8Z')
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"amazon_product_info","outputdata":{"product_url":"https://www.amazon.in/Sony-WF-XB700-Wireless-Bluetooth-Headphones/dp/B085VQFZ8Z"}}'

Response Data
##############

.. code-block:: json

	{
	 "body":{
	   "Review Terms": "sound quality noise cancellation battery life value for money extra bass price range battery backup call quality earbud stopped working right earbud listening to music charging case",
	   "NoOfRatings": "14,439 ratings",
	   "ReviewsLink": "https://www.amazon.in/Sony-WF-XB700-Wireless-Bluetooth-Headphones/product-reviews/B085VQFZ8Z/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews",
	   "Price": "7,886",
	   "Description": "Extra Bass: WF-XB700 features EXTRA BASS for seriously powerful, punchy low-end sound. Your favourite basslines never sounded so good with 12mm driver unit. Frequency Response (..............",
	   "Title": "Sony WF-XB700 Truly Wireless Extra Bass Bluetooth Earbuds with 18 Hours Battery Life, True Wireless Earbuds with Mic for Phone Calls, Quick Charge, BT Ver 5.0 (Black)"
	  }, 
	 "success_score": "100",
	 "errors": []
	}


Get Code from DataKund
#########################

To access code of your function:-

* Go to Code Section in extension
* Go to python and copy the code
* Now run that code, your api will run
