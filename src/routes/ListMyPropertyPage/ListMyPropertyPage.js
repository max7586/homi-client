import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import ListMyPropertyForm from '../../components/ListMyPropertyForm/ListMyPropertyForm'
import './ListMyPropertyPage.css'

export default class ListMyPropertyPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleAddPropertySuccess = property => {
    const { history } = this.props

    history.push('/properties')

  }

  render() {
    return (
      <Section className='ListMyPropertyPage'>

        <h2 className="ListMyPropertyPage__header">Add Property </h2>
        <p>Selling or renting your property is NOT complicated anymore</p>
        <ListMyPropertyForm
        onAddPropertySuccess={this.handleAddPropertySuccess}
        />
      </Section>
    )
  }
}
