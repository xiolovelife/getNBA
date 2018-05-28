var HOST = "http://localhost:8080";	//当服务运行在本地时的地址，若在外部服务器请修改
var timeInterval,
	loadIndex;

$(function() {
	loading();
	getNBAToday();
	timeInterval = setInterval("getNBAToday()",3500);
});

function loading(){
	loadIndex = layer.load(1);
}

function getNBAToday(){
	$.ajax({
		type: 'GET',
		contentType: 'application/x-www-form-urlen',
		url: HOST + '/nba/today',
		success: function(data) {

			if( data.code == "1" ){
				
				var html = '';
				var games = data.games;
				
				for( var i in games ){
					var awayHtml = setTeam(games[i].awayTeam);			//设置客场球队
					var boxscoreHtml = setBoxscore(games[i].boxscore);		//比赛信息
					var homeHtml = setTeam(games[i].homeTeam,);			//主场球队
					html += '<div class="gameLine">' + awayHtml + boxscoreHtml + homeHtml + '</div><div class="clear"></div>';
				}
				closeLoad();
				$("#mainBody").empty();
				$("#mainBody").append( html );
			}else{
				stop();
				layer.msg("服务异常");
				window.close();
			}
		},
		error: function(e) {
			stop();
			layer.msg("服务异常");
			window.close();
		}
	});
}


function setBoxscore(boxscore){

	var statusDesc = boxscore.statusDesc;	//比赛状态
	var periodClock = boxscore.periodClock;	//第几节时间
	var homeScore = boxscore.homeScore;		//主场队伍比分
	var awayScore = boxscore.awayScore;		//客场队伍比分
	var seriesText = boxscore.seriesText;	//总比分
	
	var awayWin = "",
		homeWin = "";
	
	if( awayScore > homeScore ){
		awayWin = "win";
	}else if( homeScore > awayScore ){
		homeWin = "win";
	}
	
	var html = '<div class="centerBlock">' + 
					'<div><h1><span class="'+awayWin+'">'+awayScore+'</span> - <span class="'+homeWin+'">'+homeScore+'</span></h1></div>' +
					'<div class="tips">'+statusDesc+periodClock+'</div>' +
					'<div class="tips">'+seriesText+'</div>' +
				'</div>';
				
	if( statusDesc == "结束" ){
		stop();
	}

	return html;
}


function setTeam(team){
	var logoUrl = team.logoUrl;
	var name = team.name;
	var html = '<div class="block"><div class="imgDiv"><img src="'+logoUrl+'"></div><p>'+name+'</p></div>'
	
	return html;
}

//关闭Layer loading
function closeLoad(){
	if( loadIndex != 'isClose' ){
		layer.close(loadIndex);
		loadIndex = 'isClose';
	}
}

//停止定时访问
function stop(){
	clearInterval(timeInterval);	
}
