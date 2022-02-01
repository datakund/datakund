Selenium vs DataKund
*********************
.. raw:: html
	
	<h4>Difference Table</h4>
	<table style="padding: 10px;" border="2" width="100%" cellspacing="1" cellpadding="5"><tbody><tr><td style="width: 198px; padding: 10px;"><span><strong>Features</strong></span></td><td style="width: 199px; padding: 10px;"><span><strong>Selenium</strong></span></td><td style="width: 185px; padding: 10px;"><span><strong>DataKund</strong></span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Coding experience</span></td><td style="width: 199px; padding: 10px;"><span>Required</span></td><td style="width: 199px; padding: 10px;"><span>Not Required</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Customer Support</span></td><td style="width: 199px; padding: 10px;"><span>Open-source Community</span></td><td style="width: 199px; padding: 10px;"><span>Dedicated support</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>API Support</span></td><td style="width: 199px; padding: 10px;"><span>Cannot perform actions through apis</span></td><td style="width: 199px; padding: 10px;"><span>Can call apis</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Maintenance</span></td><td style="width: 199px; padding: 10px;"><span>slight change in website can make the code fail</span></td><td style="width: 199px; padding: 10px;"><span>don't fail with slight changes in website</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Inspection of Elements</span></td><td style="width: 199px; padding: 10px;"><span>Need to inspect elements to write code</span></td><td style="width: 199px; padding: 10px;"><span>it records itself</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Time</span></td><td style="width: 199px; padding: 10px;"><span>takes time in writing code</span></td><td style="width: 199px; padding: 10px;"><span>takes no time in making apis</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Dependencies</span></td><td style="width: 199px; padding: 10px;"><span>Depends on driver,selenium module and programming language</span></td><td style="width: 199px; padding: 10px;"><span>No programming language or driver needed</span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Locators knowledge</span></td><td style="width: 199px; padding: 10px;"><span>knowledge of locators such as id, class etc needed</span></td><td style="width: 199px; padding: 10px;"><span>no such knowledge needed</span></td></tr></tbody></table><br>
	
	
Following are some of the other differences between Selenium and DataKund:-

Iframe 
##########

.. raw:: html
	
	<table style="padding: 10px;" border="2" width="100%" cellspacing="1" cellpadding="5"><tbody><tr><td style="width: 198px; padding: 10px;"><span><strong>Action</strong></span></td><td style="width: 199px; padding: 10px;"><span><strong>Selenium</strong></span></td><td style="width: 185px; padding: 10px;"><span><strong>DataKund</strong></span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Click on button</span></td><td style="width: 199px; padding: 10px;"><span style="white-space: pre-line"><em>iframe_element=driver.find_element_by_xpath("html/div/iframe") driver.switch_to_iframe(iframe_element) button=driver.find_element_by_id("log_in") button.click</em></span></td><td style="width: 199px; padding: 10px;"><span>just click on button</span></td></tr></tbody></table><br>
	
New tab
##########

.. raw:: html
	
	<table style="padding: 10px;" border="2" width="100%" cellspacing="1" cellpadding="5"><tbody><tr><td style="width: 198px; padding: 10px;"><span><strong>Action</strong></span></td><td style="width: 199px; padding: 10px;"><span><strong>Selenium</strong></span></td><td style="width: 185px; padding: 10px;"><span><strong>DataKund</strong></span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Open New Tab</span></td><td style="width: 199px; padding: 10px;"><span style="white-space: pre-line"><em>driver.execute_script("window.open('https://www.datakund.com');")</em></span></td><td style="width: 199px; padding: 10px;"><span>just start recording and open new tab</span></td></tr></tbody></table><br>
	
Switch tab
##########

.. raw:: html
	
	<table style="padding: 10px;" border="2" width="100%" cellspacing="1" cellpadding="5"><tbody><tr><td style="width: 198px; padding: 10px;"><span><strong>Action</strong></span></td><td style="width: 199px; padding: 10px;"><span><strong>Selenium</strong></span></td><td style="width: 185px; padding: 10px;"><span><strong>DataKund</strong></span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Switch to tab</span></td><td style="width: 199px; padding: 10px;"><span style="white-space: pre-line"><em>WindowsHandles = driver.window_handles window =WindowsHandles[-1] driver.switch_to_window(window)</em></span></td><td style="width: 199px; padding: 10px;"><span>just switch to tab after starting recording</span></td></tr></tbody></table><br>
	
Re-Captchas
##########

