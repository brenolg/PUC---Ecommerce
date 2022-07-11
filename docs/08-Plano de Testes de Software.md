# Plano de Testes de Software

**CT-1 Header**

| Caso de Teste | CT-01 - Header |
| --- | --- |
| Requisitos Associados |
- RF-1
 |
| Objetivo do Teste | Verificar se o header apresenta todas as características necessárias para seu correto funcionamento. |
| Passos |
1. Clicar em Blusas/Calças/Acessórios deve redirecionar para os produtos
2. Clicar na logo, para redirecionar à página principal
3. Clicar no ícone do carrinho, com o carrinho vazio
4. Adicionar produtos ao carrinho, clicando nos produtos da listagem e adicionando
5. Clicar no ícone do carrinho
 |
| Critérios de Êxito |
- A navegação de todos as páginas do header devem estar corretas
- Carrinho vazio deve apresentar um alerta de carrinho vazio
- Deve exibir corretamente a quantidade de produtos ao lado do ícone do carrinho
- Ao clicar no ícone do carrinho deve abrir o carrinho com os produtos
 |

**CT- 2 Footer**

| Caso de Teste | CT- 2 Footer |
| --- | --- |
| Requisitos Associados |
- RF-4 - Cadastro de e-mail para promoções
- RF-5 - Informações empresariais e institucionais
- RF-6 - Copyright
- RF-9 - Mapa
 |
| Objetivo do Teste | Checar responsabilidade e navegabilidade do Footer. |
| Passos |
1. Acessar o site e descer até o footer.
2. Clicar nos links institucionais e de contato.
3. Os links ao serem clicados, devem encaminhar para os seus respectivos destinos.
4. Checar responsabilidade com o console do navegador.
5. Checar informações do Copyright.
 |
| Critérios de Êxito |
- Os links das páginas institucionais no Footer devem levar para as páginas corretas.
- Os links de contato no Footer devem levar para os contatos corretos.
- O Footer deve conter um mapa com a localização da loja física.
- Função hover com alteração do CSS.
- Responsabilidade sem break -points.
- Copyright com informações da empresa desenvolvedora.
 |

**CT-3 WhatsApp Float Icon**

| Caso de Teste | CT-3 WhatsApp Float Icon |
| --- | --- |
| Requisitos Associados |
- RF-7 Botão WhatsApp
 |
| Objetivo do Teste | Verificar se o botão flutuante está funcionando corretamente. |
| Passos |
1. Acessar o site
2. Clicar no botão flutuante do WhatsApp no canto inferior direito.
3. O botão ao ser clicado deve encaminhar o usuário para o contato da loja no WhatsApp Web.
4. Checar se a mensagem destinada ao contato está correta.
 |
| Critérios de Êxito |
- O botão deve levar o usuário para o contato da loja no WhatsApp Web com a mensagem pré-programada correta.
 |

**CT-4 Política de privacidade Float Icon**

| Caso de Teste | CT-4 Política de privacidade Float Icon |
| --- | --- |
| Requisitos Associados |
- RF-8 Colher Aceite Termos
 |
| Objetivo do Teste | Verificar se as funcionalidades do pop-up estão funcionando corretamente. |
| Passos |
1. Acessar o site
2. Verificar se o pop-up aparecerá na parte inferior da tela
3. Checar se as informações estão corretas
4. Clicar no link e conferir o destino para as políticas de privacidade
5. Clicar no botão e verificar se o pop-up é fechado
6. Atualizar a página e verificar se o pop-up não aparecerá novamente
 |
| Critérios de Êxito |
- O link do pop-up deve levar para a página de políticas de
privacidade
- Os recursos do pop-up devem funcionar corretamente.
 |

**CT-5 Main\&gt; Banners**

| Caso de Teste | CT-5 Main \&gt; Banners |
| --- | --- |
| Requisitos Associados |
- RF-2
 |
