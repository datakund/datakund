********
Scrapers
********

Following are some of already made scrapers by DataKund:-

Yellow Pages Business Details Scraper Bot
*****************************************

Yellow Pages helps you to find services for your requirement. Connects you with right Manufacturer & Suppliers, Dealers of products you are looking. The Yellow Pages Business Details Scraper Bot will make your job a lot easier.

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	response = datakund.yellowpages_scraper(city="hamilton",service="plumber")

   .. code-tab:: javascript
		 NodeJS
   
        var datakund=require("datakund")
	datakund.yellowpages_scraper("plumber","hamilton")
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"yellowpages_scraper~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"city":"hamilton","service":"plumber"}}'

Response Data
##############

.. code-block:: json

			{
	  "body": [
		{
		  "address": "6 S 2nd St",
		  "address2": "Hamilton, OH 45011",
		  "business_name": "Roto-Rooter Plumbing & Water Cleanup",
		  "phone": "(513) 245-8151",
		  "service": "Plumbers",
		  "website": "/hamilton-oh/mip/roto-rooter-plumbing-water-cleanup-552443153?lid=1002082272744"
		},
		{
		  "business_name": "Service Experts Heating & Air Conditioning",
		  "phone": "(888) 984-1997",
		  "service": "Plumbers",
		  "website": "/nationwide/mip/service-experts-heating-air-conditioning-518506814?lid=1001724808432"
		},
		{
		  "address": "1079 Ohio Pike",
		  "address2": "Cincinnati, OH 45245",
		  "business_name": "Schneller Plumbing-Heating-Air",
		  "phone": "(513) 427-0076",
		  "service": "Plumbers"
		},
		{
		  "address": "6165 Elk Creek Rd",
		  "address2": "Middletown, OH 45042",
		  "business_name": "Royal Rooter",
		  "phone": "(513) 275-4252",
		  "service": "Plumbers"
		},
		{
		  "address": "700 Charles St",
		  "address2": "Middletown, OH 45042",
		  "business_name": "Meeker  Plumbing",
		  "phone": "(513) 804-2285",
		  "service": "Plumbers"
		},
		{
		  "business_name": "Century Plumbing And Electric",
		  "phone": "(513) 523-3940",
		  "service": "Plumbers"
		},
		{
		  "address": "11935 Tramway Dr Ste C",
		  "address2": "Cincinnati, OH 45241",
		  "business_name": "Knochelmann Service Experts",
		  "phone": "(513) 201-5049",
		  "service": "Plumbers"
		},
		{
		  "address": "7577 Central Parke Blvd",
		  "address2": "Mason, OH 45040",
		  "business_name": "Roto-Rooter Plumbing & Water Cleanup",
		  "phone": "(513) 275-3018",
		  "service": "Plumbers",
		  "website": "/mason-oh/mip/roto-rooter-plumbing-water-cleanup-549818882?lid=1002082273888"
		},
		{
		  "address": "5736 Springdale Rd",
		  "address2": "Cincinnati, OH 45247",
		  "business_name": "Ruehl Plumbing",
		  "phone": "(513) 385-3850",
		  "service": "Plumbers"
		},
		{
		  "address": "2125 Montana Ave",
		  "address2": "Cincinnati, OH 45211",
		  "business_name": "Roto-Rooter Plumbing & Water Cleanup",
		  "phone": "(513) 245-8151",
		  "service": "Plumbers",
		  "website": "/cincinnati-oh/mip/roto-rooter-plumbing-water-cleanup-21905181?lid=1002082272201"
		},
		{
		  "address": "255 E 5th St",
		  "address2": "Cincinnati, OH 45202",
		  "business_name": "Roto-Rooter Plumbing & Water Cleanup",
		  "phone": "(513) 245-8151",
		  "service": "Plumbers",
		  "website": "/cincinnati-oh/mip/roto-rooter-plumbing-water-cleanup-10636124?lid=1002082271410"
		},
		{
		  "address": "3000 Harris Ave",
		  "address2": "Norwood, OH 45212",
		  "business_name": "Roto-Rooter Plumbing & Water Cleanup",
		  "phone": "(513) 245-8151",
		  "service": "Plumbers",
		  "website": "/norwood-oh/mip/roto-rooter-plumbing-water-cleanup-464642422?lid=1002082273236"
		},
		{
		  "address": "1095 Nimitzview Dr",
		  "address2": "Cincinnati, OH 45230",
		  "business_name": "Roto-Rooter Plumbing & Water Cleanup",
		  "phone": "(513) 275-3018",
		  "service": "Plumbers",
		  "website": "/cincinnati-oh/mip/roto-rooter-plumbing-water-cleanup-549823588?lid=1002082274422"
		},
		{
		  "address": "5131 College Corner Pike",
		  "address2": "Oxford, OH 45056",
		  "business_name": "B & B Plumbing & Heating",
		  "phone": "(513) 916-9161",
		  "service": "Plumbers",
		  "website": "/oxford-oh/mip/b-b-plumbing-heating-2307614?lid=1002004276651"
		},
		{
		  "address": "1383 Golf View Ct",
		  "address2": "Lawrenceburg, IN 47025",
		  "business_name": "A Tri-State Liquid Waste Co",
		  "phone": "(812) 537-3888",
		  "service": "Plumbers"
		},
		{
		  "address": "9520 Le Saint Dr",
		  "address2": "Fairfield, OH 45014",
		  "business_name": "Thomas & Galbraith Heating, Cooling & Plumbing",
		  "phone": "(513) 428-4930",
		  "service": "Plumbers",
		  "website": "/fairfield-oh/mip/thomas-galbraith-heating-cooling-plumbing-548963536?lid=1002062947018"
		},
		{
		  "business_name": "America s Same Day Service",
		  "phone": "(800) 870-0193",
		  "service": "Plumbers"
		},
		{
		  "address": "401 Home Ave",
		  "address2": "Hamilton, OH 45013",
		  "business_name": "Brown & Sons",
		  "phone": "(513) 868-1900",
		  "service": "Plumbers"
		},
		{
		  "address": "531 Hanover St",
		  "address2": "Hamilton, OH 45011",
		  "business_name": "Progressive Plumbing Co",
		  "phone": "(513) 863-1711",
		  "service": "Plumbers"
		},
		{
		  "address": "6745 Gilmore Rd Ste F",
		  "address2": "Hamilton, OH 45011",
		  "business_name": "Fox Plumbing",
		  "phone": "(513) 259-0699",
		  "service": "Plumbers"
		},
		{
		  "address": "29 Standen Dr",
		  "address2": "Hamilton, OH 45015",
		  "business_name": "Dupps Plumbing Inc",
		  "phone": "(513) 874-8899",
		  "service": "Plumbers"
		},
		{
		  "address": "350 Warr Ln",
		  "address2": "Hamilton, OH 45013",
		  "business_name": "CURTIS MECHANICAL SERVICES PLUMBING-HVAC/R",
		  "phone": "(513) 330-4316",
		  "service": "Plumbers"
		},
		{
		  "address": "2872 Stahlheber Rd",
		  "address2": "Hamilton, OH 45013",
		  "business_name": "William Brown Plumbing",
		  "phone": "(513) 887-8301",
		  "service": "Plumbers"
		},
		{
		  "address": "633 High St Ste 104",
		  "address2": "Hamilton, OH 45011",
		  "business_name": "Andary Plumbing",
		  "phone": "(513) 863-5325",
		  "service": "Plumbers"
		},
		{
		  "address": "100 Pershing Ave",
		  "address2": "Hamilton, OH 45011",
		  "business_name": "plumbers in hamilton ohio",
		  "phone": "(513) 447-4679",
		  "service": "Plumbers"
		},
		{
		  "address": "1025 Hanover St",
		  "address2": "Hamilton, OH 45011",
		  "business_name": "plumbers in hamilton area",
		  "phone": "(513) 386-0757",
		  "service": "Plumbers"
		},
		{
		  "address": "117 S B St",
		  "address2": "Hamilton, OH 45013",
		  "business_name": "Expert Plumbing Solution in Hamilton",
		  "phone": "(513) 386-0601",
		  "service": "Plumbers"
		},
		{
		  "address": "1200 Dayton St",
		  "address2": "Hamilton, OH 45011",
		  "business_name": "Plumbers Hamilton",
		  "phone": "(513) 278-2220",
		  "service": "Plumbers"
		},
		{
		  "address": "1295 Shuler Ave",
		  "address2": "Hamilton, OH 45011",
		  "business_name": "Drain Cleaner Hamilton",
		  "phone": "(513) 386-0613",
		  "service": "Plumbers"
		},
		{
		  "address": "1222 Main St",
		  "address2": "Hamilton, OH 45013",
		  "business_name": "Water Heater Repair Hamilton",
		  "phone": "(513) 386-0605",
		  "service": "Plumbers"
		}
	  ],
	  "errors": [],
	  "resume_variable": "n",
	  "success_score": "100",
	  "resume_dict": {}
	}


Instagram profile Scraper Bot
******************************

Instagram profile Scraper Bot Scrapes bio, followers, followed_by, following, posts, profile_name with instagram profile_link

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	response = datakund.instagram_profile_scraper(profile_link="https://www.instagram.com/ashliemolstad/")

   .. code-tab:: javascript
		 NodeJS
   
        var datakund=require("datakund")
	datakund.instagram_profile_scraper("https://www.instagram.com/ashliemolstad/")
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"instagram_profile_scraper~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"profile_link":"https://www.instagram.com/ashliemolstad/"}}'

Response Data
##############

.. code-block:: json

	{
	  "body": {
		"bio": "Life Coach & Podcast Host @youcansipwithus ⁣⁣Passionate about helping women live a life they love, without waiting on the weight💞🤸🏼‍♀️⁣",
		"followed_by": "1,102",
		"followers": "213k",
		"following": "1,102",
		"posts": "5,259",
		"profile_name": "ashliemolstad"
	  },
	  "errors": [],
	  "resume_variable": 0,
	  "success_score": "100"
	}
	

LinkedIn Search Results Scraper Bot
***********************************

LinkedIn search results is a python library to scrape LinkedIn search results, using browser automation. It currently runs only on windows.

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	datakund.linkedin_login(email="email",password="pass")
	#or
	linkedin_login_cookies(cookies="cookies")
	response = linkedin_search_results(keyword="apple")

   .. code-tab:: javascript
		 NodeJS
   
        var datakund=require("datakund")
	datakund.linkedin_login("email","password")
    //or
	datakund.linkedin_login_cookies("cookies")
	datakund.linkedin_search_results("apple")
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"linkedin_login~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"email":"email","password":"pass"}}'
		 				or
	curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"linkedin_login_cookies~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"cookies":"cookies"}}'

		 
	curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"linkedin_search_results~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"keyword":"Apple"}}'
		 
Response Data
##############

.. code-block:: json

		{
	  "body": [
		{
		  "link": "https://www.linkedin.com/in/trishabhc?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAFUTigBXV7yFcR3wR5F7XQnGu7rTWSFybY",
		  "location": "Delhi, India",
		  "position": "Principal Engineering Manager at Microsoft",
		  "title": "Trishabh ChaddaView Trishabh Chadda’s profile"
		},
		{
		  "link": "https://www.linkedin.com/in/nitin-vohra-05796a6?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAE1tcMBl7ZUfH5yIzEp-pzyJkXHP_eTvi0",
		  "location": "Faridabad",
		  "position": "Head - Business Development",
		  "title": "Nitin VohraView Nitin Vohra’s profile"
		},
		{
		  "link": "https://www.linkedin.com/in/ramanpreet-kr?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACpLUBsBpYhPe8bRrIvxm-IR0ZjS9akmWBE",
		  "location": "Hyderabad",
		  "position": "Software Engineer at Apple",
		  "title": "Ramanpreet KaurView Ramanpreet Kaur’s profile"
		},
		{
		  "link": "https://www.linkedin.com/in/shyam-agarwal-31a57814b?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACQ2msYBILkHSLK6sh_rHbyBUNV9MyWes5U",
		  "location": "West Delhi",
		  "position": "Data Science & Analytics Intern at Apple",
		  "title": "Shyam AgarwalView Shyam Agarwal’s profile"
		},
		{
		  "link": "https://www.linkedin.com/in/apple-education-12977bab?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABdtxfEBgCaYp8tOsUyY5dZCpgYBkGUoH2w",
		  "location": "Kerala, India",
		  "position": "Managing Director",
		  "title": "Apple EducationView Apple Education’s profile"
		},
		{
		  "link": "https://www.linkedin.com/in/sahil-jain-365467153?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACTotz0Btj9A81anjxJeO5cbIK27BbW0ZrU",
		  "location": "Indore",
		  "position": "SDE at Apple | Ex- Amazon | BITS, Pilani",
		  "title": "Sahil JainView Sahil Jain’s profile"
		},
		{
		  "link": "https://www.linkedin.com/in/amitbhatnagar1?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAADJdXEBjLlVEnotJTTeyJgfbUFKL10E1Wo",
		  "location": "Gurgaon",
		  "position": "Product Leader at Nykaa | Stanford grad | Ex-DineOut, OYO, Apple, Microsoft",
		  "title": "Amit Bhatnagar (Hiring rockstar PMs at all levels. Inmails open)View Amit Bhatnagar (Hiring rockstar PMs at all levels. Inmails open)’s profile"
		},
		{
		  "link": "https://www.linkedin.com/in/aleema-khan-8a318521a?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADcy2rsBSzGF5pUpzaGJXTPeHy5n_tWOdDo",
		  "location": "Mumbai",
		  "position": "Software Engineer at Apple",
		  "title": "Aleema KhanView Aleema Khan’s profile"
		},
		{
		  "link": "https://www.linkedin.com/in/sargun99?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACcYwNoBMmejOdi-Ny14BWmtb-YGWpzwfos",
		  "location": "Delhi, India",
		  "position": "Software Engineer at Apple",
		  "title": "Sargun SinghView Sargun Singh’s profile"
		},
		{
		  "link": "https://www.linkedin.com/in/apple-hub-4964a6212?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADXSZTIBRAIEsVvEmB5yvK5N6dpxurC20ls",
		  "location": "Gurugram",
		  "position": "custom mobile company",
		  "title": "Apple HubView Apple Hub’s profile"
		}
	  ],
	  "errors": [],
	  "resume_variable": "n",
	  "success_score": "100",
	  "resume_dict": {}
	}
	 

Google Trends Scraper Bot
**************************

Enter the keyword of which data you want to scrape and click on submit button.
Bot will scrape trending searches related to the keyword in Google Search across various regions.

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	response = datakund.google_trends(keyword="apple")

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.google_trends("apple")
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"google_trends~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"keyword":"apple"}}'

Response Data
##############

.. code-block:: json

				{
	  "body": [
		{
		  "state": "Chandigarh",
		  "trend": "100"
		},
		{
		  "state": "Delhi",
		  "trend": "87"
		},
		{
		  "state": "Punjab",
		  "trend": "85"
		},
		{
		  "state": "Himachal Pradesh",
		  "trend": "81"
		},
		{
		  "state": "Haryana",
		  "trend": "77"
		}
	  ],
	  "errors": [],
	  "resume_variable": "n",
	  "success_score": "100"
	}
	
Reddit Post Scraper
********************

Reddit Post Scraper scrapes  awards, community, description, post_date, post_link, posted_by and upvotes

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	response = datakund.reddit_post_keyword(keyword="delta")

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.reddit_post_keyword("keyword")
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"reddit_post_keyword~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"keyword":"delta"}}'

Response Data
##############

.. code-block:: json

			
	{
	  "body": [
		{
		  "awards": "1 awards",
		  "comments": "150 comments",
		  "community": "r/trees",
		  "description": "my mom just ate a 750 mg delta 8 gummy",
		  "post_date": "22 days ago",
		  "post_link": "/r/trees/comments/rp7e4s/my_mom_just_ate_a_750_mg_delta_8_gummy/",
		  "posted_by": "u/seaturtles5288",
		  "upvotes": "187 upvotes"
		},
		{
		  "awards": "5 awards",
		  "comments": "1.3k comments",
		  "community": "r/Coronavirus",
		  "description": "Omicron associated with 91% reduction in risk of death compared to Delta, study finds",
		  "post_date": "3 days ago",
		  "post_link": "/r/Coronavirus/comments/s3r8sx/omicron_associated_with_91_reduction_in_risk_of/",
		  "posted_by": "u/FatFuckinLenny",
		  "upvotes": "19.9k upvotes"
		},
		{
		  "awards": "8 awards",
		  "comments": "3.0k comments",
		  "community": "r/Coronavirus",
		  "description": "Leaders urge Americans to cancel New Year’s plans: ‘Omicron and delta are coming to your party’",
		  "post_date": "19 days ago",
		  "post_link": "/r/Coronavirus/comments/rr7div/leaders_urge_americans_to_cancel_new_years_plans/",
		  "posted_by": "u/zsreport",
		  "upvotes": "25.4k upvotes"
		},
		{
		  "awards": "0 awards",
		  "comments": "1.4k comments",
		  "community": "r/PublicFreakout",
		  "description": "Woman kicked off Delta flight for wearing a closed vent respirator.",
		  "post_date": "2 days ago",
		  "post_link": "/r/PublicFreakout/comments/s4kdh0/woman_kicked_off_delta_flight_for_wearing_a/",
		  "posted_by": "u/Veenendaler",
		  "upvotes": "6.6k upvotes"
		},
		{
		  "awards": "0 awards",
		  "comments": "66 comments",
		  "community": "r/trees",
		  "description": "Thoughts on delta 8",
		  "post_date": "1 month ago",
		  "post_link": "/r/trees/comments/r9hyok/thoughts_on_delta_8/",
		  "posted_by": "u/Saintbirdyy",
		  "upvotes": "13 upvotes"
		},
		{
		  "awards": "6 awards",
		  "comments": "4.0k comments",
		  "community": "r/news",
		  "description": "Delta plane makes emergency landing after passenger assaults flight attendant and air marshal, police say",
		  "post_date": "1 month ago",
		  "post_link": "/r/news/comments/rd7kem/delta_plane_makes_emergency_landing_after/",
		  "posted_by": "u/anyonmoussource",
		  "upvotes": "43.7k upvotes"
		},
		{
		  "awards": "1 awards",
		  "comments": "799 comments",
		  "community": "r/news",
		  "description": "Delta loses $408 million; 8,000 employees contract Covid over the last four weeks",
		  "post_date": "4 days ago",
		  "post_link": "/r/news/comments/s31pyv/delta_loses_408_million_8000_employees_contract/",
		  "posted_by": "u/Lord-AG",
		  "upvotes": "8.4k upvotes"
		},
		{
		  "awards": "0 awards",
		  "comments": "101 comments",
		  "community": "r/Drugs",
		  "description": "The truth about Delta 8",
		  "post_date": "3 months ago",
		  "post_link": "/r/Drugs/comments/qhy1jt/the_truth_about_delta_8/",
		  "posted_by": "u/CDCpup",
		  "upvotes": "57 upvotes"
		},
		{
		  "awards": "1 awards",
		  "comments": "963 comments",
		  "community": "r/Coronavirus",
		  "description": "Omicron has a 91% lower chance of death than delta variant of COVID-19: study",
		  "post_date": "4 days ago",
		  "post_link": "/r/Coronavirus/comments/s2qtiy/omicron_has_a_91_lower_chance_of_death_than_delta/",
		  "posted_by": "u/ankermouse11",
		  "upvotes": "4.4k upvotes"
		},
		{
		  "awards": "4 awards",
		  "comments": "1.4k comments",
		  "community": "r/PublicFreakout",
		  "description": "Obnoxious drunk guy not wearing his mask fights another passenger on Delta flight",
		  "post_date": "23 days ago",
		  "post_link": "/r/PublicFreakout/comments/roa3pc/obnoxious_drunk_guy_not_wearing_his_mask_fights/",
		  "posted_by": "u/tefunka",
		  "upvotes": "16.7k upvotes"
		},
		{
		  "awards": "20 awards",
		  "comments": "1.1k comments",
		  "community": "r/mildlyinteresting",
		  "description": "Flew on a new Delta plane, and they put a window in the lavatory",
		  "post_date": "27 days ago",
		  "post_link": "/r/mildlyinteresting/comments/rln9ek/flew_on_a_new_delta_plane_and_they_put_a_window/",
		  "posted_by": "u/MaximumEngineering8",
		  "upvotes": "36.2k upvotes"
		},
		{
		  "awards": "14 awards",
		  "comments": "1.6k comments",
		  "community": "r/Coronavirus",
		  "description": "U.K. Study Finds No Evidence Omicron Cases Are Less Severe Than Delta",
		  "post_date": "1 month ago",
		  "post_link": "/r/Coronavirus/comments/rii6vj/uk_study_finds_no_evidence_omicron_cases_are_less/",
		  "posted_by": "u/Fearless-Cricket3297",
		  "upvotes": "15.8k upvotes"
		},
		{
		  "awards": "1 awards",
		  "comments": "171 comments",
		  "community": "r/trees",
		  "description": "I tried Delta-8",
		  "post_date": "4 months ago",
		  "post_link": "/r/trees/comments/q0oa7j/i_tried_delta8/",
		  "posted_by": "u/boonkdocksaints",
		  "upvotes": "463 upvotes"
		},
		{
		  "awards": "1 awards",
		  "comments": "580 comments",
		  "community": "r/EverythingScience",
		  "description": "Cyprus reportedly discovers a Covid variant that combines omicron and delta",
		  "post_date": "8 days ago",
		  "post_link": "/r/EverythingScience/comments/rzj7ru/cyprus_reportedly_discovers_a_covid_variant_that/",
		  "posted_by": "u/malcolm58",
		  "upvotes": "2.6k upvotes"
		},
		{
		  "awards": "4 awards",
		  "comments": "219 comments",
		  "community": "r/mildlyinfuriating",
		  "description": "Had time to go to bed and wake up in the morning … still on hold. Thanks Delta",
		  "post_date": "4 days ago",
		  "post_link": "/r/mildlyinfuriating/comments/s2pc7e/had_time_to_go_to_bed_and_wake_up_in_the_morning/",
		  "posted_by": "u/Juggernaut06",
		  "upvotes": "9.2k upvotes"
		},
		{
		  "awards": "15 awards",
		  "comments": "607 comments",
		  "community": "r/askscience",
		  "description": "Do we have evidence that Omicron is \"more mild\" than Delta coronavirus?",
		  "post_date": "18 days ago",
		  "post_link": "/r/askscience/comments/rs3cn1/do_we_have_evidence_that_omicron_is_more_mild/",
		  "posted_by": "u/jdtrouble",
		  "upvotes": "7.5k upvotes"
		},
		{
		  "awards": "133 awards",
		  "comments": "352 comments",
		  "community": "r/Superstonk",
		  "description": "GME Delta Neutral Update - Hedgies R F'd",
		  "post_date": "10 days ago",
		  "post_link": "/r/Superstonk/comments/rxtqpg/gme_delta_neutral_update_hedgies_r_fd/",
		  "posted_by": "u/yelyah2",
		  "upvotes": "6.2k upvotes"
		},
		{
		  "awards": "5 awards",
		  "comments": "2.1k comments",
		  "community": "r/Coronavirus",
		  "description": "First stats for Omicron in Israel: protection for vaccinated similar to Delta, twice as dangerous for unvaccinated",
		  "post_date": "2 months ago",
		  "post_link": "/r/Coronavirus/comments/r5ueps/first_stats_for_omicron_in_israel_protection_for/",
		  "posted_by": "u/benben83",
		  "upvotes": "23.3k upvotes"
		},
		{
		  "awards": "1 awards",
		  "comments": "576 comments",
		  "community": "r/entertainment",
		  "description": "'Karen' who slapped Delta passenger is ex-'Baywatch' actress Patricia Cornwall",
		  "post_date": "20 days ago",
		  "post_link": "/r/entertainment/comments/rql0oz/karen_who_slapped_delta_passenger_is_exbaywatch/",
		  "posted_by": "u/nimobo",
		  "upvotes": "4.5k upvotes"
		},
		{
		  "awards": "3 awards",
		  "comments": "701 comments",
		  "community": "r/Coronavirus",
		  "description": "U.S. hospitals are once again 'at a breaking point' with delta and omicron",
		  "post_date": "26 days ago",
		  "post_link": "/r/Coronavirus/comments/rlrch6/us_hospitals_are_once_again_at_a_breaking_point/",
		  "posted_by": "u/Dirtyfaction",
		  "upvotes": "6.1k upvotes"
		},
		{
		  "awards": "0 awards",
		  "comments": "511 comments",
		  "community": "r/Coronavirus",
		  "description": "Omicron Cases Pass U.S. Peak Seen With Delta, But With Fewer Hospitalizations",
		  "post_date": "21 days ago",
		  "post_link": "/r/Coronavirus/comments/rpntx6/omicron_cases_pass_us_peak_seen_with_delta_but/",
		  "posted_by": "u/jsinkwitz",
		  "upvotes": "3.9k upvotes"
		},
		{
		  "awards": "3 awards",
		  "comments": "875 comments",
		  "community": "r/canada",
		  "description": "Omicron carries 80% less risk of hospitalization vs. Delta, study suggests",
		  "post_date": "26 days ago",
		  "post_link": "/r/canada/comments/rmceub/omicron_carries_80_less_risk_of_hospitalization/",
		  "posted_by": "u/NilbyBC",
		  "upvotes": "2.8k upvotes"
		},
		{
		  "awards": "4 awards",
		  "comments": "400 comments",
		  "community": "r/collapse",
		  "description": "New Variant \"Deltacron\" discovered in Cyprus, 8 January 2022. \"...Shares the genetic background of the Delta variant along with some of the mutations of Omicron...\"",
		  "post_date": "9 days ago",
		  "post_link": "/r/collapse/comments/rzblwr/new_variant_deltacron_discovered_in_cyprus_8/",
		  "posted_by": "u/fkaneko",
		  "upvotes": "1.1k upvotes"
		},
		{
		  "awards": "0 awards",
		  "comments": "210 comments",
		  "community": "r/news",
		  "description": "Three women charged for allegedly assaulting Delta Airlines employees",
		  "post_date": "3 days ago",
		  "post_link": "/r/news/comments/s3fojc/three_women_charged_for_allegedly_assaulting/",
		  "posted_by": "u/Bonboniru",
		  "upvotes": "1.8k upvotes"
		}
	  ],
	  "errors": [],
	  "resume_variable": "n",
	  "success_score": "100"
	}
	
