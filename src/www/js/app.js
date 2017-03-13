import $ from 'jquery';

// $('div')
// $('<div>')
// $(function() {

// }); // $(document).ready(function() { });

// const div = document.createElement('div');

// $(div)


let profiles = [];
let lastProfiles = null;

const profileForm = {
    firstNameInput: $('#first-name'),
    lastNameInput: $('#last-name'),
    phoneInput: $('#phone'),
    emailInput: $('#email'),
};

const addProfile = () => {

    profiles = profiles.concat({
        firstName: profileForm.firstNameInput.val(),
        lastName: profileForm.lastNameInput.val(),
        phone: profileForm.phoneInput.val(),
        email: profileForm.emailInput.val(),
    });

    profileForm.firstNameInput.val('');
    profileForm.lastNameInput.val('');
    profileForm.phoneInput.val('');
    profileForm.emailInput.val('');
};

const refreshProfiles = () => {

    if (profiles !== lastProfiles) {

        const tbody = $('tbody');

        tbody.empty();

        profiles.forEach(profile => {

            // const tdFirstName = $('<td>');
            // tdFirstName.text(profile.firstName);

            // const tdLastName = $('<td>');
            // tdLastName.text(profile.lastName);

            // const tdPhone = $('<td>');
            // tdPhone.text(profile.phone);

            // const tdEmail = $('<td>');
            // tdEmail.text(profile.email);

            // const trProfile = $('<tr>');
            // trProfile.append(tdFirstName);
            // trProfile.append(tdLastName);
            // trProfile.append(tdPhone);
            // trProfile.append(tdEmail);

            // tbody.append(trProfile);

            tbody.append(
                $('<tr>')
                    .append( $('<td>').text(profile.firstName) )
                    .append( $('<td>').text(profile.lastName) )
                    .append( $('<td>').text(profile.phone) )
                    .append( $('<td>').text(profile.email) )
            );

            const td = document.createElement('td');
            td.innerText = profile.firstName;

            tbody.html('<tr><td>' + profile.firstName + '</td></tr>');
        });

        lastProfiles = profiles;
    }

};

$('#add-profile').on('click', addProfile);

$('#refresh-profiles').on('click', refreshProfiles);