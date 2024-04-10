/**
 * 
 * @param {import { "express" }.Request} req 
 * @param {import { "express" }.Respons} _res 
 */
export function accesslogMiddleware(req, _res, next){
    const datetime = new Date().toISOString()
    console.log(`${datetime} - [${req.method}] ${req.path} - from ${req.ip}`)
    next()
}