Square Yards Properties Scraper With No Input
*********************************************

Bot will visit suareyard.com and scrape the price, location, name and link of square yard properties

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	response = datakund.square_yards_properties()

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.square_yards_properties()
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"square_yards_properties~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true}'

Response Data
##############

.. code-block:: json

			
	{
	  "body": [
		{
		  "features": "2 BHK-3 BHK Flat",
		  "location": "Sector 61",
		  "price": "1.25 Cr",
		  "property": "Smart World Orchard",
		  "sy_link": "https://www.squareyards.com/gurgaon-residential-property/smart-world-orchard/103238/project"
		},
		{
		  "features": "2 BHK-3 BHK Flat",
		  "location": "Sector 89",
		  "price": "68.00 Lac",
		  "property": "Smart World Gems",
		  "sy_link": "https://www.squareyards.com/gurgaon-residential-property/smart-world-gems/106590/project"
		},
		{
		  "features": "100 Sq. Ft. to 200 Sq. Ft. (Carpet)",
		  "location": "Sector 90",
		  "price": "8.78 Lac",
		  "property": "Alphathum",
		  "sy_link": "https://www.squareyards.com/noida-residential-property/alphathum/8681/project"
		},
		{
		  "features": "2 BHK-3 BHK Flat",
		  "location": "Budigere",
		  "price": "44.30 Lac",
		  "property": "Shriram Codename Yuva",
		  "sy_link": "https://www.squareyards.com/bangalore-residential-property/shriram-codename-yuva/101286/project"
		},
		{
		  "features": "1 BHK-2 BHK Flat",
		  "location": "Hinjewadi",
		  "price": "31.81 Lac",
		  "property": "Kolte Patil Life Republic Universe",
		  "sy_link": "https://www.squareyards.com/pune-residential-property/kolte-patil-life-republic-universe/102376/project"
		},
		{
		  "features": "3 BHK Flat",
		  "location": "Sector 89",
		  "price": "1.04 Cr",
		  "property": "M3M Soulitude",
		  "sy_link": "https://www.squareyards.com/gurgaon-residential-property/m3m-soulitude/106807/project"
		},
		{
		  "features": "2 BHK-3 BHK Flat",
		  "location": "Dhankawadi",
		  "price": "32.16 Lac",
		  "property": "4 Taljai Hills Phase 1",
		  "sy_link": "https://www.squareyards.com/pune-residential-property/4-taljai-hills-phase-1/102123/project"
		},
		{
		  "features": "1 BHK-2 BHK-3 BHK-4 BHK Flat",
		  "location": "Mulund West",
		  "price": "1.01 Cr",
		  "property": "Piramal Revanta Tower 3 and 4",
		  "sy_link": "https://www.squareyards.com/mumbai-residential-property/piramal-revanta-tower-3-and-4/100528/project"
		},
		{
		  "features": "1200 Sq. Ft. to 3200 Sq. Ft. (Carpet)",
		  "location": "Devanahalli",
		  "price": "56.39 Lac",
		  "property": "Puravankara Tivoli Hills",
		  "sy_link": "https://www.squareyards.com/bangalore-residential-property/puravankara-tivoli-hills/109172/project"
		},
		{
		  "features": "67 Sq. Ft. to 1098 Sq. Ft. (Carpet)",
		  "location": "Sector 150",
		  "price": "29.90 Lac",
		  "property": "Bhutani City Center",
		  "sy_link": "https://www.squareyards.com/noida-residential-property/bhutani-city-center/109184/project"
		},
		{
		  "features": "1 BHK-2 BHK-3 BHK-4 BHK Flat",
		  "location": "Powai",
		  "price": "1.25 Cr",
		  "property": "LnT Realty Emerald Isle",
		  "sy_link": "https://www.squareyards.com/mumbai-residential-property/lnt-realty-emerald-isle/2951/project"
		},
		{
		  "features": "1 BHK-2 BHK Flat",
		  "location": "Mira Bhayandar",
		  "price": "44.39 Lac",
		  "property": "JP Codename Hotcake",
		  "sy_link": "https://www.squareyards.com/mumbai-residential-property/jp-codename-hotcake/10457/project"
		},
		{
		  "features": "1163 Sq. Ft. to 3875 Sq. Ft. (Carpet)",
		  "location": "Sarjapur Road",
		  "price": "65.13 Lac",
		  "property": "Prestige Great Acres",
		  "sy_link": "https://www.squareyards.com/bangalore-residential-property/prestige-great-acres/111122/project"
		},
		{
		  "features": "3 BHK Flat",
		  "location": "Sector 150",
		  "price": "79.90 Lac",
		  "property": "Tata Eureka Park Phase 2",
		  "sy_link": "https://www.squareyards.com/noida-residential-property/tata-eureka-park-phase-2/112905/project"
		},
		{
		  "features": "2 BHK Flat",
		  "location": "Kandivali West",
		  "price": "1.34 Cr",
		  "property": "Ruparel Mumbai XL",
		  "sy_link": "https://www.squareyards.com/mumbai-residential-property/ruparel-mumbai-xl/111437/project"
		},
		{
		  "features": "1 BHK-2 BHK-3 BHK Flat",
		  "location": "Bavdhan",
		  "price": "51.00 Lac",
		  "property": "Goel Ganga Legend",
		  "sy_link": "https://www.squareyards.com/pune-residential-property/goel-ganga-legend/2123/project"
		},
		{
		  "features": "1 BHK-2 BHK-3 BHK Flat",
		  "location": "Mahalunge Ingale",
		  "price": "39.55 Lac",
		  "property": "Godrej Hillside",
		  "sy_link": "https://www.squareyards.com/pune-residential-property/godrej-hillside/10730/project"
		},
		{
		  "features": "1 BHK-2 BHK-3 BHK Flat",
		  "location": "Manjari",
		  "price": "25.07 Lac",
		  "property": "Godrej Park Ridge",
		  "sy_link": "https://www.squareyards.com/pune-residential-property/godrej-park-ridge/103462/project"
		},
		{
		  "features": "506 Sq. Ft. to 760 Sq. Ft. (Carpet)",
		  "location": "Baner",
		  "price": "70.54 Lac",
		  "property": "Mittal One Place",
		  "sy_link": "https://www.squareyards.com/pune-residential-property/mittal-one-place/111696/project"
		},
		{
		  "features": "1 BHK-2 BHK-3 BHK Flat",
		  "location": "Mundhwa",
		  "price": "19.54 Lac",
		  "property": "Purva Silversands",
		  "sy_link": "https://www.squareyards.com/pune-residential-property/purva-silversands/34407/project"
		},
		{
		  "features": "2 BHK-3 BHK Flat",
		  "location": "Hinjewadi",
		  "price": "49.55 Lac",
		  "property": "Mittal SkyHigh Towers",
		  "sy_link": "https://www.squareyards.com/pune-residential-property/mittal-skyhigh-towers/112990/project"
		},
		{
		  "features": "1 BHK-2 BHK Flat",
		  "location": "Bavdhan",
		  "price": "23.75 Lac",
		  "property": "Puraniks Abitante Fiore",
		  "sy_link": "https://www.squareyards.com/pune-residential-property/puraniks-abitante-fiore/100339/project"
		},
		{
		  "features": "2 BHK Flat",
		  "location": "Bhugaon",
		  "price": "59.28 Lac",
		  "property": "Paranjape Forest Trails Highland Tower 9 10 and 11",
		  "sy_link": "https://www.squareyards.com/pune-residential-property/paranjape-forest-trails-highland-tower-9-10-and-11/100539/project"
		},
		{
		  "features": "2 BHK-3 BHK Flat",
		  "location": "Pimple Nilakh",
		  "price": "96.80 Lac",
		  "property": "Yashada Epic Phase 2",
		  "sy_link": "https://www.squareyards.com/pune-residential-property/yashada-epic-phase-2/103650/project"
		},
		{
		  "features": "2 BHK-3 BHK-4 BHK Flat",
		  "location": "Bachupally",
		  "price": "57.14 Lac",
		  "property": "Urbanrise Codename Talk Of Hyderabad",
		  "sy_link": "https://www.squareyards.com/hyderabad-residential-property/urbanrise-codename-talk-of-hyderabad/101894/project"
		},
		{
		  "features": "2 BHK-3 BHK Flat",
		  "location": "Patancheru",
		  "price": "59.00 Lac",
		  "property": "Ramky One Symphony",
		  "sy_link": "https://www.squareyards.com/hyderabad-residential-property/ramky-one-symphony/103970/project"
		},
		{
		  "features": "2 BHK-3 BHK Flat",
		  "location": "Moti Nagar",
		  "price": "85.00 Lac",
		  "property": "Brigade Citadel Phase II",
		  "sy_link": "https://www.squareyards.com/hyderabad-residential-property/brigade-citadel-phase-ii/104062/project"
		},
		{
		  "features": "2 BHK-3 BHK Flat",
		  "location": "Sanath Nagar",
		  "price": "1.05 Cr",
		  "property": "Kalpataru Avante",
		  "sy_link": "https://www.squareyards.com/hyderabad-residential-property/kalpataru-avante/110954/project"
		},
		{
		  "features": "2 BHK-3 BHK Flat",
		  "location": "Hosahalli",
		  "price": "92.00 Lac",
		  "property": "Puravankara Purva Zenium",
		  "sy_link": "https://www.squareyards.com/bangalore-residential-property/puravankara-purva-zenium/10487/project"
		},
		{
		  "features": "1 BHK-2 BHK Flat",
		  "location": "Hinjewadi",
		  "price": "36.53 Lac",
		  "property": "Paranjape Trident Towers",
		  "sy_link": "https://www.squareyards.com/pune-residential-property/paranjape-trident-towers/9368/project"
		},
		{
		  "features": "1 BHK-2 BHK Flat",
		  "location": "Hinjewadi",
		  "price": "33.80 Lac",
		  "property": "Kolte Patil Life Republic Oro Avenue",
		  "sy_link": "https://www.squareyards.com/pune-residential-property/kolte-patil-life-republic-oro-avenue/10279/project"
		},
		{
		  "features": "1 BHK-2 BHK-3 BHK-4 BHK Flat",
		  "location": "Thanisandra Main Road",
		  "price": "33.71 Lac",
		  "property": "Bhartiya City Nikoo Homes 4",
		  "sy_link": "https://www.squareyards.com/bangalore-residential-property/bhartiya-city-nikoo-homes-4/109546/project"
		},
		{
		  "features": "1 BHK-2 BHK-3 BHK Flat",
		  "location": "Dahisar East",
		  "price": "83.54 Lac",
		  "property": "MICL Aaradhya Prime Park",
		  "sy_link": "https://www.squareyards.com/mumbai-residential-property/micl-aaradhya-prime-park/112326/project"
		},
		{
		  "features": "1 BHK-2 BHK-3 BHK Flat",
		  "location": "Andheri West",
		  "price": "1.26 Cr",
		  "property": "Transcon Triumph Tower 3",
		  "sy_link": "https://www.squareyards.com/mumbai-residential-property/transcon-triumph-tower-3/102847/project"
		},
		{
		  "features": "1 BHK-2 BHK Flat",
		  "location": "Mahim West",
		  "price": "1.46 Cr",
		  "property": "Prescon Midtown Bay",
		  "sy_link": "https://www.squareyards.com/mumbai-residential-property/prescon-midtown-bay/111905/project"
		},
		{
		  "features": "2 BHK Flat",
		  "location": "Wakad",
		  "price": "53.19 Lac",
		  "property": "Jhamtani Ace Almighty Phase I",
		  "sy_link": "https://www.squareyards.com/pune-residential-property/jhamtani-ace-almighty-phase-i/21761/project"
		}
	  ],
	  "errors": [],
	  "resume_variable": "n",
	  "success_score": "100"
	}
	
	
9/11 Victim List Scraper
************************

List of the dead. The following list details the number of deaths reported by companies in business premises at the World Trade Center. This Bot scrapes 9/11 Victim List, the names of all of those who lost their lives in the attacks.

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	response = datakund.nine_eleven_victim_list()

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.nine_eleven_victim_list()
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"nine_eleven_victim_list~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true}'

Response Data
##############

.. code-block:: json

			
	{
  "body": [
    {
      "Column A@txt": "Gordon M Aamoth, Jr"
    },
    {
      "Column A@txt": "Edelmiro Abad"
    },
    {
      "Column A@txt": "Laurence Christopher Abel"
    },
        {
      "Column A@txt": "Igor Zukelman"
    }
  ],
  "errors": [],
  "resume_variable": 0,
  "success_score": "100"
}



Coin Market Cap Scraper
***********************

List of the dead. The following list details the number of deaths reported by companies in business premises at the World Trade Center. This Bot scrapes 9/11 Victim List, the names of all of those who lost their lives in the attacks.

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	response = datakund.coinmarketcap_data_scrape()

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.coinmarketcap_data_scrape()
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"coinmarketcap_data_scrape~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true}'

Response Data
##############

.. code-block:: json

			
	{
    "errors": [],
    "body": [
      {
        "sr": "1",
        "name": "Bitcoin",
        "price": "$42,098.74",
        "market_cap": "$797,044,034,763",
        "volume": "$22,201,677,810",
        "circulating_supply": "18,932,731 BTC"
      },
      {
        "sr": "2",
        "name": "Ethereum",
        "price": "$3,189.46",
        "7d": "2.22%",
        "market_cap": "$380,198,314,558",
        "volume": "$12,446,260,038",
        "circulating_supply": "119,204,659 ETH"
      },
      {
        "sr": "3",
        "name": "BNB",
        "price": "$472.98",
        "7d": "9.06%",
        "market_cap": "$78,893,657,901",
        "volume": "$2,085,284,462",
        "circulating_supply": "166,801,148 BNB"
      },
      {
        "sr": "4",
        "name": "Tether",
        "price": "$1.00",
        "24h": "0.01%",
        "7d": "0.02%",
        "market_cap": "$78,342,225,662",
        "volume": "$51,730,465,132",
        "circulating_supply": "78,304,569,301 USDT"
      },
      {
        "sr": "5",
        "name": "Cardano",
        "price": "$1.58",
        "24h": "8.23%",
        "7d": "35.90%",
        "market_cap": "$52,924,420,838",
        "volume": "$5,677,267,400",
        "circulating_supply": "33,526,602,253 ADA"
      },
      {
        "sr": "6",
        "name": "USD Coin",
        "price": "$0.9997",
        "24h": "0.03%",
        "market_cap": "$45,522,416,540",
        "volume": "$2,904,679,026",
        "circulating_supply": "45,536,865,009 USDC"
      },
      {
        "sr": "7",
        "name": "Solana",
        "price": "$139.26",
        "7d": "1.47%",
        "market_cap": "$43,747,704,393",
        "volume": "$1,437,074,661",
        "circulating_supply": "314,152,501 SOL"
      },
      {
        "sr": "8",
        "name": "XRP",
        "price": "$0.7583",
        "7d": "1.54%",
        "market_cap": "$36,145,294,013",
        "volume": "$1,454,912,554",
        "circulating_supply": "47,663,117,635 XRP"
      },
      {
        "sr": "9",
        "name": "Terra",
        "price": "$77.10",
        "7d": "6.12%",
        "market_cap": "$27,606,349,430",
        "volume": "$1,921,553,192",
        "circulating_supply": "358,044,017 LUNA"
      },
      {
        "sr": "10",
        "name": "Polkadot",
        "price": "$25.51",
        "7d": "5.03%",
        "market_cap": "$25,192,258,233",
        "volume": "$1,349,143,918",
        "circulating_supply": "987,579,315 DOT"
      }
    ],
    "resume_variable": "n",
    "success_score": "100"
  }


All movie scraper
******************

All movie scraper is a python library to search for movies details on all movies website, using browser automation


Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	response = datakund.horror_movie_scrapers(search="horrors")

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.horror_movie_scrapers("horrors")
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"horror_movie_scrapers~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"search":"horrors"}}'

Response Data
##############

.. code-block:: json

			
	{
	  "body": [
    {
      "directed by": "Frank Oz",
      "genres": "Genres: Comedy, Horror, Musical",
      "movie detailed page": "https://www.allmovie.com/movie/little-shop-of-horrors-v29673",
      "movie name": "Little Shop of Horrors"
    },
    {
      "movie detailed page": "https://www.allmovie.com/movie/galaxy-of-horrors-v681245",
      "movie name": "Galaxy of Horrors"
    },
    {
      "directed by": "Roger Corman",
      "genres": "Genres: Horror",
      "movie detailed page": "https://www.allmovie.com/movie/the-little-shop-of-horrors-v29672",
      "movie name": "The Little Shop of Horrors"
    },
    {
      "directed by": "Lucio Fulci",
      "genres": "Genres: Horror",
      "movie detailed page": "https://www.allmovie.com/movie/the-sweet-house-of-horrors-v265372",
      "movie name": "The Sweet House of Horrors"
    },
    {
      "directed by": "Makooto Ohtake",
      "genres": "Genres: Horror",
      "movie detailed page": "https://www.allmovie.com/movie/horny-house-of-horrors-v544571",
      "movie name": "Horny House of Horrors"
    },
    {
      "directed by": "Fritz Bottger",
      "genres": "Genres: Horror",
      "movie detailed page": "https://www.allmovie.com/movie/horrors-of-spider-island-v95621",
      "movie name": "Horrors of Spider Island"
    },
    {
      "movie detailed page": "https://www.allmovie.com/movie/horrors-of-the-third-reich-v23164",
      "movie name": "Horrors of the Third Reich"
    },
    {
      "movie detailed page": "https://www.allmovie.com/movie/horrors-of-the-black-zoo-v95623",
      "movie name": "Horrors of the Black Zoo"
    },
    {
      "directed by": "Jean Yarbrough",
      "genres": "Genres: Crime, Horror",
      "movie detailed page": "https://www.allmovie.com/movie/house-of-horrors-v95750",
      "movie name": "House of Horrors"
    },
    {
      "movie detailed page": "https://www.allmovie.com/movie/harvest-of-horrors-v728013",
      "movie name": "Harvest of Horrors"
    },
    {
      "movie detailed page": "https://www.allmovie.com/movie/horror-sci-fi-trailers-vol-3-classic-horrors-v23136",
      "movie name": "Horror & Sci-Fi Trailers, Vol. 3: Classic Horrors"
    },
    {
      "movie detailed page": "https://www.allmovie.com/movie/fangorias-weekend-of-horrors-v16739",
      "movie name": "Fangoria's Weekend of Horrors"
    },
    {
      "directed by": "Doug Waugh",
      "genres": "Genres: Horror",
      "movie detailed page": "https://www.allmovie.com/movie/treasure-chest-of-horrors-v562454",
      "movie name": "Treasure Chest of Horrors"
    },
    {
      "movie detailed page": "https://www.allmovie.com/movie/shadows-choose-their-horrors-v643415",
      "movie name": "Shadows Choose Their Horrors"
    },
    {
      "movie detailed page": "https://www.allmovie.com/movie/unspeakable-horrors-the-plan-9-conspiracy-v684389",
      "movie name": "Unspeakable Horrors: The Plan 9 Conspiracy"
    },
    {
      "directed by": "Toshio Hirata",
      "genres": "Genres: Horror",
      "movie detailed page": "https://www.allmovie.com/movie/pet-shop-of-horrors-daughter-v206671",
      "movie name": "Pet Shop of Horrors: Daughter"
    },
    {
      "movie detailed page": "https://www.allmovie.com/movie/pet-shop-of-horrors-delicious-v481988",
      "movie name": "Pet Shop of Horrors: Delicious"
    },
    {
      "movie detailed page": "https://www.allmovie.com/movie/pet-shop-of-horrors-despair-v481989",
      "movie name": "Pet Shop of Horrors: Despair"
    },
    {
      "movie detailed page": "https://www.allmovie.com/movie/pet-shop-of-horrors-dual-v481990",
      "movie name": "Pet Shop of Horrors: Dual"
    },
    {
      "movie detailed page": "https://www.allmovie.com/movie/treasure-chest-of-horrors-2-v577797",
      "movie name": "Treasure Chest of Horrors 2"
    }
  ],
  "errors": [],
  "resume_variable": "n",
  "success_score": "100",
  "resume_dict": {}
}


