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
    },

    // function to count scheduled interviews
    countInterviews: async (status) => {
        try {
            const count = await Application.count({
                where: { status: 2 },
                distinct: true,
            });
            return count;
        } catch (error) {
            console.error('Error counting interviews scheduled:', error);
            throw error;
        }
    },

    // function to count offers received
    countOffers: async (status) => {
        try {
            const count = await Application.count({
                where: { status: 5 },
                distinct: true,
            });
            return count;
        } catch (error) {
            console.error('Error counting offers received:', error);
            throw error;
        }
    },

    // function to assign each status a badge class
    getStatusBadgeClass: async (status) => {
        switch (status) {
            case 'Applied':
                return 'badge-primary';
            case 'Interview-Scheduled':
                return 'badge-info';
            case 'Interviewed':
                return 'badge-warning';
            case 'On-Hold':
                return 'badge-dark';
            case 'Offer-Received':
                return 'badge-success';
            case 'Offer-Accepted':
                return 'badge-success';
            case 'Application-Rejected':
                return 'badge-danger';
            default:
                return 'badge-primary';
        }
    },

};
