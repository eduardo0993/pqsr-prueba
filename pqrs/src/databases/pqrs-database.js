const Pqrs = require("../models/pqrs-modelo");


// crear pqrs
const crearpqrs = async (data) => {
  const nuevaIdea = new Pqrs({
    tipo:data.tipo,
    descripcion:data.descripcion,
    estado:data.estado,
    fecha_registro: new Date(),
    autor: data.usuario_id,
    area:data.area,
    funcionario:data.funcionario
   });
  const resp = await nuevaIdea.save();
  return 'pqrs resgistrada';
};

// todas las pqrs para admin
const obtenerpqrs = async () => {
  return await Pqrs.aggregate([
    {
      $lookup: {
        from: "usuarios",
        localField: "autor",
        foreignField: "id",
        as: "usuarios",
      },
    },
    {
      $project: {
        _id: 1,
        nombre: "$usuarios.nombres",
        apellido: "$usuarios.apellidos",
        tipo: 1,
        descripcion: 1,
        estado:1,
        fecha_registro: 1,
        area: 1,
        funcionario: 1
    
      },
    },
  ]);
};
//pqrs por usuario
const pqrsUsuarios = async (user) => {
  return await Pqrs.aggregate([
    {
      $match: { autor: user },
    },
    {
      $lookup: {
        from: "usuarios",
        localField: "autor",
        foreignField: "id",
        as: "usuarios",
      },
    },
    {
      $project: {
        _id: 1,
        nombre: "$usuarios.nombres",
        apellido: "$usuarios.apellidos",
        tipo: 1,
        descripcion: 1,
        estado:1,
        fecha_registro: 1,
        area: 1,
        funcionario: 1
      },
    },
  ]);
};

//filtrar pqrs por tipo
const filtrarpqrstipo = async (tipo) => {
  const res = await Pqrs.find({
    tipo:tipo
    
  })
  return res
};
//filtrar pqrs por area
const filtrarpqrsarea = async (area) => {
  const ar = await Pqrs.find({
    area:area
    
  })
  return ar
};

// actulizar el estado de la pqrs
const estadorpqrs = async (id,estado) => {
  const est = await Pqrs.updateOne({
    _id:id
   },{
    $set:{
      estado:estado
    }
  })
  
  return 'estado actualizado'
};



module.exports = {
  pqrsUsuarios,
  obtenerpqrs,
  crearpqrs,
  filtrarpqrstipo,
  estadorpqrs,
  filtrarpqrsarea

};
