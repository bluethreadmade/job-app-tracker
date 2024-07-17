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

    // function to format the date to Month Day Year
    dateFormat: (application_submitted_date) => {
        let dateIn = String(application_submitted_date);

        const newDateArray = dateIn.split(' ');

        let date =
            newDateArray[1] + ' ' + newDateArray[2] + ' ' + newDateArray[3];

        return date;
    },
    // function to show stars for interest level
    displayStars: (interest_level) => {
        switch (interest_level) {
            case 1:
                return '★ ';
            case 2:
                return '★ ★';
            case 3:
                return '★ ★ ★';
            case 4:
                return '★ ★ ★ ★';
            case 5:
                return '★ ★ ★ ★ ★';
            default:
                return '★ ';
        }
    },
};