.. raw:: html
	
	<table style="padding: 10px;" border="2" width="100%" cellspacing="1" cellpadding="5"><tbody><tr><td style="width: 198px; padding: 10px;"><span><strong>Action</strong></span></td><td style="width: 199px; padding: 10px;"><span><strong>Selenium</strong></span></td><td style="width: 185px; padding: 10px;"><span><strong>DataKund</strong></span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Solving Re-Captcha</span></td><td style="width: 199px; padding: 10px;"><span style="white-space: pre-line">you need to user external service e.g 2Captcha service to solve</span></td><td style="width: 199px; padding: 10px;"><span>automatically detects and solves captcha</span></td></tr></tbody></table><br>
	
Looping
##########

.. raw:: html
	
	<table style="padding: 10px;" border="2" width="100%" cellspacing="1" cellpadding="5"><tbody><tr><td style="width: 198px; padding: 10px;"><span><strong>Action</strong></span></td><td style="width: 199px; padding: 10px;"><span><strong>Selenium</strong></span></td><td style="width: 185px; padding: 10px;"><span><strong>DataKund</strong></span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Click on every search result</span></td><td style="width: 199px; padding: 10px;"><span style="white-space: pre-line">find common things by inspecting then loop over them(attributes can change)</span></td><td style="width: 199px; padding: 10px;"><span>apply repeat  by Alt+P , then do your repeated action next</span></td></tr></tbody></table><br>
	
Variables
##########

.. raw:: html
	
	<table style="padding: 10px;" border="2" width="100%" cellspacing="1" cellpadding="5"><tbody><tr><td style="width: 198px; padding: 10px;"><span><strong>Action</strong></span></td><td style="width: 199px; padding: 10px;"><span><strong>Selenium</strong></span></td><td style="width: 185px; padding: 10px;"><span><strong>DataKund</strong></span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Search different keywords</span></td><td style="width: 199px; padding: 10px;"><span style="white-space: pre-line">will need a variable to change search value</span></td><td style="width: 199px; padding: 10px;"><span>automatically detects variables and you need to just change values</span></td></tr></tbody></table><br>
	
Google Sheets
#############

.. raw:: html
	
	<table style="padding: 10px;" border="2" width="100%" cellspacing="1" cellpadding="5"><tbody><tr><td style="width: 198px; padding: 10px;"><span><strong>Action</strong></span></td><td style="width: 199px; padding: 10px;"><span><strong>Selenium</strong></span></td><td style="width: 185px; padding: 10px;"><span><strong>DataKund</strong></span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Sending bulk messages on linkedin having their links in sheet</span></td><td style="width: 199px; padding: 10px;"><span style="white-space: pre-line">will need to write both selenium as google apis code which takes time</span></td><td style="width: 199px; padding: 10px;"><span>just make a simple api of sending message to one profile and attach google sheet to it</span></td></tr></tbody></table><br>
	
Flow Chart
##########

.. raw:: html
	
	<table style="padding: 10px;" border="2" width="100%" cellspacing="1" cellpadding="5"><tbody><tr><td style="width: 198px; padding: 10px;"><span><strong>Action</strong></span></td><td style="width: 199px; padding: 10px;"><span><strong>Selenium</strong></span></td><td style="width: 185px; padding: 10px;"><span><strong>DataKund</strong></span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>Showing actions in flow chart</span></td><td style="width: 199px; padding: 10px;"><span style="white-space: pre-line">no way of representing flow of actions except manually writing</span></td><td style="width: 199px; padding: 10px;"><span>you can see your actions in flow charts, can edit and delete actions as well</span></td></tr></tbody></table><br>
	
Multiple Language Support
##########

.. raw:: html
	
	<table style="padding: 10px;" border="2" width="100%" cellspacing="1" cellpadding="5"><tbody><tr><td style="width: 198px; padding: 10px;"><span><strong>Action</strong></span></td><td style="width: 199px; padding: 10px;"><span><strong>Selenium</strong></span></td><td style="width: 185px; padding: 10px;"><span><strong>DataKund</strong></span></td></tr><tr><td style="width: 198px; padding: 10px;"><span>writing selenium code in nodejs</span></td><td style="width: 199px; padding: 10px;"><span style="white-space: pre-line">you will need to learn programming language to write selenium for other languages</span></td><td style="width: 199px; padding: 10px;"><span>provides code section, just copy code of desired language from there and run</span></td></tr></tbody></table><br>