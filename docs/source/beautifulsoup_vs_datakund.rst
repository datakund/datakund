BeautifulSoup vs DataKund
***************************
.. raw:: html

	<table style="padding: 10px;" border="2" width="100%" cellspacing="1" cellpadding="5"><tbody><tr><td style="width: 198px; padding: 10px;"><span><strong>Features</strong></span></td><td style="width: 199px; padding: 10px;"><span><strong>BeautifulSoup</strong></span></td><td style="width: 185px; padding: 10px;"><span><strong>DataKund</strong></span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Coding experience</span></td><td style="width: 199px; padding: 10px;"><span>Required</span></td><td style="width: 199px; padding: 10px;"><span>Not Required</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Customer Support</span></td><td style="width: 199px; padding: 10px;"><span>Open-source Community</span></td><td style="width: 199px; padding: 10px;"><span>Dedicated support</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>API Support</span></td><td style="width: 199px; padding: 10px;"><span>Cannot perform scrape through apis</span></td><td style="width: 199px; padding: 10px;"><span>Can call apis</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Maintenance</span></td><td style="width: 199px; padding: 10px;"><span>Slight change in website can make the code fail</span></td><td style="width: 199px; padding: 10px;"><span>Don't fail with slight changes in website</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Inspection of Elements</span></td><td style="width: 199px; padding: 10px;"><span>Need to inspect elements to write code</span></td><td style="width: 199px; padding: 10px;"><span>It records itself</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Time</span></td><td style="width: 199px; padding: 10px;"><span>Takes time in writing code</span></td><td style="width: 199px; padding: 10px;"><span>Takes no time in making apis</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Dependencies</span></td><td style="width: 199px; padding: 10px;"><span>Depends on bs4 module and programming language</span></td><td style="width: 199px; padding: 10px;"><span>No programming language or module needed</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Locators Knowledge</span></td><td style="width: 199px; padding: 10px;"><span>Knowledge of locators such as id, class etc needed</span></td><td style="width: 199px; padding: 10px;"><span>No such knowledge needed</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Structure</span></td><td style="width: 199px; padding: 10px;"><span>It's library</span></td><td style="width: 199px; padding: 10px;"><span>It's a complete framework</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Extensibility</span></td><td style="width: 199px; padding: 10px;"><span>Limited to scraping only</span></td><td style="width: 199px; padding: 10px;"><span>Can do scraping as well browser actions </span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Consideration</span></td><td style="width: 199px; padding: 10px;"><span>Considered as parser</span></td><td style="width: 199px; padding: 10px;"><span>Considered as RPA tool </span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Data Format</span></td><td style="width: 199px; padding: 10px;"><span>You need to write code to store in json xcel or spreadsheet</span></td><td style="width: 199px; padding: 10px;"><span>Can attach google sheet for you, then all your data will automatically be saved there</span></td></tr></tbody></table><br>
	

Following are some of the other differences between BeautifulSoup and DataKund:-
	
Scrape Text
##########

.. raw:: html
	
	<table style="padding: 10px;" border="2" width="100%" cellspacing="1" cellpadding="5"><tbody><tr><td style="width: 198px; padding: 10px;"><span><strong>Action</strong></span></td><td style="width: 199px; padding: 10px;"><span><strong>BeautifulSoup</strong></span></td><td style="width: 185px; padding: 10px;"><span><strong>DataKund</strong></span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Scrape product title</span></td><td style="width: 199px; padding: 10px;"><span style="white-space: pre-line"><code style="white-space: pre-line">title=soup.find("h4",{"id":"title"}).getText()</code></span></td><td style="width: 199px; padding: 10px;"><span>Right Click on title>DataKund>Scrape>Text>column name</span></td></tr></tbody></table><br>
	
Scrape Link
##########

.. raw:: html
	
	<table style="padding: 10px;" border="2" width="100%" cellspacing="1" cellpadding="5"><tbody><tr><td style="width: 198px; padding: 10px;"><span><strong>Action</strong></span></td><td style="width: 199px; padding: 10px;"><span><strong>BeautifulSoup</strong></span></td><td style="width: 185px; padding: 10px;"><span><strong>DataKund</strong></span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Scrape product link</span></td><td style="width: 199px; padding: 10px;"><span style="white-space: pre-line"><code style="white-space: pre-line">link=soup.find("a",{"id":"product_link"})["href"]</code></span></td><td style="width: 199px; padding: 10px;"><span>Right Click on product link>DataKund>Scrape>Link>column name</span></td></tr></tbody></table><br>
	
Looping
##########

.. raw:: html
	
	<table style="padding: 10px;" border="2" width="100%" cellspacing="1" cellpadding="5"><tbody><tr><td style="width: 198px; padding: 10px;"><span><strong>Action</strong></span></td><td style="width: 199px; padding: 10px;"><span><strong>BeautifulSoup</strong></span></td><td style="width: 185px; padding: 10px;"><span><strong>DataKund</strong></span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Get every search result data</span></td><td style="width: 199px; padding: 10px;"><span style="white-space: pre-line">Find common things by inspecting then loop over them(attributes can change)</span></td><td style="width: 199px; padding: 10px;"><span>Apply repeat  by Alt+P , then scrape data by right clicking on data points</span></td></tr></tbody></table><br>
	
	
Google Sheets
#############

.. raw:: html
	
	<table style="padding: 10px;" border="2" width="100%" cellspacing="1" cellpadding="5"><tbody><tr><td style="width: 198px; padding: 10px;"><span><strong>Action</strong></span></td><td style="width: 199px; padding: 10px;"><span><strong>BeautifulSoup</strong></span></td><td style="width: 185px; padding: 10px;"><span><strong>DataKund</strong></span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Scraping product links defined in sheet</span></td><td style="width: 199px; padding: 10px;"><span style="white-space: pre-line">Will need to write both beautifulsoup and google apis code which takes time</span></td><td style="width: 199px; padding: 10px;"><span>Just make a simple api of scraping one product and attach google sheet to it</span></td></tr></tbody></table><br>
	
Flow Chart
##########

.. raw:: html
	
	<table style="padding: 10px;" border="2" width="100%" cellspacing="1" cellpadding="5"><tbody><tr><td style="width: 198px; padding: 10px;"><span><strong>Action</strong></span></td><td style="width: 199px; padding: 10px;"><span><strong>BeautifulSoup</strong></span></td><td style="width: 185px; padding: 10px;"><span><strong>DataKund</strong></span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Showing actions in flow chart</span></td><td style="width: 199px; padding: 10px;"><span style="white-space: pre-line">No way of representing flow of actions except manually writing</span></td><td style="width: 199px; padding: 10px;"><span>You can see your actions in flow charts, can edit and delete actions as well</span></td></tr></tbody></table><br>
	