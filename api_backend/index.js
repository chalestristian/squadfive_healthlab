const express = require('express');
const routes = require('./routes/routes');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_doc.json');
const app = express();

routes.get('/', (req, res) => {
  // #swagger.tags = ['ROTA PRINCIPAL / INDEX'] 
  res.status(200).json({ mensagem: 'Não tem nada por aqui :) | Para mais informações, acesse a documentação em /documentacao' })
});

app.use(express.urlencoded({ extended: false }));
app.use('/documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(routes);
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);