import { AbstractView } from "../../common/view.js";
import onChange from "on-change";


export class MainView extends AbstractView
{
    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0
    }
    constructor (appState = {
        favorites: []
    })
    {
        super()
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this))
        this.setTitle("Поиск книг")
    }
    appStateHook(path)
    {
        console.log(path)
        if (path === "favorites") {
            // this.render()
        }
    }
    render()
    {
        const main = document.createElement("div");
        main.innerHTML = `Число книг: ${this.appState.favorites.length}`;
        console.log(this.app)
        this.app.innerHTML = "";
        this.app.appendChild(main);
        this.appState.favorites.push("")
    }
}