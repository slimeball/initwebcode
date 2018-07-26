class domMethod {
	constructor(x, y){
		this.x = x;
		this.y = y;
	}
	getDom (dom) {
		return document.querySelector(dom);
	}
}

export domMethod;