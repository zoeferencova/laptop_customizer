import React from 'react';
import './index.css'
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default class CustomizationOption extends React.Component {
	render() {
		return(
			<div key={this.props.itemHash} className="feature__item">
	            <input
	              type="radio"
	              id={this.props.itemHash}
	              className="feature__option"
	              name={slugify(this.props.feature)}
	              checked={this.props.item.name === this.props.selected[this.props.feature].name}
	              onChange={e => this.props.handleFeatureUpdate(this.props.feature, this.props.item)}
	            />
	            <label htmlFor={this.props.itemHash} className="feature__label">
	              {this.props.item.name} ({this.props.usCurrency.format(this.props.item.cost)})
	            </label>
	        </div>
		)
	}
}