var express = require('express');
var router = express.Router();
var personas = [
  { dni: '25402102', nombre : 'Jaime Suarez', edad: 25, gs: 'A+' , alergias: 'No posee'},{ dni: '25402102', nombre : 'Jaime Suarez', edad: 25, gs: 'A+' , alergias: 'No posee'}{ dni: '25402102', nombre : 'Jaime Suarez', edad: 25, gs: 'A+' , alergias: 'No posee'}{ dni: '25402102', nombre : 'Jaime Suarez', edad: 25, gs: 'A+' , alergias: 'No posee'} ];  

router.get('/', function(req, res, next) {
  res.render('ficha', { title: 'Ficha médica' });
});

router.get('/:dni',function(req,res,next){

	let numDni = req.params.dni;
	res.render('ficha', { title: 'dni '+ numDni });
	
 
});

module.exports = router;