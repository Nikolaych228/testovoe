const generateRandomData = (length = 10, interval = "day") => {
    const data = [];
    const now = new Date();
  
    for (let i = 0; i < length; i++) {
      let date;
      if (interval === "hour") {
        date = new Date(now.getTime() - i * 60 * 60 * 1000); 
      } else {
        date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000); 
      }
      data.push({
        date: date.toISOString(),
        uv: Math.floor(Math.random() * 98) + 60, 
      });
    }
    return data.reverse(); 
  };

export const formatDate = (dateString, period) => {
  const date = new Date(dateString);
  if (period === "24h") {
    const options = { hour: "2-digit", minute: "2-digit" };
    return date.toLocaleTimeString("en-US", options);
  } else {
    return date.toISOString().split("T")[0];
  }
};

export const botDate = {
    yellow_bot: {
      "24h": generateRandomData(24, "hour"), 
      "7d": generateRandomData(7, "day"), 
      "30d": generateRandomData(30, "day"), 
      all_time: generateRandomData(60, "day"), 
    },
    white_bot: {
      "24h": generateRandomData(24, "hour"),
      "7d": generateRandomData(7, "day"),
      "30d": generateRandomData(30, "day"),
      all_time: generateRandomData(60, "day"),
    },
    green_bot: {
      "24h": generateRandomData(24, "hour"),
      "7d": generateRandomData(7, "day"),
      "30d": generateRandomData(30, "day"),
      all_time: generateRandomData(60, "day"),
    },
    red_bot: {
      "24h": generateRandomData(24, "hour"),
      "7d": generateRandomData(7, "day"),
      "30d": generateRandomData(30, "day"),
      all_time: generateRandomData(60, "day"),
    },
    blue_bot: {
      "24h": generateRandomData(24, "hour"),
      "7d": generateRandomData(7, "day"),
      "30d": generateRandomData(30, "day"),
      all_time: generateRandomData(60, "day"),
    },
    orange_bot: {
      "24h": generateRandomData(24, "hour"),
      "7d": generateRandomData(7, "day"),
      "30d": generateRandomData(30, "day"),
      all_time: generateRandomData(60, "day"),
    },
  };