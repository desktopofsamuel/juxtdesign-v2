---
tags: 
- 'punycode'
- 'frontend'
- 'questions' 
---

## Background
Messing with RSS feed recently (as NextJS do not have any official RSS parser plugin) , I realised Chinese URL links generated were not validated. UTF-8 encoded Chinese characters were not considered as valid.

## What I've Learned

Punycode is a special encoding used to convert Unicode characters to ASCII, which is a smaller, restricted character set. Punycode is used to encode internationalized domain names (IDN).

https://www.punycoder.com/

## How to recreate the problem?
[Punycode](https://www.npmjs.com/package/punycode) is available to encode strings of Unicode to ASCII symbols, however, the returned URL is not working as expected. For example, a Chinese blog link like `https://hk.news.yahoo.com/65個指明地方納入強制檢測公告-004959684.html` was converted into `https://hk.news.yahoo.com/xn--65-q43c84c9a92hp8grphq2u14i5uhd3aq94bo6lkm8c-004959684.html` instead of `https://hk.news.yahoo.com/65%E5%80%8B%E6%8C%87%E6%98%8E%E5%9C%B0%E6%96%B9%E7%B4%8D%E5%85%A5%E5%BC%B7%E5%88%B6%E6%AA%A2%E6%B8%AC%E5%85%AC%E5%91%8A-004959684.html`

## Action Items
Following code does not work as expected. Only the variable was converted instead of the whole URI string. 
```
fs.readdirSync(blogPostDir)

.map((fileName) => {

// we need the full path of the file to be able to read it

const fullPath = path.join(blogPostDir, fileName);

// read the file so we can grab the front matter

const file = fs.readFileSync(fullPath, "utf8");

  

// for the RSS feed we don't need the html, we

// just want the attributes

const { data: frontmatter, content } = matter(file);

const excerpt = getExcerpt(content, 800);

const url = CONFIG.URL + `/posts/` + fileName.replace(".md", "") + `/`;

// console.log(excerpt);

// I want access to the fileName later on so we save it to our object

return { ...frontmatter, fileName, excerpt, url };

})

// sort the items by date in descending order, feel free

// to customize this as needed to sort your RSS items properly

.filter((post) => post.draft === false)

.sort((a, b) => +new Date(b.date) - +new Date(a.date))

// loop over each blog post and add it to our RSS feed

.forEach(({ title, date, tags, category, fileName, excerpt, url }) => {

// title, description, and date are properties of my front matter

// attributes. Yours might be different depending on your data structure

feed.item({

title,

description: excerpt,

url: punycode.encode(url),

author: CONFIG.AUTHOR_NAME,

categories: tags,

date,

});

});
```
