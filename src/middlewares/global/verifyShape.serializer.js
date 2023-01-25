import AppError from "../../errors/AppError";

export default function shapeVerifyer(schema) {
    return async (req, res, next) => {
        try {
            const data = {
                ...req.body,
                uuid: req.params.id
            }
            const validated = await schema.validate(data, { abortEarly: false });

            req.body = { ...validated, uuid: undefined };
            req.params.id = validated.uuid;

            return next();
        } catch (err) {
            throw new AppError(err.errors, 400);
        }
    }
}
