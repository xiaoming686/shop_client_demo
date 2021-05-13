import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import OtherOrderItem from '../../components/OtherOrderItem'

export default class HistoryOrder extends Component {
  state = {
    historyorder: [{ a: 1, b: 2 }, { a: 3, b: 4 }, { a: 5, b: 4 }, { a: 7, b: 4 },{ a: 7, b: 4 }]
  }
  render() {
    return (
      <ScrollView>
        {
          this.state.historyorder.map((item) => {
            return (
              <View>
                <OtherOrderItem props={this.props} num={item.a} tomorrow={true} cancel={item.b}></OtherOrderItem>
              </View>
            )
          })
        }
      </ScrollView>
    )
  }
}
