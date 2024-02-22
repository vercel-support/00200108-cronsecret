export default function handler(req, res){

    try{
        const authHeader = request.headers.get('authorization');
        console.log(authHeader);
    }catch(err){
        console.log(err);
    }

    console.log(req.headers['authorization']);


    console.log(req.headers);


    res.status(200).send('');
}