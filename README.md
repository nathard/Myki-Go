Myki-Go
=======

Myki-Go is an account management app for Myki's public transport services in Melbourne.  
Allows you to Top-Up and check Trip history, Top-up history and Balance.  


How it works:
-------------

Login using your myki pass number and 4 digit pin, Top-Up using credit card or voucher option.  
A Voucher concept has been added to demonstrate prepaid usage.

Limitations:
------------
The app is currently a prototype, the back-end uses a combination of php and xml for accounting logic.  
The model could be moved to scrape the site (much like existing balance apps) but due to 24 hour updates
and changes the site may have the development is on hold 'until' they release an api.

Build instructions:
-------------------
The SDK for sencha framework is not in the repository (as its 10k+ files) it is required for build.  
You can obtain the SDK from the Sencha web site.

To do:
-------
Add barcode scanning for voucher concept.  
Complete Google maps integration for Myki Machine Locator.
