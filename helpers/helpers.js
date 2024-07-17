module.exports = {
    // function to display status in badge  
    displayStatus: (status) => {
        switch (status) {
            case 1:
                return 'Applied';
            case 2:
                return 'Interview Scheduled';
            case 3:
                return 'Interviewed';
            case 4:
                return 'On Hold';
            case 5:
                return 'Offer Received';
            case 6:
                return 'Offer Accepted';
            case 7:
                return 'Offer Rejected';
            case 8:
                return 'Application Rejected';
            default:
                return 'Applied';
        }
    },

    // function to assign each status a badge class 
    getStatusBadgeClass: (status) => {
        switch (status) {
            case 1:
                return 'bg-primary';
            case 2:
                return 'bg-info';
            case 3:
                return 'bg-warning';
            case 4:
                return 'bg-dark';
            case 5:
                return 'bg-success';
            case 6:
                return 'bg-success';
            case 7:
                return 'bg-dark';
            case 8:
                return 'bg-danger';
            case 1:
                return 'bg-primary';
            case 2:
                return 'bg-info';
            case 3:
                return 'bg-warning';
            case 4:
                return 'bg-dark';
            case 5:
                return 'bg-success';
            case 6:
                return 'bg-success';
            case 7:
                return 'bg-dark';
            case 8:
                return 'bg-danger';
            default:
                return 'bg-primary';
                return 'bg-primary';
        }
    },

    // function to display work site in badge  
    displayWorkSite: (work_site) => {
        switch (work_site) {
            case 1:
                return 'On-Site';
            case 2:
                return 'Hybrid';
            case 3:
                return 'Remote';
            default:
                return 'On-Site';
        }
    },

    // function to assign each work site a badge class 
    getWorkSiteBadgeClass: (work_site) => {
        switch (work_site) {
            case 1:
                return 'bg-secondary';
            case 2:
                return 'bg-secondary';
            case 3:
                return 'bg-secondary';
            default:
                return 'bg-secondary';
                return 'bg-secondary';
        }
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
