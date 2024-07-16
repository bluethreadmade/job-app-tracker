// function deleteHandler(event) {
//     event.preventDefault();

//     console.log("here");
//   };

const deleteHandler = async (event) => {
    event.preventDefault();
    const applicationId = window.location.pathname.split('/')[2];
    console.log('here', applicationId);
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
};

const editHandler = () => {
    const applicationId = window.location.pathname.split('/')[2];
    window.location.replace(`/applications/edit/${applicationId}`);
}

document.getElementById('delete').addEventListener('click', deleteHandler);
document.getElementById('edit').addEventListener('click', editHandler);
