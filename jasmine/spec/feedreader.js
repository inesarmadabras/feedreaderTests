/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {

     describe("RSS Feeds", function() {
        it("are defined", function() {
            expect(allFeeds).toBeDefined();
            //test: allFeeds is defined
            expect(allFeeds.length).not.toBe(0);
        });

        /* loops through each feed in the allFeeds object and ensures
         * it has a URL defined and that the URL is not empty.
         */
        it("should have a URL defined", function() {
            allFeeds.forEach(function(feeds) {
                //test: allFeeds object has a URL defined
                expect(feeds.url).toBeDefined();
                //test: the URL is not empty
                expect(feeds.url.length).not.toBe(0);

            });
        });
        /* loops through each feed in the allFeeds object and
         * ensures it has a name defined and that the name is not empty.
         */
        it("should have a name defined", function() {
            allFeeds.forEach(function(feeds) {
                //test: allFeeds object has a name defined
                expect(feeds.name).toBeDefined();
                //test: the name is not empty
                expect(feeds.name.length).not.toBe(0);
            });
        });
    });

    describe("The Menu", function() {

        it("should be hidden by default", function() {
            //test: the menu is hidden by default
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

        it("should change visibility when the menu icon is clicked", function() {
            //test: does the menu display when clicked
            $(".menu-icon-link").trigger("click");
            expect($("body").hasClass("menu-hidden")).toBe(false);
            //test: does the menu hide when clicked again
            $(".menu-icon-link").trigger("click");
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });
    });

    describe("Initial Entries", function() {
        // "loadFeed function is called with a callback "done"
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        /* Once loadFeed function is called and completes its work,
         * there is at least one .entry element within the .feed
         * container.
         */
        it("should have at least one entry", function(done) {
            var entries = $('.feed').find('.entry');
            expect(entries.length >= 1).toBe(true);
            done();
        });
    });

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
                PrevContent = $('.header-title').text() + $('.feed').find('.entry').text().replace(/ +/g, " ");
                // Load second feed at index 1
                loadFeed(1, function() {
                    // Set the UpdContent to content of new feed
                    UpdContent = $('.header-title').text() + $('.feed').find('.entry').text().replace(/ +/g, " ");
                    done();
                });
            });
        });
        //Compare: the updated content isn't matching with the previously stored content
        it("the content displayed should be updated", function(done) {
            expect(PrevContent).not.toBe(UpdContent);
            done();
        });
    });
}());