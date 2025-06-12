const axios = require("axios");
const cheerio = require("cheerio");

async function fazerScraping() {
  console.log("🔍 Buscando últimas notícias no G1...");

  const url = "https://g1.globo.com/";
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  const noticias = [];
  $("a.feed-post-link").each((i, el) => {
    if (i >= 5) return false; // Pega só as 5 primeiras notícias

    const titulo = $(el).text().trim();
    const link = $(el).attr("href");

    if (titulo && link) {
      noticias.push(
        `• <strong>${titulo}</strong><br><a href="${link}" target="_blank">${link}</a>`
      );
    }
  });

  if (noticias.length === 0) {
    return "⚠️ Nenhuma notícia encontrada.";
  }

  return noticias.join("<br><br>");
}

module.exports = { fazerScraping };
