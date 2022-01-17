let tweets = [
  {
    id: "1",
    text: "테스트 트윗",
    createdAt: Date.now().toString(),
    name: "Kirok",
    username: "psick",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatspapp-1.png",
  },
  {
    id: "2",
    text: "테스트 트윗2",
    createdAt: Date.now().toString(),
    name: "Kirok2",
    username: "psick22",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatspapp-1.png",
  },
];

export async function getAll() {
  return tweets;
}

export async function getAllByUsername() {
  return tweets.filter((tweet) => tweet.username === username);
}

export async function getById() {
  return tweets.find((tweet) => tweet.id === id);
}

export async function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  return tweets;
}
export async function update(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export async function remove(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
}
