
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity
} from 'react-native';

// 利用modal实现弹窗
export default class MyDatePick extends Component {
  state={
    date:[4.18,4.19]
  }
  render() {
    return (
      <Modal style={styles.container}
        transparent={true}
        visible={this.props.visible}
        onRequestClose={() => {
          this.props.cancel()
        }}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => { this.props.cancel() }}>
          <View style={styles.dialogContainer}>
            <View style={styles.innerContainer}>
              <TouchableOpacity onPress={() => { this.props.confirm() }}>
                <Text style={{fontSize:15,borderBottomWidth:1,borderBottomColor:'#333333',height:25}}>4.18</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { this.props.confirm(this.state.date) }}>
                <Text style={{fontSize:15,borderBottomWidth:1,borderBottomColor:'#333333',height:25}}>4.19</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { this.props.confirm() }}>
                <Text style={{fontSize:15,borderBottomWidth:1,borderBottomColor:'#333333',height:25}}>4.20</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { this.props.confirm() }}>
                <Text style={{fontSize:15,borderBottomWidth:1,borderBottomColor:'#333333',height:25}}>4.21</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { this.props.confirm() }}>
                <Text style={{fontSize:15,borderBottomWidth:1,borderBottomColor:'#333333',height:25}}>4.22</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { this.props.confirm() }}>
                <Text style={{fontSize:15,borderBottomWidth:1,borderBottomColor:'#333333',height:25}}>4.23</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // 半透明背景
  dialogContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  // 弹窗区域
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    marginTop:140,
    marginLeft:20,
    paddingTop:7,
    width: 71,
    height: 166
  },
  // 文本区域
  contentContainer: {
    flex: 1,
    width: 270,
    height: 75,
    flexDirection: 'row',
    position: "absolute",
    top: 0,
    borderTopColor: '#cccccc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  // 文本样式
  dialogContentTextStyle: {
    fontSize: 16,
    color: '#333333',
    marginLeft: 25,
    marginRight: 25
  },
  // 按钮区域
  btnContainer: {
    flex: 1,
    width: 270,
    height: 85,
    flexDirection: 'row',
    position: "absolute",
    bottom: 0,
    alignItems: 'center',
  },
  // 按钮样式
  dialogConfirmButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    borderLeftColor: '#cccccc',
    borderLeftWidth: 1
  },
  dialogCancelButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    borderRightColor: '#cccccc'
  },
  // 按钮文本
  hidemodalTxt: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 16,
    padding: 8,
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: '#00cb88',
    color: '#ffffff',
    borderRadius: 10
  },
});