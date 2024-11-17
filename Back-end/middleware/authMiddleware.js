const jwt = require('jsonwebtoken');


const authenticateToken = (req,res,next)=>{
    const token = req.header['authorization'];
    if(!token) return res.status(401).json({message:'no token provided'});

    jwt.verify(token,process.env.JWT_SECRET, (err,user)=>{
        if(err) return res.status(401).json({message:'Invalid token.'});
        req.user = user;
        next();
    });

};

module.exports = authenticateToken;