Amazon Product Price Scraper Bot
*********************************

Any product that will appear in the search results page of Amazon. this bot Will scrape the price of all the products.


Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	response = datakund.amazon_prices_scrape(field_keywords="shoes")

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.amazon_prices_scrape("shoes")
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"amazon_prices_scrape~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"field_keywords":"shoes"}}'

Response Data
##############

.. code-block:: json

			
	{
      "body": [
    {
      "price": "499",
      "title": "Men's Wonder-13 Sports Running Shoes"
    },
    {
      "title": "Men's Running Shoe"
    },
    {
      "title": "Men's Sd0323g Sneakers"
    },
    {
      "title": "Men's Loire-z126 Running Shoes"
    },
    {
      "title": "Men's Training Shoe"
    },
    {
      "title": "Men's Stonic Running Shoes"
    },
    {
      "price": "299",
      "title": "Men's Running Shoe"
    },
    {
      "title": "Men's Tywin Tr Training Shoe"
    },
    {
      "price": "570",
      "title": "Men's Cosko Running,Walking,Gym,Training Shoes"
    },
    {
      "title": "Leather with Lace Casual Shoes for Men RC1200"
    },
    {
      "title": "Men's Boss-Slick Uniform Dress Shoe"
    },
    {
      "title": "Men's Tyson Running Shoes"
    },
    {
      "title": "Ignite Men's Running Shoes"
    },
    {
      "title": "neo Men's Vs Set Sneakers"
    },
    {
      "title": "WoMen's Alexa Running Shoes"
    },
    {
      "price": "599",
      "title": "Cosco Running Shoes,Training Shoes,Gym Shoes,Sports Shoes,Walking Shoes for Men's"
    },
    {
      "price": "599",
      "title": "Men's Bouncer-01 Sports,Walking,Gym,Training,Running Shoes"
    },
    {
      "price": "499",
      "title": "Men's Sports Shoes"
    },
    {
      "price": "343",
      "title": "Men's Sports Shoes"
    },
    {
      "title": "Men's Clinch-x M Running Shoe"
    },
    {
      "price": "721",
      "title": "Men's Oxyfit Running Shoes"
    },
    {
      "title": "Men's Loire-z1 Running Shoes"
    },
    {
      "price": "1,199",
      "title": "Men's Missile-01 Running Shoes for Men I Sport Shoes for Boys with Beads Technology Sole for Extra Jump I Phylon Sole Casual Shoes for Men"
    },
    {
      "price": "699",
      "title": "Men's Hattrick-21 Sports Running Shoes"
    },
    {
      "price": "1,359",
      "title": "Men's North Plus Running Shoes"
    },
    {
      "price": "539",
      "title": "Men's Sneaker"
    },
    {
      "price": "699",
      "title": "Men's Creta-12 Running,Sports,Walking Shoes"
    },
    {
      "price": "1,099",
      "title": "Men's Rider-01 Phylon Sports,Running,Walking Shoes"
    },
    {
      "title": "Men's Protonium Lite Running Shoe"
    },
    {
      "title": "Tesla-44 Running Shoes for Men"
    },
    {
      "price": "1,048",
      "title": "WoMen's Inspire W Running Shoe"
    },
    {
      "title": "Men's Boss-Grip Uniform Dress Shoe"
    },
    {
      "title": "Men's Crysta Running Shoes"
    },
    {
      "price": "559",
      "title": "Men's Boss-ace Uniform Dress Shoe"
    },
    {
      "price": "1,835",
      "title": "Men's Comfort Infused Running Shoe"
    },
    {
      "price": "999",
      "title": "Oxygen-01 Running Shoes for Boys"
    },
    {
      "title": "Men's Thunderwatch Running Shoe"
    },
    {
      "price": "624",
      "title": "Plasma-08 sports shoes for men | Latest Stylish Casual sport shoes for men | running shoes for boys | Lace up Lightweight navy shoes for running, walking, gym, trekking, hiking & party Running Shoes For Men"
    },
    {
      "price": "574",
      "title": "Men's Century-12 Running,Walking,Sports Shoes"
    },
    {
      "title": "Men's Maxico Running Shoes"
    },
    {
      "title": "Men's Go 600-Nile Running Shoe"
    },
    {
      "title": "mens Sm-614 Running Shoe"
    },
    {
      "title": "Men's Rso111 Walking Shoes"
    },
    {
      "price": "1,679",
      "title": "Men Starlight IDP Sneakers"
    },
    {
      "price": "1,336",
      "title": "Men's Running Shoe"
    },
    {
      "price": "699",
      "title": "Men's Running Shoes"
    },
    {
      "price": "862",
      "title": "Men's Sm-500 Running Shoe"
    }
  ],
  "errors": [],
  "resume_variable": "n",
  "success_score": "100",
  "resume_dict": {}
}


Bing Search Scraper
********************

Bing Search Scraper is a python library to scrape for a bing search result using browser automation.

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	response = datakund.bing_search_result_scraper(q="science")

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.bing_search_result_scraper("science")
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"bing_search_result_scraper~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"q":"science"}}'

Response Data
##############

.. code-block:: json

			
	{
     "body": [
    {
      "description": "a systematic enterprise that builds and organizes knowledge in the form of testable explanations and predictions about the universe.",
      "link": "https://en.wikipedia.org/wiki/Science",
      "title": "Science - Wikipedia"
    }
  ],
  "errors": [],
  "resume_variable": "n",
  "success_score": "100",
  "resume_dict": {}
}


Coindesk Price Scraper with Commodity Link
*******************************************

This bot helps to scrape price, price_24_changed, price_24_low, price_24_high with coin desk link

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	
	response = datakund.coindesk_bitcoin(currency_link="https://www.coindesk.com/price/ethereum/")

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.coindesk_bitcoin("https://www.coindesk.com/price/ethereum/")
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"coindesk_bitcoin~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"currency_link":"https://www.coindesk.com/price/ethereum/"}}'

Response Data
##############

.. code-block:: json

	{
  "body": {
    "market_capital": "$373.16B",
    "price": "3,171.52",
    "price_24_changed": "-2.96%",
    "price_24_high": "$3,281.55",
    "price_24_low": "$3,144.64",
    "volume": "$669.33M"
  },
  "errors": [],
  "resume_variable": 0,
  "success_score": "100"
  }


Down Detector Scraper
*********************

Down Detector Issue Scraper, Detect Problem percentage with top problems in any Brand
Scrapes issues in brand with top parameters in down detector , Detect Problem percentage with top problems in any Brand

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	
	response = datakund.down_detector()

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.down_detector()
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"down_detector~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true}'

Response Data
##############

.. code-block:: json

	{
	  "body": {
		"bio": "Life Coach & Podcast Host @youcansipwithus ⁣⁣Passionate about helping women live a life they love, without waiting on the weight💞🤸🏼‍♀️⁣",
		"followed_by": "1,102",
		"followers": "213k",
		"following": "1,102",
		"posts": "5,259",
		"profile_name": "ashliemolstad"
	  },
	  "errors": [],
	  "resume_variable": 0,
	  "success_score": "100"
	}
	


Epoch Timestamp Converter Scraper
**********************************

Extract date and timezone with Timestamp

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	
	response = datakund.epoch_timestamp_converter(time_stamp='1642480266')

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.epoch_timestamp_converter("1642480266")
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"epoch_timestamp_converter~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"time_stamp":"1642480266"}}'

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
	
	
Facebook Friend List Scraper Bot
*********************************

Visit facebook and copy the profile link of whose friend list you want to scrape and paste the profile url in input box and click on the submit button. Facebook Friend List Scraper Bot will open the target user's profile and then open his friend list. when the friend list is opened, it will scrape all the friend's information like name and profile link and save the scraped data

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	
	datakund.facebook_login_password(email_address_or_phone_number="email",password="pass")
			or
	linkedin_login_cookies(facebook_cookies="cookies")
	
	response = facebook_friendlist_scraper(facebook_profile_url="https://www.facebook.com/saibys")

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.facebook_login_password("email@email.com","password")
		     or
	 datakund.facebook_login_password("cookies")
         datakund.facebook_friendlist_scraper("https://www.facebook.com/saibys")
		 
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"facebook_login_password~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"email_address_or_phone_number":"email","password":"pass"}}'
		 				or
		 curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"facebook_login_password~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"facebook_cookies":"cookies"}}'

		 
		 curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"facebook_friendlist_scraper~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"facebook_profile_url":"https://www.facebook.com/saibys"}}'
		 
Response Data
##############

.. code-block:: json

	{
	"body": [
		{
		"name": "Liji Justine",
		"profile_links": "https://www.facebook.com/liji.tom"
		},
		{
		"name": "Jomin Varghese",
		"profile_links": "https://www.facebook.com/jomin.varghese.9"
		},
		{
		"name": "Soniya Francis",
		"profile_links": "https://www.facebook.com/soniya.francis.71"
		},
		{
		"name": "Shaji Chennangad",
		"profile_links": "https://www.facebook.com/shaji.chennangad"
		},
		{
		"name": "Perinchery Joshy Jose",
		"profile_links": "https://www.facebook.com/joshy.jose.1276"
		},
		{
		"name": "Anu Jiby",
		"profile_links": "https://www.facebook.com/anu.jiby"
		},
		{
		"name": "Sheena Jens",
		"profile_links": "https://www.facebook.com/sheena.jens"
		},
		{
		"name": "Haritha Stephen Mangalath",
		"profile_links": "https://www.facebook.com/haritha.stephen.3"
		}
	],
	"errors": [],
	"resume_variable": "n",
	"success_score": "100"
	}
	
	
Gaana Scraper
****************

Gaana Scraper extract data from gaana playlist

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	
	response = datakund.gaana_playlist(playlist_link="https://gaana.com/playlist/gaana-dj-hindi-top-50-1")

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.gaana_playlist("https://gaana.com/playlist/gaana-dj-hindi-top-50-1")
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"gaana_playlist~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"playlist_link":"https://gaana.com/playlist/gaana-dj-hindi-top-50-1"}}'

Response Data
##############

.. code-block:: json

	{
  "body": [
    {
      "album": "Shershaah",
      "artists": "Jubin Nautiyal",
      "duration": "03:50",
      "track": "Raataan Lambiyan",
      "track_link": "/song/raataan-lambiyan-from-shershaah"
    },
    {
      "duration": "03:11",
      "track": "Pyaar Karte Ho Na",
      "track_link": "/song/pyaar-karte-ho-na"
    },
    {
      "duration": "03:43",
      "track": "Dance Meri Rani",
      "track_link": "/song/dance-meri-rani-1"
    },
    {
      "duration": "04:51",
      "track": "Rait Zara Si",
      "track_link": "/song/rait-zara-si-from-atrangi-re"
    },
    {
      "duration": "04:20",
      "track": "Aashiqui Aa Gayi",
      "track_link": "/song/aashiqui-aa-gayifrom-radhe-shyam"
    },
    {
      "duration": "04:43",
      "track": "Soch Liya",
      "track_link": "/song/soch-liya-from-radhe-shyam"
    },
    {
      "duration": "03:44",
      "track": "Srivalli",
      "track_link": "/song/srivalli-from-pushpa-the-rise-part-01"
    },
    {
      "artists": "Jubin Nautiyal",
      "duration": "04:44",
      "track": "Meri Zindagi Hai Tu",
      "track_link": "/song/meri-zindagi-hai-tu-from-satyameva-jayate-2"
    },
    {
      "artists": "Jubin Nautiyal",
      "duration": "04:33",
      "track": "Dil Galti Kar Baitha Hai (Feat. Mouni Roy)",
      "track_link": "/song/dil-galti-kar-baitha-hai-feat-mouni-roy"
    },
    {
      "duration": "03:16",
      "track": "Kusu Kusu",
      "track_link": "/song/kusu-kusu"
    },
    {
      "duration": "03:19",
      "track": "Phoonk Le",
      "track_link": "/song/phoonk-le"
    },
    {
      "duration": "03:40",
      "track": "Slow Slow",
      "track_link": "/song/slow-slow-23"
    },
    {
      "artists": "Jubin Nautiyal",
      "duration": "04:18",
      "track": "Udd Jaa Parindey",
      "track_link": "/song/udd-jaa-parindey-from-radhe-shyam"
    },
    {
      "duration": "03:51",
      "track": "Jugnu",
      "track_link": "/song/jugnu-18"
    },
    {
      "duration": "04:46",
      "track": "Mere Yaaraa",
      "track_link": "/song/mere-yaaraa"
    },
    {
      "album": "Shershaah",
      "duration": "03:48",
      "track": "Ranjha",
      "track_link": "/song/ranjha-from-shershaah"
    },
    {
      "duration": "03:55",
      "track": "Mohabbat Hai",
      "track_link": "/song/mohabbat-hai-3"
    },
    {
      "duration": "03:46",
      "track": "Oo Bolega Ya Oo Oo Bolega",
      "track_link": "/song/oo-bolega-ya-oo-oo-bolega-from-pushpa-the-rise-part-01"
    },
    {
      "duration": "04:10",
      "track": "Tip Tip",
      "track_link": "/song/tip-tip-from-sooryavanshi"
    },
    {
      "duration": "03:47",
      "track": "Saami Saami",
      "track_link": "/song/saami-saami-from-pushpa-the-rise-part-01"
    },
    {
      "duration": "03:34",
      "track": "Panghat",
      "track_link": "/song/madhuban-3"
    },
    {
      "duration": "05:19",
      "track": "Tumse Bhi Zyada",
      "track_link": "/song/tumse-bhi-zyada-from-tadap"
    },
    {
      "artists": "Jubin Nautiyal",
      "duration": "05:09",
      "track": "Tu Mera Hogaya Hai",
      "track_link": "/song/tu-mera-hogaya-hai-from-tadap"
    },
    {
      "duration": "04:07",
      "track": "Tenu Lehenga",
      "track_link": "/song/tenu-lehenga-from-satyameva-jayate-2"
    },
    {
      "duration": "03:25",
      "track": "Ni Jana",
      "track_link": "/song/ni-jana-1"
    },
    {
      "duration": "04:00",
      "track": "Heartfail",
      "track_link": "/song/heartfail"
    },
    {
      "duration": "03:52",
      "track": "Maiyya Mainu",
      "track_link": "/song/maiyya-mainu"
    },
    {
      "duration": "04:13",
      "track": "Tera Hua",
      "track_link": "/song/tera-hua-from-cash"
    },
    {
      "duration": "03:48",
      "track": "Mehram",
      "track_link": "/song/mehram-32"
    },
    {
      "duration": "03:12",
      "track": "Najaa",
      "track_link": "/song/najaa"
    },
    {
      "duration": "03:26",
      "track": "Tere Siva Jag Mein",
      "track_link": "/song/tere-siva-jag-mein-from-tadap"
    },
    {
      "duration": "03:22",
      "track": "Saawariya",
      "track_link": "/song/saawariya-37"
    },
    {
      "album": "Shershaah",
      "duration": "04:26",
      "track": "Mann Bharryaa 2.0",
      "track_link": "/song/mann-bharryaa-20-from-shershaah"
    },
    {
      "duration": "03:20",
      "track": "Param Sundari",
      "track_link": "/song/param-sundari"
    },
    {
      "duration": "03:20",
      "track": "Baarish Ban Jaana",
      "track_link": "/song/baarish-ban-jaana"
    },
    {
      "duration": "02:46",
      "track": "Ghana Kasoota",
      "track_link": "/song/ghana-kasoota"
    },
    {
      "album": "Shershaah",
      "duration": "03:50",
      "track": "Kabhii Tumhhe",
      "track_link": "/song/kabhii-tumhhe"
    },
    {
      "duration": "02:55",
      "track": "Paani Paani",
      "track_link": "/song/paani-paani-3"
    },
    {
      "duration": "04:11",
      "track": "Baarish Ki Jaaye",
      "track_link": "/song/baarish-ki-jaaye"
    },
    {
      "artists": "Jubin Nautiyal",
      "duration": "03:46",
      "track": "Rim Jhim",
      "track_link": "/song/rim-jhim-49"
    },
    {
      "duration": "05:00",
      "track": "Filhaal2 Mohabbat",
      "track_link": "/song/filhaal2-mohabbat"
    },
    {
      "duration": "02:58",
      "track": "Sakhiyan2.0",
      "track_link": "/song/sakhiyan-20"
    },
    {
      "duration": "02:44",
      "track": "Nadiyon Paar (Let the Music Play Again)",
      "track_link": "/song/nadiyon-paar-let-the-music-play-again-from-roohi"
    },
    {
      "duration": "03:27",
      "track": "Kanta Laga",
      "track_link": "/song/kanta-laga-5"
    },
    {
      "artists": "Jubin Nautiyal",
      "duration": "04:19",
      "track": "Barsaat Ki Dhun",
      "track_link": "/song/barsaat-ki-dhun-1"
    },
    {
      "duration": "03:46",
      "track": "Is Qadar",
      "track_link": "/song/is-qadar-2"
    },
    {
      "duration": "03:03",
      "track": "Bachpan Ka Pyaar",
      "track_link": "/song/bachpan-ka-pyaar-3"
    },
    {
      "duration": "02:38",
      "track": "Sajna, Say Yes To The Dress",
      "track_link": "/song/sajna-say-yes-to-the-dress"
    },
    {
      "duration": "02:36",
      "track": "Aila Re Aillaa",
      "track_link": "/song/aila-re-aillaa-from-sooryavanshi"
    },
    {
      "duration": "03:16",
      "track": "Majnu",
      "track_link": "/song/majnu-11"
    }
  ],
  "errors": [],
  "resume_variable": "n",
  "success_score": "100",
  "resume_dict": {}
}


Google Scholar Scraper 
***********************

Google scholar scraper is a python library to scrape for a google scholar result using browser automation.


Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	response = datakund.google_scholar_scraper(search="science")

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.google_scholar_scraper("search")
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"google_scholar_scraper~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"search":"science"}}'

Response Data
##############

.. code-block:: json

			
	{
     "body": [
    {
      "Description": "… science will become increasingly concerned with enhancing the biological value of traditional \nfoods and with elaborating entirely new sources of nourishment, as the pressure of world \npopulation grows. Moreover, a closer association of food science … with which food science is …",
      "Link": "https://books.google.com/books?hl=en&lr=&id=b7xQAwAAQBAJ&oi=fnd&pg=PP1&dq=science&ots=sJvlLFuPz6&sig=2H7eRheyBg-QPg9UViPZJMoF2rI",
      "Title": "Lawrie's meat science"
    },
    {
      "Description": "This new edition of the bestselling Microlithography: Science and Technology provides a \nbalanced treatment of theoretical and operational considerations, from elementary concepts \nto advanced aspects of modern submicron microlithography. Each chapter reflects the current …",
      "Link": "https://www.taylorfrancis.com/books/mono/10.1201/9781420051537/microlithography-bruce-smith-kazuaki-suzuki",
      "Title": "Microlithography: science and technology"
    },
    {
      "Description": "… Harré shows how various views about the nature of science are related to the great historical \nschools of philosophy. He sets out his argument in terms of concrete episodes in the history \nof science. Harré also examines the theory that science is a form of art, and looks at the way …",
      "Link": "https://philpapers.org/rec/HARTPO-90",
      "Title": "The Philosophies of Science An Introductory Survey"
    },
    {
      "Description": "This major work, by one of the key figures in cultural studies, critically examines the theory, \nhistory and practice of culture. It is a comprehensive review of the main debates in cultural \nstudies that is grounded in an historical account of the modern relations between culture and …",
      "Link": "https://books.google.com/books?hl=en&lr=&id=dhiy_CjJlRYC&oi=fnd&pg=PR7&dq=science&ots=yUXv6sAQfS&sig=jys_6qS2njWj2IEhf_8AT2Ugyx8",
      "Title": "Culture: A reformer's science"
    },
    {
      "Description": "… science but to scientists and members of the public who wish to understand science studies \nconcepts. It is a sympathetic account of how science studies can ``help science … The book \nlargely is laid out following the Mertonian norms of science, which it investigates in some detail. …",
      "Link": "https://iopscience.iop.org/article/10.1088/0963-6625/10/1/701/meta",
      "Title": "Real science: What it is, and what it means"
    }
  ],
  "errors": [],
  "resume_variable": "n",
  "success_score": "100",
  "resume_dict": {}
}


Google Scholar Scraper 
************************

Google Search Result Scraper is a python library to scrape for a google search result using browser automation


Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	response = datakund.google_search_result_scraper(search="science")

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.google_search_result_scraper("science")
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"google_search_result_scraper~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"search":"science"}}'

Response Data
##############

.. code-block:: json

			
	{
      "body": [
		{
		  "link": "https://en.wikipedia.org/wiki/Science",
		  "title": "Science - Wikipedia"
		},
		{
		  "description": "Science, any system of knowledge that is concerned with the physical world and its phenomena and that entails unbiased observations and systematic",
		  "link": "https://www.britannica.com/science/science",
		  "title": "science | Definition, Disciplines, & Facts | Britannica"
		},
		{
		  "link": "https://www.sciencedirect.com/",
		  "title": "ScienceDirect.com | Science, health and medical journals, full ..."
		},
		{
		  "link": "https://iisc.ac.in/",
		  "title": "Indian Institute of Science"
		},
		{
		  "link": "https://plos.org/",
		  "title": "PLOS: Home"
		},
		{
		  "link": "https://www.sciencenews.org/",
		  "title": "Science News | The latest news from all areas of science"
		}
	  ],
	  "errors": [],
	  "resume_variable": "n",
	  "success_score": "100",
	  "resume_dict": {}
	}
	
	
IMDb Top 250 Movies Scraper
****************************

