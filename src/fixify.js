/**
 * Fixify is a irregular elements padding and height value equalizer.
 * @author : Mucahit Tutuncu at Epigra
 */
var Fixify = {
	attributes : {
		elements:'',
		heights:[],
		largeHeight:0,
		padding:0,
	},
	measureMaxHeight:function(element){

		this.elements = document.querySelectorAll(element);
		
		for (var i = 0, length = this.elements.length; i < length; i++) {
			this.attributes.heights[i] = this.elements[i].clientHeight;
		}

		this.attributes.largeHeight = Math.max.apply(Math, this.attributes.heights);

	},
	matchPadding:function(element){

		this.measureMaxHeight(element);

		for (var i = 0, length = this.elements.length; i < length; i++) {
			if (this.elements[i].clientHeight != this.attributes.largeHeight) {
				this.attributes.padding = (this.attributes.largeHeight-this.elements[i].clientHeight)/2;
				this.elements[i].style.padding = this.attributes.padding+'px 0px';
			}
		}

	},
	matchHeight:function(element){

		this.measureMaxHeight(element);

		for (var i = 0, length = this.elements.length; i < length; i++) {
			if (this.elements[i].clientHeight != this.attributes.largeHeight) {
				this.elements[i].style.height = this.attributes.largeHeight+2+'px';
			}
		}

	}
}