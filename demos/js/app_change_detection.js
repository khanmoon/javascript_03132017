import $ from 'jquery';

let colors = ['blue','red','white','peach'];
let oldColors = null;

const updateColorList = () => {

    //if (colors !== oldColors) {
        console.log('updating the list');
        $('#color-list').empty();
        colors.forEach(color => {
            $('#color-list')
                .append('<li>' + color + '</li>');
        });
        oldColors = colors;
    //}

};

updateColorList();
//colors = colors.concat('green');
colors.push('green');
updateColorList();
updateColorList();

console.log(colors);




// let items = [1,2,3,4];
// let oldItems = items;

// console.log(items);

// items = items.concat(5);
// items = items.slice(1);

// console.log(oldItems !== items);

// let profile = {
//     fn: 'Slavko',
//     ln: 'Dr',
//     address: {
//         street: 'Tone 234',
//         city: 'Novi Sad',
//         province: 'Vojvodna',
//         postalCode: '21000'
//     }
// };

// profile.address.city = 'Maldives';

