export class AbstractView
{
    constructor ()
    {
        this.app = document.querySelector("#root")
    }
    setTitle(title)
    {
        document.title = title
        console.log(this.app)
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