module.exports = {
    // Function to display status in badge
    displayStatus: (status) => {
        const statuses = [
            'Applied',
            'Interview Scheduled',
            'Interviewed',
            'On Hold',
            'Offer Received',
            'Offer Accepted',
            'Offer Rejected',
            'Application Rejected',
        ];

        return statuses[status - 1] || 'Applied';
    },

    // Function to assign each status a badge class
    getStatusBadgeClass: (status) => {
        const backgrounds = [
            'bg-primary',
            'bg-info',
            'bg-warning',
            'bg-dark',
            'bg-success',
            'bg-success',
            'bg-dark',
        ];

        return backgrounds[status - 1] || 'bg-primary';
    },
    // Function to display work site in badge
    displayWorkSite: (work_site) => {
        const workSites = ['On-Site', 'Hybrid', 'Remote'];
        return workSites[work_site - 1] || 'On-Site';
    },
    // Function to assign each work site a badge class
    getWorkSiteBadgeClass: (work_site) => {
        const backgrounds = ['bg-secondary', 'bg-secondary', 'bg-secondary'];
        return backgrounds[work_site - 1] || 'bg-secondary';
    },
};
