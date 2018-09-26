//碰撞检测
function momFruitsCollision(){
	for (var i = 0; i < fruit.num; i++) {
		if (fruit.alive[i]) {
			var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
			if (l < 999) {
				fruit.dead(i);
				data.fruitNum ++;
				mom.momBodyCount++;
				if (mom.momBodyCount > 7) {
					mom.momBodyCount = 7;
				}
				if (fruit.fruitType[i] == "blue") {
					data.double = 2
				}
			}
		}
	}
}

function momBabyCollision(){
	var l = calLength2(mom.x,mom.y,baby.x,baby.y);
	if (l < 900) {
		baby.babyBodyCount = 0;
		data.reset();
		mom.momBodyCount = 0;
	}
}