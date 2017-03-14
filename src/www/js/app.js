import $ from 'jquery';

// $('button').on('click', e => {
//     console.log('I was clicked!');
//     console.log(e.target.id);
// });

// $('li:last-child').remove();

$('ul').on('click', 'button', e => {
    console.log('I was clicked!');
    console.log('what I clicked on', e.target);
    console.log('element that handled the event', e.currentTarget);
    $(e.target).closest('li').remove();
});

// $('ul').on('click', e => {
//     console.log('I was clicked!');
//     console.log('what I clicked on', e.target);
//     console.log('element that handled the event', e.currentTarget);
// });