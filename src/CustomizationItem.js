import React from 'react';
import './index.css';
import slugify from 'slugify';
import CustomizationOption from './CustomizationOption'


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default class CustomizationItem extends React.Component {
	render() {
		const options = this.props.features[this.props.feature].map((item) => {
	        const itemHash = slugify(JSON.stringify(item));
	        return (
	        	<CustomizationOption 
	        		feature={this.props.feature} 
		      		features={this.props.features}
		      		selected={this.props.selected}
		      		usCurrency={this.props.usCurrency}
		      		handleFeatureUpdate={this.props.handleFeatureUpdate}
		      		item={item}
		      		itemHash={itemHash} />
	        );
	     });

		return(
			<fieldset className="feature" key={this.props.featureHash}>
	          <legend className="feature__name">
	            <h3>{this.props.feature}</h3>
	          </legend>
	          {options}
	        </fieldset>
		)
	}
}
