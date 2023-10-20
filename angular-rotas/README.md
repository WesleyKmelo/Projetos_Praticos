# AngularRotas

Projeto gerado com  [Angular CLI](https://github.com/angular/angular-cli) versão 14.1.2. para estudos de *Rotas em Angular*.

## Notas de Estudo

O roteamento de paǵinas em Angular segundo as boas práticas, é feito utilizando o arquivo principal da aplicação, no caso ***app-routing-module.ts***. É nesse arquivo onde são apontadas todas as rotas criadas na aplicação, que serão acessadas pelo usuário.

Para que os componentes possam ser enxergados pela aplicação é necessário a declaração dos mesmos na seção ***src/app.module.ts***. Lembrando que sempre que um componente é criado na aplicação, sempre deve ser declarado e importado pra que seja reconhecido na aplicação.

### Estrutura de uma rota
No arquivo de rotas ***(app-routing-module.ts)*** , é passado um objeto para a variavel que recebeu o objeto do tipo ***Routes*** da seguinte forma:
* `{path:'(caminho da rota)' , component: '(nome do componente)' }`
    * **ROTAS CORINGA** são rotas configuradas para redirecionar a aplicação caso algo indesejado seja digitado no navegador, por exemplo  *uma página 404* ou mesmo a pág *Home*:
        * `{path:"**", redirectTo:""}`

### ROUTER LINK

Em uma ***SPA(Single Page Application)***, é boa prática utilizar o parametro *[routerLink]* para navegação entre as páginas. Isso porque , esse parâmetro não restarta a aplicação ao contrário de um *href* por exemplo. Isso acrescenta rapidez no processamento da aplicação. A estrutura de um *routerLink* é a seguinte: `[routerLink]="página"`.

### RECUPERANDO PARAMETROS DAS ROTAS

Uma forma de recuperar parametros passados na rota é adicionando um parametro no path e em seguida injetando uma dependência de um objeto que seja do tipo *ActivatedRoute* no construtor do componente. Essa injeção de depndência vai permitir que seja acessada uma propriedade chamada *param* e é com ela que se consegue pegar o valor do parametro passado na rota. Na parte do código, onde são criadas   [todas as rotas](./src/app/app-routing.module.ts)  foi criado o parametro *"id"* no path do componente e no [próprio componente](./src/app/pages/portfolio/card/card.component.ts) foi criado a injeção de depedndência necessária.

O comando para recuperar o parametro deve conter uma referência para o nome da injeção de dependência que foi criada , seguida do *.params* seguido do *.subscribe(função)* 

Por exemplo: ` this.nomeDAInjeção.params.subscribe(res=>console.log(res))`

### QUERY PARAMETERS

São objetos passados pelo usuário na hora de acessar rotas . Geralmente são passados depois de todo caminho da rota, separados por *?*. E cada *Query Parameter* deve ser separado por um *&*. Por exemplo:

`https://www.meusite.com/id ?name=teste&token=123`

Para a aplicação receber esse valores, o procedimento é parecido, bastando apenas trocar o *params* por *queryParams*:

` this.nomeDAInjeção.queryParams.subscribe(res=>console.log(res))`







