const adminMiddleware = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({ msg: "Unauthorized" });
        }
        if (!req.user.isAdmin) {
            return res.status(403).json({ msg: "Access Denied. User is not admin" });
        }
        next();
    } catch (error) {
        next(error);
    }
};
module.exports=adminMiddleware;