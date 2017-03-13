var o = {
    id: 2,
    doIt: doIt,
};

function doIt(a, b) {
    console.log(this.id, a, b);
}

doIt.call(o, 1, 2);

var t = [1, 2];
doIt.apply(o, t);

var fn = doIt.bind(o);

fn();

var o4 = { id :5, doIt: fn };

o4.doIt();

function bindFn(fnToBind, valueOfthis) {
    return function wrapperFn() {
        fnToBind.call(valueOfthis);
    };
}

var fn = bindFn(doIt, o);

o.id

var prop = "id";

o[prop]

