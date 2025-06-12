const { fazerScraping } = require("./scraper");
const { enviarEmail } = require("./mailer");

async function main() {
  try {
    console.log("🔍 Iniciando scraping das últimas notícias do G1...");
    
    const conteudo = await fazerScraping();

    const assunto = "📰 G1 - Últimas Notícias";
    const corpoHTML = `
      <h2>📰 Resumo das últimas notícias do G1:</h2>
      <div style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.6;">
        ${conteudo}
      </div>
    `;

    console.log("📧 Enviando e-mail...");
    await enviarEmail(assunto, corpoHTML);

    console.log("✅ E-mail enviado com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao executar:", error.message);
  }
}

main();
