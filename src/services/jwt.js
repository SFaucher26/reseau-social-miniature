import jwt from 'jsonwebtoken'

const secretKey = process.env.SECRET_KEY ?? 'my_secret_key'

export function generateUserToken(user){
    //payload qui permet de générer le token
    const payload = {id: user.id}
    const token = jwt.sign(payload, secretKey, {expiresIn: '1h'}) //mettre une expiration est une sécurité
    return token
}

export async function verifyUserToken(token){
    return new Promise((accept, reject) => {
        jwt.verify(token, secretKey, (err, decodedPayload) =>{
        if(err){
            reject(err)
        }else{
            accept(decodedPayload)
        }
    })
})
}