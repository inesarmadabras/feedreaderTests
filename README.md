## FeedReader Tests with a JavaScript testing framework
### Web Development Frond-End Nanodegree - Udacity  - [Check the Project Review](https://review.udacity.com/#!/reviews/265287/shared)

This project is a web-based application that reads RSS feeds. It uses the framework [Jasmine](http://jasmine.github.io/).

###Jasmine?
Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests. 

## How to run?

Download repository to your computer. Open file index.html in browser. The test results will be displayed at the bottom of the page.
The spec file is in **./jasmine/spec/feedreader.js**

## What I've done to complete this project?

[Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Review the functionality of the application within your browser.
4. Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Return the `allFeeds` variable to a passing state.


8. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
9. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
10. Write a new test suite named `"The menu"`.
11. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Write a test suite named `"Initial Entries"`.
14. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. Write a test suite named `"New Feed Selection"`.
16. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. No test should be dependent on the results of another.
18. Callbacks should be used to ensure that feeds are loaded before they are tested.
19. Implement error handling for undefined variables and out-of-bound array access.
20. When complete - all of your tests should pass.
21. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.

## Resubmission:
`TODO` comments removed;

`l.58` Initial Entries test:
```javascript
    it("should have at least one entry", function(done) {
            var entries = $('.feed').find('.entry');
            expect(entries.length >= 1).toBe(true);
            done();
        });
```
`l.74` News Feed test:
 it's now independent of the previous test
```javascript
  describe("New Feed Selection", function() {
      var PrevContent;
      var UpdContent;
      //get the previous content into a variable and load (update) the new content
      beforeEach(function(done) {
          // there is at least two feeds
          expect(allFeeds.length >= 2).toBe(true);

          // Load the first feed at index 0
          loadFeed(0, function() {
              // Set the PrevContent to content of feed
              PrevContent = $('.header-title').text() + $('.feed').find('.entry').text().replace(/ +/g, " ")
              // Load second feed at index 1
              loadFeed(1, function() {
                  // Set the UpdContent to content of new feed
                  UpdContent = $('.header-title').text() + $('.feed').find('.entry').text().replace(/ +/g, " ");
                  done();
              });
          });
      });
``` 

## What you'll see?
![Jasmine Results](https://inesarmadabras.github.io/feedreaderTests/result.png "Jasmine Results")

## Update (08/11/2016)
`l.45` `toBeFalsy()` instead of `.toBe(false);` and  `toBeTruthy()` instead of `.toBe(true);` - Just because it sounds fancy ^.^

`l.69 & l.80`  `toBeGreaterThan()` instead of `expect(entries.length >= 1).toBe(true);`

`l.70` `done()` removed, because there's no async functions inside this function.