| Objetivo do Teste | Verificar se a exibição dos banners no carrossel está fazendo rolagem automática e manual pela seta. |
| Passos |
1. Acessar o Site
2. Visualizar a troca dos banners automaticamente até chegar à primeira imagem do carrossel
3. Clicar na seta da direita
4. Clicar na seta da esquerda
5. Aguardar novamente a troca automática dos banners
 |
| Critérios de Êxito |
- A troca automática dos banners deve estar sendo feita corretamente
- Clicar nas setas laterais de navegação nos banners deve estar funcionando corretamente
- Não há necessidade de redirecionamento ao clicar no banner
 |

**CT-6 Main\&gt; Lista de Produtos em promoção**

| Caso de Teste | CT-6 Main \&gt; Lista de Produtos em Promoção |
| --- | --- |
| Requisitos Associados |
- RF-3 Main Vitrines
 |
| Objetivo do Teste | Verificar se a lista de produtos em promoção apresenta todos os recursos necessários para o funcionamento constante, independente das mudanças no DB |
| Passos |
1. Acessar o site
2. Clicar num item em promoção que deve redirecionar para a página do produto
3. Adicionar um item no banco em promoção deve atualizar a home
4. Retirar um item de promoção deve remover o produto da home
5. Preço do produto apresentado deve ser correspondente a o preço dele no banco após a aplicação da promoção
6. Imagem, nome, preço e desconto devem corresponder às mesmas informações no DB
 |
| Critérios de Êxito |
- Os produtos devem encaminhar para suas respectivas páginas ao serem clicados
- Ao passar o mouse sobre o produto deve ocorrer um efeito do CSS
- Ao trocar o preço da promoção no banco ele deve ser trocado também na tela
- Ao tornar a promoção false no banco o produto deve ser retirado da tela
- Ao tornar a promoção true no banco em determinado produto, ele deve ser inserido na tela
 |

**CT-7 Lista de produtos (Blusas, Calças e Acessórios)**

| Caso de Teste | CT-7 Lista de Produtos (Blusas, calças e acessórios) |
| --- | --- |
| Requisitos Associados |
- RF-3 Main Vitrines
 |
| Objetivo do Teste | Verificar se a lista de produtos em suas respectivas categorias apresenta todos os recursos necessários para o funcionamento constante |
| Passos |
1. Acessar o site
2. Clicar no Header em Blusas, Calças ou Acessórios para que a página da categoria abra
3. Clicar no produto para ser encaminhado para sua página de detalhe
4. Mesmo os produtos em promoção devem ser exibidos na listagem
5. Adicionar um produto no banco
6. Remover um produto do banco
 |
| Critérios de Êxito |
- Os links no header devem levar para as categorias corretas
- Os produtos nas listas devem estar listados nas categoria corretas
- O produto ao ser clicado deve levar para sua página de detalhe
- Caso o preço do produto mude, ele também deve alterar na tela
- Caso o produto seja removido, é para que ele seja removido da lista
- Caso um produto seja adicionado, é para que ele seja incluído na lista
 |

**CT-8 Footer\&gt; Ofertas Cadastre-se**

| Caso de Teste | CT-8 Footer \&gt; Ofertas Cadastre-se |
| --- | --- |
| Requisitos Associados |
- RF-4 Footer Cadastro Recebimento Promoção
 |
| Objetivo do Teste | Verificar se o cadastro para promoções está retornando sucesso no cadastro |
| Passos |
1. Acessar o site e ir ao Footer
2. Digitar nome e email
3. Verificar se é um e-mail válido ou não
4. Clicar em cadastrar
5. O programa deve abrir um pop-up avisando o sucesso do cadastro
 |
| Critérios de Êxito |
- Verificação de e-mail valido ou não
- Caso o e-mail seja válido, permitir o cadastro, caso contrário, informar ao usuário que ele deve cadastrar um e-mail válido
- Ao clicar em cadastrar, deve exibir o pop-up apontando o sucesso
 |

