import $ from 'jquery';

function addAccessorProperty(obj, propName) {
    Object.defineProperty(obj, propName, {
        configurable: true,
        enumerable: true,
        get: function() { return this.attributes[propName]; },
        set: function(value) { this.attributes[propName] = value; }
    });
}

function addAccessorProperties(obj, fields) {
    fields.forEach(function(field) {
        addAccessorProperty(obj, field);
    });
}

function Profile() {
    this.attributes = {};
}

const fields = ['firstName', 'lastName', 'phone', 'email'];
addAccessorProperties(Profile.prototype, fields);

Profile.prototype.getFullName = function() {
    return this.lastName + ', ' + this.firstName;
};

// function CustomerProfile() {

// }

// getFullName => 'Customer: ' + firstName + lastName


// function VendorProfile() {

// }

// getFullName => 'Vendor: ' + lastName


let profiles = [];
let lastProfiles = null;

const profileForm = {
    firstNameInput: $('#first-name'),
    lastNameInput: $('#last-name'),
    phoneInput: $('#phone'),
    emailInput: $('#email'),
};

const addProfile = () => {

    // choose the correct profile constructor function based upon the selection
    // of the radio button

    // cool and efficient
    console.log($('[name=profileType]:checked').val());

    // inspects the checked property for the specified radio
    console.log($('#profile-type-customer').prop('checked'));
    console.log($('#profile-type-customer')[0].checked); // access the checked prop off the DOM object
    
    // these seem like they would work, but do not
    console.log($('#profile-type-customer').checked);
    console.log($('#profile-type-customer').attr('checked'));


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