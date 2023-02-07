const validator = require('../helper/validate');
const valContact = async (req, res, next) => {
    const validationRule = {
        "name": "required|string",
        "motto": "required|string",
        "logo": "required|string",
        "street": "required|string",
        "city": "required|string",
        "state": "required|string",
        "zipcode": "required|string",
        "rating": "required|string",
        "website": "required|string",
        "email": "required|email"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch( err => console.log(err))
}
module.exports = {
    valContact
};