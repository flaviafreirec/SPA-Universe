export  class Router {
    
    //criando objeto vazio que recebe as rotas
    routes = {}

    //método para criar rotas
    add(routName, link) {
        this.routes[routName] = link //seria o equivalente ao dot notation, ex routes.names: link
    }

    route(event) {
        event = event || window.event 
        event.preventDefault() //evitando que a pagina siga para url ao clicar

        windows.history.pushState({}, "", event.target.pathname)

        this.handle()

    }

    handle() {
        const { pathname } = window.location // mesmo que fazer const pathname = window.location.pathname
        const route = this.routes[pathname] || this.routes[404] // mesmo que fazer this.routes.nomedarota, porem tem o / e precisa [] pra acessar

        fetch(route)
        .then(dataToText => dataToText.text())
        .then(html => {
            document.querySelector('#main').innerHTML = html
        })
    }

}