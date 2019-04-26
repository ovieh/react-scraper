const cheerio = require('cheerio');
const request = require('request');

const parseArticle = article => {
	const $ = cheerio(article);

	return {
		headline: $.find('h2.css-1dq8tca').text().trim(),
		summary: $.find('p.css-1echdzn').text().trim(),
		url: $.find('a').attr('href')
	}
}

const parseHtml = html => {
	const $ = cheerio.load(html);
	const articles = [];
	$('div.css-1cp3ece').each((i, e) => articles.push(parseArticle(e)));
	console.log('scraped');
	return articles;
}

module.exports = function scrape() {
	const URL = 'https://www.nytimes.com/section/technology';
	return new Promise((resolve, reject) => {
		request(URL, (err, res, body) => {
			if (err) {
				return reject(err);
			}
			return resolve(parseHtml(body));
		});
	});

  // (async () => {
  //   try {
  //     const response = await got(URL);
  //     console.log(response)
  //     return parseHtml(response.body);  
  //   } catch (err) {
  //     console.log(error.response.body);
  //   }

  // })

}