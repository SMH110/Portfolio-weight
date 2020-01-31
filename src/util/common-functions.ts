import { Subscription } from "rxjs";

export function unSubscribe(sub: Subscription){
    if (sub.unsubscribe) sub.unsubscribe();
}