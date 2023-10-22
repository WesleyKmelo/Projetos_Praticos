# AngularServices

Projeto gerado com  [Angular CLI](https://github.com/angular/angular-cli) versão 14.1.2. para estudos de *Services em Angular*.

### Descrição Projeto prático 

Este projeto consome uma api do Site [Poke Api](https://pokeapi.co/), que fornece dados sobre os pokemons. 

Um pequeno card com uma entrada de texto e um botão que pesquisa e entrega dados sobre o pokemon desejado.

## Notas de Estudo

Os *Services* dentro do Angular são arquivos responsáveis por fazer a comunicação da aplicação com o mundo externo.

É nessa camada onde são configuradas *API's* que são necessárias para fornecer dados solicitados na aplicação.

UMA DAS BOAS PRÁTICAS DE PROGRAMAÇÂO pede que *url's*, senhas ou outros dados que sejam constantes, sejam gravadas em uma seção da aplicação chamada *[environment](./src/environments/environment.ts)* e que a parte de lógica da aplicação seja executada na seção de *[services]()*

### ESTRUTURA DE UM SERVICE

O service para funcionar deve ser injetado como uma depedência no componente que vai consumir os dados da sua lógica. Esses dados devem ser trabalhados dentro do *constructor* do componente.

Um arquivo *service* importa a interface *Injectable* do `@angular-core`. Em seguida uma seção que informa em que parte da aplicação ele pode ser injetado.Para toda a aplicação geralmente é utilizado *"root"* . Ex: `providedIn:'root'`

A lógica de acesso a api deve ser feito no *service* como boa prática de programação, mas não impede que possa ser feito direto no componente.

PARA O SERVICE SE COMUNICAR COM UMA API É NECESSÁRIO QUE O MÓDULO HTTPCLIENT ESTEJA IMPORTADO NA SEÇÃO ***[APP.MODULE](src/app/app.module.ts)*** DA APLICAÇÃO.

### Tratamento dos Dados de um SERVICE 

Se o service requisitar algum dado de uma api externa, como *HTTP CLient*, o retorno vai ser um objeto do Tipo *Observable*. É como se fosse uma PROMISE(promessa) do JavaScript feita sem *await*, ou seja, o Objeto do tipo *Observable* é objeto bruto sem dados tratados.

Para receber os dados de uma api externa é necessaŕio que no *service* do componente seja criado um objeto do tipo *Observable*. Além disso nos métodos , é necessário dizer que o tipo de retorno do método tem que ser um *Observable* e que esse *observable* vai perceber dados previamente cadastrados em certos modelos . No caso dessa aplicação, esse é o [modelo utilizado](src/app/models/PokemonData.ts)

No componente deve ser criado um metodo *subscribe* que vai solicitar ao *Observable* que pesquise aquele argumento que tá sendo passado. O Observable é como se fosse um canal de YouTube onde ele só permite que se veja seu conteudo se for inscrito. No caso a inscrição é feita no arquivo *service* e depois disso é que o método *subscribe* que é feito no componente
é aceito.