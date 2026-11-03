import { clerkClient } from "@clerk/express";

export const protectedRoute = async (req, res, next) => {
    try {
        const { userId } = await req.auth();

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        next();
    } catch (error) {
        console.error("Auth error:", error);

        return res.status(401).json({
            success: false,
            message: "Unauthorized",
        });
    }
};

export const requireAdmin = async (req, res, next) => {
    try {
        const { userId } = await req.auth();
        
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const currentUser = await clerkClient.users.getUser(userId);

        const email = currentUser.primaryEmailAddress?.emailAddress;

        const isAdmin =
            email?.toLowerCase() === process.env.ADMIN_EMAIL?.toLowerCase();

        if (!isAdmin) {
            return res.status(403).json({
                success: false,
                message: "Forbidden: Admins only",
            });
        }

        next();
    } catch (error) {
        console.error("Admin middleware error:", error);
        next(error);
    }
};