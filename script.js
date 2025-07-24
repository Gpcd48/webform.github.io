document.getElementById('admissionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Form data collect karna
    const jeecupRollNo = document.getElementById('jeecupRollNo').value.trim();
    const obtainedMark = document.getElementById('obtainedMark').value.trim();
    const dob = document.getElementById('dob').value;
    const name = document.getElementById('name').value.trim();
    const fatherName = document.getElementById('fatherName').value.trim();
    const rank = document.getElementById('rank').value.trim();
    const motherName = document.getElementById('motherName').value.trim();
    const category = document.getElementById('category').value;
    const allotedCategory = document.getElementById('allotedCategory').value;
    const gender = document.querySelector('input[name="Gender"]:checked')?.value;
    const aadharNumber = document.getElementById('aadharNumber').value.trim();
    const caste = document.getElementById('caste').value.trim();
    const mobileNo = document.getElementById('mobileNo').value.trim();
    const villPost = document.getElementById('villPost').value.trim();
    const thana = document.getElementById('thana').value.trim();
    const tahsil = document.getElementById('tahsil').value.trim();
    const district = document.getElementById('district').value.trim();
    const state = document.getElementById('state').value.trim();
    const pincode = document.getElementById('pincode').value.trim();
    const branch = document.getElementById('branch').value;
    const group = document.querySelector('input[name="Group"]:checked')?.value;
    const email = document.getElementById('email').value.trim();

    // Error messages reset karna
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    // Validation
    let isValid = true;
    if (!jeecupRollNo) {
        document.getElementById('jeecupRollNoError').textContent = 'Jeecup Roll No. is required';
        isValid = false;
    }
    if (!obtainedMark) {
        document.getElementById('obtainedMarkError').textContent = 'Obtained Mark is required';
        isValid = false;
    }
    if (!dob) {
        document.getElementById('dobError').textContent = 'Date of Birth is required';
        isValid = false;
    }
    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }
    if (!fatherName) {
        document.getElementById('fatherNameError').textContent = 'Father Name is required';
        isValid = false;
    }
    if (!rank) {
        document.getElementById('rankError').textContent = 'Rank is required';
        isValid = false;
    }
    if (!motherName) {
        document.getElementById('motherNameError').textContent = 'Mother Name is required';
        isValid = false;
    }
    if (!category) {
        document.getElementById('categoryError').textContent = 'Category is required';
        isValid = false;
    }
    if (!allotedCategory) {
        document.getElementById('allotedCategoryError').textContent = 'Alloted Category is required';
        isValid = false;
    }
    if (!gender) {
        document.getElementById('genderError').textContent = 'Gender is required';
        isValid = false;
    }
    if (!aadharNumber) {
        document.getElementById('aadharNumberError').textContent = 'Aadhar Number is required';
        isValid = false;
    }
    if (!caste) {
        document.getElementById('casteError').textContent = 'Caste is required';
        isValid = false;
    }
    if (!mobileNo) {
        document.getElementById('mobileNoError').textContent = 'Mobile No. is required';
        isValid = false;
    }
    if (!villPost) {
        document.getElementById('villPostError').textContent = 'Vill+post is required';
        isValid = false;
    }
    if (!thana) {
        document.getElementById('thanaError').textContent = 'Thana is required';
        isValid = false;
    }
    if (!tahsil) {
        document.getElementById('tahsilError').textContent = 'Tahsil is required';
        isValid = false;
    }
    if (!district) {
        document.getElementById('districtError').textContent = 'District is required';
        isValid = false;
    }
    if (!state) {
        document.getElementById('stateError').textContent = 'State is required';
        isValid = false;
    }
    if (!pincode) {
        document.getElementById('pincodeError').textContent = 'Pincode is required';
        isValid = false;
    }
    if (!branch) {
        document.getElementById('branchError').textContent = 'Branch is required';
        isValid = false;
    }
    if (!group) {
        document.getElementById('groupError').textContent = 'Group is required';
        isValid = false;
    }
    if (!email) {
        document.getElementById('emailError').textContent = 'Email ID is required';
        isValid = false;
    }

    if (!isValid) return;

    // Google Sheets mein data bhejna
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxPKwIy1aqnHx1WWl4W3zzPw4qILDcr0JHKmqgg0pRSUhC9oNVaXyOMRwF7zTaOS6AP/exec'; // Yahan Google Apps Script ka Web App URL daalein
    const form = document.forms['submit-to-google-sheet'];
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => {
        if (response.ok) {
            // Redirect to submit.html on successful submission
            window.location.href = 'submit.html';
        } else {
            document.getElementById('message').textContent = 'Error submitting data.';
        }
    })
    .catch(error => {
        console.error('Error!', error.message);
        document.getElementById('message').textContent = 'Error submitting data.';
    });
});
