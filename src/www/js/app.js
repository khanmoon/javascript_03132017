import $ from 'jquery';

class Profile {

    constructor() {
        this.attributes = {};
    }

    get firstName() {
        return this.attributes.firstName;
    }

    set firstName(value) {
        return this.attributes.firstName = value;
    }

    get lastName() {
        return this.attributes.lastName;
    }

    set lastName(value) {
        return this.attributes.lastName = value;
    }

    get phone() {
        return this.attributes.phone;
    }

    set phone(value) {
        return this.attributes.phone = value;
    }

    get email() {
        return this.attributes.email;
    }

    set email(value) {
        return this.attributes.email = value;
    }

    getFullName() {
        return this.lastName + ', ' + this.firstName;
    }    
}


let profiles = [];
let lastProfiles = null;

const profileForm = {
    firstNameInput: $('#first-name'),
    lastNameInput: $('#last-name'),
    phoneInput: $('#phone'),
    emailInput: $('#email'),
};

const addProfile = () => {

    const newProfile = new Profile();
    newProfile.firstName = profileForm.firstNameInput.val();
    newProfile.lastName = profileForm.lastNameInput.val();
    newProfile.phone = profileForm.phoneInput.val();
    newProfile.email = profileForm.emailInput.val();

    profiles = profiles.concat(newProfile);

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

            tbody.append(
                $('<tr>')
                    .append( $('<td>').text(profile.getFullName()) )
                    .append( $('<td>').text(profile.phone) )
                    .append( $('<td>').text(profile.email) )
            );

        });

        lastProfiles = profiles;
    }

};

$('#add-profile').on('click', addProfile);
$('#refresh-profiles').on('click', refreshProfiles);