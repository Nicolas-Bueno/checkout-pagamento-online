# Página de Pagamento do Site de Compras

Este documento descreve a implementação da página de pagamento de um site de compras. A página permite aos usuários escolher entre duas opções de pagamento: Pix ou Cartão de Crédito. Além disso, o valor total a ser pago é calculado com base em descontos ou juros aplicados, conforme a escolha do método de pagamento.

## Funcionalidades

- **Seleção de Método de Pagamento:** Os usuários podem escolher entre duas opções de pagamento: Pix ou Cartão de Crédito, usando botões de rádio.

- **Campos Dinâmicos:** Dependendo da opção de pagamento selecionada, os campos específicos são exibidos dinamicamente na página. Por exemplo, se "Pix" for escolhido, um campo para inserir a "Chave Pix" será exibido; se "Cartão de Crédito" for escolhido, os campos para o "Número do Cartão" e a "Data de Validade" serão mostrados.

- **Cálculo do Valor Total:** O valor total a ser pago é calculado com base no valor original da compra e em descontos ou juros aplicados, dependendo do método de pagamento escolhido.

- **Processamento do Pagamento:** Quando o usuário clica no botão "Pagar", a lógica de pagamento apropriada é acionada, processando o pagamento de acordo com o método selecionado.

## Exemplo de Uso

- Selecione o método de pagamento desejado (Pix ou Cartão de Crédito) usando os botões de rádio.

- Preencha os campos necessários com as informações relevantes, como a Chave Pix ou os detalhes do cartão de crédito.

- Insira o valor total da compra.

- Clique no botão "Pagar" para iniciar o processo de pagamento.

- O resultado do pagamento (sucesso ou falha) será exibido na página.

- O valor total efetivamente pago será calculado com base nos descontos ou juros aplicados, conforme a opção de pagamento escolhida.

## Tecnologias Utilizadas

- HTML5 e CSS3 para a estrutura e o estilo da página.

- JavaScript para a lógica de pagamento e manipulação de eventos.

## Wireframes

Aqui estão os wireframes da página de pagamento:

![Wireframe 1] (wire1.png)

![Wireframe 2] (wire2.png)



## Nota

Este é um exemplo simplificado e não deve ser usado para fins de produção. A implementação real de um sistema de pagamento online deve incluir medidas de segurança e integração com serviços de pagamento.

Para a implementação completa e segura de um sistema de pagamento, consulte um desenvolvedor web experiente ou utilize bibliotecas e frameworks de pagamento confiáveis.

## Autor

- Nome: Nicolas Brian 
- Email: nicolasbrian202@gmail.com

