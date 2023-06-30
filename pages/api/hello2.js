// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const client = require("@mailchimp/mailchimp_marketing");
const axios = require("axios");

export default function handler(req, res) {

    const formData = {
        "1841": "John Mayer",
        "1837": "correo@ejemplo.com",
        "2037": "2244123123",
        "1845": "Este es un mensaje de prueba",
      };

    const run = async () => {
        axios
            .post("https://us2.list-manage.com/contact-form?u=e189a517f55a714f9692514ed&form_id=02584a83a628214146daa6f37530756d", formData)
            .then((response) => {
                console.log(888, response)
                res.json({"Respuesta": response.data});
            })

    };

    try {
        run();

    } catch (error) {
        console.log(333, error)
        res.json({
            error
        })
    }

}