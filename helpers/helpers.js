module.exports = {
    // function to count applications 
    countApplications: async (user_id) => {
        try {
            const count = await Application.count({
                where: { user_id: user_id },
                distinct: true, // Count only unique applications
            });
            return count;
        } catch (error) {
            console.error('Error counting user applications:', error);
            throw error;
        }
    }
};