**CT -9 Footer \&gt; Institucional \&gt; Fale Conosco**

| Caso de teste | CT- 9 Footer \&gt; Institucional \&gt; Fale Conosco |
| --- | --- |
| Requisitos Associados |
- RF-10 Página sobre Fale Conosco
 |
| Objetivo do Teste | Checar Informações e se está integrado com e-mail |
| Passos |
1. Acessar o site e descer até o footer
2. Clicar no Fale Conosco para ser direcionado a página
3. Checar se as informações estão corretas
4. Verificar se as caixas de textos e o botão estão funcionando
5. verificar se quando envia a mensagem a mesma está chegando ao e-mail integrado

 |
| Critérios de Êxito |
- Informações Corretas
- Caixas de texto e botão funcionando
- e-mail sendo enviado ao e-mail integrado

 |

**CT- 10 Footer \&gt; Institucional \&gt; Quem Somos**

| Caso de Teste | CT- 10 Footer \&gt; Institucional \&gt; Quem Somos |
| --- | --- |
| Requisitos Associados |
- RF-14 - Página Quem Somos
 |
| Objetivo do Teste | Checar informações e responsividade da página. |
| Passos |
1. Acessar o site.
2. Desça até o footer e clique no link para o direcionamento da página.
3. Checar se as informações estão corretas.
4. Checar responsividade da página com o console do browser.
 |
| Critérios de Êxito |
- Informações disponíveis corretas
- Responsividade sem break points.
 |

**CT- 11 Footer \&gt; Institucional \&gt; Trocas e Devoluções**

| Caso de Teste | CT- 13 Footer \&gt; Institucional \&gt; Trocas e Devoluções |
| --- | --- |
| Requisitos Associados |
- RF-13 - Página de Trocas e Devoluções
 |
| Objetivo do Teste | Checar informações e responsividade da página. |
| Passos |
1. Acessar o site.
2. Desça até o footer e clique no link para o direcionamento da página.
3. Checar se as informações estão corretas.
4. Passar o mouse sobre os links e observar se ocorreu efeito no CSS.
5. Clicar nos links e conferir destinos.
6. Checar responsividade da página com o console do browser.
 |
| Critérios de Êxito |
- Informações disponíveis corretas
- Os links devem encaminhar para suas respectivas páginas ao serem clicados
- Ao passar o mouse sobre os links deve ocorrer um efeito do CSS.
- Responsividade sem break points.
 |

**CT-12 Footer \&gt; Institucional \&gt; Política de Privacidade**

| Caso de Teste | CT-12 Footer \&gt; Institucional \&gt; Política de Privacidade |
| --- | --- |
| Requisitos Associados |
- RF-15 - Página sobre Política de Privacidade
 |
| Objetivo do Teste | Checar informações e responsividade da página. |
| Passos |
1. Acessar o site.
2. Desça até o footer e clique no link para o direcionamento da página.
3. Checar se as informações estão corretas.
4. Passar o mouse sobre os links e observar se ocorreu efeito no CSS.
5. Clicar nos links e conferir destinos.
6. Checar responsividade da página com o console do browser.
 |
| Critérios de Êxito |
- Informações disponíveis corretas
- Os links devem encaminhar para suas respectivas páginas ao serem clicados
- Ao passar o mouse sobre os links deve ocorrer um efeito do CSS.
- Responsividade sem break points.
 |

**CT-13 Footer\&gt; Contato Telefone**

| Caso de teste | CT - 13 footer \&gt; Contato telefone |
| --- | --- |
| Requisitos Associados |
- RF-5 Footer sobre contato telefone
 |
| Objetivo do Teste | Checar informações e conferir se está redirecionando para o WhatsApp |
| Passos |
1. Acessar o site e descer até o footer
2. Clicar no botão WhatsApp Telefone
3. Verificar se foi redirecionado para a tela de Iniciar Conversa do WhatsApp
4. Verificar se as informações de contato estão corretas
 |
