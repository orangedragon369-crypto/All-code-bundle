const API_URL = 'http://localhost:3050/api/students';

// CREATE STUDENT
document.getElementById('createForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const outputDiv = document.getElementById('createOutput');

    const studentData = {
        name: document.getElementById('createName').value,
        email: document.getElementById('createEmail').value,
        age: parseInt(document.getElementById('createAge').value),
        major: document.getElementById('createMajor').value
    };

    try {
        showLoading(outputDiv);
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(studentData)
        });

        const data = await response.json();

        if (response.ok) {
            showSuccess(outputDiv, data);
            document.getElementById('createForm').reset();
            getAllStudents();
        } else {
            showError(outputDiv, data);
        }
    } catch (error) {
        showError(outputDiv, error);
    }
});

// READ ALL STUDENTS
async function getAllStudents() {
    const outputDiv = document.getElementById('allStudentsOutput');
    const directoryDiv = document.getElementById('studentDirectory');

    try {
        showLoading(outputDiv);
        const response = await fetch(API_URL);
        const data = await response.json();

        if (response.ok) {
            showSuccess(outputDiv, data);
            displayStudentDirectory(data, directoryDiv);
        } else {
            showError(outputDiv, data);
        }
    } catch (error) {
        showError(outputDiv, error);
    }
}

// READ BY ID
async function getStudentById() {
    const outputDiv = document.getElementById('readOutput');
    const id = document.getElementById('readId').value;

    if (!id) {
        showError(outputDiv, 'Please enter a student ID');
        return;
    }

    try {
        showLoading(outputDiv);
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();

        if (response.ok) {
            showSuccess(outputDiv, data);
        } else {
            showError(outputDiv, data);
        }
    } catch (error) {
        showError(outputDiv, error);
    }
}

// UPDATE (PUT)
async function updateStudentPut() {
    const outputDiv = document.getElementById('putOutput');
    const id = document.getElementById('putId').value;

    if (!id) {
        showError(outputDiv, 'Please enter a student ID');
        return;
    }

    const studentData = {
        name: document.getElementById('putName').value,
        email: document.getElementById('putEmail').value,
        age: parseInt(document.getElementById('putAge').value),
        major: document.getElementById('putMajor').value
    };

    try {
        showLoading(outputDiv);
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(studentData)
        });

        const data = await response.json();

        if (response.ok) {
            showSuccess(outputDiv, data);
            getAllStudents();
        } else {
            showError(outputDiv, data);
        }
    } catch (error) {
        showError(outputDiv, error);
    }
}

// UPDATE (PATCH)
async function updateStudentPatch() {
    const outputDiv = document.getElementById('patchOutput');
    const id = document.getElementById('patchId').value;
    const field = document.getElementById('patchField').value;
    const value = document.getElementById('patchValue').value;

    if (!id) {
        showError(outputDiv, 'Please enter a student ID');
        return;
    }

    const studentData = {};
    studentData[field] = isNaN(value) ? value : parseInt(value);

    try {
        showLoading(outputDiv);
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(studentData)
        });

        const data = await response.json();

        if (response.ok) {
            showSuccess(outputDiv, data);
            getAllStudents();
        } else {
            showError(outputDiv, data);
        }
    } catch (error) {
        showError(outputDiv, error);
    }
}

// DELETE STUDENT
async function deleteStudent() {
    const outputDiv = document.getElementById('deleteOutput');
    const id = document.getElementById('deleteId').value;

    if (!id) {
        showError(outputDiv, 'Please enter a student ID');
        return;
    }

    if (!confirm(`Are you sure you want to delete student ${id}?`)) {
        return;
    }

    try {
        showLoading(outputDiv);
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        const data = await response.json();

        if (response.ok) {
            showSuccess(outputDiv, data);
            getAllStudents();
        } else {
            showError(outputDiv, data);
        }
    } catch (error) {
        showError(outputDiv, error);
    }
}

// DISPLAY STUDENT DIRECTORY
function displayStudentDirectory(students, container) {
    if (!Array.isArray(students) || students.length === 0) {
        container.innerHTML = '<p style="color: #999;">No students found</p>';
        return;
    }

    container.innerHTML = students.map(student => `
        <div class="student-item">
            <h4>${student.name}</h4>
            <p><strong>ID:</strong> ${student.id}</p>
            <p><strong>Email:</strong> ${student.email}</p>
            <p><strong>Age:</strong> ${student.age}</p>
            <p><strong>Major:</strong> ${student.major || 'N/A'}</p>
            <div class="student-actions">
                <button class="edit-btn" onclick="loadStudentForEdit(${student.id}, '${student.name}', '${student.email}', ${student.age}, '${student.major || ''}')">Edit</button>
                <button class="delete-btn" onclick="document.getElementById('deleteId').value = ${student.id}; deleteStudent()">Delete</button>
            </div>
        </div>
    `).join('');
}

// LOAD STUDENT FOR EDITING
function loadStudentForEdit(id, name, email, age, major) {
    document.getElementById('putId').value = id;
    document.getElementById('putName').value = name;
    document.getElementById('putEmail').value = email;
    document.getElementById('putAge').value = age;
    document.getElementById('putMajor').value = major;

    // Scroll to the PUT form
    document.querySelector('[id="putId"]').parentElement.parentElement.scrollIntoView({ behavior: 'smooth' });
}

// HELPER FUNCTIONS
function showLoading(outputDiv) {
    outputDiv.style.display = 'block';
    outputDiv.innerHTML = '<div class="status loading">Loading...</div>';
}

function showSuccess(outputDiv, data) {
    outputDiv.style.display = 'block';
    outputDiv.classList.remove('error');
    outputDiv.classList.add('success');
    outputDiv.innerHTML = `<div class="status success">✓ Success</div><pre>${JSON.stringify(data, null, 2)}</pre>`;
}

function showError(outputDiv, error) {
    outputDiv.style.display = 'block';
    outputDiv.classList.remove('success');
    outputDiv.classList.add('error');
    const errorMsg = error.error || error.message || JSON.stringify(error, null, 2);
    outputDiv.innerHTML = `<div class="status error">✗ Error</div><pre>${errorMsg}</pre>`;
}

// Load all students on page load
window.addEventListener('load', getAllStudents);
