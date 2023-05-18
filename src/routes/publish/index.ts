import { FastifyBaseLogger, FastifyInstance } from "fastify";
import * as dotenv from "dotenv";
import nodemailer, { Transporter } from "nodemailer";

import { PublishSchema, PublishType } from "../../schema/publish";

dotenv.config();

const createNodeMailer = () => {
    const email = process.env.EMAIL_LOGIN;
    const password = process.env.EMAIL_PASSWORD;
    const host = process.env.EMAIL_HOST;

    return nodemailer.createTransport({
        host: host,
        port: 587,
        secure: false,
        auth: {
            user: email,
            pass: password,
        },
    });
};

const sendMail = (maillist: any, subject: any, text: any, transporter: Transporter, log: FastifyBaseLogger) => {
    const mailOptions = {
        from: "Inno Center",
        to: maillist,
        subject: subject,
        text: text,
    };

    log.info(JSON.stringify(mailOptions));

    return transporter.sendMail(mailOptions);
};

export default async function (fastify: FastifyInstance) {
    fastify.post<{ Body: PublishType }>(
        "/",
        {
            schema: {
                description: "This is an endpoint for application health check",
                tags: ["health"],
                response: {
                    200: {
                        description: "Success Response",
                        ...PublishSchema,
                    },
                },
            },
        },
        (request, reply) => {
            const { handle, content, title } = request.body;
            const transporter = createNodeMailer();

            sendMail([handle], title, content, transporter, fastify.log)
                .then(_info => {
                    reply.code(200).send();
                })
                .catch(error => {
                    fastify.log.error("Mail was not sent - error: \n" + JSON.stringify(error));
                    reply.code(400).send();
                    throw error;
                })
                .finally(() => {
                    transporter.close();
                });
        },
    );
}
