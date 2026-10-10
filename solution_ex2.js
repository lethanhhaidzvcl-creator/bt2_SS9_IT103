let hotelRooms = [
    {
    roomId: "P101",
    roomType: "Deluxe",
    pricePerNight: 1500000,
    status: "VACANT"
    },
    {
        roomId: "P102",
        roomType: "Superior",
        pricePerNight: 1000000,
        status: "OCCUPIED"
    },
    {
        roomId: "P103",
        roomType: "Standard",
        pricePerNight: 800000,
        status: "VACANT"
    }
];

console.log("=== DANH SÁCH PHÒNG BAN ĐẦU ===");
for (const room of hotelRooms) {
  console.log(
    room.roomId + " | " +
    room.roomType + " | " +
    room.pricePerNight + " VNĐ | " +
    room.status
  );
}

hotelRooms.push({
    roomId: "P101",
    roomType: "VIP Suite",
    pricePerNight: 3500000,
    status: "VACANT"
});
console.log("Thêm phòng P104 thành công");

console.log("=== SAU KHI THÊM P104 ===");
for (const room of hotelRooms) {
  console.log(room.roomId + " | " + room.roomType + " | " + room.pricePerNight + " | " + room.status);
};

let roomFound = null;

for (let i = 0; i < hotelRooms.length; i++) {
  if (hotelRooms[i].roomId === "P101") {
    roomFound = hotelRooms[i];
    break;
  }
}
if (roomFound !== null) {
  roomFound.status = "OCCUPIED";
  console.log("Cập nhật thành công!");
} else {
  console.log("Không tìm thấy phòng!");
};

let index = hotelRooms.findIndex(function(room) {
  return room.roomId === "P103";
});

if (index !== -1) {
  hotelRooms.splice(index, 1);
};

console.log("=== SAU KHI XÓA P103 ===");
for (const room of hotelRooms) {
  console.log(room.roomId + " | " + room.roomType + " | " + room.pricePerNight + " | " + room.status);
};

