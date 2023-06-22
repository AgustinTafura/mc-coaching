// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const client = require("@mailchimp/mailchimp_marketing");

export default function handler(req, res) {

    client.setConfig({
        apiKey: "2da119ab5fb6fa49a2bcb326ece6d84f-us2",
        server: "us2",
    });

    const run = async () => {
        const response = await client.lists.addListMember("6493dd146b", {
            email_address: "atafura@gmail.com",
            status: "subscribed",
        });
        console.log(response);
    };

    try {
        run();

    } catch (error) {
        console.log(333, error)
    }
    res.status(200).json({
        name: 'John Doe'
    })
}