# CIS 371 Final Project - Aircraft Rental Web Application
## Overview
The goal of this project is to create a simple interface where users may sign in and access a table of aircraft available for rent during a given week.  Users may select available aircraft along with a given date and time, after which the aircraft is made unavailable to other users for the time specified by that user.  Users will also have access to forecast data for their selected day, as well as daily METAR data.  Users will be able to view current rentals held by their account, where they can modify the rental date/time as is available or cancel their rental if they wish.

## Third-party Web Services Used
- Auth0 API - Used as the primary user login service
- AWC Text Data Server - Used to receive aviation weather data from the National Weather Service.  This includes METARs and TAFs as they are available
