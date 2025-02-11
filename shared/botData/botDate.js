const generateRandomData = (length = 10, interval = "day") => {
    const data = [];
    const now = new Date();
  
    for (let i = 0; i < length; i++) {
      let date;
      if (interval === "hour") {
        // Для hourly данных (24h)
        date = new Date(now.getTime() - i * 60 * 60 * 1000); // Каждый час
      } else {
        // Для daily данных (7d, 30d, all_time)
        date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000); // Каждый день
      }
      data.push({
        date: date.toISOString(), // ISO строка для хранения
        uv: Math.floor(Math.random() * 98) + 60, // Случайное значение от 0 до 100
      });
    }
  
    return data.reverse(); // Чтобы данные шли от старых к новым
  };
export  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { hour: "2-digit", minute: "2-digit" }; // Формат времени HH:mm
    return date.toLocaleTimeString("en-US", options);
  };
export const botDate = {
    yellow_bot: {
      "24h": generateRandomData(24, "hour"), // 24 часа данных (каждый час)
      "7d": generateRandomData(7, "day"), // 7 дней данных
      "30d": generateRandomData(30, "day"), // 30 дней данных
      all_time: generateRandomData(60, "day"), // Все данные (60 дней)
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