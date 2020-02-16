var http = require('http');
var Promise  = require('bluebird')
var cheerio = require('cheerio');
var baseUrl = 'http://www.imooc.com/learn/';
var videoIds = [348,259,197,134,75]

var courseData = {
	title:title,
	number:number,
	videos:[]
};
function filterChapters(html){
	var $ = cheerio.load(html);
	var chapters = $('.chapter');
	var title = $('.course-infos .pr .path a span').text();
	var number = parseInt($($('.statics .static-item')[2]).text(),10)

	// courseData ={
	// 	title:title,
	// 	number:number,
	// 	videos:[{
	// 		chapterTitle: '',
	// 		video: [
	// 			title: '',
	// 			id: ''
	// 		]
	// 	}]
	// }
	
	

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

function printCourseInfo(coursesData){
	coursesData.forEach(function(courseData){
		console.log(coursesData.number + '人学过' + courseData.title + '\n')
	})
	courseData.forEach(function(coursesData){
		console.log('###' + courseData.title + '\n')
		courseData.forEach(function(item){
			var chapterTitle = item.chapterTitle;
			console.log(chapterTitle+'\n');	
			item.video.forEach(function(video){
				console.log('['+video.id+']'+video.title+'\n');
			})	
		})
	})
}

function getPageAsync(url){
	return new Promise(function(resolve,reject){
		console.log('正在爬取'+url)
	})

	http.get(url,function(res){
		var html = '';

		res.on('data',function(data){
			html += data;
		})

		res.on('end',function(){
			resolve(html)
			// var courseData = filterChapters(html);
			// printCourseInfo(courseData);
		})
	}).on('error',function(e){
		reject(e)
		console.log('获取课程数据出错');
	})
}

var fetchCourseArray = []

videoIds.forEach(function(id){
	fetchCourseArray.push(getPageAsync(baseUrl + id))
})

Promise.all(fetchCourseArray).then(function(pages){
	var courseData = []
	pages.forEach(function(html){
		var courses = filterChapters(html);
		courseData.push(courses)
	})
	courseData.sort(function(a,b){
		return a.number<b.number
	})
})