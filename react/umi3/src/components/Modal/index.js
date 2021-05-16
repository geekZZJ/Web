/*
 * @Author: zzj
 * @Date: 2021-05-16 15:16:23
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-16 15:58:42
 * @Description:
 */
import React, { Component } from 'react';
import CreatePortal from '@/components/CreatePortal';
import { Icon } from 'antd-mobile';

const Styles = {
  modal: {
    position: 'relative',
    top: '0',
    left: '0',
    zIndex: '999',
  },
  body: {
    backgroundColor: '#fff',
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    position: 'fixed',
    top: '10px',
    right: '10px',
  },
};

export default class Modal extends Component {
  constructor(props) {
    super(props);
  }

  handleClose = () => {
    const { onClose } = this.props;
    onClose && onClose();
  };

  render() {
    const { show } = this.props;
    return (
      <>
        {show ? (
          <CreatePortal style={Styles.modal}>
            <div style={Styles.body}>
              {this.props.children}
              <Icon
                type="cross"
                size="lg"
                style={Styles.close}
                onClick={this.handleClose}
              ></Icon>
            </div>
          </CreatePortal>
        ) : null}
      </>
    );
  }
}
