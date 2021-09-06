import { response } from './interfaces/response'
const success = (args: response) => {
    args.res.status(args.status || 201).send({
        success: true,
        text: args.text || 'Successful request',
        body: args.body || {}
    })
}

const error = (args: response) => {
    args.res.status(args.status || 404).send({
        success: false,
        text: args.text || 'Server error'
    })
}

export { success, error }