| Critérios de Êxito |
- Redirecionar a tela de iniciar conversa
- Informações corretas

 |

**CT-14 Footer\&gt; Contato E-mail**

| Caso de Teste | CT-14 Footer \&gt; Contato E-mail |
| --- | --- |
| Requisitos Associados |
- RF-5
 |
| Objetivo do Teste | Validar se está exibindo corretamente o e-mail no rodapé e ao clicar deve abrir o envio de e-mail default do computador |
| Passos |
1. Acessar o site
2. No rodapé, clicar no e-mail que fica dentro da coluna &quot;Contato&quot;
 |
| Critérios de Êxito |
- Clique no e-mail redirecionando corretamente ao aplicativo de envio de e-mail default do computador
- Texto do e-mail correto
 |

**CT-15 Footer\&gt; Contato Instagram**

| Caso de Teste | CT-15 Footer \&gt; Contato Instagram |
| --- | --- |
| Requisitos Associados |
- RF-15
 |
| Objetivo do Teste | Validar se está exibindo corretamente o nome do perfil do Instagram da loja no rodapé e ao clicar deve abrir em uma nova aba o perfil do Instagram |
| Passos |
1. Acessar o site
2. No rodapé, clicar no nome do perfil do Instagram que fica dentro da coluna &quot;Contato&quot;
 |
| Critérios de Êxito |
- Clique no nome do perfil deve abrir uma nova aba o perfil do Instagram
- Texto do perfil correto
 |

**CT-16 Footer\&gt; Mapa**

| Caso de Teste | CT-16 Footer \&gt; Mapa |
| --- | --- |
| Requisitos Associados |
- RF-9 Mapa Localização Ilustrativo
 |
| Objetivo do Teste | Checar se o mapa está cumprindo a função de localização da sede física do e-commerce |
| Passos |
1. Acessar o site e descer até o footer
2. Clicar em mapa ampliado e confirmar a ampliação
3. Clicar em imagens de satélite e verificar se elas abrem
4. Clicar em dados do mapa
5. Clicar nos termos de uso do mapa
6. Checar a opção de informar erro do mapa
7. Dar zoom
8. Retirar o zoom
 |
| Critérios de Êxito |
- O mapa ampliado deve redirecionar para o google maps
- As imagens de satélite deve mudar a visualização do mapa
- Os dados do mapa devem mostrar os créditos de uso
- Os termos de uso devem encaminhar para a página do google onde informa as políticas de uso do google maps
- A opção de informar erros deve redirecionar a página do google maps que registra os erros de localização
- O zoom in deve aumentar o zoom e o zoom out retirar
 |

**CT-17 Detalhes dos Produtos**

| Caso de Teste | CT-17 Detalhes dos Produtos |
| --- | --- |
| Requisitos Associados |
- RF-3
- RF-11
- RF-16
 |
| Objetivo do Teste | Deve estar exibindo as informações do produto corretamente de acordo com o armazenado na base de dados |
| Passos |
1. Acessar o site
2. Visualizar a lista de produtos, validando também as informações de cada produto
3. Clicar na imagem do produto para exibir os detalhes do produto
4. Clicar em &quot;Comprar&quot;
5. Selecionar o tamanho do produto
6. Clicar em &quot;Comprar&quot;
7. Selecionar a cor do produto
8. Clicar em &quot;Comprar&quot;
 |
| Critérios de Êxito |
- As informações exibidas na tela devem estar de acordo com o produto selecionado na lista
- Tentar comprar sem selecionar cor e tamanho devem apresentar um alerta na tela informando que a seleção é obrigatória
- Ao adicionar o produto corretamente no carrinho, deve remover a seleção que foi feita na cor e no tamanho
 |

**CT-18 Cadastro**

