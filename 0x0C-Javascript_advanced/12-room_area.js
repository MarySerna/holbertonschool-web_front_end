const roomDimensions = {
    width: 50,
    length: 100,
    getArea: function() {
        return this.width * this.length;
    },
};

// function that returns the surface area
const GetAreaGlobal = roomDimensions.getArea;

// Context must be binded to original object
const boundGetArea = GetAreaGlobal.bind(roomDimensions);