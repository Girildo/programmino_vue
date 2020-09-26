import { FlickrApiDefinitions } from "./FlickrApiDefinitions";
import * as flickr from "flickr-sdk";
import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";

export function replies$(): Observable<FlickrApiDefinitions["TopicReply"][]> {
    const flickrObj = new flickr("00b9cc2a3bf5e2896905d1fd621a20eb");

    const promise: Promise<any> = flickrObj.groups.discuss.replies.getList({ "group_id": "1744262@N24", "topic_id": "72157715910558033", "per_page": 100 });

    return from(promise).pipe(map(x => x.body.replies.reply));
}