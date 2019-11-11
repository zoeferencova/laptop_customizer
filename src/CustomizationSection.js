import React from 'react';
import CustomizationItem from './CustomizationItem';
import './index.css';
import slugify from 'slugify';

export default class CustomizationSection extends React.Component {
	render() {
		const features = Object.keys(this.props.features).map((feature, idx) => {
	      const featureHash = feature + '-' + idx;

	      return (
	      	<CustomizationItem 
	      		featureHash={featureHash} 
	      		feature={feature} 
	      		features={this.props.features}
	      		selected={this.props.selected}
	      		usCurrency={this.props.usCurrency}
	      		handleFeatureUpdate={this.props.handleFeatureUpdate} />
	      );
	    });
		
		return (
	    	<form className="main__form">
	            <h2>Customize your laptop</h2>
	            {features}
	        </form>
	    )
	}
}