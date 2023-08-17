// 1-make_classRooms.js

import ClassRoom from './0-classRoom.js';

export default function initializeRooms() {
  return [ new ClassRoom(19), new ClassRoom(20), new ClassRoom(34) ];
}
