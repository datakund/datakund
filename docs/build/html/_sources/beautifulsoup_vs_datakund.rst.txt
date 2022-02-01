Beautifulsoup vs DataKund
***************************
.. raw:: html

	<table style="padding: 10px;" border="2" width="100%" cellspacing="1" cellpadding="5"><tbody><tr><td style="width: 198px; padding: 10px;"><span><strong>Features</strong></span></td><td style="width: 199px; padding: 10px;"><span><strong>Beautifulsoup</strong></span></td><td style="width: 185px; padding: 10px;"><span><strong>DataKund</strong></span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Coding experience</span></td><td style="width: 199px; padding: 10px;"><span>Required</span></td><td style="width: 199px; padding: 10px;"><span>Not Required</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Customer Support</span></td><td style="width: 199px; padding: 10px;"><span>Open-source Community</span></td><td style="width: 199px; padding: 10px;"><span>Dedicated support</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>API Support</span></td><td style="width: 199px; padding: 10px;"><span>Cannot perform scrape through apis</span></td><td style="width: 199px; padding: 10px;"><span>Can call apis</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Maintenance</span></td><td style="width: 199px; padding: 10px;"><span>slight change in website can make the code fail</span></td><td style="width: 199px; padding: 10px;"><span>don't fail with slight changes in website</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Inspection of Elements</span></td><td style="width: 199px; padding: 10px;"><span>Need to inspect elements to write code</span></td><td style="width: 199px; padding: 10px;"><span>it records itself</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Time</span></td><td style="width: 199px; padding: 10px;"><span>takes time in writing code</span></td><td style="width: 199px; padding: 10px;"><span>takes no time in making apis</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Dependencies</span></td><td style="width: 199px; padding: 10px;"><span>Depends on bs4 module and programming language</span></td><td style="width: 199px; padding: 10px;"><span>No programming language or module needed</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Locators knowledge</span></td><td style="width: 199px; padding: 10px;"><span>knowledge of locators such as id, class etc needed</span></td><td style="width: 199px; padding: 10px;"><span>no such knowledge needed</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Structure</span></td><td style="width: 199px; padding: 10px;"><span>it's library</span></td><td style="width: 199px; padding: 10px;"><span>it's a complete framework</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Extensibility</span></td><td style="width: 199px; padding: 10px;"><span>limited to scraping only</span></td><td style="width: 199px; padding: 10px;"><span>can do scraping as well browser actions </span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Consideration</span></td><td style="width: 199px; padding: 10px;"><span>considered as parser</span></td><td style="width: 199px; padding: 10px;"><span>considered as RPA tool </span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Data Format</span></td><td style="width: 199px; padding: 10px;"><span>you need to write code to store in json xcel or spreadsheet</span></td><td style="width: 199px; padding: 10px;"><span>Can attach google sheet for you, then all your data will automatically be saved there</span></td></tr></tbody></table><br>
	

Following are some of the other differences between Beautifulsoup and DataKund:-
	
Scrape Text
##########

.. raw:: html
	
	<table style="padding: 10px;" border="2" width="100%" cellspacing="1" cellpadding="5"><tbody><tr><td style="width: 198px; padding: 10px;"><span><strong>Action</strong></span></td><td style="width: 199px; padding: 10px;"><span><strong>Beautifulsoup</strong></span></td><td style="width: 185px; padding: 10px;"><span><strong>DataKund</strong></span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>scrape product title</span></td><td style="width: 199px; padding: 10px;"><span style="white-space: pre-line"><em>title=soup.find("h4",{"id":"title"}).getText()</em></span></td><td style="width: 199px; padding: 10px;"><span>Right Click on title>DataKund>Scrape>Text>column name</span></td></tr></tbody></table><br>
	
Scrape Link
##########

.. raw:: html
	
	<table style="padding: 10px;" border="2" width="100%" cellspacing="1" cellpadding="5"><tbody><tr><td style="width: 198px; padding: 10px;"><span><strong>Action</strong></span></td><td style="width: 199px; padding: 10px;"><span><strong>Beautifulsoup</strong></span></td><td style="width: 185px; padding: 10px;"><span><strong>DataKund</strong></span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>scrape product link</span></td><td style="width: 199px; padding: 10px;"><span style="white-space: pre-line"><em>link=soup.find("a",{"id":"product_link"})["href"]</em></span></td><td style="width: 199px; padding: 10px;"><span>Right Click on product link>DataKund>Scrape>Link>column name</span></td></tr></tbody></table><br>
	
Looping
##########

.. raw:: html
	
	<table style="padding: 10px;" border="2" width="100%" cellspacing="1" cellpadding="5"><tbody><tr><td style="width: 198px; padding: 10px;"><span><strong>Action</strong></span></td><td style="width: 199px; padding: 10px;"><span><strong>Beautifulsoup</strong></span></td><td style="width: 185px; padding: 10px;"><span><strong>DataKund</strong></span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Get every search result data</span></td><td style="width: 199px; padding: 10px;"><span style="white-space: pre-line">find common things by inspecting then loop over them(attributes can change)</span></td><td style="width: 199px; padding: 10px;"><span>apply repeat  by Alt+P , then scrape data by right clicking on data points</span></td></tr></tbody></table><br>
	
	
Google Sheets
#############

.. raw:: html
	
	<table style="padding: 10px;" border="2" width="100%" cellspacing="1" cellpadding="5"><tbody><tr><td style="width: 198px; padding: 10px;"><span><strong>Action</strong></span></td><td style="width: 199px; padding: 10px;"><span><strong>Beautifulsoup</strong></span></td><td style="width: 185px; padding: 10px;"><span><strong>DataKund</strong></span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Scraping product links defined in sheet</span></td><td style="width: 199px; padding: 10px;"><span style="white-space: pre-line">will need to write both beautifulsoup and google apis code which takes time</span></td><td style="width: 199px; padding: 10px;"><span>just make a simple api of scraping one product and attach google sheet to it</span></td></tr></tbody></table><br>
	
Flow Chart
##########

.. raw:: html
	
	<table style="padding: 10px;" border="2" width="100%" cellspacing="1" cellpadding="5"><tbody><tr><td style="width: 198px; padding: 10px;"><span><strong>Action</strong></span></td><td style="width: 199px; padding: 10px;"><span><strong>Selenium</strong></span></td><td style="width: 185px; padding: 10px;"><span><strong>DataKund</strong></span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Showing actions in flow chart</span></td><td style="width: 199px; padding: 10px;"><span style="white-space: pre-line">no way of representing flow of actions except manually writing</span></td><td style="width: 199px; padding: 10px;"><span>you can see your actions in flow charts, can edit and delete actions as well</span></td></tr></tbody></table><br>
	
Multiple Language Support
##########

.. raw:: html
	
	<table style="padding: 10px;" border="2" width="100%" cellspacing="1" cellpadding="5"><tbody><tr><td style="width: 198px; padding: 10px;"><span><strong>Action</strong></span></td><td style="width: 199px; padding: 10px;"><span><strong>Selenium</strong></span></td><td style="width: 185px; padding: 10px;"><span><strong>DataKund</strong></span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>writing selenium code in nodejs</span></td><td style="width: 199px; padding: 10px;"><span style="white-space: pre-line">you will need to learn programming language to write selenium for other languages</span></td><td style="width: 199px; padding: 10px;"><span>provides code section, just copy code of desired language from there and run</span></td></tr></tbody></table><br>