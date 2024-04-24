This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

Neste projeto podemos encontrar todas as funcionalidades básicas presentes em um CRUD simples e um sistema de login.

Ao acessar o a URL root do projeto nos deparamos com a tela de login:
![image](https://github.com/Vinicius-Chagas/desafio_mindgroup_frontend/assets/78155214/4f2d0959-549e-4935-983d-74e5fd2fa14d)

Na tela de login temos duas possibilidades. Caso o usuário já possua uma conta cadastrada, poderá preencher o email e senha e logar no aplicativo, caso não possua uma conta, poderá clicar no "Não tem uma conta? Crie uma !" para ser redirecionado para a tela de registro demonstrado abaixo:
![image](https://github.com/Vinicius-Chagas/desafio_mindgroup_frontend/assets/78155214/5e8322dc-8657-45c1-bf6b-8b4bb4352b5a)

Após preencher todos os campos, o usuário terá criado uma conta e será redirecionado novamente para a tela de login, onde poderá logar.

Em seguida, temos uma galeria onde podemos visualizar todos os itens cadastros e performar algumas ações:
![image](https://github.com/Vinicius-Chagas/desafio_mindgroup_frontend/assets/78155214/559e99e5-eb45-4ff8-a2cd-e394a12c842a)

Neste tela, no canto superior direito temos um botão de voltar que nos redireciona de volta para a tela de login. 
No canto superior direito temos dois botões, um que nos redireciona para a tela de Novo produto, onde podemos adicionar um novo produto e outro botão que nos redireciona para a tela novo estoque, onde podemos cadastrar um estoque para o produto.
Além desses botões, temos um lapis e uma lixeira em cada item da galeria, o lapis nos redireciona para a tela de atualização de produto, onde podemos atualizar as informações de um produto e a lixeira gera um popup de confirmação, que ao selecionado, exclui o item.

Tela de cadastro de produtos:
![image](https://github.com/Vinicius-Chagas/desafio_mindgroup_frontend/assets/78155214/0492df05-479f-4ab9-bd59-11e3c8d5713f)

Tela de atualização de produtos:
![image](https://github.com/Vinicius-Chagas/desafio_mindgroup_frontend/assets/78155214/1fb2c9c3-e4f5-4e89-a197-f99989c9fb87)

Tela de estoque:
![image](https://github.com/Vinicius-Chagas/desafio_mindgroup_frontend/assets/78155214/f3b50213-4874-47d4-92b5-aaba94442e64)

Exclusão de produtos:
![image](https://github.com/Vinicius-Chagas/desafio_mindgroup_frontend/assets/78155214/de968290-5704-4b97-8c4b-81c7b0a0be5f)



