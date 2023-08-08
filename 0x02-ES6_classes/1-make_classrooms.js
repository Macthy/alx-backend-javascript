// 1-make_classRooms.js

import classRoom from './0-classRoom.js';

export default function initializeRooms() {
  return [ new classRoom(19), new classRoom(20), new classRoom(34) ];
}