IMDb is the world's most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows. With the help of IMDb Top Movies Scraper you can scrape the title and rating of top 250 movies.

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	response = datakund.imdb_scrape_top_movies()

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.imdb_scrape_top_movies()
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"imdb_scrape_top_movies~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true}'

Response Data
##############

.. code-block:: json

			
	{
    "body": [
    {
      "rating": "9.2",
      "title": "The Shawshank Redemption"
    },
    {
      "rating": "9.1",
      "title": "The Godfather"
    },
    {
      "rating": "9.0",
      "title": "The Godfather: Part II"
    },
    {
      "rating": "9.0",
      "title": "The Dark Knight"
    },
    {
      "rating": "8.9",
      "title": "12 Angry Men"
    },
    {
      "rating": "8.9",
      "title": "Schindler's List"
    },
    {
      "rating": "8.9",
      "title": "The Lord of the Rings: The Return of the King"
    },
    {
      "rating": "8.8",
      "title": "Pulp Fiction"
    },
    {
      "rating": "8.8",
      "title": "The Good, the Bad and the Ugly"
    },
    {
      "rating": "8.8",
      "title": "The Lord of the Rings: The Fellowship of the Ring"
    },
    {
      "rating": "8.7",
      "title": "Fight Club"
    },
    {
      "rating": "8.7",
      "title": "Forrest Gump"
    },
    {
      "rating": "8.7",
      "title": "Inception"
    },
    {
      "rating": "8.7",
      "title": "The Lord of the Rings: The Two Towers"
    },
    {
      "rating": "8.7",
      "title": "Star Wars: Episode V - The Empire Strikes Back"
    },
    {
      "rating": "8.7",
      "title": "The Matrix"
    },
    {
      "rating": "8.6",
      "title": "Goodfellas"
    },
    {
      "rating": "8.6",
      "title": "One Flew Over the Cuckoo's Nest"
    },
    {
      "rating": "8.6",
      "title": "Seven Samurai"
    },
    {
      "rating": "8.6",
      "title": "Spider-Man: No Way Home"
    },
    {
      "rating": "8.6",
      "title": "Seven"
    },
    {
      "rating": "8.6",
      "title": "The Silence of the Lambs"
    },
    {
      "rating": "8.6",
      "title": "City of God"
    },
    {
      "rating": "8.6",
      "title": "It's a Wonderful Life"
    },
    {
      "rating": "8.6",
      "title": "Life Is Beautiful"
    },
    {
      "rating": "8.6",
      "title": "Saving Private Ryan"
    },
    {
      "rating": "8.5",
      "title": "Star Wars: Episode IV - A New Hope"
    },
    {
      "rating": "8.5",
      "title": "Interstellar"
    },
    {
      "rating": "8.5",
      "title": "Spirited Away"
    },
    {
      "rating": "8.5",
      "title": "The Green Mile"
    },
    {
      "rating": "8.5",
      "title": "Parasite"
    },
    {
      "rating": "8.5",
      "title": "Leon"
    },
    {
      "rating": "8.5",
      "title": "Harakiri"
    },
    {
      "rating": "8.5",
      "title": "The Pianist"
    },
    {
      "rating": "8.5",
      "title": "Terminator 2: Judgment Day"
    },
    {
      "rating": "8.5",
      "title": "Back to the Future"
    },
    {
      "rating": "8.5",
      "title": "The Usual Suspects"
    },
    {
      "rating": "8.5",
      "title": "Psycho"
    },
    {
      "rating": "8.5",
      "title": "The Lion King"
    },
    {
      "rating": "8.5",
      "title": "Modern Times"
    },
    {
      "rating": "8.5",
      "title": "Grave of the Fireflies"
    },
    {
      "rating": "8.5",
      "title": "American History X"
    },
    {
      "rating": "8.5",
      "title": "Whiplash"
    },
    {
      "rating": "8.5",
      "title": "Gladiator"
    },
    {
      "rating": "8.5",
      "title": "City Lights"
    },
    {
      "rating": "8.5",
      "title": "The Departed"
    },
    {
      "rating": "8.5",
      "title": "Untouchable"
    },
    {
      "rating": "8.5",
      "title": "The Prestige"
    },
    {
      "rating": "8.4",
      "title": "Casablanca"
    },
    {
      "rating": "8.4",
      "title": "Once Upon a Time in the West"
    },
    {
      "rating": "8.4",
      "title": "Rear Window"
    },
    {
      "rating": "8.4",
      "title": "Cinema Paradiso"
    },
    {
      "rating": "8.4",
      "title": "Alien"
    },
    {
      "rating": "8.4",
      "title": "Apocalypse Now"
    },
    {
      "rating": "8.4",
      "title": "Memento"
    },
    {
      "rating": "8.4",
      "title": "Raiders of the Lost Ark"
    },
    {
      "rating": "8.4",
      "title": "The Great Dictator"
    },
    {
      "rating": "8.4",
      "title": "Django Unchained"
    },
    {
      "rating": "8.4",
      "title": "The Lives of Others"
    },
    {
      "rating": "8.4",
      "title": "Paths of Glory"
    },
    {
      "rating": "8.4",
      "title": "Sunset Blvd."
    },
    {
      "rating": "8.4",
      "title": "WALL·E"
    },
    {
      "rating": "8.4",
      "title": "Avengers: Infinity War"
    },
    {
      "rating": "8.4",
      "title": "Witness for the Prosecution"
    },
    {
      "rating": "8.4",
      "title": "The Shining"
    },
    {
      "rating": "8.4",
      "title": "Spider-Man: Into the Spider-Verse"
    },
    {
      "rating": "8.4",
      "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb"
    },
    {
      "rating": "8.3",
      "title": "Princess Mononoke"
    },
    {
      "rating": "8.3",
      "title": "Oldboy"
    },
    {
      "rating": "8.3",
      "title": "Joker"
    },
    {
      "rating": "8.3",
      "title": "Your Name."
    },
    {
      "rating": "8.3",
      "title": "Coco"
    },
    {
      "rating": "8.3",
      "title": "The Dark Knight Rises"
    },
    {
      "rating": "8.3",
      "title": "Aliens"
    },
    {
      "rating": "8.3",
      "title": "Once Upon a Time in America"
    },
    {
      "rating": "8.3",
      "title": "Avengers: Endgame"
    },
    {
      "rating": "8.3",
      "title": "Capernaum"
    },
    {
      "rating": "8.3",
      "title": "Das Boot"
    },
    {
      "rating": "8.3",
      "title": "High and Low"
    },
    {
      "rating": "8.3",
      "title": "3 Idiots"
    },
    {
      "rating": "8.3",
      "title": "Toy Story"
    },
    {
      "rating": "8.3",
      "title": "Amadeus"
    },
    {
      "rating": "8.3",
      "title": "American Beauty"
    },
    {
      "rating": "8.3",
      "title": "Braveheart"
    },
    {
      "rating": "8.3",
      "title": "Inglourious Basterds"
    },
    {
      "rating": "8.3",
      "title": "Good Will Hunting"
    },
    {
      "rating": "8.3",
      "title": "Hamilton"
    },
    {
      "rating": "8.3",
      "title": "Star Wars: Return of the Jedi"
    },
    {
      "rating": "8.3",
      "title": "Come and See"
    },
    {
      "rating": "8.3",
      "title": "2001: A Space Odyssey"
    },
    {
      "rating": "8.3",
      "title": "Reservoir Dogs"
    },
    {
      "rating": "8.3",
      "title": "Like Stars on Earth"
    },
    {
      "rating": "8.3",
      "title": "Vertigo"
    },
    {
      "rating": "8.3",
      "title": "M"
    },
    {
      "rating": "8.3",
      "title": "The Hunt"
    },
    {
      "rating": "8.3",
      "title": "Citizen Kane"
    },
    {
      "rating": "8.3",
      "title": "Requiem for a Dream"
    },
    {
      "rating": "8.3",
      "title": "Singin in the Rain"
    },
    {
      "rating": "8.3",
      "title": "North by Northwest"
    },
    {
      "rating": "8.3",
      "title": "Eternal Sunshine of the Spotless Mind"
    },
    {
      "rating": "8.3",
      "title": "Ikiru"
    },
    {
      "rating": "8.3",
      "title": "Bicycle Thieves"
    },
    {
      "rating": "8.3",
      "title": "Lawrence of Arabia"
    },
    {
      "rating": "8.2",
      "title": "The Kid"
    },
    {
      "rating": "8.2",
      "title": "Full Metal Jacket"
    },
    {
      "rating": "8.2",
      "title": "Dangal"
    },
    {
      "rating": "8.2",
      "title": "Incendies"
    },
    {
      "rating": "8.2",
      "title": "The Apartment"
    },
    {
      "rating": "8.2",
      "title": "Double Indemnity"
    },
    {
      "rating": "8.2",
      "title": "Metropolis"
    },
    {
      "rating": "8.2",
      "title": "The Father"
    },
    {
      "rating": "8.2",
      "title": "Taxi Driver"
    },
    {
      "rating": "8.2",
      "title": "A Clockwork Orange"
    },
    {
      "rating": "8.2",
      "title": "A Separation"
    },
    {
      "rating": "8.2",
      "title": "The Sting"
    },
    {
      "rating": "8.2",
      "title": "Scarface"
    },
    {
      "rating": "8.2",
      "title": "Snatch"
    },
    {
      "rating": "8.2",
      "title": "1917"
    },
    {
      "rating": "8.2",
      "title": "Amélie"
    },
    {
      "rating": "8.2",
      "title": "To Kill a Mockingbird"
    },
    {
      "rating": "8.2",
      "title": "Toy Story 3"
    },
    {
      "rating": "8.2",
      "title": "Pather Panchali"
    },
    {
      "rating": "8.2",
      "title": "For a Few Dollars More"
    },
    {
      "rating": "8.2",
      "title": "Up"
    },
    {
      "rating": "8.2",
      "title": "Indiana Jones and the Last Crusade"
    },
    {
      "rating": "8.2",
      "title": "Heat"
    },
    {
      "rating": "8.2",
      "title": "L.A. Confidential"
    },
    {
      "rating": "8.2",
      "title": "Ran"
    },
    {
      "rating": "8.2",
      "title": "Yojimbo"
    },
    {
      "rating": "8.2",
      "title": "Die Hard"
    },
    {
      "rating": "8.2",
      "title": "Green Book"
    },
    {
      "rating": "8.2",
      "title": "Rashomon"
    },
    {
      "rating": "8.2",
      "title": "Downfall"
    },
    {
      "rating": "8.2",
      "title": "Monty Python and the Holy Grail"
    },
    {
      "rating": "8.2",
      "title": "All About Eve"
    },
    {
      "rating": "8.2",
      "title": "Some Like It Hot"
    },
    {
      "rating": "8.2",
      "title": "Batman Begins"
    },
    {
      "rating": "8.2",
      "title": "Unforgiven"
    },
    {
      "rating": "8.2",
      "title": "Children of Heaven"
    },
    {
      "rating": "8.2",
      "title": "Jai Bhim"
    },
    {
      "rating": "8.2",
      "title": "Howl's Moving Castle"
    },
    {
      "rating": "8.2",
      "title": "The Wolf of Wall Street"
    },
    {
      "rating": "8.2",
      "title": "Judgment at Nuremberg"
    },
    {
      "rating": "8.2",
      "title": "There Will Be Blood"
    },
    {
      "rating": "8.2",
      "title": "The Great Escape"
    },
    {
      "rating": "8.2",
      "title": "Casino"
    },
    {
      "rating": "8.2",
      "title": "The Treasure of the Sierra Madre"
    },
    {
      "rating": "8.1",
      "title": "Pan's Labyrinth"
    },
    {
      "rating": "8.1",
      "title": "A Beautiful Mind"
    },
    {
      "rating": "8.1",
      "title": "The Secret in Their Eyes"
    },
    {
      "rating": "8.1",
      "title": "Raging Bull"
    },
    {
      "rating": "8.1",
      "title": "Chinatown"
    },
    {
      "rating": "8.1",
      "title": "My Neighbour Totoro"
    },
    {
      "rating": "8.1",
      "title": "Shutter Island"
    },
    {
      "rating": "8.1",
      "title": "Lock, Stock and Two Smoking Barrels"
    },
    {
      "rating": "8.1",
      "title": "No Country for Old Men"
    },
    {
      "rating": "8.1",
      "title": "Klaus"
    },
    {
      "rating": "8.1",
      "title": "Dial M for Murder"
    },
    {
      "rating": "8.1",
      "title": "Dersu Uzala"
    },
    {
      "rating": "8.1",
      "title": "The Gold Rush"
    },
    {
      "rating": "8.1",
      "title": "The Thing"
    },
    {
      "rating": "8.1",
      "title": "Three Billboards Outside Ebbing, Missouri"
    },
    {
      "rating": "8.1",
      "title": "The Seventh Seal"
    },
    {
      "rating": "8.1",
      "title": "The Elephant Man"
    },
    {
      "rating": "8.1",
      "title": "The Sixth Sense"
    },
    {
      "rating": "8.1",
      "title": "The Truman Show"
    },
    {
      "rating": "8.1",
      "title": "Jurassic Park"
    },
    {
      "rating": "8.1",
      "title": "Wild Strawberries"
    },
    {
      "rating": "8.1",
      "title": "The Third Man"
    },
    {
      "rating": "8.1",
      "title": "Memories of Murder"
    },
    {
      "rating": "8.1",
      "title": "V for Vendetta"
    },
    {
      "rating": "8.1",
      "title": "Blade Runner"
    },
    {
      "rating": "8.1",
      "title": "Trainspotting"
    },
    {
      "rating": "8.1",
      "title": "The Bridge on the River Kwai"
    },
    {
      "rating": "8.1",
      "title": "Inside Out"
    },
    {
      "rating": "8.1",
      "title": "Fargo"
    },
    {
      "rating": "8.1",
      "title": "Finding Nemo"
    },
    {
      "rating": "8.1",
      "title": "Kill Bill: Vol. 1"
    },
    {
      "rating": "8.1",
      "title": "Warrior"
    },
    {
      "rating": "8.1",
      "title": "Gone with the Wind"
    },
    {
      "rating": "8.1",
      "title": "Tokyo Story"
    },
    {
      "rating": "8.1",
      "title": "On the Waterfront"
    },
    {
      "rating": "8.1",
      "title": "My Father and My Son"
    },
    {
      "rating": "8.1",
      "title": "Wild Tales"
    },
    {
      "rating": "8.1",
      "title": "Prisoners"
    },
    {
      "rating": "8.1",
      "title": "Stalker"
    },
    {
      "rating": "8.1",
      "title": "The Grand Budapest Hotel"
    },
    {
      "rating": "8.1",
      "title": "The Deer Hunter"
    },
    {
      "rating": "8.1",
      "title": "Sherlock Jr."
    },
    {
      "rating": "8.1",
      "title": "The General"
    },
    {
      "rating": "8.1",
      "title": "Gran Torino"
    },
    {
      "rating": "8.1",
      "title": "Persona"
    },
    {
      "rating": "8.1",
      "title": "Dune"
    },
    {
      "rating": "8.1",
      "title": "Before Sunrise"
    },
    {
      "rating": "8.1",
      "title": "Mary and Max"
    },
    {
      "rating": "8.1",
      "title": "Catch Me If You Can"
    },
    {
      "rating": "8.1",
      "title": "Z"
    },
    {
      "rating": "8.1",
      "title": "Mr. Smith Goes to Washington"
    },
    {
      "rating": "8.1",
      "title": "Barry Lyndon"
    },
    {
      "rating": "8.1",
      "title": "In the Name of the Father"
    },
    {
      "rating": "8.1",
      "title": "Gone Girl"
    },
    {
      "rating": "8.1",
      "title": "Hacksaw Ridge"
    },
    {
      "rating": "8.1",
      "title": "Room"
    },
    {
      "rating": "8.1",
      "title": "The Passion of Joan of Arc"
    },
    {
      "rating": "8.1",
      "title": "Andhadhun"
    },
    {
      "rating": "8.1",
      "title": "Le Mans '66"
    },
    {
      "rating": "8.1",
      "title": "12 Years a Slave"
    },
    {
      "rating": "8.1",
      "title": "To Be or Not to Be"
    },
    {
      "rating": "8.1",
      "title": "The Big Lebowski"
    },
    {
      "rating": "8.1",
      "title": "Dead Poets Society"
    },
    {
      "rating": "8.1",
      "title": "Harry Potter and the Deathly Hallows: Part 2"
    },
    {
      "rating": "8.1",
      "title": "Ben-Hur"
    },
    {
      "rating": "8.1",
      "title": "How to Train Your Dragon"
    },
    {
      "rating": "8.1",
      "title": "Mad Max: Fury Road"
    },
    {
      "rating": "8.1",
      "title": "Autumn Sonata"
    },
    {
      "rating": "8.1",
      "title": "Million Dollar Baby"
    },
    {
      "rating": "8.1",
      "title": "The Wages of Fear"
    },
    {
      "rating": "8.1",
      "title": "Stand by Me"
    },
    {
      "rating": "8.1",
      "title": "Network"
    },
    {
      "rating": "8.1",
      "title": "The Handmaiden"
    },
    {
      "rating": "8.1",
      "title": "Logan"
    },
    {
      "rating": "8.1",
      "title": "La Haine"
    },
    {
      "rating": "8.0",
      "title": "Cool Hand Luke"
    },
    {
      "rating": "8.0",
      "title": "Hachi: A Dog's Tale"
    },
    {
      "rating": "8.0",
      "title": "A Silent Voice"
    },
    {
      "rating": "8.0",
      "title": "The 400 Blows"
    },
    {
      "rating": "8.0",
      "title": "Gangs of Wasseypur"
    },
    {
      "rating": "8.0",
      "title": "Platoon"
    },
    {
      "rating": "8.0",
      "title": "Spotlight"
    },
    {
      "rating": "8.0",
      "title": "Monsters, Inc."
    },
    {
      "rating": "8.0",
      "title": "Rebecca"
    },
    {
      "rating": "8.0",
      "title": "Life of Brian"
    },
    {
      "rating": "8.0",
      "title": "In the Mood for Love"
    },
    {
      "rating": "8.0",
      "title": "Hotel Rwanda"
    },
    {
      "rating": "8.0",
      "title": "The Bandit"
    },
    {
      "rating": "8.0",
      "title": "Rush"
    },
    {
      "rating": "8.0",
      "title": "Rocky"
    },
    {
      "rating": "8.0",
      "title": "Amores perros"
    },
    {
      "rating": "8.0",
      "title": "Into the Wild"
    },
    {
      "rating": "8.0",
      "title": "Nausicaä of the Valley of the Wind"
    },
    {
      "rating": "8.0",
      "title": "It Happened One Night"
    },
    {
      "rating": "8.0",
      "title": "Before Sunset"
    },
    {
      "rating": "8.0",
      "title": "Fanny and Alexander"
    },
    {
      "rating": "8.0",
      "title": "The Battle of Algiers"
    },
    {
      "rating": "8.0",
      "title": "Neon Genesis Evangelion: The End of Evangelion"
    },
    {
      "rating": "8.0",
      "title": "Andrei Rublev"
    },
    {
      "rating": "8.0",
      "title": "Nights of Cabiria"
    },
    {
      "rating": "8.0",
      "title": "Demon Slayer the Movie: Mugen Train"
    },
    {
      "rating": "8.0",
      "title": "The Princess Bride"
    },
    {
      "rating": "8.0",
      "title": "Drishyam"
    }
  ],
  "errors": [],
  "resume_variable": "n",
  "success_score": "100",
  "resume_dict": {}
}


Goodreads by Keyword Scraper
********************************

Scrapes Books Information on Goodreads by Keyword

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	
	response = datakund.goodreads_keywords(keyword="rich dad poor dad")

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.goodreads_keywords("rich dad poor dad")
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"goodreads_keywords~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"keyword":"rich dad poor dad"}}'

Response Data
##############

.. code-block:: json

	{
	  "body": {
		"bio": "Life Coach & Podcast Host @youcansipwithus ⁣⁣Passionate about helping women live a life they love, without waiting on the weight💞🤸🏼‍♀️⁣",
		"followed_by": "1,102",
		"followers": "213k",
		"following": "1,102",
		"posts": "5,259",
		"profile_name": "ashliemolstad"
	  },
	  "errors": [],
	  "resume_variable": 0,
	  "success_score": "100"
	}
	

Investing.com World Indices Scraper
************************************

Investing.com offers free real time quotes, portfolio, streaming charts, financial news, live stock market data and more. Investing.com World Indices Bot help to scrape the stock details of world indices from investing.com

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	response = datakund.investing_com_world_indices()

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.investing_com_world_indices()
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"investing_com_world_indices~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true}'

Response Data
##############

.. code-block:: json

			
	
	{
      "body": [
    {
      "adv.": "15",
      "change": "-201.81",
      "change_percent": "-0.56%",
      "dec.": "15",
      "last_price": "50.00%",
      "stock_link": "/indices/us-30",
      "stock_name": "Dow Jones"
    },
    {
      "adv.": "211",
      "dec.": "291",
      "last_price": "0.59%",
      "stock_link": "/indices/us-spx-500",
      "stock_name": "S&P 500"
    },
    {
      "adv.": "26",
      "dec.": "14",
      "last_price": "35.00%",
      "stock_link": "/indices/germany-30",
      "stock_name": "DAX"
    },
    {
      "adv.": "173",
      "dec.": "65",
      "last_price": "0.83%",
      "stock_link": "/indices/s-p-tsx-composite",
      "stock_name": "S&P/TSX"
    },
    {
      "adv.": "51",
      "dec.": "160",
      "last_price": "4.09%",
      "stock_link": "/indices/japan-ni225",
      "stock_name": "Nikkei 225"
    },
    {
      "adv.": "82",
      "dec.": "105",
      "last_price": "4.59%",
      "stock_link": "/indices/aus-200",
      "stock_name": "S&P/ASX 200"
    }
  ],
  "errors": [],
  "resume_variable": "n",
  "success_score": "100"
}


Trading View Market Indices Scraper
************************************

Trading View Market Indices Scraper Scrapes Indices From Trading View Market

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	response = datakund.trading_view_market_indices()

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.trading_view_market_indices()
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"trading_view_market_indices~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true}'

Response Data
##############

