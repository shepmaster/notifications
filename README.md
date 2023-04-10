# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

`ruby 3.1.2p20 (2022-04-12 revision 4491bb740a) [arm64-darwin21]`

* Rails version

`Rails 7.0.4.3`

* Steps to repeat bug

  - run migrations and start the server
  - visit `localhost:3000`
  - create a few notifications via the button
  - reload the page for a fresh html load
  - click on one of the unread notifications and note that you are redirected to the notifications#show page
  - go back and create a few more notifications via the button
  - at this point you can inspect the html and notice that the forms for the notifications loaded via HTML have a hidden `authenticity_token`input while the notifications loaded via turbo stream are missing these inputs
  - attempt to click on one of the notifications loaded via turbo stream and you get the `Can't verify CSRF token authenticity.` error
