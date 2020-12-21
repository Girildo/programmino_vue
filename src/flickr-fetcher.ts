import { FlickrApiDefinitions } from "./FlickrApiDefinitions";
import * as flickr from "flickr-sdk";
import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";



type TopicReply = FlickrApiDefinitions["TopicReply"];

export function replies$(): Observable<TopicReply[]> {
    const flickrObj = new flickr("00b9cc2a3bf5e2896905d1fd621a20eb");

    const promise: Promise<TopicReply[]> = flickrObj.groups.discuss.replies.getList({ "group_id": "1744262@N24", "topic_id": "72157715910558033", "per_page": 100 });
    return from(promise);
}