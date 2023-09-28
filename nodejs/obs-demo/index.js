
import { Observable, from, of, filter, map } from 'rxjs';

const myArr = [10, 20, 30, 40, 50];

const arrObs = from(myArr);

// arrObs.subscribe((val) => {
//     console.log(val);
// });

// arrObs
// .pipe()
// .subscribe()
// .unsubscribe();

arrObs
    .pipe(
        filter(val => val % 4 == 0),
        map(val => val + 2)
    )
    .subscribe(res => console.log(res))
    .unsubscribe();
