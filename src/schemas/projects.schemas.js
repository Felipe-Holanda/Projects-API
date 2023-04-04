import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    image: yup.string().required(),
    deploy: yup.string().required(),
    repository: yup.string().required(),
    tags: yup.array().of(yup.string()).required()
})

export const editSchema = yup.object().shape({
    uuid: yup.string().required().matches(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/, "Invalid UUID"),
    name: yup.string(),
    description: yup.string(),
    image: yup.string(),
    deploy: yup.string(),
    repository: yup.string(),
    tags: yup.array().of(yup.string())
})

export const uuidSchema = yup.object().shape({
    uuid: yup.string().required().matches(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/, "Invalid UUID")
})

