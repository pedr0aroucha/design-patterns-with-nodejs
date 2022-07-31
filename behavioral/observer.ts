import { Subject } from "rxjs";

const news = new Subject();

const tv1 = news.subscribe((x) => console.log(`${x}via TV1`));
const tv2 = news.subscribe((x) => console.log(`${x}via TV2`));
const tv3 = news.subscribe((x) => console.log(`${x}via TV3`));

news.next("Breaking news: ");
news.next("World war 3 ");
