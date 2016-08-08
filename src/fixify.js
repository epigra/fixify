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
	measureMaxHeight:function(element,minusValue){

		minusValue = typeof minusValue !== 'undefined' ?  minusValue : 0;

		this.elements = document.querySelectorAll(element);
		
		for (var i = 0, length = this.elements.length; i < length; i++) {
			this.attributes.heights[i] = this.elements[i].clientHeight;
		}

		this.attributes.largeHeight = Math.max.apply(Math, this.attributes.heights)-minusValue;

	},
	matchPadding:function(element,minusValue){

		this.measureMaxHeight(element,minusValue);

		for (var i = 0, length = this.elements.length; i < length; i++) {
			if (this.elements[i].clientHeight != this.attributes.largeHeight) {
				this.attributes.padding = (this.attributes.largeHeight-this.elements[i].clientHeight)/2;
				this.elements[i].style.padding = this.attributes.padding+'px 0px';
			}
		}

		return this

	},
	matchHeight:function(element,minusValue){

		this.measureMaxHeight(element,minusValue);

		for (var i = 0, length = this.elements.length; i < length; i++) {
			if (this.elements[i].clientHeight != this.attributes.largeHeight) {
				this.elements[i].style.height = this.attributes.largeHeight+2+'px';
			}
		}

		return this

	}
}