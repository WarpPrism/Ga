require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

var imageDatas = require('../data/imageDatas.json');

imageDatas = (function genImageUrl(imageDatasArr) {
	for (var i = 0; i < imageDatasArr.length; i++) {
		var singleImgData = imageDatasArr[i];

		singleImgData.imgURL = require('../images/' + singleImgData.fileName);

		imageDatasArr[i] = singleImgData;
	}

	return imageDatasArr;
})(imageDatas);


class AppComponent extends React.Component {
  render() {
    return (
    	<section className="stage">
    		<section className="img-sec"></section>
    		<nav className="controller-nav"></nav>
    	</section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
