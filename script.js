$(document).on('click', function() {
	if($('.video-extras-sparkbar-neutral').length == 0) {
		setTimeout(function() {
			var views_str = $('.watch-view-count').text();
			var views = Number(views_str.substring(0, views_str.length - 10).replace(/\s+/g, ''));
			var likes = Number($('.like-button-renderer-like-button-unclicked .yt-uix-button-content').text().replace(/\s+/g, ''));
			var dislikes = Number($('.like-button-renderer-dislike-button-unclicked .yt-uix-button-content').text().replace(/\s+/g, ''));
			
			$('.video-extras-sparkbar-likes').css('width', (likes / views) * 300 + '%');
			$('.video-extras-sparkbar-likes').after('<div class="video-extras-sparkbar-neutral"></div>');
			$('.video-extras-sparkbar-neutral').css('width', ((views - (likes + dislikes) * 3) / views) * 100 + '%');
			$('.video-extras-sparkbar-dislikes').css('width', (dislikes / views) * 300 + '%');
		}, 1000);
	}
});