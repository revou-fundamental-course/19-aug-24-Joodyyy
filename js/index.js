function validateForm() {
    
    document.querySelector('.outputbox').innerHTML = '';

    
    var fullName = document.getElementById('full-name').value.trim();
    var birthDate = document.getElementById('birth-date').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var message = document.getElementById('messages').value.trim();

    // Validation
    if (fullName === '') {
        alert('Nama tidak boleh kosong');
        return false;
    }
    
    if (birthDate === '') {
        alert('Tanggal Lahir tidak boleh kosong');
        return false;
    }
    
    if (!gender) {
        alert('Jenis Kelamin harus dipilih');
        return false;
    }
    
    if (message === '') {
        alert('Pesan tidak boleh kosong');
        return false;
    }

    // Display output
    var outputDiv = document.querySelector('.outputbox');
    outputDiv.innerHTML = '<h2>Form Submitted Successfully!</h2>' +
                          '<p><strong>Nama:</strong> ' + fullName + '</p>' +
                          '<p><strong>Tanggal Lahir:</strong> ' + birthDate + '</p>' +
                          '<p><strong>Jenis Kelamin:</strong> ' + (gender.value === 'male' ? 'Laki-laki' : 'Perempuan') + '</p>' +
                          '<p><strong>Pesan:</strong> ' + message + '</p>';

    return false; 
}



