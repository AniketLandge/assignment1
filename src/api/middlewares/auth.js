module.exports = async (req,res,next) => {
    const signature = req.get('Authorization');
    const isAuthorized = signature === '12345' ? true : false;
    if(isAuthorized){
        return next();
    }
    return res.status(403).json({message: 'Not Authorized'})
}