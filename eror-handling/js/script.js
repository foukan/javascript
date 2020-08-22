document.getElementById('btn').addEventListener('click', function (e) {

    var name = document.getElementById('name');
    var age = document.getElementById('age');
    var errors = document.getElementById('errors');
    errors.innerHTML = '';
    try {
        if (name.value.length === 0) {
            throw new Error('Name is Required!');
        }

        if (name.value.length > 20) {
            throw new Error('Name is Too Long!');
        }

        if (age.value.length === 0) {
            throw new Error('Age is Required!');
        }
        if (age.value >= 130) {
            throw new Error('Age is Wrong!');
        }

        if (isNaN(age.value)) {
            throw new Error('Age is Not Numeric!');
        }

        console.log('Form is Submitted');

    } catch (err) {
        errors.innerHTML = err.message;
    } finally {
        name.value = '';
        age.value = '';
    }



    e.preventDefault();
});