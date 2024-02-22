export default function handler(req, res){

    try{
        const authHeader = req.headers.get('authorization');
        console.log(authHeader);
        console.log(request.rawHeaders);
        console.log(process.env.CRON_SECRET);
    }catch(err){
        console.log(err);
    }

    console.log(req.headers['authorization']);


    console.log(req.headers);


    res.status(200).send('');
}
