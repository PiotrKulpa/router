describe("Router", function() {

  var routs = [
    {route: '/', resource: 'home.html'},
    {route: '/contact', resource: 'contact.html'},
    {route: '/about', resource: 'about.html'},
    {route: '/blog', resource: 'blog.html'}
  ];
  var router = new Router(routs);



  it("should be defined", function() {
    expect(router).toBeDefined();
  });

  it("should have method setUrlMode", function() {
    expect(router.setUrlMode).toBeDefined();
  });

  it("should set default mode", function() {
    expect(router.setUrlMode()).toEqual('history');
  });

  it("should set not found to 404.html", function() {
    expect(router.notFound).toEqual('404.html');
  });

  it("routs should be defined", function() {
    expect(router.routs).toBeDefined();
  });

  it("current Url should be '/'", function() {
    expect(router.currentUrl).toEqual('/');
  });

  it("fetch html", function() {
    spyOn(router, "fetchHtml");
    router.fetchHtml('/contact');
    expect(router.fetchHtml).toHaveBeenCalled();
    expect(router.fetchHtml).toHaveBeenCalledWith('/contact');
  });

  it("should set default mode to hash", function() {
    router.setUrlModeToHash  = function () {return 'hash'};
    expect(router.setUrlModeToHash()).not.toEqual('history');
  });

  it("should change default location path", function() {
    var newPathname = '/test'
    expect(router.currentUrl).not.toEqual(newPathname);
  });

  it("should have path /contact", function() {
    expect(router.checkRouteExist('/contact')).toBeTruthy();
  });

  it("should not have path /test", function() {
    expect(router.checkRouteExist('/test')).toBeFalsy();
  });

  it("should have route number 1", function() {
    expect(router.getRoutIndex('/contact')).toEqual(1);
  });

  it("should set active class when contact is clicked", function() {
    let link = document.querySelectorAll('.router-link');
    console.log(link);
    expect(link[3].classList.contains('active')).toBeFalsy();
    link[3].click();
    expect(link[3].classList.contains('active')).toBeTruthy();
  });

  it("should set active class when home is clicked", function() {
    let link = document.querySelectorAll('.router-link');
    console.log(link);
    expect(link[0].classList.contains('active')).toBeTruthy();
    link[0].click();
    expect(link[0].classList.contains('active')).toBeTruthy();
  });

});
