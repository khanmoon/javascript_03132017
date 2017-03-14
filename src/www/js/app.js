import $ from 'jquery';

// $('button').on('click', e => {
//     console.log('I was clicked!');
//     console.log(e.target.id);
// });

// $('li:last-child').remove();

const profiles = [
    { name: 'Jim' },
    { name: 'Jim' }
];

$('li:last-child').prop('profileData', profiles[0]);

$('ul').on('click', 'button', e => {
    console.log('I was clicked!');
    console.log('what I clicked on', e.target);
    console.log('element that handled the event', e.currentTarget);
    
    console.log($(e.target).closest('li').prop('profileData'));

    profiles.indexOf($(e.target).closest('li').prop('profileData'));

    $(e.target).closest('li').remove();
});

// $('ul').on('click', e => {
//     console.log('I was clicked!');
//     console.log('what I clicked on', e.target);
//     console.log('element that handled the event', e.currentTarget);
// });