.. code-block:: json

			
	{
  "body": [
    {
      "link": "https://in.tradingview.com/symbols/SPX/",
      "stock": "S&P 500"
    },
    {
      "link": "https://in.tradingview.com/symbols/DJ-DJI/",
      "price": "35911.82",
      "price_change": "−201.81",
      "price_change_percent": "−0.56%",
      "stock": "Dow 30"
    },
    {
      "link": "https://in.tradingview.com/symbols/XETR-DAX/",
      "price": "15833.570",
      "price_change": "−100.150",
      "price_change_percent": "−0.63%",
      "stock": "DAX"
    },
    {
      "link": "https://in.tradingview.com/symbols/TVC-UKX/",
      "price_change": "−48.29",
      "price_change_percent": "−0.63%",
      "stock": "UK 100"
    },
    {
      "link": "https://in.tradingview.com/symbols/TVC-NI225/",
      "price": "28257.18",
      "price_change": "−76.27",
      "price_change_percent": "−0.27%",
      "stock": "Nikkei 225"
    },
    {
      "link": "https://in.tradingview.com/symbols/TVC-HSI/",
      "price": "24112.79",
      "price_change": "−105.25",
      "price_change_percent": "−0.43%",
      "stock": "Hang Seng"
    }
  ],
  "errors": [],
  "resume_variable": "n",
  "success_score": "100"
  } 


Trip Advisor Reviews Scraper
********************************

Scrape reviews from Trip Advisor Link

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	
	response = datakund.trip_advisor_reviews(trip_advisor_link="https://www.tripadvisor.in/AttractionProductReview-g304551-d11455849-Four_Day_Private_Luxury_Golden_Triangle_Tour_to_Agra_and_Jaipur_From_New_Delhi-New.html")

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.trip_advisor_reviews("https://www.tripadvisor.in/AttractionProductReview-g304551-d11455849-Four_Day_Private_Luxury_Golden_Triangle_Tour_to_Agra_and_Jaipur_From_New_Delhi-New.html")
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"trip_advisor_reviews~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"trip_advisor_link":"https://www.tripadvisor.in/AttractionProductReview-g304551-d11455849-Four_Day_Private_Luxury_Golden_Triangle_Tour_to_Agra_and_Jaipur_From_New_Delhi-New.html"}}'

Response Data
##############

.. code-block:: json

	{
      "body": [
    {
      "review": "Excellent tour, great sites, good hotels (we stayed in Jaypee Palace in Agra and Holiday in City Center in Jaipur - 5 stars). The driver, Raj, was excellent (it is very difficult to drive in India), always on time, kept us safe. We had three guides with different styles, very professional, knowledgeable of the history and art associated to the different sites. The tour coordinator, Amit, communicated with us before, during, and after the trip, providing information and answers to all our questions. Amit has very high standards.",
      "reviewer": "Victor Daniel E",
      "time": "Written 16 December 2021",
      "title": "Fantastic tour of Delhi, Agra, Jaipur"
    },
    {
      "review": "I was slightly apprehensive as a lone female taking this trip but I shouldn’t have worried as I felt very well looked after by my driver, all the guides and staff in the hotels.  It was a fabulous trip with my it was all fabulous with my favourite part being the Amber Fort and the City Palace in Jaipur!  Mr Rawat was my driver and he was always punctual and I felt so safe as his driving skills were excellent unlike some of the other drivers on the road.  All the guides at each location really brought the places to life and were all very knowledgeable, spoke excellent English and took great photos too!!  My trip in March was just before lockdown and the guides were all instructed to wear face masks which they did.  The hotels were all really good in particular the Jaypee Palace in Agra.  There were options to go shopping which I chose not to do and there was no hard sell on this which I really did appreciate.  I would definitely recommend this trip to anyone-it exceeded my expectations.",
      "reviewer": "Wendy of Wokingham",
      "title": "Fabulous trip"
    },
    {
      "review": "TLDR:Highlights: Qutub Minar, Sikh temple, Agra Fort, Taj Mahal, Amber Fort, Panna Meena step well, countryside drive, safety, great guides and drivers.Lowlights: closed Lotus temple bc of poor timing, lunch on the roadFrom start to finish this tour was well organized with a fantastic driver (ask if Mr. Ram Singh is available) and knowledgeable, clear guides throughout. We wanted a few changes made here and there the driver and the guides were happy to do so. For example, the Lotus Temple is actually closed in Delhi at certain times (this was the only poor planning), and it was closed when we arrived. We asked to do something else instead and went to a Sikh temple which was amazing! I do wish Red Fort in Delhi was on the agenda, but friends of ours had said to avoid Old Delhi during the time we were there (riots).We felt safe and well taken care of during our journey with a comfortable, nice air conditioned car and plenty of water. The driver and guides really cared about our experience and helped us out if there was anything we needed. The tour guide in Agra was like a professional photographer and historian all in one, amazing! The guides were good about warning us about scams and other uncomfortable situations we, as tourists might find ourselves in.You should consider booking your own hotels as it can be more affordable. On our journey, there were a few times we needed to stop for lunch. The restaurants we were taken to in Delhi (can't remember the name) and Jaipur (The Grand Peacock) were great but the one on the road to Jaipur was pretty overpriced and not very good. Have an idea of your journey route and tell the driver where to take you to eat via Google Maps, Zomato, etc- they are on your time and can take you anywhere along the way! Lastly, Amit, our tour manager with the company, was super responsive both before the trip and during the trip. For the great price and value and an overall fantastic time,I would recommend this tour to anyone wanting a taste of all three cities in a quick time.",
      "reviewer": "Amber F",
      "time": "Written 16 April 2020",
      "title": "Excellent tour, highly recommend!"
    },
    {
      "review": "The fine travelling facility and comfortable stay made the holiday superb with so much on the itinerary to enjoy and understand with authentic history. The monuments are beyond compare specially the Swami Bag Temple (must visit) in Agra for its three dimensional as well engraved art.",
      "reviewer": "MUKUL GUPTA, ADVOCATE",
      "time": "Written 14 April 2020",
      "title": "Fascinating Taj, Mesmirizing Jaipur and Busting Delhi"
    },
    {
      "review": "I did a lot of research before our trip and then highly customized our trip according to what appealed to us the most. We love culture and history so our trip focused mostly on that. We spent 7 nights/8 days in India, starting off with 2 nights in Delhi, 1 night in Agra, 2 nights in Jaipur and then ending the tour with another 2 nights back in Delhi. Day 1: We did our own thing and started off the morning with a quick tuk tuk ride to Lodhi Gardens (loads of photo ops here) which was very close to the hotel we were staying at. The Claridges Hotel was a fabulous base to stay in, lovely green part of the city. A lot of embassies in the area so very upmarket, and safe! We then visited the India Gate (ladies please dress VERY modestly here, no tight gym pants unless bum is covered...), took a tuk tuk to Connaught Place which was unfortunately closed and then took an uber all the way out to the fabulous Hindu Akshardham Temple. Loved the temple! So much to look at. No backpack type bags allowed in the temple, and no photos either. There are lockers for your bags. Day 2: We were collected promptly at 8am and spent a good few hours exploring Delhi. Just driving around the city is an experience itself! Watching every day people going about their day, animals and people all over the place, no obvious traffic rules or traffic lights... We visited the largest Sikh temple in Delhi - Gurudwara Bangla Sahib, a beautiful Muslim temple - Fatehpuri Masjid, explored Chandni Chowk on a rickshaw, spent some time at the stepwells (small but absolutely beautiful) and managed to see Humayans Tomb which was just stunning! Everything is quite close to each other in Delhi so it’s possible to fit a lot in. It just depends on your tolerance levels. Day 3: An early morning start to see the Taj Mahal. Arrived just after 6am, already crowds waiting. C/card machine wasn’t working so make sure you have cash in case. Separate lines for men and women to buy tickets. Also no backpacks. Early morning shots with the hazy background and sun filtering through makes for stunning photos! We spent almost 3hrs here, couldn’t tear ourselves away. Then it was on to the Agra Fort and MORE amazing things to see and photograph. If you love symmetry, lines, pillars, detailed motifs, colour then India is for you! We drove through to Jaipur at about lunch time stopping at the Chand Biori stepwells en route. Before arriving at our hotel we went to the Monkey temple. It’s very dirty compared to the other temples we visited but still very interesting. We arrived quite close to closing time and I would have preferred to have got there earlier or with a guide as it was pretty empty and we felt slightly unsafe. Day 4: Got to Amber Fort just after 8:30, and it was already hectic! We didn’t do the elephant ride but managed to get some great shots of them. This fort is just amazing and we ended up spending almost 3hrs here too.",
      "reviewer": "SouthAfricaFiona",
      "time": "Written 13 March 2020",
      "title": "Fantastic Mom & teen son Trip"
    },
    {
      "reviewer": "Dpsenior2605",
      "time": "Written 13 March 2020",
      "title": "Highly recommended"
    },
    {
      "review": "5 of us, they provided at least an 8 seater mini bus, which was great. Very big. Driver was very friendly stopped at good toilets and good restaurants along the way. The 3 guides were very friendly, good English. 5 star hotels were really nice. Would highly recommend.",
      "reviewer": "John H",
      "time": "Written 13 March 2020",
      "title": "Great tour"
    },
    {
      "review": "We had excellent 4 day tour of Agra and Jaipur from New Delhi.Guides were excellent. Hotel Jaypee Palace in Agra was superb and our travel in luxury car with driver Shivraj Singh was best.Overall we really enjoyed the tour.",
      "reviewer": "Vinod P",
      "time": "Written 13 March 2020",
      "title": "Dr Vinoda Porobo"
    },
    {
      "review": "We had an amazing trip, everything from start to finish was perfect.  The only thing we didn't like, it was the fact that they brought us into some shops to buy stuff that we didn't need nor we didn't want to buy. However the overall experience was great, Our driver Rajesh was great and always available. He always had refreshments available for us on those hot Indian days.  The hotels were fantastic, we got upgraded in Jaipur to the Jaipur Palace.  that hotel itself made our trip special. From the moment we checked in to the checkout process.Overall I'd recommend this tour if you want to visit India for a brief tour.",
      "reviewer": "herby g",
      "time": "Written 12 March 2020",
      "title": "Amazing Tour!!!"
    },
    {
      "reviewer": "jennifermusella",
      "title": "Golden triangle"
    }
  ],
  "errors": [],
  "resume_variable": "n",
  "success_score": "100"
}


Twitter Data Scrape
********************

Twitter Data Scrape with Profile Link without login to twitter.Scrapes Twitter Data Scrape with Profile Link like followers, total tweets, following , joined date etc.

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	
	response = datakund.twitter_analyzer(profile_link="https://twitter.com/MAS")

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.twitter_analyzer("https://twitter.com/MAS")
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"twitter_analyzer~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"profile_link":"https://twitter.com/MAS"}}'

Response Data
##############

.. code-block:: json

	{
  "body": {
    "description": "Proudly flying the nation's flag and connecting places and hearts through our inimitable Malaysian Hospitality.",
    "followers": "1.7M",
    "following": "Following",
    "joined": "Joined January 2009",
    "profile": "Malaysia Airlines",
    "tweets": "70.3K Tweets"
  },
  "errors": [],
  "resume_variable": 0,
  "success_score": "100"
	}


Wikipedia Current Events
*************************

Scrapes Wikipedia Current Events into title , description and link

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	response = datakund.wikipedia_current_events()

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.wikipedia_current_events()
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"wikipedia_current_events~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true}'

Response Data
##############

.. code-block:: json

			
  {
   "body": [
    {
      "description": "The Hunga Tonga volcano erupts (satellite animation shown), causing damage in Tonga and tsunamis across the Pacific Ocean.",
      "link": "/wiki/2022_Hunga_Tonga_eruption_and_tsunami",
      "title": "Hunga Tonga volcano erupts"
    },
    {
      "description": "An apartment fire in the Bronx, New York City, kills 17 people.",
      "link": "/wiki/2022_Bronx_apartment_fire",
      "title": "An apartment fire"
    },
    {
      "description": "A rockfall at Furnas Lake in Capitólio, Brazil, kills 10 people.",
      "link": "/wiki/Capit%C3%B3lio_rockfall",
      "title": "A rockfall"
    },
    {
      "description": "Sidney Poitier, the first black actor to win the Academy Award for Best Actor, dies at the age of 94.",
      "link": "/wiki/Sidney_Poitier",
      "title": "Sidney Poitier"
    }
  ],
  "errors": [],
  "resume_variable": "n",
  "success_score": "100",
  "resume_dict": {}
}


Wikipedia GDP per Capita Scraper
********************************

Extract Wikipedia GDP per Capita country wise using UN data and IMF Data  from Wikipedia

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	response = datakund.wikipedia_gdp_per_capita()

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.wikipedia_gdp_per_capita()
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"wikipedia_gdp_per_capita~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true}'

Response Data
##############

