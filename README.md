# activity-phraser

[Activity](http://activitystrea.ms/) -> human readable string

```javascript
var phrase = require('activity-phraser').phrase({
    actor: 'ben',
    verb: 'post',
    object: 'activity-phraser'
});
assert.equal(phrase, 'ben posted activity-phraser');  
```

[more tests](./test/index.js)

## API

* `require('activity-phraser').phrase(activity)` - Phrase a whole activity
* `require('activity-phraser').actor(activity.actor)` - Phrase just the actor
* `require('activity-phraser').verb(activity.verb)` - Phrase just the verb
* `require('activity-phraser').object(activity.object)` - Phrase just the object
    - `require('activity-phraser').object[type](activity.object)` - Phrase a partciular objectType. e.g. 'collection', 'message'

## Example

[example.js](./example.js) will phrase infinity [activity-mocks](https://github.com/gobengo/activity-mocks) for you and pipe to stdout.

```
Joe posted "Used Tesla Roadster"
Martin Smith posted "Why I love Activity Streams"
Martin Smith posted a Photo
urn:example:person:martin posted a link
Bob Doe posted the message "This is a comment post."
site 222 verb "My Collection"
acct:joe@example.org posted a link
```
