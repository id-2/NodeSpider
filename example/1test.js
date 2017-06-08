const NodeSpider = require("nodespider");
const n = new NodeSpider({
    maxC: 30,
});

const getNews = n.plan((err, current) => {
    if (err) {
        return getNews.retry(current, 3);
    }
    const $ = current.$;
    n.save({title = $("title").text()});
    $("a").forEach(() => {
        n.queue(getNewsPlan, $(this).url());
        n.download($(this).src());
        $(this).queue();
        $(this).queue(getNews);
        $(this).download();
        $(this).downloadSrc(downPlan);
    });
});

const userJsonSave = n.table(NodeSpider.saveAsJson("/user.json", 4));
const getPicture = n.Stragter({
    request: {
        cookies: "khkhkjnknkjbbkbjhbjv",
    },
    use: [
        NodeSpider.decode("utf8"),
        NodeSpider.loadJq(),
        NodeSpider.plantform({
            someOpts: true,
        }),
    ],
    rule: (err, current) => {
        userJson.save({
            name: $("a").text(),
        });
        downloadAndCompress($("#targetFile").url());
        return null;
    },
});

getNews("http://www.baidu.com", {
    path: "skdlfjskljfkls",
});

const downloadAndCompress = n.download({
    middle: [
        NodeSpider.Compress(),
    ],
    pathToSave: "",
});

const downloadImg = n.downloadPlan({
    path: "xx/",
});

const userInfo = n.pipe(NodeSpider.txtPipe({
    path: "/x/my.json",
    tags: 4,
}));

const s = new NodeSpider();
const dl = s.downloadStarget();
dl(data);
