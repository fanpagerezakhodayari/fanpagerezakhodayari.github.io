var _language = "fa";
var _homeDesList =[];
var newsList = [];
var _singlePage = "";

var now = new Date();
var yearEn = now.getFullYear();
var yearFa = now.toLocaleDateString('fa-IR').substring(0, 4);

function NewsItem(id, innerHTML)
{
    this.id = id;
    this.innerHTML = innerHTML;
}

function showSection(id)
{
    document.querySelectorAll('section').forEach((section) =>
    {
        section.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
    toggleLanguage(_language);
}

function toggleTheme()
{
    var body = document.body;
    var themeButton = document.querySelector('.icon-switch button');
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
    if (body.classList.contains("dark-mode"))
    {
        themeButton.innerHTML = "<img src=\"../content/images/light.png\">"; //"🌞" //"<i class=\"fa fa-sun-o\"></i>";
    }
    else
    {
        themeButton.innerHTML = "<img src=\"../content/images/dark.png\">"; //"🌙"; //"<i class=\"fa fa-moon-o\"></i>";
    }
}

function toggleLanguage(language)
{
    _language = language;
    var body =
    [
        document.getElementsByClassName("container")[0],
        document.getElementsByTagName("footer")[0],
    ];
    const title = document.getElementById("Title");
    const nameFa = document.getElementById("NameFa");
    const nameEn = document.getElementById("NameEn");
    const nameTr = document.getElementById("NameTr");
    const desFa = document.getElementById("DesFa");
    const desEn = document.getElementById("DesEn");
    const desTr = document.getElementById("DesTr");
    const homeMenuFa = document.getElementById("HomeMenuFa");
    const homeMenuEn = document.getElementById("HomeMenuEn");
    const homeMenuTr = document.getElementById("HomeMenuTr");
    const newsMenuFa = document.getElementById("NewsMenuFa");
    const newsMenuEn = document.getElementById("NewsMenuEn");
    const newsMenuTr = document.getElementById("NewsMenuTr");
    const portfolioMenuFa = document.getElementById("PortfolioMenuFa");
    const portfolioMenuEn = document.getElementById("PortfolioMenuEn");
    const portfolioMenuTr = document.getElementById("PortfolioMenuTr");
    const homeHeaderFa = document.getElementById("HomeHeaderFa");
    const homeHeaderEn = document.getElementById("HomeHeaderEn");
    const homeHeaderTr = document.getElementById("HomeHeaderTr");
    const homeDesFa = document.getElementById("HomeDesFa");
    const homeDesEn = document.getElementById("HomeDesEn");
    const homeDesTr = document.getElementById("HomeDesTr");
    const newsHeaderFa = document.getElementById("NewsHeaderFa");
    const newsHeaderEn = document.getElementById("NewsHeaderEn");
    const newsHeaderTr = document.getElementById("NewsHeaderTr");
    const footerFa = document.getElementById("FooterFa");
    const footerEn = document.getElementById("FooterEn");
    const footerTr = document.getElementById("FooterTr");
    const siteMapFa = document.getElementById("SiteMapFa");
    const siteMapEn = document.getElementById("SiteMapEn");
    const siteMapTr = document.getElementById("SiteMapTr");
    const afterYouLeaveFa = document.getElementById("AfterYouLeaveFa");
    const afterYouLeaveEn = document.getElementById("AfterYouLeaveEn");
    const afterYouLeaveTr = document.getElementById("AfterYouLeaveTr");
    const withoutYouFa = document.getElementById("WithoutYouFa");
    const withoutYouEn = document.getElementById("WithoutYouEn");
    const withoutYouTr = document.getElementById("WithoutYouTr");
    const dearUncleFa = document.getElementById("DearUncleFa");
    const dearUncleEn = document.getElementById("DearUncleEn");
    const dearUncleTr = document.getElementById("DearUncleTr");
    const iWillLoveYouFa = document.getElementById("IWillLoveYouFa");
    const iWillLoveYouEn = document.getElementById("IWillLoveYouEn");
    const iWillLoveYouTr = document.getElementById("IWillLoveYouTr");
    const iCanNotGoOnFa = document.getElementById("ICanNotGoOnFa");
    const iCanNotGoOnEn = document.getElementById("ICanNotGoOnEn");
    const iCanNotGoOnTr = document.getElementById("ICanNotGoOnTr");
    const madnessFa = document.getElementById("MadnessFa");
    const madnessEn = document.getElementById("MadnessEn");
    const madnessTr = document.getElementById("MadnessTr");
    const silenceFa = document.getElementById("SilenceFa");
    const silenceEn = document.getElementById("SilenceEn");
    const silenceTr = document.getElementById("SilenceTr");
    const motherSVoicelessScreamFa = document.getElementById("MotherSVoicelessScreamFa");
    const motherSVoicelessScreamEn = document.getElementById("MotherSVoicelessScreamEn");
    const motherSVoicelessScreamTr = document.getElementById("MotherSVoicelessScreamTr");
    const povertyAndWealthFa = document.getElementById("PovertyAndWealthFa");
    const povertyAndWealthEn = document.getElementById("PovertyAndWealthEn");
    const povertyAndWealthTr = document.getElementById("PovertyAndWealthTr");
    const curseOfTheSeaFa = document.getElementById("CurseOfTheSeaFa");
    const curseOfTheSeaEn = document.getElementById("CurseOfTheSeaEn");
    const curseOfTheSeaTr = document.getElementById("CurseOfTheSeaTr");
    const yusufFa = document.getElementById("YusufFa");
    const yusufEn = document.getElementById("YusufEn");
    const yusufTr = document.getElementById("YusufTr");
    const untitledportfolios = document.querySelectorAll('[id^="Untitled"]');

    var newsItems = [
        document.querySelectorAll('.NewsTitleFa'),
        document.querySelectorAll('.NewsTitleEn'),
        document.querySelectorAll('.NewsTitleTr'),
        document.querySelectorAll('.NewsContentFa'),
        document.querySelectorAll('.NewsContentEn'),    
        document.querySelectorAll('.NewsContentTr'),
    ];

    if (language == "fa")
    {
        title.textContent = "رضا خدایاری گوینده و دوبلور";
        nameFa.textContent = "رضا خدایاری";
        nameEn.textContent = "";
        nameTr.textContent = "";
        desFa.textContent = "گوینده و دوبلور";
        desEn.textContent = "";
        desTr.textContent = "";
        homeMenuFa.textContent = "خانه";
        homeMenuEn.textContent = "";
        homeMenuTr.textContent = "";
        newsMenuFa.textContent = "اخبار";
        newsMenuEn.textContent = "";
        newsMenuTr.textContent = "";
        portfolioMenuFa.textContent = "نمونه کار";
        portfolioMenuEn.textContent = "";
        portfolioMenuTr.textContent = "";
        homeHeaderFa.textContent = "بیوگرافی رضا خدایاری :";
        homeHeaderEn.textContent = "";
        homeHeaderTr.textContent = "";
        homeDesFa.innerHTML = _homeDesList[0];
        homeDesEn.innerHTML = "";
        homeDesTr.innerHTML = "";
        newsHeaderFa.textContent = "اخبار :";
        newsHeaderEn.textContent = "";
        newsHeaderTr.textContent = "";
        footerFa.textContent = "فن پیج رضا خدایاری گوینده و دوبلر";
        footerEn.textContent = "";
        footerTr.textContent = "";
        siteMapFa.textContent = "نقشه سایت";
        siteMapEn.textContent = "";
        siteMapTr.textContent = "";
        afterYouLeaveFa.textContent = "بعد از رفتنت";
        afterYouLeaveEn.textContent = "";
        afterYouLeaveTr.textContent = "";
        withoutYouFa.textContent = "بی تو";
        withoutYouEn.textContent = "";
        withoutYouTr.textContent = "";
        dearUncleFa.textContent = "دایی جان";
        dearUncleEn.textContent = "";
        dearUncleTr.textContent = "";
        iWillLoveYouFa.textContent = "دوستت خواهم داشت";
        iWillLoveYouEn.textContent = "";
        iWillLoveYouTr.textContent = "";
        iCanNotGoOnFa.textContent = "دیگر نمیتوانم";
        iCanNotGoOnEn.textContent = "";
        iCanNotGoOnTr.textContent = "";
        madnessFa.textContent = "دیوانگی";
        madnessEn.textContent = "";
        madnessTr.textContent = "";
        silenceFa.textContent = "سکوت";
        silenceEn.textContent = "";
        silenceTr.textContent = "";
        motherSVoicelessScreamFa.textContent = "فریاد بی صدای مادر";
        motherSVoicelessScreamFa.textContent = "";
        motherSVoicelessScreamTr.textContent = "";
        povertyAndWealthFa.textContent = "فقر و ثروت";
        povertyAndWealthEn.textContent = "";
        povertyAndWealthTr.textContent = "";
        curseOfTheSeaFa.textContent = "نفرین دریا";
        curseOfTheSeaEn.textContent = "";
        curseOfTheSeaTr.textContent = "";
        yusufFa.textContent = "یوسف";
        yusufEn.textContent = "";
        yusufTr.textContent = "";
    }
    else if (language == "en")
    {
        title.textContent = "Reza Khodayari Voiceover and Dubbing";
        nameFa.textContent = "";
        nameEn.textContent = "Reza Khodayari";
        nameTr.textContent = "";
        desFa.textContent = "";
        desEn.textContent = "Announcer and doubler";
        desTr.textContent = "";
        homeMenuFa.textContent = "";
        homeMenuEn.textContent = "Home";
        homeMenuTr.textContent = "";
        newsMenuFa.textContent = "";
        newsMenuEn.textContent = "News";
        newsMenuTr.textContent = "";
        portfolioMenuFa.textContent = "";
        portfolioMenuEn.textContent = "Portfolio";
        portfolioMenuTr.textContent = "";
        homeHeaderFa.textContent = "";
        homeHeaderEn.textContent = "Biography of Reza Khodayari :";
        homeHeaderTr.textContent = "";
        homeDesFa.innerHTML = "";
        homeDesEn.innerHTML = _homeDesList[1];
        homeDesTr.innerHTML = "";
        newsHeaderFa.textContent = "";
        newsHeaderEn.textContent = "News :";
        newsHeaderTr.textContent = "";
        footerFa.textContent = "";
        footerEn.textContent = "Reza Khodayari Voiceover and Dubbing Fan Page";
        footerTr.textContent = "";
        siteMapFa.textContent = "";
        siteMapEn.textContent = "Site Map";
        siteMapTr.textContent = "";
        afterYouLeaveFa.textContent = "";
        afterYouLeaveEn.textContent = "After you leave";
        afterYouLeaveTr.textContent = "";
        withoutYouFa.textContent = "";
        withoutYouEn.textContent = "Without you";
        withoutYouTr.textContent = "";
        dearUncleFa.textContent = "";
        dearUncleEn.textContent = "Dear Uncle";
        dearUncleTr.textContent = "";
        iWillLoveYouFa.textContent = "";
        iWillLoveYouEn.textContent = "I will love you";
        iWillLoveYouTr.textContent = "";
        iCanNotGoOnFa.textContent = "";
        iCanNotGoOnEn.textContent = "I can not go on";
        iCanNotGoOnTr.textContent = "";
        madnessFa.textContent = "";
        madnessEn.textContent = "Madness";
        madnessTr.textContent = "";
        silenceFa.textContent = "";
        silenceEn.textContent = "Silence";
        silenceTr.textContent = "";
        motherSVoicelessScreamFa.textContent = "";
        motherSVoicelessScreamEn.textContent = "Mother's voiceless scream";
        motherSVoicelessScreamTr.textContent = "";
        povertyAndWealthFa.textContent = "";
        povertyAndWealthEn.textContent = "Poverty and wealth";
        povertyAndWealthTr.textContent = "";
        curseOfTheSeaFa.textContent = "";
        curseOfTheSeaEn.textContent = "Curse of the sea";
        curseOfTheSeaTr.textContent = "";
        yusufFa.textContent = "";
        yusufEn.textContent = "Joseph";
        yusufTr.textContent = "";
    }
    else if (language == "tr")
    {
        title.textContent = "Reza Khodayari Seslendirme ve Dublaj";
        nameFa.textContent = "";
        nameEn.textContent = "";
        nameTr.textContent = "Reza Khodayari";
        desFa.textContent = "";
        desEn.textContent = "";
        desTr.textContent = "Spiker ve çoğaltıcı";
        homeMenuFa.textContent = "";
        homeMenuEn.textContent = "";
        homeMenuTr.textContent = "Ev";
        newsMenuFa.textContent = "";
        newsMenuEn.textContent = "";
        newsMenuTr.textContent = "Haberler";
        portfolioMenuFa.textContent = "";
        portfolioMenuEn.textContent = "";
        portfolioMenuTr.textContent = "Portföy";
        homeHeaderFa.textContent = "";
        homeHeaderEn.textContent = "";
        homeHeaderTr.textContent = "Reza Khodayari'nin Biyografisi :";
        homeDesFa.innerHTML = "";
        homeDesEn.innerHTML = "";
        homeDesTr.innerHTML = _homeDesList[2];
        newsHeaderFa.textContent = "";
        newsHeaderEn.textContent = "";
        newsHeaderTr.textContent = "Haberler :";
        footerFa.textContent = "";
        footerEn.textContent = "";
        footerTr.textContent = "Reza Khodayari Seslendirme ve Dublaj Hayran Sayfası";
        siteMapFa.textContent = "";
        siteMapEn.textContent = "";
        siteMapTr.textContent = "Site Haritası";
        afterYouLeaveFa.textContent = "";
        afterYouLeaveEn.textContent = "";
        afterYouLeaveTr.textContent = "Sen gittikten sonra";
        withoutYouFa.textContent = "";
        withoutYouEn.textContent = "";
        withoutYouTr.textContent = "Sensiz";
        dearUncleFa.textContent = "";
        dearUncleEn.textContent = "";
        dearUncleTr.textContent = "Sevgili amca";
        iWillLoveYouFa.textContent = "";
        iWillLoveYouEn.textContent = "";
        iWillLoveYouTr.textContent = "Seni seveceğim";
        iCanNotGoOnFa.textContent = "";
        iCanNotGoOnEn.textContent = "";
        iCanNotGoOnTr.textContent = "Devam edemem";
        madnessFa.textContent = "";
        madnessEn.textContent = "";
        madnessTr.textContent = "Delilik";
        silenceFa.textContent = "";
        silenceEn.textContent = "";
        silenceTr.textContent = "Sessizlik";
        motherSVoicelessScreamFa.textContent = "";
        motherSVoicelessScreamEn.textContent = "";
        motherSVoicelessScreamTr.textContent = "Annenin sessiz çığlığı";
        povertyAndWealthFa.textContent = "";
        povertyAndWealthEn.textContent = "";
        povertyAndWealthTr.textContent = "Yoksulluk ve zenginlik";
        curseOfTheSeaFa.textContent = "";
        curseOfTheSeaEn.textContent = "";
        curseOfTheSeaTr.textContent = "Denizin laneti";
        yusufFa.textContent = "";
        yusufEn.textContent = "";
        yusufTr.textContent = "Yusuf";
    }

    newsItems.forEach(function(divs)
    {
        divs.forEach(function(div)
        {
            if(div.id)
            {
                var itemFromList = findNewsItemById(div.id);
                if(itemFromList != null)
                {
                    if (div.id.toLowerCase().includes(language + "_"))
                    {
                        div.innerHTML = itemFromList.innerHTML;
                    }
                    else
                    {
                        div.innerHTML = "";
                    }
                }
            }
        });
    });

    untitledportfolios.forEach(untitledportfolio =>
        {
            if (untitledportfolio.id.toLocaleLowerCase().endsWith(language))
            {
                if (language == 'fa')
                {
                    untitledportfolio.textContent = "بدون عنوان";
                }
                else if (language == 'en')
                {
                    untitledportfolio.textContent = "Untitled";
                }
                else if (language == 'tr')
                {
                    untitledportfolio.textContent = "İsimsiz";
                }
            }
            else
            {
                untitledportfolio.textContent = "";
            }
        });

    body.forEach(element =>
        {
            if (language == "fa")
            {
                element.style.direction = "rtl";
            }
            else
            {
                element.style.direction = "ltr";
            }
        });
}

window.onload = function()
{
    checkHash();
};

window.onhashchange = function()
{
    checkHash();
};

function checkHash()
{
    SaveContents();
    var hash = window.location.hash.slice(1);
    if (hash.length == 0)
    {
        hash = "home:" + _language;
    }
    var parts = hash.split(':');
    if (parts.length == 1)
    {
        parts = (hash + ":" + _language).split(':');
    }
    var section = parts[0];
    var language = parts[1];
    showSection(section);
    toggleLanguage(language);
    document.getElementById("FooterDate").textContent = " - " + yearEn + " - " + yearFa;
}

function SaveContents()
{
    var homeDesFa = document.getElementById("HomeDesFa");
    var homeDesEn = document.getElementById("HomeDesEn");
    var homeDesTr = document.getElementById("HomeDesTr");
    var newsItems = [
        document.querySelectorAll('.NewsTitleFa'),
        document.querySelectorAll('.NewsTitleEn'),
        document.querySelectorAll('.NewsTitleTr'),
        document.querySelectorAll('.NewsContentFa'),
        document.querySelectorAll('.NewsContentEn'),    
        document.querySelectorAll('.NewsContentTr'),
    ];

    if (homeDesFa.innerHTML != "")
    {
        _homeDesList[0] = homeDesFa.innerHTML;
        homeDesFa.innerHTML = "";
    }

    if (homeDesEn.innerHTML != "")
    {
        _homeDesList[1] = homeDesEn.innerHTML;
        homeDesEn.innerHTML = "";
    }
    
    if (homeDesTr.innerHTML != "")
    {
        _homeDesList[2] = homeDesTr.innerHTML;
        homeDesTr.innerHTML = "";
    }

    newsItems.forEach(function(divs)
    {
        divs.forEach(function(div)
        {
            if(div.id && findNewsItemById(div.id) == null && div.innerHTML != "")
            {
                var newsItem = new NewsItem(div.id, div.innerHTML);
                newsList.push(newsItem);
                div.innerHTML = "";
            }
        });
    });
}

function findNewsItemById(id)
{
    return newsList.find(function(newsItem)
    {
        return newsItem.id === id;
    }) || null;
}

function openVideo(videoSrc, singlePage)
  {
    document.getElementById('videoPlayer').src = '..\\content\\video\\' + videoSrc;
    document.getElementById('popup').style.display = 'flex';
    _singlePage = 'portfolio\\' + singlePage + '.html';
  }

  function closePopup()
  {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('videoPlayer').src = '';
  }

  function openPortfolio()
  {
    window.open(_singlePage, "_blank");
  }