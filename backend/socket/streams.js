module.exports = function(io) {
    io.on("connection", socket => {
      socket.on("orderCreated", data => {
        io.emit('getOrders', {})
      });
    });
  };
  