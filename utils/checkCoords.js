function checkCoords(characterCoords, PlayerCoords) {
  const acceptableArea = 0.08;

  const xCoord =
    characterCoords.x - acceptableArea <= PlayerCoords.x &&
    PlayerCoords.x <= characterCoords.x + acceptableArea;
  const yCoord =
    characterCoords.y - acceptableArea <= PlayerCoords.y &&
    PlayerCoords.y <= characterCoords.y + acceptableArea;

  if (xCoord && yCoord) {
    return true;
  } else {
    return false;
  }
}

module.exports = checkCoords;
