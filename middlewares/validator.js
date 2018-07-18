const ajv = require('ajv')({
  useDefaults: true,
  verbose: true,
  allErrors: true
})

module.exports = schema => (req, res, next)=> {
	const valid = ajv.validate(schema, req.body);
	if(!valid){
		const errors = []
		ajv.errors.map(error => {
			errors.push(`request data${error.dataPath} ${error.message}.`)
    });
		res.status(400).json(errors)
	} else {
		next()
	}
}