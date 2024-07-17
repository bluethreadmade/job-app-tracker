// From applications/
const applicationForm = document.getElementById('application-form');

// From application/:id
const deleteApplicationBtn = document.getElementById('delete');
const editApplicationBtn = document.getElementById('edit');

async function handleSubmitApplication(e) {
    e.preventDefault();

    // Determine if this should be an edit request or not
    const isEdit = window.location.pathname.includes('/edit/');
    const applicationId = isEdit && window.location.pathname.split('/')[3];
    // Convert form data from the form to JSON
    const formData = Object.fromEntries(new FormData(e.target));

    // If we're editing data ...
    if (isEdit && applicationId) {
        const request = await fetch('/api/applications/' + applicationId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (request.ok) {
            window.location.replace('/dashboard');
        }

        return;
    }

    const request = await fetch('/api/applications', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (request.ok) {
        window.location.replace('/dashboard');
    }
}

async function handleDelete(event) {
    event.preventDefault();
    const applicationId = window.location.pathname.split('/')[2];

    try {
        const response = await fetch('/api/applications/' + applicationId, {
            method: 'DELETE',
        });

        if (response.ok) {
            window.location.replace('/dashboard');
        }
    } catch (error) {
        console.log('error', error);
    }
}

function handleEdit() {
    const applicationId = window.location.pathname.split('/')[2];
    window.location.replace(`/applications/edit/${applicationId}`);
}

// These can exist conditionally depending what page requested the JS file
// Only add event listeners if the buttons exist
if (applicationForm) {
    applicationForm.addEventListener('submit', handleSubmitApplication);
}

if (deleteApplicationBtn) {
    deleteApplicationBtn.addEventListener('click', handleDelete);
}

if (editApplicationBtn) {
    editApplicationBtn.addEventListener('client', handleEdit);
}
