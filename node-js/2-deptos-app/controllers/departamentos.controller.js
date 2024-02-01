const {data} = require('../db/data')

exports.getAllDepartamentos = (req, res) => {
    res.send(data);
}

exports.getDepartamentoById = (req, res) => {
    const departamento = data.findIndex(depto => depto.id == req.params.deptoId);

    if(departamento != -1) {
        res.json({
            status: res.statusCode,
            depto: data[departamento]
        })
    } else {
        res.json({
            status: 404,
            message: 'Departamento solicitado, fuera de indice'
        })
    }
}

exports.createDepartamento = (req, res) => {
    const deptoRequest = req.body;
    const idx = data.findIndex( depto => depto.ciudad == deptoRequest.ciudad);

    if(idx === -1) {
        departamentos = [...data, deptoRequest];
        res.status(201).json({
            status: 201,
            data: departamentos
        })
    } else {
        res.status(409).json({
            status: 409,
            message: `El Departamento con nombre ${deptoRequest.ciudad} ya existe`
        })
    }
}


