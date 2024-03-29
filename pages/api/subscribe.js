// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const client = require("@mailchimp/mailchimp_marketing");

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
      }
    const { FNAME, LNAME, EMAIL, MOBILE, SERVICE, MESSAGGE } = req.body;
    client.setConfig({
        apiKey: process.env.API_KEY_MAILCHIMP,
        server: "us2",
    });

    const run = async () => {
        try {
            let merge_fields = {
                FNAME, //required
                LNAME, //required
                EMAIL,
                MOBILE, //required
                MESSAGGE,
            }
            const data = {
                email_address: EMAIL, //required
                status: "subscribed",
                merge_fields,
                message: MESSAGGE,
                tags: [SERVICE],
                // skip_merge_validation: true
            }
            const response = await client.lists.addListMember("6493dd146b", data);
            res.status(200).json(response)
        } catch (error) {
                let response = error.response.body
                res.status(400).json({response})  
            // }
        }
    };

    run();

}