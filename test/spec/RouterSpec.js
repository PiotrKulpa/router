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
});
