/*
// hash mode: hashchange chrome bug
// bug: go from not found to home
*/
'use strict';

  // Main class
  module.exports = class Router {


    constructor(routs) {

      // set routs
      this.routs = routs;
      // set current URL
      this.currentUrl = '/';
      // set views folder
      this.viewPath = '/views/';
      // set page not found file
      this.notFound = '404.html';
      // get content for load pages
      this.routerContent = document.getElementById('router-content');
      // get all links
      this.links = document.getElementsByClassName('router-link');
    }

    // Check URL mode
    setUrlMode() {
      return window.history ? 'history' : null;
    }

    // Register click event on links
    getRouterLinks(registerNav) {
      for (let x = 0; x < this.links.length; x++) {
        this.links[x].addEventListener('click', registerNav, true);
      }
    }

    setActiveLink(path) {
      for (let x = 0; x < this.links.length; x++) {
        this.links[x].classList.remove('active');
      }
      let link = document.querySelectorAll(`a[href='${path}']`);
      path ? link[0].className += ' active' : null;
    }

    // Use links when history mode is available
    linksHistory() {
      let registerNav = e => {
        e.preventDefault();
        e.stopPropagation();

        // check if url change
        if (this.currentUrl !== e.target.pathname) {
          history.pushState({page: 1}, 'title 1', e.target.pathname);
          this.fetchHtml(e.target.pathname);
          this.setActiveLink(window.location.pathname);
          this.currentUrl = e.target.pathname;
        }
      };
      this.getRouterLinks(registerNav);
    }

    // Use links when hash mode is active
    linksHash() {
      let registerNav = e => {
        e.preventDefault();
        e.stopPropagation();

        //check if url change
        if (this.currentUrl !== e.target.pathname) {
          window.location.href = '/#' + e.target.pathname;
          this.fetchHtml(e.target.pathname);
          this.currentUrl = e.target.pathname;
        }
      };
        this.getRouterLinks(registerNav);
    }

    // Load custom script when path exist
    loadScripts(index) {
      this.routs[index].code ? this.routs[index].code() : null;
    }

    //get Rout Index
    getRoutIndex(path) {
      return this.routs.map((el) => el.route).indexOf(path);
    }

    // Fetch file when url path is ok
    fetchHtml(path) {
      // TODO get this as Router method
          let resource = this.routs[this.getRoutIndex(path)].resource;

          // clear router-content HTML element
          this.routerContent.innerHTML = '';
          // fetch page
          fetch(this.viewPath + resource).then((response) => {
            return response.text().then((text) => {
              this.routerContent.innerHTML = text;
            }).then(() => {
              this.loadScripts(this.getRoutIndex(path));
            });
          });
    }

    // Fetch 404.html when url path is wrong
    fetch404() {
      var routerContent = document.getElementById('router-content');
      routerContent.innerHTML = '';
      fetch(this.viewPath + this.notFound).then((response) => {
        return response.text().then((text) => {
          routerContent.innerHTML = text;
        });
      });
    }

    // Check if route exist
    checkRouteExist(path) {
      return this.routs.map((el) => el.route).includes(path);
    }

    // Main method to run history mode
    runHistoryMode() {
      this.linksHistory();
      if (this.checkRouteExist(window.location.pathname)) {
        this.fetchHtml(window.location.pathname);
        this.setActiveLink(window.location.pathname);
      } else {
        this.fetch404();
      }
    }

    // Main method to run hash mode
    runHashMode() {
      this.linksHash();
      window.location.hash = '/';
      this.links[0].className += ' active';

      window.addEventListener('hashchange', () => {
        if (this.routs.map((el) => el.route).includes(window.location.hash.replace('#', ''))) {
          this.fetchHtml(window.location.hash.replace('#', ''));
          this.setActiveLink(window.location.hash.replace('#', ''));
        } else {
          this.fetch404();
        }
      }, false);
    }

    // Activate Router
    navigate() {
        this.setUrlMode() === 'history' ? this.runHistoryMode() : this.runHashMode();
    }

  };
