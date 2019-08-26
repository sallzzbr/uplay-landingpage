$.getJSON( "../data.json", function( data ) {

    for(var i = 0; i < data.youtubers.length; i++){
        $(".youtubers").append(HTMLyoutuberBanner);
        var youtuberLink = HTMLyoutuberAnchor.replace("%data%", data.youtubers[i].link);
        $(".youtube-banner:last").append(youtuberLink);
        var youtuberImage = HTMLyoutuberImg.replace("%data%", data.youtubers[i].image);
        $(".youtube-anchor:last").append(youtuberImage);
    }

    for(var i = 0; i < data.games.length; i++){
        $(".games").append(HTMLgamesBanner);
        var gamesLink = HTMLgamesAnchor.replace("%data%", data.games[i].link);
        $(".games-banner:last").append(gamesLink);
        var gamesImage = HTMLgamesImg.replace("%data%", data.games[i].image);
        $(".games-anchor:last").append(gamesImage);
    }

    for(var i = 0; i < data.podcasts.length; i++){
        $(".podcasts").append(HTMLpodcastsBanner);
        var podcastsLink = HTMLpodcastsAnchor.replace("%data%", data.podcasts[i].link);
        $(".podcasts-banner:last").append(podcastsLink);
        var podcastsImage = HTMLpodcastsImg.replace("%data%", data.podcasts[i].image);
        $(".podcasts-anchor:last").append(podcastsImage);
    }

    for(var i = 0; i < data.tvSeries.length; i++){
        $(".tvseries").append(HTMLtvseriesBanner);
        var tvseriesLink = HTMLtvseriesAnchor.replace("%data%", data.tvSeries[i].link);
        $(".tvseries-banner:last").append(tvseriesLink);
        var tvseriesImage = HTMLtvseriesImg.replace("%data%", data.tvSeries[i].image);
        $(".tvseries-anchor:last").append(tvseriesImage);
    }

});