| Caso de Teste | CT-18 Cadastro |
| --- | --- |
| Requisitos Associados |
- RF - 17 - Página de cadastro
 |
| Objetivo do Teste | Checar navegabilidade, responsividade e funcionamento completo dos campos input. |
| Passos |
1. Acessar o site.
2. Clicar no link localizado no canto direito do header para direcionamento da página
3. Checar alterações no CSS ao passar o mouse nos links e inputs
4. Checar se senha está sendo mostrada ou escondida ao clicar no ícone de olho
5. Checar responsividade da página com o console do browser.
 |
| Critérios de Êxito |
- Os links devem encaminhar para suas respectivas páginas ao serem clicados
- Ao passar o mouse sobre os links deve ocorrer um efeito do CSS
- Ao passar o mouse sobre os inputs deve ocorrer um efeito do CSS
- Ao clicar no ícone sobre o input confirmar senha, a senha será revelada ou escondida.
- Caso o e-mail seja válido, permitir o cadastro, caso contrário, informar ao usuário que ele deve cadastrar um e-mail válido.
- Todos os campos inputs devem ser preenchidos caso contrário o cadastro não será realizado.
- Responsividade sem break points.

 |

**CT- 19 Carrinho**

| Caso de Teste | CT-19 Carrinho |
| --- | --- |
| Requisitos Associados |
- RF-1
 |
| Objetivo do Teste | Verificar se a funcionalidade de adicionar itens no carrinho de compras está funcionando. |
| Passos | 1. Acessar o Site2. Clicar em algum item disponível para venda3. Selecionar tamanho, cor e quantidade4. Clicar no ícone do carrinho no canto superior direito da página 5. Verificar se o item selecionado foi adicionado corretamente no carrinho de compras6. Verificar se é possível remover o item selecionado do carrinho de compras7. Verificar se o valor exibido no carrinho corresponde ao valor exibido do produto e os valores de desconto estão corretos. 8. Verificar se o ícone na lateral superior direita mostra a quantidade de itens inseridas no carrinho9. Verificar clique no ícone de carrinho quando ele estiver vazio, se aparecer o pop-up avisando que o carrinho está vazio. 10. Verificar se o botão para concluir a compra está presente. 11. Verificar se a página permite inserir um item no carrinho sem selecionar tamanho ou cor |
| Critérios de Êxito |
- Os produtos são adicionados ao carrinho apenas ao selecionar tamanho e cor, caso não ocorra dessa forma, a página exibe um pop-up solicitando que o cliente selecione.
- Ao clicar no ícone do carrinho de compras no canto superior direito, abre uma aba lateral exibindo tudo que foi adicionado.
- É possível remover itens do carrinho apenas clicando no botão de &quot;remover&quot; que fica na frente de cada produto.
- O valor exibido ao lado do ícone do carrinho é alterado de acordo com a quantidade de itens inseridos no carrinho.
- A medida que é inserido ou retirado itens do carrinho, o valor é calculado automaticamente.
 |

**CT- 20 Login**

| Caso de Teste | CT- 20 Login |
| --- | --- |
| Requisitos Associados |
- RF-1
 |
| Objetivo do Teste | Verificar se a página de login contém todas as características necessárias para cumprir sua função. |
| Passos | 1. Acessar o site2. Acessar a página de login3. Preencher os campos de e-mail e senha4. Checar se após o preenchimento, o campo permanece com as informações5. Verificar se existe o botão de &quot;entrar&quot;, o checkbox para permanecer conectado e o link para recuperação de senha. 6. Verificar se o checkbox está funcionando perfeitamente7. Verificar se ao digitar a senha, a informação fica oculta. |
| Critérios de Êxito |
- Após digitar todas as informações no campo, elas permanecem.
- Checkbox funcionando.
- Botão de &quot;Esqueceu sua senha?&quot; e &quot;Entrar&quot; presentes
- Senha oculta.
- Validação do sistema se os campos foram preenchidos corretamente.
 |
