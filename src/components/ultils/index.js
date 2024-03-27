import { useMemo, useState } from "react";

export const defaultValue = {
  id: "11061",
  color: "#f1d65d",
  cover:
    "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11061-8WkkTZ6duKpq.jpg",
  description: `A new adaption of the manga of the same name by Togashi Yoshihiro.<br><br>\nA Hunter is one who travels the world doing all sorts of dangerous tasks. From capturing criminals to searching deep within uncharted lands for any lost treasures. Gon is a young boy whose father disappeared long ago, being a Hunter. He believes if he could also follow his father's path, he could one day reunite with him.<br><br>\nAfter becoming 12, Gon leaves his home and takes on the task of entering the Hunter exam, notorious for its low success rate and high probability of death to become an official Hunter. He befriends the revenge-driven Kurapika, the doctor-to-be Leorio and the rebellious ex-assassin Killua in the exam, with their friendship prevailing throughout the many trials and threats they come upon taking on the dangerous career of a Hunter.`,
  duration: "24",
  genres: ["Action", "Adventure", "Fantasy"],
  image:
    "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11061-sIpBprNRfzCe.png",
  malId: 11061,
  rating: 89,
  releaseDate: 2011,
  status: "Completed",
  title: {
    english: `Hunter x Hunter (2011)`,
    native: `HUNTER×HUNTER (2011)`,
    romaji: `HUNTER×HUNTER (2011)`,
    userPreferred: `HUNTER×HUNTER (2011)`,
  },
  totalEpisodes: 148,
  trailer: {
    id: "d6kBeJjTGnY",
    site: "youtube",
    thumbnail: "https://i.ytimg.com/vi/d6kBeJjTGnY/hqdefault.jpg",
  },
  tv: "TV",
};

export const useEpisode = (data) => {
  const [pages, setPages] = useState(0);

  const animeNext =
    data?.episodes.length < 30 ? 1 : data?.episodes.length / 30 + 1;

  const array = Array.from({ length: animeNext }, (_, index) => {
    return {
      id: index + 1,
      pagePrev: index + 1 === 1 ? 0 : (index + 1) * 30 - 30,
      pageNext: (index + 1) * 30,
    };
  });

  const episodesArray = [];

  for (const arr of array) {
    const episode = {
      item: data.episodes.slice(arr.pagePrev, arr.pageNext),
      id: arr.id,
      pagePrev: arr.pagePrev,
      pageNext: data.episodes.length < 29 ? data.episodes.length : arr.pageNext,
    };

    episodesArray.push(episode);
  }

  const filter = useMemo(
    () => episodesArray.filter((item) => item.pagePrev === pages),
    [episodesArray, pages]
  );

  function nextPages(pageNumber) {
    setPages(pageNumber);
  }

  return {
    pages,
    nextPages,
    filter,
    episodesArray,
  };
};
