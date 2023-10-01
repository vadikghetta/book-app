(function () {
    'use strict';

    class AbstractView
    {
        constructor ()
        {
            this.app = document.querySelector("#root");
        }
        setTitle(title)
        {
            document.title = title;
            console.log(this.app);
        }
        render()
        {
            return
        }
        destroy()
        {
            return
        }
    }

    class MainView extends AbstractView
    {
        constructor ()
        {
            super();
            this.setTitle("Поиск книг");
        }
        render()
        {
            const main = document.createElement("div");
            main.innerHTML = "test";
            console.log(this.app);
            this.app.innerHTML = "";
            // this.app.appendChild(main);
        }
    }

    class App
    {
        routes = [
            { path: "", views: MainView }
        ]
        constructor ()
        {
            window.addEventListener("hashchange", this.route.bind(this));
            this.route();
        }
        route()
        {
            if (this.currentView) {
                this.currentView.destroy();
            }
            const view = this.routes.find(r => r.path === location.hash).views;
            this.currentView = new view();
            this.currentView.render();

        }
    }

    new App();

})();
