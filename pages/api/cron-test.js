export default function handler(req, res){
    console.log(req.rawHeaders);
    console.log(req.headers['authorization']);

    // console.log(req.headers);
    res.status(200).send('');
}