.. code-block:: json

			
	{
  "body": [
    {
      "Imf_year": "190,532",
      "country": "Monaco",
      "imf_estimate": "N/A",
      "region": "Europe",
      "un_estimate": "2019",
      "un_year": "2019"
    },
    {
      "Imf_year": "179,258",
      "country": "Liechtenstein",
      "imf_estimate": "N/A",
      "region": "Europe",
      "un_estimate": "2019",
      "un_year": "2019"
    },
    {
      "Imf_year": "2021",
      "country": "Luxembourg",
      "imf_estimate": "131,301.599",
      "region": "Europe",
      "un_estimate": "115,481",
      "un_year": "115,481"
    },
    {
      "Imf_year": "117,768",
      "country": "Bermuda",
      "imf_estimate": "N/A",
      "un_estimate": "2019",
      "un_year": "2019"
    },
    {
      "Imf_year": "2021",
      "country": "Switzerland",
      "imf_estimate": "93,515.484",
      "region": "Europe",
      "un_estimate": "85,135",
      "un_year": "85,135"
    },
    {
      "Imf_year": "2021",
      "country": "Ireland",
      "imf_estimate": "102,394.017",
      "region": "Europe",
      "un_estimate": "81,637",
      "un_year": "81,637"
    },
    {
      "Imf_year": "92,692",
      "country": "Cayman Islands",
      "imf_estimate": "N/A",
      "un_estimate": "2019",
      "un_year": "2019"
    },
    {
      "Imf_year": "2021",
      "country": "Norway",
      "imf_estimate": "82,244.232",
      "region": "Europe",
      "un_estimate": "74,986",
      "un_year": "74,986"
    },
    {
      "Imf_year": "2021",
      "country": "United States",
      "imf_estimate": "69,375.375",
      "un_estimate": "65,134",
      "un_year": "65,134"
    },
    {
      "Imf_year": "2021",
      "country": "Denmark",
      "imf_estimate": "67,919.585",
      "region": "Europe",
      "un_estimate": "60,657",
      "un_year": "60,657"
    },
    {
      "Imf_year": "2021",
      "country": "Iceland",
      "imf_estimate": "68,843.646",
      "region": "Europe",
      "un_estimate": "71,345",
      "un_year": "71,345"
    },
    {
      "Imf_year": "2021",
      "country": "Singapore",
      "imf_estimate": "66,263.418",
      "un_estimate": "64,103",
      "un_year": "64,103"
    },
    {
      "Imf_year": "2021",
      "country": "Australia",
      "imf_estimate": "62,618.587",
      "un_estimate": "54,763",
      "un_year": "54,763"
    },
    {
      "Imf_year": "2021",
      "country": "Qatar",
      "imf_estimate": "61,790.572",
      "un_estimate": "64,782",
      "un_year": "64,782"
    },
    {
      "Imf_year": "2021",
      "country": "Sweden",
      "imf_estimate": "58,639.194",
      "region": "Europe",
      "un_estimate": "52,896",
      "un_year": "52,896"
    },
    {
      "Imf_year": "2021",
      "country": "Macau",
      "imf_estimate": "42,106.564",
      "un_estimate": "84,097",
      "un_year": "84,097"
    },
    {
      "Imf_year": "2021",
      "country": "Netherlands",
      "imf_estimate": "57,714.876",
      "region": "Europe",
      "un_estimate": "53,053",
      "un_year": "53,053"
    },
    {
      "Imf_year": "2021",
      "country": "Finland",
      "imf_estimate": "53,522.565",
      "region": "Europe",
      "un_estimate": "48,678",
      "un_year": "48,678"
    },
    {
      "Imf_year": "2021",
      "country": "Austria",
      "imf_estimate": "53,793.367",
      "region": "Europe",
      "un_estimate": "49,701",
      "un_year": "49,701"
    },
    {
      "Imf_year": "53,353",
      "country": "Greenland",
      "imf_estimate": "N/A",
      "un_estimate": "2019",
      "un_year": "2019"
    },
    {
      "Imf_year": "2021",
      "country": "Germany",
      "imf_estimate": "50,787.859",
      "region": "Europe",
      "un_estimate": "46,232",
      "un_year": "46,232"
    },
    {
      "Imf_year": "2021",
      "country": "Belgium",
      "imf_estimate": "50,412.713",
      "region": "Europe",
      "un_estimate": "46,198",
      "un_year": "46,198"
    },
    {
      "Imf_year": "2021",
      "country": "San Marino",
      "imf_estimate": "50,934.189",
      "region": "Europe",
      "un_estimate": "47,313",
      "un_year": "47,313"
    },
    {
      "Imf_year": "2021",
      "country": "Canada",
      "imf_estimate": "52,791.228",
      "un_estimate": "46,550",
      "un_year": "46,550"
    },
    {
      "Imf_year": "2021",
      "country": "Hong Kong",
      "imf_estimate": "49,485.084",
      "un_estimate": "49,180",
      "un_year": "49,180"
    },
    {
      "Imf_year": "48,511",
      "country": "British Virgin Islands",
      "imf_estimate": "N/A",
      "un_estimate": "2019",
      "un_year": "2019"
    },
    {
      "Imf_year": "2021",
      "country": "Israel",
      "imf_estimate": "49,840.250",
      "un_estimate": "46,376",
      "un_year": "46,376"
    },
    {
      "Imf_year": "2021",
      "country": "New Zealand",
      "imf_estimate": "48,348.994",
      "un_estimate": "43,264",
      "un_year": "43,264"
    },
    {
      "Imf_year": "2021",
      "country": "United Kingdom",
      "imf_estimate": "46,200.258",
      "region": "Europe",
      "un_estimate": "41,855",
      "un_year": "41,855"
    },
    {
      "Imf_year": "2021",
      "country": "France",
      "imf_estimate": "45,028.265",
      "region": "Europe",
      "un_estimate": "40,319",
      "un_year": "40,319"
    },
    {
      "Imf_year": "2021",
      "country": "Japan",
      "imf_estimate": "40,704.304",
      "un_estimate": "40,063",
      "un_year": "40,063"
    },
    {
      "Imf_year": "2021",
      "country": "Andorra",
      "imf_estimate": "40,417.265",
      "region": "Europe",
      "un_estimate": "40,887",
      "un_year": "40,887"
    },
    {
      "country": "Guam",
      "imf_estimate": "N/A",
      "un_estimate": "37,724",
      "un_year": "37,724"
    },
    {
      "Imf_year": "2021",
      "country": "United Arab Emirates",
      "imf_estimate": "43,537.689",
      "un_estimate": "43,103",
      "un_year": "43,103"
    },
    {
      "Imf_year": "2021",
      "country": "Italy",
      "imf_estimate": "35,584.882",
      "region": "Europe",
      "un_estimate": "33,090",
      "un_year": "33,090"
    },
    {
      "Imf_year": "34,942",
      "country": "New Caledonia",
      "imf_estimate": "N/A",
      "un_estimate": "2019",
      "un_year": "2019"
    },
    {
      "Imf_year": "2021",
      "country": "South Korea",
      "imf_estimate": "35,195.522",
      "un_estimate": "32,143",
      "un_year": "32,143"
    },
    {
      "Imf_year": "2021",
      "country": "Brunei",
      "imf_estimate": "33,979.373",
      "un_estimate": "31,086",
      "un_year": "31,086"
    },
    {
      "Imf_year": "2021",
      "country": "Puerto Rico",
      "imf_estimate": "34,143.272",
      "un_estimate": "35,791",
      "un_year": "35,791"
    },
    {
      "Imf_year": "2021",
      "country": "Taiwan",
      "imf_estimate": "33,401.709",
      "un_estimate": "28,371",
      "un_year": "28,371"
    },
    {
      "Imf_year": "2021",
      "country": "Malta",
      "imf_estimate": "31,996.534",
      "region": "Europe",
      "un_estimate": "33,752",
      "un_year": "33,752"
    },
    {
      "Imf_year": "31,353",
      "country": "Turks and Caicos Islands",
      "imf_estimate": "N/A",
      "un_estimate": "2019",
      "un_year": "2019"
    },
    {
      "Imf_year": "2021",
      "country": "Spain",
      "imf_estimate": "30,536.858",
      "region": "Europe",
      "un_estimate": "29,816",
      "un_year": "29,816"
    },
    {
      "Imf_year": "2021",
      "country": "Bahamas",
      "imf_estimate": "27,437.197",
      "un_estimate": "34,864",
      "un_year": "34,864"
    },
    {
      "Imf_year": "2021",
      "country": "Cyprus",
      "imf_estimate": "29,486.275",
      "un_estimate": "28,285",
      "un_year": "28,285"
    },
    {
      "country": "Sint Maarten",
      "imf_estimate": "N/A",
      "un_estimate": "29,160",
      "un_year": "29,160"
    },
    {
      "Imf_year": "2021",
      "country": "Slovenia",
      "imf_estimate": "28,939.271",
      "region": "Europe",
      "un_estimate": "26,062",
      "un_year": "26,062"
    },
    {
      "Imf_year": "2021",
      "country": "Estonia",
      "imf_estimate": "27,100.736",
      "region": "Europe",
      "un_estimate": "23,740",
      "un_year": "23,740"
    },
    {
      "Imf_year": "2021",
      "country": "Czech Republic",
      "imf_estimate": "25,806.384",
      "region": "Europe",
      "un_estimate": "23,452",
      "un_year": "23,452"
    },
    {
      "Imf_year": "25,529",
      "country": "Anguilla",
      "imf_estimate": "N/A",
      "un_estimate": "2019",
      "un_year": "2019"
    },
    {
      "Imf_year": "2021",
      "country": "Kuwait",
      "imf_estimate": "27,927.163",
      "un_estimate": "31,999",
      "un_year": "31,999"
    },
    {
      "Imf_year": "2021",
      "country": "Portugal",
      "imf_estimate": "24,457.144",
      "region": "Europe",
      "un_estimate": "23,350",
      "un_year": "23,350"
    },
    {
      "Imf_year": "2021",
      "country": "Bahrain",
      "imf_estimate": "26,293.947",
      "un_estimate": "23,504",
      "un_year": "23,504"
    },
    {
      "Imf_year": "2021",
      "country": "Aruba",
      "imf_estimate": "25,700.865",
      "un_estimate": "30,975",
      "un_year": "30,975"
    },
    {
      "Imf_year": "2021",
      "country": "Saudi Arabia",
      "imf_estimate": "23,762.420",
      "un_estimate": "23,140",
      "un_year": "23,140"
    },
    {
      "Imf_year": "2021",
      "country": "Lithuania",
      "imf_estimate": "22,411.646",
      "region": "Europe",
      "un_estimate": "19,795",
      "un_year": "19,795"
    },
    {
      "Imf_year": "21,603",
      "country": "Cook Islands",
      "imf_estimate": "N/A",
      "un_estimate": "2019",
      "un_year": "2019"
    },
    {
      "Imf_year": "21,567",
      "country": "French Polynesia",
      "imf_estimate": "N/A",
      "un_estimate": "2019",
      "un_year": "2019"
    },
    {
      "Imf_year": "2021",
      "country": "Slovakia",
      "imf_estimate": "21,383.286",
      "region": "Europe",
      "un_estimate": "19,256",
      "un_year": "19,256"
    },
    {
      "country": "Northern Mariana Islands",
      "imf_estimate": "N/A",
      "un_estimate": "20,660",
      "un_year": "20,660"
    },
    {
      "Imf_year": "2021",
      "country": "Greece",
      "imf_estimate": "19,827.162",
      "region": "Europe",
      "un_estimate": "19,604",
      "un_year": "19,604"
    },
    {
      "Imf_year": "2021",
      "country": "Latvia",
      "imf_estimate": "19,538.902",
      "region": "Europe",
      "un_estimate": "17,885",
      "un_year": "17,885"
    },
    {
      "Imf_year": "18,980",
      "country": "Curaçao",
      "imf_estimate": "N/A",
      "un_estimate": "2019",
      "un_year": "2019"
    },
    {
      "Imf_year": "2021",
      "country": "Hungary",
      "imf_estimate": "18,527.592",
      "region": "Europe",
      "un_estimate": "16,879",
      "un_year": "16,879"
    },
    {
      "Imf_year": "2021",
      "country": "Poland",
      "imf_estimate": "17,318.497",
      "region": "Europe",
      "un_estimate": "15,727",
      "un_year": "15,727"
    },
    {
      "Imf_year": "2021",
      "country": "Croatia",
      "imf_estimate": "15,807.696",
      "region": "Europe",
      "un_estimate": "14,627",
      "un_year": "14,627"
    },
    {
      "Imf_year": "2021",
      "country": "Oman",
      "imf_estimate": "17,632.651",
      "un_estimate": "15,343",
      "un_year": "15,343"
    },
    {
      "Imf_year": "2021",
      "country": "Barbados",
      "imf_estimate": "16,105.128",
      "un_estimate": "18,149",
      "un_year": "18,149"
    },
    {
      "Imf_year": "2021",
      "country": "Trinidad and Tobago",
      "imf_estimate": "15,352.721",
      "un_estimate": "16,637",
      "un_year": "16,637"
    },
    {
      "Imf_year": "2021",
      "country": "Uruguay",
      "imf_estimate": "16,965.081",
      "un_estimate": "16,190",
      "un_year": "16,190"
    },
    {
      "Imf_year": "2021",
      "country": "Chile",
      "imf_estimate": "16,799.367",
      "un_estimate": "14,896",
      "un_year": "14,896"
    },
    {
      "Imf_year": "2021",
      "country": "Romania",
      "imf_estimate": "14,863.887",
      "region": "Europe",
      "un_estimate": "12,914",
      "un_year": "12,914"
    },
    {
      "Imf_year": "2021",
      "country": "Saint Kitts and Nevis",
      "imf_estimate": "16,917.159",
      "un_estimate": "19,896",
      "un_year": "19,896"
    },
    {
      "Imf_year": "2021",
      "country": "Antigua and Barbuda",
      "imf_estimate": "14,117.844",
      "un_estimate": "17,113",
      "un_year": "17,113"
    },
    {
      "Imf_year": "2021",
      "country": "Panama",
      "imf_estimate": "13,861.061",
      "un_estimate": "15,728",
      "un_year": "15,728"
    },
    {
      "Imf_year": "13,487",
      "country": "Montserrat",
      "imf_estimate": "N/A",
      "un_estimate": "2019",
      "un_year": "2019"
    },
    {
      "Imf_year": "2021",
      "country": "Palau",
      "imf_estimate": "11,835.178",
      "un_estimate": "15,572",
      "un_year": "15,572"
    },
    {
      "Imf_year": "2021",
      "country": "China",
      "imf_estimate": "11,891.202",
      "un_estimate": "10,004",
      "un_year": "10,004"
    },
    {
      "Imf_year": "2021",
      "country": "Costa Rica",
      "imf_estimate": "11,860.222",
      "un_estimate": "12,238",
      "un_year": "12,238"
    },
    {
      "Imf_year": "2021",
      "country": "Maldives",
      "imf_estimate": "11,899.087",
      "un_estimate": "10,626",
      "un_year": "10,626"
    },
    {
      "Imf_year": "2021",
      "country": "Russia",
      "imf_estimate": "11,273.242",
      "region": "Europe",
      "un_estimate": "11,606",
      "un_year": "11,606"
    },
    {
      "Imf_year": "2021",
      "country": "Malaysia",
      "imf_estimate": "11,124.670",
      "un_estimate": "11,414",
      "un_year": "11,414"
    },
    {
      "country": "American Samoa",
      "imf_estimate": "N/A",
      "un_estimate": "11,535",
      "un_year": "11,535"
    },
    {
      "Imf_year": "2021",
      "country": "Bulgaria",
      "imf_estimate": "11,331.872",
      "region": "Europe",
      "un_estimate": "9,703",
      "un_year": "9,703"
    },
    {
      "Imf_year": "2021",
      "country": "Nauru",
      "imf_estimate": "10,138.196",
      "un_estimate": "12,351",
      "un_year": "12,351"
    },
    {
      "Imf_year": "2021",
      "country": "Kazakhstan",
      "imf_estimate": "10,144.682",
      "un_estimate": "9,793",
      "un_year": "9,793"
    },
    {
      "Imf_year": "2021",
      "country": "Saint Lucia",
      "imf_estimate": "9,419.272",
      "un_estimate": "11,611",
      "un_year": "11,611"
    },
    {
      "Imf_year": "2021",
      "country": "Seychelles",
      "imf_estimate": "13,140.368",
      "un_estimate": "17,382",
      "un_year": "17,382"
    },
    {
      "Imf_year": "2021",
      "country": "Mauritius",
      "imf_estimate": "8,681.608",
      "un_estimate": "11,169",
      "un_year": "11,169"
    },
    {
      "Imf_year": "2021",
      "country": "Turkey",
      "imf_estimate": "9,406.575",
      "un_estimate": "9,127",
      "un_year": "9,127"
    },
    {
      "Imf_year": "9,296",
      "country": "Cuba",
      "imf_estimate": "N/A",
      "un_estimate": "2019",
      "un_year": "2019"
    },
    {
      "Imf_year": "2021",
      "country": "Mexico",
      "imf_estimate": "9,967.388",
      "un_estimate": "9,849",
      "un_year": "9,849"
    },
    {
      "Imf_year": "2021",
      "country": "Guyana",
      "imf_estimate": "9,369.011",
      "un_estimate": "6,610",
      "un_year": "6,610"
    },
    {
      "Imf_year": "2021",
      "country": "Grenada",
      "imf_estimate": "9,575.343",
      "un_estimate": "10,818",
      "un_year": "10,818"
    },
    {
      "Imf_year": "2021",
      "country": "Argentina",
      "imf_estimate": "9,929.154",
      "un_estimate": "10,041",
      "un_year": "10,041"
    },
    {
      "Imf_year": "2021",
      "country": "Montenegro",
      "imf_estimate": "8,837.578",
      "region": "Europe",
      "un_estimate": "8,825",
      "un_year": "8,825"
    },
    {
      "Imf_year": "2021",
      "country": "Turkmenistan",
      "imf_estimate": "8,843.868",
      "un_estimate": "8,124",
      "un_year": "8,124"
    },
    {
      "Imf_year": "2021",
      "country": "Serbia",
      "imf_estimate": "8,793.836",
      "region": "Europe",
      "un_estimate": "7,359",
      "un_year": "7,359"
    },
    {
      "Imf_year": "2021",
      "country": "Gabon",
      "imf_estimate": "8,569.216",
      "un_estimate": "7,773",
      "un_year": "7,773"
    },
    {
      "Imf_year": "2021",
      "country": "Iran",
      "imf_estimate": "12,725.042",
      "un_estimate": "7,282",
      "un_year": "7,282"
    },
    {
      "Imf_year": "2021",
      "country": "Equatorial Guinea",
      "imf_estimate": "8,625.763",
      "un_estimate": "8,130",
      "un_year": "8,130"
    },
    {
      "Imf_year": "2021",
      "country": "Dominican Republic",
      "imf_estimate": "8,491.619",
      "un_estimate": "8,282",
      "un_year": "8,282"
    },
    {
      "Imf_year": "2021",
      "country": "Botswana",
      "imf_estimate": "7,349.884",
      "un_estimate": "7,961",
      "un_year": "7,961"
    },
    {
      "Imf_year": "2021",
      "country": "Thailand",
      "imf_estimate": "7,808.663",
      "un_estimate": "7,785",
      "un_year": "7,785"
    },
    {
      "Imf_year": "2021",
      "country": "Saint Vincent and the Grenadines",
      "imf_estimate": "6,952.242",
      "un_estimate": "7,464",
      "un_year": "7,464"
    },
    {
      "Imf_year": "2021",
      "country": "Brazil",
      "imf_estimate": "7,741.153",
      "un_estimate": "8,755",
      "un_year": "8,755"
    },
    {
      "Imf_year": "2021",
      "country": "Dominica",
      "imf_estimate": "7,777.016",
      "un_estimate": "8,111",
      "un_year": "8,111"
    },
    {
      "Imf_year": "2021",
      "country": "Bosnia and Herzegovina",
      "imf_estimate": "6,647.830",
      "region": "Europe",
      "un_estimate": "6,109",
      "un_year": "6,109"
    },
    {
      "Imf_year": "2021",
      "country": "Peru",
      "imf_estimate": "6,676.517",
      "un_estimate": "6,978",
      "un_year": "6,978"
    },
    {
      "Imf_year": "2021",
      "country": "North Macedonia",
      "imf_estimate": "6,711.734",
      "region": "Europe",
      "un_estimate": "6,093",
      "un_year": "6,093"
    },
    {
      "Imf_year": "2021",
      "country": "Belarus",
      "imf_estimate": "7,032.477",
      "region": "Europe",
      "un_estimate": "6,674",
      "un_year": "6,674"
    },
    {
      "Imf_year": "2021",
      "country": "Albania",
      "imf_estimate": "5,837.180",
      "region": "Europe",
      "un_estimate": "5,303",
      "un_year": "5,303"
    },
    {
      "Imf_year": "2021",
      "country": "Colombia",
      "imf_estimate": "5,892.140",
      "un_estimate": "6,432",
      "un_year": "6,432"
    },
    {
      "Imf_year": "2021",
      "country": "Ecuador",
      "imf_estimate": "5,884.147",
      "un_estimate": "6,184",
      "un_year": "6,184"
    },
    {
      "Imf_year": "2021",
      "country": "South Africa",
      "imf_estimate": "6,861.166",
      "un_estimate": "6,001",
      "un_year": "6,001"
    },
    {
      "Imf_year": "2021",
      "country": "Jamaica",
      "imf_estimate": "5,421.642",
      "un_estimate": "5,369",
      "un_year": "5,369"
    },
    {
      "Imf_year": "2021",
      "country": "Paraguay",
      "imf_estimate": "5,028.217",
      "un_estimate": "5,406",
      "un_year": "5,406"
    },
    {
      "Imf_year": "2021",
      "country": "Tuvalu",
      "imf_estimate": "6,004.100",
      "un_estimate": "4,036",
      "un_year": "4,036"
    },
    {
      "Imf_year": "2021",
      "country": "Tonga",
      "imf_estimate": "5,009.784",
      "un_estimate": "4,865",
      "un_year": "4,865"
    },
    {
      "Imf_year": "2021",
      "country": "Fiji",
      "imf_estimate": "5,127.440",
      "un_estimate": "6,185",
      "un_year": "6,185"
    },
    {
      "Imf_year": "2021",
      "country": "Azerbaijan",
      "imf_estimate": "5,167.377",
      "un_estimate": "4,782",
      "un_year": "4,782"
    },
    {
      "Imf_year": "2021",
      "country": "Kosovo",
      "imf_estimate": "4,986.263",
      "region": "Europe",
      "un_estimate": "4,473",
      "un_year": "4,473"
    },
    {
      "Imf_year": "2021",
      "country": "Moldova",
      "imf_estimate": "4,791.625",
      "region": "Europe",
      "un_estimate": "2,957",
      "un_year": "2,957"
    },
    {
      "Imf_year": "2021",
      "country": "Iraq",
      "imf_estimate": "4,892.964",
      "un_estimate": "5,730",
      "un_year": "5,730"
    },
    {
      "Imf_year": "2021",
      "country": "Guatemala",
      "imf_estimate": "4,542.253",
      "un_estimate": "4,363",
      "un_year": "4,363"
    },
    {
      "Imf_year": "2021",
      "country": "Namibia",
      "imf_estimate": "4,693.455",
      "un_estimate": "4,957",
      "un_year": "4,957"
    },
    {
      "Imf_year": "2021",
      "country": "Georgia",
      "imf_estimate": "4,807.950",
      "un_estimate": "4,439",
      "un_year": "4,439"
    },
    {
      "Imf_year": "2021",
      "country": "Jordan",
      "imf_estimate": "4,393.642",
      "un_estimate": "4,405",
      "un_year": "4,405"
    },
    {
      "Imf_year": "2021",
      "country": "Indonesia",
      "imf_estimate": "4,224.982",
      "un_estimate": "4,136",
      "un_year": "4,136"
    },
    {
      "Imf_year": "2021",
      "country": "Marshall Islands",
      "imf_estimate": "4,338.173",
      "un_estimate": "4,038",
      "un_year": "4,038"
    },
    {
      "Imf_year": "2021",
      "country": "Mongolia",
      "imf_estimate": "4,185.536",
      "un_estimate": "4,295",
      "un_year": "4,295"
    },
    {
      "Imf_year": "2021",
      "country": "Armenia",
      "imf_estimate": "4,594.912",
      "un_estimate": "4,623",
      "un_year": "4,623"
    },
    {
      "Imf_year": "2021",
      "country": "El Salvador",
      "imf_estimate": "4,244.299",
      "un_estimate": "4,187",
      "un_year": "4,187"
    },
    {
      "Imf_year": "2021",
      "country": "Suriname",
      "imf_estimate": "4,620.395",
      "un_estimate": "6,360",
      "un_year": "6,360"
    },
    {
      "Imf_year": "2021",
      "country": "Ukraine",
      "imf_estimate": "4,384.237",
      "region": "Europe",
      "un_estimate": "3,496",
      "un_year": "3,496"
    },
    {
      "Imf_year": "2021",
      "country": "Belize",
      "imf_estimate": "4,457.886",
      "un_estimate": "4,884",
      "un_year": "4,884"
    },
    {
      "Imf_year": "2021",
      "country": "Egypt",
      "imf_estimate": "3,851.746",
      "un_estimate": "3,161",
      "un_year": "3,161"
    },
    {
      "Imf_year": "2021",
      "country": "Sri Lanka",
      "imf_estimate": "3,665.765",
      "un_estimate": "3,940",
      "un_year": "3,940"
    },
    {
      "Imf_year": "2021",
      "country": "Micronesia",
      "imf_estimate": "3,855.223",
      "un_estimate": "3,640",
      "un_year": "3,640"
    },
    {
      "Imf_year": "2021",
      "country": "Vietnam",
      "imf_estimate": "3,742.858",
      "un_estimate": "2,715",
      "un_year": "2,715"
    },
    {
      "Imf_year": "2021",
      "country": "Eswatini",
      "imf_estimate": "3,965.426",
      "un_estimate": "4,002",
      "un_year": "4,002"
    },
    {
      "Imf_year": "2021",
      "country": "Tunisia",
      "imf_estimate": "3,555.587",
      "un_estimate": "3,318",
      "un_year": "3,318"
    },
    {
      "Imf_year": "2021",
      "country": "Samoa",
      "imf_estimate": "3,906.413",
      "un_estimate": "4,285",
      "un_year": "4,285"
    },
    {
      "Imf_year": "2021",
      "country": "Philippines",
      "imf_estimate": "3,492.072",
      "un_estimate": "3,324",
      "un_year": "3,324"
    },
    {
      "Imf_year": "2021",
      "country": "Bolivia",
      "imf_estimate": "3,266.690",
      "un_estimate": "3,552",
      "un_year": "3,552"
    },
    {
      "Imf_year": "2021",
      "country": "Libya",
      "imf_estimate": "4,068.611",
      "un_estimate": "4,810",
      "un_year": "4,810"
    },
    {
      "Imf_year": "2021",
      "country": "Cape Verde",
      "imf_estimate": "3,346.553",
      "un_estimate": "3,604",
      "un_year": "3,604"
    },
    {
      "Imf_year": "2021",
      "country": "Morocco",
      "imf_estimate": "3,470.795",
      "un_estimate": "3,282",
      "un_year": "3,282"
    },
    {
      "Imf_year": "2021",
      "country": "Algeria",
      "imf_estimate": "3,638.328",
      "un_estimate": "3,976",
      "un_year": "3,976"
    },
    {
      "Imf_year": "2021",
      "country": "Bhutan",
      "imf_estimate": "3,296.106",
      "un_estimate": "3,361",
      "un_year": "3,361"
    },
    {
      "Imf_year": "2021",
      "country": "Djibouti",
      "imf_estimate": "3,645.500",
      "un_estimate": "3,252",
      "un_year": "3,252"
    },
    {
      "Imf_year": "2021",
      "country": "Palestine",
      "imf_estimate": "3,320.853",
      "un_estimate": "3,424",
      "un_year": "3,424"
    },
    {
      "Imf_year": "2021",
      "country": "Vanuatu",
      "imf_estimate": "3,235.205",
      "un_estimate": "3,023",
      "un_year": "3,023"
    },
    {
      "Imf_year": "2021",
      "country": "Syria",
      "imf_estimate": "2,807",
      "un_estimate": "1,194",
      "un_year": "1,194"
    },
    {
      "Imf_year": "2021",
      "country": "Lebanon",
      "imf_estimate": "2,802",
      "un_estimate": "7,784",
      "un_year": "7,784"
    },
    {
      "Imf_year": "2021",
      "country": "Laos",
      "imf_estimate": "2,625.610",
      "un_estimate": "2,625",
      "un_year": "2,625"
    },
    {
      "Imf_year": "2021",
      "country": "Papua New Guinea",
      "imf_estimate": "2,951.977",
      "un_estimate": "2,845",
      "un_year": "2,845"
    },
    {
      "Imf_year": "2021",
      "country": "Honduras",
      "imf_estimate": "2,602.170",
      "un_estimate": "2,575",
      "un_year": "2,575"
    },
    {
      "Imf_year": "2021",
      "country": "Ivory Coast",
      "imf_estimate": "2,489.102",
      "un_estimate": "2,276",
      "un_year": "2,276"
    },
    {
      "Imf_year": "2021",
      "country": "Congo",
      "imf_estimate": "2,655.719",
      "un_estimate": "2,304",
      "un_year": "2,304"
    },
    {
      "Imf_year": "2021",
      "country": "Solomon Islands",
      "imf_estimate": "2,356.505",
      "un_estimate": "1,945",
      "un_year": "1,945"
    },
    {
      "Imf_year": "2021",
      "country": "Nigeria",
      "imf_estimate": "2,272.844",
      "un_estimate": "2,361",
      "un_year": "2,361"
    },
    {
      "Imf_year": "2021",
      "country": "Ghana",
      "imf_estimate": "2,413.095",
      "un_estimate": "2,203",
      "un_year": "2,203"
    },
    {
      "Imf_year": "2021",
      "country": "India",
      "imf_estimate": "2,116.444",
      "un_estimate": "2,116",
      "un_year": "2,116"
    },
    {
      "Imf_year": "2021",
      "country": "Mauritania",
      "imf_estimate": "2,161.279",
      "un_estimate": "1,678",
      "un_year": "1,678"
    },
    {
      "Imf_year": "2021",
      "country": "São Tomé and Príncipe",
      "imf_estimate": "2,392.893",
      "un_estimate": "1,961",
      "un_year": "1,961"
    },
    {
      "Imf_year": "2021",
      "country": "Bangladesh",
      "imf_estimate": "2,138.794[9]",
      "un_estimate": "1,846",
      "un_year": "1,846"
    },
    {
      "Imf_year": "2021",
      "country": "Kenya",
      "imf_estimate": "2,198.593",
      "un_estimate": "1,817",
      "un_year": "1,817"
    },
    {
      "Imf_year": "2021",
      "country": "Angola",
      "imf_estimate": "2,200.675",
      "un_estimate": "2,671",
      "un_year": "2,671"
    },
    {
      "Imf_year": "2021",
      "country": "Haiti",
      "imf_estimate": "1,691.825",
      "un_estimate": "715",
      "un_year": "715"
    },
    {
      "Imf_year": "2021",
      "country": "Kiribati",
      "imf_estimate": "1,927.077",
      "un_estimate": "1,657",
      "un_year": "1,657"
    },
    {
      "Imf_year": "2021",
      "country": "Nicaragua",
      "imf_estimate": "2,047.097",
      "un_estimate": "1,913",
      "un_year": "1,913"
    },
    {
      "Imf_year": "2021",
      "country": "Uzbekistan",
      "imf_estimate": "1,901.492",
      "un_estimate": "1,756",
      "un_year": "1,756"
    },
    {
      "Imf_year": "2021",
      "country": "Cambodia",
      "imf_estimate": "1,647.019",
      "un_estimate": "1,644",
      "un_year": "1,644"
    },
    {
      "Imf_year": "2021",
      "country": "Zimbabwe",
      "imf_estimate": "1,664.758",
      "un_estimate": "1,464",
      "un_year": "1,464"
    },
    {
      "Imf_year": "2021",
      "country": "Cameroon",
      "imf_estimate": "1,645.807",
      "un_estimate": "1,534",
      "un_year": "1,534"
    },
    {
      "Imf_year": "2021",
      "country": "Senegal",
      "imf_estimate": "1,602.898",
      "un_estimate": "1,452",
      "un_year": "1,452"
    },
    {
      "Imf_year": "2021",
      "country": "Venezuela",
      "imf_estimate": "1,627.353",
      "un_estimate": "4,733",
      "un_year": "4,733"
    },
    {
      "Imf_year": "2021",
      "country": "Myanmar",
      "imf_estimate": "1,246.318",
      "un_estimate": "1,421",
      "un_year": "1,421"
    },
    {
      "Imf_year": "2021",
      "country": "Comoros",
      "imf_estimate": "1,390.061",
      "un_estimate": "1,370",
      "un_year": "1,370"
    },
    {
      "Imf_year": "2021",
      "country": "Benin",
      "imf_estimate": "1,446.829",
      "un_estimate": "1,220",
      "un_year": "1,220"
    },
    {
      "Imf_year": "2021",
      "country": "East Timor",
      "imf_estimate": "1,262.722",
      "un_estimate": "1,561",
      "un_year": "1,561"
    },
    {
      "Imf_year": "2021",
      "country": "Pakistan",
      "imf_estimate": "1,260",
      "un_estimate": "1,187",
      "un_year": "1,187"
    },
    {
      "Imf_year": "2021",
      "country": "Nepal",
      "imf_estimate": "1,172.638",
      "un_estimate": "1,074",
      "un_year": "1,074"
    },
    {
      "Imf_year": "2021",
      "country": "Lesotho",
      "imf_estimate": "1,187.512",
      "un_estimate": "1,158",
      "un_year": "1,158"
    },
    {
      "Imf_year": "2021",
      "country": "Guinea",
      "imf_estimate": "1,168.178",
      "un_estimate": "967",
      "un_year": "967"
    },
    {
      "Imf_year": "2021",
      "country": "Kyrgyzstan",
      "imf_estimate": "1,224.745",
      "un_estimate": "1,318",
      "un_year": "1,318"
    },
    {
      "Imf_year": "2021",
      "country": "Tanzania",
      "imf_estimate": "1,159.193",
      "un_estimate": "1,084",
      "un_year": "1,084"
    },
    {
      "Imf_year": "2021",
      "country": "Togo",
      "imf_estimate": "1,000.438",
      "un_estimate": "899",
      "un_year": "899"
    },
    {
      "Imf_year": "2021",
      "country": "Mali",
      "imf_estimate": "966.141",
      "un_estimate": "887",
      "un_year": "887"
    },
    {
      "Imf_year": "2021",
      "country": "Zambia",
      "imf_estimate": "1,115.272",
      "un_estimate": "1,292",
      "un_year": "1,292"
    },
    {
      "Imf_year": "2021",
      "country": "Uganda",
      "imf_estimate": "1,018.436",
      "un_estimate": "737",
      "un_year": "737"
    },
    {
      "Imf_year": "2021",
      "country": "Ethiopia",
      "imf_estimate": "939.511",
      "un_estimate": "828",
      "un_year": "828"
    },
    {
      "Imf_year": "2021",
      "country": "Guinea-Bissau",
      "imf_estimate": "858.040",
      "un_estimate": "688",
      "un_year": "688"
    },
    {
      "Imf_year": "2021",
      "country": "Burkina Faso",
      "imf_estimate": "926.200",
      "un_estimate": "787",
      "un_year": "787"
    },
    {
      "Imf_year": "2021",
      "country": "Gambia",
      "imf_estimate": "819.220",
      "un_estimate": "776",
      "un_year": "776"
    },
    {
      "Imf_year": "2021",
      "country": "Rwanda",
      "imf_estimate": "802.264",
      "un_estimate": "820",
      "un_year": "820"
    },
    {
      "Imf_year": "2021",
      "country": "Tajikistan",
      "imf_estimate": "839.180",
      "un_estimate": "894",
      "un_year": "894"
    },
    {
      "Imf_year": "2021",
      "country": "Sudan",
      "imf_estimate": "789.448",
      "un_estimate": "815",
      "un_year": "815"
    },
    {
      "Imf_year": "2021",
      "country": "Yemen",
      "imf_estimate": "585.003",
      "un_estimate": "855",
      "un_year": "855"
    },
    {
      "Imf_year": "2021",
      "country": "Chad",
      "imf_estimate": "729.844",
      "un_estimate": "707",
      "un_year": "707"
    },
    {
      "Imf_year": "2021",
      "country": "Liberia",
      "imf_estimate": "703.406",
      "un_estimate": "523",
      "un_year": "523"
    },
    {
      "Imf_year": "640",
      "country": "North Korea",
      "imf_estimate": "N/A",
      "un_estimate": "2019",
      "un_year": "2019"
    },
    {
      "Imf_year": "2021",
      "country": "Niger",
      "imf_estimate": "622.230",
      "un_estimate": "555",
      "un_year": "555"
    },
    {
      "Imf_year": "2021",
      "country": "Eritrea",
      "imf_estimate": "625.974",
      "un_estimate": "567",
      "un_year": "567"
    },
    {
      "Imf_year": "2021",
      "country": "Afghanistan",
      "imf_estimate": "592",
      "un_estimate": "470",
      "un_year": "470"
    },
    {
      "Imf_year": "2021",
      "country": "DR Congo",
      "imf_estimate": "593.558",
      "un_estimate": "545",
      "un_year": "545"
    },
    {
      "Imf_year": "2021",
      "country": "Central African Republic",
      "imf_estimate": "525.914",
      "un_estimate": "468",
      "un_year": "468"
    },
    {
      "Imf_year": "2021",
      "country": "Sierra Leone",
      "imf_estimate": "541.063",
      "un_estimate": "528",
      "un_year": "528"
    },
    {
      "Imf_year": "2021",
      "country": "Madagascar",
      "imf_estimate": "498.682",
      "un_estimate": "523",
      "un_year": "523"
    },
    {
      "Imf_year": "2021",
      "country": "Malawi",
      "imf_estimate": "565.798",
      "un_estimate": "435",
      "un_year": "435"
    },
    {
      "Imf_year": "2021",
      "country": "Mozambique",
      "imf_estimate": "492.273",
      "un_estimate": "504",
      "un_year": "504"
    },
    {
      "Imf_year": "2021",
      "country": "Somalia",
      "imf_estimate": "350.361",
      "un_estimate": "105",
      "un_year": "105"
    },
    {
      "Imf_year": "2021",
      "country": "South Sudan",
      "imf_estimate": "230.132",
      "un_estimate": "448",
      "un_year": "448"
    },
    {
      "Imf_year": "2021",
      "country": "Burundi",
      "imf_estimate": "261.053",
      "un_estimate": "260",
      "un_year": "260"
    }
  ],
  "errors": [],
  "resume_variable": "n",
  "success_score": "100",
  "resume_dict": {}
}


