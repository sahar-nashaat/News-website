var responseBodyRow = document.querySelector("#responseData")
var httpClient = new XMLHttpRequest();
httpClient.open("get","https://newsapi.org/v2/top-headlines?country=us&apiKey=5f075c6265a34a898348784ff69257fc")
httpClient.send()
console.log(httpClient.response)
var responseBody = {}
var articles = []

var mainArticle = document.querySelector('#mainArticle')
var subMainArticles = document.querySelector('#subMainArticles')
var recentNewsContainer = document.querySelector('#recentNewsContainer')

httpClient.addEventListener('readystatechange', function(){
    if(httpClient.readyState == 4)
    {
        responseBody = (JSON.parse(httpClient.response))
        articles = responseBody.articles
        showMainArticles()
        showsubMainArticles()
        showRecentArticles()

    }
})
var articlesContainer = ""

var mainArticleBody = ""
var subMainArticleBody = ""
var recentNewsContainerBody = ""

function showMainArticles(){
    mainArticleBody += `
    <div class=" col-lg-9">
    <div class="binduz-er-editors-pack-thumb p-3">
        <img src="${articles[0].urlToImage}" alt="">
    </div>
</div>
<!-- Single Main Colomn -->
<div class=" col-lg-3">
    <div class="binduz-er-editors-pack-content">
        <div class="binduz-er-meta-item">
            <div class="binduz-er-meta-categories">
                <a href="#">Technology</a>
            </div>
            <div class="binduz-er-meta-date">
                <span><i class="fal fa-calendar-alt"></i>${articles[0].publishedAt}</span>
            </div>
        </div>
        <h4 class="binduz-er-title"><a href="#">${articles[0].title}</a></h4>
        <div class="binduz-er-meta-author">
            <div class="binduz-er-author">
                <img src="assets/images/user-2.png" alt="">
                <span>By <span>${articles[0].author}</span></span>
            </div>
        </div>
    </div>
</div>
</div>
    `
    mainArticle.innerHTML = mainArticleBody
    }
function showsubMainArticles(){
    for (var i = 1 ; i < 5 ; i++)
        {
            subMainArticleBody += `
            <div class=" col-lg-3 col-md-6">
            <div class="binduz-er-video-post binduz-er-recently-viewed-item">
                <div class="binduz-er-latest-news-item">
                    <div class="binduz-er-thumb">
                        <img src="${articles[i].urlToImage}" alt="">
                    </div>
                    <div class="binduz-er-content">
                        <div class="binduz-er-meta-item">
                            <div class="binduz-er-meta-categories">
                                <a href="#">Technology</a>
                            </div>
                            <div class="binduz-er-meta-date">
                                <span><i class="fal fa-calendar-alt"></i>${articles[i].publishedAt}</span>
                            </div>
                        </div>
                        <h5 class="binduz-er-title"><a href="#">${articles[i].title}</a></h5>
                        <div class="binduz-er-meta-author">
                            <span>By <span>${articles[i].author}</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `
        }
        subMainArticles.innerHTML = subMainArticleBody

    }
function showRecentArticles(){
    for (var i = 6 ; i < articles.length ; i++)
        {
            recentNewsContainerBody += `
            <div class="binduz-er-recent-news-item mb-20">
            <div class="binduz-er-thumb">
                <img src="${articles[i].urlToImage}" alt="">
            </div>
            <div class="binduz-er-content">
                <div class="binduz-er-meta-item">
                    <div class="binduz-er-meta-categories">
                        <a href="#">Technology</a>
                    </div>
                    <div class="binduz-er-meta-date">
                        <span><i class="fal fa-calendar-alt"></i>${articles[i].publishedAt}</span>
                    </div>
                </div>
                <h5 class="binduz-er-title"><a href="#">${articles[i].title}</a></h5>
                <p>${articles[i].content}</p>
            </div>
    </div>
            `
        }
        recentNewsContainer.innerHTML = recentNewsContainerBody
    }