module.exports = {
    // function to assign each status a badge class 
    getStatusBadgeClass: (status) => {
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
    }
};