Wordpress Blog Post Scraper
********************************

Posts are blog content listed in a reverse chronological order (newest content on top). You will see posts listed on your blog page. If you are using WordPress as a blog, then you will end up using posts for the majority of your website’s content. You can add and edit your WordPress posts from the ‘Posts’ menu in your dashboard.

This bot help to scrape the worldpress blog post

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	response = datakund.wordpress_blogs()

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.wordpress_blogs()
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"wordpress_blogs~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true}'

Response Data
##############

.. code-block:: json

			
	{
  "body": [
    {
      "Column A@txt": "Gordon M Aamoth, Jr"
    },
    {
      "Column A@txt": "Edelmiro Abad"
    },
    {
      "Column A@txt": "Laurence Christopher Abel"
    },
        {
      "Column A@txt": "Igor Zukelman"
    }
  ],
  "errors": [],
  "resume_variable": 0,
  "success_score": "100"
}


Worldometer COVID Stats Scraper
********************************

Run the bot, enter the country name and click submit
Bot will visit worldometer.info and scrape the COVID stats of that particular country.

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	response = datakund.worldometer_corona_countrywise()

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.worldometer_corona_countrywise()
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"worldometer_corona_countrywise~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true}'

Response Data
##############

.. code-block:: json

			
	{
      "body": [
    {
      "active_case": "23,591,203",
      "country": "USA",
      "death_per_million": "2,618",
      "total_cases": "67,631,191",
      "total_deaths": "874,321"
    },
    {
      "active_case": "1,736,605",
      "country": "India",
      "death_per_million": "347",
      "total_cases": "37,618,271",
      "total_deaths": "486,784"
    },
    {
      "country": "Brazil"
    },
    {
      "active_case": "3,655,733",
      "country": "UK",
      "death_per_million": "2,222",
      "total_cases": "15,305,410",
      "total_deaths": "152,075"
    },
    {
      "country": "France"
    },
    {
      "active_case": "633,899",
      "country": "Russia",
      "death_per_million": "2,205",
      "total_cases": "10,834,260",
      "total_deaths": "321,990"
    },
    {
      "country": "Turkey"
    },
    {
      "country": "Italy"
    },
    {
      "active_case": "3,002,335",
      "country": "Spain",
      "death_per_million": "1,945",
      "total_cases": "8,424,503",
      "total_deaths": "90,993"
    },
    {
      "country": "Germany"
    },
    {
      "active_case": "885,619",
      "country": "Argentina",
      "death_per_million": "2,579",
      "total_cases": "7,197,323",
      "total_deaths": "118,231"
    },
    {
      "country": "Iran"
    },
    {
      "active_case": "178,734",
      "country": "Colombia",
      "death_per_million": "2,535",
      "total_cases": "5,568,068",
      "total_deaths": "131,130"
    },
    {
      "country": "Mexico"
    },
    {
      "active_case": "421,122",
      "country": "Poland",
      "death_per_million": "2,708",
      "total_cases": "4,323,482",
      "total_deaths": "102,309"
    },
    {
      "country": "Indonesia"
    },
    {
      "active_case": "105,007",
      "country": "Ukraine",
      "death_per_million": "2,270",
      "total_cases": "3,759,530",
      "total_deaths": "98,361"
    },
    {
      "country": "Netherlands"
    },
    {
      "active_case": "91,611",
      "country": "South Africa",
      "death_per_million": "1,546",
      "total_cases": "3,560,921",
      "total_deaths": "93,451"
    },
    {
      "country": "Philippines"
    },
    {
      "active_case": "40,619",
      "country": "Malaysia",
      "death_per_million": "964",
      "total_cases": "2,810,689",
      "total_deaths": "31,808"
    },
    {
      "country": "Canada"
    },
    {
      "active_case": "N/A",
      "country": "Peru",
      "death_per_million": "6,044",
      "total_cases": "2,631,826",
      "total_deaths": "203,550"
    },
    {
      "country": "Czechia"
    },
    {
      "active_case": "484,214",
      "country": "Belgium",
      "death_per_million": "2,456",
      "total_cases": "2,484,027",
      "total_deaths": "28,661"
    },
    {
      "country": "Thailand"
    },
    {
      "active_case": "24,055",
      "country": "Iraq",
      "death_per_million": "583",
      "total_cases": "2,118,779",
      "total_deaths": "24,252"
    },
    {
      "active_case": "262,040",
      "country": "Vietnam",
      "death_per_million": "363",
      "total_cases": "2,045,290",
      "total_deaths": "35,788"
    },
    {
      "country": "Romania"
    },
    {
      "active_case": "331,158",
      "country": "Portugal",
      "death_per_million": "1,905",
      "total_cases": "1,906,891",
      "total_deaths": "19,334"
    },
    {
      "country": "Japan"
    },
    {
      "active_case": "95,016",
      "country": "Chile",
      "death_per_million": "2,035",
      "total_cases": "1,885,540",
      "total_deaths": "39,426"
    },
    {
      "country": "Australia"
    },
    {
      "country": "Switzerland"
    },
    {
      "active_case": "291,293",
      "country": "Greece",
      "death_per_million": "2,135",
      "total_cases": "1,679,705",
      "total_deaths": "22,087"
    },
    {
      "country": "Bangladesh"
    },
    {
      "active_case": "301,944",
      "country": "Sweden",
      "death_per_million": "1,517",
      "total_cases": "1,560,363",
      "total_deaths": "15,470"
    },
    {
      "country": "Austria"
    },
    {
      "active_case": "152,018",
      "country": "Serbia",
      "death_per_million": "1,508",
      "total_cases": "1,449,192",
      "total_deaths": "13,098"
    },
    {
      "country": "Hungary"
    },
    {
      "active_case": "39,881",
      "country": "Pakistan",
      "death_per_million": "128",
      "total_cases": "1,333,521",
      "total_deaths": "29,029"
    },
    {
      "country": "Denmark"
    },
    {
      "active_case": "458,342",
      "country": "Ireland",
      "death_per_million": "1,202",
      "total_cases": "1,109,818",
      "total_deaths": "6,035"
    },
    {
      "country": "Jordan"
    },
    {
      "active_case": "84,406",
      "country": "Kazakhstan",
      "death_per_million": "684",
      "total_cases": "1,071,130",
      "total_deaths": "13,087"
    },
    {
      "country": "Morocco"
    },
    {
      "active_case": "17,502",
      "country": "Cuba",
      "death_per_million": "737",
      "total_cases": "1,002,499",
      "total_deaths": "8,341"
    },
    {
      "country": "Georgia"
    },
    {
      "active_case": "34,734",
      "country": "Slovakia",
      "death_per_million": "3,176",
      "total_cases": "880,671",
      "total_deaths": "17,352"
    },
    {
      "country": "Nepal"
    },
    {
      "active_case": "160,761",
      "country": "Bulgaria",
      "death_per_million": "4,695",
      "total_cases": "830,604",
      "total_deaths": "32,247"
    },
    {
      "country": "Lebanon"
    },
    {
      "active_case": "48,441",
      "country": "Croatia",
      "death_per_million": "3,236",
      "total_cases": "818,832",
      "total_deaths": "13,157"
    },
    {
      "country": "UAE"
    },
    {
      "active_case": "58,179",
      "country": "Tunisia",
      "death_per_million": "2,149",
      "total_cases": "788,012",
      "total_deaths": "25,803"
    },
    {
      "country": "Bolivia"
    },
    {
      "active_case": "1,272",
      "country": "Belarus",
      "death_per_million": "618",
      "total_cases": "717,034",
      "total_deaths": "5,836"
    },
    {
      "country": "S. Korea"
    },
    {
      "active_case": "23,981",
      "country": "Guatemala",
      "death_per_million": "878",
      "total_cases": "653,555",
      "total_deaths": "16,179"
    },
    {
      "country": "Azerbaijan"
    },
    {
      "country": "Saudi Arabia"
    },
    {
      "active_case": "47,796",
      "country": "Costa Rica",
      "death_per_million": "1,437",
      "total_cases": "620,587",
      "total_deaths": "7,421"
    },
    {
      "country": "Sri Lanka"
    },
    {
      "active_case": "57,203",
      "country": "Panama",
      "death_per_million": "1,703",
      "total_cases": "580,324",
      "total_deaths": "7,528"
    },
    {
      "country": "Lithuania"
    },
    {
      "active_case": "70,772",
      "country": "Slovenia",
      "death_per_million": "2,744",
      "total_cases": "538,325",
      "total_deaths": "5,705"
    },
    {
      "country": "Myanmar"
    },
    {
      "active_case": "433,090",
      "country": "Norway",
      "death_per_million": "252",
      "total_cases": "523,424",
      "total_deaths": "1,382"
    },
    {
      "country": "Uruguay"
    },
    {
      "active_case": "37,866",
      "country": "Dominican Republic",
      "death_per_million": "388",
      "total_cases": "504,914",
      "total_deaths": "4,269"
    },
    {
      "country": "Paraguay"
    },
    {
      "active_case": "43,356",
      "country": "Kuwait",
      "death_per_million": "567",
      "total_cases": "470,478",
      "total_deaths": "2,477"
    },
    {
      "country": "Ethiopia"
    },
    {
      "active_case": "12,536",
      "country": "Venezuela",
      "death_per_million": "190",
      "total_cases": "456,641",
      "total_deaths": "5,383"
    },
    {
      "country": "Palestine"
    },
    {
      "active_case": "96,005",
      "country": "Mongolia",
      "death_per_million": "622",
      "total_cases": "411,350",
      "total_deaths": "2,089"
    },
    {
      "country": "Egypt"
    },
    {
      "active_case": "7,127",
      "country": "Libya",
      "death_per_million": "834",
      "total_cases": "398,055",
      "total_deaths": "5,853"
    },
    {
      "country": "Finland"
    },
    {
      "active_case": "13,091",
      "country": "Moldova",
      "death_per_million": "2,600",
      "total_cases": "390,742",
      "total_deaths": "10,452"
    },
    {
      "country": "Honduras"
    },
    {
      "active_case": "6,110",
      "country": "Armenia",
      "death_per_million": "2,699",
      "total_cases": "347,785",
      "total_deaths": "8,020"
    },
    {
      "country": "Kenya"
    },
    {
      "active_case": "111,633",
      "country": "Bosnia and Herzegovina",
      "death_per_million": "4,260",
      "total_cases": "317,692",
      "total_deaths": "13,841"
    },
    {
      "country": "Oman"
    },
    {
      "active_case": "21,185",
      "country": "Bahrain",
      "death_per_million": "780",
      "total_cases": "310,906",
      "total_deaths": "1,398"
    },
    {
      "country": "Latvia"
    },
    {
      "active_case": "41,717",
      "country": "Qatar",
      "death_per_million": "223",
      "total_cases": "303,240",
      "total_deaths": "627"
    },
    {
      "country": "Zambia"
    },
    {
      "active_case": "7,591",
      "country": "Singapore",
      "death_per_million": "142",
      "total_cases": "293,014",
      "total_deaths": "843"
    },
    {
      "country": "Estonia"
    },
    {
      "active_case": "23,439",
      "country": "Nigeria",
      "death_per_million": "15",
      "total_cases": "251,178",
      "total_deaths": "3,110"
    },
    {
      "country": "North Macedonia"
    },
    {
      "active_case": "10,312",
      "country": "Botswana",
      "death_per_million": "1,045",
      "total_cases": "239,887",
      "total_deaths": "2,534"
    },
    {
      "country": "Albania"
    },
    {
      "active_case": "103,827",
      "country": "Cyprus",
      "death_per_million": "560",
      "total_cases": "228,881",
      "total_deaths": "684"
    },
    {
      "country": "Algeria"
    },
    {
      "active_case": "13,090",
      "country": "Zimbabwe",
      "death_per_million": "346",
      "total_cases": "226,460",
      "total_deaths": "5,258"
    },
    {
      "country": "Mozambique"
    },
    {
      "active_case": "5,411",
      "country": "Uzbekistan",
      "death_per_million": "44",
      "total_cases": "206,122",
      "total_deaths": "1,518"
    },
    {
      "country": "Montenegro"
    },
    {
      "active_case": "7,227",
      "country": "Kyrgyzstan",
      "death_per_million": "424",
      "total_cases": "191,288",
      "total_deaths": "2,836"
    },
    {
      "country": "Afghanistan"
    },
    {
      "active_case": "56,295",
      "country": "Uganda",
      "death_per_million": "71",
      "total_cases": "158,676",
      "total_deaths": "3,424"
    },
    {
      "country": "Namibia"
    },
    {
      "country": "Luxembourg"
    },
    {
      "active_case": "78,635",
      "country": "Rwanda",
      "death_per_million": "105",
      "total_cases": "125,568",
      "total_deaths": "1,411"
    },
    {
      "country": "Laos"
    },
    {
      "country": "Cambodia"
    },
    {
      "active_case": "43,630",
      "country": "Jamaica",
      "death_per_million": "851",
      "total_cases": "113,438",
      "total_deaths": "2,536"
    },
    {
      "active_case": "3,530",
      "country": "China",
      "death_per_million": "3",
      "total_cases": "105,258",
      "total_deaths": "4,636"
    },
    {
      "country": "Maldives"
    },
    {
      "country": "Trinidad and Tobago"
    },
    {
      "active_case": "7,466",
      "country": "Angola",
      "death_per_million": "54",
      "total_cases": "93,974",
      "total_deaths": "1,866"
    },
    {
      "country": "Senegal"
    },
    {
      "active_case": "30,776",
      "country": "DRC",
      "death_per_million": "14",
      "total_cases": "82,984",
      "total_deaths": "1,278"
    },
    {
      "country": "Malawi"
    },
    {
      "active_case": "3,620",
      "country": "Ivory Coast",
      "death_per_million": "28",
      "total_cases": "79,273",
      "total_deaths": "761"
    },
    {
      "active_case": "57,776",
      "country": "French Guiana",
      "death_per_million": "1,130",
      "total_cases": "69,381",
      "total_deaths": "351"
    },
    {
      "country": "Eswatini"
    },
    {
      "active_case": "14,905",
      "country": "Suriname",
      "death_per_million": "2,045",
      "total_cases": "65,282",
      "total_deaths": "1,216"
    },
    {
      "country": "Malta"
    },
    {
      "active_case": "3,803",
      "country": "Fiji",
      "death_per_million": "823",
      "total_cases": "59,785",
      "total_deaths": "746"
    },
    {
      "active_case": "4,277",
      "country": "Madagascar",
      "death_per_million": "41",
      "total_cases": "55,827",
      "total_deaths": "1,169"
    },
    {
      "country": "Mauritania"
    },
    {
      "active_case": "2,482",
      "country": "Cabo Verde",
      "death_per_million": "665",
      "total_cases": "54,367",
      "total_deaths": "376"
    },
    {
      "country": "Guyana"
    },
    {
      "active_case": "8,085",
      "country": "Sudan",
      "death_per_million": "75",
      "total_cases": "51,802",
      "total_deaths": "3,388"
    },
    {
      "country": "Syria"
    },
    {
      "active_case": "9,664",
      "country": "Iceland",
      "death_per_million": "128",
      "total_cases": "48,482",
      "total_deaths": "44"
    },
    {
      "country": "French Polynesia"
    },
    {
      "active_case": "5,217",
      "country": "Gabon",
      "death_per_million": "130",
      "total_cases": "45,405",
      "total_deaths": "299"
    },
    {
      "country": "Belize"
    },
    {
      "active_case": "3,155",
      "country": "Channel Islands",
      "death_per_million": "692",
      "total_cases": "36,852",
      "total_deaths": "122"
    },
    {
      "active_case": "5,614",
      "country": "Barbados",
      "death_per_million": "934",
      "total_cases": "35,734",
      "total_deaths": "269"
    },
    {
      "country": "Guinea"
    },
    {
      "active_case": "31,405",
      "country": "Mayotte",
      "death_per_million": "657",
      "total_cases": "34,555",
      "total_deaths": "186"
    },
    {
      "country": "Curaçao"
    },
    {
      "active_case": "5,049",
      "country": "Seychelles",
      "death_per_million": "1,410",
      "total_cases": "32,846",
      "total_deaths": "140"
    },
    {
      "active_case": "N/A",
      "country": "Tanzania",
      "death_per_million": "12",
      "total_cases": "31,395",
      "total_deaths": "745"
    },
    {
      "country": "Aruba"
    },
    {
      "active_case": "3,638",
      "country": "Mali",
      "death_per_million": "33",
      "total_cases": "28,755",
      "total_deaths": "692"
    },
    {
      "country": "Haiti"
    },
    {
      "country": "Mauritius"
    },
    {
      "country": "Congo"
    },
    {
      "active_case": "1,118",
      "country": "Burkina Faso",
      "death_per_million": "16",
      "total_cases": "20,249",
      "total_deaths": "339"
    },
    {
      "country": "Timor-Leste"
    },
    {
      "active_case": "935",
      "country": "Taiwan",
      "death_per_million": "36",
      "total_cases": "17,885",
      "total_deaths": "851"
    },
    {
      "active_case": "3,285",
      "country": "Saint Lucia",
      "death_per_million": "1,698",
      "total_cases": "17,531",
      "total_deaths": "314"
    },
    {
      "active_case": "3,463",
      "country": "South Sudan",
      "death_per_million": "12",
      "total_cases": "16,533",
      "total_deaths": "136"
    },
    {
      "country": "Brunei"
    },
    {
      "active_case": "1,604",
      "country": "Equatorial Guinea",
      "death_per_million": "121",
      "total_cases": "15,492",
      "total_deaths": "178"
    },
    {
      "country": "New Zealand"
    },
    {
      "active_case": "571",
      "country": "Djibouti",
      "death_per_million": "187",
      "total_cases": "14,984",
      "total_deaths": "189"
    },
    {
      "active_case": "801",
      "country": "New Caledonia",
      "death_per_million": "973",
      "total_cases": "13,829",
      "total_deaths": "282"
    },
    {
      "active_case": "508",
      "country": "Hong Kong",
      "death_per_million": "28",
      "total_cases": "13,048",
      "total_deaths": "213"
    },
    {
      "active_case": "1,381",
      "country": "Gambia",
      "death_per_million": "138",
      "total_cases": "11,572",
      "total_deaths": "347"
    },
    {
      "country": "Gibraltar"
    },
    {
      "active_case": "1,641",
      "country": "San Marino",
      "death_per_million": "3,026",
      "total_cases": "10,639",
      "total_deaths": "103"
    },
    {
      "country": "Faeroe Islands"
    },
    {
      "active_case": "1,271",
      "country": "Yemen",
      "death_per_million": "65",
      "total_cases": "10,308",
      "total_deaths": "1,991"
    },
    {
      "country": "Grenada"
    },
    {
      "active_case": "1,953",
      "country": "Bermuda",
      "death_per_million": "1,776",
      "total_cases": "9,144",
      "total_deaths": "110"
    },
    {
      "country": "Eritrea"
    },
    {
      "country": "Niger"
    },
    {
      "active_case": "5,261",
      "country": "Greenland",
      "death_per_million": "53",
      "total_cases": "8,025",
      "total_deaths": "3"
    },
    {
      "active_case": "512",
      "country": "Comoros",
      "death_per_million": "177",
      "total_cases": "7,767",
      "total_deaths": "159"
    },
    {
      "active_case": "N/A",
      "country": "Sierra Leone",
      "death_per_million": "15",
      "total_cases": "7,544",
      "total_deaths": "125"
    },
    {
      "country": "Liechtenstein"
    },
    {
      "country": "Guinea-Bissau"
    },
    {
      "active_case": "1,828",
      "country": "Chad",
      "death_per_million": "11",
      "total_cases": "6,887",
      "total_deaths": "185"
    },
    {
      "country": "Monaco"
    },
    {
      "active_case": "903",
      "country": "St. Vincent Grenadines",
      "death_per_million": "780",
      "total_cases": "6,599",
      "total_deaths": "87"
    },
    {
      "country": "Caribbean Netherlands"
    },
    {
      "active_case": "1,438",
      "country": "Sao Tome and Principe",
      "death_per_million": "293",
      "total_cases": "5,569",
      "total_deaths": "66"
    },
    {
      "country": "British Virgin Islands"
    },
    {
      "country": "Turks and Caicos"
    },
    {
      "active_case": "1,217",
      "country": "Saint Kitts and Nevis",
      "death_per_million": "521",
      "total_cases": "4,968",
      "total_deaths": "28"
    },
    {
      "country": "Bhutan"
    },
    {
      "active_case": "254",
      "country": "Saint Pierre Miquelon",
      "total_cases": "494",
      "total_deaths": ""
    },
    {
      "active_case": "133",
      "total_cases": "152",
      "total_deaths": ""
    }
  ],
  "errors": [],
  "resume_variable": "n",
  "success_score": "100",
  "resume_dict": {}
}


