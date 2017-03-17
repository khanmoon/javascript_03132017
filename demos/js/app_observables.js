
import { Observable } from 'rxjs';

const getWebSocket = () => {

    if (!window.webSocketPromise) {
        window.webSocketPromise = new Promise(resolve => {
            const ws = new WebSocket('ws://localhost:3030');
            ws.addEventListener('open', () => {
                resolve(ws);
            });
        });
    }
    
    return window.webSocketPromise;
};

console.dir(getWebSocket);


// getWebSocket().then(ws => { ws.send('some text'); });


const onMessage = ws =>
    new Promise(resolve =>
        ws.addEventListener('message', msg =>
            resolve(msg.data)));

//getWebSocket().then(onMessage).then(data => console.log(data));



const nums = Observable.create(observer => {

    getWebSocket().then(ws => ws.addEventListener('message', msg => {
        observer.next(msg.data);
    }));

});

nums.map(n => n * 2).filter(num => num < 30).subscribe(num => console.log(num));


