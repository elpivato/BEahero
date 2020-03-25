const express = require('express');

const app = express ();

app.use(express.json());

app.get('/users', (request,response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Giovani Pivato'
    });
});

app.listen(3333);