Yahoo finance Scraper
**********************

Yahoo finance Scraper is a python library to scrape stock, stock prices and stock change of company, using browser automation.

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	response = datakund.yahoo_finance()

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.yahoo_finance()
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"yahoo_finance~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true}'

Response Data
##############

.. code-block:: json

			
	{
  "body": [
    {
      "stock": "S&P Futures",
      "stock_change": "(-0.48%)",
      "stock_price": "4,632.25"
    },
    {
      "stock": "Dow Futures",
      "stock_change": "(-0.23%)",
      "stock_price": "35,712.00"
    },
    {
      "stock": "Nasdaq Futures",
      "stock_change": "(-1.01%)",
      "stock_price": "15,437.75"
    },
    {
      "stock": "Russell 2000 Futures",
      "stock_change": "(-0.35%)",
      "stock_price": "2,150.20"
    },
    {
      "stock": "Crude Oil",
      "stock_price": "84.95"
    },
    {
      "stock": "Gold",
      "stock_price": "1,816.70"
    }
  ],
  "errors": [],
  "resume_variable": "n",
  "success_score": "100"
}


Yahoo Finance Historical Data Scraper
******************************************

Yahoo! Finance is a media property that is part of the Yahoo! network. It provides financial news, data and commentary including stock quotes, press releases, financial reports, and original content. It also offers some online tools for personal finance management. With the help of Yahoo Finance Scrape Bot you can scrape Historical Data of any stock link from yahoo finance.

How Does it Work?

Run the bot, Enter Stock Link and click submit button and bot will scrape all the historical data of the given stock link yahoo finance.

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	
	response = datakund.yahoo_finance_historical_data(stock_link="https://finance.yahoo.com/quote/YM%3DF?p=YM%3DF")

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.yahoo_finance_historical_data("https://finance.yahoo.com/quote/YM%3DF?p=YM%3DF")
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"yahoo_finance_historical_data~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"stock_link":"https://finance.yahoo.com/quote/YM%3DF?p=YM%3DF"}}'

Response Data
##############

.. code-block:: json

			
	{
  "body": [
    {
      "current_price": "2,151.60",
      "stock_name": "E-mini Russell 2000 Index Futur (RTY=F)"
    },
    {
      "adj_close": "2,151.60",
      "date": "Jan 18, 2022",
      "high": "2,168.60",
      "low": "2,143.90",
      "open": "2,162.30",
      "volume": "27,076"
    },
    {
      "adj_close": "2,157.70",
      "date": "Jan 14, 2022",
      "high": "2,163.30",
      "low": "2,120.20",
      "open": "2,157.00",
      "volume": "225,874"
    },
    {
      "adj_close": "2,155.50",
      "date": "Jan 13, 2022",
      "high": "2,197.50",
      "low": "2,148.80",
      "open": "2,176.50",
      "volume": "225,874"
    },
    {
      "adj_close": "2,173.10",
      "date": "Jan 12, 2022",
      "high": "2,209.30",
      "low": "2,161.30",
      "open": "2,190.20",
      "volume": "203,930"
    },
    {
      "adj_close": "2,190.40",
      "date": "Jan 11, 2022",
      "high": "2,194.00",
      "low": "2,144.50",
      "open": "2,168.50",
      "volume": "200,103"
    },
    {
      "adj_close": "2,168.00",
      "date": "Jan 10, 2022",
      "high": "2,184.10",
      "low": "2,125.90",
      "open": "2,172.80",
      "volume": "310,296"
    },
    {
      "adj_close": "2,175.90",
      "date": "Jan 07, 2022",
      "high": "2,219.80",
      "low": "2,173.20",
      "open": "2,207.70",
      "volume": "230,479"
    },
    {
      "adj_close": "2,202.70",
      "date": "Jan 06, 2022",
      "high": "2,220.50",
      "low": "2,173.70",
      "open": "2,189.30",
      "volume": "267,822"
    },
    {
      "adj_close": "2,190.60",
      "date": "Jan 05, 2022",
      "high": "2,276.40",
      "low": "2,187.50",
      "open": "2,267.20",
      "volume": "248,172"
    },
    {
      "adj_close": "2,266.50",
      "date": "Jan 04, 2022",
      "high": "2,288.60",
      "low": "2,250.80",
      "open": "2,268.90",
      "volume": "182,380"
    },
    {
      "adj_close": "2,269.40",
      "date": "Jan 03, 2022",
      "high": "2,284.40",
      "low": "2,244.20",
      "open": "2,247.60",
      "volume": "222,614"
    },
    {
      "adj_close": "2,242.80",
      "date": "Dec 31, 2021",
      "high": "2,258.80",
      "low": "2,231.40",
      "open": "2,245.90",
      "volume": "134,759"
    },
    {
      "adj_close": "2,246.90",
      "date": "Dec 30, 2021",
      "high": "2,272.30",
      "low": "2,237.60",
      "open": "2,244.40",
      "volume": "122,020"
    },
    {
      "adj_close": "2,247.80",
      "date": "Dec 29, 2021",
      "high": "2,252.60",
      "low": "2,229.80",
      "open": "2,247.10",
      "volume": "132,269"
    },
    {
      "adj_close": "2,243.80",
      "date": "Dec 28, 2021",
      "high": "2,275.20",
      "low": "2,240.80",
      "open": "2,259.10",
      "volume": "145,387"
    },
    {
      "adj_close": "2,259.60",
      "date": "Dec 27, 2021",
      "high": "2,260.30",
      "low": "2,222.70",
      "open": "2,238.00",
      "volume": "130,970"
    },
    {
      "adj_close": "2,236.90",
      "date": "Dec 23, 2021",
      "high": "2,245.00",
      "low": "2,220.10",
      "open": "2,220.90",
      "volume": "135,494"
    },
    {
      "adj_close": "2,219.30",
      "date": "Dec 22, 2021",
      "high": "2,223.50",
      "low": "2,187.50",
      "open": "2,203.00",
      "volume": "178,647"
    },
    {
      "adj_close": "2,199.70",
      "date": "Dec 21, 2021",
      "high": "2,204.60",
      "low": "2,135.00",
      "open": "2,139.80",
      "volume": "206,131"
    },
    {
      "adj_close": "2,135.90",
      "date": "Dec 20, 2021",
      "high": "2,173.60",
      "low": "2,102.30",
      "open": "2,169.00",
      "volume": "292,340"
    },
    {
      "adj_close": "2,142.43",
      "date": "Dec 17, 2021",
      "high": "2,160.70",
      "low": "2,132.00",
      "open": "2,152.70",
      "volume": "334,169"
    },
    {
      "adj_close": "2,151.90",
      "date": "Dec 16, 2021",
      "high": "2,227.60",
      "low": "2,141.30",
      "open": "2,198.50",
      "volume": "56,533"
    },
    {
      "adj_close": "2,198.10",
      "date": "Dec 15, 2021",
      "high": "2,201.90",
      "low": "2,130.10",
      "open": "2,164.30",
      "volume": "83,275"
    },
    {
      "adj_close": "2,161.30",
      "date": "Dec 14, 2021",
      "high": "2,195.30",
      "low": "2,152.40",
      "open": "2,184.60",
      "volume": "155,043"
    },
    {
      "adj_close": "2,180.00",
      "date": "Dec 13, 2021",
      "high": "2,227.20",
      "low": "2,167.20",
      "open": "2,209.40",
      "volume": "258,168"
    },
    {
      "adj_close": "2,212.40",
      "date": "Dec 10, 2021",
      "high": "2,244.90",
      "low": "2,196.00",
      "open": "2,219.00",
      "volume": "243,187"
    },
    {
      "adj_close": "2,218.40",
      "date": "Dec 09, 2021",
      "high": "2,274.10",
      "low": "2,214.40",
      "open": "2,269.00",
      "volume": "265,664"
    },
    {
      "adj_close": "2,269.80",
      "date": "Dec 08, 2021",
      "high": "2,279.90",
      "low": "2,243.90",
      "open": "2,262.10",
      "volume": "200,531"
    },
    {
      "adj_close": "2,253.90",
      "date": "Dec 07, 2021",
      "high": "2,274.30",
      "low": "2,201.70",
      "open": "2,207.90",
      "volume": "217,576"
    },
    {
      "adj_close": "2,203.60",
      "date": "Dec 06, 2021",
      "high": "2,220.40",
      "low": "2,149.80",
      "open": "2,166.40",
      "volume": "250,218"
    },
    {
      "adj_close": "2,159.30",
      "date": "Dec 03, 2021",
      "high": "2,222.50",
      "low": "2,139.20",
      "open": "2,214.70",
      "volume": "327,736"
    },
    {
      "adj_close": "2,205.20",
      "date": "Dec 02, 2021",
      "high": "2,213.10",
      "low": "2,143.50",
      "open": "2,146.00",
      "volume": "332,772"
    },
    {
      "adj_close": "2,146.30",
      "date": "Dec 01, 2021",
      "high": "2,255.90",
      "low": "2,136.80",
      "open": "2,213.80",
      "volume": "373,963"
    },
    {
      "date": "Nov 30, 2021",
      "high": "2,258.30",
      "open": "2,244.70"
    }
  ],
  "errors": [],
  "resume_variable": 33,
  "success_score": "100"
}


Yahoo Ticker Symbol Scraper
*****************************

Bot will visit finance.yahoo.com and scrape all the Ticker symbols with their respective prices

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	response = datakund.yahoo_ticker_symbol_downloader()

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.yahoo_ticker_symbol_downloader()
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"yahoo_ticker_symbol_downloader~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true}'

Response Data
##############

.. code-block:: json

			
	{
  "body": [
    {
      "last_price": "15,369.50",
      "name": "Nasdaq 100 Mar 22",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "Mini Dow Jones Indus.-$5 Mar 22",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "E-Mini S&P 500 Mar 22",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "Nasdaq 100 Mar 22",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "E-mini Russell 2000 Index Futur",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "Treasury Yield 10 Years",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "Crude Oil Feb 22",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "Mini Dow Jones Indus.-$5 Mar 22",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "Tesla, Inc.",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "CBOE Volatility Index",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "E-Mini S&P 500 Mar 22",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "Advanced Micro Devices, Inc.",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "NVIDIA Corporation",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "Cielo Waste Solutions Corp.",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "Semiconductor Manufacturing International Corporation",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "Exxon Mobil Corporation",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "ProShares UltraPro QQQ",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "Air Canada",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "The Toronto-Dominion Bank",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "Invesco QQQ Trust",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "Apple Inc.",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "The Trade Desk, Inc.",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "The Goldman Sachs Group, Inc.",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "Tencent Holdings Limited",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "STAG Industrial, Inc.",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "BrainChip Holdings Ltd",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "ProShares UltraPro Short QQQ",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "Tesla, Inc.",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "SPDR S&P 500 ETF Trust",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    },
    {
      "last_price": "15,369.50",
      "name": "Occidental Petroleum Corporation",
      "price_change": "-226.25",
      "price_change_percent": "-1.45%",
      "symbol": "NQ=F"
    }
  ],
  "errors": [],
  "resume_variable": "n",
  "success_score": "100"
  }


Yelp Review Scraper
*********************

Scrape Yelp Review from Listing Link

Code
######
.. tabs::

   .. code-tab:: py 

        from bot_studio import *
	datakund = bot_studio.new()
	
	response = datakund.yelp_review(yelp_link="https://www.yelp.com/biz/saffron-grill-san-francisco")

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.yelp_review("https://www.yelp.com/biz/saffron-grill-san-francisco")
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"yelp_review~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"yelp_link":"https://www.yelp.com/biz/saffron-grill-san-francisco"}}'

Response Data
##############

.. code-block:: json

	{
     "body": [
    {
      "address": "Laurel Heights, San Francisco, CA",
      "date": "12/21/2021",
      "review": "My partner and I LOVE saffron grill. We used to order takeout from them at least twice a month (and the only reason why we stopped is bc we left sf). It was probably our favorite place in the city. To this day I've never had a better fish masala. When/if we ever come back to sf, we're coming for ya first thing, Saffron Grill!  sincerely, your biggest fans",
      "review_by": "Eimi O.",
      "reviewed": "0"
    },
    {
      "date": "8/7/2021",
      "review": "Good Indian food! Decent portions and prices are right in the sweet spot, $11 for vegetarian. I feel like a lot of places are $15-$16 so this is a great bang for your buck option. Be aware they don't give rice so if you want some you'll have to order it separately. Ordered garlic naan, yellow lentil curry and mixed vegetable curry. All really good with strong flavors. I should've asked for spicier. It was very mild when ordering generically off the website.",
      "review_by": "Isaac A.",
      "reviewed": "269"
    },
    {
      "address": "New York, NY",
      "date": "1/6/2022",
      "review": "Saffron Grill has THE best naan in the Bay Area. I also love Saffron's chicken tikka masala and basmati rice! Definitely a great Indian spot in NoPa!",
      "review_by": "Kate E.",
      "reviewed": "2"
    },
    {
      "address": "Baton Rouge, LA",
      "date": "11/10/2021",
      "review": "I used to love this place years ago. I moved back to sf recently and loved the idea of having a good neighborhood Indian spot nearby. Today was disappointing though. For $28 I ordered just a chicken korma and chicken tikka masala. The sauce for the tikka masala was very watery. The worst part was the chicken in both dishes, many pieces were very hard/chewy. Maybe not properly cooked? Maybe just bad quality? Either way it ruined the whole dish, and we couldn't even finish it.Sad to have lost what I once a considered a good neighborhood spot, but won't be going back.",
      "review_by": "Emily T.",
      "reviewed": "11"
    },
    {
      "address": "San Francisco, CA",
      "date": "12/23/2021",
      "review": "This is my go to Indian food place in San Francisco. I usually get take out and order the paneer makhni (spicy), naan, and vegetable pakoras. The food is always consistently good and I get it at least once a month. The price is pretty fair as well. 10/10 recommend!",
      "review_by": "Jashan K.",
      "reviewed": "93"
    },
    {
      "date": "11/15/2020",
      "review_by": "Matt Y.",
      "reviewed": "25"
    },
    {
      "address": "Washington, DC",
      "date": "2/24/2021",
      "review_by": "Jillian J.",
      "reviewed": "373"
    },
    {
      "date": "7/24/2021",
      "review": "Great food all around. Got samosas, raita, tandoori chicken, lamb curry....picked it up so everything was hot and fresh. Also naan. Will order again.",
      "review_by": "Jordan C.",
      "reviewed": "171"
    },
    {
      "date": "1/29/2021",
      "review": "So far this is the best Indian food in the city. My hometown is in the south bay and tInhe Indian community is more in abundance down where I am. I've gone to like one other place in the city. And it wasn't bad (I honestly can't remember too much of it). They didn't have Butter Chicken on their menu though which is one of my favorite dishes.My boyfriend randomly choose this spot while driving towards his usual Indian spot. And they happened to have not only Chicken Tikka Masala, but Butter Chicken as well. The meat honestly was whatever but the sauces here were some of the best I've ever had. Especially that Butter Chicken. Oof. Recommend their Butter Chicken.My boyfriend got the Chicken Vindaloo which was also really great in both of our opinions. (I think he liked my dish a tad bit more so I let him have the rest of my sauce). Their garlic and onion naan were the perfect companions to our dishes. My boyfriend says this place is better than his other normal spot and will be coming back again.",
      "review_by": "Lilian L.",
      "reviewed": "160"
    },
    {
      "date": "4/18/2021",
      "review": "Ordered the butter chicken and basmati rice with garlic nan and vegetable pakora. I have mixed feelings about my order. I loveeeeed the vegetable pakora and it was so crispy which is my favorite especially when it's take out. But when I received my order it was still crisp! But... I wasn't a huge fan of the butter chicken because it was too sweet for me. I will be back to try the chicken tikka masala instead to see how it compares!(:",
      "review_by": "Alissa H.",
      "reviewed": "446"
    }
  ],
  "errors": [],
  "resume_variable": "n",
  "success_score": "100"
}


Youtube Data Scrape
*******************

Scapres title, channel, views, date, likes, comments, subscribers in youtube

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	
	response = datakund.youtube_data_scrape(search='netlfix')

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.youtube_data_scrape("netlfix")
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"youtube_data_scrape~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"search":"netlfix"}}'

Response Data
##############

.. code-block:: json

	{
  "body": [
    {
      "channel": "Marvel Entertainment",
      "comments": "Welcome to chaos 🌙 Watch the new trailer for Marvel Studios’ Moon Knight and start streaming the Original series March 30 on Disney+.    ► Watch Marvel on Disney+:",
      "date": "18 Jan 2022",
      "likes": "307K",
      "subscribers": "17.8M subscribers",
      "title": "Marvel Studios’ Moon Knight | Official Trailer | Disney+",
      "views": "2,123,416 views"
    },
    {
      "channel": "OTZ Media",
      "comments": "CASH (कैश) Official Hindi Trailer 2021 | Amol Parashar, Smiriti Kalra | Disney+      SUBSCRIBE  me for more videos at:",
      "date": "9 Nov 2021",
      "likes": "10K",
      "subscribers": "625K subscribers",
      "title": "CASH (कैश) Official Hindi Trailer 2021 | Amol Parashar, Smiriti Kalra | Disney+",
      "views": "1,105,971 views"
    },
    {
      "channel": "MOVIE ON",
      "comments": null,
      "date": "31 Dec 2021",
      "likes": "2.2K",
      "subscribers": "293K subscribers",
      "title": "Boys Stuck in The Middle of Zombies and Must Use Their Wits and Courage to Survive",
      "views": "216,703 views"
    }
  ],
  "errors": [],
  "resume_variable": 3,
  "success_score": "100"
}
	
	
Youtube Playlist Scraper
********************************

Scapres title, channel, channel_link, date, description, playlist_name, videos in youtube playlist

Code
######
.. tabs::

   .. code-tab:: py

        from bot_studio import *
	datakund = bot_studio.new()
	
	response = datakund.youtube_playlist(search='netlfix')

   .. code-tab:: javascript
		 NodeJS
   
         var datakund=require("datakund")
	 datakund.youtube_playlist("netlfix")
	
   .. code-tab:: bash
		 Curl

         curl -X POST http://127.0.0.1:5000/run -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"user":"apiKey","bot":"youtube_playlist~D75HsPTUIeOmN0bLp5ulrwB7F1f2","publicbot":true,"outputdata":{"search":"netlfix"}}'

Response Data
##############

.. code-block:: json

   {
     "body": [
    {
      "channel": "Netflix",
      "channel_link": "https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw",
      "date": "New in July 2021 | Netflix",
      "description": "Netflix Our Planet | Full episodes | WWF collaboration",
      "playlist_name": "Educational Documentaries | Netflix  Netflix",
      "videos": "netflix",
      "views": "360° Video"
    }
  ],
  "errors": [],
  "resume_variable": 1,
  "success_score": "100"
}