# swiftcalc
Learning React Native. 
A calculator that shows your UK net salary after tax and NI for either the 2019/20 or 2020/21 year.  
![screenshot](public/androidscreenshot.png)
## Built With
* Create Native React App
* Javascript
* Expo
## Tested With
* Jest

## Installation
Clone the app and navigate into the directory
````
git clone https://github.com/TheDancingClown/swiftcalc
cd swiftcalc
````
Install Expo CLI
````
npm install -g expo-cli
````
## To Use
````
expo start
````
Follow the instructions to either scan the QR code to run on device (need to install Expo on your device), run in browser or on an emulator (needs xCode or Android Studio)
## Specifications
```
As an employee,
So I can plan a post lockdown holiday,
I want to calculate my take home pay after tax
````
````
As an employee,
So I can better understand my salary raise,
I want to calculate my take home for the following year
````
````
As an employee,
So I can prepare for my yearly review,
I want to calculate a minimum salary from my required take home pay
````
````
As a job seeker,
So I can narrow my job requirements,
I want to calculate salary from take home pay for the next year
````
## Areas to improve
* Extract react components for cleaner code/maintainability and use props for data transfer
* Store tax rates in a json instead of new calculator classes - easier to maintain
* Fix method for reverse calculator to improve speed
* Make it clearer whether to input monthly/yearly figures
* Add more ouput options to show weekly/monthly/annual
