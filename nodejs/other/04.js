var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/348';

var courseData = [];
function filterChapters(html){
	var $ = cheerio.load(html);
	var chapters = $('.chapter');

	// [{
	// 	chapterTitle: '',
	// 	video: [
	// 		title: '',
	// 		id: ''
	// 	]
	// }]
	// 
	

	chapters.each(function(item){
		var chapter = $(this);
		var chapterTitle = chapter.find('h3').text();
		var video = chapter.find('.video').children('li');
		var chapterData = {
			chapterTitle : chapterTitle,
			video : []
		}

		video.each(function(item){
			var video = $(this).find('.J-media-item');
			var videoTitle = video.text();
			var id = video.attr('href').split('video/')[1];

			chapterData.video.push({
				title : videoTitle,
				id : id
			})
		});
		courseData.push(chapterData);
	});
	return courseData;

}

function printCourseInfo(course){
	courseData.forEach(function(item){
		var chapterTitle = item.chapterTitle;
		console.log(chapterTitle+'\n');

		item.video.forEach(function(video){
			console.log('['+video.id+']'+video.title+'\n');
		})
	})
}

http.get(url,function(res){
	var html = '';

	res.on('data',function(data){
		html += data;
	})

	res.on('end',function(){
		var courseData = filterChapters(html);
		printCourseInfo(courseData);
	})
}).on('error',function(){
	console.log('获取课程数据出错');
})